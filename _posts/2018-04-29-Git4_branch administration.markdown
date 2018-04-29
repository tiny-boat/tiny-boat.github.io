---
layout: post
title:  "Git学习笔记(4):分支管理"
date:   2018-04-29 15:46:00 +0800
categories: Git
---

# 4.1 多分支存在的意义
 
*Git* 不仅拥有分布式这样优秀的版本控制系统运作方式，而且具有强大的分支管理能力。多分支的存在，为项目的多人协作开发提供了便利，而强大的分支管理能力又进一步增强了这种便利性。

我们知道，在项目的多人开发进程中，如果所有人都将自己工作区的修改提交到同一分支，那么可以想象这将是一幅怎样混乱不堪的风景画，避免这种混乱不堪正是多分支存在的意义。

有了多个分支，不同的人就可以在不同的分支上独立进行相关开发，而后通过分支合并完成项目总的开发工作。（我们也可以把这种做法称为分布式的开发，因为它听起来和 *MapReduce* 的工作原理很像）

>*MapReduce* 是一种编程模型，用于大规模数据集（大于 1 *TB*）的并行运算。*Map*（映射）和 *Reduce*（归约）是其主要思想。它的出现使得程序员在不会分布式并行编程的情况下，也可以将自己的程序运行在[分布式系统](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F)上。

# 4.2 分支管理

分支管理包括分支的查看、创建、切换、合并与删除等操作，它们对应的命令如下所示：

* 查看、创建与切换分支
  + 查看分支：*git branch*
  + 创建分支：*git branch \<name\>*
  + 切换分支：*git checkout \<name\>*
  + 创建+切换分支：*git checkout -b \<name\>*
* 合并某分支到当前分支
  + *Fast forward* 模式（不会留下分支合并的历史）： *git merge \<name\>*
  + 普通模式（会留下分支合并图，可通过 *git log --graph* 命令查看）：*git merge --no-ff -m "description" \<name\>*
* 删除分支
  + 分支已合并：*git branch -d \<name\>*
  + 分支未合并：*git branch -D \<name\>*

# 4.3 Git stash

*git stash* 是 *git* 提供的一个十分有用的功能。

当我们在某个分支上工作，由于任务还未完成而不能提交时，如果突然接到某个需要在另外分支上操作的紧急任务，就可能面临之前的工作前功尽弃的风险。

但 *git* 提供的 *stash* 功能为我们规避了这样的风险，使用 *git stash* 命令可以将当期工作状态存储下来，当我们解决完手头的紧急任务后，又可以使用 *git stash apply* 或 *git stash pop* 命令还原之前保存的工作状态，两个命令的区别在于：前者不会删除存储而后者会。

另外使用 *git stash list* 命令可以查看所有存储下来的工作状态，使用 *git stash drop* 命令可以删除存储下来的工作状态。

# 4.4 多人协作

多人协作的工作模式通常如下：
- 查看远程/本地分支信息：*git remote -v*、*git branch*
- 如果本地不存在远程分支对应的分支，创建之：git checkout -b branch-name origin/branch-name
- 如果本地分支与远程分支没有链接关系，创建之：git branch --set-upstream branch-name origin/branch-name
- 推送修改：git push origin branch-name；
- 如果推送失败，先拉取，本地合并解决冲突后再推送。