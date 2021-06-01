import axios from '@/plugins/axios/api.request'

/**
 * 公共接口
 * 发送验证码 doSendMobileCode
 * Base64图片上传 uploadImg
 * 获取合伙公司 getPartnerCompany
 * 获取开票公司下拉列表 getInvoiceCompanyDrop
 * 获取资产包列表 getInvestArithmeticDrop
 * 获取楼盘开发商下拉列表 getDeveloperDrop
 * 搜索省市区联动 searchAddress
 * 获取小二下拉框 getKojiDrop
 * 获取楼盘下拉框 getProjectDrop
 * 获取组织架构树 getOrganizationTree
 **/
export const doSendMobileCode = formData => {
    return axios.request({
        url: '/common/send-sms',
        method: 'post',
        data: formData
    }).then((result) => {
        return result.data;
    });
};