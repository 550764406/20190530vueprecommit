/** @format */

module.exports = {
  printWidth: 220, //单行输出（不折行）的（最大）长度

  tabWidth: 2, //设置工具每一个水平缩进的空格数

  useTabs: false, //使用tab（制表位）缩进而非空格

  semi: true, //在语句末尾添加分号；

  singleQuote: false, //所有引号均为双引号，true: 全部是双引号

  trailingCooma: "none", //在任何可能的多行中输入尾逗号

  bracketSpacing: true, //在对象字面量声明所使用的的花括号后（{）和前（}）输出空格

  jsxBracketSameLine: false, // 在多行JSX元素最后一行的末尾（>）结束时  是否使用> 为单独一行

  arrowParens: "always", //为单行箭头函数的参数是否添加圆括号 avoid | always

  rangeStart: 0, //回退至包含选中语句的第一行的开始

  rangeEnd: Infinity, //向前直到选中语句的末尾

  requirePragma: false, //是否严格按照文件顶部的一些特殊的注释格式化代码

  insertPragma: false, //是否插入文件顶部的一些特殊的注释格式化代码

  proseWrap: "preserve" //是否是当屏幕放不下时发生的软折行 always（当超出print width宽度时折行）|never|perserve(按照文件原样)
};
