## 开发
`npm run start`

## 测试
1. `test`: jest跑项目中的所有测试文件，并输出测试覆盖率
2. `test:watch`
3. `test:prod`: 推到远程仓库前执行lint和test


## 打包和输出
```
dist
├── lib //commonjs版本，webpack等打包工具使用
│   └── redux.js
├── types //类型定义
│   └── index.d.ts
└── umd //umd版本，可直接使用script标签引入
    └── redux.js
```

## 发布
npm publish

## todo
1. sourceMaps
2. `npm run publish` 集成ci
在本地改版本号，然后打tag，然后推到远程ci，如果ci发现有一个新的tag，就执行发布npm包的脚本


