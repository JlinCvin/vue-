// 楼盘审核状态
export const BuildingStatus = [
	{
		label: '待审核',
		value: '1'
	},
	{
		label: '已上架',
		value: '2'
	},
	{
		label: '已下架',
		value: '3'
	}];
// 门店状态
export const StoreStatus = [
	{
		label: '待审核',
		value: '3'
	},{
		label: '审核通过',
		value: '1'
	},
	{
		label: '审核不通过',
		value: '2'
	}
	];
// 门店审核状态
export const StoreBusinessType = [
	{
		label: '不指定',
		value: '0'
	},{
		label: '新房',
		value: '1'
	},
	{
		label: '存租房',
		value: '2'
	}
	];
// 联盟审核状态
export const AllianceStatus = [
	{
		label: '待审核',
		value: '1'
	},{
		label: '审核通过',
		value: '2'
	},
	{
		label: '审核不通过',
		value: '3'
	}
];
// 联盟提成状态
export const AllianceDeductStatus = [
	{
		label: '待提现',
		value: '10'
	},{
		label: '提现中',
		value: '20'
	},
	{
		label: '已结提成',
		value: '30'
	}
];
// 订单状态
export const OrderStatus = [
	{
		label: '报备',
		value: '0'
	},{
		label: '撤单',
		value: '10'
	},{
		label: '拒单',
		value: '20'
	},{
		label: '已处理',
		value: '30'
	},{
		label: '经服到访审核中',
		value: '31'
	},{
		label: '到访审核不通过',
		value: '35'
	},{
		label: '已到访',
		value: '40'
	},{
		label: '经服认购审核中',
		value: '41'
	},{
		label: '认购审核',
		value: '42'
	},{
		label: '认购审核不通过',
		value: '45'
	},{
		label: '联盟认购审核不通过',
		value: '46'
	},{
		label: '订单失效',
		value: '50'
	},{
		label: '已认购',
		value: '60'
	},{
		label: '经服网签审核中',
		value: '61'
	},{
		label: '网签审核',
		value: '62'
	},{
		label: '网签审核不通过',
		value: '65'
	},{
		label: '联盟网签审核不通过',
		value: '66'
	},{
		label: '结算政策待审核',
		value: '67'
	},{
		label: '结算政策拒绝',
		value: '68'
	},{
		label: '已网签',
		value: '70'
	},{
		label: '整佣待审核',
		value: '80'
	},{
		label: '结佣被拒',
		value: '801'
	},{
		label: '前佣待审核',
		value: '81'
	},{
		label: '前佣被拒',
		value: '811'
	},{
		label: '可结后佣',
		value: '812'
	},{
		label: '后佣待审核',
		value: '82'
	},{
		label: '后佣被拒',
		value: '821'
	},{
		label: '已结佣',
		value: '90'
	},{
		label: '待结跳点佣',
		value: '91'
	},{
		label: '结跳点佣待审核',
		value: '92'
	},{
		label: '结跳点佣被拒',
		value: '93'
	},{
		label: '订单完成',
		value: '100'
	},
];
// 房子类型
export const houseType = [
	{
		label: '住宅',
		type: '1'
	}, {
		label: '别墅',
		type: '2'
	}, {
		label: '写字楼',
		type: '3'
	}, {
		label: '公寓',
		type: '4'
	}, {
		label: '商铺',
		type: '5'
	}, {
		label: '其他',
		type: '6'
	}
]
// 佣金政策审核状态
export const CommissionPolicyStatus = [
	{
		label: '待审核',
		value: '1'
	}, {
		label: '已拒绝',
		value: '2'
	}, {
		label: '已通过',
		value: '3'
	}
]
// 结佣佣金审核状态
export const KnotCommissionStatus = [
	{
		label: '待审核',
		value: '10'
	}, {
		label: '已拒绝',
		value: '20'
	}, {
		label: '已通过',
		value: '30'
	}
]
// 提现审核状态
export const WithdrawStatus = [
	{
		label: '待审核',
		value: '50'
	}, {
		label: '审核不通过',
		value: '40'
	}, {
		label: '待确认转账',
		value: '10'
	}, {
		label: '转账成功',
		value: '20'
	}, {
		label: '转账失败',
		value: '30'
	}
]
// 钱包类型
export const WalletType = [
	{
		label: '个人钱包',
		value: '1'
	}, {
		label: '门店钱包',
		value: '2'
	}, {
		label: '联盟钱包',
		value: '3'
	}
]
// 结佣佣金类别
export const CommissionType = [
	{
		label: '普通',
		value: '10'
	}, {
		label: '租房',
		value: '20'
	}, {
		label: '装修贷',
		value: '30'
	}, {
		label: '跳点佣',
		value: '40'
	}
]

// 卡券各种状态管理
// 累计单量条件
export const OrderAccumulateArr = [
	{
		label: '不限制',
		value: '1'
	}, {
		label: '每天',
		value: '2'
	}, {
		label: '每周',
		value: '3'
	}, {
		label: '指定日期',
		value: '4'
	}
];
// 卡劵类型
export const CardTypeArr = [
	{
		label: '礼品劵',
		value: '1'
	}, {
		label: '现金券',
		value: '2'
	}, {
		label: '优惠券',
		value: '3'
	}
]
// 有效期类型
export const ActiveTimeTypeArr = [
	{
		label: '倒计时',
		value: '1'
	}, {
		label: '日期范围',
		value: '2'
	}
]
// 卡券核销类型
export const VerificationTypeArr = [
	{
		label: '报备',
		value: '1'
	}, {
		label: '已到访',
		value: '2'
	}, {
		label: '已认购',
		value: '3'
	}, {
		label: '已网签',
		value: '4'
	}
]
// 营销对象
export const userTypeArr = [
	{
		label: '经纪人',
		value: '1'
	}, {
		label: '客户',
		value: '2'
	}
]

