const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

const info = require('./info.json');


// const config = {
//     mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//     entry: './index.js',
//     bail: true,
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'build'),
//         module: true,
//         library: {
//             type: 'commonjs2'
//         }
//     },
//     experiments: {
//         outputModule: true
//     },
//     externals: {
//         'scratch-extension': 'ScratchExtension'
//     },
//     externalsType: 'global',
//     plugins: [
//         new CopyWebpackPlugin({
//             patterns: [{
//                 from: path.join(__dirname, 'locales'),
//                 to: path.join(__dirname, 'build/locales')
//             }, {
//                 from: path.join(__dirname, 'assets'),
//                 to: path.join(__dirname, 'build/assets')
//             }, {
//                 from: path.join(__dirname, 'info.json'),
//                 to: path.join(__dirname, 'build/info.json')
//             }]
//         }),
//         new ZipWebpackPlugin({
//             path: path.join(__dirname, 'dist'),
//             filename: `${info.id}@${info.version}`,
//             extension: 'skx'
//         })
//     ]
// };

// module.exports = config;






const process = require('process');




const fs = require('fs');


const extensionFolder = 'extensions';
const pathToExtensionFolder = path.resolve(__dirname, extensionFolder);
var extensionName = '';
var extensionToBuild = '';
var extensionInfo = '';



// var implementedExtensionFolderNames = fs.readdirSync(pathToExtensionFolder);




process.argv[2];

extensionName = process.argv[2];;
extensionToBuild = extensionFolder + '/' + extensionName + '/';

extensionInfo = require('./' + extensionToBuild + 'info.json');

const configuration = {
    bail: true,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './' + extensionToBuild + 'index.js',
    output: {
        filename: extensionToBuild + 'main.js',
        path: path.resolve(__dirname, extensionToBuild + 'build'),
        module: true,
        library: {
            type: 'commonjs2'
        }
    },
    experiments: {
        outputModule: true
    },
    externals: {
        'scratch-extension': 'ScratchExtension'
    },
    externalsType: 'global',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.join(__dirname, extensionToBuild + 'locales'),
                to: path.join(__dirname, extensionToBuild + 'build/locales')
            }, {
                from: path.join(__dirname, extensionToBuild + 'assets'),
                to: path.join(__dirname, extensionToBuild + 'build/assets')
            }, {
                from: path.join(__dirname, extensionToBuild + 'info.json'),
                to: path.join(__dirname, extensionToBuild + 'build/info.json')
            }]
        }),
        new ZipWebpackPlugin({
            path: path.join(__dirname, extensionToBuild + 'dist'),
            filename: `${extensionInfo.id}@${extensionInfo.version}`,
            extension: 'skx'
        })
    ]
};

module.exports = configuration;