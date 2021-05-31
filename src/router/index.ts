import {RouteRecordRaw,createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from './modules/home'
import Order from './modules/order'
const moduleAry = [Home,Order]
const routes:RouteRecordRaw[] = [{
    path:'/',
    redirect: "/index",
    component: Layout,
    children:moduleAry
 }]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router