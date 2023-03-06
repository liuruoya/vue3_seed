# ⚡ 使用说明

```bash
# 克隆项目
git clone git地址

# 进入项目
cd vue3_seed

# 安装依赖
cnpm install && npm i

# 运行项目
cnpm run dev

# 打包发布
cnpm run build
```

## ⚡ 个别依赖安装

```bash
# mock安装
npm i mockjs -D 
npm i vite-plugin-mock -D

```


### ⚡ 打包预览

```bash

# 命令
vite build  或  cnpm run build

## public path 配置线上环境路径（打包）、本地通过 http-server 访问时，置空即可
VITE_PUBLIC_PATH = ''

### 本地预览

1.本地预览必须把：根目录 .env 文件中的 VITE_PUBLIC_PATH 置空

2.安装 http-server 插件
   # 安装
   cnpm install -g http-server
   # 运行，打包后的 dist 文件夹里打开 cmd
   http-server

3.或者在 package.json 中添加脚本
"scripts": {
  "dev": "vite --force",
  "build": "vite build",
  "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/",
  "serve": "http-server ./dist"
},
// 项目根目录运行
cnpm run serve

4.成功运行

'Starting up http-server, serving ./dist

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://192.168.10.15:8081
  http://127.0.0.1:8081
Hit CTRL-C to stop the server'

####线上预览

部署到服务器,自行前往学习

```
#### ⚡ 框架结构图
├── vue3-seed
	├── public (存放浏览器标题favicon.ico、静态json数据)
	│
	├── src (存放视图、工具类、image)
	│	├── api (与服务端对接的接口函数定义。建议视图文件夹与api文件夹相同，如login文件夹)
	│	│   ├── login (登录接口函数)
	│	│   └── menu (菜单接口函数)
	│	│
	│	├── assets (本地静态资源：图片、svg等)
	│	│
	│	├── components (存放公用全局组件)
	│	│
	│	├── i18n (存放框架国际化内容)
	│	│   ├── lang (框架内置国际化)
	│	│   └── pages (自定义国际化)
	│	│
	│	├── layout (存放框架布局视图)
	│	│   ├── component (布局公用组件)
	│	│   ├── footer (页脚)
	│	│   ├── lockScreen (锁屏)
	│	│   ├── logo (logo)
	│	│   ├── main (主布局)
	│	│   ├── navBars (顶栏信息)
	│	│   │   ├── breadcrumb (面包屑、关闭全屏、菜单搜索、布局配置、用户信息、消息通知)
	│	│   │   └── tagsView (标签页)
	│	│   ├── navMenu (导航菜单)
	│	│   └── routerView (路由视图出口、外链、iframe内嵌)
	│	│
	│	├── mock (存放模拟数据，mock.js。)
	│	│
	│	├── router (存放路由信息)
	│	│
	│	├── stores (存放组件的状态vuex)
	│	│   ├── interface (ts接口类型定义)
	│	│   └── 其他ts文件 (pinia模块化)
	│	│
	│	├── theme (存放框架样式)
	│	│   ├── common (基础样式)
	│	│   ├── media (媒体查询)
	│	│   └── mixins (scss混入)
	│	│
	│	├── utils (存放工具类函数)
	│	│
	│	└── views (存放页面视图)
	│			├── error (404、401)
	│			├── home (首页)
	│			├── login (登录界面)
	│			│   └── component (登录界面组件)
	│			├── system (系统设置)
	│			│   ├── menu (菜单管理)
	│			│   │   └── component (菜单管理组件)
	│			│   └── user (用户管理)
	├── .env (全局默认配置文件，无论什么环境都会加载合并)
	├── .env.development (开发环境的配置文件)
	├── .env.production (生产环境的配置文件)
	├── .eslintignore (eslint忽略配置)
	├── .eslintrc.js (eslint配置)
	├── .gitignore (git提交忽略配置)
	├── .prettierrc.js (prettier代码格式化配置)
	├── CHANGELOG.md (框架更新日志)
	├── index.html (用户页面访问入口)
	├── LICENSE (开源许可证)
	├── package-lock.json (npm锁定安装时的包的版本号)
	├── package.json (包的依赖管理配置文件)
	├── plugins.d.ts (声明文件或模块的语法)
	├── README.md (框架介绍文件)
	├── shim.d.ts (声明文件或模块的语法)
	├── source.d.ts (声明文件或模块的语法)
	├── tsconfig.json (ts配置文件)
	└── vite.config.ts (vite配置文件)