import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify"
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './libs/index.js',
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        uglify(),
        // 热更新 默认监听根文件夹
        livereload(),
        serve({
            open: true, // 自动打开页面
            port: 8000,
            openPage: '/demo/index.html', // 打开的页面
            contentBase: ''
        })
    ],
    output: [{
        format: 'umd',
        file: 'dist/export-excel.min.js'
    }]
}