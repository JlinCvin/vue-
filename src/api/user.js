import axios from '@/plugins/axios/api.request'

/**
 * 登录接口
 * @param Mobile 手机号
 * @param Code 验证码
 * @returns {Promise<T | never>}
 */
export const login = ({ mobile, code }) => {
  const data = {
    mobile,
    code
  };
  return axios.request({
    url: '/alliance/login',
    data,
    method: 'post'
  }).then((result) => {
    return result.data
  })
};
/**
 * 获取后台自定义信息 getPlatformLoginInfo
 * @param key
 * @returns {*}
 */
export const getPlatformLoginInfo = ({ key }) => {
  const data = {
    key
  };
  return axios.request({
    url: '/alliance/custom/platform_info_url',
    method: 'get',
    params: data
  }).then((result) => {
    return result.data;
  });
};
/**
 * 获取后台自定义信息 getPlatformInfo
 * @param formData
 * @returns {*}
 */
export const getPlatformInfo = formData => {
  return axios.request({
    url: '/alliance/custom/platform_info',
    method: 'get',
    params: formData
  }).then((result) => {
    return result.data;
  });
};
/**
 * 注销登录
 * @returns {Promise<T | never>}
 */
export const logout = () => {
  return axios.request({
    url: '/alliance/logout',
    method: 'post'
  }).then((result) => {
    return result.data
  })
};
/**
 * 获取用户信息
 * @param formData
 * @returns {Promise<T | never>}
 */
export const getUserInfo = formData => {
  return axios.request({
    url: '/alliance/admin_info',
    method: 'get',
    params: formData
  }).then((result) => {
    return result.data
  })
}

