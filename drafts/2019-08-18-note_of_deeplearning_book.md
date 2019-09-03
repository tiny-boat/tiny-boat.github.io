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

* **1958 年，Rosenblatt 提出感知机（perceptron），感知机类似于 McCulloch-Pitts 神经元，只不过此时模型的权重不再由人工设定，而是通过数据来学习，其使用的学习算法（或称训练算法、优化算法）——随机梯度下降——一直沿用至今，今天稍加改进后的随机梯度下降算法仍是深度学习的主要训练算法**

* **1960 年，Widrow 和 Hoff 提出自适应线性单元（adaptive linear element, ADALINE），从统计学角度来看这就是一个古老的线性回归模型，当然二者在学习算法上是不同的，前者使用随机梯度下降，后者使用最小二乘直接求解（对线性回归模型，最小二乘有显示解，而无需采用迭代算法）**

* 1969 年，Minsky 和 Papert 所著感知机一书出版，书中指出感知机无法学习异或函数（即满足 $f\left(\left(0,1 \right ),\boldsymbol{w} \right) = 1$、$f\left(\left(1,0 \right ),\boldsymbol{w} \right) = 1$、$f\left(\left(0,0 \right ),\boldsymbol{w} \right) = 0$ 和 $f\left(\left(1,1 \right ),\boldsymbol{w} \right) = 0$ 的函数），人们错误地以为 Minsky 和 Papert 也认为多层感知机无法学习异或函数（事实上 Minsky 和 Papert 已经知道多层感知机是可以学习异或函数的）。人工神经网络连如此简单的函数都无法学习，这使得人们对受生物学启发的学习产生了普遍的抵触情绪，人工神经网络的研究陷入第一次低谷。

与人工神经网络没落背影形成鲜明对比的，是这一年里发生的两件大事。

1969 年 7 月 16 日，阿波罗 11 号升空，4 天之后的 7 月 20 日，美国宇航员尼尔·阿姆斯特朗走出登月舱，说出了那句注定永载史册的话：“这是我的一小步，却是人类的一大步”。

1969 年 10 月 29 日，世界历史上第一次网络通讯实验完成，克兰罗克和助手在加州大学洛杉矶分校 (UCLA) 向斯坦福研究所研究员比尔·杜瓦传递了两个字母 L 和 O. 随后不久，11 月 21 日，因特网的前身阿帕网 (ARPANET) 正式建立第一个连接，几天后的 12 月 5 日阿帕网扩展到 4 个节点，包括：加州大学洛杉矶分校、斯坦福研究所、加州大学圣巴拉拉分校和犹他大学。

回望历史，我们不禁感叹，人工神经网络陷入第一次低谷的时代，正是人类追逐科技进步的伟大时代，是互联网生根发芽的伟大时代，而如果没有互联网，没有互联网带来的海量数据，我们很难想象，人工神经网络能在今天又一次成为研究者的宠儿，也很难看到这场被命名为深度学习的浪潮给我们今天生产生活带来的深刻变革与巨大便利。

人工神经网络第二次浪潮始于 20 世纪 80 年代，结束于 20 世纪 90 年代：

* **1980 年，Fukushima 和 Kunihiko 发表论文 “Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position”，提出神经认知机，它是卷积神经网络的前身**

* 1984 年，GE Hinton, TJ Sejnowski 和 DH Ackley 发表论文 “Boltzmann machines: Constraint satisfaction networks that learn”，提出玻尔兹曼机

* 1985 年，DH Ackley, GE Hinton 和 TJ Sejnowski 发表论文 “A Learning Algorithm for Boltzmann Machines”，给出玻尔兹曼机学习算法

* **1986 年，DE Rumelhart, GE Hinton 和 RJ Williams 发表论文 “Learning Internal Representations by Error Propagation”，重新发现反向传播算法**

* 1986 年，GE Hinton, JL McClelland 和 DE Rumelhart 发表论文 “Distributed representations”，阐述分布式表示概念

* **1989 年，Yann LeCun 等人发表论文 “Backpropagation Applied to Handwritten Zip Code Recognition”，卷积神经网络首次用于手写数字识别**

* **1991 年，Tony Robinson 和 Frank Fallside 发表论文 “A recurrent error propagation network speech recognition system”，提出用于语音识别的循环神经网络**

* **1993 年，Yoshua Bengio 发表论文 “Artificial Neural Networks and their Applications to Sequence Recognition”，神经网络与隐马尔可夫模型等概率模型结合用于序列识别**

* 1995 年，Y LeCun 等人在人工神经网络国际会议上发表文章 “Comparison of Learning Algorithms for Handwritten Digit Recognition”，比较手写数字识别的不同学习算法

* 1995 年，Y LeCun, Y Bengio 发表论文 “Convolutional networks for images, speech, and time series”，介绍卷积神经网络在图像、语音和时间序列领域的应用

* **1997 年，Hochreiter 和 Schmidhuber 发表论文 “Long short-term memory”，提出长短期记忆（LSTM）网络用来解决长序列建模的一些根本性数学难题**

* 1998 年，YA LeCun, L Bottou, GB Orr 和 KR Müller 发表论文 “Efficient backprop”，改进反向传播算法

* 1998 年，Y LeCun 和 C Cortes 给出今天被广泛使用的数据集 “The MNIST database of handwritten digits”

* 1998 年，Y LeCun, L Bottou, Y Bengio 和 P Haffner 发表论文 “Gradient-based learning applied to document recognition”，提出卷积神经网络 LeNet-5

基于神经网络和其他人工智能技术的创业公司寻求投资，其做法野心勃勃但不切实际，加之机器学习领域其他方法，特别是核方法和图模型在很多重要任务上实现了很好的效果，人工神经网络的研究陷入第二次低谷。

第二次低谷时期也产生了一些研究成果：

* **2000 年，Y Bengio 发表论文 “A neural probabilitic language model”，提出神经概率语言模型，机器翻译获得突破**

* 2004 年，Herbert Jaeger 和 Harald Haas 发表论文 ”Harnessing Nonlinearity: Predicting Chaotic Systems and Saving Energy in Wireless Communication“，提出称之为回声状态网络（echo state network）的循环神经网络

人工神经网络第三次浪潮始于 2006 年，并延续至今：

* **2006 年，GE Hinton, S Osindero 和 YW Teh 发表论文 “A fast learning algorithm for deep belief nets”，介绍深度信念网的快速学习算法**

* 2006 年，GE Hinton 和 RR Salakhutdinov 发表论文 “Reducing the dimensionality of data with neural networks”，使用神经网络降低数据维度

* **2006 年，Kumar Chellapilla、Sidd Puri 和 Patrice Simard 发表论文 “High Performance Convolutional Neural Networks for Document Processing”，提出加快卷积神经网络训练速度的三种方法，包括使用图像处理单元（GPU）**

* 2007 年，Y Bengio, P Lamblin, D Popovici 和 H Larochelle 发表论文 “Greedy layer-wise training of deep networks”，介绍深度网络的贪婪逐层预训练

* 2008 年，L van der Maaten 和 G Hinton 发表论文 “Visualizing data using t-SNE”，使用 t-SNE 可视化数据

* 2008 年，P Vincent, H Larochelle, Y Bengio 和 PA Manzagol 发表论文 “Extracting and composing robust features with denoising autoencoders”，介绍去噪自编码器的抽取和组合特征上的应用

* 2009 年，‎R Salakhutdinov 发表论文 “Deep Boltzmann Machines”，提出深度玻尔兹曼机

* 2009 年，Rajat Raina、Anand Madhavan 和 Andrew Y. Ng 发表论文 ”Large-scale Deep Unsupervised Learning using Graphics Processors“，使用 GPU 加速深度信念网

* 2009 年，Y Bengio, J Louradour, R Collobert 和 J Weston 发表论文 “Curriculum learning”，引入课程学习概念

* 2010 年，V Nair 和 GE Hinton 发表论文 “Rectified linear units improve restricted boltzmann machines”，介绍使用修正线性单元改进受限玻尔兹曼机

* **2010 年，GE Dahl, M Ranzato, A Mohamed 和 GE Hinton 发表论文 ”Phone Recognition with the Mean-Covariance Restricted Boltzmann Machine“，受限玻尔兹曼机用于电话识别，同年，L Deng, M Seltzer, D Yu, A Acero, A Mohamed 和 G Hinton 发表论文 ”Binary Coding of Speech Spectrograms Using a Deep Auto-encoder“，介绍使用深度自动编码器的语音频谱图的二进制编码，深度学习进入语音识别领域**

* 2010 年，D Erhan, Y Bengio, A Courville, PA Manzagol, P Vincent 和 S Bengio 发表论文 “Why does unsupervised pre-training help deep learning?”，讲述为什么无监督预训练有助于深度学习

* 2010 年，J Turian, L Ratinov 和 Y Bengio 发表论文 “Word representations: a simple and general method for semi-supervised learning”，介绍一种简单而通用的半监督学习方法

* 2010 年，P Vincent, H Larochelle, I Lajoie, Y Bengio 和 PA Manzagol 发表论文 “Stacked denoising autoencoders: Learning useful representations in a deep network with a local denoising criterion”，介绍堆叠去噪自编码器

* 2010 年，Dan Claudiu Ciresan, Ueli Meier, Luca Maria Gambardella 和 Juergen SchmidhuberDeep 发表论文 “Big Simple Neural Nets Excel on Handwritten Digit Recognition”，使用 GPU 加速多层感知机

* **2011 年，Frank Seide, Gang Li 和 Dong Yu 发表论文 “Conversational Speech Transcription Using Context-Dependent Deep Neural Networks”，使用依赖于上下文的深度神经网络进行绘画语音转录，深度学习促进语音识别发展**

* 2011 年，X Glorot, A Bordes 和 Y Bengio 发表论文 “Deep sparse rectifier neural networks”，引入深度稀疏整流神经网络

* 2011 年，JS Bergstra, R Bardenet, Y Bengio 和 B Kégl 发表论文 “Algorithms for hyper-parameter optimization”，介绍超参数优化算法

* **2012 年，A Krizhevsky, I Sutskever 和 GE Hinton 发表论文 “Imagenet classification with deep convolutional neural networks”，论文中提出的多 GPU 卷积网络 AlexNet，赢得当年 <a href="http://www.image-net.org/challenges/LSVRC/">ImageNet 大型视觉识别挑战</a>（ImageNet Large Scale Visual Recognition Competition, ILSVRC）冠军，它将<a href="https://www.zhihu.com/question/36463511">前 5 错误率</a>从 26.1% 降低到 15.3%，如此巨大的精度提升震惊了整个计算机视觉界，卷积神经网络从此威名远扬。而论文中提出的不少方法，比如数据增强和 dropout，也一直沿用至今。**

* **2012 年，Dan Cire¸san, Ueli Meier, Jonathan Masci 和 J¨urgen Schmidhuber 发表论文 “Multi-column deep neural networks for traffic sign classification”，深度学习在交通标志分类上取得了超越人类的表现**

* **2012 年，Geoffrey Hinton, Li Deng, Dong Yu, George Dahl, Abdel-rahman Mohamed, Navdeep Jaitly, Andrew Senior, Vincent Vanhoucke, Patrick Nguyen, Brian Kingsbury 和 Tara Sainath 发表论文 “Deep neural networks for acoustic modeling in speech recognition”，介绍语音识别中用于声学建模的深度神经网络，自 2010 年开始，深度学习的引入使得语音识别错误率陡然下降，有些错误率甚至降低了一半**

* 2012 年，J Bergstra 和 Y Bengio 发表论文 “Random search for hyper-parameter optimization”，介绍超参数优化的随机搜索

* 2012 年，T Tieleman 和 G Hinton 在 “Lecture 6.5-rmsprop: Divide the gradient by a running average of its recent magnitude” 引入 rmsprop 优化算法

* 2012 年，A Mohamed, G Dahl 和 G Hinton 发表论文 “Acoustic modeling using deep belief networks”，使用深度信念网作声学建模

* **2013 年，Pierre Sermanet, Koray Kavukcuoglu, Soumith Chintala 和 Yann LeCun 发表论文 “Pedestrian Detection with Unsupervised Multi-Stage Feature Learning”，Clement Farabet, Camille Couprie, Laurent Najman 和 Yann LeCun 发表论文 “Learning Hierarchical Features for Scene Labeling
”，Camille Couprie, Clément Farabet, Laurent Najman 和 Yann LeCun 发表论文 “Indoor Semantic Segmentation using depth information”，深度学习在行人检测和图像分割中取得引人注目的成功**

* 2013 年，A Graves, A Mohamed 和 G Hinton 发表论文 “Speech recognition with deep recurrent neural networks”，使用深度循环神经网络进行语音识别

* 2013 年，IJ Goodfellow, D Warde-Farley, M Mirza, A Courville 和 Y Bengio 发表论文 “Maxout networks”，介绍 Maxout 网络

* 2013 年，Y Bengio, A Courville 和 P Vincent 发表论文 “Representation learning: A review and new perspectives”，综述表示学习领域的过去与最新观点

* 2013 年，R Pascanu, T Mikolov 和 Y Bengio 发表论文 “On the difficulty of training recurrent neural networks”，介绍循环神经网络训练的难点

* 2013 年，I Sutskever, J Martens, G Dahl 和 G Hinton 发表论文 “On the importance of initialization and momentum in deep learning”，介绍深度学习中初始化和动量的重要性

* 2013 年，Adam Coates, Brody Huval, Tao Wang, David Wu, Bryan Catanzaro 和 Ng Andrew 发表论文 “Deep learning with COTS HPC systems”，介绍基于 Commodity Off-The-Shelf High Performance Computing (COTS HPC) 技术的无监督卷积网络

* 2014 年，Ian Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville 和 Yoshua Bengio 发表论文 “Generative adversarial nets”，引入生成对抗网络

* 2014 年，N Srivastava, G Hinton, A Krizhevsky, I Sutskever 和 R Salakhutdinov 发表论文 “Dropout: a simple way to prevent neural networks from overfitting”，介绍一种简单的防止神经网络过拟合的方法 Dropout

* 2014 年，J Chung, C Gulcehre, KH Cho 和 Y Bengio 发表论文 “Empirical evaluation of gated recurrent neural networks on sequence modeling”，评估门循环（递归）神经网络在序列模型的效果

* 2014 年，Kyunghyun Cho, Bart Van Merriënboer, Caglar Gulcehre, Dzmitry Bahdanau, Fethi Bougares, Holger Schwenk 和 Yoshua Bengio 发表论文 “Learning phrase representations using RNN encoder-decoder for statistical machine translation”，介绍使用 RNN 编码-解码器学习短语表示

* 2014 年，P Sermanet, D Eigen, X Zhang, M Mathieu, R Fergus 和 Y LeCun 发表论文 “OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks”，介绍使用卷积网络同时进行识别、定位和检测的 OverFeat 算法

* 2014 年，Christian Szegedy 引入全新的深度学习网络结构 GoogLeNet，在 2014 年 ImageNet 大型视觉识别挑战（ILSVRC）中夺得冠军

* **2014 年，Ilya Sutskever, Oriol Vinyals 和 Quoc V. Le 发表论文 “Sequence to Sequence Learning with Neural Networks” 介绍序列到序列的学习，同年，D Bahdanau, K Cho 和 Y Bengio 发表论文 “Neural machine translation by jointly learning to align and translate”，介绍通过联合学习对齐与翻译进行神经机器翻译。自 2010 年概率语言模型的提出使得机器翻译获得突破性进展之后，序列到序列的学习或将带来机器翻译的又一次颠覆性进步**

* **2014 年，Alex Graves, Greg Wayne 和 Ivo Danihelka 发表论文 “Neural Turing Machines”，提出了神经图灵机，它能学习读取存储单元和向存储单元写入任意内容。它可以从期望行为的样本中学习简单的程序，例如从杂乱和排好序的样本中学习对一系列数进行排序。这种自我编程技术正处于起步阶段，但原则上未来可以适用于几乎所有的任务**

* **2015 年，Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou,
Daan Wierstra 和 Martin Riedmiller 发表论文 “Playing Atari with Deep Reinforcement Learning”，首次提出深度强化学习，文章表明基于深度学习的强化学习系统能够学会玩 Atari 视频游戏。同年，Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Andrei A. Rusu, Joel Veness, Marc G. Bellemare, Alex Graves, Martin Riedmiller, Andreas K. Fidjeland, Georg Ostrovski, Stig Petersen, Charles Beattie, Amir Sadik, Ioannis Antonoglou, Helen King, Dharshan Kumaran, Daan Wierstra, Shane Legg 和 Demis Hassabis 在 Nature 上发表论文 “Human-level control through deep reinforcement learning”，文章表明深度强化学习在多种任务中可与人类匹敌。Chelsea Finn, Xin Yu Tan, Yan Duan, Trevor Darrell, Sergey Levine 和 Pieter Abbeel 发表的论文 “Learning Visual Feature Spaces for Robotic Manipulation with Deep Spatial Autoencoders” 表明深度学习显著改善了机器人强化学习的性能**

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

#### Trend

与日俱增的数据量、模型规模和精度

一些深度学习数据集：

* <a href="http://yann.lecun.com/exdb/mnist/">MNIST</a> (1998)：手写数字, 训练集 60,000 样本, 测试集 10,000 样本

* <a href="https://www.cs.toronto.edu/~kriz/cifar.html">CIFAR-10</a> (2009)：60000 张 32x32 彩色图像，图像共 10 个类别，每个类别 6000 张。训练集 50,000 图像，测试集 10,000 图像

* <a href="http://ufldl.stanford.edu/housenumbers/">SVHN</a> (2011)：谷歌街景中带门牌号码的图像，训练集 73,257 图像，测试集 26,032 图像，额外训练集 531,131 图像

* <a href="http://www.image-net.org/">ImageNet</a> (2009, 2010, 2014)：14,197,122 张图像，21,841 组索引

* <a href="https://cs.stanford.edu/people/karpathy/deepvideo/">Sports-1M</a> (2014)：1,133,158 视频地址，487 种运动标签

* <a href="http://www.statmt.org/wmt19/">WMT</a> (Workshop on Statistical Machine Translation)：统计机器翻译研讨会，已更名为 Conference on Machine Translation，但仍沿用 WMT 简称，点击链接进入官方网站可查看数据

由于更快的 CPU、通用 GPU 的出现，更快的网络连接和更好的分布式计算，模型规模随时间不断增加是深度学习历史中最重要的趋势之一。自隐藏单元引入后，人工神经网络的规模约 2.4 年扩大一倍，但在现有技术条件下，至少要到 21 世纪 50 年代，人工神经网络才能具备与人脑相同数量级的神经元。我们如今的网络比原始的脊椎动物（如青蛙）的神经系统还要小。

### 1 Applied Math and Machine Learning Basics

昭山
