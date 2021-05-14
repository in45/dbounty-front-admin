import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'signin',
        component: () => import(/* webpackChunkName: "signin" */ '../components/signin')
    },
    {
        path: '',
        name: 'Common',
        component: () => import(/* webpackChunkName: "Common" */ '../components/common'),

        children: [

            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard')
            },
            {
                path: '/admins',
                name: 'Admins',
                component: () => import(/* webpackChunkName: "Admins" */ '../views/Admins')
            },
            {
                path: '/programs',
                name: 'Programs',
                component: () => import(/* webpackChunkName: "Programs" */ '../views/Programs')
            },
            {
                path: '/programs/:id',
                name: 'ProfilProgram',
                component: () => import(/* webpackChunkName: "ProfilProgram" */ '../views/ProfilProgram')
            },
            {
                path: '/reports',
                name: 'Reports',
                component: () => import(/* webpackChunkName: "Reports" */ '../views/Reports')
            },
            {
                path: '/reports/:id',
                name: 'ProfilReport',
                component: () => import(/* webpackChunkName: "ProfilReport" */ '../views/ProfilProgram')
            },
            {
                path: '/companies',
                name: 'Companies',
                component: () => import(/* webpackChunkName: "Companies" */ '../views/Companies')
            },
            {
                path: '/companies/:id',
                name: 'ProfilCompany',
                component: () => import(/* webpackChunkName: "ProfilCompany" */ '../views/ProfilCompany')
            },
            {
                path: '/vulnerabilities',
                name: 'Vulnerabilities',
                component: () => import(/* webpackChunkName: "Vulnerabilities" */ '../views/Vulnerabilities')
            },
            {
                path: '/badges',
                name: 'Badges',
                component: () => import(/* webpackChunkName: "Badges" */ '../views/Badges')
            },

            {
                path: '/users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "Users" */ '../views/Users')
            },
            {
                path: '/users/:id',
                name: 'ProfilUser',
                component: () => import(/* webpackChunkName: "ProfilUser" */ '../views/ProfilUser')
            },

        ]
    }


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
