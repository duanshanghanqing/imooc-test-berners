const path = require('path');
const ejs = require('ejs');

const html = '<div><%= name %></div>';
const options = {};
const data = {
    name: 'zhangshan'
};
const data2 = {
    name: 'lishi'
};

// 用法一
// 返回 function， 用于解析 html
const template = ejs.compile(html, options); // 模版编译
const compileTemplate = template(data); // 对模版注入数据
const compileTemplate2 = template(data2); // 对模版注入数据
console.log(compileTemplate); // <div>zhangshan</div>
console.log(compileTemplate2); // <div>zhangshan</div>

// 用法二
const renderTemplate = ejs.render(html, data, options);
console.log(renderTemplate); // <div>zhangshan</div>

// 用法三
const renderFile = ejs.renderFile(path.resolve(__dirname, 'template.html'), data, options);
renderFile.then((dom) => {
    console.log(dom);
});