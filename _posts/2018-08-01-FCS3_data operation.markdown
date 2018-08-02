---
layout: post
title:  "计算机科学导论(3):数据运算"
date:   2018-08-01 15:50:00
categories: Computer_Science Computer_Science_Introduction
excerpt: "数据运算包括逻辑运算、移位运算和算术运算"
---

<div class="post-style">

<p>上一章我们简要介绍了数据是如何在计算机中存储，本章我们将在上一节的基础上介绍存储在计算机中的数据是如何进行运算的。在计算机中，数据的运算大致可以分为三类：逻辑运算、移位运算和算术运算，下面我们逐一介绍这三种运算。</p>

<h1>3.1 逻辑运算</h1>

<p>在计算机中，数据的逻辑运算涉及四个逻辑运算符/联结词：非（${\rm NOT}$）、与（${\rm AND}$）、或（${\rm OR}$）和异或（${\rm XOR}$），关于这些逻辑联结词的含义详见博文<a href="/computer_science/discrete_mathematics/2018/05/04/DM1_logic-and-proof.html">《离散数学(1):逻辑与证明》</a>，这里不再赘述。下面仅对这四种逻辑运算在数据上的应用作简要说明。</p>

<p>${\rm NOT}$ 逻辑运算符的唯一应用是对整个位模式作求反运算，图 3-1 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of not-operator.png"></p>
<p class="post-text-tablename">图 3-1 ${\rm NOT}$ 逻辑运算符的应用</p>

<p>${\rm AND}$ 逻辑运算符的一个应用是把一个位模式的指定位复位为 0，完成这一任务的另一个位模式称之为<strong>掩码</strong>（<em>mask</em>），<em>mask</em> 一词的含义有面具、面膜以及伪装、掩饰等。其具体方法是：对需要复位的位，掩码在该位取 0，否则取 1. 图 3-2 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of and-operator.png"></p>
<p class="post-text-tablename">图 3-2 $AND$ 逻辑运算符的应用</p>

<p>${\rm OR}$ 逻辑运算符的一个应用是把一个位模式的指定位置位为 1。其具体方法是：对需要置位的位，掩码在该位取 1，否则取 0. 图 3-3 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of or-operator.png"></p>
<p class="post-text-tablename">图 3-3 ${\rm OR}$ 逻辑运算符的应用</p>

<p>${\rm XOR}$ 逻辑运算符的一个应用是把一个位模式的指定位作求反运算。其具体方法是：对需要求反的位，掩码在该位取 1，否则取 0。图 3-4 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of xor-operator.png"></p>
<p class="post-text-tablename">图 3-4 ${\rm XOR}$ 逻辑运算符的应用</p>

<h1>3.2 移位运算</h1>

<p><storng>移位运算</storng>（<em>shift operation</em>）即移动位模式中的位，它包括逻辑移位运算和算术移位运算，前者应用于无符号整数，后者应用于有符号整数。</p>

<p><strong>逻辑移位运算</strong>（<em>logical shift operation</em>）包括逻辑右移运算、逻辑左移运算、循环右移运算和循环左移运算，这些移位运算的共同特征是：如果将其应用于有符号整数，该运算可能会改变数的符号。图 3-5 向我们展示了逻辑移位运算的具体过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/logical shift operation 1.png"></p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/logical shift operation 2.png"></p>
<p class="post-text-tablename">图 3-5 逻辑移位运算</p>

<p><strong>算术移位运算</strong>（<em>arithmetic shift operation</em>）包括算术右移运算和算术左移运算，图 3-6 向我们展示了算术移位运算的具体过程。算术右移运算等价于对整数除以 2 并取整，算术左移运算则等价于对整数乘以 2。值得注意的是算术移位运算存在溢出情况，在这种情况下，新的符号位发生了反转而不再与原符号位保持一致。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/arithmetic shift operation.png"></p>
<p class="post-text-tablename">图 3-6 算术移位运算</p>

<p>在结束本小节前，我们再看一个综合应用逻辑运算和移位运算解决实际问题的例子。如图 3-7 所示，我们需要判断原始位模式中第三位究竟为 0 还是为 1，对于这个问题，我们可以采用两次逻辑右移运算和一次由 ${\rm AND}$ 逻辑运算符执行的逻辑运算来得到答案。如果最终结果为无符号整数 1，则原始位模式中第三位为 1，否则为 0.</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of arithmetic and logical shift operation.png"></p>
<p class="post-text-tablename">图 3-7 逻辑运算与移位运算的综合应用</p>

<h1>3.3 算术运算</h1>

<p>算术运算即对实数（整数和浮点数）的四则运算，由于除法运算可以转化为乘法，乘法运算又可以转化为加法，因此我们只介绍实数的加减法。但需要特别强调的是：使用重复的加减运算来实现乘除运算的方法十分低效，人们已经发展出了如 <em>Booth</em> 算法等的更高效的实现乘除运算的方法。笔者认为：对于那些刚刚迈入计算机大门的读者朋友而言，现在就去学习和研究这些更高效的实现乘除运算的方法，是不合时宜的。在入门阶段，我们迫切需要做的是尽快从宏观上建立对这门学科的整体认知。先宏观后微观一直是笔者认同的正确学习方式，然而遗憾的是我们的大学教育似乎是反其道而行之的，以至于我们许多学生在还不知道这门学科到底是干什么、不了解这门学科发展的大致历史的情况下就深陷于对细枝末节的考究中。下面我们逐一介绍补码表示法中的加减法、符号加绝对值表示法中的加减法以及浮点表示法中的加减法。</p>

<h2>3.3.1 补码表示法中的加减法</h2>

<p>设数 $A$、数 $B$ 均以补码表示法存储于计算机中，则计算 $A+B$ 就是把两数直接相加，而计算 $A-B$ 等价于计算 $A+\left(-B\right)$，根据上一章的内容我们知道：在计算机中，当运算涉及的数据以补码表示法存储时，计算 $A+\left(-B\right)$ 的过程就是将 $A$ 与 $B$ 的补码 $\overline{B}+1$ 相加的过程，这里 $\overline{B}$ 表示 $B$ 的反码。图 3-8 展示了补码表示法下加减法的运算过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/addition and subtraction in complement representation.png"></p>
<p class="post-text-tablename">图 3-8 补码表示法下加减法的运算过程</p>

<h2>3.3.2 符号加绝对值表示法中的加减法</h2>

<p>相比于补码表示法下的加减法，符号加绝对值表示法中的加减法要复杂得多。以 $A\pm B$ 为例，它涉及 8 种情况：正加正、负加负、正减负、负减正、正加负、负加正、正减正、负减负。但实际上我们并不需要对上述 8 种情况逐一设计计算方法，图 3-9 向我们展示了符号加绝对值表示法下加减法的运算过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/addition and subtraction in sign-and-magnitude representation.png"></p>
<p class="post-text-tablename">图 3-9 符号加绝对值表示法下加减法的运算过程</p>

<p>初看这张图时，我们大概会一头雾水。没关系，下面我们对上图作个简要说明，在看完这个说明之后你可能还会有疑惑，但情况一定会比你初见这张图时好上不少。</p>

<p>首先，当运算为减法时，$B_S \ \leftarrow \ \overline{B}_S$ 用来改变第二个整数 $B$ 的符号位，它所完成的任务就是将原本的减法运算变为加法运算，如此一来我们所需考虑的 8 种情况就减少为 4 种，即正加正、负加负、正加负、负加正，而这可以分为两种情况考虑：一种是相同符号数相加，另一种是不同符号数相加。</p>

<p>接着执行的异或运算 $A_S {\rm XOR} B_S$ 就是用来判断两个加数的符号是否相同的，这里 $A_S$、$B_S$ 代表 $A$、$B$（对减法而言是 $\overline{B}$） 的符号位。根据异或运算的规则，当 $A_S$、$B_S$ 同号时，$A_S {\rm XOR} B_S$ 即 $S$ 的取值为 0，否则为 1.  </p>

<p>当符号相同时，$A + B$ 的绝对值就等于 $A$ 的绝对值 $A_M$ 与 $B$ 的绝对值 $B_M$ 的和，而 $A + B$ 的符号则与 $A$ 或 $B$ 的符号一致。当符号不同时，$A + B$ 的绝对值就等于 $A$ 的绝对值 $A_M$ 与 $B$ 的绝对值 $B_M$ 的差的绝对值，而 $A + B$ 的符号则由 $A_M$ 和 $B_M$ 的大小关系决定。</p>

<p>当 $A_M \geq B_M$ 时，$A + B$ 的符号由 $A$ 的符号决定，此时 $A_M-B_M$ 必为非负整数，正如前面所言，计算机在计算 $A_M-B_M$ 的值时实际上执行的是计算 $A_M+\left(\overline{B}_M+1\right)$ 的过程，但由于 $A_M-B_M$ 的计算结果为非负整数，而对非负整数而言补码和原码是一致的，因此计算结果去除符号位后即为 $R_M$ 的取值.</p>

<p>当 $A_M < B_M$时，$A + B$ 的符号由 $B$ 的符号决定，此时 $A_M-B_M$ 必为负数，而对负数而言补码和原码是不一致的，因此我们看到在这种情况下计算完 $A_M-B_M$ 后还要对其结果取一次补码运算，即图中的 $R_M \ \leftarrow \ \overline{R}_M+1$，如此得到的结果在去除符号位后才是 $R_M$ 的值.</p>

<p>从图中我们还可以看到：对于 $A_M$、$B_M$ 大小关系作出判断的依据是 $A_M+\left(\overline{B}_M+1\right)$ 的计算结果是否会发生上溢。<em>Behrouz Forouzan</em> 先生在其所著的《计算机科学导论》一书中指出：可以证明，当 $A_M \geq B_M$ 时，$A_M+\left(\overline{B}_M+1\right)$ 的结果会发生上溢，否则不会发生上溢，至于如何证明，笔者至今还不得而知。图 3-10 向我们展示了三对以符号加绝对值表示法格式存储的数的相加过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/three example of addition in sign-and-magnitude representation 1.png"></p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/three example of addition in sign-and-magnitude representation 2.png"></p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/three example of addition in sign-and-magnitude representation 3.png"></p>
<p class="post-text-tablename">图 3-10 符号加绝对值整数加法的三个例子</p>

<h2>3.3.3 浮点表示法中的加减法</h2>

<p>在上一章中，我们曾经指出：浮点表示法内在地包含了符号加绝对值表示法，其体现在符号加尾数的组合上。因此浮点表示法下实数的加减法同样建立在符号加绝对值整数加减法的基础上。图 3-11 向我们展示了浮点表示法下加减法的运算过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/addition and subtraction in floating-point representation.png"></p>
<p class="post-text-tablename">图 3-10 浮点表示法下加减法的运算过程</p>

<p>需要指出的是：上图显示的运算过程是简化的版本。下面我们以计算 $5.75 + 161.875$ 为例对上图加以阐述。以单精度浮点表示法为例，5.75 和 161.875 在计算机中表示为如下位模式：</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/example of add in floating-point representation 1.png"></p>

<p class="post-text-noindent">由于是加法，我们直接进入去规范化的步骤，所谓去规范化即是给尾数增加隐含的 1 并将相应的指数加 1. 去规范化后的位模式如下所示：</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/example of add in floating-point representation 2.png"></p>

<p class="post-text-noindent">接下来我们统一指数，将较小的指数与较大的指数统一为较大的指数并移动相应尾数，在这里就是把第一个指数加 5，并把第一个尾数右移 5 位，统一指数后的位模式如下所示：</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/example of add in floating-point representation 3.png"></p>

<p class="post-text-noindent">接着我们对两个数的符号和尾数组合作符号加绝对值加法，加法结果的位模式如下所示：</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/example of add in floating-point representation 4.png"></p>

<p class="post-text-noindent">最后尾数中没有溢出，我们将其重新规范化得到最终的计算结果为：</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/example of add in floating-point representation 5.png"></p>

<p>至此，我们已经对数据的存储与运算有了一个粗略的了解，接下来的第 4、第 5、第 6 、第 7 、第 8 章，我们将走进计算机硬件与软件的世界。在那里，我们将依次讨论<strong>计算机的组成原理</strong>、<strong>计算机网络</strong>、<strong>操作系统</strong>、<strong>程序设计语言</strong>以及<strong>数据结构与算法</strong>。事实上，这里每一章内容都可以单独成书，它们是通往计算机世界所必不可少的五把钥匙，具体学习这五方面内容的顺序大致为：程序设计语言$\ \rightarrow \ $数据结构与算法$\ \rightarrow \ $计算机组成原理$\ \rightarrow \ $操作系统$\ \rightarrow \ $计算机网络。虽然要全面理解这五大块内容，需要离散数学的基础，也需要电路的基础，但即便我们缺乏这样的基础，我们也可以先从宏观上建立对这些内容的整体认知。相信我，当我们站得更高时必将看得更远，我们心中所拥有的宏大格局必将帮助我们在知识的海洋中乘风破浪、所向披靡。同学们，准备好了吗，抓好扶手，我们过几天就出发！</p>

</div>