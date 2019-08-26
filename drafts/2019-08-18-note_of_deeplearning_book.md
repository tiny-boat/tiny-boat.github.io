---
layout: post
title:  "深度学习读书笔记"
date:   2019-08-18 17:17:00
categories: Computer_Science Deep_Learning
permalink: /dlbook/
excerpt: '深度学习读书笔记'
---

### 0 Introduction

如果特征选取合适，一个简单的机器学习算法就很有效了。

选取合适特征可通过特征工程（feature engineering）和表示学习（representation learning）两种途径实现。文章<a href="https://zhuanlan.zhihu.com/p/41521695">知乎专栏数据说: 「特征工程」与「表示学习」</a>对此有非常通俗的解释。

自编码器（autoencoders）是表示学习中的重要技术，表示学习也是目前深度学习领域的热门研究方向。2013 年开办的国际学习表示会议（International Conference on Learning Representations，ICLR）目前已成为深度学习领域顶级会议，会议采用公开评审制度，可谓学术界一股清流。

深度学习 $\rightarrow$ 表示学习 $\rightarrow$ 机器学习 $\rightarrow$ 人工智能，后者包含前者。

下图很好的展示了过去基于规则的人工智能、基于经典机器学习的人工智能和现在基于表示学习的人工智能和基于深度学习的人工智能的联系与区别。

<center>
<img src="/assets/img/Natural_Science/Computer_Science/Deep_Learning/dlbook/diff_ML&RL&DL.png">
<p>不同人工智能系统的区别，阴影框表示能从数据中学习的组件</p>
</center>

可以看到：基于规则的人工智能系统是人工定义好的，其他人工智能系统是从数据中学习得到的，经典机器学习使用的数据特征由人构建，而表示学习与深度学习特征则由机器构建。

总的来说就是一句话：自动化是人类始终不渝的追求。

#### History

历史上，人工神经网络历经了三次研究浪潮，今天，第三次研究浪潮仍在继续。

人工神经网络第一次浪潮始于 20 世纪 40 年代，结束于 20 世纪 60 年代：

* 1943 年，MeCulloch 和 Pitts 提出模拟脑功能的早期模型 McCulloch-Pitts 神经元，它通过检验函数 $f\left(\boldsymbol{x},\boldsymbol{w} \right)$ 是否大于一个阈值 $\theta$ 来决定输出的正负，正负对应于输出的两种类别，此时模型的权重 $\boldsymbol{w}$ 和阈值 $\theta$ 是人工设定的

* 1958 年，Rosenblatt 提出感知机（perceptron），感知机类似于 McCulloch-Pitts 神经元，只不过此时模型的权重不再由人工设定，而是通过数据来学习，其使用的学习算法（或称训练算法、优化算法）——随机梯度下降——一直沿用至今，今天稍加改进后的随机梯度下降算法仍是深度学习的主要训练算法

* 1960 年，Widrow 和 Hoff 提出自适应线性单元（adaptive linear element, ADALINE），从统计学角度来看这就是一个古老的线性回归模型，当然二者在学习算法上是不同的，前者使用随机梯度下降，后者使用最小二乘直接求解（对线性回归模型，最小二乘有显示解，而无需采用迭代算法）

* 1969 年，Minsky 和 Papert 所著感知机一书出版，书中指出感知机无法学习异或函数（即满足 $f\left(\left(0,1 \right ),\boldsymbol{w} \right) = 1$、$f\left(\left(1,0 \right ),\boldsymbol{w} \right) = 1$、$f\left(\left(0,0 \right ),\boldsymbol{w} \right) = 0$ 和 $f\left(\left(1,1 \right ),\boldsymbol{w} \right) = 0$ 的函数），人们错误地以为 Minsky 和 Papert 也认为多层感知机无法学习异或函数（事实上 Minsky 和 Papert 已经知道多层感知机是可以学习异或函数的）。人工神经网络连如此简单的函数都无法学习，这使得人们对受生物学启发的学习产生了普遍的抵触情绪，人工神经网络的研究陷入第一次低谷。

与人工神经网络没落背影形成鲜明对比的，是这一年里发生的两件大事。

1969 年 7 月 16 日，阿波罗 11 号升空，4 天之后的 7 月 20 日，美国宇航员尼尔·阿姆斯特朗走出登月舱，说出了那句注定永载史册的话：“这是我的一小步，却是人类的一大步”。

1969 年 10 月 29 日，世界历史上第一次网络通讯实验完成，克兰罗克和助手在加州大学洛杉矶分校 (UCLA) 向斯坦福研究所研究员比尔·杜瓦传递了两个字母 L 和 O. 随后不久，11 月 21 日，因特网的前身阿帕网 (ARPANET) 正式建立第一个连接，几天后的 12 月 5 日阿帕网扩展到 4 个节点，包括：加州大学洛杉矶分校、斯坦福研究所、加州大学圣巴拉拉分校和犹他大学。

回望历史，我们不禁感叹，人工神经网络陷入第一次低谷的时代，正是人类追逐科技进步的伟大时代，是互联网生根发芽的伟大时代，而如果没有互联网，没有互联网带来的海量数据，我们很难想象，人工神经网络能在今天又一次成为研究者的宠儿，也很难看到这场被命名为深度学习的浪潮给我们今天生产生活带来的深刻变革与巨大便利。

人工神经网络第二次浪潮始于 20 世纪 80 年代，结束于 20 世纪 90 年代：

* 1984 年，GE Hinton, TJ Sejnowski 和 DH Ackley 发表论文 “Boltzmann machines: Constraint satisfaction networks that learn”，提出玻尔兹曼机

* 1985 年，DH Ackley, GE Hinton 和 TJ Sejnowski 发表论文 “A Learning Algorithm for Boltzmann Machines”，给出玻尔兹曼机学习算法

* 1986 年，DE Rumelhart, GE Hinton 和 RJ Williams 发表论文 “Learning Internal Representations by Error Propagation”，重新发现反向传播算法

* 1986 年，GE Hinton, JL McClelland 和 DE Rumelhart 发表论文 “Distributed representations”，阐述分布式表示概念

* 1989 年，Yann LeCun 等人发表论文 “Backpropagation Applied to Handwritten Zip Code Recognition”，卷积神经网络首次用于手写数字识别

* 1993 年，Yoshua Bengio 发表论文 “Artificial Neural Networks and their Applications to Sequence Recognition”，神经网络与隐马尔可夫模型等概率模型结合用于序列识别

* 1995 年，Y LeCun 等人在人工神经网络国际会议上发表文章 “Comparison of Learning Algorithms for Handwritten Digit Recognition”，比较手写数字识别的不同学习算法

* 1995 年，Y LeCun, Y Bengio 发表论文 “Convolutional networks for images, speech, and time series”，介绍卷积神经网络在图像、语音和时间序列领域的应用

* 1997 年，Hochreiter 和 Schmidhuber 发表论文 “Long short-term memory”，提出长短期记忆（LSTM）网络用来解决长序列建模的一些根本性数学难题

* 1998 年，YA LeCun, L Bottou, GB Orr 和 KR Müller 发表论文 “Efficient backprop”，改进反向传播算法

* 1998 年，Y LeCun 和 C Cortes 给出今天被广泛使用的数据集 “The MNIST database of handwritten digits”

* 1998 年，Y LeCun, L Bottou, Y Bengio 和 P Haffner 发表论文 “Gradient-based learning applied to document recognition”，将基于梯度的学习算法应用到文本识别

基于神经网络和其他人工智能技术的创业公司寻求投资，其做法野心勃勃但不切实际，加之机器学习领域其他方法，特别是核方法和图模型在很多重要任务上实现了很好的效果，人工神经网络的研究陷入第二次低谷。

人工神经网络第三次浪潮始于 2006 年，并延续至今：

* 2006 年，GE Hinton, S Osindero 和 YW Teh 发表论文 “A fast learning algorithm for deep belief nets”，介绍深度信念网的快速学习算法

* 2006 年，GE Hinton 和 RR Salakhutdinov 发表论文 “Reducing the dimensionality of data with neural networks”，使用神经网络降低数据维度

* 2007 年，Y Bengio, P Lamblin, D Popovici 和 H Larochelle 发表论文 “Greedy layer-wise training of deep networks”

* 2008 年，L van der Maaten 和 G Hinton 发表论文 “Visualizing data using t-SNE”，使用 t-SNE 可视化数据

* 2008 年，P Vincent, H Larochelle, Y Bengio 和 PA Manzagol 发表论文 “Extracting and composing robust features with denoising autoencoders”，介绍去噪自编码器的抽取和组合特征上的应用

* 2009 年，Y Bengio, J Louradour, R Collobert 和 J Weston 发表论文 “Curriculum learning”，引入课程学习概念

* 2010 年，V Nair 和 GE Hinton 发表论文 “Rectified linear units improve restricted boltzmann machines”，介绍使用修正线性单元改进受限玻尔兹曼机

* 2010 年，D Erhan, Y Bengio, A Courville, PA Manzagol, P Vincent 和 S Bengio 发表论文 “Why does unsupervised pre-training help deep learning?”，讲述为什么无监督预训练有助于深度学习

* 2010 年，J Turian, L Ratinov 和 Y Bengio 发表论文 “Word representations: a simple and general method for semi-supervised learning”，介绍一种简单而通用的半监督学习方法

* 2010 年，P Vincent, H Larochelle, I Lajoie, Y Bengio 和 PA Manzagol 发表论文 “Stacked denoising autoencoders: Learning useful representations in a deep network with a local denoising criterion”，介绍堆叠去噪自编码器

* 2011 年，X Glorot, A Bordes 和 Y Bengio 发表论文 “Deep sparse rectifier neural networks”，引入深度稀疏整流神经网络

* 2011 年，JS Bergstra, R Bardenet, Y Bengio 和 B Kégl 发表论文 “Algorithms for hyper-parameter optimization”，介绍超参数优化算法

* 2012 年，A Krizhevsky, I Sutskever 和 GE Hinton 发表论文 “Imagenet classification with deep convolutional neural networks”，介绍深度卷积神经网络在图像分类上的应用

* 2012 年，Geoffrey Hinton, Li Deng, Dong Yu, George Dahl, Abdel-rahman Mohamed, Navdeep Jaitly, Andrew Senior, Vincent Vanhoucke, Patrick Nguyen, Brian Kingsbury 和 Tara Sainath 发表论文 “Deep neural networks for acoustic modeling in speech recognition”，介绍语音识别中用于声学建模的深度神经网络

* 2012 年，J Bergstra 和 Y Bengio 发表论文 “Random search for hyper-parameter optimization”，介绍超参数优化的随机搜索

* 2012 年，T Tieleman 和 G Hinton 在 “Lecture 6.5-rmsprop: Divide the gradient by a running average of its recent magnitude” 引入 rmsprop 优化算法

* 2012 年，A Mohamed, G Dahl 和 G Hinton 发表论文 “Acoustic modeling using deep belief networks”，使用深度信念网作声学建模

* 2013 年，A Graves, A Mohamed 和 G Hinton 发表论文 “Speech recognition with deep recurrent neural networks”，使用深度循环神经网络进行语音识别

* 2013 年，IJ Goodfellow, D Warde-Farley, M Mirza, A Courville 和 Y Bengio 发表论文 “Maxout networks”，介绍 Maxout 网络

* 2013 年，Y Bengio, A Courville 和 P Vincent 发表论文 “Representation learning: A review and new perspectives”，综述表示学习领域的过去与最新观点

* 2013 年，R Pascanu, T Mikolov 和 Y Bengio 发表论文 “On the difficulty of training recurrent neural networks”，介绍循环神经网络训练的难点

* 2013 年，I Sutskever, J Martens, G Dahl 和 G Hinton 发表论文 “On the importance of initialization and momentum in deep learning”，介绍深度学习中初始化和动量的重要性

* 2014 年，Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville 和 Yoshua Bengio 发表论文 “Generative adversarial nets”，引入生成对抗网络

* 2014 年，N Srivastava, G Hinton, A Krizhevsky, I Sutskever 和 R Salakhutdinov 发表论文 “Dropout: a simple way to prevent neural networks from overfitting”，介绍一种简单的防止神经网络过拟合的方法 Dropout

* 2014 年，J Chung, C Gulcehre, KH Cho 和 Y Bengio 发表论文 “Empirical evaluation of gated recurrent neural networks on sequence modeling”，评估门循环（递归）神经网络在序列模型的效果

* 2014 年，Kyunghyun Cho, Bart Van Merriënboer, Caglar Gulcehre, Dzmitry Bahdanau, Fethi Bougares, Holger Schwenk 和 Yoshua Bengio 发表论文 “Learning phrase representations using RNN encoder-decoder for statistical machine translation”，介绍使用 RNN 编码-解码器学习短语表示

* 2014 年，D Bahdanau, K Cho 和 Y Bengio 发表论文 “Neural machine translation by jointly learning to align and translate”，介绍通过联合学习对齐与翻译进行神经机器翻译

* 2014 年，P Sermanet, D Eigen, X Zhang, M Mathieu, R Fergus 和 Y LeCun 发表论文 “OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks”，介绍使用卷积网络同时进行识别、定位和检测的 OverFeat 算法

* 2015 年，G Hinton, O Vinyals 和 J Dean 发表论文 “Distilling the knowledge in a neural network”，在神经网络中发现知识

* 2015 年，M Mathieu, C Couprie 和 Y LeCun 发表论文 “Deep multi-scale video prediction beyond mean square error”

* 2015 年，JK Chorowski, D Bahdanau, D Serdyuk, K Cho 和 Y Bengio 发表论文 “Attention-based models for speech recognition”

* 2015 年，M Courbariaux, Y Bengio 和 JP David 发表论文 “Binaryconnect: Training deep neural networks with binary weights during propagations”

* 2015 年，Kelvin Xu, Jimmy Ba, Ryan Kiros, Kyunghyun Cho, Aaron Courville, Ruslan Salakhudinov, Rich Zemel 和 Yoshua Bengio 发表论文 “Show, attend and tell: Neural image caption generation with visual attention”

* 2016 年，JL Ba, JR Kiros 和 GE Hinton 发表论文 “Layer normalization”

* 2016 年，J Žbontar 和 Y LeCun 发表论文 “Stereo Matching by Training a Convolutional Neural Network to Compare Image Patches”

* 2016 年，A Conneau, H Schwenk, L Barrault 和 Y Lecun 发表论文 “Very deep convolutional networks for natural language processing”

* 2016 年，J Zhao, M Mathieu 和 Y LeCun 发表论文 “Energy-based generative adversarial network”

* 2016 年，M Courbariaux, I Hubara, D Soudry, R El-Yaniv 和 Y Bengio 发表论文 “Binarized neural networks: Training deep neural networks with weights and activations constrained to+ 1 or-1”

* 2016 年，IV Serban, A Sordoni, Y Bengio, A Courville 和 J Pineau 发表论文 “Building end-to-end dialogue systems using generative hierarchical neural network models”

* 2016 年，Theano: A Python framework for fast computation of mathematical expressions

* 2017 年，MM Bronstein, J Bruna, Y LeCun, A Szlam 和 P Vandergheynst 发表论文 “Geometric deep learning: going beyond euclidean data”

* 2017 年，I Hubara, M Courbariaux, D Soudry, R El-Yaniv 和 Y Bengio 发表论文 “Quantized neural networks: Training neural networks with low precision weights and activations”

* 2017 年，P Veličković, G Cucurull, A Casanova, A Romero, P Lio 和 Y Bengio 发表论文 “Graph attention networks”

* ……

第三次浪潮已经开始着眼于无监督学习技术和深度模型在小数据集的泛化能力，但目前更多的兴趣点仍是比较传统的监督学习算法和深度模型充分利用大型标注数据集的能力。

### 1 Applied Math and Machine Learning Basics

