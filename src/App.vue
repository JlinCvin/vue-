<template>
	<div id="app">
		<transition name="el-fade-in-linear" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	import Main from '@/components/Main'
	export default {
		name: 'app',
		components: {
			Main
		},
		methods: {
		},
		created() {
		}
	}
</script>

<style lang="less">
	.size {
		width: 100%;
		height: 100%;
	}

	html, body {
		.size;
		margin: 0;
		padding: 0;
		min-width: 1200px;
		background: #EDF4F5;
		font-family: "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}

	#app {
		.size;
		margin: 0;
		padding: 0;
	}
</style>
