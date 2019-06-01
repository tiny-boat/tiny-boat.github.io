---
layout: post
title:  "时间序列回顾"
date:   2019-05-12 18:52:00
categories: Statistics
permalink: /review/time_series/
---

## 1 时间序列

# 1.2 平稳序列

1. 平稳序列的定义：$\forall \ t \in N$，$X_t$ 的一阶原点矩（期望）为常数、二阶原点矩存在，$X_t$ 与 $X_s$ 的协方差仅与时间间隔 $t-s$ 有关。期望为常数、方差为常数、任意协方差为 0 的平稳序列 $$\left\{\varepsilon_t \right\}$$ 称为白噪声，记作 $\mathrm{WN} \left(\mu,\sigma^2 \right )$。平稳序列 $X_t$ 的线性变换 $aX_t + b$ 依然平稳。

2. 平稳序列自协方差函数具有三个性质：对称
$$\gamma_k = \gamma_{-k}$$、协方差矩阵非负定和有界 $$\left | \gamma_k \right | \leq \gamma_0$$。性质 1 由定义直接得到，性质 2 利用二次型非负定的定义证得，性质 3 使用柯西-施瓦兹不等式 $$E \left[XY \right ] \leq \sqrt{E\left[X^2 \right ]E\left[Y^2 \right ]}$$ 得到。满足这三个性质的实数列被称为非负定序列，平稳序列的自协防差函数是非负定序列，每个非负定序列对应一个平稳序列自协方差函数。

3. 随机变量 $X_1,X_2,\cdots,X_n$ 的协方差矩阵对应二次型 $Var \left(\sum_{i=1}^{n} a_i X_i\right )$ 为 0 时，称随机变量 $X_1,X_2,\cdots,X_n$ 线性相关，否则线性无关。

4. 平稳序列的标准化序列的自协方差函数为该平稳序列的自相关函数。

5. 如果随机过程 $N \left(t \right )$ 满足：① 任意间隔 s 期的随机过程差服从参数为 $\lambda s$ 的泊松分布 ② 独立增量过程，即所有间隔 1 期的随机过程差相互独立，则该随机过程是强度为 $\lambda$ 的泊松过程。$\epsilon_n = N \left(n+1 \right ) - N \left(n \right ) - \lambda$ 称为泊松白噪声，其均值为 0，方差为 $\lambda$。

6. 如果随机过程 $B \left(t \right )$ 满足：① 任意间隔 s 期的随机过程差服从均值为 0，方差为 $s$ 的正态分布 ② 独立增量过程，则该随机过程是一个标准布朗运动。$\epsilon_n = B \left(n+1 \right ) - B \left(n \right )$ 称为标准正态白噪声，其均值为 0，方差为 1。

7. 如果 $\forall \ s,t,\ E \left[X_tY_s \right ] = 0$，则称
$$\left \{ X_t \right \}$$ 和 $$\left \{ Y_t \right \}$$ 正交，正交平稳序列的和仍是平稳序列。

# 1.3 线性平稳序列和线性滤波

1. 有限零均值白噪声序列的线性组合 $X_t = \sum_{j=1}^{q}a_j\epsilon_{t-j}$ 被称为运动平均/滑动平均（Moving Average, MA），MA 是平稳的，其均值为 0，当 $k \leq q$ 时，延迟 k 期协方差函数等于 $\sigma^2 \sum_{j=0}^{q-k}a_ja_{j+k}$，否则等于 0，这样的序列称为 q 相关的。

2. 当组合系数平方可和（组合系数平方和存在）时，无限零均值白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 在均方收敛意义下存在且是平稳序列，当延迟期数 $k \rightarrow \infty$ 时，其协方差函数趋于 0；特别地，当组合系数绝对可和（组合系数绝对和存在）时，无限零均值白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 在几乎必然收敛或均方收敛意义下存在且是平稳序列。

<!-- <div class="post-style">
<blockquote>证明（1.3 B 部分，例 6.3）：令<br>
$$\xi_n = \sum_{j=-n}^{n}\left | a_j\epsilon_{t-j} \right |,\ \xi = \sum_{j=-\infty}^{\infty}\left | a_j\epsilon_{t-j} \right |$$
易知 $\left \{ \xi_n \right \}$ 是单调不减的非负随机变量序列，由单调收敛定理及和的期望等于期望的和的性质有：<br>
$$\lim_{n \rightarrow \infty} E \left[\xi_n \right ] = E \left[\xi \right ] = \sum_{j=-\infty}^{\infty}\left | a_j \right |E \left[\left | \epsilon_{t-j} \right | \right ] \quad \left(1 \right )$$
由柯西施瓦兹不等式有<br>
$$E \left[\left | \epsilon_{t-j} \right | \right ] = E \left[\left | \epsilon_{t-j}\cdot 1 \right | \right ] \leq \sqrt{E \left[\left | \epsilon_{t-j} \right |^2 \right ] E \left[1^2 \right ]} = \sigma \quad \left(2 \right )$$
根据 $\left(1 \right ),\ \left(2 \right )$ 式和组合系数绝对可和（$\sum_{j=-\infty}^{\infty}\left | a_j \right | < \infty$）的条件<br>
$$\lim_{n \rightarrow \infty} E \left[\xi_n \right ] = E \left[\xi \right ] = \sum_{j=-\infty}^{\infty}\left | a_j \right |E \left[\left | \epsilon_{t-j} \right | \right ] \leq \sigma\sum_{j=-\infty}^{\infty}\left | a_j \right | < \infty$$
</blockquote>
</div> -->

3. $X_t = \sum_{j=0}^{\infty}a_j\epsilon_{t-j}$ 称为单边运动平均或单边无穷滑动和。

4. 序列 $$\left \{ X_t \right \}$$ 的无限运动平均/滑动平均 $Y_t = \sum_{j=-\infty}^{\infty}h_jX_{t-j}$ 称为 $$\left \{ X_t \right \}$$ 的线性滤波，$$\left \{ h_j \right \}$$ 称为保时线性滤波器。

# 1.4 正态时间序列和随机变量的收敛性

1. 随机向量 $\boldsymbol{X} = \left(X_1,X_2,\cdots,X_n \right )'$ 的协方差矩阵 $\Sigma_\boldsymbol{X} = E \left[\left(\boldsymbol{X}-\boldsymbol{\mu} \right ) \left(\boldsymbol{X}-\boldsymbol{\mu} \right )^T \right ] = E \left[\boldsymbol{X}\boldsymbol{X}^T \right ] - E \left[\boldsymbol{X} \right ] E \left[\boldsymbol{X} \right ]^T$，随机向量的线性变换 $\boldsymbol{Y} = \boldsymbol{a} + \boldsymbol{BX}$ 的期望 $E \left[\boldsymbol{Y} \right ] = \boldsymbol{a} + \boldsymbol{B}E \left[\boldsymbol{X} \right ]$，方差 $Var \left[\boldsymbol{Y} \right ] = \boldsymbol{B} \Sigma_\boldsymbol{X} \boldsymbol{B}^T$。

2. 随机向量 $\boldsymbol{Y} = \left(Y_1,Y_2,\cdots,Y_m \right )'$ 服从多元正态分布 $N \left(\boldsymbol{\mu}, \boldsymbol{\Sigma} \right )$的三种等价定义：① $\boldsymbol{Y} = \boldsymbol{a} + \boldsymbol{BX}$ 且 $\boldsymbol{X} = \left(X_1,X_2,\cdots,X_n \right )'$ 中每个随机变量独立同分布于标准正态分布；② $\boldsymbol{Y}$ 的特征函数为 $\exp \left[i \boldsymbol{t}^T \boldsymbol{\mu} - \frac{1}{2}\boldsymbol{t}^T \boldsymbol{\Sigma} t \right ]$；③ $\boldsymbol{Y}$ 的任意线性组合均服从正态分布。

3. 如果 $\forall n \geq 1$，随机向量 $\left(X_{t_1},X_{t_2},\cdots,X_{t_n} \right )'$ 均服从多元正态分布，则称 $$\left \{ X_t \right \}$$ 为正态时间序列。$$\left \{ X_t \right \}$$ 为正态时间序列当且仅当 $$\forall m \in Z^+,\ \left \{ X_1,X_2,\cdots,X_m \right \}$$ 服从 m 维正态分布，当且仅当 $$\forall m \in Z^+,\ \left \{ X_{-m},X_{-m+1},\cdots,X_m \right \}$$ 服从 2m+1 维正态分布。

4. 随机变量四种收敛性之间的关系：$L^2$（均方/二阶矩）收敛 $\Rightarrow$ $L^1$（一阶矩）收敛 $\Rightarrow$ 依概率收敛（弱收敛）$\Rightarrow$ 依分布收敛（$L^1,\ L^2$ 收敛均为矩收敛的特例）；以概率 1 收敛（几乎必然收敛） $\Rightarrow$ 依概率收敛（弱收敛）$\Rightarrow$ 依分布收敛。

5. 正态时间序列如果依分布收敛于某个随机变量，那么这个随机变量一定服从正态分布。即如果时间序列 $X_n\sim N \left(\mu_n,\sigma_{n}^2 \right )$ 且依分布收敛到随机变量 $X$，则 $X\sim N \left(\mu,\sigma^2 \right )$ 且 $\lim_{n\rightarrow \infty} \mu_n = \mu,\ \lim_{n\rightarrow \infty} \sigma_n^2 = \sigma^2$。

6. 当组合系数平方可和（组合系数平方和存在）时，无限零均值正态白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 在均方收敛意义下存在且是正态平稳序列；特别地，当组合系数绝对可和（组合系数绝对和存在）时，无限零均值正态白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 在几乎必然收敛或均方收敛意义下存在且是正态平稳序列。

<div class="post-style">

<blockquote>证明（习题 4.2）：</blockquote>
<blockquote>证明（习题 6.1）：</blockquote>

</div>

# 1.5 严平稳序列及其遍历性

1. 如果 $\forall n \in N,k \in Z$，$\left(X_1,X_2,\cdots,X_n \right )'$ 和 $\left(X_{1+k},X_{2+k},\cdots,X_{n+k} \right )'$ 服从同一分布，则我们称序列 $X_t$ 是严平稳序列。严平稳序列具有分布平移不变性，且 $Y_t = \phi \left(X_{t+1},X_{t+2},\cdots,X_{t+m} \right )$ 仍是严平稳序列。

2. 在二阶矩存在的前提下，严平稳一定宽平稳，宽平稳不能推出严平稳；如果二阶矩不存在，二者没有关系；如果序列为正态的，严平稳与宽平稳等价。

3. 有遍历性的严平稳序列被称为严平稳遍历序列，宽平稳遍历序列定义为满足如下两个条件的平稳序列：① $P \left(\lim_{T \rightarrow \infty} \frac{1}{2T} \int_{-T}^{T}X_tdt = E \left[X_t \right ] \right ) = 1$，② $P \left(\lim_{T \rightarrow \infty} \frac{1}{2T} \int_{-T}^{T}X_tX_sdt = E \left[X_tX_s \right ] \right ) = 1$。

4. 如果 $$\left \{ X_t \right \}$$ 是严平稳遍历的，则有：① 从其一次实现 $x_1,x_2,\cdots$ 就可推断出序列的所有有限维分布；② 如果
$E \left | X_t \right | < \infty$，那么 $\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{i=1}^n X_t = E \left[X_1 \right ],\ a.s.$；③ $Y_t = \phi \left(X_{t+1},X_{t+2},\cdots,X_{t+m} \right )$ 是严平稳遍历序列，若 $E \left | Y_t \right | < \infty$，则 $\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{i=1}^n Y_t = E \left[Y_0 \right ] = E \left[\phi \left(X_{1},X_{2},\cdots,X_{m} \right ) \right ],\ a.s.$；④ $$\left \{ X_tX_{t+s},\ t\geq 1 \right \}$$ 严平稳遍历，若 $E \left[X_t^2 \right ] < \infty$，则 $\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{i=1}^n x_tx_{t+k} = E \left[X_tX_{t+k} \right ],\ a.s.$

5. 当组合系数平方可和（组合系数平方和存在）时，无限零均值独立同分布白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 是严平稳遍历序列；特别地，当组合系数绝对可和（组合系数绝对和存在）时，无限零均值独立同分布白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 是严平稳序列。

<div class="post-style">
<blockquote>证明（例 5.1，5.2）：</blockquote>
<blockquote>证明（习题 5.4）：</blockquote>
</div>

# 1.6 Hilbert 空间中的平稳序列

1. Hilbert 空间指完备的内积空间，所谓完备指的是空间中的所有柯西列（基本列）都会收敛到空间内的一点。柯西列的元素随着序数的增加而愈发靠近，更确切地说，在去掉有限个元素后，柯西列余下的元素中任何两个间的距离的最大值不会超过任意给定的正数。用数学语言描述就是：当 $n,m \rightarrow \infty$ 时有 $$\left \| X_n-X_m \right \| \rightarrow 0$$，则 $$\left \{ X_n \right \}$$ 是一个柯西列。

2. 平稳序列 $$\left \{ X_t \right \}$$ 中随机变量的有限线性组合的全体
$$L^2 \left(X \right ) = \left \{ \sum_{j=1}^{k}a_jX_{t_j} | a_j\in R,t_j\in Z,1\leq j \leq k,k \in N^{+} \right \}$$ 在定义了内积 $\left \langle X,Y \right \rangle = E \left[XY \right ]$ 后构成 Hilbert 空间，在定义了距离 $$\left \| X-Y \right \| = \left(\left \langle X-Y,X-Y \right \rangle \right )^{1/2} = \left(E \left[\left(X-Y \right )^2 \right ] \right )^{1/2}$$ 后又构成距离空间。$L^2 \left(X \right )$ 是二阶矩有限的随机变量的全体 $$L^2 = \left \{ X: E \left[X^2 \right ] < \infty \right \}$$ 的子空间。$L^2$ 中包含 $L^2 \left(X \right )$ 的最小闭子空间 $\bar{L}^2 \left(X \right )$ 称为由平稳序列 $$\left \{ X_t \right \}$$ 生成的 Hilbert 空间。

3. 内积空间具有连续性，即在内积空间中，如果 $$\left \| X_n - X \right \| \rightarrow 0$$ 且 $$\left \| Y_n - Y \right \| \rightarrow 0$$，那么 $$\left \| X_n \right \| \rightarrow \left \| X \right \|$$ 且 $\left \langle X_n,Y_n \right \rangle \rightarrow \left \langle X,Y \right \rangle$。

# 1.7 平稳序列的谱函数

1. 平稳序列的二阶统计性质可由谱函数或谱密度刻画，平稳序列的谱函数存在且唯一，但平稳序列不一定存在谱密度，如果存在，平稳序列的谱密度在几乎处处的意义下是唯一的。如果 $F \left(\lambda \right )$ 是 $\left[-\pi,\pi \right ]$ 上单调不减右连续函数且 $\gamma_k = \int_{-\pi}^{\pi} e^{ik\lambda}dF\left(\lambda \right ),\ F \left(-\pi \right ) = 0,\ k \in Z$，则称 $F \left(\lambda \right )$ 为 $$\left \{ X_t \right \}$$ 或 $$\left \{ \gamma_k \right \}$$ 的谱分布函数，简称谱函数。如果 $f \left(\lambda \right )$ 是 $\left[-\pi,\pi \right ]$ 上的非负函数且 $\gamma_k = \int_{-\pi}^{\pi} f\left(\lambda \right )e^{ik\lambda}d \lambda,\ k \in Z$，则称 $f \left(\lambda \right )$ 为 $$\left \{ X_t \right \}$$ 或 $$\left \{ \gamma_k \right \}$$ 的谱密度函数或功率谱密度，简称谱密度或功率谱。如果谱密度存在，则其变上限定积分就是谱函数。当谱函数绝对连续（利普希茨连续 $\Rightarrow$ 绝对连续 $\Rightarrow$ 一致连续 $\Rightarrow$ 连续）时，它的几乎处处导函数（绝对连续函数几乎处处可微）就是谱密度。

2. 相互正交的零均值平稳序列的谱函数和谱密度具有可加性。设 $Z_t = X_t + Y_t + c,\ t\in Z$，如果 $$\left \{ X_t \right \}$$、$$\left \{ Y_t \right \}$$ 是相互正交的零均值平稳序列，则 $$\left \{ Z_t \right \}$$ 的谱函数 $F_Z \left(\lambda \right ) = F_X \left(\lambda \right ) + F_Y \left(\lambda \right )$，如果 $$\left \{ X_t \right \}$$、$$\left \{ Y_t \right \}$$ 的谱密度存在，则 $$\left \{ Z_t \right \}$$ 的谱密度 $f_Z \left(\lambda \right ) = f_X \left(\lambda \right ) + f_Y \left(\lambda \right )$。

3. 当组合系数平方可和（组合系数平方和存在）时，无限零均值白噪声序列的线性组合 $X_t = \sum_{j=-\infty}^{\infty}a_j\epsilon_{t-j}$ 在均方收敛意义下存在且是平稳序列，并且存在谱密度
$f \left(\lambda \right ) = \frac{\sigma^2}{2\pi} \left | \sum_{j=-\infty}^{\infty}a_je^{ij\lambda} \right |^2$。

4. 如果 $$\left \{ X_t \right \}$$ 存在谱函数
$F_X \left(\lambda \right )$，则 $$\left \{ X_t \right \}$$ 的无限运动平均/滑动平均 $Y_t = \sum_{j=-\infty}^{\infty}h_jX_{t-j}$ 有谱函数 $F_Y \left(\lambda \right )=\int_{-\pi}^{\lambda} \left | \sum_{j=-\infty}^{\infty}h_je^{-isj} \right |^2dF_X \left(s \right )$；如果 $$\left \{ X_t \right \}$$ 存在谱密度 $f_X \left(\lambda \right )$，则 $Y_t = \sum_{j=-\infty}^{\infty}h_jX_{t-j}$ 有谱密度 $f_Y \left(\lambda \right )=\left | \sum_{j=-\infty}^{\infty}h_je^{-i\lambda j} \right |^2f_X \left(\lambda \right )$