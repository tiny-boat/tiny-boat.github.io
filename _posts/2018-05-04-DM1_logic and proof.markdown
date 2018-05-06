---
layout: post
title:  "离散数学(1):逻辑与证明"
date:   2018-05-04 11:28:00
categories: Discrete_Mathematics
---

**逻辑与证明**（*Logic and Proofs*）在**数学**（*mathematics*）中的重要性不言而喻，我们甚至可以说，数学就是通过各种各样的证明构造出的一款伟大的逻辑游戏。然而许多人并不知道，逻辑与证明在**计算机科学**（*computer science*）中同样有着举足轻重的地位。<!--excerpt-->

在计算机的世界里，只有 “0” 和 “1” 两种状态，计算机正是使用由 0 和 1 构成的序列即**位串**（*bit string*）来表示信息的，信息的处理本质上就是位串间的运算。在逻辑的世界里，也只有两种状态，那就是 “真” 和 “假”。如果我们以 1 为真，以 0 为假，那么我们可以说，一切信息的处理皆是逻辑运算。因此，逻辑在计算机学科中的重要性并不亚于它在数学学科中的重要性。

在数学中，证明常常被用来说明一个命题的真假性。在计算机中，证明则常常用来验证计算机程序对所有可能的输入是否会产生正确的输出，以确保系统的安全性和有效性。因此，证明在计算机学科中的地位同样不亚于它在数学学科中的地位。

# 1.1 命题逻辑（Propositional Logic）

**命题**是一个要么为真、要么为假的陈述语句（*A proposition is a declarative sentence that is either true or false, but not both*）。无论复杂与否，一切命题均可由**命题变元**（*propositional variables*）和**逻辑运算符/联结词**（*logical operators / connectives*）构成。例如：如果用 $p$ 表示你很高，$q$ 表示你很瘦，$r$ 表示你喜欢打球，那么就可以用命题变元 $p$、$q$、$r$ 和逻辑运算符**否定**（*negation*, $\lnot$）、**合取**（*conjunction*, $\wedge$）、**析取**（*disjunction*, $\vee$）、**条件/蕴含**（*conditional statement / implication*, $\rightarrow$）、**双条件**（*biconditional statement*, $\leftrightarrow$）将命题

<div align='center'>
 <p style="font-size:15px">你很高或你很瘦，但如果你很高，你就不会很瘦，并且你很高当且仅当你喜欢打球</p>
</div>

表示为如下形式：

$$
\left (p\vee q  \right )\wedge \left ( p\rightarrow  \lnot q\right )\wedge \left ( p\leftrightarrow r \right )
$$

命题的**真值**（*truth value*）指的是命题的真假状态，当命题为真时，其真值为 ”真“，当命题为假时，其真值为 ”假“。命题的**真值表**（*turth table*）刻画了在命题变元取不同真值的情况下命题的真假状态，它有助于我们清晰直观地判断一个命题的真假。以上述命题为例，其真值表如下所示（以 1 为真，以 0 为假）：


<div align='center'>
	<p style="font-size:14px">表 1-1：<img height="28%" width="28%" src="http://latex.codecogs.com/svg.latex?\left%20(p\vee%20q%20\right%20)\wedge%20\left%20(%20p\rightarrow%20\lnot%20q\right%20)\wedge%20\left%20(%20p\leftrightarrow%20r%20\right%20)"> 的真值表</p>
</div>

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

透过真值表，我们可以清楚地看到：命题 ”你很高或你很瘦，但如果你很高，你就不会很瘦，并且你很高当且仅当你喜欢打球“ 仅在如下两种情况下成立：

- 你很高、不很瘦且喜欢打球
- 你很瘦、不很高且不喜欢打球

你可能要说：得出上述结论并不需要动手去构造出真值表，只需动动脑袋对命题作简单分析即可。你之所以这么认为是因为这样的命题还不够复杂，当命题的复杂程度达到一定级别时，单纯地依靠头脑分析而不动手，要对命题真假作出准确判断将是一件十分困难的事。不过一切都有例外，你说不定就是隐藏在人群中的福尔摩斯呢！

在叙述命题逻辑的有关应用前，这里插入几个值得注意的小问题：

1. 析取对应自然语言中的**或**（*or*），但或在自然语言中有两种含义：**兼或**（*inclusive or*）和**异或**（*exclusive or*）。兼或的含义与析取是一致的，但异或的含义与它们不同。例如：如果餐馆上的菜单写着 ”开胃菜：汤或沙拉“，通常意味着你可以选择汤或沙拉中的一种作为开胃菜，但不能二者兼得，这就是异或。从真值表上来说，兼或在全真和一真一假的情况下为真，而异或只在一真一假的情况下为真。

2. 除了一些常规形式，$p\rightarrow q$ 还可以表述为：**$p$ 仅当 $q$**（*$p$ only if $q$*）、**$q$ 除非 $\lnot p$**（*$q$ unless $\lnot p$*）. 另外，$p\rightarrow q$ 的真值表可概括为一句话：仅当 $p$ 真 $q$ 假时为假。

3. $p\rightarrow q$ 与其逆否命题 $\lnot q\rightarrow \lnot p$ 拥有完全一致的真值表，而其逆命题 $q\rightarrow p$ 与其否命题 $\lnot p\rightarrow \lnot q$ 也拥有完全一致的真值表。因此，原命题与**逆否命题**（*contrapositive*）等价，**逆命题**（*converse*）与**否命题**（*inverse*）等价。

命题逻辑在数学、计算机科学以及其他许多学科中都有重要的应用，下面我们将详细叙述它的部分应用，这包括：语句翻译、系统规范说明、布尔搜索、逻辑谜题和逻辑电路。

**未完待续(*^▽^*)**