const process = require('process');
// const { execSync } = require('child_process')
const { exec } = require('child_process');
var npmAddScript = require('npm-add-script')


const path = require('path');

const fs = require('fs');


const extensionFolder = 'extensions';
const pathToExtensionFolder = path.resolve(__dirname, extensionFolder);
var extensionName = '';
var extensionToBuild = '';

var implementedExtensionFolderNames = fs.readdirSync(pathToExtensionFolder);


const executeCommand = function (cmd, successCallback, errorCallback, extensionName) {
    console.log('Building Extension: ', extensionName);
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            if (errorCallback) {
                // errorCallback(error.message);
                console.log(error.message);
            }
            // return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            if (errorCallback) {
                // errorCallback(stderr);
                // console.log(stderr);
            }
            // return;
        }
        console.log(`stdout: ${stdout}`);
        if (successCallback) {
            // successCallback(stdout);
            // console.log(stdout);
            console.log('Built Extension: ', extensionName);
        }
    });
};


// console.log(`${implementedExtensionFolderNames[0]}`);

implementedExtensionFolderNames.forEach((val, index) => {

    extensionName = val;
    extensionToBuild = extensionFolder + '/' + extensionName + '/';

    // npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && node ./custom-webpack-config.js " + extensionName + " && webpack --env extension=" + extensionName, force: true });
    npmAddScript({ key: "build:" + extensionName, value: "rimraf ./" + extensionToBuild + "build && mkdirp " + extensionToBuild + "build && rimraf ./" + extensionToBuild + "dist && mkdirp " + extensionToBuild + "dist && webpack --env extensionName=" + extensionName, force: true });

    executeCommand("yarn run build:" + extensionName, "success", "error", extensionName);
});



