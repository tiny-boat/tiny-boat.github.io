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

<p>在计算机中，数据的逻辑运算涉及四个逻辑运算符/联结词：非（$NOT$）、与（$AND$）、或（$OR$）和异或（$XOR$），关于这些逻辑联结词的含义详见博文<a href="/computer_science/discrete_mathematics/2018/05/04/DM1_logic-and-proof.html">《离散数学(1):逻辑与证明》</a>，这里不再赘述。下面仅对这四种逻辑运算在数据上的应用作简要说明。</p>

<p>$NOT$ 逻辑运算符的唯一应用是对整个位模式作求反运算，图 3-1 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of not-operator.png"></p>
<p class="post-text-tablename">图 3-1 $NOT$ 逻辑运算符的应用</p>

<p>$AND$ 逻辑运算符的一个应用是把一个位模式的指定位复位为 0，完成这一任务的另一个位模式称之为<strong>掩码</strong>（<em>mask</em>），<em>mask</em> 一词的含义有面具、面膜以及伪装、掩饰等。其具体方法是：对需要复位的位，掩码在该位取 0，否则取 1. 图 3-2 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of and-operator.png"></p>
<p class="post-text-tablename">图 3-2 $AND$ 逻辑运算符的应用</p>

<p>$OR$ 逻辑运算符的一个应用是把一个位模式的指定位置位为 1。其具体方法是：对需要置位的位，掩码在该位取 1，否则取 0. 图 3-3 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of or-operator.png"></p>
<p class="post-text-tablename">图 3-3 $OR$ 逻辑运算符的应用</p>

<p>$XOR$ 逻辑运算符的一个应用是把一个位模式的指定位作求反运算。其具体方法是：对需要求反的位，掩码在该位取 1，否则取 0。图 3-4 展示了这一应用。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of xor-operator.png"></p>
<p class="post-text-tablename">图 3-4 $XOR$ 逻辑运算符的应用</p>

<h1>3.2 移位运算</h1>

<p><storng>移位运算</storng>（<em>shift operation</em>）即移动位模式中的位，它包括逻辑移位运算和算术移位运算，前者应用于无符号整数，后者应用于有符号整数。</p>

<p><strong>逻辑移位运算</strong>（<em>logical shift operation</em>）包括逻辑右移运算、逻辑左移运算、循环右移运算和循环左移运算，这些移位运算的共同特征是：如果将其应用于有符号整数，该运算可能会改变数的符号。图 3-5 向我们展示了逻辑移位运算的具体过程。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/logical shift operation 1.png"></p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/logical shift operation 2.png"></p>
<p class="post-text-tablename">图 3-5 逻辑移位运算</p>

<p><strong>算术移位运算</strong>（<em>arithmetic shift operation</em>）包括算术右移运算和算术左移运算，图 3-6 向我们展示了算术移位运算的具体过程。算术右移运算等价于对整数除以 2 并取整，算术左移运算则等价于对整数乘以 2。值得注意的是算术移位运算存在溢出情况，在这种情况下，新的符号位发生了反转而不再与原符号位保持一致。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/arithmetic shift operation.png"></p>
<p class="post-text-tablename">图 3-6 算术移位运算</p>

<p>在结束本小节前，我们再看一个综合应用逻辑运算和移位运算解决实际问题的例子。如图 3-7 所示，我们需要判断原始位模式中第三位究竟为 0 还是为 1，对于这个问题，我们可以采用两次逻辑右移运算和一次由 $AND$ 逻辑运算符执行的逻辑运算来得到答案。如果最终结果为无符号整数 1，则原始位模式中第三位为 1，否则为 0.</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/app of arithmetic and logical shift operation.png"></p>
<p class="post-text-tablename">图 3-7 逻辑运算与移位运算的综合应用</p>

<h1>3.3 算术运算</h1>

<p>算术运算即对实数（整数和浮点数）的四则运算，由于除法运算可以转化为乘法，乘法运算又可以转化为加法，因此我们只介绍实数的加减法。但需要特别强调的是：使用重复的加减运算来实现乘除运算的方法十分低效，人们已经发展出了如 <em>Booth</em> 算法等的更高效的实现乘除运算的方法。笔者认为：对于那些刚刚迈入计算机大门的读者朋友而言，现在就去学习和研究这些更高效的实现乘除运算的方法，是不合时宜的。在入门阶段，我们迫切需要做的是尽快从宏观上建立对这门学科的整体认知。先宏观后微观一直是笔者认同的正确学习方式，然而遗憾的是我们的大学教育似乎是反其道而行之的，以至于我们许多学生在还不知道这门学科到底是干什么、不了解这门学科发展的大致历史的情况下就深陷于对细枝末节的考究中。</p>

<h2>3.3.1 补码表示法中的加减法</h2>

<h2>3.3.2 符号加绝对值表示法中的加减法</h2>

<h2>3.3.3 浮点表示法中的加减法</h2>

<p class="post-text-noindent">未完待续……</p>
</div>