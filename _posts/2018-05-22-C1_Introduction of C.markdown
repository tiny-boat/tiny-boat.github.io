---
layout: post
title:  "C语言(1):初识C语言"
date:   2018-05-21 09:08:00
categories: C
excerpt: "C语言简介"
---

1972年，贝尔实验室的[丹尼斯·里奇](https://baike.baidu.com/item/%E4%B8%B9%E5%B0%BC%E6%96%AF%C2%B7%E9%87%8C%E5%A5%87)（*Dennis Ritch*）和[肯·汤普逊](https://baike.baidu.com/item/%E8%82%AF%C2%B7%E6%B1%A4%E6%99%AE%E9%80%8A)（*Ken Thompson*）在开发 [*UNIX*](https://baike.baidu.com/item/unix) 操作系统时设计了 *C* 语言。尽管此后，各式各样的[高级编程语言](https://baike.baidu.com/item/%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80/299113)（*high-level programming languages*）层出不穷，但 *C* 语言历经 46 年风雨始终屹立不倒。

直到如今，因为 *C* 语言具有的高效快速（*efficient and fast*）、强大灵活（*powerful and flexible*）、代码紧凑（*compact code*）、面向程序员（*programmer oriented*）以及可移植性（*portability*）等诸多优点，它依旧是应用最为广泛的高级编程语言之一。这些应用包括：

- 开发[操作系统](https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/192)（*develop operating system*）
- 开发其他程序语言（*develop other programming language*）
- 开发[编译器](https://baike.baidu.com/item/%E7%BC%96%E8%AF%91%E5%99%A8)或[解释器](https://baike.baidu.com/item/%E8%A7%A3%E9%87%8A%E5%99%A8/10418965?fr=aladdin)（*develop compiler or interpreter*）
- 开发应用程序（*develop application program*）
- [嵌入式系统](https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E7%B3%BB%E7%BB%9F)编程（*embedded system programming*）
- 科学领域编程（*scientific programming*）

当然，金无足赤、人无完人，*C* 语言也有一些缺点，例如：

- *C* 语言使用[指针](https://baike.baidu.com/item/%E6%8C%87%E9%92%88)（*pointers*），而涉及指针的编程错误常常难以察觉
- *C* 语言对用户的限制比许多其他程序语言如 *Pascal*、*C++* 要少，这加大了犯错误的风险
- *C* 语言的紧凑性可能增大程序理解的难度，国际 *C* 语言混乱代码大赛（*IOCCC, The International Obfuscated C Code Contest*）自 1984 年开始几乎每年举办一次，其目标就是写出最有创意又最让人费解的 *C* 语言代码

然而，瑕不掩瑜，历久弥新的 *C* 语言仍然是软件行业的核心技能。在加州伯克利分校获得博士学位的 *Stephen Prata* 先生在他所著的《*C Primer Plus*》一书中就这样写道：

<div>
<blockquote class="quote-style">
<em>If you want a job writing software, one of the first questions you should be able to answer yes to is "oh say, can you C?"</em> <br>
如果你想获得一份编写软件的工作，那么你需要作出肯定回答的首要问题便是：“哦说吧，你会用 <em>C</em> 吗？”
</blockquote>
<br>
</div>

# 1.1 CPU 的工作原理

计算机通常由运算设备、存储设备、输入设备和输出设备构成，这些设备中的核心便是以中央处理单元（*CPU, Central Processing Unit*）为代表的运算设备。*CPU* 的工作原理大致如下：

<div>
<blockquote class="quote-style">
它从内存（<em>memory</em>）中提取（<em>fetch</em>）并执行一条指令（<em>instruction</em>），接着它从内存中提取并执行下一条指令，如此继续下去，直到所有指令执行完毕，频率为 1<em> GHz</em> 的 <em>CPU</em> 每秒能执行大约 10 亿次这样的操作。CPU 能理解的指令非常有限且非常具体，这些指令的集合被称作指令集（<em>instruction set</em>），其中许多指令都用来完成移动数字位置的任务，如提取内存中的数字到寄存器中。<em>CPU</em> 有自己的小工作区，它就是由若干个寄存器（<em>register</em>）组成的，每个寄存器可以存储（<em>hold</em>）一个数字。寄存器 1 存储下一条指令的内存地址，<em>CPU</em> 使用这一信息提取下一条指令并将其存储在寄存器 2，而后更新寄存器 1 中的内容为下一条指令的内存地址。
</blockquote>
</div>

以执行 “3+4=?” 的任务为例，其大致步骤如下：

1. 复制内存地址 2000 上的数字 3 到寄存器 1
2. 复制内存地址 2004 上的数字 4 到寄存器 2
3. 将寄存器 2 中的内容与寄存器 1 中的内容相加，并将结果 7 存储在寄存器 1 中
4. 复制寄存器 1 中的内容到内存地址 2008 上

可以看到：对于计算机而言，实现一个简单的加法就需要如此多的步骤。如果我们使用机器语言（计算机能直接识别的指令，仅由 0 和 1 构成）来编写程序，那么可以想象编程将是一个多么索然无味而又浪费时间的过程。正是基于这样的原因，高级编程语言应运而生并不断获得发展，它的出现大大降低了编程门槛，推动了计算机技术的普及和应用，也缔造了如今规模庞大的程序员群体。

<br>

# 1.2 C 标准

*C* 标准（*C Standard*）是不同的 *C* 语言实现（*implementation*）共同遵循的统一规范。实现是计算机科学中的一个术语，下面是维基百科给出的解释：

<div>
<blockquote class="quote-style">
<em>In computer science, an implementation is a realization of a technical specification or algorithm as a program, software component, or other computer system through computer programming and deployment. Many implementations may exist for a given specification or standard. For example, web browsers contain implementations of World Wide Web Consortium-recommended specifications, and software development tools contain implementations of programming languages (A programming language implementation is a system for executing computer programs) .</em><br>
在计算机科学中，一个实现指的是通过计算机编程和调度将一项技术规范或算法变成实实在在的一段程序、软件组成部分或者其他计算机系统。许多实现是为某个特定的规范或标准存在的。例如，网络浏览器包含万维网联盟推荐的规范，软件开发工具包含编程语言的实现（编程语言的实现是一个用来执行计算机程序的系统）。
</blockquote>
</div>

*C* 语言刚出道时，人们并没有为其设立标准，1978 年出版的由布莱恩·柯林汉（*Brian Kernighan*）和丹尼斯·里奇（*Dennis Ritchie*）合著的《*The C Programming Language*》事实上成为了当时公认的 *C* 标准（被称为 *K&R C* 或 *Classic C*），而 *UNIX* 实现提供的库则成为了公认的 *C* 库（*library*）标准。直到 1989 年，第一个正式的 *C* 标准才由美国国家标准协会（*ANSI, Ameirican National Standards Institute*）公布。1990 年国际标准化组织（*ISO, International Organization for Standardization*）宣布采用这套标准，这套标准因而被称为 *ANSI/ISO C* 标准，又由于其首先于 1989 年由 *ANSI* 提出，因而又被称为 *C89* 标准或 *ANSI C* 标准。在这一标准的制定中，标准委员会提出了 "保持 *C* 的精神"（*Keep the
spirit of C*）这一指导原则，具体包括：

- 信任程序员（*Trust the programmer*）
- 不要妨碍程序员做需要做的事（*Don’t prevent the programmer from doing what needs to be done*）
- 保持语言的精炼和简单（*Keep the language small and simple*）
- 对一种操作提供唯一的方法（*Provide only one way to do an operation*）
- 即便无法保证可移植性，也要让程序运行更快（*Make it fast, even if it is not guaranteed to be portable*）

此后，*C* 标准又历经了两次修订，这两次修订得到的新标准分别被称为 *C99* 标准和 *C11* 标准。其中，*C99* 标准在 *C89* 标准的基础上开始支持国际化编程、提高了对科学和工程项目中关键数值计算的适用性并且弥补了许多明显的缺陷，而 *C11* 标准则在 *C99* 的基础上提出了一些新的指导原则：出于对当前编程安全性的担忧，信任程序员的目标将被弱化。