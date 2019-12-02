## 开发
`npm run start`

## 测试
1. `test`: jest跑项目中的所有测试文件，并输出测试覆盖率
2. `test:watch`
3. `test:prod`: 推到远程仓库前执行test


## 打包和输出
`npm run build`
```
dist
├── lib //commonjs版本，webpack等打包工具使用
│   └── pkgName.js
├── types //类型定义
│   └── index.d.ts
└── umd //umd版本，可直接使用script标签引入
    └── pkgName.js
```

## 发布
集成到了github action中，当推送代码到master分支或者合并代码到master分支的时候都会触发actions中的命令。
所以开发流程应该是在特性分支进行开发，合并到master分支的触发github action就进行自动发版。
**注意** 需要配置自己的仓库的`secrets.npm_token`到`.github/workflows/npmpublish.yml`中，配置路径为settings中的secrets。




