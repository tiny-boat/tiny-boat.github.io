---
layout: post
title:  "计算机科学导论(2):数据存储"
date:   2018-07-15 09:17:00
categories: Computer_Science Computer_Science_Introduction
excerpt: "数据包括数字、文本、音频、图像和视频"
---

<div class="post-style">

<p>数据包括数字、文本、音频、图像和视频，它们都以<strong>位</strong>（<em>bit, binary digit</em>）的形式存储在计算机中，<em>binary digit</em> 是二进制数的意思。由于各种类型的数据最终都以数字的形式存储在计算机中，所以我们首先阐述计算机是如何存储整数和实数的。</p>

<h1>2.1 数字的存储</h1>

<p>计算机存储整数的方法为<strong>定点表示法</strong>（<em>fixed-point representation</em>）中的<strong>无符号表示法</strong>（<em>unsigned representation</em>）和<strong>补码表示法</strong>（<em>complement representation</em>），计算机存储实数的方法则为<strong>浮点表示法</strong>（<em>float-point representation</em>），浮点表示法又内在地包含了定点表示法中的<strong>符号加绝对值表示法</strong>（<em>sign-and-magnitude representation</em>），下面将逐一介绍上述各种方法。</p>

<h2>2.1.1 定点表示法</h2>

<p>所谓<strong>定点表示法</strong>，就是指小数点位置固定的表示法，它通常用来表示整数，有时也用于表示实数。对于整数而言，小数点固定在最右边且不被存储，图 2-1 展示了整数的定点表示法。定点表示法包括：无符号表示法、符号加绝对值表示法以及补码表示法。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/fixed-point representation.png"></p>
<p class="post-text-tablename">图 2-1 整数的定点表示法</p>

<p><strong>无符号表示法</strong>用于无符号整数的存储，对于用不到负整数的情况，无符号表示法由于不必存储符号而提高了存储的效率，它广泛应用于<strong>计数</strong>中数字的存储、<strong>寻址</strong>中存储单元地址的存储以及<strong>文本图像音频视频</strong>的存储。若计算机中分配给无符号整数的位数为 $n$，则计算机能存储的无符号整数范围为  $0,1,2,\cdots ,2^{n}-1$，此时如果保存大于 $2^{n}-1$ 的整数就会出现<strong>溢出</strong>（<em>overflow</em>）的现象，计算机将丢掉该整数左边的部分位而只保留最右边的 $n$ 位，图 2-2 展示了当 $n$ 为 4 时，无符号整数的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow.png"></p>
<p class="post-text-tablename">图 2-2 无符号整数的溢出</p>

<p><strong>符号加绝对值表示法</strong>虽然是定点表示法，却很少用来表示整数，而主要用于部分实数或者音频采样数据的存储。它将无符号整数的有效范围 $0,1,2,\cdots ,2^{n}-1$ 分成两个相等的子范围，前半部分用来表示非负整数、后半部分用来表示非正整数，在这种表示法中存在两个 0，其最左位用于定义整数符号，0 为正，1 为负。若计算机中分配给有符号整数的位数为 $n$，则计算机能存储的有符号整数范围为  $-\left (2^{n-1}-1 \right),\cdots ,-1,0,1,\cdots ,2^{n-1}-1$，一旦超出这个范围便会发生溢出现象。图 2-3 展示了当 $n$ 为 4 时，符号加绝对值表示法所能表示的所有有符号整数，紧接着的图 2-4 则展示了当 $n$ 为 4 时符号加绝对值表示法的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/sign-and-magnitude representation.png"></p>
<p class="post-text-tablename">图 2-3 符号加绝对值表示法</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow 2.png"></p>
<p class="post-text-tablename">图 2-4 符号加绝对值表示法的溢出</p>

<p><strong>补码表示法</strong>是为几乎所有计算机所采用的有符号整数的表示方法，补码是一种运算，它从原码右边开始复制位直到原码位中第一次出现 1，在复制这个 1 后，对于原码中剩余的其他位取反码运算，即原码位为 1 时补码对应位为 0，原码位为 0 时补码对应位为 1，图 2-5 展示了取整数 00110100 补码的运算过程。所谓补码表示法即是对非负整数以其原码存储，对负数则取其补码存储，并规定最左位为符号位，以 0 为正，以 1 为负。图 2-6 展示了当存储位数 $n$ 为 4 时补码表示法所能表示的所有有符号整数，与符号加绝对值表示法相比，它的表示范围要更大，为 $-2^{n-1} ,\cdots ,-1,0,1,\cdots ,2^{n-1}-1$. 图 2-7 则展示了补码表示法的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/complement operation.png"></p>
<p class="post-text-tablename">图 2-5 取整数 00110100 的补码</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/complement representation.png"></p>
<p class="post-text-tablename">图 2-6 补码表示法</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow 3.png"></p>
<p class="post-text-tablename">图 2-7 补码表示法的溢出</p>

<p class="post-text-noindent">至于人们为什么要费劲巴力地弄出一个补码运算来表示有符号整数，我们将在下一章中阐述。在那里，在有关数据运算的内容中，你将看到补码表示法给运算带来的巨大便利。</p>

<h2>2.1.2 浮点表示法</h2>

<p><strong>浮点表示法</strong>用于实数的存储，一个数字的浮点表示法由<strong>符号</strong>（<em>S, sign</em>）、<strong>指数</strong>（<em>E, exponent</em>）和<strong>尾数</strong>（<em>M, mantissa</em>）三部分组成。其中指数部分表示小数点移动的位数，采用<strong>余码</strong>（<em>excess code</em>）的方式存储，尾数则是小数点右边的二进制数，它采用无符号表示法存储，小数点左边仅留一位、不进行存储且其取值由指数部分决定。</p>

<blockquote>
指数部分是有符号整数，按理来说可以采用补码表示法存储，缘何又要引进新的余码表示法呢？这是因为在余码系统中的所有整数都是正数，而这为不同浮点数之间大小的比较和运算提供了方便。若 $n$ 为指数位数，则所谓余码表示法就是将一个偏移量 $2^{n-1}-1$ 添加到每个数中，这样原来的负数和正数均变为了无符号的正数。图 2-8 展示了当指数位数为 4 时的余码表示法。
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/excess representation.png"></p>
<p class="post-text-tablename">图 2-8 余码表示法</p>
</blockquote>

<p class="post-text-noindent"><strong><em>IEEE</em>二进制浮点数算术标准（<em>ANSI/IEEE Std</em> 754-1985）</strong>规定了四种表示浮点数的方式：<strong>单精度</strong>（32 位，符号 1 位，指数 8 位，尾数 23 位）、<strong>双精度</strong>（64位，符号 1 位，指数 11 位，尾数 52 位）、<strong>延伸单精度</strong>（43位以上，很少使用）与<strong>延伸双精度</strong>（79位以上，通常以80位实现）。另外 <em>IEEE</em> 对浮点数表示还有以下几点规定：</p>

<ul>
<li>当指数部分为 0 时，小数点左边一位恒为 0，否则恒为 1，后者称为<strong>规约数</strong>，前者称为<strong>非规约数</strong>且其小数点移动位数为指数部分的取值减去 1.</li>
<li>当指数部分为 0 且尾数部分也为 0 时，该数表示 0.</li>
<li>当指数部分为 $2^{n}-1$ 且尾数部分为 0 时，该数表示 $\pm \,\infty$.</li>
<li>当指数部分为 $2^{n}-1$ 且尾数部分不为 0 时，该数表示 $NaN$（<em>Not a Number</em>）.</li>
</ul>

<p class="post-text-noindent">图 2-9 展示了十进制数 -2104378.75 在 IEEE 单精度标准下的浮点表示法，表 2-10 则展示了在 IEEE 单精度标准下计算机所能存储的各种极值。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/floating-point representation.png"></p>
<p class="post-text-tablename">图 2-9 单精度标准下 -2104378.75 的浮点表示法</p>

<p class="post-text-tablename">表 2-10 单精度标准下的各种极值</p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/extremum of float.png"></p>

<p>至此，我们已经知道了在计算机中整数和实数是如何存储的，我们或许还有很多疑问，疑问于缘何计算机要以这样的方式而不以另外的方式存储这些数字。亲爱的读者，在我敲下这些文字时，我的心中与你有着同样的疑惑，但我相信，先贤们制定这样的标准而不是那样的标准，选择这样的方式而不是那样的方式，自有其道理所在。现在暂且让我们放下这些或许还需要许许多多其他知识才能求得答案的谜团，来看一看聪明的人们是如何将文本、图像、音频、视频这些看似与数字毫不相干的信息转化为数字（我们称这一过程为编码）进而使得它们能够在计算机中存储的。</p>

<h1>2.2 文本的存储</h1>

<p>在任何语言中，<strong>文本</strong>（<em>text</em>）都可以看作是一系列字符的组合，将文本数字化只需要将语言中的字符集与数字一一对应起来即可。进一步，在计算机中，就是要将语言字符集与<strong>位模式</strong>（<em>bit pattern</em>）即位串一一对应起来。若语言字符集中字符数量为 $n$，则所需位模式的长度为 $\log_{2}n$ ，表 2-11 给出了部分字符数量与位模式长度的关系。</p>

<p class="post-text-tablename">表 2-11 字符数量与位模式长度的关系</p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/relation of ns and lbp.png"></p>

<p class="post-text-noindent">由于人类语言的多样性与差异性，人们先后制定了许许多多不同的文本编码规则，例如：由美国国家标准协会（<em>ANSI</em>）制定的<strong>美国信息交换标准码</strong>（<em><strong>ASCII</strong></em>）、基于 <strong><em>Unicode</em> 字符集</strong>的 <strong><em>UTF-8</em></strong> 编码（<em>8-bit Unicode Transformation Format</em>），基于 <em>Unicode</em> 字符集或<strong>通用字符集</strong>（<em><strong>UCS, Universal Character Set</strong></em>）的 <strong><em>UTF-16/UCS-2</em> </strong> 编码和<strong><em> UTF-32/UCS-4</em></strong> 编码等等。</p>

<p><em>ASCII</em>  最初采用 7 位表示一个字符，因而总共能表示 128 个字符，后来 <em>IBM</em> 在此基础上扩展，用 8 位表示一个字符，扩展后的 <em>ASCII</em> 总共能表示 256 个字符。256 个字符的容量对于英文世界而言已完全足够，但对于动辄几万个字的中文世界而言，这样的容量实在有点捉襟见肘、杯水车薪。后来中国人弄出了自己的编码方案：针对简体中文的 <em><strong>GB2312</strong></em> 和针对繁体中文的 <em><strong>Big5</strong></em>，世界上许多其他国家也弄出了针对自己国家语言的编码方案，于是制定一个统一的包容世界上所有语言的字符集并基于这个统一的字符集制定编码规则就成了人们必须面对的问题。在这样的大背景下，<em>Unicode、UCS</em>，这两个如今已经可以表示多达上亿个符号的字符集，应运而生。<em>Unicode</em> 由多语言软件制造商组成的<strong>统一码联盟</strong>提出，而 <em>UCS</em> 由<strong>国际标准化组织</strong>（<em>ISO</em>）提出，二者于 1991 年前后实现兼容并为创建一个单一编码表而协同工作。从 <em>Unicode 2.0 </em>开始，<em>Unicode</em> 采用了与 <em>ISO 10646-1</em> 相同的字库和字码；<em>ISO</em> 也承诺，<em>ISO 10646 </em>将不会替超出 <em>10FFFF </em>的 <em>UCS-4</em> 编码赋值，以使得两者保持一致。两个项目目前仍都存在，并独立地公布各自的标准。但统一码联盟和 <em>ISO</em> 都同意保持两者标准的码表兼容，并紧密地共同调整任何未来的扩展。下面我们将详细介绍 <em>UTF-8</em> 编码以及与其紧密相关的 <em>UTF-16/UCS-2</em> 编码和 <em>UTF-32/UCS-4</em> 编码，通过对这三种编码规则各自优缺点的比较，我们将会知道：为什么是 <em>UTF-8</em> 而不是其他编码成了如今网络时代文本信息交换的通用规则。</p>

<p><em>UTF-8</em> 是一种可变字节长度的编码规则，表 2-12 向我们展示了这一编码规则。</p>

<p class="post-text-tablename">表 2-12 UTF-8 编码</p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/utf-8.png"></p>

<p class="post-text-noindent">表中 UTF-8 编码一列中，0 和 1 是固定不动的，x 则是 <em>Unicode/UCS</em> 字符对应二进制数的存储位。在<a href="http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html">字符编码笔记：ASCII，Unicode 和 UTF-8</a>一文中，<a href="https://baike.baidu.com/item/%E9%98%AE%E4%B8%80%E5%B3%B0">阮一峰</a>老师将 UTF-8 的编码规则总结如下：</p>

<blockquote>
<br>
UTF-8 的编码规则很简单，只有二条：<br>
<br>
1.对于单字节的符号，字节的第一位设为 0，后面 7 位为这个符号的 Unicode  码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。<br>
<br>
2.对于 $n$ 字节的符号（$n > 1$），第一个字节的前 $n$ 位都设为 1，第 $n + 1$ 位设为 0，后面字节的前两位一律设为 10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。<br>
<br>
</blockquote>

<p class="post-text-noindent">相比 <em>UTF-8</em> 而言，<em>UTF-16/UCS-2</em> 和 <em>UTF-32/UCS-4</em> 编码规则更加简单，在 <em>UTF-16/UCS-2</em> 中，规定每一个字符都用 2 个字节存储，而在 <em>UTF-32/UCS-4</em> 中，则规定每一个字符都用 4 个字节存储。不过这两种编码规则还涉及到<strong>字节序</strong>（<em>byte order</em>）的问题，以 <em>UTF-16/UCS-2</em> 为例，汉字 “严” 的 <em>Unicode</em> 码为 4E25，如果先存储字节 4E，后存储字节 25，这种存储字节的顺序称为<strong>大头方式</strong>（<em>Big Endian</em>），相反如果先存储字节 25，再存储字节 4E，则称为<strong>小头方式</strong>（<em>Little Endian</em>）。由于 <em>UTF-8</em> 有固定的 0 和 1 作为标记，因此计算机识别起来并不困难，但 <em>UTF-16</em> 和 <em>UTF-32</em> 不仅没有区分二者的标记也没有区分不同字节序的标记，因此人们引入了<strong>字节序标记</strong>（<em>BOM, Byte Order Mark</em>），即在每一个文件的最前面加入的一个表示编码顺序和编码方式的字符。表 2-13 列出了 <em>UTF</em> 系列编码对应的字节序标记。</p>

<p class="post-text-tablename">表 2-13 UTF 系列编码的字节序标记</p>
<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/utf-8 BOM.png"></p>

<p>上面我们了解了 <em>UTF</em> 系列编码的规则，下面我们来讨论这三种编码方式的优劣。<em>UTF-16</em>，<em>UTF-32</em> 存在以下几点问题：</p>

<ul>
<li>由于规定统一采用 2 个字节存储字符，<em>UTF-16</em> 能表示的字符数量仅有 6 万多，而 <em>Unicode 5.0</em> 收录的字符就已经达到 99024 个，远远超过了这个范围。<em>UTF-32</em> 虽然克服了这一困难，但所有字符均采用 4 个字节存储，是对存储资源的一种巨大浪费</li>
<li>由于 <em>UTF-16/UTF-32</em>存在字节序问题，在进行信息交换时，如果事先未经协商就会导致乱码，如果事先已经协商但双方一个采用大头方式一个采用小头方式的话，就必须有一方进行转换，信息交换的效率将因此而降低</li>
<li>对 <em>UTF-16/UTF-32</em> 而言，如果发生局部的字节错误，特别是丢失或增加部分字节，此时计算机并不会跳过这些错误，依旧会按照两个字节为一个单位的方式存储和读取文本，这极有可能导致后续字符全部错乱</li>
</ul>

<p class="post-text-noindent">当然 <em>UTF-16/UTF-32</em> 也有其优点，由于每一个字符的位数相同，对使用这些编码格式存储的文本计算其长度、执行索引操作时要更快。并且对于中文字符占多数的文本的存储而言，<em>UTF-16</em> 的方式比 <em>UTF-8</em> 所需的存储空间要小得多，因为在 <em>UTF-8</em> 编码规则下，许多汉字的存储需要 3 个字节。<em>UTF-8</em> 编码不存在上述缺点，它能表示的字符数量可以上亿、不存在字节序问题且容错性较高，但它也存在以下几点不足：</p>

<ul>
<li><em>UTF-8</em> 编码方式对英语而言可以最大限度节约存储空间，但对于中日韩等国家的语言而言它则浪费了存储空间。</li>
<li><em>UTF-8</em> 的可变化的字节长度带来了效率上的问题，无论是计算字符数、执行索引操作等效率都不高。为解决这一问题常将其转化为 <em>UTF-16/UTF-32</em> 编码格式后执行相关操作，执行完毕后再将其转换回去，而这降低了信息处理的效率。</li>
</ul>

<p class="post-text-noindent">综上，我们可以看到，虽然 <em>UTF-8</em> 也存在一些问题，但相比其他二者而言，它突出的优势尤其是不存在字节序以及容错性高的优势，使得它成为了当今网络时代文本信息交换的通用规则。</p>

<br>
<p class="post-text-noindent">未完待续……</p>

</div>