import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "../Layout/layout.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Layout,
        redirect: "/home",
        meta: { title: "ui.router.pageWorkbench", icon: "icon-desktop" },
        children: [
            {
                path: "/home",
                component: () => import("../views/home.vue"),
                meta: { title: "ui.router.pageHome", icon: "icon-home" }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(), //createWebHashHistory() hash模式
    routes
})

export default router