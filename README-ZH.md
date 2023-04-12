# utils
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BestJarvan/utils-tools)
[![npm](https://img.shields.io/bundlephobia/min/@jarvannnn/utils/0.0.11)](https://www.npmjs.com/package/@jarvannnn/utils)

[doc文档](https://bestjarvan.github.io/utils-tools/)

Welcome to Start、Fork。thx~   XD

[English](./README.md)|中文简体

> 项目中虽然有大量的第三方类库存在，但是每个公司都会有自己的定制化工具包存在，这些工具包就可以通过这种方式改造成npm包安装到项目中。

##### 使用说明

```
// 通过npm安装
npm i --save @jarvannnn/utils
```

#### 调试说明
```
npm i

// 自动启动vue2方便调试、新增方法
npm run serve

// 跑单测
npm run test

// 打包生成文档
npm run build
```

![代码补全](https://fastly.jsdelivr.net/gh/BestJarvan/pic-imgs/imgs/202201171509895.png)

### 前言
1. 项目中经常会用到某些方法，比如格式化时间戳，比如判断环境等等。  
笔者最初是把这些方法抽离出来写成公共方法，但由于后期项目扩展每次都要复制这个工具文件很是麻烦且效率低下，发布npm包正好解决了这个痛点，正好借此机会重构成ts文件并发布npm包。  

2. 本工具内置`vue2.x + ts`，方便开发中调试代码。  
本工具包内部集成了`lodash`的一些方法，详见[文档](https://bestjarvan.github.io/utils-tools/docs/interfaces/lodashtool.html)或者`src/core/lodash-tool`  

3. 本工具使用`typedoc`根据注释自动生成文档，可搜索方法

4. 本项目npm包单元测试通过率100%，同时经过公司多个项目沉淀，且稳定运行，大家如有需要可直接下载拓展使用

[博客传送门](https://bestjarvan.gitee.io/2020/04/14/npm/Typescript+verdaccio/index.html)

本文只简要介绍下整个流程，具体项目[GitHub](https://github.com/BestJarvan/utils-tools)，欢迎Start、Fork。thx~   XD


### 插件
> 本工具包使用下列插件规范开发，定制团队开发规范
- eslint
- tslint
- prettier
- commitlint
- husky

### 目录结构
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
├── public // vue相关
├── home // vue调试页面
├── src // 代码模块
│   ├── core // 核心代码块
│   │   ├── env.ts
│   │   └── ***.ts
│   ├── index.ts // 入口文件
│   ├── tools
│   │   └── index.ts
│   └── types // 声明文件
│       └── index.ts
├── test // 单元测试
│   ├── core // 核心代码单元测试
│   │   ├── env.spec.ts
│   │   └── ***.spec.ts
│   └── index.spec.ts
├── tsconfig.json // ts配置
├── tslint.json // tslint配置
├── .prettierrc // prettier配置
├── .lintstagedrc // lintstage配置
└── typedoc.json // typedoc配置
```

### 100%测试通过率

![测试结果](https://fastly.jsdelivr.net/gh/BestJarvan/pic-imgs/imgs/202201171509157.png)

### 文档输出
1. 配置typedoc
```
// package.json  scripts片段
{
  "build": "npm run lint && gulp && typedoc",
}
// typedoc 自动识别根目录下typedoc.json配置文件

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
v1.1.5    | 新增方法，正常迭代
v1.2.0    | 新增isWxImg，envInfo，isThirdPC方法，兼容多平台和企微头像识别
v1.2.1    | 修复toFixed方法遇见0.1浮点数计算精度出错问题
v1.2.3    | 拓展thumbnail方法
v1.3.0    | 植入lodash方法
v1.3.3    | 拓展lodash方法
v1.3.4    | 节流防抖，新增修饰符
v1.3.5    | envInfo，isThirdPC优化展示方法，返回当前环境
v1.3.6    | thumbnail: 支持API 导入进来的图片不渲染缩略图
v1.4.0    | hexToRgba: 新增16进制转rgba方法
v1.4.1    | thumbnail: 新增1080
v1.5.0    | lodash: 新增_padStart, _padEnd
----------|------------------------
```

#### 参与贡献

1.  新建 feature/xxx 分支
2.  提交代码
3.  新建 Merge Request
