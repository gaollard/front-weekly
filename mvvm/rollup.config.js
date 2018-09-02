import babel from 'rollup-plugin-babel'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'cjs'
    },
    banner: '/* arraybuffer */',
    plugins: [
        babel({
            "presets": [[
                "env",
                {
                  "modules": false
                }
            ]],
            "plugins": [
                ["transform-react-jsx", {
                    "pragma": "vnode"
                }]
            ]
        })
    ]
}
