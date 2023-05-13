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



implementedExtensionFolderNames.forEach((val, index) => {

    // console.log(`${index}: ${val}`);

    // if (index >= 2) {

        extensionName = val;
        extensionToBuild = extensionFolder + '/' + extensionName + '/';

        npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && webpack " + extensionName, force: true });

        execSync("yarn run build:" + extensionName);


        

    // }
});

