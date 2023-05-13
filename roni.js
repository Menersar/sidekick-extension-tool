const process = require('process');
const { execSync } = require('child_process')
var npmAddScript = require('npm-add-script')


const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

const info = require('./info.json');


const fs = require('fs');


const extensionFolder = 'extensions';
const pathToExtensionFolder = path.resolve(__dirname, extensionFolder);
var extensionName = '';
var extensionToBuild = '';
var extensionInfo = '';

var implementedExtensionFolderNames = fs.readdirSync(pathToExtensionFolder);



// console.log(`${implementedExtensionFolderNames[0]}`);



process.argv.forEach((val, index) => {

    console.log(`${index}: ${val}`);

    // if (index >= 2) {

        extensionName = val;
        extensionToBuild = extensionFolder + '/' + extensionName + '/';

        npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && webpack", force: true });


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

        execSync("yarn run build:" + extensionName)
    // }
// });

