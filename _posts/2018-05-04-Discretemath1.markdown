---
layout: post
title:  "离散数学(1):逻辑与证明"
date:   2018-05-03 11:28:00 +0000
categories: Discrete
---

# 1.1 前世今生

*Git* 是目前世界上最先进的分布式版本控制系统，它的诞生源于 “管理 *Linux* 系统代码” 的需要。

*1991* 年，年仅 *21* 岁、还在芬兰赫尔辛基大学读书的 *[Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)*（[林纳斯·托瓦茨](https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/2122821?fr=aladdin)）就编写出了如今在服务器端得到广泛应用的操作系统 *[Linux](https://baike.baidu.com/item/linux/27050)* 的内核。<!--excerpt-->此后，来自世界各地的众多程序员陆续加入到 *Linux* 的开发工作中，于是代码的管理成为了他们必须面对的重要问题。

*2002* 年以前，各地程序员发来的代码均由 *Linus* 本人通过手工合并。

*2002* 年到 *2005* 年，他们使用 *BitMover* 公司旗下的一款商业分布式版本控制系统 *BitKeeper* 管理代码。

*2005* 年，*Linux* 社区开发 *Samba* 的 *Andrew* 试图破解 *BitKeeper* 协议的举动被 *BitMover* 公司发现，十分恼火的 *BitMover* 公司收回了 *Linux* 社区免费使用 *BitKeeper* 的权利。

此时的 *Linus* 没有选择 “跪地求饶”，而是花了两周时间自己用 *C* 语言写了一个分布式版本控制系统，它就是 *Git*！ 此后，*Git* 迅速成为了世界上最流行的分布式版本控制系统。

2008年，*GitHub* 网站上线，它为开源项目免费提供 *Git* 存储，包括 *jQuery*、*PHP*、*Python*、*Ruby* 在内的无数开源项目先后迁移至 *[GitHub](https://github.com/)*。如今 *GitHub* 俨然成为了程序员界的 *Facebook*，据 *GitHub* 官网发布的 *2017* 年年度[数据报告](https://octoverse.github.com/)显示，目前 *GitHub* 的注册用户数已经达到 *2400* 万人。

天才般的 *Linus* 不仅给世人带来了他伟大的作品 *Linux* 和  *Git*，更为重要的是，他连同他的作品一起，为开源精神在世界各地的广泛传播作出了重要贡献。对于 *Linus*，美国《时代周刊》不吝赞美之词，这样评价道：

>有些人生来就具有统率百万人的领袖风范；另一些人则是为写出颠覆世界的软件而生。唯一一个能同时做到这两者的人，就是托瓦兹。

最后，让我们记住以下两个重要的日子：*8* 月 *25* 日，和 *12* 月 *28* 日。前者是 *27* 年前 *Linux* 内核的诞生之日，后者则是 *49* 年前 *Linus Torvalds* 的出生之日。


# 1.2 版本控制

在项目开发中，对项目的每次修改形成项目新的版本，将这些修改完整记录下来，以期能够把握项目总体进程并能在某个时刻方便快捷地回退到某个历史版本，这就是版本控制。

通常，版本控制系统有两种典型运作方式：集中式与分布式。集中式版本控制系统只在中央服务器上存放完整版本库，一旦中央服务器崩溃，就会面临历史版本信息丢失的风险。分布式版本控制系统不存在真正意义上的中央服务器，所有用户个人电脑上都存放有完整版本库，分布式版本控制系统中的所谓中央服务器只起到方便数据传输（将用户对项目的修改推送给其他用户）的作用。

>版本库：又名仓库（*Repository*），即项目当前版本和全部历史版本构成的集合。

目前集中式版本控制系统的代表有：开源的 *CVS*、*SVN*，*IBM* 的 *ClearCase*，*Microsoft* 的 *VSS* 等等；分布式版本控制系统的代表有：开源的 *Git*、*Mercurial*、*Bazaar*，*BitMover* 的 *BitKeeper* 等等。


# 1.3 安装

*Git* 目前可运行在 *Linux*、*Unix*、*Mac*、*Windows* 等各大平台上，具体安装教程请 [点击这里](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000) 或移步 *[Google](https://www.google.com.hk/)*、*[Baidu](https://www.baidu.com/)* 等搜索引擎自行解决之。

安装完成后，还需给 *Git* 仓库指定用户名和邮箱，代码示例如下（*global* 参数代表该机器中所有 *Git* 仓库都将使用这一配置）：

```
$ git config --global user.name "tiny-boat"
$ git config --global user.email "llygg6@gmail.com"
```


# 1.4 内部框架
下图展示了 *Git* 内部的基本框架，它由工作区（*Working Directory*）和版本库（*Repository*）共同构成，版本库中又由暂存区（*stage*）和分支（*branch*，默认为 *master*，它是 *Git* 创建的第一个分支，有一个指针 *HEAD* 指向它）构成。接下来的 [Git 学习笔记 (2)：Git 基本操作](https://www.longzf.com/git/2018/04/23/Git2_basic-operation.html) 将使我们熟悉 *Git* 的这一内部框架。

<div align='center'>
<img src="http://upload-images.jianshu.io/upload_images/6113920-a6436998275527f8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">
<p> </p>
<p>图 1-1: Git 内部框架示意图</p>
</div>
