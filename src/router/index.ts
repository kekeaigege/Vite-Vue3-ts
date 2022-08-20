/*
 * @Author: wangxue 3208230974@qq.com
 * @Date: 2022-08-20 10:27:12
 * @LastEditors: wangxue 3208230974@qq.com
 * @LastEditTime: 2022-08-20 14:57:06
 * @FilePath: \my-vite-app\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/Layout/layout.vue";
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