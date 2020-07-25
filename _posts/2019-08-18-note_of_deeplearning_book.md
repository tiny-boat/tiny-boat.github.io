---
layout: post
title:  "深度学习读书笔记"
date:   2019-08-18 17:17:00
categories: Computer_Science Machine_Learning
permalink: /dlbook/
excerpt: '深度学习读书笔记'
---

## 1 Introduction

如果特征选取合适，一个简单的机器学习算法就很有效了。

选取合适特征可通过特征工程（feature engineering）和表示学习（representation learning）两种途径实现。文章<a href="https://zhuanlan.zhihu.com/p/41521695">知乎专栏数据说: 「特征工程」与「表示学习」</a>对此有非常通俗的解释。

自编码器（autoencoders）是表示学习中的重要技术，表示学习也是目前深度学习领域的热门研究方向。2013 年开办的国际学习表示会议（International Conference on Learning Representations，ICLR）目前已成为深度学习领域顶级会议，会议采用公开评审制度，可谓学术界一股清流。

深度学习 $\rightarrow$ 表示学习 $\rightarrow$ 机器学习 $\rightarrow$ 人工智能，后者包含前者。

下图很好的展示了过去基于规则的人工智能、基于经典机器学习的人工智能和现在基于表示学习的人工智能和基于深度学习的人工智能的联系与区别。

<center>
<img src="https://www.longzf.com/assets/img/Natural_Science/Computer_Science/Deep_Learning/dlbook/diff_ML&RL&DL.png">
<p>不同人工智能系统的区别，阴影框表示能从数据中学习的组件</p>
</center>

可以看到：基于规则的人工智能系统是人工定义好的，其他人工智能系统是从数据中学习得到的，经典机器学习使用的数据特征由人构建，而表示学习与深度学习特征则由机器构建。

总的来说就是一句话：自动化是人类始终不渝的追求。

### 1.1 History

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

* **2014 年，Kyunghyun Cho, Bart Van Merriënboer, Caglar Gulcehre, Dzmitry Bahdanau, Fethi Bougares, Holger Schwenk 和 Yoshua Bengio 发表论文 “Learning phrase representations using RNN encoder-decoder for statistical machine translation”，介绍使用 RNN 编码-解码器学习短语表示**

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

### 1.2 Trend

与日俱增的数据量、模型规模和精度

一些深度学习数据集：

* <a href="http://yann.lecun.com/exdb/mnist/">MNIST</a> (1998)：手写数字, 训练集 60,000 样本, 测试集 10,000 样本

* <a href="https://www.cs.toronto.edu/~kriz/cifar.html">CIFAR-10</a> (2009)：60000 张 32x32 彩色图像，图像共 10 个类别，每个类别 6000 张。训练集 50,000 图像，测试集 10,000 图像

* <a href="http://ufldl.stanford.edu/housenumbers/">SVHN</a> (2011)：谷歌街景中带门牌号码的图像，训练集 73,257 图像，测试集 26,032 图像，额外训练集 531,131 图像

* <a href="http://www.image-net.org/">ImageNet</a> (2009, 2010, 2014)：14,197,122 张图像，21,841 组索引

* <a href="https://cs.stanford.edu/people/karpathy/deepvideo/">Sports-1M</a> (2014)：1,133,158 视频地址，487 种运动标签

* <a href="http://www.statmt.org/wmt19/">WMT</a> (Workshop on Statistical Machine Translation)：统计机器翻译研讨会，已更名为 Conference on Machine Translation，但仍沿用 WMT 简称，点击链接进入官方网站可查看数据

由于更快的 CPU、通用 GPU 的出现，更快的网络连接和更好的分布式计算，模型规模随时间不断增加是深度学习历史中最重要的趋势之一。自隐藏单元引入后，人工神经网络的规模约 2.4 年扩大一倍，但在现有技术条件下，至少要到 21 世纪 50 年代，人工神经网络才能具备与人脑相同数量级的神经元。我们如今的网络比原始的脊椎动物（如青蛙）的神经系统还要小。

## 2 Applied Math and Machine Learning Basics

### 2.1 linear algerbra

矩阵对应元素相乘的运算称为**元素对应乘积**（element-wise product）或者 **Hadamard 乘积**（Hadamard product），记作 $\boldsymbol{A}\odot \boldsymbol{B}$。  

$\boldsymbol{Ax}=\boldsymbol{b}$  当且仅当 $\boldsymbol{b}$ 位于 $\boldsymbol{A}$ 的列向量的生成子空间（列空间/值域），当且仅当 $\boldsymbol{A}$ 的列向量的生成子空间维数等于 $\left(\boldsymbol{A},\boldsymbol{b}\right)$  的列向量的生成子空间维数，当维数小于未知量个数时，有无穷多个解，当维数等于未知量个数时，有唯一解。由于未知量就是 $\boldsymbol{A}$ 的列数，因此当 $\boldsymbol{A}$ 的行数小于列数（方程个数小于未知量个数）时，$\boldsymbol{Ax}=\boldsymbol{b}$ 要么无解，要么有无穷多个解，而不可能有唯一解。

在某些机器学习应用中，由于区分恰好为 0 的元素和非常接近 0 的元素十分重要，欧式范数好于计算更方便的平方欧式范数，不过此时我们更多使用 $L_1$ 范数，$L_1$ 范数也经常作为表示非零元素数目的替代函数。

在深度学习中，矩阵的范数通常使用 Frobenius 范数，类似于向量的欧式范数。

特殊类型的矩阵中，**对角矩阵**、**对称矩阵**、**正交矩阵**受到关注。其中对角矩阵不一定是方阵，它受到关注是因为其乘法计算的高效、以及方阵型对角矩阵逆矩阵计算的高效，若我们想对向量 $\boldsymbol{x}$ 中的每个元素 $x_i$ 放大 $v_i$ 倍，只需要用一个第 $i$ 个对角元为 $v_i$ 的对角矩阵左乘该向量即可。对称矩阵受到关注是因为某些不依赖参数顺序的双参数函数生成元素时，对称矩阵经常出现，例如距离度量矩阵。正交矩阵受到关注是因为其求逆代价小，其逆就是其转置，要特别注意的是：正交矩阵指的是行向量与列向量均标准正交的矩阵，对于行向量与列向量均正交但不是标准正交的矩阵，并没有专门的术语。

**特征分解**（谱分解）与**奇异值分解**是两个重要的矩阵分解。特征分解通常针对实对称矩阵而言，实对称矩阵 $\boldsymbol{A}$ 的最大（小）特征值为二次型函数 $f\left(\boldsymbol{x}\right)=\boldsymbol{x}^{\rm T}\boldsymbol{A}\boldsymbol{x},\ \|\boldsymbol{x}\|_2=1$ 的最大（小）值，对应的特征向量为最大（小）值点。奇异值分解可看作特征分解的扩展，**任何实矩阵都有奇异值分解**：

$$\boldsymbol{A}_{m\times n} = \boldsymbol{U}_{m\times m}\boldsymbol{D}_{m\times n}\boldsymbol{V}_{n\times n}$$

其中 $\boldsymbol{U}$ 是由 $\boldsymbol{A}\boldsymbol{A}^{\rm T}$ 的特征向量（左奇异向量）构成的正交矩阵，$\boldsymbol{V}$ 是由 $\boldsymbol{A}^{\rm T}\boldsymbol{A}$ 的特征向量（右奇异向量）构成的正交矩阵，$\boldsymbol{D}$ 是对角矩阵，其对角元（奇异值）是 $\boldsymbol{A}\boldsymbol{A}^{\rm T}$ 的非零特征值，也是 $\boldsymbol{A}^{\rm T}\boldsymbol{A}$ 的非零特征值。

矩阵的奇异值分解使一般矩阵的求逆运算变得简单，这为非方阵线性方程组 $\boldsymbol{A}_{m\times n} \boldsymbol{x}= \boldsymbol{b}$ 的求解带来了便利。矩阵 $\boldsymbol{A}$ 的广义逆定义为 $\boldsymbol{A}\boldsymbol{X}\boldsymbol{A} = \boldsymbol{A}$  的解，但这个解是不唯一的，为解决不唯一性引入了所谓 **Moore-Penrose 广义逆**，它定义为方程组

$$\left\{\begin{matrix} \boldsymbol{AXA} \, = \boldsymbol{A} \ \ \\ \boldsymbol{XAX} = \boldsymbol{X} \ \\ \left(\boldsymbol{AX} \right)^{\rm T} = \boldsymbol{AX} \\ \left(\boldsymbol{XA} \right)^{\rm T} = \boldsymbol{XA} \end{matrix}\right.$$

的解，这个解 $\boldsymbol{A}^{+} = \lim_{\alpha \rightarrow 0}\left(\boldsymbol{A}^{\rm T}\boldsymbol{A}+\alpha\boldsymbol{I} \right)^{-1}\boldsymbol{A}^{\rm T}$。有了矩阵的奇异值分解，Moore-Penrose 广义逆的计算变得简单，$\boldsymbol{A}^{+} = \boldsymbol{V}\boldsymbol{D}^{+}\boldsymbol{U}^{\rm T}$，其中 $\boldsymbol{D}^{+}$ 为 $\boldsymbol{D}$ 的非零元素取倒数之后再转置得到的。这样矩阵 Moore-Penrose 广义逆的计算基本等价于对矩阵作奇异值分解。

当 $\boldsymbol{A}$ 的行数小于列数且 $\boldsymbol{Ax}=\boldsymbol{b}$  有解时，$\boldsymbol{x} = \boldsymbol{A}^{+}\boldsymbol{b}$ 是所有解中欧式范数最小的一个；当 $\boldsymbol{A}$ 的行数大于列数且 $\boldsymbol{Ax}=\boldsymbol{b}$  无解时，$\boldsymbol{x} = \boldsymbol{A}^{+}\boldsymbol{b}$ 是函数 $\|\boldsymbol{Ax}-\boldsymbol{b} \|_2$ 的最小值点。（**其他情况书中没有说明，待研究或查阅**）

矩阵的迹为矩阵 Frobenius 范数的计算提供了方便，$\|\boldsymbol{A}\|_{F}=\sqrt{ {\rm Tr} \left(\boldsymbol{A}\boldsymbol{A}^{\rm T}\right)}$. 迹运算有如下几点常用性质：

* ${\rm Tr} \left(\boldsymbol{A}\right)={\rm Tr} \left(\boldsymbol{A}^{\rm T}\right)$
* ${\rm Tr} \left(\prod_{i=1}^{n}\boldsymbol{F}^{\left(i \right)} \right) = {\rm Tr} \left(\boldsymbol{F}^{\left(n \right)} \prod_{i=1}^{n-1}\boldsymbol{F}^{\left(i \right)} \right)$
* $a = {\rm Tr} \left(a \right)$

实方阵 $\boldsymbol{A}_{n\times n}$ 的行列式 ${\rm det} \left(\boldsymbol{A} \right)$ 将 $\boldsymbol{A}$ 映射为一个实数，这个实数就是 $\boldsymbol{A}$ 的特征值之积，所以 ${\rm det} \left(\boldsymbol{A} \right)$ 的几何意义就是 $n$ 维超球体经线性变换 $\boldsymbol{A}$ 后被拉伸的倍数（或被压缩的倍数的倒数），${\rm det} \left(\boldsymbol{A} \right) = 0$ 时，$n$ 维超球体经线性变换 $\boldsymbol{A}$ 后变为了低维空间的超球体。

### 2.2 probability and information theory

概率论提供了在不确定性存在的情况下进行推理的方法，信息论提供了量化信息不确定性的手段。

独立性比零协方差的要求更强，它不仅排除了线性关系，还排除了非线性关系。

机器学习中常用概率分布有：伯努利分布（Bernoulli distribution）、多努利分布 / 范畴分布（multinoulli distribution / categorical distribution）、高斯分布 / 正态分布、指数分布、拉普拉斯分布、经验分布、高斯混合分布。

正如伯努利分布是二项分布的特例一样，多努利分布是多项分布的特例。**多项分布**的**概率质量函数** / 概率分布律（probability mass function）为

$$P\left(X_1=x_1,\ X_2=x_2,\ \cdots,\ X_k=x_k \right) = \frac{n!}{x_1!x_2!\cdots x_k!}\prod_{i=1}^k p_i^{x_i}\\ {\rm where}\ \sum_{i=1}^k p_i = 1,\ 0\leq p_i\leq 1; \ \sum_{i=1}^k x_i = n,\ \ x_i \in \mathbb{Z}^+$$

当 $n=1$ 时，多项分布退化为多努利分布。

**正态分布**常用的原因有二：一是根据中心极限定理，独立随机变量和近似服从正态分布，而现实中许多随机变量可以看作多个独立随机变量的组合；二是在具有相同方差的概率分布中，正态分布在实数上具有最大的不确定性。

为避免求多维正态分布概率密度时对协方差矩阵求逆，我们通常采用精度矩阵 $\boldsymbol{\beta}$ 替代 $\boldsymbol{\Sigma}^{-1}$，将多维正态分布概率密度表示为

$$\mathcal{N} \left(\boldsymbol{x};\boldsymbol{\mu},\boldsymbol{\beta}^{-1} \right) = \sqrt{\frac{det\left(\boldsymbol{\beta} \right)}{\left(2\pi \right)^n}}\exp \left(-\frac{1}{2}\left(\boldsymbol{x}-\boldsymbol{\boldsymbol{\mu}} \right)^T\boldsymbol{\beta}\left(\boldsymbol{x}-\boldsymbol{\boldsymbol{\mu}} \right) \right)$$

如果我们假设各随机变量相互独立，则协方差矩阵 $\boldsymbol{\beta}^{-1}$ 是个对角矩阵；进一步，如果协方差矩阵是单位阵的标量倍，则称随机变量服从**各向同性**（isotropic）高斯分布

**拉普拉斯分布**可视作指数分布在负半区域的拓展，其概率密度函数为

$${\rm Laplace} \left(x;\mu,\gamma \right) = \frac{1}{2\gamma} \exp \left(-\frac{|x-\mu|}{\gamma} \right)$$

连续型数据的**经验分布**是 Dirac 分布的组合，其概率密度函数为

$$\hat{p} \left(\boldsymbol{x} \right) = \frac{1}{m} \sum_{i=1}^{m}\delta(\boldsymbol{x}-\boldsymbol{x}^{\left(i\right)})$$

其中 $\delta \left(\boldsymbol{x} \right)$ 处零点外均为 0，但积分为 1，它是一种广义函数，它可视作一个函数序列的极限，这个函数序列把除 0 以外的所有点的概率密度越变越小。离散型数据的经验分布为多努利分布/范畴分布。

**高斯混合分布**，顾名思义，就是多个高斯分布的组合，其概率密度函数为

$$GMM(\boldsymbol{x}) = \sum_{i=1}^k p_i \mathcal{N}\left(\boldsymbol{x};\boldsymbol{\mu}^\left(i \right),\boldsymbol{\Sigma}^\left(i \right)\right)$$ 

高斯混合分布是概率密度的万能近似器 (universal approximator)，任何平滑的概率密度都可以用具有足够多组件（$k$ 足够大）的高斯混合模型以任意精度来逼近。

**logistic sigmoid** 函数和 softplus 函数在处理概率分布时经常出现。logistic sigmoid 函数

$$\sigma(x) = \frac{1}{1+\exp \left(-x\right)} = \frac{\exp \left(x \right)}{1 + \exp \left(x \right)}$$

将 $\left(-\infty, +\infty \right)$ 映射到 $\left(0,1 \right)$，可用来产生伯努利分布的参数，sigmoid 函数的求导非常简单

$$\frac{d}{dx}\sigma\left(x\right)=\sigma\left(x\right)\left(1-\sigma\left(x\right)\right)=\sigma\left(x\right)\sigma\left(-x\right)$$

**softplus 函数**

$$\zeta(x) = \log \left(1+\exp \left(x \right) \right)$$

将 $\left(-\infty, +\infty \right)$ 映射到 $\left(0,+\infty \right)$，可用来产生正态分布的 $\sigma$ 参数，它是正部函数 $$x^{+} = \max \left\{0, x \right\}$$ 的平滑版本，它的导数就是 sigmoid 函数。如同 $$x^+ - x^- = \max\left\{0,x\right\} - \max\left\{0,-x\right\} = x$$ 一样，$\zeta(x) - \zeta(-x) = x$

信息论的基本思想是：随机变量的不确定性越大，其包含的信息越多。服从分布 $P$ 的随机变量 $X$ 的微分**熵** / 香农**熵**（differential entropy / Shannon entropy）定义为：

$$H\left(P\right) = E_{X\sim P}[-\log_b P\left(X \right)] = - \int p\left(x \right)\log_b \left(p\left(x \right) \right)dx$$

$$H\left(P \right) = E_{X\sim P}[-\log_b P\left(X \right)] = - \sum_x p\left(x \right)\log_b \left(p\left(x \right) \right)$$

它是随机变量不确定性的量化，也是随机变量所含信息多少的量化。如果 $b=e$，$H\left(X \right)$ 的单位为奈特（nats），它代表平均意义下随机变量包含的信息量。如果 $b=2$，$H\left(X \right)$ 的单位为比特（bits），它不仅代表平均意义下随机变量包含的信息量，还代表平均意义下编码随机变量所需的最少二进制位数，或者说该随机变量最优编码方式对应的平均二进制位数。比特是奈特的 $\log_2 e\approx 1.44$ 倍。

服从分布 $P$ 的随机变量 $X$ 的**交叉熵**（cross-entropy）定义为：

$$H\left(P,Q \right) = E_{X\sim P}[-\log_b Q\left(X \right)] = - \int p\left(x \right)\log_b \left(q\left(x \right) \right)dx$$

$$H\left(P,Q \right) = E_{X\sim P}[-\log_b Q\left(X \right)] = - \sum_x p\left(x \right)\log_b \left(q\left(x \right) \right)$$

它代表以其他分布 $Q$ 近似分布 $P$ 需要的信息量，或者说以其他分布 $Q$ 对应的最优编码方式编码服从分布 $P$ 的随机变量时所需要的平均二进制位数。

交叉熵相较于熵增加的部分称为 **KL 散度 / 相对熵**（Kullback-Leibler divergence / relative entropy），即

$$D_{KL} \left(P||Q \right) = H\left(P,Q \right) - H\left(P \right)$$ 

它代表以其他分布 $Q$ 近似分布 $P$ 时需要增加的额外信息量，或者说以其他分布 $Q$ 近似分布 $P$ 时增加的不确定性，它衡量了分布 $Q$ 对分布 $P$ 的近似精度，量化了分布差异。但需要特别指出的是，它并不代表两个分布之间的距离，因为 

$$D_{KL} \left(P||Q \right) \neq D_{KL} \left(Q||P \right)$$

建模时，**最小化 KL 散度等价于最小化交叉熵，因此交叉熵常作为深度学习中的损失函数**，在熵的计算中，约定 $0\log0=0$。**最大似然估计等价于最小化 KL 散度**（用假设的数据真实分布近似数据经验分布时需要增加的额外信息量），或者换句话说，**最大似然估计最小化数据经验分布与假设的数据真实分布之间的差异**。

以 $Logitstic$ 二分类模型为例，它假设数据给定 $\boldsymbol{x}$ 后 $y$ 的真实条件分布 $Q$ 是以 $$\frac{\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)}{1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)}$$ 为参数的伯努利分布。此时服从数据经验条件分布 $P$ （多努利分布 / 范畴分布）的随机变量 $Y|\boldsymbol{X}$ 的交叉墒为（$n$ 为样本量，该交叉墒也被称为二值交叉墒 binary cross entropy）

$$H\left(P,Q \right) = E_{Y|\boldsymbol{X}\sim P}[-\log_e Q\left(Y|\boldsymbol{X} \right)] = - \sum_{y|\boldsymbol{x}} p\left(y|\boldsymbol{x} \right)\log_e \left(q\left(y|\boldsymbol{x} \right) \right)\\=-\sum_{y|\boldsymbol{x}}^n\left[yp\left(1|\boldsymbol{x} \right)\log_e \left(q\left(1|\boldsymbol{x} \right) \right)+\left(1-y\right)p\left(0|\boldsymbol{x} \right)\log_e \left(q\left(0|\boldsymbol{x} \right) \right)\right]\\=-\sum_{y|\boldsymbol{x}}^n\left[\frac{y}{n}\log_e \left(\frac{\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)}{1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)} \right)+\frac{1-y}{n}\log_e \left(\frac{1}{1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)} \right)\right]\\=\sum_{y|\boldsymbol{x}}^n\left[\frac{1}{n}\log_e\left(1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)\right)-\frac{y}{n}\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)\right]\\=\frac{1}{n}\sum_{y|\boldsymbol{x}}^n\left[\log_e\left(1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)\right)-y\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)\right]$$

而数据的对数似然为

$$\log L\left(\boldsymbol{\theta};y|\boldsymbol{x}\right) = \sum_{y|\boldsymbol{x}}^n \log_e \left(q\left(y|\boldsymbol{x} \right) \right)\\=\sum_{y|\boldsymbol{x}}^n\left[y\log_e \left(q\left(1|\boldsymbol{x} \right) \right)+\left(1-y\right)\log_e \left(q\left(0|\boldsymbol{x} \right) \right)\right]\\=\sum_{y|\boldsymbol{x}}^n\left[y\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)-\log_e\left(1+\exp\left(\boldsymbol{\theta}\cdot\boldsymbol{x}\right)\right)\right]=-nH\left(P,Q \right)$$

通过这个实例，我们可以清晰地看到：最大似然估计等价于最小化交叉墒，也等价于最小化 KL 散度/相对墒。实际上，从交叉墒的定义，我们也能够看到，交叉墒与对数似然的等价性。

**结构化概率模型** / **图模型**为概率分布提供了全新的描述方式，图的引入，使公式化的概率分布变得形象、直观。图有有向图和无向图之分，它们均能表示概率分布，并且任何概率分布均可用这两种方式进行描述。

### 2.3 numerical computing

实现深度学习算法时，底层库的开发者要牢记数值问题，确保算法是数值稳定的（**避免上溢和下溢问题**），一个典型的例子是 softmax 函数

$${\rm softmax}\left(\boldsymbol{x}\right)_i = \frac{\exp(x_i)}{\sum_{j=1}^n \exp\left({x_i}\right)}$$

的计算，应采用 $\boldsymbol{z} = \boldsymbol{x} - \max_i x_i$ 替代 $\boldsymbol{x}$（这种替代不会改变函数值），避免分母的上溢和下溢。

**病态矩阵**也应引起底层算法开发者的重视，所谓病态矩阵指的是那些条件数（矩阵最大特征值和最小特征值的模之比）特别大的非奇异矩阵。对线性方程组而言，如果其系数矩阵为病态矩阵，那么对于系数矩阵和系数向量的微小扰动会使线性方程组的解发生巨大变化。同样地，以病态矩阵对向量做线性变换，向量的微小扰动会使线性变换的结果发生巨大变化。

**函数的一阶方向导数刻画了函数在任意方向上的变化率/斜率信息**，如果方向是 x (y) 轴方向，一阶方向导数即为对 x (y) 的一阶偏导，理解了这一点，我们就很容易理解为什么函数的一阶方向导数等于函数的梯度向量与方向向量的内积。

同理，**函数的二阶方向导数刻画了函数在任意方向上的曲率信息**，如果方向是 x (y) 轴方向，二阶方向导数即为对 x (y) 的二阶偏导，理解了这一点，我们就很容易理解为什么函数的二阶方向导数等于二次型矩阵为海森矩阵的方向向量的二次型。函数在海森矩阵特征向量方向上的曲率即为对应的特征值，函数在任意方向上的曲率就是这些特征值的加权平均。

**函数的二阶方向导数可用于判断函数的驻点/临界点/平稳点（梯度为 0 向量的点）是否为极值点或鞍点**。从几何直观上，我们很容易理解，当函数在驻点的任意方向的曲率均为正（负）时，这个驻点是函数的极小（大）值点，当函数在驻点的某些方向的曲率为正，在其他方向上为负时，这个驻点是函数的鞍点。因此当海森矩阵正定（负定）时，驻点为极小（大）值点，而当海森矩阵不定（既不半正定，也不半负定）时，驻点为鞍点。当海森矩阵半正（负）定且非正（负）定时，无法判断驻点是极小（大）值点、鞍点还是平坦区域的一部分。

**函数的二阶方向导数还可用于确定梯度下降的最优搜索步长**（前提是函数能用二次函数很好地近似），这个步长是梯度的平方欧式范数与函数在梯度方向的曲率之比。

**当函数的二阶方向导数变化范围较大**（或者说函数各方向曲率变化范围较大，或者说海森矩阵的条件数较大，或者说海森矩阵是病态矩阵）**时，梯度下降的效率较低**，因为它选择的方向不是长期来看函数的最优下降方向，而是当前的最优下降方向（下降方向指一阶方向导数为负的方向，但它是在搜索步长趋于零时的结果，它只代表在当前这个点很小很小的邻域范围内，沿着该方向函数下降的程度比其他方向大）。

**使用牛顿法容易陷入鞍点**（牛顿法一旦进入鞍点，迭代就会停止），但梯度下降通常没有这个问题。此外，牛顿法还存在海森矩阵不正定导致搜索方向为非下降方向的问题，为解决这个问题，人们提出了不少修正牛顿法。一种常见方法是将非正定矩阵加一个常数倍单位矩阵，另一种常见方法是更改搜索方向为负曲率方向。

由于深度学习训练的目标函数通常是一个非常复杂的非凸函数，而优化的主要方法是为有限函数族设计的，因此深度学习算法往往缺乏理论保证。但限制函数或其导数满足 Lipschitz 连续，可以获得一些保证，深度学习中的许多优化问题经过相对小的修改后就能变得 Lipschitz 连续。

凸优化算法适用于凸函数（海森矩阵处处半正定的函数），这些函数没有鞍点并且局部极小值点即为全局最小值点。然而深度学习中的大多数问题都难以表示成凸优化的形式。凸优化只用作深度学习算法的子程序。凸优化中的分析思路对证明深度学习算法的收敛性非常有用，但通常来说，**深度学习背景下凸优化的重要性大大降低**。



## 3 Machine Learning Basic

欠拟合指模型无法在训练集获得足够低的误差，过拟合指模型的训练误差和测试误相差过大。

模型的容量（capacity）指的是其拟合各种函数的能力，容量低的模型可能欠拟合，容量高的模型可能过拟合，从某种程度上说，参数数目越多、特征数目越多，模型容量越大。由于额外的限制，如优化算法的不完美，模型的表示容量（representation capacity）可能大于其有效容量（effective capacity）。

VC 维是统计学习理论中度量二分类模型容量的工具，它定义为分类器能够将两类不同样本彻底分开时的最大样本量，例如线性分类器最多将 3 个二分类样本彻底分开，因此线性分类器的 VC 维为 3。关于 VC 维更学术化的定义如下：

> 对一个指示函数集，如果存在 H 个样本能够被函数集中的函数按所有可能的 2 的 H 次方种形式分开，则称函数集能够把 H 个样本打散；函数集的 VC 维就是它能打散的最大样本数目 H。若对任意数目的样本都有函数能将它们打散，则函数集的 VC 维是无穷大，[有界](https://baike.baidu.com/item/有界)实函数的VC维可以通过用一定的阈值将它转化成[指示函数](https://baike.baidu.com/item/指示函数)来定义

统计学习理论中最重要的结论是：泛化误差与训练误差之间差异的上界与训练样本容量成反比，与模型容量成正比。这一上界为机器学习算法解决问题的有效性提供了理论保证，也为不同算法优劣的比较提供了参考。但其很少用于深度学习中，这是因为：一方面边界太松；另一方面确定深度学习模型的有效容量十分困难。这一结论的严格数学表述如下（摘自李航所著《统计学习方法》）：

> 对二分类问题，当假设空间是有限个函数的集合 $$\mathcal{F}=\left\{f_1,f_2,\cdots,f_d \right\}$$ 时，对任意函数 $f \in \mathcal{F}$，泛化误差 $R\left(f\right)$ 至少以概率 $1-\delta$ 满足
>
> $$R\left(f\right) = \hat{R}\left(f\right) + \varepsilon\left(d, N, \delta\right)$$
>
> 其中 $\hat{R}\left(f\right)$ 为训练误差，$\varepsilon\left(d, N, \delta\right) = \sqrt{\frac{1}{2N}\left(\log d + \log \frac{1}{\delta}\right)}$

最近邻回归是一种实用的非参数模型，相比于参数模型有限且固定的参数个数，非参数模型要自由很多，最近邻回归的复杂度与训练样本的规模有关。

从预先知道的真实分布预测而出现的误差称为贝叶斯误差（Bayes error），真实分布预测也会出现误差是因为分布中仍然包含一些噪声。

当模型容量小于最优容量（欠拟合与过拟合的临界点）时，训练误差与训练样本量成正比，因为越大的数据集越难拟合。当训练样本量趋于无穷大时，任何固定容量的模型的训练误差都至少增至贝叶斯误差。

机器学习研究的目标不是找一个通用学习算法或是绝对最好的学习算法，而是理解什么样的分布与人工智能获取经验的 “真实世界” 相关，以及什么样的学习算法在我们关注的数据生成分布（data generating distribution）上效果最好。

表示对函数的偏好是比增减假设空间成员函数更一般地控制模型容量的方法，这种或隐式或显式的方法统称为正则化，正则化修改学习算法，使泛化误差降低。正则化是机器学习领域的中心问题之一，其重要性，只有优化能与之比肩。

没有免费午餐定理表明没有最优的学习算法，特别是没有最优的正则化形式。因此，我们必须挑选一个非常适合于我们所要解决的任务的正则形式。深度学习中普遍的理念是大量任务（例如所有人能做的智能任务）也许都可以使用非常通用的正则化形式来有效解决。

超参数是那些不由训练算法训练的参数，它们用来控制算法行为。如神经网络层数。每层单元数、激活函数、损失函数、正则项系数、优化方法、学习率、训练轮数、批样本量等等。验证集（validation set / development set）是从训练集中划分出来的用来估计泛化误差、更新超参数的数据集。

因为最大似然估计具有的一致性和有效性，最大似然估计通常是机器学习中的首选估计方法。

> **极大似然估计具有很好的大样本性质**，只要总体分布为 C-R 正则分布族，极大似然估计就渐近服从于均值为参数真值 $\theta$，方差为 C-R 下界 $\frac{1}{nI\left(\theta \right)}$ 的正态分布，其中费舍尔信息量
>
> $$I\left(\theta \right )=E_\theta\left[\left(\frac{\partial \ln f\left(x;\theta \right )}{\partial x} \right )^2 \right ]$$
>
> 此外，**极大似然估计具有不变性**，即极大似然估计的函数是其对应参数的同一函数的极大似然估计，这大大简化了对复杂函数极大似然估计的求解。

贝叶斯方法与最大似然方法有两点区别：一是预测时贝叶斯方法使用参数的全分布，而最大似然使用参数的点估计；二是贝叶斯方法受到参数先验分布的影响。当训练数据有限时，贝叶斯方法由于引入了更多的信息，其泛化性能更好，但当训练数据量很大时，会有很大的计算代价。

最大后验估计可视作一种正则化手段，许多正则化估计方法，可被解释为最大后验估计。这是因为

$$\hat{\theta}_{MAP} = \arg \max_{\theta} p \left(\boldsymbol{\theta}\ |\ \boldsymbol{x}\right) = \arg \max_{\theta} \log p \left(\boldsymbol{x}\ |\ \boldsymbol{\theta}\right) + \log p\left(\boldsymbol{\theta} \right)$$

其中第一部分对应着最大似然估计，第二部分的先验分布对数就是一种惩罚（这一部分一定小于 0）。如果线性回归模型的参数 $\boldsymbol{\omega}$ 的先验分布为 $\mathcal{N}\left(\boldsymbol{\omega};0,\frac{1}{\lambda}I^2\right)$，那么 $\boldsymbol{\omega}$ 的最大后验估计就对应着带权重惩罚项 $\lambda\boldsymbol{\omega}^T\boldsymbol{\omega}$ 的线性回归模型。当然并不是所有的正则化方法都对应着最大后验估计，因为有些正则化项可能不是一个概率分布的对数，有些正则化项依赖于数据。

我们可以将常用的监督学习算法分成两类，一类是概率监督学习算法（线性回归与广义线性回归、最大墒模型、贝叶斯分类器、高斯混合模型、隐马尔可夫模型、条件随机场），另一类是非概率监督学习算法（k 近邻、决策树与提升方法、感知机与支持向量机）

