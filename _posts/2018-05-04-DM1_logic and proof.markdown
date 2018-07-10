---
layout: post
title:  "离散数学(1):逻辑与证明"
date:   2018-05-04 11:28:00
categories: Computer_Science Discrete_Mathematics
excerpt: "本文介绍了离散数学中最基础性的内容：逻辑"
---

<div class="post-style">

<p><strong>逻辑与证明</strong>（<em>Logic and Proofs</em>）在<strong>数学</strong>（<em>mathematics</em>）中的重要性不言而喻，我们甚至可以说，数学就是通过各种各样的证明构造出的一款伟大的逻辑游戏。然而许多人并不知道，逻辑与证明在<strong>计算机科学</strong>（<em>computer science</em>）中同样有着举足轻重的地位。</p>

<p>在计算机的世界里，只有 “0” 和 “1” 两种状态，计算机正是使用由 0 和 1 构成的序列即<strong>位串</strong>（<em>bit string</em>）来表示信息的，信息的处理本质上就是位串间的运算。在逻辑的世界里，也只有两种状态，那就是 “真” 和 “假”。如果我们以 1 为真，以 0 为假，那么我们可以说，一切信息的处理皆是逻辑运算。因此，逻辑在计算机科学中的重要性并不亚于它在数学中的重要性。</p>

<p>在数学中，证明常常被用来说明一个命题的真假性。在计算机科学中，证明则常常用来验证计算机程序对所有可能的输入是否会产生正确的输出，以确保系统的安全性和有效性。因此，证明在计算机科学中的地位同样不亚于它在数学中的地位。</p>


<h1>1.1 命题的逻辑</h1>

<p><strong>命题</strong>是一个要么为真、要么为假的陈述语句（<em>A proposition is a declarative sentence that is either true or false, but not both</em>）。无论复杂与否，一切命题均可由<strong>命题变元</strong>（<em>propositional variables</em>）和<strong>逻辑运算符/联结词</strong>（<em>logical operators / connectives</em>）构成。例如：如果用 $p$ 表示你很高，$q$ 表示你很瘦，$r$ 表示你喜欢打球，那么就可以用命题变元 $p$、$q$、$r$ 和逻辑运算符<strong>否定</strong>（<em>negation</em>, $\lnot$）、<strong>合取</strong>（<em>conjunction</em>, $\wedge$）、<strong>析取</strong>（<em>disjunction</em>, $\vee$）、<strong>条件/蕴含</strong>（<em>conditional statement / implication</em>, $\rightarrow$）、<strong>双条件</strong>（<em>biconditional statement</em>, $\leftrightarrow$）将命题</p>

<p class="post-text-center">你很高或你很瘦，但如果你很高，你就不会很瘦，并且你很高当且仅当你喜欢打球</p>

<p class="post-text-noindent">表示为如下形式：</p>

<p class="post-text-formula">
$$
\left (p\vee q  \right )\wedge \left ( p\rightarrow  \lnot q\right )\wedge \left ( p\leftrightarrow r \right )
$$
</p>

<p>命题的<strong>真值</strong>（<em>truth value</em>）指的是命题的真假状态，当命题为真时，其真值为 ”真“，当命题为假时，其真值为 ”假“。命题的<strong>真值表</strong>（<em>turth table</em>）刻画了在命题变元取不同真值的情况下命题的真假状态，它有助于我们清晰直观地判断一个命题的真假。以上述命题为例，其真值表如下所示（以 1 为真，以 0 为假）：</p>


<p>
<p class="post-text-tablename">
表 1-1：<img height="30%" width="30%" src="http://latex.codecogs.com/svg.latex?\left%20(p\vee%20q%20\right%20)\wedge%20\left%20(%20p\rightarrow%20\lnot%20q\right%20)\wedge%20\left%20(%20p\leftrightarrow%20r%20\right%20)"> 的真值表
</p>
<p class="post-text-center">
<img width="85%" src="/assets/img/Discrete_Mathematics/truth table.png">
</p>
</p>


<!--
| $p$ | $q$ | $\lnot q$ | $r$ | $p\vee q$ | $p\rightarrow \lnot q$ | $p\leftrightarrow r$ | $\left (p\vee q  \right )\wedge \left ( p\rightarrow  \lnot q\right )\wedge \left ( p\leftrightarrow r \right )$ |
| :-: | :-: | :-: | :-: | :--: | :--: | :--: | :---: |  
| 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 
| 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| **1** | **0** | **1** | **1** | **1** | **1** | **1** | **1** |
| 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 |
| **0** | **1** | **0** | **0** | **1** | **1** | **1** | **1** |
| 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 
| 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
-->

<p>透过真值表，我们可以清楚地看到：命题 ”你很高或你很瘦，但如果你很高，你就不会很瘦，并且你很高当且仅当你喜欢打球“ 仅在如下两种情况下成立：</p>

<ul>
<li>你很高、不很瘦且喜欢打球</li>
<li>你很瘦、不很高且不喜欢打球</li>
</ul>

<p>你可能要说：得出上述结论并不需要动手去构造出真值表，只需动动脑袋对命题作简单分析即可。你之所以这么认为是因为这样的命题还不够复杂，当命题的复杂程度达到一定级别时，单纯地依靠头脑分析而不动手，要对命题真假作出准确判断将是一件十分困难的事。不过一切都有例外，你说不定就是隐藏在人群中的福尔摩斯呢！</p>

<p>在叙述命题逻辑的有关应用前，这里插入几个值得注意的小问题：</p>

<ul>
<li>析取对应自然语言中的<strong>或</strong>（<em>or</em>），但或在自然语言中有两种含义：<strong>兼或</strong>（<em>inclusive or</em>）和<strong>异或</strong>（<em>exclusive or</em>）。兼或的含义与析取是一致的，但异或的含义与它们不同。例如：如果餐馆上的菜单写着 ”开胃菜：汤或沙拉“，通常意味着你可以选择汤或沙拉中的一种作为开胃菜，但不能二者兼得，这就是异或。从真值表上来说，兼或在全真和一真一假的情况下为真，而异或只在一真一假的情况下为真。</li>

<li>除了一些常规形式，$p\rightarrow q$ 还可以表述为：<strong>$p$ 仅当 $q$</strong>（<em>$p$ only if $q$</em>）、<strong>$q$ 除非 $\lnot p$</strong>（<em>$q$ unless $\lnot p$</em>）. 另外，$p\rightarrow q$ 的真值表可概括为一句话：仅当 $p$ 真 $q$ 假时为假。</li>

<li>$p\rightarrow q$ 与其逆否命题 $\lnot q\rightarrow \lnot p$ 拥有完全一致的真值表，而其逆命题 $q\rightarrow p$ 与其否命题 $\lnot p\rightarrow \lnot q$ 也拥有完全一致的真值表。因此，原命题与<strong>逆否命题</strong>（<em>contrapositive</em>）等价，<strong>逆命题</strong>（<em>converse</em>）与<strong>否命题</strong>（<em>inverse</em>）等价。</li>

</ul>

<p><strong>命题的逻辑</strong>（Propositional Logic）在数学、计算机科学以及其他许多学科中都有重要的应用，下面我们将简要叙述它的部分应用，这包括：语句翻译、系统规范说明、布尔搜索、逻辑谜题和逻辑电路。</p>

<p><strong>语句翻译</strong>（<em>translating sentences</em>）就是把自然语言翻译成由命题变元和逻辑运算符组成的表达式，这在本节一开始时就给出了例子，值得注意的是，由于自然语言可能存在多种含义，因此翻译时可能需要根据实际情况作出适当假设。</p>

<p><strong>系统规范说明</strong>（<em>system specifications</em>）即用来规范硬件或软件系统的说明，它通常由工程师用自然语言提出，而后经由语句翻译成为精确而无二义性的逻辑表达式。系统规范说明应该不包含相互矛盾的需求，即系统规范说明应该是<strong>一致的</strong>（<em>consistent</em>），否则将无法开发出一个满足所有规范说明的系统。例如，“诊断消息存储在缓冲区中或者被重传，诊断消息没有存储在缓冲区中，诊断消息没有被重传” 就是不一致的，不能构成系统规范说明。</p>

<p><strong>布尔搜索</strong>（<em>boolean searches</em>）是指采用命题的逻辑进行搜索，在布尔搜索中，<em>AND</em>、<em>OR</em> 和 <em>NOT</em> 分别对应逻辑运算符中的 $\wedge$、$\vee$ 和 $\lnot$. 通常在网页搜索引擎中，<em>AND</em> 可用空格替代，<em>NOT</em> 则用符号 “-” 替代，但 “-” 前应留有空格。另外，如果希望搜索特定短语而不希望搜索引擎将短语中的空格默认为逻辑运算符 $\wedge$，那么可以添加引号，将这一短语写在引号内。</p>

<p><strong>逻辑谜题</strong>（<em>logic puzzles</em>）是可以用逻辑推理解决的谜题。求解逻辑谜题是实践逻辑规则的极佳途径，用来执行逻辑推理的计算机程序也通常使用著名的逻辑谜题来验证它们的确具备相关能力。</p>

<p><strong>逻辑电路/数字电路</strong>（<em>logic circuits / digital circuits</em>）是将命题的逻辑应用于计算机硬件设计而得到的电路，复杂的数字电路均由三种最简单的基本电路即<strong>非门</strong>（<em>NOT gate</em>）电路、<strong>或门</strong>（<em>OR gate</em>）电路和<strong>与门</strong>（<em>AND gate</em>）电路构造而得。图 1-1 为三种基本门电路的电路符号。</p>

<p>
<p class='post-text-center'><img src="/assets/img/Discrete_Mathematics/gate.png"></p>
<p class="post-text-tablename">图 1-1 基本逻辑门</p>
</p>

<p>
<blockquote>将命题的逻辑应用于计算机硬件设计的思想首先由信息论之父克劳德·香农在他的麻省理工硕士毕业论文中提出：1938年，22岁的香农在 <em>MIT </em> 获得电气工程硕士学位，他的硕士论文题目是《<em>A Symbolic Analysis of Relay and Switching Circuits</em>》（继电器与开关电路的符号分析）。当时他已经注意到电话交换电路与布尔代数之间的类似性，即把布尔代数的 “真” 与 “假” 和电路系统的 “开” 与 “关” 对应起来，并用 1 和 0 表示。于是他用布尔代数分析并优化了开关电路，而这奠定了数字电路的理论基础。
</blockquote>
</p>


<h1>1.2 命题的等价</h1>

<p>在数学证明中，用一个较原命题更简洁清晰或较原命题更容易导出目标结论的等价命题来替换原命题，是常有的事，并且这种等价特指逻辑上的等价性。那什么是逻辑等价呢？两个命题 $p$ 、$q$ 是<strong>逻辑等价的</strong>（<em>logically
equivalent</em>）就是指它们在所有可能情况下拥有相同的真值，或者说命题 $p \leftrightarrow q$ 是<strong>永真式</strong>（<em>tautology</em>）。我们将两个命题 $p$ 、$q$ 这种逻辑上的等价性形式化地记作 $p \equiv q$ 或 $p \Leftrightarrow q$，并称这样的式子为<strong>逻辑等价式</strong>（<em>logical
equivalence</em>）. 表 1-2、1-3、1-4 给出了若干重要的逻辑等价式。</p>

<p>
<blockquote>
<strong>永真式</strong>（tautology）是一个真值永远为真的命题，记作 <strong>T</strong>；<strong>矛盾式</strong>（contradiction）是一个真值永远为假的命题，记作 <strong>F</strong>；既不是永真式也不是矛盾式的命题则称为<strong>可能式</strong>（contingency）.
</blockquote>
</p>

<p>
<p class="post-text-tablename">表 1-2 逻辑等价式</p>
<p class="post-text-center"><img src="/assets/img/Discrete_Mathematics/logical equivalence 1.png"></p>
<p class="post-text-tablename">表 1-3 条件命题的逻辑等价式</p>
<p class="post-text-center"><img src="/assets/img/Discrete_Mathematics/logical equivalence 2.png"></p>
<p class="post-text-tablename">表 1-4 双条件命题的逻辑等价式</p>
<p class="post-text-center"><img src="/assets/img/Discrete_Mathematics/logical equivalence 3.png"></p>
</p>

<p>观察表 1-2，我们不难看到：除了双重否定律（<em>Double negation law</em>）外，其余各规律都有两条逻辑等价式出现，并且任意其中一条逻辑等价式的两个命题是另一条两个命题各自的<strong>对偶式</strong>（<em>dual</em>）。我们不禁要问：是不是只含逻辑运算符 $\lnot$、$\wedge$ 和 $\vee$ 的两个逻辑等价命题，它们各自的对偶式一定逻辑等价呢？</p>

<p>
<blockquote>
一个命题 $p$ 的<strong>对偶式</strong>（dual）$p^\ast$ 指的是用 $\wedge$ 替代 $\vee$，用 $\vee$ 替代 $\wedge$，用永真式 (<strong>T</strong>) 替代矛盾式 (<strong>F</strong>)，并用矛盾式 (<strong>F</strong>) 替代永真式 (<strong>T</strong>) 得到的命题。
</blockquote>
</p>

<p>这一问题的答案是肯定的，作出判断的关键便是表 1-2 中著名的<strong>德摩根定律</strong>（<em>De Morgan's laws</em>），因为它告诉我们：一个析取（合取）式的否定由各分命题否定的合取（析取）式组成，而对偶恰恰就包含把合取变析取、把析取变合取的过程，下面将简要阐述得出这一判断的论证过程。</p>

<p class="post-text-proof">
设 $p$、$q$ 是仅包含逻辑运算符 $\lnot$、$\wedge$、$\vee$ 和 <strong>T</strong>、<strong>F</strong> 的逻辑等价命题，则 $\lnot p$、$\lnot q$ 也是逻辑等价命题。通过多次使用德摩根定律可以将 $\lnot p$、$\lnot q$ 中的全部 $\wedge$ 替换为 $\vee$，全部 $\vee$ 替换为 $\wedge$，并把全部 <strong>T</strong> 替换为 <strong>F</strong>，以及把全部 <strong>F</strong> 替换为 <strong>T</strong>。此时，我们将发现 $\lnot p$、$\lnot q$ 和 $p^\ast$、$q^\ast$ 十分类似，它们仅有的差别在于：构成 $\lnot p$、$\lnot q$ 的命题变元前均有逻辑运算符 $\lnot$。但由于是所有的命题变元前都有逻辑运算符 $\lnot$，因此 $\lnot p$ 与 $p^\ast$、$\lnot q$ 与 $q^\ast$ 具有完全一致的真值表。这样，根据 $\lnot p$、$\lnot q$ 的逻辑等价性，我们立即可得 $p^\ast$、$q^\ast$ 也是逻辑等价的。
</p>

<p>接下来，我们将叙述一个与逻辑等价有关的重要结论，并且我们仍将在这一结论的论证过程中看到德摩根定律的身影。你将穿过历史的烟云，与生活在 19 世纪的著名数学家奥古斯塔·德·摩根（<em>Augustus De Morgan, 1806——1871</em>）先生一起，再次领略到这个小小公式背后蕴含的无尽能量。</p>

<p>这个重要结论是：任何命题都可以逻辑等价于一个只含逻辑运算符 $\lnot$、$\wedge$ 的命题，任何命题也都可以等价于一个只含逻辑运算符 $\lnot$、$\vee$ 的命题。这个结论告诉我们：世界上所有的命题都可以由命题变元和两个逻辑运算符 $\lnot$、$\wedge$（或 $\vee$）表示。进一步，如果我们引入新的逻辑运算符<strong>与非</strong>（<em>NAND</em>, $\vert$）和<strong>或非</strong>（<em>NOR</em>, $\downarrow$），那么我们可以说：<strong>世界上所有的命题都可以由命题变元和一个逻辑运算符 $\vert$（$\downarrow$）表示</strong>。哇哦，多么简洁而漂亮的结论！怎么，你有点不相信自己的眼睛，没关系，接下来，就让我们一步一步走近这个神奇的结论，一览逻辑世界的美妙风景。</p>

<p>
<blockquote>
顾名思义，$p\ \vert \ q$ 等价于 $\lnot \left (p \wedge q \right )$，它只在 $p$ 真 $q$ 真时为假，而 $p \downarrow q$ 等价于 $\lnot \left (p \vee q \right )$，它只在 $p$ 假 $q$ 假时为真，另外，$\vert $ 还被称为 Sheffer 竖线（Sheffer stroke）、$\downarrow $ 还被称为 Peirce 箭头（Peirce arrow）
</blockquote>
</p>

<p>假设一个命题包含 <em>n</em> 个命题变元 $p_1,p_2,\cdots ,p_n$, 并设当命题真值为真时，$p_1,p_2,\cdots ,p_n$ 的所有可能真值组合为 $t_1^j,t_2^j,\cdots ,t_n^j,\ j=1,2,\cdots,m,\ m\leq 2^n$. 则容易验证命题的<strong>析取范式</strong>（<em>disjunctive normal form</em>）</p>

<p class="post-text-formula">
$$
\left (p_1^1\wedge p_2^1\wedge \cdots \wedge p_n^1 \right ) \vee \left (p_1^2\wedge p_2^2\wedge \cdots \wedge p_n^2 \right ) \vee \cdots \vee \left (p_1^m\wedge p_2^m\wedge \cdots \wedge p_n^m \right )
$$
</p>

<p class="post-text-noindent">与原命题是逻辑等价的，这里</p>

<p class="post-text-center"><img src="/assets/img/Discrete_Mathematics/MF1.gif"></p>

<p>
<blockquote>
一个命题的<strong>析取范式</strong>（disjunctive normal form）是利用该命题的各命题变元或命题变元的否定构造的多个合取式，而后再由这多个合取式构成的析取式，其中每个合取式对应一组该命题真值为 T 时各命题变元的真值组合，在该真值组合下，合取式的真值必须为 T.
</blockquote>
</p>

<p class="post-text-noindent">以 1.1 节中的命题</p>

<p class="post-text-center">
你很高或你很瘦，但如果你很高，你就不会很瘦，并且你很高当且仅当你喜欢打球
</p>

<p class="post-text-noindent">为例，它仅在如下两种情况下的真值为真：</p>

<ul>
<li>你很高、不很瘦且喜欢打球</li>
<li>你很瘦、不很高且不喜欢打球</li>
</ul>

<p class="post-text-noindent">现在我们用 $p_1$ 表示你很高，$p_2$ 表示你很瘦，$p_3$ 表示你喜欢打球，那么我们可以说这是一个含三个命题变元 $p_1,p_2,p_3$ 的命题，当命题真值为真时，$p_1,p_2,p_3$ 的所有可能真值组合只有两个，它们是 $t_1^j,t_2^j,t_3^j,\ j=1,2$，其中 $t_1^1=T,t_2^1=F,t_3^1=T$，$t_1^2=F,t_2^2=T,t_3^2=F$。透过这个直观的例子，我们能更容易地看到原命题与命题的析取范式</p>

<p class="post-text-formula">
$$
\left (p_1\wedge \lnot p_2\wedge p_3 \right ) \vee \left (\lnot p_1\wedge p_2\wedge \lnot p_3 \right )
$$
</p>

<p class="post-text-noindent">是逻辑等价的。这一结论告诉我们：世界上的所有命题都可以由命题变元和三个逻辑运算符 $\lnot$、$\wedge$、$\vee$ 表示，而由德·摩根律我们知道 $\vee$ 和 $\wedge$ 借助于 $\lnot$ 可以实现相互转化，因此世界上的所有命题都可以由命题变元和两个逻辑运算符 $\lnot$、$\wedge$（或 $\vee$）表示。进一步，对于新的逻辑运算符 $\vert $, $\downarrow $，我们很容易通过构造真值表证明存在如下四个逻辑等价式：
</p>

<p class="post-text-formula">
$$
p\ \vert \  p \equiv \lnot p
$$
</p>

<p class="post-text-formula">
$$
\left (p\ \vert \  q \right ) \ \vert \  \left (p\ \vert \  q \right ) \equiv p \wedge q
$$
</p>

<p class="post-text-formula">
$$
p\ \downarrow \  p \equiv \lnot p
$$
</p>

<p class="post-text-formula">
$$
\left (p\ \downarrow \  q \right ) \ \downarrow \  \left (p\ \downarrow \  q \right ) \equiv p \vee q
$$
</p>

<p class="post-text-noindent">而这四个逻辑等价式告诉我们：如果世界上的所有命题都可以由命题变元和两个逻辑运算符 $\lnot$、$\wedge$（或 $\vee$）表示，那么世界上的所有命题就都可以由命题变元和一个逻辑运算符 $\vert$ (或 $\downarrow$) 表示。</p>

<h1>1.3 命题的可满足性</h1>

<p>如果存在一组命题变元的真值，使得命题的真值为真，那么我们就称这个命题是<strong>可满足的</strong>（<em>satisfiable</em>），并称这一组命题变元的真值为该可满足性问题的一个<strong>解</strong>（<em>solution</em>）。命题的可满足性在<strong>机器人学、软件测试、计算机辅助设计、机器视觉、集成电路设计、计算机网络、遗传学</strong>（<em>robotics, software testing, computer-aided design,
machine vision, integrated circuit design, computer networking, genetics</em>）等诸多领域都有重要应用。下面我们将简要叙述命题的可满足性在数独谜题求解中的应用。</p>

<p>图 1-5 是一个 9×9 <strong>数独谜题</strong>（<em>Sudoku puzzle</em>），谜题的求解就是给所有空白单元格赋上数字，这些数字必须是 1-9 中的一个，并且大<strong>九宫格</strong>（<em>blocks</em>）的每一行、每一列以及每个小九宫格都分别包含 1-9 这九个数字，即不能有相同的数字出现在大九宫格的每一行、每一列乃至每个小九宫格。自 20 世纪 70 年代末现代数独游戏被设计出来后，人们发展了许许多多的方法来求解数独谜题，而将数独谜题转化为一个命题可满足性问题并借助计算机寻找该可满足性问题的解的方法，便是其中之一。</p>

<p>
<p class="post-text-center"><img src="/assets/img/Discrete_Mathematics/Sudoku puzzle.png"></p>
<p class="post-text-tablename">图 1-5 9×9 数独谜题</p>
</p>

<p class="post-text-noindent">以上述数独谜题为例，设命题变元 $p\left (i,j,n \right )$ 表示数 $n$ 位于第 $i$ 行第 $j$ 列，则可以将其转化为可满足性问题：寻找使得命题</p>

<p class="post-text-formula">
$$
A\bigwedge B\bigwedge C\bigwedge D\bigwedge E
$$
</p>

<p class="post-text-noindent">为真的解，即使该命题真值为真时对应的 729 个命题变元 $p\left (i,j,n \right )$ 的真值组合。其中</p>

<p class="post-text-formula">
$$
A\equiv \bigwedge_{\left ( i^*,j^*,n^* \right )} p\left ( i^*,j^*,n^* \right )
$$
</p>

<p class="post-text-noindent">
为真当且仅当已知的数 $n^*$ 位于第 $i^*$ 行第 $j^*$ 列，这里 $\left ( i^*,j^*,n^* \right )$ 代表所有已知的数 $n^*$ 与其所在行列构成的组合，依据图 1-5，这样的组合有 17 个；
</p>

<p class="post-text-formula">
$$
B\equiv \bigwedge_{i= 1}^{9}\bigwedge_{n= 1}^{9}\bigvee_{j= 1}^{9}p\left ( i,j,n \right )
$$
</p>

<p class="post-text-noindent">
为真当且仅当每一行都包含了 1-9 这九个数字；
</p>

<p class="post-text-formula">
$$
C\equiv \bigwedge_{j= 1}^{9}\bigwedge_{n= 1}^{9}\bigvee_{i= 1}^{9}p\left ( i,j,n \right )
$$
</p>

<p class="post-text-noindent">
为真当且仅当每一列都包含了 1-9 这九个数字；
</p>

<p class="post-text-formula">
$$
D\equiv \bigwedge_{r= 0}^{2}\bigwedge_{s= 0}^{2}\bigwedge_{n= 1}^{9}\bigvee_{i= 1}^{3}\bigvee_{j= 1}^{3}p\left ( 3r+ i,3s+ j,n \right )
$$
</p>

<p class="post-text-noindent">
为真当且仅当每一个九宫格都包含了 1-9 这九个数字；
</p>

<p class="post-text-formula">
$$
E\equiv \bigwedge_{i= 1}^{9}\bigwedge_{j= 1}^{9}\bigwedge_{n^{'}\neq n}^{9} \bigwedge_{n= 1}^{9} \left ( p\left ( i,j,n \right ) \rightarrow \lnot p ( i,j,n^{'}) \right )
$$
</p>

<p class="post-text-noindent">
为真当且仅当没有一个单元格包含多于一个数。至于具体的计算机算法是怎样的，我们后续再加以讨论，但可以肯定的是，这样的算法肯定不会遍历 $2^{729}$ 种可能真值组合来寻找使得上述合取式为真的 729 个命题变元的真值组合，因为这相较于计算机当前的计算能力而言仍然是一个天文数字。<em>Kenneth H.Rosen</em>先生在其所著的《<em>Discrete Mathematics and Its Applications</em>》这样写道：
</p>

<blockquote>
In our discussion of the subject of algorithms in Chapter 3, we will discuss this question further. In particular, we will explain the important role the propositional satisfiability problem plays in the study of the complexity of algorithms.<br>
我们将在第三章关于算法的部分继续讨论这一问题。特别地，我们将阐释命题的可满足性问题在算法复杂度的学习中扮演的重要角色。
</blockquote>

<p class="post-text-noindent">瞧，同学们，又一片蔚蓝而广阔的天空即将出现在我们的眼前，就让我们拭目以待吧！</p>

<p class="post-text-noindent">
<br>
未完待续(*^▽^*)
</p>
</div>