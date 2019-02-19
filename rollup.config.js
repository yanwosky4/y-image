import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
export default {
    input: 'src/main.js',
    output: {
        file: 'dist/yimage.js',
        format: 'umd',
        name: 'YImage',
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};
