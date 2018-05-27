---
layout: post
title:  "Git学习笔记(2):基本操作"
date:   2018-04-23 18:43:00 +0000
categories: Git
excerpt: "本文将介绍如何在 Git 中创建仓库、提交修改、管理修改和回退版本"
---

# 2.1 创建工作区与版本库

工作区与版本库的创建十分简单，使用 *mkdir*、*cd*、*git init* 三个命令即可完成，*mkdir* 是 *make directory* 的缩写，*cd* 是 *change directory* 的缩写，*init* 是 *initialization* 的缩写，下面是示例代码：

{% highlight Bash shell scripts %}
$ mkdir learngit
$ cd learngit
$ git init
{% endhighlight %}

执行前两行命令后，一个名为 *learngit* 的工作区就创建了，执行最后一行命令后，*learngit* 目录下将出现名为 *.git* 的隐藏文件夹，它就是版本库。


# 2.2 修改提交

修改提交是指将 “工作区的修改” 或 “版本库暂存区的修改” 提交到版本库分支，而其中将 “工作区的修改提交到版本库分支” 的过程又包含了将 “版本库暂存区的修改提交到版本库分支” 的过程。

在 *Git* 中，无论是在工作区中添加新的文件、删除旧的文件，还是对已有文件进行修改、将已有文件回退到历史版本等，都被视作是对工作区的修改。

将工作区的修改提交到版本库需要经历两个步骤、使用两个命令：*git add/rm* 和 *git commit*，前者执行将工作区修改写入版本库暂存区的任务，后者执行将版本库暂存区的修改提交到版本库分支的任务，下面是示例代码（注：非 $ 号开头的行为系统输出）：

{% highlight Bash shell scripts %}
$ git add readme.txt
$ git commit -m "wrote a readme file"
[master (root-commit) 910e7dd] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt

$ git add readme.txt readme2.txt readme3.txt
$ git commit -m "three files are added"
[master 83570d5] three files are added
 2 files changed, 4 insertions(+)
 create mode 100644 readme2.txt
 create mode 100644 readme3.txt

$ rm readme3.txt
$ git rm readme3.txt
rm 'readme3.txt'
$ git commit -m "delete readme3.txt"
[master dfd6ba0] delete readme3.txt
 1 file changed, 2 deletions(-)
 delete mode 100644 readme3.txt
{% endhighlight %}


# 2.3 管理修改

管理修改，即管理对工作区或版本库暂存区的修改，可借助以下一些命令实现。
- *git status* 命令用来查看工作区与版本库的当前状态
- *git diff* 命令用来查看工作区被修改的文件与版本库分支当前指针指向文件的差异
- *git chekout -- \<file\>* 命令用来撤销对工作区的修改，即用版本库当前指针指向文件替代工作区被修改的文件
- *git reset HEAD \<file\>* 命令用来撤销对版本库暂存区的修改

其中后两个命令在 *git status* 的系统输出中均有提示，无需记忆，相关示例代码如下：

{% highlight Bash shell scripts %}
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
{% endhighlight %}
工作区当前状态为 *modified: readme.txt*，即 *readme.txt* 文件被修改了；版本库当前状态为 *Changes not staged for commit*，即工作区的修改还未放入版本库暂存区以待提交到版本库分支。

{% highlight Bash shell scripts %}
$ git diff
diff --git a/readme.txt b/readme.txt
index d8036c1..013b5bc 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
\ No newline at end of file
{% endhighlight %}
工作区中被修改的文件与版本库分支中当前指针指向文件的差异为：*version* 被更改为了 *distributed version*.

{% highlight Bash shell scripts %}
$ git add readme.txt

$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   readme.txt

{% endhighlight %}
在将文件修改写入版本库暂存区后，工作区当前状态仍为 *modified: readme.txt*，而版本库当前状态更改为 *Changes to be committed*，即版本库暂存区修改待提交到版本库分支。

{% highlight Bash shell scripts %}
$ git commit -m "add distributed"
[master 116a472] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git status
On branch master
nothing to commit, working tree clean
{% endhighlight %}
在将版本库暂存区修改提交到版本库分支后，工作区当前状态更改为 *working tree clean*，即工作区的修改已提交到版本库分支，现在工作区是干净的；版本库当前状态更改为 *nothing to commit*，即版本库暂存区没有任何修改待提交到版本库分支。


# 2.4 版本回退
版本回退，即重置版本库分支中指针的指向，将版本库分支中的指针指向某个历史版本，可借助以下一些命令实现。

- *git reset --hard commit_id* 用来重置（*reset*）版本库分支中指针的指向，*commit_id* 是版本号
- *git reset --hard HEAD~num* 用来重置（*reset*）版本库分支中指针的指向，*num* 为往前回退版本数。此外，*HEAD~1* 可写为 *HEAD*^， *HEAD~2* 可写为 *HEAD*^^，依此类推
- *git log* 用来查看当前指针指向版本及该版本之前全部历史版本的日志（*log*）信息，这些信息包括版本号、作者、日期和提交说明
- *git reflog* 用来查看指针指向过的所有版本的版本号信息（注：*ref* 有裁判员之意，这里的指针大概相当于裁判员）

下面是相关示例代码：

{% highlight Bash shell scripts %}
$ git log
commit 83570d55f4c0af6b0221addebfe0d399ac03a21c (HEAD -> master)
Author: tiny-boat <llygg6@gmail.com>
Date:   Mon Apr 23 16:50:30 2018 +0800

    three files are added

commit 116a4728136602afcdaea6c41a7937c37c0e2ea1
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:35:12 2018 +0800

    add distributed

commit 910e7dd133373704f0462a28cce54ee2ca1d541b
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:18:30 2018 +0800

    wrote a readme file

$ git reset --hard HEAD~1
HEAD is now at 116a472 add distributed

$ git log
commit 116a4728136602afcdaea6c41a7937c37c0e2ea1 (HEAD -> master)
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:35:12 2018 +0800

    add distributed

commit 910e7dd133373704f0462a28cce54ee2ca1d541b
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:18:30 2018 +0800

    wrote a readme file

$ git reflog
116a472 (HEAD -> master) HEAD@{0}: reset: moving to HEAD~1
83570d5 HEAD@{1}: commit: three files are added
116a472 (HEAD -> master) HEAD@{2}: commit: add distributed
910e7dd HEAD@{3}: commit (initial): wrote a readme file

$ git reset --hard 83570d5
HEAD is now at 83570d5 three files are added

$ git log
commit 83570d55f4c0af6b0221addebfe0d399ac03a21c (HEAD -> master)
Author: tiny-boat <llygg6@gmail.com>
Date:   Mon Apr 23 16:50:30 2018 +0800

    three files are added

commit 116a4728136602afcdaea6c41a7937c37c0e2ea1
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:35:12 2018 +0800

    add distributed

commit 910e7dd133373704f0462a28cce54ee2ca1d541b
Author: tiny-boat <llygg6@gmail.com>
Date:   Sun Apr 22 19:18:30 2018 +0800

    wrote a readme file

$ git reflog
83570d5 (HEAD -> master) HEAD@{0}: reset: moving to 83570d5
116a472 HEAD@{1}: reset: moving to HEAD~1
83570d5 (HEAD -> master) HEAD@{2}: commit: three files are added
116a472 HEAD@{3}: commit: add distributed
910e7dd HEAD@{4}: commit (initial): wrote a readme file
{% endhighlight %}