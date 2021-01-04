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
    1.当前项目根目录输入npm link,注册当前包的全局链接地址(开发脚手架时使用,直接在命令行敲 imooc-test-berners 命令就可以运行了)
        npm link
        npm unlink imooc-test-berners 解除link

        npm unlink imooc-test-berners 移除link

# 理解 npm link
    npm link：在库文件项目根目录中，将当前库文件项目链接到node全局mode_modules中，作为一个库文件
    npm link 包名：在使用库文件的项目中，指定某个库文件链接到node全局node_modules下的库文件，并解析 bin 配置创建可执行文件
    

# 理解 npm unlink
    npm unlink：在库文件根目录中，将注册链接，从 node 全局 node_modules中移除
    npm unlink 包名：在使用库文件的项目中移除对库文件的依赖

# 解析参数

    // 注册一个命令 imooc-test-berners init

    // 实现参数解析 --version 和 init --name
    