# 快速入门

此文档将手把手的带您从零开始搭建一个基于 koa + typescript 开发一个博客系统的后端接口

## 环境准备

- 操作系统：支持 `macOS`，`Linux`，`Windows`
- 运行环境：v16.20.1

## 搭建步骤

:::tip 📌 小建议
我强烈建议您自己是手动敲一遍命令，这样会加固您的编程能力。~~这将有助于您对常用命令的理解~~

:::

## 1. 克隆项目 ( 推荐 )

创建一个文件夹用来放置项目，并进入这个文件夹

```sh
# 创建文件夹
$ mkdir server
# 进入文件夹
$ cd server
# 克隆仓库
$ git clone https://github.com/212063551/blog-server.git
# 查看项目自述文件完成项目启动
```

## 2. 从零开始搭建 ( 不太推荐，因为真的很复杂 )

###### 1. 目录创建

创建基本的目录用来放置我们的配置文件

###### 2. 安装依赖包

项目包管理器使用 `yarn` ，您也可以使用 `bun` 或 `npm` 或 `pnpm` 替代

安装 `koa`、`koa-router`、`koa-body`、`@koa/cors`、`bcryptjs`、`ejs`、`jsonwebtoken`、`koa-views`、 `mongodb`、`mongoose`

```sh
$ yarn add koa koa-router koa-body  @koa/cors bcryptjs ejs jsonwebtoken  koa-views mongodb mongoose chalk@4.1.2
```

安装 TypeScript 类型包
`@types/bcryptjs`、`@types/jsonwebtoken`、`@types/koa`、`@types/koa-router`、`@types/koa-static`、`@types/koa__cors`、`@types/mongoose`、`@types/node`、`nodemon`、`typescript`、

```sh
$ yarn add @types/bcryptjs @types/jsonwebtoken @types/koa @types/koa-router @types/koa-static @types/koa__cors @types/mongoose @types/node nodemon typescript --save -D
```
