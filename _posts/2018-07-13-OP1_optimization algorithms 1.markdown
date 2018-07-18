---
layout: post
title:  "最优化算法(1):无约束单一目标函数优化"
date:   2018-07-13 11:54:00
categories: Mathematics
excerpt: "世界上许许多多问题最终都归结于一个优化问题"
---

<div class="post-style">

<p>从某种程度上说，我们生活中遇到的许许多多的问题，其本质都是一个优化问题。例如着装打扮、选择饭店、租购房屋、旅行规划等等。如果我们能将这些问题转化为目前数学上可解的最优化模型，并且我们掌握了求解相关最优化模型的最优化算法，那么我们或许能够生活得更聪明，更舒适，也更幸福。将生活问题转化为数学模型并不容易，它或许需要敏锐的头脑，需要长期的积累，需要灵光的乍泄，但掌握求解相关最优化模型的算法则相对容易多了。下面就让我们从无约束单一目标函数优化开始，走进最优化算法的世界。无约束单一目标函数优化问题可以统一表示为如下数学形式：</p>

<p class="post-text-formula">
$$
\min \ f\left ( \boldsymbol{x} \right ),\ \boldsymbol{x} \in \boldsymbol{D} \subseteq \boldsymbol{R}^{n},\ n= 1,2,\cdots 
$$
</p>

<p class="post-text-noindent">其中 $f\left ( \boldsymbol{x} \right )$ 为一元或多元目标函数，它的定义域是 $n$ 维欧式空间 $\boldsymbol{R}^{n}$ 的子集 $\boldsymbol{D}$.</p>

<h1>1.1 一元目标函数优化</h1>

<p>这一节我们将介绍一元目标函数的最优化算法，这些算法包括：用来确定搜索区间即极小值所在区间的进退法、用来在搜索区间内寻找极小值的线性搜索方法（黄金分割法、牛顿法等）以及用来在搜索区间内寻找极小值的非线性搜索方法（抛物线法、三次插值法等）。</p>

<h2>1.1.1 进退法</h2>

<p>进退法是用来确定搜索区间的算法，其依据的基本原理是：若 $f\left ( x \right),\ x\in \left [ a,b \right]$ 是一个单谷函数，则 $\forall \ x_1 < x_2 \in \left [ a,b \right]$，当 $f\left ( x_1 \right) \geq  f\left ( x_2 \right)$ 时，$f\left ( x \right)$ 必在 $\left [ x_1,b \right]$ 取到极小值，否则 $f\left ( x \right)$ 必在 $\left [ a,x_2 \right]$ 取到极小值。其具体算法如下：</p>

<ul>
<li>给定初始点 $x_0$，搜索步长 $h_0 > 0$，比较 $f  \left ( x _0 \right)$ 和 $f  \left ( x _0+h_0 \right)$ 的大小，如果 $f  \left ( x _0 \right) \geq f  \left ( x _0+h_0 \right)$，转第 2 步，否则转第 3 步。</li>
<li>当 $f  \left ( x _0 +\left(k-1\right)h_0\right) \geq f  \left ( x _0+kh_0 \right)$ 时，若 $f  \left ( x _0+kh_0 \right) \geq f  \left ( x _0+\left(k+1\right)h_0 \right)$，那么我们可以将搜索区间由 $[x_0+\left(k-1\right)h_0,b]$ 进一步缩小为 $[x_0+kh_0,b]$，否则我们可以确定搜索区间为 $[x_0+\left(k-1\right)h_0,x_0+\left(k+1\right)h_0]$.</li>
<li>当 $f  \left ( x _0 -\left(k-1\right)h_0\right) < f  \left ( x _0-\left(k-2\right)h_0 \right)$ 时，若 $f  \left ( x _0-kh_0 \right) \leq f  \left ( x _0 -\left(k-1\right)h_0\right)$，那么我们可以将搜索区间由 $[a,x_0-\left(k-2\right)h_0]$ 进一步缩小为 $[a,x_0-\left(k-1\right)h_0]$，否则我们可以确定搜索区间为 $[x_0-kh_0,x_0-\left(k-2\right)h_0]$</li>
<li>对 $k=1,2,\cdots$，重复第 2 或第 3 步直到确定搜索区间为止。</li>
</ul>

<p class="post-text-noindent">可以看到，由上述具体算法确定的搜索区间长度恒为搜索步长 $h_0$ 的两倍。事实上我们可以多次利用该算法来获得单峰/单谷函数的近似极值点（注：对单峰函数，取负即变为单谷函数）、非单峰/单谷函数的近似局部极值点。一开始我们可以使用较大的搜索步长，以迅速缩小搜索区间的范围。在得到新的搜索区间后，我们在新的搜索区间内寻找新的初始点并缩小搜索步长，从而获得更小的搜索区间。如此继续下去，当我们的搜索步长足够小时，我们通常就能获得函数的近似极值点，并且这个近似极值点在很大概率上会是精确极值点，即便不精确，对实用而言也足够了。</p>

<h2>1.1.2 黄金分割法</h2>

<p>黄金分割法依据的基本原理与进退法是一致的，但相较于进退法执行效率对初值和搜索步长的依赖，黄金分割法是一种更稳定的快速缩小搜索区间进而找到函数极值点的方法，该算法每循环一次，搜索区间长度就会变为原搜索区间长度的 61.8%。其具体算法如下：</p>

<ul>
<li>给定初始搜索区间 $\left [a_1,b_1 \right]$ 及精度 $\varepsilon > 0$，令 $\lambda_1 = a_1+0.382\left(b_1-a_1\right)$, $\mu_1 = a_1+0.618\left(b_1-a_1\right)$.</li>
<li>若 $f\left(\lambda_k\right) \geq f\left(\mu_k\right)$，则令 $a_{k+1}=\lambda_k$, $b_{k+1}=b_k$, $\lambda_{k+1}=\mu_k$, $\mu_{k+1}=a_{k+1}+0.618\left(b_{k+1}-a_{k+1}\right)$，否则令 $a_{k+1}=a_k$, $b_{k+1}=\mu_k$, $\lambda_{k+1}=a_{k+1}+0.382\left(b_{k+1}-a_{k+1}\right)$, $\mu_{k+1}=\lambda_k$.</li>
<li>对 $k=1,2,\cdots$，重复第 2 步直到 $b_k-a_k<\varepsilon$ 为止。</li>
</ul>

<p class="post-text-noindent">可以看到，使用黄金分割法必须首先给定搜索区间，而这个任务可以交由进退法来完成。使用进退法时可以给定一个较大的搜索步长以加快进退法的执行速度。</p>

<h2>1.1.3 牛顿法</h2>

<p></p>

<h2>1.1.4 割线法</h2>

<p></p>

<h2>1.1.5 抛物线法</h2>

<p></p>

<h2>1.1.6 三次插值法</h2>

<p></p>


<h2>1.1.7 可接受搜索法</h2>

<p></p>

<p class="post-text-noindent">未完待续……</p>

<p class="post-text-center"></p>
<p class="post-text-tablename"></p>