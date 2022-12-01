module.exports = {
  // 单行输出长度
  printWidth: 80,
  // 不使用缩进符，使用空格
  useTabs: false,
  // 缩进空格数
  tabWidth: 2,
  // 是否在语句末尾分号
  semi: false,
  // 是否使用单引号
  singleQuote: true,
  // 尽在需要时在对象属性周围添加引号 可选值"<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 去除对象最末尾元素跟随的逗号 可选值"<none|es5|all>"，默认none
  trailingComma: 'all',
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 默认折行标准 always\never\preserve
  proseWrap: 'always',
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需在开头自动插入@prettier
  insertPragma: false,
  // 换行符使用 lf 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'auto',
  // 是否在对象属性添加空格
  bracketSpacing: true,
  // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: 'css',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // Vue文件脚本和样式标签缩进
  vueIndentScriptAndStyle: false,
}
