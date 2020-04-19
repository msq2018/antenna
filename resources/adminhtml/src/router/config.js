import PageLayout from '@/layout/PageLayout'
import AuthLayout from "@/layout/AuthLayout";
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const asyncRoutes = [
    {
        path: '/',
        component: PageLayout,
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
    ,

];

export const baseRouters = [
    {
        path: '/auth',
        name:'auth',
        component:AuthLayout,
        hidden:true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: ()=>import('@/pages/Auth/Login')
            }
        ]
    },
];
