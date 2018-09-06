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

<p>这一节我们将介绍一元目标函数的最优化算法，这些算法包括：用来确定搜索区间即极小值所在区间的进退法、用来在搜索区间内寻找极小值的线性搜索方法（黄金分割法、牛顿法、全局牛顿法、割线法）以及用来在搜索区间内寻找极小值的非线性搜索方法（抛物线法、三次插值法等）。</p>

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

<p>牛顿法依据的基本原理是用 $f\left(x\right)$ 在某点 $x_k$ 处的二阶泰勒展开式</p>

<p class="post-text-formula">$$f\left(x\right)\approx f\left(x_k \right )+f'\left(x_k \right )\left(x-x_k \right )+\frac{f''\left(x_k \right )}{2}\left(x-x_k \right )^2$$</p>

<p class="post-text-noindent">近似 $f\left(x\right)$，而后求得该近似函数的导数为 0 的点，不妨记该点为  $x_{k+1}$，如果 $\left | f'\left(x_{k+1} \right ) \right |$ 与 0 十分接近，则 $x_{k+1}$ 即为 $f\left(x\right)$ 的近似极值点，否则令 $k=k+1$，重复上述步骤直到 $\left | f'\left(x_{k+1} \right ) \right |$ 与 0 十分接近为止。其具体算法如下：</p>

<ul>
<li>给定初始点 $x_0$，精度 $\varepsilon >0$；</li>
<li>若$\left | f'\left(x_{k} \right ) \right |>\varepsilon$，令 $x_{k+1}=x_k-\frac{f'\left(x_k \right )}{f''\left(x_k \right )}$，否则 $x_{k}$ 为 $f\left(x\right)$ 的（近似）极值点；</li>
<li>对 $k=1,2,\cdots$，重复第 2 步直到确定极值点。</li>
</ul>

<h2>1.1.4 全局牛顿法</h2>


<h2>1.1.5 割线法</h2>

<p>割线法与牛顿法类似，它们都是通过寻找导数近似零点的方式来寻找极值点的，而进退法和黄金分割法则是通过比较函数值大小从而逐步缩小搜索区间的方式来寻找极值点的。割线法与牛顿法的区别体现在：割线法寻找的是原函数导数的近似零点，牛顿法寻找的是原函数的近似函数（函数的二阶泰勒展开）的导数的近似零点。割线法的具体算法如下：</p>

<ul>
<li>给定初始点 $x_0, x_1$ 和精度 $\varepsilon > 0$；</li>
<li>若 $\left | f'\left( x_k\right ) \right | \leq \varepsilon$，则 $x_k$ 为 $f\left(x\right)$ 的（近似）极值点，否则令</li>
$$
x_{k+1} = x_k - \frac{f'\left ( x_k \right )}{\frac{f'\left ( x_k \right )-f'\left ( x_{k-1} \right )}{x_k-x_{k-1}}} = \frac{\left ( x_k-x_{k-1} \right )f'\left ( x_k \right )}{f'\left ( x_k \right )-f'\left ( x_{k-1}\right) }
$$
<li>对 $k=1,2,\cdots$，重复第 2 步直到确定极值点。</li>
</ul>

<h2>1.1.6 抛物线法</h2>

<p>抛物线法又称二次插值法，它在搜索区间中选择一点 $c_0$，首先利用该点和搜索区间的两个端点 $a_0$、$b_0$ 构造二次插值多项式</p>

<p class="post-text-formula">
$$P\left(x\right)=\alpha_0+\alpha_1x+\alpha_2x^2\ \ s.t.
\left\{\begin{matrix}f\left(a_0\right)=\alpha _0+\alpha _1a_0+\alpha _2a_0^2
\\ f\left(b_0\right)=\alpha _0+\alpha _1b_0+\alpha _2b_0^2
\\ f\left(c_0\right)=\alpha _0+\alpha _1c_0+\alpha _2c_0^2
\end{matrix}\right.$$
</p>

<p class="post-text-noindent">来近似原函数，并求得二次插值多项式的极值点</p>

<p class="post-text-formula">
$$c_1=-\frac{\alpha _1}{2\alpha _2}=\frac{1}{2}\frac{f\left(a_0 \right )\left(b_0^2-c_0^2 \right )+f\left(b_0 \right )\left(c_0^2-a_0^2 \right )+f\left(c_0 \right )\left(a_0^2-b_0^2 \right )}{f\left(a_0 \right )\left(b_0-c_0 \right )+f\left(b_0 \right )\left(c_0-a_0 \right )+f\left(c_0 \right )\left(a_0-b_0 \right )}$$
</p>

<p class="post-text-noindent">然后依据 $c_0$ 与 $c_1$ 的函数值的大小关系以及它们自身的大小关系缩小搜索区间，最后在新的搜索区间下重复上述步骤直到搜索区间中选择的点与二次插值多项式极值点距离十分接近时为止，此时二次插值多项式极值点即为原函数的近似极值点。抛物线法的具体算法如下：</p>

<ul>
<li>确定初始搜索区间 $\left[a_0,b_0\right]$，初始插值内点 $c_0\epsilon \left[a_0,b_0\right]$ 以及精度 $\varepsilon >0$；</li>
<li>计算 $c_{k+1}$，$f\left(c_{k+1}\right)$ 以及 $f\left(c_k\right)$，其中</li>
$$c_{k+1}=\frac{1}{2}\frac{f\left(a_k \right )\left(b_k^2-c_k^2 \right )+f\left(b_k \right )\left(c_k^2-a_k^2 \right )+f\left(c_k \right )\left(a_k^2-b_k^2 \right )}{f\left(a_k \right )\left(b_k-c_k \right )+f\left(b_k \right )\left(c_k-a_k \right )+f\left(c_k \right )\left(a_k-b_k \right )}$$
<li>当 $f\left(c_{k+1}\right)\leq f\left(c_k\right)$ 时，若 $c_{k+1}\geq c_k$，则令 $a_{k+1}=c_k$，$c_{k+1}=c_{k+1}$，$b_{k+1}=b_k$，否则令 $a_{k+1}=a_k$，$c_{k+1}=c_{k+1}$，$b_{k+1}=c_k$；</li>
<li>当 $f\left(c_{k+1}\right)> f\left(c_k\right)$ 时，若 $c_{k+1}\geq c_k$，则令 $a_{k+1}=a_k$，$c_{k+1}=c_{k}$，$b_{k+1}=c_{k+1}$，否则令 $a_{k+1}=c_{k+1}$，$c_{k+1}=c_{k}$，$b_{k+1}=b_k$；</li>
<li>对 $k=1,2,\cdots$，重复第 2,3 步或 2,4 步直到 $\left | c_{k+1}-c_{k} \right |\leq \varepsilon $ 为止，此时 $c_{k+1}$ 即为 $f\left(x\right)$ 的近似极值点。</li>
</ul>

<h2>1.1.7 三次插值法</h2>

<p>三次插值法即用三次多项式函数近似原函数，将三次多项式 $P\left(x\right)$ 的极值作为原函数 $f\left(x\right)$ 极值的近似。首先我们利用搜索区间的两个端点 $a_0$、$b_0$ 以及附加导数条件 $f'\left(a_0\right)=P'\left(a_0\right)$、$f'\left(b_0\right)=P'\left(b_0\right)$ 构造三次插值多项式</p>

<p class="post-text-formula">
$$P\left(x\right)=\alpha_0+\alpha_1x+\alpha_2x^2+\alpha_3x^3$$
$$s.t.
\left\{\begin{matrix} f\left(a_0\right)&=&\alpha _0&+&\alpha _1a_0&+&\alpha _2a_0^2&+&\alpha _3a_0^3
\\f\left(b_0\right)&=&\alpha _0&+&\alpha _1b_0&+&\alpha _2b_0^2&+&\alpha _3b_0^3
\\f'\left(a_0\right)&=&\alpha _1&+&2\alpha _2a_0&+&3\alpha _3a_0^2
\\f'\left(b_0\right)&=&\alpha _1&+&2\alpha _2b_0&+&3\alpha _3b_0^2
\end{matrix}\right.$$
</p>

<p class="post-text-noindent">来近似原函数，并求得三次插值多项式的极值点</p>

<p class="post-text-formula">
$$c_1 = a_0 + \frac{z_0-f'\left(a_0 \right )-w_0}{2z_0-f'\left(a_0 \right )+f'\left(b_0 \right )}\left(b_0-a_0 \right )$$
</p>

<p class="post-text-noindent">其中</p>

<p class="post-text-formula">
$$\left\{\begin{matrix} z_0& = &\sqrt{w_0^2-f'\left(a_0 \right )f'\left(b_0 \right )}&
\\ w_0& = &\frac{3\left[f\left(b_0 \right )-f\left(a_0 \right ) \right ]}{b_0-a_0}-f'\left(a_0 \right )f'\left(b_0 \right )
\end{matrix}\right.$$
</p>

<p class="post-text-noindent">接着依据 $f\left(x\right)$ 在 $c_1$ 处的二阶导数与 0 的大小关系缩小搜索区间，最后在新的搜索区间下重复上述步骤直到原函数在三次插值多项式极值点上的导数值十分接近 0 时位置，此时三次插值多项式极值点即为原函数的近似极值点。三次插值法的具体算法如下：</p>

<ul>
<li>确定初始搜索区间 $\left[a_0,b_0\right]$，初始插值内点 $c_0\epsilon \left[a_0,b_0\right]$ 以及精度 $\varepsilon >0$</li>
<li>计算 $c_{k+1}$，$f‘\left(c_{k+1}\right)$ 以及 $f’‘\left(c_k\right)$，其中</li>
$$c_{k+1} = a_k + \frac{z_k-f'\left(a_k \right )-w_k}{2z_k-f'\left(a_k \right )+f'\left(b_k \right )}\left(b_k-a_k \right )$$
$$\left\{\begin{matrix} z_k& = &\sqrt{w_k^2-f'\left(a_k \right )f'\left(b_k \right )}&
\\ w_k& = &\frac{3\left[f\left(b_k \right )-f\left(a_k \right ) \right ]}{b_k-a_k}-f'\left(a_k \right )f'\left(b_k \right )
\end{matrix}\right.$$
<li>若 $\left|f'’(c_{k+1}\right| < 0$，令 $a_{k+1} = c_{k+1}$，$b_{k+1} = b_k$，否则令 $a_{k+1} = a_k$，$b_{k+1} = c_{k+1}$</li>
<li>对 $k=1,2,\cdots$，重复第 2,3 步直到 $\left|f'(c_{k+1}\right|\leq \varepsilon$ 为止，此时 $c_{k+1}$ 即为 $f\left(x\right)$ 的近似极值点。</li>
</ul>

<h2>1.1.8 可接受搜索法</h2>

<p></p>

<p class="post-text-noindent">未完待续……</p>

<p>我的问题：</p>
<ul>
<li>全局牛顿法的基本思想是怎样的？牛顿法的收敛条件是初始点要充分靠近某一极值点，那究竟什么程度算充分靠近？算法的收敛与否又是怎样分析的？</li>
<li>可接受搜索法的基本思想是什么？</li>
<li>有没有书介绍这些算法最初的想法的？有没有书对各种算法作出详细比较的？有没有书对这些算法在当前的应用情况作出介绍的？这种跳过思想只讲步骤让人难受！</li>
</ul>

<p class="post-text-center"></p>
<p class="post-text-tablename"></p>