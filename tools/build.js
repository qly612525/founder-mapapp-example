'use strict';
/**
 *
 * 生产环境代码编译文件
 *
 */
const path = require('path');
const shell = require('shelljs');
const helpers = require('./commands/helpers');
const webpack = require('webpack');
const config = require('../webpack.dist.config');

config.warnings = true;

// Clean folder
const buildFolder = path.join(__dirname, '../build');
shell.rm('-rf', buildFolder);
shell.mkdir(buildFolder);
shell.mkdir(`${buildFolder}/static`);

const timestamp = require('crypto')
    .createHash('md5')
    .update(new Date().getTime().toString())
    .digest('hex')
    .substring(0, 10);

// 拷贝src中的index.html到build中，修改其中的包引用地址(增加hash部分)
const lines = helpers.getLines(path.join(__dirname, '../src/index.html'));
helpers.removeLines(lines, '/.tmp/vendors.dll.js');

// 找到'</head>'标签字符位置，在之前添加一行link
let indexOfHead = null;
lines.forEach((v, i) => {
    if (v == '</head>') {
        indexOfHead = i;
    }
});
const linkString = `    <link rel="stylesheet" type="text/css" href="/static/main.css">`;
lines.splice(indexOfHead, 0, linkString);

let indexHtml = lines.join('\n');
indexHtml = indexHtml.replace('/static/main.bundle.js', `/static/main.bundle.${timestamp}.js`);
shell.ShellString(indexHtml).to(path.join(buildFolder, 'index.html'));

console.log('Start building...');
const start = new Date().getTime();
webpack(config, (err, result) => {
    if (err) console.log(err);
    else {
        shell.mv(path.join(buildFolder, './static/main.bundle.js'), path.join(buildFolder, `/static/main.bundle.${timestamp}.js`));
        const end = new Date().getTime();
        console.log('Done, build time: ', end - start, 'ms');
    }
});
