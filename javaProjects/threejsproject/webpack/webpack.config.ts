const path = require('path')

const distDir = path.resolve(process.cwd(), 'dist/webpack')
module.exports = {
    entry: '../src/main.ts',
    output: {
        filename: 'main.js',
        path: distDir,
    },
}
