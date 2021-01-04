#!/usr/bin/env node
// 使用当前操作系统node环境执行当前脚本文件

console.log('welcome imooc-test-berners');

// 注册一个命令 imooc-test-berners init

// 实现参数解析 --version 和 init --name

const { argv } = require('process');
console.log(argv);