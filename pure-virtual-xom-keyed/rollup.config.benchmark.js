// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
export default {
    entry: './src/benchmark.tsx',
    format: 'umd',
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        uglify(),
    ],
    dest: './dist/index.js',
    moduleName: 'benchmark',
    sourceMap: true
}