const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const process = require('process');
const fs = require('fs');

const extensionFolder = 'extensions';

let customConfig;


console.log('a____________________________________');
console.log(process.argv[2]);
console.log('e____________________________________');


// if (process.argv[2]) {


var extensionName = '';
var extensionToBuild = '';
var extensionInfo = '';

extensionName = process.argv[2];

// console.log("asdadssdalkjhsdkhkjsdgsdjsda" + extensionName);


// extensionName = 'extension1';
extensionToBuild = extensionFolder + '/' + extensionName + '/';


extensionInfo = require('./' + extensionToBuild + 'info.json');

// webpackConfig = require('./webpack.config.js')


customConfig = {
    bail: true,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './' + extensionToBuild + 'index.js',
    output: {
        filename: 'main.js',
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

// }



module.exports = function override(config, env) {

    config.entry = customConfig.entry;
    config.output.path = customConfig.output.path;


    config.plugins[0].patterns[0].from = customConfig.plugins[0].patterns[0].from
    config.plugins[0].patterns[0].to = customConfig.plugins[0].patterns[0].to;

    config.plugins[0].patterns[1].from = customConfig.plugins[0].patterns[1].from
    config.plugins[0].patterns[1].to = customConfig.plugins[0].patterns[1].to;

    config.plugins[0].patterns[2].from = customConfig.plugins[0].patterns[2].from
    config.plugins[0].patterns[2].to = customConfig.plugins[0].patterns[2].to;


    config.plugins[1].path = customConfig.plugins[1].path;
    config.plugins[1].filename = customConfig.plugins[1].filename;
    config.plugins[1].extension = customConfig.plugins[1].extension;

    return config;


};


// module.exports = customConfig;


// console.log(customConfig);

// const fileConfig = 'node_modules/react-scripts/config/webpack.config.js'


// let configFile = 'webpack.config.js';

// fs.readFile(configFile, 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(data);
//     // var result = data.replace(/string to be replaced/g, 'replacement');
//     var result = data.replace(data, customConfig);

//     fs.writeFile(configFile, result, 'utf8', function (err) {
//         if (err) return console.log(err);
//     });
// });