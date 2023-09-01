import path, { resolve } from 'path'
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import svgLoader from 'vite-svg-loader'

const pathSrc = path.resolve(__dirname, 'src')


// 当前执行node命令时文件夹的地址（工作目录）
const root: string = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const VITE_APP_API = loadEnv(mode, root).VITE_APP_API
    return {
        plugins: [Vue()
            ,svgLoader()
            ,Icons({ compiler: 'vue3' }),
            , AutoImport({
                // Auto import functions from Vue, e.g. ref, reactive, toRef...
                // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
                imports: ['vue'],

                // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
                // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
                resolvers: [
                    ElementPlusResolver(),

                    // Auto import icon components
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],

                dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
            }),
        Components({
            resolvers: [
                // Auto register icon components
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
                // Auto register Element Plus components
                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],

            dts: path.resolve(pathSrc, 'components.d.ts'),
        }),
        Icons({
            autoInstall: true,
        }),
        Inspect(),],
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            // 设置别名
            alias: {
                // 设置路径
                '~': resolve(__dirname, './'),
                // 设置别名
                '@': resolve(__dirname, './src')
            },
        },
        logLevel: "info",
        server: {
            host: true,
            port: 8081,
        }
    }
});


