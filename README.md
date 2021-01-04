# 创建一个脚手架

    创建目录
        mkdir imooc-test-berners
        cd imooc-test-berners
        npm init -y

    创建目录文件 bin/index.js

# 发布包

    npm whoami  检查是否登陆
    npm adduser 创建账号
    npm login   登陆账号
    npm publish  发布包

# 安装包

    npm install -g imooc-test-berners

# 移除包
    npm remove -g imooc-test-berners

# 控制台执行
    imooc-test-berners

    打印
        welcome imooc-test-berners

# 安装位置
    window系统
        C:\Program Files\nodejs\node_modules

# 调试
    1.当前项目根目录下安装脚手架
        npm install -g imooc-test-berners
        就可通过 imooc-test-berners 命令调试了
    2.当前项目根目录输入npm link方式调试(开发脚手架时使用)
        npm link

        npm unlink imooc-test-berners 移除link

# 解析参数

    // 注册一个命令 imooc-test-berners init

    // 实现参数解析 --version 和 init --name
    