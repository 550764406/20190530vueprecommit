/** @format */

module.exports = {
  printWidth: 220, //单行输出（不折行）的（最大）长度

  tabWidth: 2, //设置工具每一个水平缩进的空格数

  useTabs: false, //使用tab（制表位）缩进而非空格

  semi: true, //在语句末尾添加分号, true: 添加分号   false: 如果是箭头函数，前面会添加；其他函数不会

  singleQuote: true, //用单引号替代双引号，true: 替代（这里vue里的不替换）  false：不替代

  quoteProps: 'consistent', // 这里没有测试出来
  jsxSingleQuote: true, // jsx中用单引号替代双引号 true：代表替换  false：不替换

  trailingCooma: 'none', //在methods等方法或者函数结尾处 是否添加逗号， none：不添加  es5和all：都是添加逗号

  bracketSpacing: false, //在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 true: 代表在花括号前后添加空格 false：不添加

  jsxBracketSameLine: false, // 在多行JSX元素最后一行的末尾（>）结束时  是否使用> 为单独一行

  arrowParens: 'always', //为单行箭头函数的参数是否添加圆括号 avoid | always

  rangeStart: 10, //回退至包含选中语句的第一行的开始

  rangeEnd: Infinity, //向前直到选中语句的末尾

  requirePragma: false, //是否严格按照文件顶部的一些特殊的注释格式化代码

  insertPragma: false, //是否插入文件顶部的一些特殊的注释格式化代码

  proseWrap: 'preserve' //是否是当屏幕放不下时发生的软折行 always（当超出print width宽度时折行）|never|perserve(按照文件原样)
};
