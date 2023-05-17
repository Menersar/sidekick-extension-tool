const process = require('process');
const { execSync } = require('child_process')
const { exec } = require('child_process');
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


const executeCommand = function (cmd, successCallback, errorCallback) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            // console.log(`error: ${error.message}`);
            if (errorCallback) {
                // errorCallback(error.message);
                console.log(error.message);
            }
            return;
        }
        if (stderr) {
            //console.log(`stderr: ${stderr}`);
            if (errorCallback) {
                // errorCallback(stderr);
               console.log(stderr);
            }
            return;
        }
        //console.log(`stdout: ${stdout}`);
        if (successCallback) {
            // successCallback(stdout);
            console.log(stdout);

        }
    });
};


// console.log(`${implementedExtensionFolderNames[0]}`);



implementedExtensionFolderNames.forEach((val, index) => {

    // console.log(`${index}: ${val}`);

    // if (index >= 2) {

    extensionName = val;
    extensionToBuild = extensionFolder + '/' + extensionName + '/';

    // npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && node ./custom-webpack-config.js " + extensionName + " && webpack --env extension=" + extensionName, force: true });
    npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && webpack --env extensionName=" + extensionName, force: true });
    // npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && node custom-webpack-config.js " + extensionName, force: true });

    // console.log("yarn run build:" + extensionName);


    // exec("yarn run build:" + extensionName);



    // exec(cmd, (error, stdout, stderr))



    executeCommand("yarn run build:" + extensionName, "sik", "error");





    // }
});



