import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children:[
            {
                path: '/dashboard',
                component: () => import('@/pages/Dashboard/Index'),
                name: 'dashboard',
                meta: { icon: '$homeCity' ,title:"Dashboard"}
            },
            {
                path: '/user',
                name: 'user',
                component: ()=> import('@/pages/User/List'),
                meta: { icon: '$account' ,title:"User"}
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/User/Login'),
        hidden: true
    },

]


const createRouter = () => new Router({
    base: 'admin/',
    mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes,
})

const router = createRouter()


export default router
