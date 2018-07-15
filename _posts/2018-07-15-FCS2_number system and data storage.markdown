---
layout: post
title:  "计算机科学导论(2):数据存储"
date:   2018-07-15 09:17:00
categories: Computer_Science Computer_Science_Introduction
excerpt: "数据包括数字、文本、音频、图像和视频"
---

<div class="post-style">

<p>数据包括数字、文本、音频、图像和视频，它们都以<strong>位</strong>（<em>bit, binary digit</em>）的形式存储在计算机中，<em>binary digit</em> 是二进制数的意思。由于各种类型的数据最终都以数字的形式存储在计算机中，所以我们首先阐述计算机是如何存储整数和实数的。</p>

<p>计算机存储整数的方法为<strong>定点表示法</strong>（<em>fixed-point representation</em>）中的<strong>无符号表示法</strong>（<em>unsigned representation</em>）和<strong>补码表示法</strong>（<em>complement representation</em>），计算机存储实数的方法则为<strong>浮点表示法</strong>（<em>float-point representation</em>），浮点表示法又内在地包含了定点表示法中的<strong>符号加绝对值表示法</strong>（<em>sign-and-magnitude representation</em>），下面将逐一介绍上述各种方法。</p>

<p>所谓<strong>定点表示法</strong>，就是指小数点位置固定的表示法，它通常用来表示整数。对于整数而言，小数点固定在最右边且不被存储，图 2-1 展示了整数的定点表示法。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/fixed-point representation.png"></p>
<p class="post-text-tablename">图 2-1 整数的定点表示法</p>

<p class="post-text-noindent"><strong>无符号表示法</strong>用于无符号整数的存储，对于用不到负整数的情况，无符号表示法由于不必存储符号而提高了存储的效率，它广泛应用于<strong>计数</strong>中数字的存储、<strong>寻址</strong>中存储单元地址的存储以及<strong>文本图像音频视频</strong>的存储。若计算机中分配给无符号整数的位数为 $n$，则计算机能存储的无符号整数范围为  $0,1,2,\cdots ,2^{n}-1$，此时如果保存大于 $2^{n}-1$ 的整数就会出现<strong>溢出</strong>（<em>overflow</em>）的现象，计算机将丢掉该整数左边的部分位而只保留最右边的 $n$ 位，图 2-2 展示了当 $n$ 为 4 时，无符号整数的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow.png"></p>
<p class="post-text-tablename">图 2-2 无符号整数的溢出</p>

<p class="post-text-noindent"><strong>符号加绝对值表示法</strong>虽然是定点表示法，却很少用来表示整数，而主要用于部分实数或者音频采样数据的存储。它将无符号整数的有效范围 $0,1,2,\cdots ,2^{n}-1$ 分成两个相等的子范围，前半部分用来表示非负整数、后半部分用来表示非正整数，在这种表示法中存在两个 0，其最左位用于定义整数符号，0 为正，1 为负。若计算机中分配给有符号整数的位数为 $n$，则计算机能存储的有符号整数范围为  $-\left (2^{n-1}-1 \right),\cdots ,-1,0,1,\cdots ,2^{n-1}-1$，一旦超出这个范围便会发生溢出现象。图 2-3 展示了当 $n$ 为 4 时，符号加绝对值表示法所能表示的所有有符号整数，紧接着的图 2-4 则展示了当 $n$ 为 4 时符号加绝对值表示法的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/sign-and-magnitude representation.png"></p>
<p class="post-text-tablename">图 2-3 符号加绝对值表示法</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow 2.png"></p>
<p class="post-text-tablename">图 2-4 符号加绝对值表示法的溢出</p>

<p class="post-text-noindent"><strong>补码表示法</strong>是为几乎所有计算机所采用的有符号整数的表示方法，补码是一种运算，它从原码右边开始复制位直到原码位中第一次出现 1，在复制这个 1 后，对于原码中剩余的其他位取反码运算，即原码位为 1 时补码对应位为 0，原码位为 0 时补码对应位为 1，图 2-5 展示了取整数 00110100 补码的运算过程。所谓补码表示法即是对非负整数以其原码存储，对负数则取其补码存储，并规定最左位为符号位，以 0 为正，以 1 为负。图 2-6 展示了当存储位数 $n$ 为 4 时补码表示法所能表示的所有有符号整数，与符号加绝对值表示法相比，它的表示范围要更大，为 $-2^{n-1} ,\cdots ,-1,0,1,\cdots ,2^{n-1}-1$. 图 2-7 则展示了补码表示法的溢出情况。</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/complement operation.png"></p>
<p class="post-text-tablename">图 2-5 取整数 00110100 的补码</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/complement representation.png"></p>
<p class="post-text-tablename">图 2-6 补码表示法</p>

<p class="post-text-center"><img src="/assets/img/Natural_Science/Computer_Science/Introduction/overflow 3.png"></p>
<p class="post-text-tablename">图 2-7 补码表示法的溢出</p>

<p class="post-text-noindent">至于人们为什么要费劲巴力地弄出一个补码运算来表示有符号整数，我们将在下一章中阐述。在那里，在有关数据运算的内容中，你将看到补码表示法给运算带来的巨大便利。</p>

<p class="post-text-noindent">未完待续……</p>

</div>