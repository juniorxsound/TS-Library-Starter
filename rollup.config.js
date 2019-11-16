import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import packageJSON from './package.json'

const extensions = ['.js', '.ts'] // The type of files used in the library

/**
 * Small util to return the plugin list used for bundling
 * @returns pluginArray {Array}
 */
const commonPlugins = () => [
    resolve({ extensions }),
    eslint({
        include: `${packageJSON.source}/*`
    }),
    babel({ extensions, include: [`${packageJSON.source}/**/*`] })
]

/**
 * A small util to return the config object for bundling
 * @param {string} name - the name of the output file
 * @param {string} format - the bundling format (umd/amd/esm)
 * @returns config {Object}
 */
const makeOutput = (name, format) => ({
    file: name,
    format: format,
    name: `${packageJSON.namespace}`,
    exports: 'named',
    sourcemap: true
})

const config = [
    {
        input: `${packageJSON.source}/index.ts`,
        output: [
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.js`, 'umd'),
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.amd.js`, 'amd'),
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.esm.js`, 'esm')
        ],
        plugins: commonPlugins()
    },
    {
        input: `${packageJSON.source}/index.ts`,
        output: [
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.min.js`, 'umd'),
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.amd.min.js`, 'amd'),
            makeOutput(`${packageJSON.buildFolder}/${packageJSON.name}.esm.min.js`, 'esm')
        ],
        plugins: [
            ...commonPlugins(),
            terser()
        ]
    }
]

module.exports = config