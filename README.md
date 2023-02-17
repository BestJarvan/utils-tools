# utils
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BestJarvan/utils-tools)
[![npm](https://img.shields.io/bundlephobia/min/@jarvannnn/utils/0.0.11)](https://www.npmjs.com/package/@jarvannnn/utils)

[docs](https://bestjarvan.github.io/utils-tools/)

Welcome to Start、Fork。thx~   XD

English|[中文简体](./README-ZH.md)

##### Instructions for use

```
// install utils
npm i --save @jarvannnn/utils
```

#### Debugging instructions
```
npm i

// Automatically start vue2 to facilitate debugging and add new methods
npm run serve

// Unit test
npm run test

// Build dist
npm run build
```

![project](https://fastly.jsdelivr.net/gh/BestJarvan/pic-imgs/imgs/202201171509895.png)

### Foreword
1. Certain methods are often used in projects, such as formatting timestamps, judging the environment, and so on.
The author originally extracted these methods and wrote them as public methods, but because it is very troublesome and inefficient to copy this tool file every time the project is expanded in the later stage, releasing the npm package just solved this pain point, and just took this opportunity to reconstruct the ts file And publish the npm package.

2. This tool has built-in `vue2.x + ts`, which is convenient for debugging code during development.
This toolkit integrates some methods of `lodash`, see[docs](https://bestjarvan.github.io/utils-tools/docs/interfaces/lodashtool.html) or `src/core/lodash-tool`  

3. This tool uses `typedoc` to automatically generate documentation based on comments, searchable methods

4. The npm package unit test pass rate of this project is 100%. At the same time, it has been precipitated by multiple projects of the company and is running stably. If you need it, you can directly download it and expand it.

[Blogs](https://bestjarvan.gitee.io/2020/04/14/npm/Typescript+verdaccio/index.html)



### Plugins
> This toolkit is developed using the following plug-in specifications, custom team development specifications
- eslint
- tslint
- prettier
- commitlint
- husky

### Directory
```
.
├── LICENSE
├── README.md
├── docs // typedoc output
│   ├── assets
│   ├── globals.html
│   ├── index.html
│   └── interfaces
├── gulpfile.js // gulp+rollup config
├── package.json
├── public // vue
├── home // vue enter
├── src // code
│   ├── core // core code block
│   │   ├── env.ts
│   │   └── ***.ts
│   ├── index.ts // main
│   ├── tools
│   │   └── index.ts
│   └── types // declare
│       └── index.ts
├── test
│   ├── core
│   │   ├── env.spec.ts
│   │   └── ***.spec.ts
│   └── index.spec.ts
├── tsconfig.json
├── tslint.json
├── .prettierrc
├── .lintstagedrc
└── typedoc.json
```

### 100% Test pass

![test](https://fastly.jsdelivr.net/gh/BestJarvan/pic-imgs/imgs/202201171509157.png)

### Docs output
```
{
  "build": "npm run lint && gulp && typedoc",
}

```

#### Version

```
----------|------------------------
Version     |  Remark
----------|------------------------
v0.0.1    | init
v0.1.0    | add vue2.6
v0.1.2    | fix bug
v1.1.1    | add namespace
v1.1.2    | fix thumbnail method judgment, if an empty array is passed in, an error will be reported
v1.1.3    | fix throttle, debounce, move the identification variable to the inside of the function, thumbnail method supports larger image format
v1.1.5    | update
v1.2.0    | added isWxImg, envInfo, isThirdPC methods, compatible with multi-platform and Qiwei avatar recognition
v1.2.1    | fix toFixed method encountered 0.1 floating-point calculation precision error problem
v1.3.0    | add lodash
v1.3.3    | update lodash
v1.3.4    | add debounce, throttle
v1.4.0    | hexToRgba: added hexadecimal to rgba method
v1.4.1    | thumbnail: added 1080
----------|------------------------
```
