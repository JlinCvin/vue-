<template>
	<div>
		<headers-nav isFixed>
			<div slot="suffix">
				<div class="home-header-user-info">
					<div class="user-icon">
						<el-avatar :size="35" circle
								   fit="cover"
								   src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
					</div>
					<div class="margin-left-10">
						<span>欢迎您，{{ userInfo.name || userInfo.mobile || '-' }}</span>
					</div>
					<div class="margin-left-10">
						<span class="cursor-pointer" @click="logout">退出登录</span>
					</div>
				</div>
			</div>
		</headers-nav>
		<div class="main-content-box">
			<div class="main-content">
				<transition name="el-fade-in-linear" mode="out-in">
					<router-view />
				</transition>
			</div>
		</div>
		<footers />
		<update-mobile ref="updateMobile"></update-mobile>
	</div>
</template>

<script>
	const HeadersNav = () => import('_c/HeadersNav');
	const Footers = () => import('_c/Footers');
	const UpdateMobile = () => import("@/view/Common/UpdateMobile");
	import { mapActions } from 'vuex'
	export default {
		name: "Main",
		components: {
			HeadersNav,
			Footers,
			UpdateMobile
		},
		computed: {
			userInfo() {
				if(!!this.$store.state.user.userInfo && !!this.$store.state.user.userInfo.mobile) {
					return this.$store.state.user.userInfo;
				} else {
					let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
					this.$store.commit('setUserInfo', userInfo);
					return userInfo || {};
				}
			},
			allianceInfo() {
				if(!!this.$store.state.user.allianceInfo.allianceName) {
					return this.$store.state.user.allianceInfo;
				} else {
					let allianceInfo = JSON.parse(window.localStorage.getItem('allianceInfo'));
					this.$store.commit('setAllianceInfo', allianceInfo);
					return allianceInfo;
				}
			}
		},
		methods: {
			...mapActions([
				'handleLogOut',
				'getPlatformInfo'
			]),
			doToUpdateMobile() {
				this.$refs.updateMobile.toggleVisible();
			},
			logout() {
				this.handleLogOut().then((res) => {
					if(res.state.code == '10200') {
						this.$router.push({
							name: 'login'
						});
					}
				})
			},
			getPlatformInfoData() {
				this.getPlatformInfo()
			}
		},
		created() {
			this.getPlatformInfoData();
		}
	}
</script>

<style lang="less" scoped>
	.main-header{
		color: #B2B2B2;
		display: flex;
		justify-content: flex-end;
		height: 36px;
		line-height: 36px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.merchant-icon{
			vertical-align: sub;
		}
		.down-icon{
			vertical-align: middle;
		}
		.logout-btn{
			&:hover{
				color: #e9e9e9;
			}
		}
		.merchant-change-btn{
			&:hover{
				color: #e9e9e9;
			}
		}
		.user-box {
			position: relative;
		}
		.drop-menu-ul {
			width: 100%;
			li {
				width: 100%;
				text-align: center;
				padding: 10px 0;
				line-height: 20px;
				height: 40px;
				font-size: 14px;
				box-sizing: border-box;
				color: #B2B2B2;
				border-bottom: .5px solid #B2B2B2;
				transition: background-color .2s ease-in-out;
				cursor: pointer;
				&:hover {
					background: #3b3b3b;
					color: #eeeeee;
				}
				&:last-child {
					border-bottom: none;
				}
			}
		}
	}
	.home-header-user-info {
		width: 100%;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: white;
	}
	.header-merchant-filter{
		filter: grayscale(80%);
	}
</style>
