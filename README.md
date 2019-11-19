开发时
开发时，你都是要将你的ts文件编译为js然后使用的，所以在开发的时候需要tsc -w

测试

打包和输出
1. 输出commonjs 这个是import package in webpack 或者 browserify 或者在node 环境时使用
2. umd 直接使用script引入
dist
  lib: commonjs main字段
  umd: umd unpkg字段

发布
tslint
commit format
