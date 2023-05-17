const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const process = require('process');
const fs = require('fs');

const extensionFolder = 'extensions';

let customConfig;


// const info = require('./info.json');


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




// process.argv.forEach((val, index) => {

//     console.log(`${index}: ${val}`);

// });




// const pathToExtensionFolder = path.resolve(__dirname, extensionFolder);




// var implementedExtensionFolderNames = fs.readdirSync(pathToExtensionFolder);


// // WebPack.config File
// const fileConfig = 'webpack.config.js'

// new Promise((resolve) => {
//    fs.readFile(fileConfig, 'utf8', function (err, data) {
//       if (err) {
//         return console.log(err)
//       }
//       resolve(data)
//    })
// }).then((file) => {

//     let CodeAsString = "Code as String to save"

//     let regexCode = /YourCodeRegex}/g

//     let result = file.replace(regexCode, CodeAsString)

//     fs.writeFile(fileConfig, result, function (err) {
//         if (err) return console.log(err)
//         console.log('The webpack.config file was modifed!')
//     })
// })



// process.argv.forEach((val, index) => {

//     console.log(`${index}: ${val}`);
//     console.log('asd____________________________________');

// });

console.log('a____________________________________');
console.log(process.argv[2]);
console.log('e____________________________________');


if (process.argv[2]) {


    var extensionName = '';
    var extensionToBuild = '';
    var extensionInfo = '';

    extensionName = process.argv[2];

    // console.log("asdadssdalkjhsdkhkjsdgsdjsda" + extensionName);


    // extensionName = 'extension1';
    extensionToBuild = extensionFolder + '/' + extensionName + '/';


    extensionInfo = require('./' + extensionToBuild + 'info.json');

    // webpackConfig = require('./webpack.config.js')





    // } else {

    //     // extensionName = '';

    //     extensionToBuild = '';
    //     extensionInfo = require('./info.json');

    // }




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

    module.exports = { customConfig };
}

// module.exports = { customConfig };

// webpackConfig.config = customConfig;

// console.log(customConfig);


// inside of moduleB
// module.exports.changeConfig = function (config) {

//     // webpackConfiguration = customConfig;
//     // obj.someProperty = 2;
//     config.bail = true;
//     config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
//     config.entry = './' + extensionToBuild + 'index.js';
//     config.output = {
//         filename: extensionToBuild + 'main.js',
//         path: path.resolve(__dirname, extensionToBuild + 'build'),
//         module: true,
//         library: {
//             type: 'commonjs2'
//         }
//     };
//     config.experiments = {
//         outputModule: true
//     };
//     config.externals = {
//         'scratch-extension': 'ScratchExtension'
//     };
//     config.externalsType = 'global';
//     config.plugins = [
//         new CopyWebpackPlugin({
//             patterns: [{
//                 from: path.join(__dirname, extensionToBuild + 'locales'),
//                 to: path.join(__dirname, extensionToBuild + 'build/locales')
//             }, {
//                 from: path.join(__dirname, extensionToBuild + 'assets'),
//                 to: path.join(__dirname, extensionToBuild + 'build/assets')
//             }, {
//                 from: path.join(__dirname, extensionToBuild + 'info.json'),
//                 to: path.join(__dirname, extensionToBuild + 'build/info.json')
//             }]
//         }),
//         new ZipWebpackPlugin({
//             path: path.join(__dirname, extensionToBuild + 'dist'),
//             filename: `${extensionInfo.id}@${extensionInfo.version}`,
//             extension: 'skx'
//         })
//     ];
// };

// console.log(customConfig.plugins[0].patterns[0].from);

module.exports.changeConfig = function (config) {

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
    // config.plugins[1].extension = customConfig.plugins[1].extension;

    // config.plugins = [
    //     new CopyWebpackPlugin({
    //         patterns: [{
    //             from: path.join(__dirname, extensionToBuild + 'locales'),
    //             to: path.join(__dirname, extensionToBuild + 'build/locales')
    //         }, {
    //             from: path.join(__dirname, extensionToBuild + 'assets'),
    //             to: path.join(__dirname, extensionToBuild + 'build/assets')
    //         }, {
    //             from: path.join(__dirname, extensionToBuild + 'info.json'),
    //             to: path.join(__dirname, extensionToBuild + 'build/info.json')
    //         }]
    //     }),

    //     new ZipWebpackPlugin({
    //         path: path.join(__dirname, extensionToBuild + 'dist'),
    //         filename: `${extensionInfo.id}@${extensionInfo.version}`,
    //         extension: 'skx'
    //     })
    // ];
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