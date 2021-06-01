import Main from '@/components/Main'
import MainView from '@/view/Common/MainView'
/**
 * meta: {
 *  title: { String|Number|Function }
 *         标签栏的文字 可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在菜单栏
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 * }
 */

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
        },
        component: () => import('@/view/Login/Login.vue')
    },
    {
        path: '/',
        redirect: {
            name: 'home'
        },
        component: Main,
        name: 'main',
        meta: {
            notCache: true
        },
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                },
                component: () => import('@/view/Home/Home'),
            }
          ]
        }
      ]
