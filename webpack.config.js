const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

// const { changeConfig } = require('./custom-webpack-config.js');
// const { customConfig } = require('./custom-webpack-config.js');
const info = require('./info.json');



// const info = require('./info.json');

const process = require('process');
// const fs = require('fs');

// const extensionFolder = 'extensions';
// var extensionToBuild = "";
// var extensionInfo = "";

// extensionInfo = require('./info.json');

// console.log("hierrrrrrrrrrrrrrrrr: " + info);


const extensionFolder = 'extensions';



// let config = {
//     bail: true,
//     mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
//     entry: './index.js',
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





// changeConfig(config);




// let customConf = {};

// changeConfig(config);

// console.log("Extension Info:____________");
// console.log(config);


// console.log(customConf.someProperty);    // 2
// console.log(configuration);    // 2







// module.exports = config;










// config.entry = customConfig.entry;
// config.output.path = customConfig.output.path;


// config.plugins[0].patterns[0].from = customConfig.plugins[0].patterns[0].from
// config.plugins[0].patterns[0].to = customConfig.plugins[0].patterns[0].to;

// config.plugins[0].patterns[1].from = customConfig.plugins[0].patterns[1].from
// config.plugins[0].patterns[1].to = customConfig.plugins[0].patterns[1].to;

// config.plugins[0].patterns[2].from = customConfig.plugins[0].patterns[2].from
// config.plugins[0].patterns[2].to = customConfig.plugins[0].patterns[2].to;


// config.plugins[1].path = customConfig.plugins[1].path;
// config.plugins[1].filename = customConfig.plugins[1].filename;
// config.plugins[1].extension = customConfig.plugins[1].extension;




module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Extension: ', env.extensionName); // 'local'
    // console.log('Production: ', env.production); // true

    var extensionLocation = extensionFolder + '/' + env.extensionName + '/';
    var extensionInfo = require('./' + extensionLocation + 'info.json');


    return {
        bail: true,
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        entry: './' + extensionLocation + 'index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, extensionLocation + 'build'),
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
                    from: path.join(__dirname, extensionLocation + 'locales'),
                    to: path.join(__dirname, extensionLocation + 'build/locales')
                }, {
                    from: path.join(__dirname, extensionLocation + 'assets'),
                    to: path.join(__dirname, extensionLocation + 'build/assets')
                }, {
                    from: path.join(__dirname, extensionLocation + 'info.json'),
                    to: path.join(__dirname, extensionLocation + 'build/info.json')
                }]
            }),
            new ZipWebpackPlugin({
                path: path.join(__dirname, extensionLocation + 'dist'),
                filename: `${extensionInfo.id}@${extensionInfo.version}`,
                extension: 'skx'
            })
        ]
    };
};