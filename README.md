# SMU_WebService

## 简介

这是一套基于上海海事大学学生系统而开发的 RESTful API，旨在帮助调用者直接获取学生成绩、课表等信息数据。

### 开发原理

通过截取和分析HTTP请求信息来模拟用户登录、查询等一系列行为，并对爬取得到的HTML文本数据进行结构化处理，最终将其统一为 `JSON` 格式数据并返回。



## 开发技术&环境

### 主要使用技术

- Node.js
- Koa2 Web框架
- JavaScript ES6
- async/await 来处理异步调用

### 开发环境

- Node.js v8.0.0
- npm v5.0.0

如有不兼容情况发生，请升级Node.js版本。推荐使用 [nvm](https://github.com/creationix/nvm) 来管理Node.js版本。



## 使用

1. 利用 `git clone ` 命令来下载本项目代码
2. 进入本项目根目录 如：`cd SMU_WebService/`
3. 执行 `npm install` 安装项目依赖环境包
4. 执行 `npm start` 开始运行项目代码



## 开发任务

### Done

- [x] 模拟登陆教务系统

### Todo

- [ ] 抓取学生基本信息
- [ ] 抓取成绩信息
- [ ] 抓取课表信息
- [ ] 模拟登陆学生中心系统
- [ ] 抓取一卡通余额信息
- [ ] 抓取图书馆借书情况信息



##  接口文档

[点击此处](./documents/index.md)



## LICENSE

#### The MIT license

本项目仅供开发学习研究使用，禁止被用作商业以及其他不正当用途。若因此产生的一切不良后果与作者本人无关。



## 其他

#### 路漫漫其修远兮

本项目长期更新中……如有意见和建议，欢迎提Issue。





