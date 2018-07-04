---
layout: post
title:  "C语言(1):初识C语言"
date:   2018-05-22 09:08:00
categories: C
excerpt: "本文介绍了 C 的历史、特性、编程机制和编程步骤"
---

<div class="post-style">

<p>1972年，贝尔实验室的<a href="https://baike.baidu.com/item/%E4%B8%B9%E5%B0%BC%E6%96%AF%C2%B7%E9%87%8C%E5%A5%87">丹尼斯·里奇</a>（<em>Dennis Ritch</em>）和<a href="https://baike.baidu.com/item/%E8%82%AF%C2%B7%E6%B1%A4%E6%99%AE%E9%80%8A">肯·汤普逊</a>（<em>Ken Thompson</em>）在开发 <a href="https://baike.baidu.com/item/unix"><em>UNIX</em></a> 操作系统时设计了 <em>C</em> 语言。尽管此后，各式各样的<a href="https://baike.baidu.com/item/%E9%AB%98%E7%BA%A7%E8%AF%AD%E8%A8%80/299113">高级编程语言</a>（<em>high-level programming languages</em>）层出不穷，但 <em>C</em> 语言历经 46 年风雨始终屹立不倒。</p>

<p>直到如今，因为 <em>C</em> 语言具有的高效快速（<em>efficient and fast</em>）、强大灵活（<em>powerful and flexible</em>）、代码紧凑（<em>compact code</em>）、面向程序员（<em>programmer oriented</em>）以及可移植性（<em>portability</em>）等诸多优点，它依旧是应用最为广泛的高级编程语言之一。这些应用包括：</p>

<ul>
<li>开发<a href="https://baike.baidu.com/item/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/192">操作系统</a>（<em>develop operating system</em>）</li>
<li>开发其他程序语言（<em>develop other programming language</em>）</li>
<li>开发<a href="https://baike.baidu.com/item/%E7%BC%96%E8%AF%91%E5%99%A8">编译器</a>或<a href="https://baike.baidu.com/item/%E8%A7%A3%E9%87%8A%E5%99%A8/10418965?fr=aladdin">解释器</a>（<em>develop compiler or interpreter</em>）</li>
<li>开发应用程序（<em>develop application program</em>）</li>
<li><a href="https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E7%B3%BB%E7%BB%9F">嵌入式系统</a>编程（<em>embedded system programming</em>）</li>
<li>科学领域编程（<em>scientific programming</em>）</li>
</ul>

<p class="post-text-noindent">当然，金无足赤、人无完人，<em>C</em> 语言也有一些缺点，例如：</p>

<ul>
<li><em>C</em> 语言使用<a href="https://baike.baidu.com/item/%E6%8C%87%E9%92%88">指针</a>（<em>pointers</em>），而涉及指针的编程错误常常难以察觉</li>
<li><em>C</em> 语言对用户的限制比许多其他程序语言如 <a href="https://baike.baidu.com/item/pascal/241171"><em>Pascal</em></a>、<a href="https://baike.baidu.com/item/C%2B%2B"><em>C++</em></a> 要少，这加大了犯错误的风险</li>
<li><em>C</em> 语言的紧凑性可能增大程序理解的难度，<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85C%E8%AF%AD%E8%A8%80%E6%B7%B7%E4%B9%B1%E4%BB%A3%E7%A0%81%E5%A4%A7%E8%B5%9B/8089471?fr=aladdin">国际 <em>C</em> 语言混乱代码大赛</a>（<em>IOCCC, The International Obfuscated C Code Contest</em>）自 1984 年开始几乎每年举办一次，其目标就是写出最有创意又最让人费解的 <em>C</em> 语言代码</li>
</ul>

<p class="post-text-noindent">然而，瑕不掩瑜，历久弥新的 <em>C</em> 语言仍然是软件行业的核心技能。在加州伯克利分校获得博士学位的 <em>Stephen Prata</em> 先生在他所著的<a href="https://pan.baidu.com/s/1AwH9KOsgPWOcWvHQw1W-yw">《<em>C Primer Plus</em>》</a>一书中就这样写道：</p>

<blockquote>
If you want a job writing software, one of the first questions you should be able to answer yes to is "oh say, can you C?" <br>
如果你想获得一份编写软件的工作，那么你需要作出肯定回答的首要问题便是：“哦说吧，你会用 C 吗？”
</blockquote>


<h1>1.1 CPU 的工作原理</h1>

<p>在学习使用 <em>C</em> 编程之前，对计算机尤其是 <a href="https://baike.baidu.com/item/%E4%B8%AD%E5%A4%AE%E5%A4%84%E7%90%86%E5%99%A8/284033?fromtitle=CPU&fromid=120556"><em>CPU</em></a> 的工作原理有一个粗略的认知是十分必要的。计算机通常由运算设备、存储设备、输入设备和输出设备构成，这些设备中的核心便是以中央处理单元（<em>CPU, Central Processing Unit</em>）为代表的运算设备。<em>CPU</em> 的工作原理大致如下：</p>

<blockquote>
它从内存（memory）中提取（fetch）并执行一条<strong>指令</strong>（instruction），接着它从内存中提取并执行下一条指令，如此继续下去，直到所有指令执行完毕，频率为 1 GHz 的 CPU 每秒能执行大约 10 亿次这样的操作。CPU 能理解的指令非常有限且非常具体，这些指令的集合被称作<strong>指令集</strong>（instruction set），其中许多指令都用来完成移动数字位置的任务，如提取内存中的数字到寄存器中。CPU 有自己的小工作区，它就是由若干个<a href="https://baike.baidu.com/item/%E5%AF%84%E5%AD%98%E5%99%A8"><strong>寄存器</strong></a>（register）组成的，每个寄存器可以存储（hold）一个数字。寄存器 1 存储下一条指令的内存地址，CPU 使用这一信息提取下一条指令并将其存储在寄存器 2，而后更新寄存器 1 中的内容为下一条指令的内存地址。
</blockquote>


<p class="post-text-noindent">以执行 “3+4=?” 的任务为例，其大致步骤如下：</p>

<ul>
<li>复制内存地址 2000 上的数字 3 到寄存器 1</li>
<li>复制内存地址 2004 上的数字 4 到寄存器 2</li>
<li>将寄存器 2 中的内容与寄存器 1 中的内容相加，并将结果 7 存储在寄存器 1 中</li>
<li>复制寄存器 1 中的内容到内存地址 2008 上</li>
</ul>

<p class="post-text-noindent">可以看到：对于计算机而言，实现一个简单的加法就需要如此多的步骤（注：上述描述还只是简化版）。如果我们使用机器语言（计算机能直接识别的仅由 0,1 构成的指令）来编写程序，那么可以想象编程将是一个多么索然无味而又浪费时间的过程。正是基于这样的原因，高级编程语言应运而生并不断获得发展。它的出现大大降低了编程门槛，推动了计算机技术的普及和应用，也缔造了如今规模庞大的程序员群体。</p>


<h1>1.2 C 标准</h1>

<p><em>C</em> 标准（<em>C Standard</em>）是不同的 <em>C</em> 语言<strong>实现</strong>（<em>implementation</em>）共同遵循的统一规范。实现是计算机科学中的一个术语，下面是维基百科对实现的解释：</p>

<blockquote>
In computer science, an implementation is a realization of a technical specification or algorithm as a program, software component, or other computer system through computer programming and deployment. Many implementations may exist for a given specification or standard. For example, web browsers contain implementations of World Wide Web Consortium-recommended specifications, and software development tools contain implementations of programming languages (A programming language implementation is a system for executing computer programs) .<br>
在计算机科学中，一个实现指的是通过计算机编程和调度将一项技术规范或算法变成实实在在的一段程序、软件组成部分或者其他计算机系统。许多实现是为某个特定的规范或标准存在的。例如，网络浏览器包含万维网联盟推荐的规范，软件开发工具包含编程语言的实现（编程语言的实现是一个用来执行计算机程序的系统）。
</blockquote>


<p><em>C</em> 语言刚出道时，人们并没有为其设立标准，1978 年出版的由布莱恩·柯林汉（<em>Brian Kernighan</em>）和丹尼斯·里奇（<em>Dennis Ritchie</em>）合著的<a href="https://pan.baidu.com/s/1nblipZ7kDDeFwPKJU7b-Bg">《<em>The C Programming Language</em>》</a>事实上成为了当时公认的 <em>C</em> 标准（被称为 <em>K&R C</em> 或 <em>Classic C</em>），而 <em>UNIX</em> 实现提供的库则成为了公认的 <em>C</em> 库（<em>library</em>）标准。直到 1989 年，第一个正式的 <em>C</em> 标准才由<a href="https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%AD%A6%E4%BC%9A/1351184">美国国家标准协会</a>（<em>ANSI, Ameirican National Standards Institute</em>）公布。1990 年<a href="https://baike.baidu.com/item/%E5%9B%BD%E9%99%85%E6%A0%87%E5%87%86%E5%8C%96%E7%BB%84%E7%BB%87">国际标准化组织</a>（<em>ISO, International Organization for Standardization</em>）宣布采用这套标准，这套标准因而被称为 <em>ANSI/ISO C</em> 标准，又由于其首先于 1989 年由 <em>ANSI</em> 提出，因而又被称为 <a href="https://baike.baidu.com/item/c89"><em>C89</em></a> 标准或 <a href="https://baike.baidu.com/item/ANSI%20C/7657277"><em>ANSI C</em></a> 标准。在这一标准的制定中，标准委员会提出了 "保持 <em>C</em> 的精神"（<em>Keep the spirit of C</em>）这一指导原则，具体包括：</p>

<ul>
<li>信任程序员（<em>Trust the programmer</em>）</li>
<li>不要妨碍程序员做需要做的事（<em>Don’t prevent the programmer from doing what needs to be done</em>）</li>
<li>保持语言的精炼和简单（<em>Keep the language small and simple</em>）</li>
<li>对一种操作提供唯一的方法（<em>Provide only one way to do an operation</em>）</li>
<li>即便无法保证可移植性，也要让程序运行更快（<em>Make it fast, even if it is not guaranteed to be portable</em>）</li>
</ul>

<p class="post-text-noindent">此后，<em>C</em> 标准又历经了两次修订，这两次修订得到的新标准分别被称为 <a href="https://baike.baidu.com/item/c99"><em>C99</em></a> 标准和 <a href="https://baike.baidu.com/item/C11"><em>C11</em></a> 标准。其中，<em>C99</em> 标准在 <em>C89</em> 标准的基础上开始支持国际化编程、提高了对科学和工程项目中关键数值计算的适用性并且弥补了许多明显的缺陷，而 <em>C11</em> 标准则在 <em>C99</em> 的基础上提出了一些新的指导原则：出于对当前编程安全性的担忧，信任程序员的目标将被弱化。</p>


<h1>1.3 C 的编程机制</h1>

<p><em>C</em> 的编程机制（<em>programming mechanism</em>）如图 1-1 所示，它首先用<strong>编译器</strong>（<em>compiler</em>）将<strong>源代码文件</strong>（<em>source code file</em>）转换为<strong>目标代码文件</strong>（<em>objective code file</em>），然后用[<strong>链接器</strong>](https://baike.baidu.com/item/%E9%93%BE%E6%8E%A5%E5%99%A8)（<em>linker</em>）合并目标代码文件、<strong>启动代码文件</strong>（<em>startup code file</em>）和<strong>库代码文件</strong>（<em>library code file</em>）为<strong>可执行文件</strong>（<em>executable code file</em>）。</p>

<blockquote>
目标代码文件是由源代码转化为的机器语言代码构成的文件，但它并不是一个完整的可执行程序，它还缺乏重要的启动代码以及库代码。启动代码是程序和操作系统的<strong>接口</strong>（interface），接口是计算机科学中的一个术语，它指的是连接两台设备或两个系统的电路、接头或程序（interface is an electrical circuit, connection or program that joins one device or system to another）。库代码是 C 标准库中函数的代码，由于几乎所有的 C 程序都要使用 C 标准库中的函数，因此程序要执行，库代码必不可少，当然实际中链接器不会提取所有的库代码，而只会提取用到的库函数代码。
</blockquote>

<p class="post-text-center">
<img src="/assets/img/C/cmechanism.png">
</p>
<p class="post-text-tablename">图 1-1  C 的编程机制</p>


<h1>1.4 C 的编程步骤</h1>

<p>图 1-2 展示了使用 <em>C</em> 编程的一般步骤，实际操作时往往需要多次往复。值得注意的是：人们容易忽视图中的前 2 步：定义程序的目标和设计程序。这种忽略对简单程序编写而言并无不可，但却给我们编写复杂程序埋下不小的隐患。在编写复杂程序前，如果不做事先的详细规划，就容易导致写出的程序缺乏条理、漏洞百出、令人费解。所谓磨刀不误砍柴工，学习编程请从养成先规划再动手编写代码的良好习惯开始，哪怕这样会使你在一开始时慢人几拍。</p>

<p class="post-text-center">
<img src="/assets/img/C/cprogramstep.png">
</p>
<p class="post-text-tablename">图 1-2  C 的编程步骤</p>

<h1>1.5 C 程序的结构</h1>

<p>一个 C 程序通常由<strong>预处理器指令</strong>（<em>preprocessor directive</em>）、<strong>函数原型/声明</strong>（<em>function prototyping/declaration</em>）、<strong>函数</strong>（<em>function</em>）这三个部分构成。下面是一个简单的 C 程序示例（<a title="点击下载源代码" href="https://github.com/tiny-boat/my-C-code/archive/master.zip">下载源代码</a>），该程序将会在屏幕上打印如图 1-3 所示的五行文字，后面我们将依托这个程序示例对构成 C 程序的三大部分作简要介绍。</p>
</div>

<div class="code-style">

{% highlight C %}
// an example of C program

/* ------------------------ */
/* 1.preprocessor directive */
/* ------------------------ */

#include <stdio.h>  
// stdio.h: standard input/output header 

/* ---------------------------------- */
/* 2 function prototyping/declaration */
/* ---------------------------------- */

void br(void);  // void means a large empty space in English
void ic(void);  

/* ---------- */
/* 3.function */
/* ---------- */

// 3.1 function main(): the int means the output of function is an integer, and the void means function has no parameters

int main(void) // the following block {...} is a compound-statement
{
	int fingers, toes, twofold_fingers, square_toes;
	
	br();  // an expression-statement
	printf(", ");
	ic();
	printf("\n");
	
	ic();
	printf("\n");
	
	br();
	printf("\n");
	
	fingers = 10;  // an expression-statement
	toes = 10;
	twofold_fingers = fingers * 2;
	square_toes = toes * toes;
	printf("Every normal human has %d fingers and %d toes.\nIf you have %d fingers and %d toes, you may be an extraterrestrial.", fingers, toes, twofold_fingers, square_toes);
	
	getchar();  // to wait for a keystroke
	return 0;  // a jump-statement
}

// 3.2 function br()

void br(void)
{
	printf("Brazil, Russia");
}

// 3.3 function ic()

void ic(void)
{
	printf("India, China");
}

{% endhighlight %}

</div>

<div class="post-style">

<p class="post-text-center">
<img src="/assets/img/C/implementation result 1.png">
</p>
<p class="post-text-tablename">图 1-3  示例 C 程序的执行结果</p>

<p><em>C</em> 程序的预处理器指令是在编译器执行编译工作之前，<em>C</em> <strong>预处理器</strong>（<em>preprocessor</em>）将会执行的命令。在上面的示例代码中，以 “<em>#</em>” 开头的这行代码就是 <em>C</em> 预处理器指令的一个典型例子。在这行代码中，”<em>include</em>“ 执行的是 ”复制粘贴“ 的工作，即把 <em>stdio.h</em> 头文件的内容拷贝到程序文件中，它的存在为不同程序间共享部分相同信息以及程序的维护与管理提供了极大便利，但要注意的是它不以 “;” 结尾也不是一条 <em>C</em> 语言语句（C language statement）。<em>stdio.h</em> 文件是位于 <em>C</em> <strong>编译器软件包</strong>（<em>compiler packages</em>）中的标准输入/输出头文件，<strong>头文件</strong>（<em>header</em>）是程序顶部的信息集合，在大多数情况下，头文件包含了编译器在构建可执行程序时所需要的信息，例如常量、函数原型等，但它并不包含函数的实际代码，函数的实际代码位于库代码文件中。</p>

<p>函数原型/声明是 <em>C90</em> 标准新增的内容，旧式编译器可能无法识别。函数原型用来告知编译器将要使用的函数名称及其使用方法，<em>C</em> 标准建议要为程序中所有使用到的函数提供函数原型。对于那些位于标准库中的函数而言，通过预处理器指令便可以完成这一任务，但对于非标准库中的自定义函数而言，则要通过编写语句完成这一任务。上述示例中，由于函数 br()、ic() 是不属于标准库的自定义函数，因此在编写函数前要加入了两行函数原型/声明。</p>

<p>函数是 <em>C</em> 程序的主体 未完待续……</p>

</div>