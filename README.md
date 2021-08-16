# utils
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://gitee.com/bestjarvan/utils/pulls)
[![npm](https://img.shields.io/bundlephobia/min/@jarvannnn/utils/0.0.11)](https://www.npmjs.com/package/@jarvannnn/utils)

xbb工具包总合

[doc文档](http://xbb_frontend.gitee.io/xbb-utils/)

#### 使用说明

```
// 通过npm安装
npm i --save xbb-utils
```

#### 调试说明
```
npm i

npm run serve
```

#### 文件目录
```
.
├── LICENSE
├── README.md
├── babel.config.js
├── coverage // 单测结果
│   └── lcov-report
│       └── src
│           └── index.html // 单测结果页面入口
├── docs // typedoc生成的文档
│   ├── assets
│   ├── globals.html
│   ├── index.html
│   └── interfaces
├── gulpfile.js // gulp+rollup配置文件
├── package.json
├── src // 代码模块
│   ├── core // 核心代码块
│   │   ├── env.ts
│   │   └── **.ts
│   ├── index.ts // 入口文件
│   ├── tools
│   │   └── index.ts // 工具
│   └── types // 声明文件
│       └── index.ts // interface
├── tests // 单元测试
│   └── unit // 核心测试模块
├── home // vue调试页面
│   └── ** // 调试
├── vue.config.js // vue项目配置(调试用)
├── jest.config.js // jest单测配置
├── tsconfig.json // ts配置
├── tslint.json // tslint配置
├── .prettierrc // prettier配置
├── .lintstagedrc // lintstage配置
└── typedoc.json // typedoc配置

```

#### 100%测试通过率
```
> jest --coverage

 PASS  test/core/verify.spec.ts
 PASS  test/core/is.spec.ts
 PASS  test/core/env.spec.ts
 PASS  test/index.spec.ts
 PASS  test/core/format.spec.ts
 PASS  test/core/date.spec.ts
 PASS  test/core/method.spec.ts
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |     100 |      100 |     100 |     100 |                   
 src        |     100 |      100 |     100 |     100 |                   
  index.ts  |     100 |      100 |     100 |     100 |                   
 src/core   |     100 |      100 |     100 |     100 |                   
  date.ts   |     100 |      100 |     100 |     100 |                   
  env.ts    |     100 |      100 |     100 |     100 |                   
  format.ts |     100 |      100 |     100 |     100 |                   
  is.ts     |     100 |      100 |     100 |     100 |                   
  method.ts |     100 |      100 |     100 |     100 |                   
  verify.ts |     100 |      100 |     100 |     100 |                   
 src/tools  |     100 |      100 |     100 |     100 |                   
  index.ts  |     100 |      100 |     100 |     100 |                   
------------|---------|----------|---------|---------|-------------------

Test Suites: 7 passed, 7 total
Tests:       57 passed, 57 total
Snapshots:   0 total
Time:        3.985s, estimated 4s
Ran all test suites.
```

#### 版本说明

```
----------|------------------------
版本号     |  备注
----------|------------------------
v0.0.1    | 基础搭建
v0.1.0    | 新增vue2.x调试
v0.1.2    | 修复bug，维护更新
v1.1.0    | 优化math方法，新增thumbnail, formatToNumber, dealNumber, getGuid方法
v1.1.1    | 开启命名空间
v1.1.2    | 修复thumbnail方法判断，若传入空数组报错的bug
v1.1.3    | 修复throttle、debounce，标识变量移动到函数内部，thumbnail方法支持更大图片格式
----------|------------------------
```

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
