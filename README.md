# utils
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://gitee.com/bestjarvan/utils/pulls)
[![npm](https://img.shields.io/bundlephobia/min/@jarvannnn/utils/0.0.11)](https://www.npmjs.com/package/@jarvannnn/utils)
[![star](https://gitee.com/bestjarvan/utils/badge/star.svg?theme=dark)](https://gitee.com/bestjarvan/utils)
[![fork](https://gitee.com/bestjarvan/utils/badge/fork.svg?theme=dark)](https://gitee.com/bestjarvan/utils/members)

使用typescript搭建、rollup+gulp编译打包的一个小型工具包，欢迎fork、start

[doc文档](https://bestjarvan.gitee.io/utils/)

#### 文件目录
```
.
├── LICENSE
├── README.md
├── docs // typedoc生成的文档
│   ├── assets
│   ├── globals.html
│   ├── index.html
│   └── interfaces
├── gulpfile.js // gulp+rollup配置文件
├── package.json
├── src // 代码模块
│   ├── core // 核心代码块
│   │   ├── env.ts
│   │   └── ***.ts
│   ├── index.ts // 入口文件
│   ├── tools
│   │   └── index.ts
│   └── types // 声明文件
│       └── index.ts
├── tsconfig.json // ts配置
├── tslint.json // tslint配置
├── .prettierrc // prettier配置
├── .lintstagedrc // lintstage配置
└── typedoc.json // typedoc配置

```

#### 测试通过率
```
 PASS  test/core/verify.spec.ts (6.704s)
 PASS  test/core/env.spec.ts (6.706s)
 PASS  test/core/is.spec.ts (6.71s)
 PASS  test/core/format.spec.ts (6.715s)
 PASS  test/core/date.spec.ts (6.742s)
 PASS  test/index.spec.ts (6.75s)
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
  verify.ts |     100 |      100 |     100 |     100 |                   
 src/tools  |     100 |      100 |     100 |     100 |                   
  index.ts  |     100 |      100 |     100 |     100 |                   
------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       51 passed, 51 total
Snapshots:   0 total
Time:        8.492s
Ran all test suites.
```
#### 使用说明

```
// 通过npm安装
npm i --save @jarvannnn/utils
```

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
