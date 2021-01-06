#!/usr/bin/env node
// 使用当前操作系统node环境执行当前脚本文件

/*
console.log('welcome imooc-test-berners');

// 注册一个命令 imooc-test-berners init

// 实现参数解析 --version 和 init --name

const { argv } = require('process');
console.log(argv);
*/


const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const dedent = require('dedent');
const cli = yargs(hideBin(process.argv));

cli
    .usage('Usage: imooc-test [command] <options>') // 提醒
    .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.') // 最少输入 Command 的数量，表示最少输入一个命令
    .strict()
    .alias('h', 'help') // 别名, 给help 起了个别名
    .alias('v', 'version') // 别名, 给version 起了个别名
    // .wrap(100) // 命令行宽度
    .wrap(cli.terminalWidth()) // 获取命令行宽度，定格显示
    .epilogue(
        // 让其顶行显示
        dedent`
            When a command fails, all logs are written to lerna-debug.log in the current working directory.

            For more information, find our manual at https://github.com/lerna/lerna
        `
    ) // 页脚添加一段话
    .option({ // 添加一个选项命令，可设置多个
        debug: {// 添加 debug 选项命令
            type: 'boolean',
            describe: 'Bootstrap debug mode',
            alias: 'd' // 别名，也可以通过 .alias('d', 'debug')  方法设置，通过设置位置排序实现排序
        }
    })
    .option('registry', {
        type: 'string',
        // hidden: true, // 在控制台隐藏此命令，但可以使用
        describe: 'Define global registry',
    })
    .argv;

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}



