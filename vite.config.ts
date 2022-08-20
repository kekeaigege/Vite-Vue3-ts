/*
 * @Author: wangxue 3208230974@qq.com
 * @Date: 2022-08-20 09:26:26
 * @LastEditors: wangxue 3208230974@qq.com
 * @LastEditTime: 2022-08-20 14:25:25
 * @FilePath: \my-vite-app\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv, UserConfig, UserConfigExport } from "vite";
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
import { resolve } from "path";
export default (config: UserConfig): UserConfigExport => {
  const mode = config.mode as string;
  const isEnvProd = ['production', 'test'].includes(mode)
  return defineConfig({
    base: "./",
    plugins: [
      vue()
  ],
  resolve: {
    alias: {
      // 配置别名
      "@": resolve(__dirname, "./src"),
    }
  },
  server: {
    open: true, // 自动启动浏览器
    host: "0.0.0.0", // localhost
    port: 8001, // 端口号
    https: false
  }
  })
}