---
layout: post
title:  "Git学习笔记(3):同步Github"
date:   2018-04-28 14:02:00 +0000
categories: Git
---

*Git* 与 *Github* 的远程连接支持两种协议：*HTTPS* 和 *SSH* ，使用后者连接时传输速度更快，并且不必每次输入用户名和密码，以下代码基于 *SSH* 协议。<!--excerpt-->

>为了使数据在网络上从源到达目的，网络通信的参与方必须遵循相同的规则，这套规则称为协议（protocol），它最终体现为在网络上传输的数据包的格式。

创建远程连接的示例代码如下：

```
git remote add origin git@github.com:username/foldername.git
```
其中 *username* 为 *github* 用户名，*foldername* 为需要连接的目录名。若要克隆 *github* 上的内容，可执行类似命令

```
git clone git@github.com:tiny-boat/foldername.git
```
在连接创建后，本地仓库与 *Github* 的同步，主要由推送（*git push*）与拉取（*git pull*）两个命令实现。将本地更新推送到 *github* 的命令如下：

```
git push origin master
```
若提交失败，可先拉取后推送，命令如下：

```
git pull --rebase origin master
git push origin master
```
或者执行以下强行推送的命令

```
git push -f origin master
```
