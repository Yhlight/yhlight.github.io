# 严格说明
1. **在编程中，严格区分中英文字符，请自行安装一个英语输入法**  
2. **如果你有学习过其他语言，请不要吝啬你的学识，进行一定程度的迁移运用**  
3. **此篇笔记不会记录计算机基础知识**  
4. **同步资料请移步https://github.com/xftxyz2001/atguigu-java**  

# IDEA常用快捷键
1. **CTRL+ALT+L  文件格式化（自动对齐等功能）**
2. **CTRL+/  行注释**
3. **SHIFT+F10  编译**

## 常见的DOS命令
WIN+R唤起运行窗口，输入CMD，打开CMD窗口  

如果需要使用管理员权限，需要在运行窗口输入cmd时，按下CTRL+SHIFT+ENTER，打开拥有管理员权限的CMD窗口  

### DOS命令  
#### 进入与回退
1. 切换盘符  
驱动盘符号 + :  
将路径切换到指定的驱动盘  
例如：E:  
注意，只有访问当前盘中的路径才能够使用\yhlight这种无盘符的路径，否则需要写出盘符  

2. 列出文件  
dir + 目录  
列出当前目录下的文件以及文件夹  
例如：dir \yhlight  

3. 进入某目录  
cd + 目录  
例如：cd \yhlight  

4. 进入多级目录  
cd + 多级目录  
例如：cd \yhlight\yh-phobos-master  

5. 回退上一个目录  
cd..  
例如：  
cd \yhlight\yh-phobos-master  
cd..  
目录更新为->\yhlight  

6. 回退至盘符目录  
cd + /或\  
例如：cd / 或cd \  

7. 跨盘符访问  
cd + /d + 其他盘符目录  
例如：cd /d E:\yhlight\yh-phobos-master  

#### 创建与删除
1. 创建  
md + 文件目录名  
md + 某文件  
例如：md \Users\yingh\yinghuolight  

2. 删除  
rd + 文件目录名  
rd + 某文件  
例如：rd xxx.txt  

#### 其他操作
1. 清屏  
cls  

2. 退出命令行窗口  
exit  

3. 调用前后使用过的指令  
↑ ↓（键盘按键）  

4. 删除  
del + 文件目录名  
del + 某文件  

5. 删除同后缀名文件  
del + *.后缀  
例如：del *.txt  
***
## JAVA开发环境的搭建
### JKD的安装（自行选版本）
https://www.oracle.com/cn/java/technologies/downloads/  
进入这个链接后，你可以选择安装高版本JAVA，也可以选择安装JAVA 8  
需要下载的是Windows版本
[![pA3VG0U.png](https://s21.ax1x.com/2024/09/30/pA3VG0U.png)](https://imgse.com/i/pA3VG0U)  

如果你想要安装JAVA 8，请继续往下浏览页面
[![pA3V8mT.png](https://s21.ax1x.com/2024/09/30/pA3V8mT.png)](https://imgse.com/i/pA3V8mT)  

### 路径相关的配置（必要）
JAVA可以安装在任意一个盘，只不过更推荐安装在系统盘，安装在系统盘可以避免很多问题，没必要为了担心一些微不足道的问题而安装在其他盘，具体自行选择  

### JAVA目录的简单认识
**bin**  
这个文件夹放着开发工具，这也是为什么编译与运行java文件要放进bin文件  

**include**  
包含一些库文件  

**jre（java8）**  
这个文件夹JAVA8会有，JAVA8之后的版本没有这个文件夹，高版本那边jre被打散在相关的目录中，jre这个文件夹里面放着运行时的环境文件  

**legal**  
放着一些法律上的条文  

**lib**  
里面放着java包，里面集成了很多指令  

**conf（高版本）**  
存放一些配置文件，这些会影响java的运行  

**jmods（高版本）**  
用于存放JMOD文件。这些JMOD文件是Java模块的打包格式，包含了模块的类、资源、配置文件以及其他与模块相关的信息。  

**源代码**  
目录下有一个名叫src的压缩包，里面放着java的源代码，找不到不用找，反正你用不上  

***

### 配置Path环境变量
**什么是Path环境变量?**  
Path环境变量是window操作系统执行命令时，所要搜寻的路径  

**为什么要配置Path环境变量?**  
希望在命令行使用Java工具时，在任意目录之下都能找到工具包的目录  
好比如说，如果没有设置Path环境变量，编译java文件需要在bin文件目录下进行  
例如  
cd C:\Program Files\Java\jdk-22\bin  
javac test.java  
java test  
需要这样才可以正常运行  
这样对开发很麻烦，肯定是不希望每次都要把java文件丢进bin目录之中再进行运行  

#### 如何配置Path环境变量?
右键此电脑，属性，高级系统设置，环境变量  
此电脑可以在打开任意一个目录后，在左侧的总览目录中找到  

在系统变量中，新建一个变量，名叫JAVA_HOME
变量的值为**Java目录的路径**  
例如  
变量名 JAVA_HOME  
值 C:\Program Files\Java\jdk-22  

然后在系统变量中，你可以找到Path这一栏，点击进行编辑，新建，然后粘贴这一句  

>%JAVA_HOME%\bin  

之后一路返回并保存确认就好了  

这里面其实有一个措施，可以自行选择是否弄，Path环境变量是从上往下进行读取的，为了避免其他与java相关的东西把它挤下去，你可以将它上移到最上边  

***

## Java学习篇
### 你的第一个程序-打印HelloWorld
Java文件是如何编写和运行的？  
首先，你需要通过记事本等文件软件来写Java代码，这里推荐使用[visula studio code](https://code.visualstudio.com/)  

你只需要右键新建一个txt，然后更改为java后缀的文件，再进行编写就可以了，注意，要打开显示扩展名，否则无法进行后缀的更改  

然后使用javac命令将java文件进行编译，生成class（字节码文件）文件  

接着使用java命令运行生成的class文件  

### HelloWorld的打印
将txt命名为HelloWorld.java，注意HelloWorld只是一个名字，可以任意更换，但是需要和代码之中的 **类（class）** 的名字相同，具体往下看  
```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}
```
这就是打印HelloWorld需要的代码，注意，Java代码是严格区分**大小写**的，class后面接的HelloWorld就是**类**的名字，你可以随意修改，但是最好是和文件名字相同  

举个例子  
文件名字 HelloWorld.java  
类的名字 HelloChina  

javac HelloWorld.java  
生成的class是HelloChina.class  

java HelloChina  
运行需要输入类的名字（要完全相同），而不是文件名字  
明显，这繁琐许多，同时，不仅仅是这些问题，这里进行相关的一些解析  
1. public类一致性需求  
你可以看到，上面的代码是class + 类名，然而，在Java中，还会使用public class + 类名  
在Java中规定，public class 的**类名**要和**文件名**完全相同  

2. 组织性，IDE支持，避免冲突等的需求  

说完这些，现在说一下怎么运行程序  
WIN+R唤起运行窗口，输入CMD，打开CMD窗口  

如果需要使用管理员权限，需要在运行窗口输入cmd时，按下CTRL+SHIFT+ENTER，打开拥有管理员权限的CMD窗口  

检查一下你java文件所在的位置，这里需要你有一些DOS命令的知识，文件的开头就是，这里用一个简单的例子来说明  

d:  
cd D:\yhlight  
javac HelloWorld.java  
java HelloWorld  

打印一个HelloWorld你已经学会了，接下来讨论一下一些相关问题  
1. 为什么HelloWorld需要用双引号？  
这是字符串，字符串需要用双引号  
2. 可不可以打印中文  
当然可以！不过你要检查一下你保存的那个文件的字符编码，cmd使用的字符编码是ASNI，想要cmd正常显示中文，你需要更改你的java文件的字符编码为ASNI，请不要自作聪明，**高版本**是不需要设置就可以输出中文了的，只有在**不行时才需要这么做**  

你可以通过以下方法进行更改  
1. 记事本另存为时，更改文件的字符编码  
2. 设置cmd字符编码  
`chcp 65001`  
1. 运行java时设置编码  
`java -Dfile.encoding=UTF-8 HelloWorld`  

#### 打印HelloWorld代码相关补充
**公共类的使用**  
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}
```

**println与print**  
System.out.println("HelloWorld");  
println 输出数据后**进行**换行  

System.out.print("HelloWorld");  
print 输出数据之后**不进行**换行  

**一个文件多个类**  
一个文件允许有多个类，但只允许一个存在一个**公共类**，同时，类之间不能同名  
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}

class HelloJava {

    }

class HelloAlice {

    }
```

***

## 注释
### 单行注释 //
用来解释单行代码或使某部分代码不被编译器读取  
// 后面跟的内容不会被编译器读取  

### 多行注释
/*          */  两个符号间的代码全部被注释  
如下  
```java
/*
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}
*/
```

### 文档注释（java独有）
```
/**

*/
```
文档注释内容可以被JDK提供的工具javadoc所解析，生成一套以网页文件形式体现的该程序的说明文档。  

文档注释可以用来生成一套网页的介绍信息  
例如  
```java
/**
我的首个java程序
@author yinghuolight
@version 1.0
*/

public class HelloWorld {
    /**
    这是main方法，一个类可以有多个方法
    */
    public static void main(String[] args) {
        System.out.println("HelloWorld");
    }
}
```

使用cmd来生成需要使用以下指令  
>javadoc -d mydoc -author -version HelloWorld.java  

mydoc是生成的文件夹名字，随意更改  
这指令只是包括了两个常用的参数，还有很多参数需要自行去探索   
可以尝试使用idea去生成doc文件  

***
## JAVA API文档
API是Java提供的基本编程接口  
Java提供了大量的基础类，可以通过API文档来查阅  

API地址：https://docs.oracle.com/en/java/javase/22/docs/api/index.html  

这里拿的是java22来作为实例，你可以更换22为其他数字以查阅其他版本的API  

也可以通过这个链接来到总览页面 https://docs.oracle.com/en/java/javase  

***
### 学前实例
#### 输出个人信息
```java
public class Introduction {
    public static void main(String[] args) {
        System.out.println("姓名：展扬呀");
        System.out.println();
        System.out.println("家里蹲大学在读生，负责文案及相关程序");
        System.out.println("第一次席");
    }
}
```

## 第一大章 变量与运算符
### 标识符
#### 何为标识符
Java中变量、方法、类等要素命名时使用的字符序列，称为标识符  

#### 标识符命名准则
1. 由26个英文字母大小写，0-9，_或$组成  
2. 数字不可以作为开头  
3. 不可以使用关键字和保留字，但能包含关键字和保留字  
4. 严格区分大小写，长度无限制  
5. 不能包括空格  

#### 标识符命名规范
包名：多单词组成时所有字母都小写  
例如: java.lang，com.atguigu.bean  

类名、接口名：多单词组成时，所有单词的首字母大写  
例如: HelloWorld，String，System  

变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写  
例如: age，name，bookName，main，binarySearch，getName  

常量名：所有字母都大写，多单词时每个单词用下划线连接  
例如: MAX_VALUE，PI，DEFAULT_CAPACITY  

### 变量
#### 变量的类型
##### 基本数据类型
整型  
1. byte  
2. short  
3. int  
4. long  

浮点型  
1. float  
2. double  

字符型  
1. char  

布尔型  
1. boolean  

##### 引用数据类型
类（class）  
数组（array）  
接口（interface）  
枚举（enum）  
注解（annotation）  
记录（record）  

#### 定义变量的细则和规范
变量：内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化  
变量的三个要素：数据类型，变量名，存储的值  
变量的声明：`数据类型 变量名 = 变量值`  
变量的意义：给一段指定的内存起名，方便操作这段内存  

局部变量：方法内部定义的变量  
全局变量：方法之外定义的变量  

作用域：变量的作用范围  
简单来说就是变量所在的大括号范围  
在这个大括号内变量可以使用  
全局变量的作用域是当前文件  

生命周期：

```java
public class Test {
    public static void main(String[] args) {
        int i;
        i = 40;
        int j = 0;
        j = i + 40;
        int sum = i + j;
        char a = 'A';
        System.out.println(i + j);
        System.out.println("i + j = " + sum);
        System.out.println(a);
        //System.out.printf("%d", i);
    }
}
```

##### 定义变量的细则
1. 变量必须要先进行声明再进行使用  
2. 局部变量在使用之前一定要进行初始化  
3. 变量都有它们的作用域，出了作用域范围后无法使用  
4. 变量都有相应的范围，不要跃出范围  

#### 基本数据类型的介绍
**整数类型：byte，short，int，long**  

|类型|占用存储空间|范围|
|:-:|:-:|:-:|
|byte|1个字节（8个bit）|-128 ~ 127|
|short|2个字节|-2^15 ~ 2^15-1|
|int|4个字节|-2^31 ~ 2^31-1|
|long|8个字节|-2^63 ~ 2^63-1|

定义long类型的变量，赋值时要以"l"或者"L"作为后缀  
Java程序中变量通常声明为int类型，除非范围不够  
Java的整型默认为int型  

##### 计算机的存储单位
**字节（byte）** 计算机用于计量存储容量的基本单位，一个字节等于8个bit  
**位（比特位/bit）** 数据存储的最小单位  

**浮点类型：float，double**  
|类型|占用存储空间|范围|
|:-:|:-:|:-:|
|单精度float|4个字节|-3.403E38 ~ 3.403E38|
|双精度double|8个字节|-1.798E308 ~ 1.798E308|

浮点型有两种表现形式：  
十进制数：5.12，512.0f，.512  
科学计数法：5.12e2，512E2，100E-2  

float尾数可以精确到7位有效数字，在很多情况下，精度很难满足  
double精度是float的两倍（double的精度约为15-16位）  

定义float类型的变量，赋值要需要以"f"或"F"作为后缀  
Java的浮点型默认为double类型  

##### 浮点数精度的说明
并不是所有的小数都能精确地用二进制浮点数表示，例如10的负次幂  

浮点类型float，double并不适应于**不容许舍入误差**的金融计算，对于需要精确数字计算或者保留特定位数的精度，需要用**BigDecimal**类  

一些精度相关的实例说明  
这个例子大多数语言都是一样的，不信去试试  
```java
public class Test {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
    }
}
```

***

```java
public class Test {
    public static void main(String[] args) {
        float ff1 = 123123123f;
        float ff2 = ff1 + 1;
        System.out.println(ff1);
        System.out.println(ff2);
        System.out.println(ff1 == ff2);
    }
}
```

##### 浮点型实例
定义圆周率并赋值为3.14，现在有三个圆的半径为1.2，2.5，6，求它们的面积  
```java
public class FloatDoubleExer {
    public static void main(String[] args) {
        double pi = 3.14;
        double r1 = 1.2;
        double r2 = 2.5;
        double r3 = 6.0;
        double s1 = pi * r1 * r1;
        double s2 = pi * r2 * r2;
        double s3 = pi * r3 * r3;
        System.out.println("圆1的面积为" + s1 + " 圆2的面积为" + s2 + " 圆3的面积为" + s3);
    }
}
```
如果可以，请使用单词代替r1，s1  

将华氏温度(80度)转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度  
**℃=(℉ - 32) / 1.8**  
```java
public class FloatDoubleExer {
    public static void main(String[] args) {
        double degreeFahrenheit = 80.0;
        double degreeCentigrade = (degreeFahrenheit - 32) / 1.8;
        System.out.println("华氏温度为" + degreeFahrenheit + "℉");
        System.out.println("摄氏温度为" + degreeCentigrade + "℃");
    }
}
```

#### 字符类型
char类型数据用来表示存储并表示字符，占用两个字节  
Java中所有字符都使用Unicode编码，故一个字符可以存储一个字母，汉字，或符号  

字符型变量一般有四种表现形式  
1.使用单引号('')括起来的单个字符  
例如：  
```java
char c1 = 'a';
char c2 = '中';
char c3 = '9';
```

2.直接使用Unicode值（\uXXXX）来表示字符型常量  
XXXX表示一个十六进制整数  

3.Java允许使用转义字符'\'来将字符转变成特殊字符型常量  
`char c3 = '\n';  //\n表示换行`  
人话就是转义字符  

4.ASCII码

#### 布尔类型
boolean类型用来判断逻辑条件  

一般用于这些场景  
1. if条件  
2. while循环  
3. for循环  
4. do while循环  

boolean类型数据只有两个值：true或flase  
不可以使用0或非0的整数代替，这和C语言不同  

扩展：Java虚拟机中没有任何供booleamn值专用的字节码文件，在虚拟机中会把true和flase认为成int替代的整数，即0/1  

```java
public class Test {
    public static void main(String[] args) {
        boolean isMarried = true;
        if (isMarried) {
            System.out.println("不可忘却的时刻");
        } else {
            System.out.println("友谊常在");
        }
    }
}
```

#### 基础数据类型运算规则
基础数据类型变量间运算存在着一定的运算规则  
其中包括：  
1.类型提升  
2.强制类型转换  
3.连接  

##### 类型提升
当容量小的变量与容量大的变量做运算时，结果自动转换为容量大的数据类型  
这个容量指的是范围大小，而不是占用的内存大小  
```java
public class VariableTest {
    public static void main(String[] args) {
        int i1 = 10;
        int i2 = i1;
        long l1 = i1;
        float f1 = l1;
    }
}
```

`byte,char,short -> int -> long -> float -> double`  

char类型之间运算照样会进行类型提升  
如果你的赋值操作超出原类型范围，不会发生类型提升  
例如：  
long test1 = 123123123123;  
123123123123没有'l'或'L'的后缀，这是int类型，按照原情况，会发生类型提升，转换成long类型，但由于这个值超出了int类型的范围，所以发生报错，没有发生类型提升，float类型不写后缀不会自动类型提升，因为浮点数默认double类型  

整型常量默认为int类型  
浮点型常量默认为double类型  

#### 强制类型转换
有什么办法让范围大的类型的转变成范围小的类型？  
这个时候需要用到强制类型转换
`int i1 = (int) 3.14;`  

##### 精度损失
强制类型转换有可能造成精度损失  
好比如浮点型转成整型会丢掉小数部分，这个措施叫截断  

以下情况会发生精度损失  
1. 浮点型转换整型  
2. 转换的类型范围过小  
```java
int i1 = 128;
byte b1 = (byte) i1;
```
byte的范围是-128 ~ 127  
那么最终输出结果是多少？  
-128，最终输出结果是-128  
至于为什么，那就要了解原码反码补码（自己去了解）了  

首先，i1是int类型，int类型占用4个字节  
那么它的二进制表示形式是  
00000000000000000000000010000000  

而byte占用1个字节  
它的二进制形式只有8位  
只能存储10000000  

内存中存放的是补码，打印或显示在屏幕上的是原码  
这里面就需要补码向原码进行转换  
补码等于原码取反+1，然而，对于8个二进制位的10000000来说  
得碍于符号位不参与运算，无法进行补码向原码进行转换  
于是计算机定义8位二进制10000000为-128  
这就是为什么最终输出结果是-128  

等学到后面自然就知道了，这里只是简单说明  

#### 连接
`System.out.println();`在使用中有一个特别的运算  
常量或变量与字符串相加是连接在一起而不是得到运算后的结果  
这需要你使用括号来避免这种情况  
学到String类会知道  
好比如说  
```java
public class AirExer {
    public static void main(String[] args) {
        System.out.println("abc" + 5 + 5);
        //输出结果是abc55
        System.out.println("abc" + (5 + 5));
        //输出结果是abc10
    }
}
```

### String类
String不属于基本数据类型，属于引用数据类型  

`String s1 = "字符串";`  

字符串：由一个或多个字符组成并被双引号括起来的字符或字符串  
Java允许字符串为0个字符  
```java
public class StringTest {
    public static void main(String[] args) {
        String s1="a";
        String s2="aa";
        String s3="";
        String s4="我是展扬";
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}
```

#### String与基本数据类型变量之间的运算
String与基本数据类型变量都能够进行运算，但String只能与基本数据类型变量进行连接运算，使用"+"表示  
例如：  
```java
public class StringTest {
    public static void main(String[] args) {
        int num = 10;
        boolean b1 = true;
        String s1 = "我是展扬";
        String s2 = s1 + b1 + num;
        System.out.println(s1 + num);
        System.out.println(s1 + b1 + num);
        //不允许System.out.println(b1 + num + s1);
        //这违反了基本数据类型运算规则
        System.out.println(s2);
    }
}
```

String允许与整型相连接，最终输出字符整型  
但在实际运用中，有可能需要让字符10恢复为数字10，这需要使用Integer类  
```java
public class StringTest {
    public static void main(String[] args) {
        int num = 10;
        String s1 = "";
        String s2 = s1 + num;
        System.out.println(s2);
        //最终输出"10"，字符10
        int num2 = Integer.parseInt(s2);
    }
}
```
##### String类的练习
**输出个人信息**
```java
public class StringExer {
    public static void main(String[] args) {
        String name = "Rainbow";
        int age = 21;
        char gender = '男';
        double weight = 65;
        boolean isMarried = false;
        String phoneNumber = "11451419810";
        System.out.println("姓名：" + name + " "
                + "年龄：" + age + " "
                + "性别：" + gender + " "
                + "体重：" + weight + " "
                + "是否已婚：" + isMarried + " "
                + "电话号码：" + phoneNumber);
    }
}
```

### 计算机的存储
计算机中存储和运算的所有数据都要转为二进制，二进制是计算机的基础  

生活中常用的进制有以下几种  
1.十进制  
数字组成：0-9  
进位规则：逢10进1  

2.二进制  
数字组成：0-1  
进位规则：逢2进1，0b或0B开头（Java表示方法）  

3.八进制  
数字组成：0-7  
进位规则：逢8进1，0开头（Java表示方法）  

4.十六进制  
数字组成：0-9，a-f（不分大小写）  
进位规则：逢16进1，0x或0X开头  
```java
public class BinaryTest {
    public static void main(String[] args) {
        int num1 = 103;
        int num2 = 0b10;
        int num3 = 023;
        int num4 = 0x23a;
        System.out.println(num1);
        System.out.println(num2);
        System.out.println(num3);
        System.out.println(num4);
    }
}
```
#### 二进制
在Java中，这是一个二进制表示的10
0b00000000000000000000000000001010  
0b是Java辨识为二进制的标志  
00000000000000000000000000001010是10的二进制表示方法  

int类型占用空间内存4个字节，即32个bit位，二进制里面每一位都是比特位  
二进制位中，最左一位是符号位，0为正，1为负  
00000000000000000000000000001010  //最左一位  

**二进制转换十进制**  
00001010  这是10的二进制表示方法，二进制如何转换成十进制？
你可以通过以下示例来得出结论  
```java
1*2^3+0*2^2+1*2^1+0*2^0=10

1 * 2 ^ 3 + 1 * 2 ^ 1 = 10
```
通过上述例子你应该已经知道二进制是如何换算十进制了的  

#### 原码反码补码
原码，反码，补码  
数据在内存中的储存方式为补码  
而呈现出来的数字则是原码  
原码，反码，补码与二进制有关  
二进制位中，最左位决定正负  
正数的原，反，补码均不变  
负数的反码为符号位不变，每一位取反  
负数的补码为该数绝对值取反再加1  

实例：  
85  
原码：0000000001010101  
反码：0000000001010101  
补码：0000000001010101  

-85  
原码：1000000001010101  
反码：1111111110101010  
补码：1111111110101011  

-144  
原码：1000000010010000  
反码：1111111101101111  
补码：1111111101110000  

负数补码的规律是该数绝对值取反再加1  
综合-85及-144的补码，可以得到加1的规律为  
1111111110101010+0000000000000001=1111111110101011  
结尾为0直接变更为1  
1111111101101111+0000000000000001=1111111101110000  
当结尾为1时，加1会变为2  
但二进制仅由0/1组成，无法出现0/1之外的数字  
此时要应用逢二进一规则  
即本位为2时，向前进一位1，同时本位归零  

数据存放补码的原因  
计算机处理器中是没有减法的处理，只是有加法的处理  
在计算机中相关的减法运算都是加法模拟的  
这一点直接说明了补码的重要性  
好比如说，1-1  
1      00000001  
-1     10000001  
1+(-1) 10000010  
最终结果是-2，如果使用原码来进行运算  

如果是补码  
1      00000001  
-1     11111111  
1+(-1) 00000000  
最终结果是0  

如果要从更深层来说，可以这么讲  
在计算机系统中，使用补码，可以将符号位和数值域统一处理  
同时，加法和减法也可以统一处理  
此外，补码和原码相互转换，其运算过程是相同的，不需要额外的硬件电路  

### 操作符/运算符
#### 算术操作符  
```java
+    -    *    /    %
加   减   乘   除   取余
```

`前置++  后置++  前置--  后置--`  
++a和a++有着很大区别  
前后是赋值的先后，++a是先赋值，后使用  
a++先使用，后赋值  
例：  
int a = 10;  
int b = ++a;  //先赋值，后使用，b = 10，a再=11  

例如2：  
int a = 10;  
int b = a++;  
先使用后赋值，这里b=11，a=11  

#### 位操作符  
```java
<<         >>
左移操作符 右移操作符

&      |      ^
按位与 按位或 按位异或

~  
按位取反
```
位操作符都是对二进制位进行更改  
左右移，二进制位进行左移右移，n >> 3表示右移三位  

右移操作符有两种移动方式  
1.算术右移  
右边丢弃，左边补原符号位  
这一种用于有符号的  
2.逻辑右移  
右边丢弃，左边补零  
这一种用于无符号的  
例如：  
0000000000000011  
n << 3  
0000000000011000  

1111111111111101  
n >> 3  
1111111111111111

左移操作符也有这两种，只是不需要考虑符号位，只需要在右边填补0  

按位与的作用是对两者的二进制位进行比较，若此位两者皆为0，则此位为0  
若此位两者分别为1,0，则此位为0，若此位两者皆为1，则此位为1，重新组成一个二进制位  
例如：  
```java
int a = 3 & 5;  
3   0000000000000011  
5   0000000000000101  
a   0000000000000001  
```
a的结果为1  

按位或的作用是对两者的二进制位进行比较，若此位两者之中至少有一位为1，则此位为1  
若两者皆为0，则此位为0，重新组成一个二进制位  

按位异或的作用对两者的二进制位进行比较，若此位两者相同，则此位为0，若此位两者不同  
则此位为1，重新组成一个二进制位  

按位取反就是0变1，1变0，包括符号位  

#### 赋值操作符  
```java
=   +=   -=   *=   /=   %=   <<=   >>=   &=   ^=   |=
```
+= ^=这类属于复合赋值，具体意思对应上文再结合赋值便可知道  
例如 int a = 2  a = a + 5 -> a += 5  
在Java中，+=同样可以被理解成m += 5 -> m = m + 5  
但是不同的是，m += 5不需要考虑类型问题，Java自动更改了类型  
而m = m + 5则需要考虑类型提升等问题  
所以说下面这种会报错的情况反而是可以的  
这一点和C语言是不同的  
```java
public class ArbitraryTest {
    public static void main(String[] args) {
        byte a = 5;
        a += 5;  //允许
        //a = a + 5;  不允许
        System.out.println(a);
    }
}
```
让一个数自增推荐选m += 5这种形式  

#### 逻辑运算符  
```java
&和&&  |和||  !          ^
并     或者   逻辑相反    异或
```
&是逻辑与，左右的表达式都会进行计算  
&&是短路与，当左侧满足时，右侧不再理会  
哈？你问为什么要写&&和&，那是因为我一开始压根就没写&  

逻辑运算符针对的都是boolean类型的变量进行的操作  
逻辑运算符运算的结果也是boolean类型  
```java
public class ArbitraryTest {
    public static void main(String[] args) {
        int a = 20;
        int b = 20;
        boolean bo1 = (++a % 3 == 0) && (a++ % 7 == 0);
        System.out.println("a=" + a + " bo1=" + bo1);
        boolean bo2 = (b++ % 3 == 0) && (++b % 7 == 0);
        System.out.println("b=" + b + " bo2=" + bo2);
    }
}
```

#### 关系运算符  
```java
==   !=     >    <    >=     <=
等于 不等于 大于 小于 大于等 小于等
```
Java中，=是赋值，==才是等于  

#### 条件运算符
`(条件表达式)?表达式1:表达式2`  
条件表达式如果是true，运算结果是表达式1，否则是2  

#### 运算符综合练习
输出某个三位数的个，十，百位  
```java
public class AirExer {
    public static void main(String[] args) {
        int num = 153;
        int re1 = num % 10;
        int re2 = num / 10 % 10;
        int re3 = num / 100;
        System.out.println(re1);
        System.out.println(re2);
        System.out.println(re3);
    }
}
```
请问89个小时等于多少天多少小时  
```java
public class AirExer {
    public static void main(String[] args) {
        int num = 89;
        int day = num / 24;
        int hour = num % 24;
        System.out.println(day + "天" + hour + "小时");
    }
}
```
***
## Scanner类
Scanner是官方提供的一个类，用来获取和解析用户输入的数据  
你可以通过Scanner来获取键盘的输入  

### 如何使用Scanner
**导入包**  
`import java.util.Scanner;`  
在文件的开头书写，导入Scanner包  

**创建类实例**  
`Scanner 变量名 = new Scanner(System.in);`  

**调用类方法**  
如果你需要接收一个字符串，你可以使用next()或nextLine()  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        String str1 = "荧火light";
        Scanner scan = new Scanner(System.in);
        str1 = scan.next();
        //str1 = scan.nextLine();
    }
}
```
next()和nextLine()的区别  
next()方法用于读取下一个“标记”，空格，制表符，换行符是常见的标记  
它会返回下一个有效字符，直到遇到空格  
什么意思？  
"  Hello World"，调用next()将返回"Hello"，下一次调用将返回"World"  
就是next()会忽略开头的空白字符，并从第一个非空白字符开始读取，直到下一个空白字符为止  

nextLine()方法用于读取整行输入，包括空格，直到遇到换行符为止  
它会返回读取到的整行字符串，除了换行符  
"Hello World"，调用nextLine()将返回"Hello World"  

如果你需要接收一个整型或浮点型，你需要用相应的关键词  
你可以在[JAVA API](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html)文档中查阅使用什么关键字  
这里简单举个例子：   
```java
Scanner 变量名1 = new Scanner(System.in);
int 变量名2 = 变量名1.nextInt();
double 变量名2 = 变量名.nextDouble();
boolean 变量名2 = 变量名1.nextBoolean();
//没有nextChar，如果要接收char，用next().charAt(0);
```
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int scanTest = 0;
        Scanner scan = new Scanner(System.in);
        scanTest = scan.nextInt();
        scan.close();
    }
}
```
**关闭资源**  
`变量名.close();`  
Scanner输入流所输入的内容在运行中是不关闭的  
这可能会造成内存泄漏，在不需要使用Scanner时，建议关闭它  

### 如何获取随机数
随机数的使用是不可缺少的，在Java中可以通过Math类来生成随机数  
`double 变量名 = Math.random();`  
random调用会返回一个[0.0,1.0)范围的double类型的随机数  
我查阅了JDK 23的API文档，这一句是Math类提供的唯一一条与随机数有关的语句  
如果你不想使用Math类，也可以使用Random类[java.util.Random](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/Random.html#%3Cinit%3E())  

使用Math类生成随机数需要变通一下  
例如：生成0-100范围的整型随机数  
`int randomNum = (int) (Math.random() * 101);`  
应该能够理解为什么*101能够得出0-100的范围吧  
random调用会返回一个[0.0,1.0)范围的double类型的随机数  
*101就是[0.0,101.0)，转成int类型就是[0,100]，因为101取不到啊  

获取[a,b]范围的通用公式  
`int 变量名 = (int) (Math.random() * (b - a + 1) + a);`  

#### 使用Random类生成随机数
```java
Random 变量名1 = new Random();
//括号写范围，只能写一个数字，写10就是生成[0,10)范围的整型数
int 变量名2 = 变量名1.nextInt();
double 变量名2 = 变量名1.nextDouble()
boolean 变量名2 = 变量名1.nextBoolean()
```
实例：生成[-100,100]的数  
```java
import java.util.Random;

public class ArbitraryTest {
    public static void main(String[] args) {
        Random randomNum = new Random();
        int randomNumNest = (randomNum.nextInt(201) - 100);
        System.out.println(randomNumNest);
    }
}
```
### String类的练习
字符串的逆序  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        String str = "yinghuolight";
        String newStr = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            newStr += str.charAt(i);
        }
        System.out.println(newStr);
    }
}
```
输入字符串后，再输入一个字符，检测这个字符在字符串中出现的次数  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String str1 = scan.nextLine();
        String str2 = scan.nextLine();
        char str3 = str2.charAt(0);
        int count = 0;

        for (int i = 0; i < str1.length() - 1; i++) {
            char ch1 = str1.charAt(i);
            if (ch1 == str3) {
                count++;
            }
        }

        System.out.println(count);
        scan.close();
    }
}
```
字符串的左旋  
```java
public class leftMove {
    public static void main(String[] args) {
        String str = "ABCDEF";
        int len = 2;
        leftMove test = new leftMove();
        test.leftMove(str, len);
    }

    public void leftMove(String str, int len) {
        String str1 = "";
        String str2 = "";

        for (int i = 0; i < str.length(); i++) {
            if (i < len) {
                str1 += str.charAt(i);
            } else {
                str2 += str.charAt(i);
            }
        }

        System.out.println(str2 + str1);

    }

}
```
***
## 第二章 流程控制
流程控制语句是用来控制程序中各语句执行顺序的语句，可以把语句组合成能完成一定功能的小逻辑模块  
程序设计中规定了三种流程结构  
- 顺序结构  
从上往下逐个执行，中间没有判断和条状  
- 分支结构  
选择性执行某段语句  
- 循环语句  
循环执行某段代码  

### 分支语句
**关键词：if,else,else if,switch**  
```java
        if (条件表达式) {
            代码块;
        } else if (条件表达式) {
            代码块;
        } else if (条件表达式) {
            代码块;
        } else {
            代码块;
        }
```
**else if**通常在需要多分支时使用  
除了**if**可以独立外，其他语句都无法脱离**if**使用  

#### if，else，else if的使用
if，else if存在着判断条件，如果判断条件成立，执行这一段代码块，其他则是不执行，起到分支的作用  

如果if语句条件成立，那么else if和else都不执行  
如果if不成立，else if成立，执行else if，其他不执行  
如果if和多个else if都不成立，执行else  
实际例子：  
成年人心率的正常范围是每分钟60-100次，体检时  
如果心率不在此范围内，则需要进一步检查  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int i = 0;
        Scanner scan = new Scanner(System.in);
        i = scan.nextInt();
        if (i >= 60 && i <= 100) {
            System.out.println("情况正常");
        } else if (i < 30 || i > 130) {
            System.out.println("？您？");
        } else {
            System.out.println("莫得惊艳点");
        }
    }
}
```
上述代码中，if-else结构需要执行的语句就一句，你可以省略大括号  
```java
        if (i >= 60 && i <= 100)
            System.out.println("情况正常");
        else if (i < 30 || i > 130)
            System.out.println("？您？");
        else
            System.out.println("莫得惊艳点");
```
我个人建议是加上大括号，除非你这个结构是绝对不会进行更改  
并且只是简单的逻辑判定，没有用在很复杂的结构  
if-else的匹配是就近原则，只有在使用大括号时才允许忽略就近原则  
就近原则就是else默认匹配最近的if  

在多分支选择中 有可能会出现中间值  
按照日常使用 我们会下意识使用  
d <= xx < k  
这种表达是不得当的  
为什么？  
<=和<都是二元操作符，也就是只能两个间运算  
d <= xx已经进行了运算，返回了一个boolean值用来表示是与否  
这时候表达式就变成boolean < k，Java不允许boolean值与整型运算  
正确表达应该是  
xx >= d && xx < k  //&& 并  
然后就是建议条件尽可能写成**左闭右开**的形式  
能写成x < 10就不要写成x <= 9  
（与C语言不同，C语言是返回常量）  

##### 嵌套使用
首先要牢记的前提是  
除了**if**可以独立外，其他语句都无法脱离**if**使用  
在这里前提下，你可以任意加入if-else结构  
可以在if中加入if，也可以在else if和else中加入if    

来做道题  
输入三个整数，给他们排序  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int num1 = 0;
        int num2 = 0;
        int num3 = 0;
        int tmp = 0;
        Scanner scan = new Scanner(System.in);
        num1 = scan.nextInt();
        num2 = scan.nextInt();
        num3 = scan.nextInt();
        if (num1 < num2) {
            tmp = num1;
            num1 = num2;
            num2 = tmp;
        }
        if (num1 < num3) {
            tmp = num1;
            num1 = num3;
            num3 = tmp;
        }
        if (num2 < num3) {
            tmp = num2;
            num2 = num3;
            num3 = tmp;
        }
        System.out.println("num1=" + num1 + " num2=" + num2 + " num3=" + num3);
    }
}
```
这里我不打算使用嵌套，这道题嵌套写起来其实是比较麻烦的  
我选择更有简洁性的多if语句，尽管效率未必有if-else高  
在实际开发中，是不会出现超过三层的if-else结构，如果超过了，建议对代码进行更改  

#### switch-case结构
```java
        switch (表达式) {
            //表达式只能是char，byte，short，int，String，枚举
            case 常量1:
                代码块;
            case 常量2:
            case 常量3:
                代码块2;
            default:
                代码块;
            //default是默认，当输入switch的值均不符合分支时
            //可以设定default分支来回应
```
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        Scanner scan = new Scanner(System.in);
        input = scan.nextInt();
        switch (input) {
            case 1:
                System.out.println("第一个分支结果");
            case 2:
            case 3:
                System.out.println("第二个分支结果");
            default:
                System.out.println("其他结果");
        }
    }
}
```
上述就是一个switch-case结构的简单例子，如果你有运行过  
你会发现输出结果是全部分支而不是想要的分支结果  
这个时候需要用到**break**  
鉴于我switch结构用得少，我不知道什么情况需要输出多个分支  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        Scanner scan = new Scanner(System.in);
        input = scan.nextInt();
        switch (input) {
            case 1:
                System.out.println("第一个分支结果");
                break;
            case 2:
            case 3:
                System.out.println("第二个分支结果");
                break;
            default:
                System.out.println("其他结果");
                break;
        }
    }
}
```
**break**可以终止switch语句，**case**相当于switch的入口，决定switch从哪里开始  
而**break**则是出口，决定从哪里跳出switch，**break**语句并不是必要的  
你可以不添加**break**以此来输出多个分支结果  
同样，在switch中可以使用**contiue**，用来跳过后续的代码，直接进入判断部分  
switch语句的效率是比if-self要高的，可以选择性使用  

##### switch综合练习
不允许使用if-self结构，使用switch结构来实现以下功能  
1. 允许自由输入数据  
2. 若数据大于60，打印达标，若低于60，打印不合格  
```java
import java.util.Scanner;

//方法1
public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        Scanner scan = new Scanner(System.in);
        input = scan.nextInt();
        scan.close();
        switch (input / 10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                System.out.println("不合格");
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                System.out.println("达标");
                break;
            default:
                System.out.println("成绩出错");
        }
    }
}
```
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        Scanner scan = new Scanner(System.in);
        input = scan.nextInt();
        scan.close();
        switch (input / 60) {
            case 0:
                System.out.println("不合格");
                break;
            case 1:
                System.out.println("达标");
                break;
            default:
                System.out.println("成绩出错");
        }
    }
}
```

### 循环语句
关键词：for，while，do...while  
循环结构有三种：  
1. for循环  
2. while循环  
3. do while循环  

#### for循环
```java
        for (初始部分; 判断条件; 调整部分) {
            代码块;
        }
```
初始部分：相当于初始化条件  
判断条件：循环进行的条件  
调整部分：每次循环进行什么调整  
你可以通过下面的例子快速理解：  
（使用了数组内容知识）  
```java
public class ArbitraryTest {
    public static void main(String[] args) {
        int i = 0;
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        //或者int[] arr = new int[10];
        for (i = 0; i < 10; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
for循环进行流程是这样的  
初始部分->判断条件->满足条件->调整部分->判断条件->满足条件->调整部分->判断条件->不满足条件->不进入循环  

值得一提，for循环三个条件可有可无  
你可以省略初始化部分，也能省略判断条件，三个都省略也是能运行的  
知道就行，实战还是别乱拿来耍  

#### while循环
```java
        初始部分;
        while (循环条件) {
            代码块;
            调整部分;
        }
```

在循环结构中，也可以使用**break**语句  
可以用来跳出循环  
除了**break**语句外，还有**continue**语句  
与**break**语句不同，**break**是永久终止循环  
而**continue**是跳过自身后面的代码，直接进入判断部分  

来做道题  
输出1-100间所有偶数的和，同时输出偶数个数  
```java
public class ArbitraryTest {
    public static void main(String[] args) {
        int i = 0;
        //你可以在初始部分直接定义
        int count = 0;
        int sum = 0;
        for (i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                sum += i;
                count++;
            }
        }
        System.out.println("偶数之和为" + sum + " 偶数个数为" + count);
    }
}
```

##### 循环结构综合练习
1.输出所有水仙花数，水仙花数是一个三位数，其各个位上数字立方和等于其本身  
```java
public class ArbitraryTest {
    public static void main(String[] args) {
        int i = 0;
        for (i = 100; i < 1000; i++) {
            if (i == (i / 100) * (i / 100) * (i / 100)
                    + ((i / 10) % 10) * ((i / 10) % 10) * ((i / 10) % 10)
                    + (i % 10) * (i % 10) * (i % 10)) {
                System.out.print(i + " ");
            }
        }
    }
}
```
我个人建议创建三个变量来做这道题，就不要像我这样做  

2.输入两个正整数，求最大公约数和最小公倍数   
最大公约数   
```java
import java.util.Scanner;

//方法1
public class ArbitraryTest {
    public static void main(String[] args) {
        int m = 0;
        int n = 0;
        Scanner scan = new Scanner(System.in);
        m = scan.nextInt();
        n = scan.nextInt();
        int min = (m < n) ? m : n;
        scan.close();

        int result = 1;
        for (int i = 1; i <= min; i++) {
            if (m % i == 0 && n % i == 0) {
                result = i;
            }
        }
        System.out.println(result);
    }
}
```
```java
import java.util.Scanner;

//方法2
public class ArbitraryTest {
    public static void main(String[] args) {
        int m = 0;
        int n = 0;
        Scanner scan = new Scanner(System.in);
        m = scan.nextInt();
        n = scan.nextInt();
        int min = (m < n) ? m : n;
        scan.close();

        for (int i = min; i > 0; i--) {
            if (m % i == 0 && n % i == 0) {
                System.out.println(i);
                break;
            }
        }
    }
}
```
```java
import java.util.Scanner;

//while循环做法
public class ArbitraryTest {
    public static void main(String[] args) {
        int m = 0;
        int n = 0;
        Scanner scan = new Scanner(System.in);
        m = scan.nextInt();
        n = scan.nextInt();
        scan.close();

        if (n == 0)
        {
            System.out.println(m);
        }

        while (n != 0) {
            int invoke = n;
            n = m % n;
            m = invoke;
        }
        System.out.println(m);
    }
}
```
其实这三个例子都只是实现了功能，并没有进行一定的处理  
例如两个数都为0，或者任一为0的情况，感兴趣自己去想想怎么优化  

最小公倍数（不考虑0的情况，因为懒）  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int m = 0;
        int n = 0;
        Scanner scan = new Scanner(System.in);
        m = scan.nextInt();
        n = scan.nextInt();
        scan.close();
        int ret = m * n;

        if (n == 0) {
            System.out.println(m);
        }

        while (n != 0) {
            int invoke = n;
            n = m % n;
            m = invoke;
        }
        System.out.println("最大公约数为" + m);
        System.out.println("最小公倍数为" + ret / m);
    }
}
```
3.猜数字游戏  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        int randomNum = (int) (Math.random() * 101);
        System.out.println("猜猜数字>[0,100]");
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.print("请输入一个数字>");
            input = scan.nextInt();

            if (input == randomNum) {
                System.out.println("猜对了");
                break;
            }

            if (input > randomNum) {
                System.out.println("猜大了");
            }

            if (input < randomNum) {
                System.out.println("猜小了");
            }

        }
        scan.close();
    }
}
```
如果你想要更高的效率，你要改用if-else结构  
多if语句效率是没有if-self结构高的  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        int randomNum = (int) (Math.random() * 101);
        System.out.println("猜猜数字>[0,100]");
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.print("请输入一个数字>");
            input = scan.nextInt();

            if (input > randomNum) {
                System.out.println("猜大了");
            } else if (input < randomNum) {
                System.out.println("猜小了");
            } else {
                System.out.println("猜对了");
                break;
            }
        }
        scan.close();
    }
}
```

#### do...while循环
```java
        初始部分
        do {
            代码块;
            调整部分;
        } while (循环条件);
```
do...while循环执行过程：  
初始部分->调整部分->循环条件->满足条件->调整部分->循环条件->不满足条件->不进入循环  
do...while循环就是先进行一次再循环  

使用do...while结构做一个简单的ATM  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int input = 0;
        double money = 0;
        double hasMoney = 0;
        double carryMoney = 0;
        Scanner scan = new Scanner(System.in);
        System.out.print("请设定你所有的金额>");
        hasMoney = scan.nextDouble();
        System.out.println("设定成功，你现在拥有" + hasMoney + "金额\n");
        do {
            System.out.println("1.存款");
            System.out.println("2.取款");
            System.out.println("3.显示余额");
            System.out.println("0.退出");
            System.out.print("请选择>");
            input = scan.nextInt();

            switch (input) {
                case 1:
                    System.out.print("存入多少金额>");
                    money = scan.nextDouble();
                    if (money > hasMoney) {
                        System.out.println("余额不够\n");
                    } else {
                    //else if (money <= hasMoney)
                        hasMoney -= money;
                        System.out.println("存入成功，你现在账户余额为" + money);
                        System.out.println("你现在持有" + hasMoney + "金额\n");
                    }
                    break;

                case 2:
                    System.out.println("账户余额为" + money);
                    System.out.print("取出多少金额>");
                    carryMoney = scan.nextDouble();
                    if (carryMoney > money) {
                        System.out.println("账户余额不够\n");
                    } else {
                    //else if (carryMoney <= money)
                        money -= carryMoney;
                        hasMoney = hasMoney + carryMoney;
                        System.out.println("取出成功，你现在账户余额为" + money);
                        System.out.println("你现在持有" + hasMoney + "金额\n");
                    }
                    break;

                case 3:
                    System.out.println("账户余额为" + money + "\n");
                    break;

                case 0:
                    System.out.println("已退出ATM机");
                    break;
            }

        } while (input != 0);
        scan.close();
    }
}
```
这里留了一个扩展点，我留下了else if分支，你可以利用else分支去实现一些缺少的功能，如，检测输入是否正确  

#### “无限”循环
典型的无限循环结构有`while(true)`和`for(;;)`  
“无限”循环常用于不知道循环多少次，依靠循环内部的条件来结束的场景  

#### 循环的练习
使用嵌套循环输出棱形  
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
输出一个这样的棱形  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int i = 0;
        int line = 0;
        Scanner scan = new Scanner(System.in);
        line = scan.nextInt();
        scan.close();  //我认为没有必要再使用Scanner

        for (i = 0; i < line; i++) {
            int j = 0;
            for (j = 0; j < line - 1 - i; j++) {
                System.out.print(" ");
            }

            for (j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }

            System.out.println();
        }

        for (i = 0; i < line - 1; i++) {
            int j = 0;
            for (j = 0; j <= i; j++) {
                System.out.print(" ");
            }

            for (j = 0; j < 2 * (line - 1 - i) - 1; j++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
```

打印9*9乘法表  
```java
public class ArbitraryTest {
    public static void main(String[] args) {

        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i + " * " + j + " = " + i * j + "  ");
            }

            System.out.print("\n");
        }
    }
}
```

打印素数  
```java
import java.util.Scanner;

public class ArbitraryTest {
    public static void main(String[] args) {
        int num = 0;
        Scanner scan = new Scanner(System.in);
        num = scan.nextInt();
        scan.close();

        for (int i = 2; i <= num; i++) {

            int j = 0;
            boolean flag = true;
            for (j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                System.out.print(i + " ");
            }
        }
    }
}
```
## 时间锥的应用
如何知道代码运行的时间呢？  
可以借助时间锥[currentTimeMillis](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/System.html#currentTimeMillis())，时间锥的单位是毫秒  
```java
import static java.lang.System.currentTimeMillis;

long 变量名1 = currentTimeMillis()

long 变量名2 = currentTimeMillis()
```
```java
import java.util.Scanner;
import static java.lang.System.currentTimeMillis;

public class ArbitraryTest {
    public static void main(String[] args) {
        long start = currentTimeMillis();

        int num = 0;
        Scanner scan = new Scanner(System.in);
        num = scan.nextInt();
        scan.close();

        for (int i = 2; i <= num; i++) {

            int j = 0;
            boolean flag = true;
            for (j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                System.out.print(i + " ");
            }
        }

        long end = currentTimeMillis();
        System.out.println(end-start);
    }
}
```
获取代码的运算时间是为了优化算法，寻求更高的运行效率，下面是改进了算法的求质数代码，你可以自行比较一下它们的运行时间  
```java
import java.util.Scanner;
import static java.lang.System.currentTimeMillis;

public class ArbitraryTest {
    public static void main(String[] args) {
        long start = currentTimeMillis();

        int num = 0;
        Scanner scan = new Scanner(System.in);
        num = scan.nextInt();
        scan.close();

        for (int i = 2; i <= num; i++) {

            int j = 0;
            boolean flag = true;
            for (j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                System.out.print(i + " ");
            }
        }

        long end = currentTimeMillis();
        System.out.println(end - start);
    }
}
```
初步实战-谷粒记账软件  
GuLiAccount.java  
```java
public class GuLiAccount {
    public static void main(String[] args) {
        int hasMoney = 10000;
        boolean isFlag = true;
        String info = "";
        do {
            System.out.println("\n-----------------谷粒记账软件-----------------\n");
            System.out.println("                 1 收支明细");
            System.out.println("                 2 登记收入");
            System.out.println("                 3 登记支出");
            System.out.println("                 4 退   出\n");
            System.out.print("                 请选择>");

            char selection = Utility.readMenuSelection();
            switch (selection) {
                case '1':
                    System.out.println("------------------收支明细-------------------");
                    System.out.println("收支\t\t账户金额\t\t收支金额\t\t说明");
                    System.out.println(info);
                    System.out.println("-------------------------------------------");
                    break;
                case '2':
                    System.out.print("本次收入金额>");
                    int money1 = Utility.readNumber();

                    if (money1 > 0) {
                        hasMoney += money1;
                    }

                    System.out.print("本次收入说明>");
                    String addDesc = Utility.readString();
                    info += "收入\t\t" + hasMoney + "\t\t" + money1 + "\t\t    " + addDesc + "\n";
                    System.out.println("------------------登记完成-------------------");
                    break;
                case '3':
                    System.out.print("本次支出金额>");
                    int money2 = Utility.readNumber();

                    if (money2 > 0 && hasMoney > money2) {
                        hasMoney -= money2;
                    }

                    System.out.print("本次支出说明>");
                    String minusDesc = Utility.readString();
                    info += "支出\t\t" + hasMoney + "\t\t" + money2 + "\t\t    " + minusDesc + "\n";
                    System.out.println("------------------登记完成-------------------");
                    break;
                case '4':
                    System.out.print("是否退出(Y/N)>");
                    char isExit = Utility.readConfirmSelection();
                    if (isExit == 'Y') {
                        isFlag = false;
                    }
                    break;
            }
        } while (isFlag);
    }
}
```
Utility.java  
```java
import java.util.Scanner;

public class Utility {
    private static Scanner scan = new Scanner(System.in);

    public static char readMenuSelection() {
        char c;
        for (; ; ) {
            String str = readKeyBoard(1);
            c = str.charAt(0);
            if (c != '1' && c != '2' && c != '3' && c != '4') {
                System.out.print("选择错误，请重新输入>");
            } else break;
        }
        return c;
    }

    public static int readNumber() {
        int n;
        for (; ; ) {
            String str = readKeyBoard(4);
            try {
                n = Integer.parseInt(str);
                break;
            } catch (NumberFormatException e) {
                System.out.print("数字输入错误，请重新输入>");
            }
        }
        return n;
    }

    public static String readString() {
        String str = readKeyBoard(8);
        return str;
    }

    public static char readConfirmSelection() {
        char c;
        for (; ; ) {
            String str = readKeyBoard(1).toUpperCase();
            c = str.charAt(0);
            if (c == 'Y' || c == 'N') {
                break;
            } else {
                System.out.print("选择错误，请重新输入>");
            }
        }
        return c;
    }
    
    private static String readKeyBoard(int limit) {
        String line = "";

        while (scan.hasNext()) {
            line = scan.nextLine();
            if (line.length() < 1 || line.length() > limit) {
                System.out.print("输入错误，请重新输入>");
                continue;
            }
            break;
        }

        return line;
    }
}
```
你可以对其进行改造，这一次我就不作示范了  
给大家自由实践的机会  

## 数组
数组是多个相同类型数据按照一定顺序排序的集合  
并用一个名字命名，并通过编号的方式对这些数据进行统一的管理  
数组的初始化有多种形式  
```java
int[] a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int[] a = new int[]{1, 2, 3, 4, 5};

int[] a = new int[4];
int a[] = new int[4];
```
数组中有着几个概念，分别是数组名，元素，下标，长度  
拿int[] a = new int[]{1, 2, 3, 4, 5};进行举例  
a是数组名，1，2，3，4，5是元素  
a[0]代表的就是元素1，a[0]相当于数组第一位，[0]是下标  
长度就是数组的容量，多少个元素就是多长，想要打印长度可以使用`System.out.println(a.length)`  

数组自身的特性说明了数组在内存中是连续存放的，因而各个元素之间相差的地址大小总是相等的  

数组它是一组数据，常规的打印显然是不适合  
我们需要使用循环来打印所有的元素  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
}
```
上述都是进行了初始化，如果不进行初始化，会得出什么结果？  
数组的默认初始化值是多少呢？  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] a = new int[4];
        double[] b = new double[4];
        char[] c = new char[4];
        String[] d = new String[4];
        boolean[] e = new boolean[4];
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
            System.out.print(b[i] + " ");
            System.out.print(c[i] + " ");
            System.out.print(d[i] + " ");
            System.out.print(e[i] + "\n");
        }
    }
}
```
说结论，整型和浮点型默认值都是0，字符型是空字符，String类是null，布尔类型是false  

### 一维数组的内存解析
tmd，指针还在追我  
Java将内存划分为五块，程序计数器，虚拟机栈，本地方法栈，堆，方法区  

目前与数组相关的内存结构是虚拟机栈和堆  
虚拟机栈：用于存放方法的局部变量，包括基本数据类型的变量和引用数据类型的变量，以及某些对象的引子，好比如说数组名  
堆：所有的对象实例和数组都是在堆中分配内存的，当一个对象被创建时，它的引用可以存放在虚拟机栈的局部变量中，但对象本身是在堆中分配的  

虚拟机栈以栈帧为基本单位，有入栈和出栈的操作，一个栈帧相当于一个方法，方法中的局部变量存放于栈帧中  

如果有人学过C语言或C++，或者学过数据结构，那么基本听说过栈  
栈区的存放特点是先进后出，好比如说  
```java
[]  （第一个取出）  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  （第一个存放）  
```
我们以两个例子来说明  
```java
int[] arr1 = new int[4];
arr1[0] = 10;
arr1[2] = 20;

String[] arr2 = new String[2];
arr2[1] = "荧火光";
```
上面说过栈区是存放变量的，也就是数组名  
```java
[]  （第一个取出）  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[]  
[arr2：0xaabb]  
[arr1：0x12ab]  （第一个存放）  
```
栈区存放的数组名，其实本质是存放地址的首元素地址  
我们所创建的变量，方法，在栈区中都是以地址的形式存在  
数组的连续性存放使得我们能够凭借首元素地址便可以直接访问所有元素  

同时，我们知道，数据在内存中的存储方式是补码，这就意味着我们需要将内容进行转换  
像String这种字符串，同样需要被转换，不同的是，它们还需要放进常量池中  
在Java中，字符串都要被存放进常量池，这些字符串被认为成常量  
当有变量指向相同的字符串时，它们本质上都指向了这个字符串的地址，没有再一次开辟新的空间  
然而，仅仅只有字符串是这样的，数据常量依旧需要开辟空间  
暂且知道这些就足够了，后续面向对象会深入了解  

#### 两个变量指向一个数组
先来看一段代码  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[4];
        arr[0] = 5;
        arr[1] = 6;
        arr[2] = 7;

        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        System.out.println();

        int[] arr1 = arr;  //将arr的地址赋给了arr1
        arr1[1] = 9;
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
    }
}
```
上述代码中，实现了类似C/C++语言中的指针操作，将数组arr的地址赋给了arr1，这两个变量指向了同一个地址，对arr1操作，相当于操作arr，这个操作不需要开辟新的内存空间  

### 一维数组练习
1. 翻译手机号码  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = {8, 2, 1, 0, 3};
        int[] index = {2, 0, 3, 2, 4, 0, 1, 3, 2, 3, 3};  //11
        String tel = "";

        for (int i = 0; i < index.length; i++) {
            int value = index[i];
            tel += arr[value];
            //1 8 0 1 3 8 2 0 1 0 0
        }

        System.out.println("联系方式 " + tel);
    }
}
```
2. 输入1-7，打印星期X  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        int input = 0;
        String[] arr = {"星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"};
        Scanner scan = new Scanner(System.in);

        while (true) {
            input = scan.nextInt();
            if (input >= 1 && input <= 7) {
                System.out.println(arr[input - 1]);
                break;
            } else {
                System.out.println("输入错误，请重新输入");
            }
        }
        scan.close();
    }
}
//这里做了简单的判断，要处理除整型外的是有一些复杂的，平时练习没有那个必要
```
3. 输入学生人数以及成绩，找出最高分，并进行等级划分，等级依据最高分来取（例如，最高分-10，最高分-20等）  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("请输入学生人数>");
        int count = scan.nextInt();
        int[] scores = new int[count];
        System.out.println("请依次输入学生成绩>");

        int i = 0;
        int max = scores[0];
        for (i = 0; i < scores.length; i++) {
            scores[i] = scan.nextInt();

            if (max < scores[i]) {
                max = scores[i];
            }
        }
        System.out.println("最高分>" + max);

        for (i = 0; i < scores.length; i++) {
            if (scores[i] >= max - 10) {
                System.out.println("学生" + i + " 分数为" + scores[i] + " 等级A");
            } else if (scores[i] >= max - 20) {
                System.out.println("学生" + i + " 分数为" + scores[i] + " 等级B");
            } else if (scores[i] >= max - 30) {
                System.out.println("学生" + i + " 分数为" + scores[i] + " 等级C");
            } else {
                System.out.println("学生" + i + " 分数为" + scores[i] + " 等级D");
            }
        }
        scan.close();
    }
}
```
可以去写一个输入学生名的，例如：  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 0;

        System.out.print("请输入学生人数>");
        int count = scan.nextInt();
        scan.nextLine();  //清除缓冲区

        String[] nameLine = new String[count];
        System.out.println("请依次输入学生名字>");

        for (i = 0; i < nameLine.length; i++) {
            nameLine[i] = scan.nextLine();
        }

        int[] scores = new int[count];
        System.out.println("请依次输入学生成绩>");

        int max = scores[0];
        for (i = 0; i < scores.length; i++) {
            scores[i] = scan.nextInt();

            if (max <= scores[i]) {
                max = scores[i];
            }
        }
        System.out.println("最高分>" + max);

        for (i = 0; i < scores.length; i++) {
            char grade = 0;
            if (scores[i] >= max - 10) {
                grade = 'A';
            } else if (scores[i] >= max - 20) {
                grade = 'B';
            } else if (scores[i] >= max - 30) {
                grade = 'C';
            } else {
                grade = 'D';
            }
            System.out.println("学生" + nameLine[i] + " 分数为" + scores[i] + " 等级" + grade);
        }
        scan.close();
    }
}
```
这个是后期的我复习时重写的  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = 0;

        System.out.print("请输入学生人数>");
        int count = scan.nextInt();
        scan.nextLine();
        String[] nameLine = new String[count];
        int[] scores = new int[count];

        for (i = 0; i < count; i++) {
            System.out.print("请输入第" + (i + 1) + "位" + "学生的姓名>");
            nameLine[i] = scan.nextLine();
            System.out.print("请输入第" + (i + 1) + "位" + "学生的成绩>");
            scores[i] = scan.nextInt();
            scan.nextLine();
        }

        int max = scores[0];
        for (i = 0; i < scores.length; i++) {

            if (max <= scores[i]) {
                max = scores[i];
            }
        }
        System.out.println("最高分>" + max);

        for (i = 0; i < scores.length; i++) {
            char grade = 0;
            if (scores[i] >= max - 10) {
                grade = 'A';
            } else if (scores[i] >= max - 20) {
                grade = 'B';
            } else if (scores[i] >= max - 30) {
                grade = 'C';
            } else {
                grade = 'D';
            }
            System.out.println("学生" + nameLine[i] + " 分数为" + scores[i] + " 等级" + grade);
        }
        scan.close();
    }
}
```
### 二维数组
二维数组其实是将一维数组作为另一个一维数组的元素，形成的有行列的结构  

#### 二维数组的创建与使用
```java
int[][] a = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
int[][] a = new int[][]{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};

int[][] a = new int[4][4];
int a[][] = new int[4][4];

int[][] a = new int[4][];  //不允许int[][] a = new int[][4]
//奇奇怪怪，C语言允许省略行，不允许省略列，这边居然是反过来的
```
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[][] a = new int[][]{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
        //上面有三个大括号，也就是3行，每个都有4个元素（不够补默认值），也就是a[3][4]
        //如何取得元素5？
        System.out.println(a[1][0]);  //第二行，第一列就是元素5
        System.out.println(a[1]);
        //打印的是地址，是这一行的地址，不是首元素地址

        //这是将二维数组分成多个一维数组来看
        int[][] arr = new int[2][];
        arr[0] = new int[4];
        arr[0][0] = 1;

        System.out.println(a.length);  //多少行
        System.out.println(a[0].length);  //某一行有多少元素
        System.out.println();

        //如何遍历二维数组？
        //两个for循环的事情
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```
数组中有关类型提升以及相互赋值等问题  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[10];
        byte[] arr2 = new byte[20];
        arr = arr2;
        //是否允许这一种，答案是不允许
        //int[]和byte[]是两种不同的引用数据类型
        int[][] arr3 = new int[3][3];
        arr = arr3;
        //是否允许这一种，答案是不允许
        //int[]和int[][]是两种不同的引用数据类型
    }
}
```
#### 二维数组的默认值和内存解析
```java
//二维数组的默认初始化

public class ArbitrayTest {
    public static void main(String[] args) {
        int[][] arr1 = new int[3][3];
        System.out.println(arr1[0]);  //第一行地址
        System.out.println(arr1[0][0]);  //0
        System.out.println();

        int[][] arr2 = new int[3][];
        System.out.println(arr2[0]);  //null
        System.out.println(arr2[0][0]);  //报错
        System.out.println();

        double[][] doubleArr1 = new double[3][3];
        System.out.println(doubleArr1[0]);  //第一行地址
        System.out.println(doubleArr1[0][0]);  //0.0
        System.out.println();

        double[][] doubleArr2 = new double[3][];
        System.out.println(doubleArr2[0]);  //null
        System.out.println(doubleArr2[0][0]);  //报错
        System.out.println();

        char[][] charArr1 = new char[3][3];
        System.out.println(charArr1[0]);  //第一行地址
        System.out.println(charArr1[0][0]);  //0
        System.out.println();

        char[][] charArr2 = new char[3][];
        System.out.println(charArr2[0]);  //null
        System.out.println(charArr2[0][0]);  //报错
        System.out.println();

        String[][] stringArr1 = new String[3][3];
        System.out.println(stringArr1[0]);  //第一行地址
        System.out.println(stringArr1[0][0]);  //null
        System.out.println();

        String[][] stringArr2 = new String[3][];
        System.out.println(stringArr2[0]);  //null
        System.out.println(stringArr2[0][0]);  //报错
        System.out.println();

        boolean[][] booleanArr1 = new boolean[3][3];
        System.out.println(booleanArr1[0]);  //第一行地址
        System.out.println(booleanArr1[0][0]);  //false
        System.out.println();

        boolean[][] booleanArr2 = new boolean[3][];
        System.out.println(booleanArr2[0]);  //null
        System.out.println(booleanArr2[0][0]);  //报错
        System.out.println();
    }
}
```
你可以看这个图来理解二维数组的内存解析  
[![pAdjjZ8.png](https://s21.ax1x.com/2024/10/24/pAdjjZ8.png)](https://imgse.com/i/pAdjjZ8)  
#### 二维数组练习
1. 求以下数组所有元素总和  
`int[][] arr = new int[][]{{3, 5, 8, 0}, {12, 9, 0, 0}, {7, 0, 6, 4}};`  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[][] arr = new int[][]{{3, 5, 8, 0}, {12, 9, 0, 0}, {7, 0, 6, 4}};
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        System.out.println(sum);
    }
}
```
#### 数组-常见算法操作
1. 特征值计算  
任意定义10个随机（使用random）元素，求出元素的最大值，最小值，总和，平均值  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[10];
        int i = 0;

        //生成随机并赋值数组
        for (i = 0; i < arr.length; i++) {
            int num = (int) (Math.random() * 101);  //生成[0,100]的数字
            arr[i] = num;
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        //求最大值，最小值，总和，平均值，不建议实际开发中将所有功能写在一起
        int max = arr[0];
        int min = arr[0];
        int sum = 0;
        double average = 0;
        for (i = 0; i < arr.length; i++) {

            if (max < arr[i]) {
                max = arr[i];
            }

            if (min > arr[i]) {
                min = arr[i];
            }
            sum += arr[i];
        }
        average = (double) sum / arr.length;
        System.out.println("元素最大值>" + max);
        System.out.println("元素最小值>" + min);
        System.out.println("元素总和>" + sum);
        System.out.println("平均值>" + average);
    }
}
```
2. 数组元素赋值  
打印杨辉三角  
鹏哥的写法  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int line = scan.nextInt();

        int[][] arr = new int[line][line];
        int i = 0;
        int j = 0;

        for (i = 0; i < arr.length; i++) {
            for (j = 0; j <= i; j++) {
                if (j == 0 || i == j) {
                    arr[i][j] = 1;
                } else {
                    arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
                }
            }
        }

        for (i = 0; i < line; i++) {
            for (int k = 0; k < line - i - 1; k++) {
                System.out.print(" ");
            }
            for (j = 0; j <= i; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
        scan.close();
    }
}
```
尚硅谷的写法  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[][] arr = new int[10][];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = new int[i + 1];
            arr[i][0] = 1;
            arr[i][i] = 1;
            for (int j = 1; j < arr[i].length - 1; j++) {
                arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
            }
        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```
3. 数组的赋值与复制  
数组的赋值  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] array1 = new int[]{2, 3, 5, 7, 11, 13, 17, 19};
        for (int i = 0; i < array1.length; i++) {
            System.out.print(array1[i] + " ");
        }

        int[] array2 = array1;
        for (int i = 0; i < array1.length; i++) {
            if (i % 2 == 0) {
                array2[i] = i;
            }
        }

        System.out.println();

        for (int i = 0; i < array1.length; i++) {
            System.out.print(array1[i] + " ");
        }
    }
}
```
数组的复制  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] array1 = new int[]{2, 3, 5, 7, 11, 13, 17, 19};
        for (int i = 0; i < array1.length; i++) {
            System.out.print(array1[i] + " ");
        }

        System.out.println();

        int[] array2 = new int[array1.length];
        for (int i = 0; i < array1.length; i++) {
            array2[i] = array1[i];
            System.out.print(array2[i] + " ");
        }


        for (int i = 0; i < array1.length; i++) {
            if (i % 2 == 0) {
                array2[i] = i;
            }
        }

        System.out.println();

        for (int i = 0; i < array1.length; i++) {
            System.out.print(array1[i] + " ");
        }

        System.out.println();

        for (int i = 0; i < array2.length; i++) {
            System.out.print(array2[i] + " ");
        }
    }
}
```
4. 数组元素的反转  
鹏哥写法  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 21};
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            int tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
尚硅谷写法  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 21};

        for (int i = 0; i < arr.length / 2; i++) {
            int tmp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = tmp;
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
其他写法（只是见识，不推荐）   
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 21};
        int[] newArr = new int[arr.length];

        for (int i = arr.length - 1; i >= 0; i--) {
            newArr[arr.length - 1 - i] = arr[i];
        }

        arr = newArr;

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
5. 数组的扩容和缩容  
数组的扩容  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5};
        int[] newArr = new int[2 * arr.length];  //arr.length << 1

        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }

        newArr[arr.length] = 10;
        newArr[arr.length + 1] = 20;
        newArr[arr.length + 2] = 30;
        arr = newArr;

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
数组的缩容  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7};
        int deleteIndex = 4;

        for (int i = deleteIndex; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr[arr.length - 1] = 0;

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7};
        int deleteIndex = 4;

        int[] newArr = new int[arr.length - 1];
        for (int i = 0; i < deleteIndex; i++) {
            newArr[i] = arr[i];
        }

        for (int i = deleteIndex; i < arr.length - 1; i++) {
            newArr[i] = arr[i + 1];
        }

        arr = newArr;

        for (int i = 0; i < newArr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
```
6. 数组的查找，排序  
线性查找  
```java
import java.util.Scanner;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7, 5, 5};
        Scanner scan = new Scanner(System.in);
        int searchInt = scan.nextInt();

        boolean found = false;
        String output = "存在数字" + searchInt + " 索引为>";

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == searchInt) {
                if (found) {
                    output += ",";
                }
                output += i;
                found = true;
            }
        }

        if (!found) {
            output = "不存在数字" + searchInt;
        }

        System.out.print(output);
    }
}
```
二分查找  
二分查找的前提是数据有序    
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{-99, -54, -2, 0, 2, 33, 43, 256, 999};
        boolean isFlag = true;
        int value = 256;

        int head = 0;
        int end = arr.length - 1;
        while (head <= end) {
            int middle = (head + end) / 2;
            if (arr[middle] == value) {
                System.out.println("找到指定的元素，索引为：" + middle);
                isFlag = false;
                break;
            } else if (arr[middle] > value) {
                end = middle - 1;
            } else {
                head = middle + 1;
            }
        }

        if (isFlag) {
            System.out.println("未找打指定的元素");
        }
    }
}
```
后期改写  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{-99, -54, -2, 0, 2, 33, 43, 256, 256, 999};
        int head = 0;
        int end = arr.length - 1;
        int value = 256;
        String output = "存在数字" + value + " 索引为>";
        boolean found = false;

        while (head < end) {
            int middle = (head + end) / 2;
            if (arr[middle] == value) {
                if (found) {
                    output += ",";
                }
                output += middle;
                found = true;
                head = middle + 1;
            } else if (arr[middle] > value) {
                end = middle - 1;
            } else {
                head = middle + 1;
            }
        }

        if (!found) {
            output = "不存在数字" + value;
        }

        System.out.println(output);
    }
}
```
冒泡排序  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }

        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k] + " ");
        }
    }
}
```
快速排序  
世界十大算法之一，最快的排序算法  
具体代码实现不提供  
超纲（不是不能写，难写，但是是能写的）  
```
```
#### Arrays工具类的使用与数组常见的异常
[java.util.Arrays](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/Arrays.html)类即为操作数组的工具类，包含了用来操作数组（比如排序和搜索）的各种方法  
例如：  
比较两个数组是否相等  
```java
import java.util.Arrays;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        int[] arr2 = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        boolean isEquals = Arrays.equals(arr, arr2);
        System.out.println(isEquals);
    }
}
```
输出数组元素  
```java
import java.util.Arrays;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        System.out.println(Arrays.toString(arr));
    }
}
```
数组填充  
```java
import java.util.Arrays;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        Arrays.fill(arr, 10);
        System.out.println(Arrays.toString(arr));
    }
}
```
数组排序  
```java
import java.util.Arrays;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```
二分查找（前提已经进行了排序）  
```java
import java.util.Arrays;

public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        Arrays.sort(arr);
        int index = Arrays.binarySearch(arr, 5);
        System.out.println(index);
    }
}
```
**相关数组异常**  
1. 数组访问越界  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 4, 7, 0, 2, 3, 6, 5, 9, 8};
        System.out.println(arr[arr.length + 1]);  //超出范围，不在范围均为越界
        System.out.println(arr[-arr.length]);  //超出范围，不在范围均为越界
    }
}
```
2. 空指针异常  
情况1  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[] arr = new int[10];
        arr = null;  //某些操作导致元素变为null
        System.out.println(arr[0]);
    }
}
```
情况2  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        int[][] arr = new int[10][];
        System.out.println(arr[0][1]);
    }
}
```
情况3  
null情况下调用方法  
面向对象会讲  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        String[] arr = new String[4];
        System.out.println(arr[0].toString());
    }
}
```

## 面向对象
在Java中，类的成员有属性，方法，构造器，代码块，内部类  
类是具有相同特征的事物的抽象描述，是抽象的、概念上的定义  
对象则是实际存在的该类事物的每个个体，是具体的  

简单来说  
类是抽象的概念定义  
对象则是实实在在存在的事物  
通俗化来说，类就是人，包括了人种，皮肤颜色等人类特征，而对象则是白种人，黄种人，黑种人  

面向对象，是软件开发中的一类编程风格、开发范式  
面向对象的有着封装，继承，多态的特征  
面向对象所关注的焦点是类，在计算机程序设计过程中，参照现实中的事物，将事物的属性特征、行为特征抽象出来，用类来表示  
类和对象是面向对象的核心  
在面向对象中，会使用到一些其他关键词：this，super，package，import，static，final，interface，abstract等  

面向过程和面向对象两者是并不冲突的，它们相辅相成  
面向过程是以某一件事情的实现为主，面向对象则是实现某一件事情里面的对象会做什么的定义  
好比如说：五子棋  
面向过程：开始游戏->描绘画面->黑子先走->描绘画面->白子走->描绘画面->判断输赢->返回或结束  
面向对象：棋盘，黑白棋子，规则  
先是对象棋盘进行画面的描绘，然后黑白棋对象进行，棋盘对象对其进行检测，规则对象对棋盘对象进行判断  
具体我也难解释，写多了自然就会了  
我都不知道为啥要把概念弄那么抽象  

### 类的声明与使用
属性和行为这是类最基本的两个成员  
属性：该类事物的状态信息，即类中的变量  
行为：该类事物要做什么操作，或者基于事物的状态能做什么，即类中的方法（函数）  

这里将使用两个例子来举例类的使用  
可以自行体会一下如何使用类，这是初阶面向对象必须要会的  
ArbitrayTest.java  
```java
public class ArbitrayTest {
    //属性
    String name;
    double price;

    //方法
    public void call() {
        System.out.println("测试");
    }

    public void sendMessage(String message) {
        System.out.println(message);
    }

    public void playGame() {
        System.out.println("玩游戏");
    }
}
```
上述是功能的集成，我们需要一个对象来使用这些功能，以便测试    
Test.java
```java
public class Test {
    public static void main(String[] args) {
        ArbitrayTest p1 = new ArbitrayTest();
        p1.name = "xinti Ex";
        p1.price = 999999;
        System.out.println("手机名" + p1.name + " 价格" + p1.price);
        
        //方法的调用
        p1.call();
        p1.sendMessage("有内鬼，终止交易");
        p1.playGame();
    }
}
```
PersonTest.java
```java
public class PersonTest {
    public static void main(String[] args) {
        Person p1 = new Person();
        Person p2 = new Person();
        p1.name = "yhlight";
        p1.age = 18;
        p1.gender = '男';

        p2.name = "shuiyang";
        p2.age = 19;
        p2.gender = '男';
        System.out.println("名字" + p1.name + " 年龄" + p1.age + " 性别" + p1.gender);
        System.out.println("名字" + p2.name + " 年龄" + p2.age + " 性别" + p2.gender);

        p1.eat();
        p1.sleep(10);
        p2.eat();
        p2.sleep(8);
    }
}
```
Person.java
```java
public class Person {
    String name;
    int age;
    char gender;

    public void eat() {
        System.out.println("至少吃");
    }

    public void sleep(int hour) {
        System.out.println("人至少保证" + hour + "小时睡眠");
    }

}
```
### 类的内存解析
对象在内存中的分配涉及的内存结构有  
-栈：存放方法中定义的变量  
-堆：创建出来的结构（new），例如数组和对象，包括对象中的属性  
-方法区：存放类的模板  
举个例子：  
```java
public class Person {
    String name;
    int age;
    char gender;

    public void eat() {
        System.out.println("至少吃");
    }

    public void sleep(int hour) {
        System.out.println("人至少保证" + hour + "小时睡眠");
    }

}
```
[![pAweNtA.png](https://s21.ax1x.com/2024/10/24/pAweNtA.png)](https://imgse.com/i/pAweNtA)  

#### 面向对象的完成具体功能的流程
1. **创建类，并设计类的内部成员（属性，方法）**  
2. **创建类的对象**  
3. **通过对象，调用类中声明的属性或方法**  

### 类的属性讲解
类的属性通常指的是类中定义的变量  
在之前，我们是依据变量的数据类型来对变量进行分类  
现在我们可以依据变量在类中定义的位置将变量分为成员变量（或属性）和局部变量  

成员变量：在方法之外定义的变量（全局变量）    
局部变量：方法内，方法形参，构造器内，构造器形参，代码块内定义的变量  

局部变量和成员变量在很多地方都是相似的  
例如：  
1. 定义形式相同  
2. 都有着作用域  
3. 必须先声明并赋值后再使用  

不同点在于  
1. 是否可以使用权限修饰符  
权限修饰符有public，protected，缺省，private  
权限修饰符表示结构可调用范围大小，我们现在这种默认不写的状态为缺省  
属性是可以被权限修饰符修饰的，局部变量则不可以  
2. 是否有默认初始化值  
属性有，但是局部变量没有  

#### 方法的使用
```java
[权限修饰符] [其他修饰符] 返回值类型 方法名([形参列表])[throws 异常列表] {
    方法体的功能代码
//[]为非必须内容
}
```
我们能够使用的权限修饰符有public，protected，缺省，private  
缺省是没有符号的，没有写权限修饰符的情况就是缺省  

返回值类型：调用完方法后，是否返回一个值  
返回值类型有void 无返回类型，基本数据类型，引用数据类型  
使用return关键词  
值得注意的是，有形参不一定有类型  
例如sort()方法，sort()需要传入一个数组，但是他并不需要进行返回  
sort()方法是对原来的数组进行更改，这不需要进行返回  

##### 如何调用方法  
`对象.方法([形式参数])`  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Person test = new Person();
        test.eat();
    }
}

class Person {
    String name;
    int age;
    char gender;

    public void eat() {
        System.out.println("吃饭");

        sleep(8);  //在java中这是允许的，因为存在一个方法区
        //在运行时，方法区先加载了类，然后才是堆创建对象
        //顺序结构是运行时代码的读取顺序
    }

    public void sleep(int hour) {
        System.out.println("人至少" + hour + "小时睡眠");
    }

    public String interests(String hobby) {
        String info = "我的爱好是" + hobby;
        System.out.println(info);
        return info;
    }

    public int getAge() {
        return age;
    }

    public void methodTest() {
        //public void methodTest2() {
            //方法内不允许再定义方法
            //但是类里面可以再定义类
        //}
    }

}
```
#### 方法的重载
在同一个类里面，允许多个同名的方法，只要他们的参数列表不同  
```java
public class ArbitrayTest {

    public void add(int i, int j) {

    }

    public void add(double i, double j) {

    }

}
```
来道重载有关的面试题  
```java
public class ArbitrayTest {
    public static void main(String[] args) {

        int[] arr = new int[]{1, 2, 3};
        System.out.println(arr);

        char[] arr1 = new char[]{'a', 'b', 'c'};
        System.out.println(arr1);  //输出的不是地址

        boolean[] arr2 = new boolean[]{false, true, true};
        System.out.println(arr2);
        
    }
}
```
#### 可变个数形参方法
方法形参的类型确认，但是形参的个数无法确认，这时候可以使用可变个数形参方法  
`(参数类型 ... 参数名)`  
可变个数形参可以为0个或多个  
```java
public class ArbitrayTest {

    public void print(int... nums) {
        System.out.println("0个参数测试");
    }

    public void print(int[] nums) {
        //不构成重载，可变个数形参方法实质上是数组的替代品
    }

    public void print(int x, int y) {
        //方法的重载，固定的优先于可变
    }

    public void print(int x, int... nums) {   //不允许交换，位置
        //方法的重载，固定的优先于可变
    }

    public static void main(String[] args) {
        ArbitrayTest test = new ArbitrayTest();
        test.print();
        test.print(1);
        test.print(1, 2, 3, 4, 5);
    }
}
```
估计大多数人都不知道能够应用到哪里，巧了，我也是  
n个字符串进行拼接，每一个字符串之间使用某个符号进行分割  
如果没有传入字符串，则返回空字符串""  
```java
public class ArbitrayTest {

    public static void main(String[] args) {
        ArbitrayTest test = new ArbitrayTest();
        String info = test.concat("-", "Hello", "World");
        System.out.println(info);
    }

    public String concat(String operator, String... strs) {
        String result = "";

        for (int i = 0; i < strs.length; i++) {
            if (i == 0) {
                result += strs[i];
            } else {
                result += (operator + strs[i]);
            }
        }

        return result;
    }
}
```
#### 方法参数传递机制
实参和形参  
形参：在定义方法时，方法名后面括号()中声明的变量称为形式参数，简称形参  
实参：在调用方法时，方法名后面括号()中的使用的值/变量/表达式称为实际参数，简称实参  

Java中，方法的参数传递方式只有一种：值传递（其实可以分成传值和传址，但是面试时还是要回答值传递）  
将实际参数值的副本（复制品）传入方法内，而参数本身不受影响    
形参是基本数据类型：将实参基本数据类型变量的“数据值”传递给形参  
形参是引用数据类型：将实参引用数据类型变量的“地址值”传递给形参  

这里面我简单说一下就好了，你引用数据类型是在堆空间里面创建对象的  
在栈空间中定义一个引用类型的变量时，这个变量并不直接存储对象的数据  
而是存储一个指向堆中对象的“引用”（可以理解为一个地址）  
这个引用指向堆空间中对象的首地址  

只要你知道，传递的是地址还是数据值，上面那些统统都可以滚蛋  
```java
//这是一个很好的说明例子
public class ArbitrayTest {
    public static void main(String[] args) {
        int m = 10;
        ArbitrayTest test = new ArbitrayTest();
        test.method1(m);
        System.out.println(m);

        MyArrays arrs = new MyArrays();
        arrs.num = 10;
        test.method2(arrs);
        System.out.println(arrs.num);
    }

    public void method1(int m) {
        m++;
    }

    public void method2(MyArrays arrs) {
        arrs.num++;
    }
}
```
#### 递归
何为递归，递归就是方法调用自己  
递归分为直接递归，间接递归  
间接递归就是A->B,B->C,C->A  
递归一定要有终止条件  

计算1-5的和  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        ArbitrayTest test = new ArbitrayTest();
        int num = 5;
        int sum = test.getSum(num);
        System.out.println(sum);
    }

    public int getSum(int num) {
        if (num == 1) {
            return 1;
        }
        return num + getSum(num - 1);
    }
}
```
计算n的阶乘  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        ArbitrayTest test = new ArbitrayTest();
        int num = 5;
        int sum = test.getRet(num);
        System.out.println(sum);
    }

    public int getRet(int num) {
        if (num == 1) {
            return 1;
        }
        return num * getRet(num - 1);
    }
}
```
斐波那契数列  
1、1、2、3、5、8、13、21、34、55  
```java
 class ArbitrayTest {
    public static void main(String[] args) {
        ArbitrayTest test = new ArbitrayTest();
        int num = 10;
        int fib = test.getFib(num);
        System.out.println(fib);
    }

    public int getFib(int num) {
        if (num == 1 || num == 2) {
            return 1;
        }
        return getFib(num - 1) + getFib(num - 2);
    }
}
```
#### 属性和方法的综合练习
1. 声明一个方法，打印一个棱形，并计算它的面积（使用返回值）  
Test.java  
```java
public class Test {
    public static void main(String[] args) {
        ArbitrayTest userTest = new ArbitrayTest();
        userTest.x = 10;
        userTest.y = 8;
        int area = userTest.method1();
        System.out.print(area);
    }
}
```
ArbitrayTest.java
```java
public class ArbitrayTest {
    int x;
    int y;

    public int method1() {
        for (int i = 0; i < x; i++) {
            for (int j = 0; j < y; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        return x * y;
    }

}
```
2. 自定义一个操作int[]的工具类，用于求最大值，最小值，总和，平均数  
遍历数组，复制数组，数组反装，数组排序，查找  
MyArrays.java  
```java
public class MyArrays {

    /**
     * 获取int[]数组的最大值
     *
     * @param arr 要获取最大值的数组
     * @return 数组的最大值
     */
    public int getMax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }

    /**
     * 获取int[]数组的最小值
     *
     * @param arr 要获取最小值的数组
     * @return 数组的最小值
     */
    public int getMin(int[] arr) {
        int min = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    }

    /**
     * 获取int[]数组的元素总和
     *
     * @param arr 要获取元素总和的数组
     * @return 数组的元素总和
     */
    public int getSum(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    /**
     * 获取int[]数组的元素平均值
     *
     * @param arr 要获取元素平均值的数组
     * @return 数组的元素平均值
     */
    public int getAvg(int[] arr) {
        return getSum(arr) / arr.length;
    }

    /**
     * 打印int[]数组
     *
     * @param arr 要打印的数组
     */
    public void print(int[] arr) {
        System.out.print("[");

        for (int i = 0; i < arr.length; i++) {
            if (i == 0) {
                System.out.print(arr[i]);
            } else {
                System.out.print("," + arr[i]);
            }

        }

        System.out.println("]");
    }

    /**
     * 复制数组
     *
     * @param arr 要复制的数组
     * @return 一模一样的数组
     */
    public int[] copy(int[] arr) {
        int[] newArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        return newArr;
    }

    /**
     * 数组的逆序
     *
     * @param arr 要逆序的数组
     */
    public void reverse(int[] arr) {
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
            int tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }

    /**
     * 数组的排序
     *
     * @param arr 要排序的数组
     */
    public void sort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    }

    /**
     * 线性查找
     *
     * @param arr 要查找的数组
     * @return 所要查找的数字的索引，若未找到，返回-1
     */
    public String linearSearch(int[] arr, int searchInt) {
        boolean found = false;
        String output = "存在数字" + searchInt + " 索引为>";

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == searchInt) {
                if (found) {
                    output += ",";
                }
                output += i;
                found = true;
            }
        }

        if (!found) {
            output = "不存在数字" + searchInt;
        }

        return output;
    }
}
```
MyArraySTest.java  
```java
public class MyArraySTest {
    public static void main(String[] args) {
        MyArrays arrs = new MyArrays();
        int[] arr = new int[]{34, 56, 223, 2, 56, 24, 33, 67, 778, 45};
        int max = arrs.getMax(arr);
        System.out.println(max);

        int min = arrs.getMin(arr);
        System.out.println(min);

        int sum = arrs.getSum(arr);
        System.out.println(sum);

        int avg = arrs.getAvg(arr);
        System.out.println(avg);

        arrs.print(arr);

        int[] newArr = arrs.copy(arr);
        arrs.print(newArr);

        arrs.reverse(arr);
        arrs.print(arr);

        arrs.sort(arr);
        arrs.print(arr);

        String search = arrs.linearSearch(arr, 56);
        System.out.println(search);
    }
}
```
### 对象数组
什么是对象数组？  
数组的元素为类的对象时，称为对象数组  
例如：String[]，MyArrays[]  
通过实际例子说明可能好一些，可能会有一些抽象，希望认真看  
Test.java  
```java
public class Test {
    public static void main(String[] args) {
        ArbitrayTest[] arbTest = new ArbitrayTest[20];
        for (int i = 0; i < arbTest.length; i++) {
            arbTest[i] = new ArbitrayTest();
            arbTest[i].number = i + 1;
            arbTest[i].state = (int) (Math.random() * 6 + 1);
            arbTest[i].score = (int) (Math.random() * 101);
        }
        ArbitrayTest showArbTest = new ArbitrayTest();
        showArbTest.show(arbTest);
        showArbTest.sort(arbTest);
        System.out.println();
        showArbTest.show(arbTest);
    }
}
```
ArbitrayTest.java  
```java
public class ArbitrayTest {

    int number;
    int state;
    int score;

    public void sort(ArbitrayTest[] arbTest) {
        for (int i = 0; i < arbTest.length - 1; i++) {
            for (int j = 0; j < arbTest.length - i - 1; j++) {
                if (arbTest[j].score > arbTest[j + 1].score) {
                    ArbitrayTest tmp = arbTest[j];
                    arbTest[j] = arbTest[j + 1];
                    arbTest[j + 1] = tmp;
                }
            }
        }
    }

    public void show(ArbitrayTest[] arbTest) {
        for (int i = 0; i < arbTest.length; i++) {
            if (arbTest[i].state == 3) {
                System.out.println(arbTest[i].number + " " + arbTest[i].state + " " + arbTest[i].score);
            }
        }
    }

}
```
别问我为什么不写注释，主要都是为了培养代码的阅读能力  
这些都还不是很复杂的内容，如果这些都看不懂，那确实是没话说了  

#### 对象数组的内存解析
[![pA6y8b9.png](https://s21.ax1x.com/2024/11/10/pA6y8b9.png)](https://imgse.com/i/pA6y8b9)  

#### package和import
package，包，用于指明该文件中定义的类，接口等结构所在的包  
相当于一个文件夹  
`package 顶层包名.子包名;`
举个例子  
pack1\pack2\PackageTest.java  
```java
package pack1.pack2;
```  
- 一个源文件只能有一个声明包的package语句  
- package语句作为Java源文件的第一条语句出现，若缺省该语句，则指定为无名包  
- 包名，属于标识符，满足标识符命名的规则和规范  
- 包通常使用所在公司域名的倒置：com.yinghuolight.xxx，不能用java开头  
- 包对应于文件系统的目录，package语句中用"."来指明包(目录)的层次，每"."一次就表示一层文件目录  
- 同一个包下可以声明多个结构（类、接口），但是不能定义同名的结构（类、接口）  
- 不同的包下可以定义同名的结构（类、接口）  

import  
为了使用定义在其它包中的Java类，需用import语句来显式引入指定包下所需要的类  
相当于import语句告诉编译器到哪里去寻找这个类  
`import 包名.类名;`  

import语句，声明在包的声明和类的声明之间  
如果需要导入多个类或接口，那么就并列显式多个import语句即可  
如果使用a.*导入结构，表示可以导入a包下的所有的结构，例如，`java.util.*`  
如果导入的类或接口是java.lang包下的，或者是当前包下的，则可以省略此import语句  
如果已经导入java.a包下的类，那么如果需要使用a包的子包下的类的话，仍然需要导入  
如果在代码中使用不同包下的同名的类，那么就需要使用类的全类名的方式指明调用的是哪个类  

import有一个很特别的例子  
```java
java.sql.Date
java.util.Date
```
那么，我要如何同时使用这两个包中的Date类？  
我们需要用全类名  
```java
java.sql.Date date1 = new java.sql.Date();
```

## 面向对象-封装
### 为什么需要封装？
随着我们系统越来越复杂，类会越来越多，那么类之间的访问边界必须把握好，面向对象的开发原则要遵循“高内聚、低耦合”  

高内聚、低耦合是软件工程中的概念，也是UNIX操作系统设计的经典原则  
内聚，指一个模块内各个元素彼此结合的紧密程度；耦合指一个软件结构内不同模块之间互连程度的度量  
内聚意味着重用和独立，耦合意味着多米诺效应牵一发动全身  

高内聚：类的内部数据操作细节自己完成，不允许外部干涉  
低耦合：仅暴露少量的方法给外部使用，尽量方便外部调用  

就像我们使用洗衣机一样，我们只需要知道如何使用，不需要了解洗衣机的内部结构  

我们需要使用权限修饰符进行封装，java规定了四种权限修饰符  
private 缺省 protected public  
```java
class Test {

    String name;
    private int legs;  //请问我要如何限制其他人定义它为负数呢？
    //这个时候就需要用到封装

    public void setLegs(int l) {
        if (l >= 0 && l % 2 == 0) {
            legs = l;
        } else {
            System.out.println("非法");
        }
        //这里只是提供了一个方法，用户多了一种定义方式
        //我们还是可以通过xxxx.legs来定义
        //这个时候，我们需要完全禁止xxxx.legs这种方式，可以使用private
        //private int legs;
    }
}
```
|修饰符|本类内部|本包内|其他包子类|其他包非子类|
|:-:|:-:|:-:|:-:|:-:|
|public|✔|✔|✔|✔|
|protected|✔|✔|✔|✗|
|缺省|✔|✔|✗|✗|
|private|✔|✗|✗|✗|

设计程序，定义两个类，Person和PersonTest  
用setAge()设置人的合法年龄（0-130），用getAge返回人的年龄  
Person.java  
```java
public class Person {
    private int age;

    public void setAge(int a) {
        if (a > 0 && a <= 130) {
            age = a;
        } else {
            System.out.println("输入有误");
        }
    }

    public int getAge() {
        return age;
    }

}
```
PersonTest.java  
```java
public class PersonTest {
    public static void main(String[] args) {
        Person person = new Person();
        person.setAge(18);
        System.out.println(person.getAge());
    }
}
```

设计程序，创建员工数组，并从键盘输入，然后遍历  
Employee.java  
```java
public class Employee {
    private String name;
    private char gender;
    private int age;
    private String phoneNumber;

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public void setGender(char g) {
        gender = g;
    }

    public char getGender() {
        return gender;
    }

    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }

    public void setPhoneNumber(String p) {
        phoneNumber = p;
    }

    public String setPhoneNumber() {
        return phoneNumber;
    }

    public String getInfo() {
        //return "年龄>" + name + "性别>" + gender + "年龄>" + age + "电话号码>" + phoneNumber;
        return name + "\t" + gender + "\t\t" + age + "\t\t" + phoneNumber;
    }
}
```
EmployeeTest.java  
```java
import java.util.Scanner;

public class EmployeeTest {
    public static void main(String[] args) {
        Employee[] emps = new Employee[2];
        Scanner scan = new Scanner(System.in);

        for (int i = 0; i < emps.length; i++) {
            emps[i] = new Employee();
            System.out.println("请输入第" + (i + 1) + "位员工的个人信息");
            System.out.print("姓名>");
            String name = scan.nextLine();
            System.out.print("性别>");
            char gender = scan.nextLine().charAt(0);
            System.out.print("年龄>");
            int age = scan.nextInt();
            scan.nextLine();  //清除缓冲区
            System.out.print("电话>");
            String phoneNumber = scan.nextLine();

            emps[i].setName(name);
            emps[i].setGender(gender);
            emps[i].setAge(age);
            emps[i].setPhoneNumber(phoneNumber);
        }

        System.out.println("--------------员工列表--------------");
        System.out.println("编号\t\t姓名\t\t性别\t\t年龄\t\t电话");
        for (int i = 0; i < emps.length; i++) {
            System.out.println((i + 1) + "\t\t" + emps[i].getInfo());
        }

        scan.close();
    }
}
```

### 面向对象-类-构造器
在new对象时，直接为当前对象的某个或所有成员变量直接赋值，这种做法叫构造器或者构造方法  
```java
        [修饰符] class 类名 {
            [修饰符] 构造器名() {
                // 实例初始化代码
            }
            [修饰符] 构造器名(参数列表) {
                // 实例初始化代码
            }
        }
```
```java
public class MyArrays {

    int len;
    int line;

    public MyArrays(int l) {
        len = l;
        line = 9;
    }
```
```java
        MyArrays arrs = new MyArrays(20);
```
创建类之后，在没有显式提供任何构造器的情况下，系统会默认提供一个空参的构造器，且构造器权限与类相同  
当你显式提供构造器时，系统不再提供构造器  
构造器可以重载  
至今最大的练习来了  
Account.java
```java
public class Account {
    private int id;
    private double balance;
    private double annuallnterestRate;

    Account(int i, double b, double a) {
        id = i;
        balance = b;
        annuallnterestRate = a;
    }

    public void setId(int i) {
        id = i;
    }

    public int getId() {
        return id;
    }

    public void setBalance(int b) {
        balance = b;
    }

    public double getBalance() {
        return balance;
    }

    public void setAnnuallnterestRate(double a) {
        annuallnterestRate = a;
    }

    public double getAnnuallnterestRate() {
        return annuallnterestRate;
    }

    public void withdraw(double amount) {
        if (balance >= amount && amount >= 0) {
            balance -= amount;
            System.out.println("成功取出" + amount);
        } else {
            System.out.println("取款失败，金额不足");
        }
    }

    public void deposit(double amount) {
        if (amount >= 0) {
            balance += amount;
            System.out.println("成功存入" + amount);
        }
    }

}
```
Customer.java  
```java
public class Customer {
    private String firstName;
    private String lastName;
    private Account account;

    public Customer(String f, String l) {
        firstName = f;
        lastName = l;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getlastName() {
        return lastName;
    }

    public void setAccount(Account a) {
        account = a;
    }

    public Account getAccount() {
        return account;
    }

}
```
CustomerTest.java  
```java
public class CustomerTest {
    public static void main(String[] args) {
        Customer customer = new Customer("ying", "huolight");
        Account account = new Account(114514, 67000, 0.013);

        customer.setAccount(account);  //这是一个要点，将Customer类和Account类建立起关系
        //这里把地址传了过去，意味着customer类已经有权力对Account类进行修改
        customer.getAccount().deposit(10000);
        customer.getAccount().withdraw(6700);

        System.out.println("用户 [" + customer.getlastName() + " " + customer.getFirstName()
                + "]的帐号ID为" + customer.getAccount().getId() + " 其账户年利息为" + customer.getAccount().getAnnuallnterestRate() * 100 + "%"
                + " 目前账户持有金额为" + customer.getAccount().getBalance());
    }
}
```
上述其实可以使用一个匿名对象  
`customer.setAccount(new Account(114514, 67000, 0.013));`  

## 面向对象初阶阶段性知识补充
### 类中属性赋值过程  
在类的属性中，可以有多个位置给属性赋值  
① 默认初始化  
② 显式初始化  
③ 构造器中初始化  
④ 通过"对象.属性"或"对象.方法"的方式，给属性赋值  

这四个位置有一定的顺序，1 - 2 - 3 - 4  
后续还会出现代码块，代码块和显式初始化处同一位置  
Test.java  
```java
class Test {
    private int j = 1;

    public Test() {
        j = 10;
    }

    public void setJ(int setJ) {
        j = setJ;
    }

    public int getJ() {
        return j;
    }

}
```
ArbitrayTest.java  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Test ts = new Test();
        ts.setJ(2);
        System.out.println(ts.getJ());
    }
}
```

## JavaBean（概念）
JavaBean是一种Java语言写成的可重用组件  
符合如下标准的Java类都可以被称为JavaBean  
1. 类是公共的  
2. 有一个无参的公共的构造器  
3. 有属性，且有对应的get、set方法  

用户可以使用JavaBean将功能、处理、值、数据库访问和其他任何可以用Java代码创造的对象进行
打包，并且其他的开发者可以通过内部的JSP页面、Servlet、其他JavaBean、applet程序或者应用来
使用这些对象。用户可以认为JavaBean提供了一种随时随地的复制和粘贴的功能，而不用关心任何
改变  

## UML类图
UML（Unified Modeling Language，统一建模语言），用来描述软件模型和架构的图形化语言  
常用的UML工具软件有PowerDesinger，Rose和Enterprise Architect  
UML工具软件不仅可以绘制软件开发中所需的各种图表，还可以生成对应的源代码  
在软件开发中，使用UML类图可以更加直观地描述类内部结构（类的属性和操作）以及类之间的关系（如关联、依赖、聚合等）  

```java
+表示public类型， -表示private类型，#表示protected类型
方法的写法: 方法的类型(+、-)方法名(参数名:参数类型):返回值类型
斜体表示抽象方法或类
```
[![pA6yMgU.png](https://s21.ax1x.com/2024/11/10/pA6yMgU.png)](https://imgse.com/i/pA6yMgU)  

## 面向对象-进阶
### 关键字 this
在声明一个属性对应的setXxx方法时，通过形参的结构给对应的属性赋值，如果形参名和属性名同名了，要如何区分这两个变量？  

可以通过this解决这个问题  
使用this修饰的变量表示的是属性  
```java
class Test {
    int num;

    public void setNum(int num) {
        this.num = num;
    }
}
```
this关键字可以调用的结构有成员变量，方法，构造器  
```java
//这一个其实是一个构造函数的例子
//为什么要写这么多呢，和方法重载一样
class Test {
    int i;
    int j;

    public Test() {
        //假设需要初始化50行代码
    }

    public Test(int i) {
        this();  //调用上面那个空参的构造器，必须是首行
        this.i = i;
    }

    public Test(int i, int j) {
        this(i);  //调用上面i那个构造器，必须是首行
        this.j = j;
    }
}
```
在正式进入进阶学习前，请先检验自己代码阅读能力先  
以下代码请不要进行学习  
Account.java  
```java
public class Account {
    private double balance;

    public Account(double init_balance) {
        this.balance = init_balance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amt) {
        if (amt >= 0) {
            balance += amt;
            System.out.println("成功存入>" + amt);
        }
    }

    public void withdraw(double amt) {
        if (balance >= amt && amt >= 0) {
            balance -= amt;
            System.out.println("成功取出>" + amt);
        } else {
            System.out.println("输入错误，请重新输入");
        }
    }
}
```
Customer.java  
```java
public class Customer {
    private String firstName;
    private String lastName;
    private Account account;

    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Account getAccount() {
        return account;
    }
}
```
Bank.java  
```java
public class Bank {
    private Customer[] customers;
    private int numberOfCustomer;

    public Bank() {
        customers = new Customer[10];
    }

    public void addCustomer(String firstName, String lastName) {
        Customer cust = new Customer(firstName, lastName);
        customers[numberOfCustomer++] = cust;
    }

    public int getNumberOfCustomer() {
        return numberOfCustomer;
    }

    public Customer getCustomer(int index) {
        if (index < 0 || index >= numberOfCustomer) {
            return null;
        }
        return customers[index];
    }
}
```
BankTest.java  
```java
public class BankTest {
    public static void main(String[] args) {
        Bank bank = new Bank();

        bank.addCustomer("huolight", "ying");
        bank.addCustomer("扬", "睡");
        bank.addCustomer("小雪", "南宫");
        bank.addCustomer("来听", "幻");

        bank.getCustomer(0).setAccount(new Account(10000));
        bank.getCustomer(0).getAccount().withdraw(6700);
        System.out.println("账户余额为>" + bank.getCustomer(0).getAccount().getBalance());
    }
}
```
[![pA6y3DJ.png](https://s21.ax1x.com/2024/11/10/pA6y3DJ.png)](https://imgse.com/i/pA6y3DJ)  

### 面向对象-继承
extends 继承  
`class 新建类 extends 继承类`  
继承类为父类，又名superClass，超类，基类  
新建类为子类，又名subClass，派生类  
子类会继承父类所有的属性和方法  
继承性不影响封装性  
```java
class Test {
    private int i;
    private int j;
    private int z;
}

class Test2 extends Test {
    //继承了Test类的属性i，j，z
    //但是要注意，封装性没有被打破
    private int num;
}
```
继承的实际体现  
Circle.java  
```java
public class Circle {
    private double radius;

    public Circle() {
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public double findArea() {
        return 3.14 * radius * radius;
    }
}
```
Cylinder.java  
```java
public class Cylinder extends Circle {
    private double length;

    public Cylinder() {

    }

    public Cylinder(double length) {
        this.length = length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getLength() {
        return length;
    }

    public double findVolume() {
        return 3.14 * findArea() * getLength();
    }
}
```
CylinderTest.java  
```java
public class CylinderTest {
    public static void main(String[] args) {
        Cylinder cylinder = new Cylinder();

        cylinder.setLength(1);
        cylinder.setRadius(2);
        System.out.println(cylinder.findVolume());
    }
}
```

#### 方法的重写
在先前的面向对象封装性的学习中，我们学到了四种权限修饰符  
其中有一个我们一直用不上的修饰符protected  
protected可以使用在方法的重写方面  

什么是方法的重写？  
子类所需求的功能父类无法满足时，子类对其父类的方法进行重写称为方法的重写  

注意，子类重写的方法的方法名和形参列表必须相同，子类重写的方法的权限不得小于父类  
子类不能重写父类中private修饰的方法  
若父类的方法的返回值类型为void，子类重写的方法也必须是void  
若父类的方法的返回值类型为基础数据类型，子类重写的方法的返回值类型必须与父类相同  

若父类的方法的返回值类型为引用数据类型（比如类），子类重写的方法的返回值类型与父类相同或是父类返回类型的子类  
可能下面的例子有点绕，但只能是这样了  
```java
public class Test {
    public ArbitrayTest hasNumber(ArbitrayTest hasNumber) {
        return hasNumber;
    }
}
```
```java
public class Test3 extends ArbitrayTest{
}
```
```java
public class Test2 extends Test {
    public Test3 hasNumber(Test3 hasNumber) {
        return hasNumber;
    }
}
```

#### super关键字
子类重写了父类的方法，那么子类是否可以使用重写前的方法  
在Java中，使用super关键字可以实现以上效果  

子类继承父类后，子类中定义了和父类同名的属性，是否可以在子类中区分这两个同名属性  
在Java中，也可以使用super来解决，但是我求求你不要定义同名的，别给自己整麻烦  
```java
public class Test {
    protected int i;
    protected int j;

    public int sum() {
        return i + j;
    }
}
```
```java
public class Test2 extends Test {
    private int i;
    private int j;

    public int sum() {
        return i * j;  //重写成返回乘，这里用的是目前类的i和j
    }

    public int sum2() {
        return super.i * super.j;  //父类的i和j
        //属性一般都是私有化了的，super要修饰protected的属性
        //实际开发这种写法是很少的，毕竟有javabean
        //就不要乱学代码就好了
    }

    public int sum3() {
        return super.sum();  //使用父类，即返回加
    }
}
```

##### super调用构造器
子类并不会继承父类的构造器，只能通过super调用父类的构造器  
```java
public class ArbitrayTest {
    String name;

    public ArbitrayTest(String name) {
        this.name = name;
    }

    public ArbitrayTest() {
    }
}
```
```java
public class Test extends ArbitrayTest {
    public Test(String name) {
        super(name);
    }

    public Test() {
        super();
    }
}
```
若子类构造器没有写this，也没有写super，则默认为super  

### 面向对象-多态
多态，即一个事物的多种形态  
在Java中，多态的表现为父类的引用指向子类的对象  
`Person p2 = new Man();`  
注意的是，Man类是继承Person类的  
Person.java  
```java
public class Person {
    protected String name;
    protected int age;

    public void eat() {
        System.out.println("人吃饭");
    }

    public void walk() {
        System.out.println("人走路");
    }

}
```
PersonTest.java  
```java
public class PersonTest {
    public static void main(String[] args) {
        Person p1 = new Person();  //先前的做法

        Person p2 = new Man();  //多态
        //难点是为什么要用多态性
        p2.eat();
        //p2.eat()的执行结果是男人多吃饭，也就是调用了Man类的方法
        //但是，如果你按住CTRL并点击eat跳转，我们会跳到Person类
        //这就是多态性的应用，也被称为虚拟方法调用，简称虚方法调用，或者叫动态绑定  
    }
}
```
Man.java  
```java
public class Man extends Person {
    boolean isSmoke;

    public void eat() {
        System.out.println("男人多吃饭");
    }

    public void walk() {
        System.out.println("男人应该多走路");
    }

    public void earn() {
        System.out.println("男人要挣钱养家");
    }

}
```
Woman.java  
```java
public class Woman extends Person {
    boolean isBeauty;

    public void eat() {
        System.out.println("要控制分量");
    }

    public void walk() {
        System.out.println("女人要多走路");
    }

    public void goShopping() {
        System.out.println("逛街");
    }

}
```
在多态的场景下，调用方法时  
编译器认为方法是父类类型的方法  
而实际执行是子类重写的父类方法  
（编译看左，运行看右）  

多态性的前提：  
1. 方法的重写  
2. 类的继承  
3. 针对的对象是方法而不是属性  

多态的好处与弊端：  
```java
public class PersonTest {
    public static void main(String[] args) {
        PersonTest personTest = new PersonTest();
        personTest.adopt(new Person());
        personTest.adopt(new Man());
        //在有多态性时，我们可以直接这样使用子类的方法
    }

    //在没有多态性时，我们需要使用方法的重载来实现输出子类
    //别问我为什么不直接调用Dog，我想说，我能写出这个东西来
    //一定会有我的道理
    public void adopt(Person person) {
        person.eat();
    }

    //有多态性这个不用写了
    public void adopt(Man man) {
        man.eat();
    }
}

```
多态的弊端在于  
我们创建的对象在内存中尽管加载了相应类的属性和方法  
依旧无法直接调用其相应的属性和方法  

我们无法直接调用其相应的属性和方法，但是我们可以通过间接的方法调用  
这种方法叫做向下调用  
将父类降格为子类  
```java
public class PersonTest1 {
    public static void main(String[] args) {
        Person p1 = new Man();
        //p1.earn();  对不起，做不到
        Man m1 = (Man)p1;
        m1.earn();
    }
}
```
向下转型可能会出现类型转换异常，我们需要避免这种情况  
我们可以使用instanceof判断对象是否是类的实例  
`对象 instanceof 类`  
```java
public class PersonTest1 {
    public static void main(String[] args) {
        Person p1 = new Man();
        //p1.earn();  对不起，做不到
        Man m1 = (Man) p1;
        m1.earn();

        //类型转换异常，编译器不报错
        //运行会报错
        //我们建议在使用向下转型之前使用instanceof进行判断
        Person p2 = new Woman();
        if(p2 instanceof Man) {
            Man m2 = (Man) p2;
            m2.isSmoke=true;
        }
    }
}
```

#### 多态的应用实例  
GeometricObject.java  
```java
public class GeometricObject {
    protected String color;
    protected double weight;

    protected GeometricObject() {

    }

    protected GeometricObject(String color, double weight) {
        this.color = color;
        this.weight = weight;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double findArea() {
        return 0.0;
    }
}
```
Circle.java  
```java
public class Circle extends GeometricObject {
    protected double radius;

    public Circle() {

    }

    public Circle(String color, double weight, double radius) {
        super(color, weight);
        this.radius = radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public double findArea() {
        return 3.14 * radius * radius;
    }
}
```
Cylinder.java  
```java
public class Cylinder extends Circle {
    private double length;

    public Cylinder() {

    }

    public Cylinder(String color, double weight, double radius, double length) {
        super(color, weight, radius);
        this.length = length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getLength() {
        return length;
    }

    public double findArea() {
        return 2 * 3.14 * radius * radius + 2 * 3.14 * radius * length;
    }

    public double findVolume() {
        return 3.14 * super.findArea() * getLength();
    }
}
```
MyRectangle.java  
```java
public class MyRectangle extends GeometricObject {
    private double width;
    private double heigth;

    public MyRectangle() {
    }

    public MyRectangle(String color, double weight, double width, double heigth) {
        super(color, weight);
        this.width = width;
        this.heigth = heigth;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeigth() {
        return heigth;
    }

    public void setHeigth(double heigth) {
        this.heigth = heigth;
    }

    public double findArea() {
        return width * heigth;
    }
}
```
MathUtil.java  
```java
public class MathUtil {
    /**
     * 比较两个几何图形的面积是否相等
     *
     * @param g1
     * @param g2
     * @return true or false
     */
    public static boolean equalsArea(GeometricObject g1, GeometricObject g2) {
        return g1.findArea() == g2.findArea();
    }

    /**
     * 显示几何图形的面积
     *
     * @param g
     */
    public static void displayGeometricObjectArea(GeometricObject g) {
        System.out.println(g.findArea());
    }
}
```
Test.java  
```java
public class Test {
    public static void main(String[] args) {
        GeometricObject g1 = new Cylinder("圆柱体", 1.0, 2, 4);
        GeometricObject g2 = new MyRectangle("长方形", 1.0, 2, 4);
        System.out.println(MathUtil.equalsArea(g1, g2));
        MathUtil.displayGeometricObjectArea(g1);
        MathUtil.displayGeometricObjectArea(g2);
    }
}
```

### 面向对象-Object
类java.lang.Object是类层次结构的根类，即所有的其他类的父类  
每一个类都使用Object作为超类  

Object类是Java所有类的根父类  
Object类中声明的结构（属性，方法）具有通用性  
Object类中没有声明属性，提供一个空参的构造器  
我们使用Object里面的方法  
[JAVA API Object](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/lang/Object.html)  

我们需要去学习equals()，toString()，了解clone()  
今后会学习getClass()，wait()，hasCode()，notify()，notifyAll()  

其实还有一个finalize()，这个在8版本之后都是被标记为过时，17版本之后标记为将删除  
这里就不打算讲了  

#### equals()
equals() 比较是否相等  
`对象1.equals(对象2)`  
equals()适用于所有引用数据类型，比较两个对象的地址，返回boolean类型的值  
如果比较的是两个String类，且两者对应的字符串都相同时，结果为true  
这一点说明了String类和其他引用数据类型的equals()方法不同  

与String有着类似情况的有  
File类，Date类，包装类等，都重写了equals方法，用于比较对象的实体内容是否相等  

##### 如何重写equals()
```java
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }

        //第二判断区，我们要做的就是写这个
    }
```
手写equals()方法是比较麻烦的，但还是要练习怎么去写一个  
你不练也行，实话说，以后都是生成的，只不过是为了培养逻辑思维  
我们一般选择使用ALT+INS直接生成  

#### toString()
toString() 以字符串形式输出类的信息  
`对象.toString(对象)`  
```java
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```
平时使用System.out.println()去打印引用数据类型时，其实就是使用了toString()  

和equals()一样，String类，File类，Date类，包装类等  
都重写了toString方法，用于返回实体内容  
如String类输出字符串，File输出文件路径   

没有重写的自定义类默认输出其地址值  
同样，我们也需要重写toString以方便我们使用  
你可以选择手动或ALT+INS自动生成  

## 面向对象-高级
### static 静态
在先前学习中，我们所见的成员变量均没有被static修饰，这些成员变量称为实例变量  

实例变量跟对象挂钩，不同对象各有一份实例变量  
不同对象对同一个实例变量进行修改不会影响到其他对象  

若我们想要让一个成员变量被类中的实例共享，即多个对象共用一个成员变量，我们可以使用static修饰，即类变量  

另一边，在实际开发中，有一些方法其实是与对象是没有多大关系的，我调用这个方法并不是因为你这个对象  
像这种情况下，我们可以使用static修饰方法，使其成为类方法，不需要创建对象即可使用方法  
static修饰的属性或方法也被称为静态变量或静态方法  

static可以用来修饰属性，方法，代码块，内部类  
构造器不能使用static  

静态变量和实例变量有着一定程度的区别  
不限于  
1. 个数  
静态变量在内存中只有一份，实例变量每一个对象都有一份  
2. 内存位置  
jdk6及之前，存放在方法区，jdk7之后，存放在堆空间  
实例变量则存放在堆空间的对象中  
3. 加载时机  
静态变量随着类的加载而加载  
实例变量随机对象的创建而创建  
4. 调用者  
静态变量可以被类直接调用，还可以被对象调用  
实例变量只能被对象调用  
5. 消亡时机  
静态变量随着类的卸载而消亡    
实例变量对象的消亡而消亡  

静态方法内部能够调用静态属性和静态方法  
但是不能调用其他非静态属性  
静态方法可以通过`类.静态方法`直接调用  
同一个类调用可以直接`静态方法`就可以了  
非静态方法则能够调用类中任何方法，通过`print()`这种形式调用  

### 单例设计模式（兴趣阅读）
#### 设计模式概述
**设计模式**是在大量的`实践中总结`和`理论化`之后优选的代码结构、编程风格、以及解决问题的思考方式  
设计模式免去我们自己再思考和摸索，就像是经典的棋谱，不同的棋局，我们用不同的棋谱，"套路"  

经典的设计模式共有23种。每个设计模式均是特定环境下特定问题的处理方法  
[![pA65vfH.png](https://s21.ax1x.com/2024/11/10/pA65vfH.png)](https://imgse.com/i/pA65vfH)  

> 简单工厂模式并不是23中经典模式的一种，是其中工厂方法模式的简化版  
> 对软件设计模式的研究造就了一本可能是面向对象设计方面最有影响的书籍：《设计模式》：《Design Patterns: Elements of Reusable Object-Oriented Software》（即后述《设计模式》一书），由 Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides 合著（Addison-Wesley，1995）  
> 这几位作者常被称为"四人组（Gang of Four）"，而这本书也就被称为"四人组（或 GoF）"书  

##### 何为单例模式
所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类**只能存在一个对象实例**，并且该类只提供一个取得其对象实例的方法  

##### 实现思路
如果我们要让类在一个虚拟机中只能产生一个对象，我们首先必须将`类的构造器的访问权限设置为private`，这样，就不能用new操作符在类的外部产生类的对象了，但在类内部仍可以产生该类的对象。因为在类的外部开始还无法得到类的对象，`只能调用该类的某个静态方法`以返回类内部创建的对象，静态方法只能访问类中的静态成员变量，所以，指向类内部产生的`该类对象的变量也必须定义成静态的`  

##### 单例模式的两种实现方式
###### 饿汉式
```java
class Singleton {
    // 1.私有化构造器
    private Singleton() {
    }

    // 2.内部提供一个当前类的实例
    // 4.此实例也必须静态化
    private static Singleton single = new Singleton();

    // 3.提供公共的静态的方法，返回当前类的对象
    public static Singleton getInstance() {
        return single;
    }
}
```

###### 懒汉式
```java
class Singleton {
    // 1.私有化构造器
    private Singleton() {
    }
    // 2.内部提供一个当前类的实例
    // 4.此实例也必须静态化
    private static Singleton single;
    // 3.提供公共的静态的方法，返回当前类的对象
    public static Singleton getInstance() {
        if(single == null) {
            single = new Singleton();
        }
        return single;
    }
}
```

##### 饿汉式 vs 懒汉式
饿汉式：  
- 特点：`立即加载`，即在使用类的时候已经将对象创建完毕  
- 优点：实现起来`简单`；没有多线程安全问题  
- 缺点：当类被加载的时候，会初始化static的实例，静态变量被创建并分配内存空间，从这以后，这个static的实例便一直占着这块内存，直到类被卸载时，静态变量被摧毁，并释放所占有的内存。因此在某些特定条件下会`耗费内存`  

懒汉式：  
- 特点：`延迟加载`，即在调用静态方法时实例才被创建  
- 优点：实现起来比较简单；当类被加载的时候，static的实例未被创建并分配内存空间，当静态方法第一次被调用时，初始化实例变量，并分配内存，因此在某些特定条件下会`节约内存`  
- 缺点：在多线程环境中，这种实现方法是完全错误的，`线程不安全`，根本不能保证单例的唯一性  
  - 说明：在多线程章节，会将懒汉式改造成线程安全的模式  

#### 单例模式的优点及应用场景
由于单例模式只生成一个实例，减少了`系统性能开销`，当一个对象的产生需要比较多的资源时，如读取配置、产生其他依赖对象时，则可以通过在应用启动时直接产生一个单例对象，然后永久驻留内存的方式来解决  

举例：  
[![pA65zpd.png](https://s21.ax1x.com/2024/11/10/pA65zpd.png)](https://imgse.com/i/pA65zpd)  

**应用场景**
- Windows的Task Manager (任务管理器)就是很典型的单例模式  
- Windows的Recycle Bin (回收站)也是典型的单例应用，在整个系统运行过程中，回收站一直维护着仅有的一个实例  
- Application 也是单例的典型应用  
- 应用程序的日志应用，一般都使用单例模式实现，这一般是由于共享的日志文件一直处于打开状态，因为只能有一个实例去操作，否则内容不好追加  
- 数据库连接池的设计一般也是采用单例模式，因为数据库连接是一种数据库资源  

### 面向对象-类-代码块（初始化块）
代码块：用来初始化类或对象的信息，主要是他们的成员变量  
```java
    {

    }

    static {

    }
```
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.eat();
    }
}

class Person {
    String name;
    int age;

    public void eat() {
        System.out.println("人吃饭");
    }

    public void walk() {
        System.out.println("人走路");
    }

    {
        System.out.println("114514");
    }

    //代码块只能被static修饰
    static {
        System.out.println("415411");
    }
}
```
上述代码运行的结果是  
```
415411
114514
人吃饭
```
经过我的测试，只要调用了类，就会运行代码块  
类的加载会运行静态代码块  
对象的创建会运行非静态代码块  
`Person.name`像这种直接调用类只会加载静态代码块  
值得注意的是，静态代码块只会执行一次，因为类只加载一次  
非静态代码块会随着对象的创建而运行  
也就是可能会运行多次  

代码块可以用于初始化属性，声明变量，调用属性或方法，还能输出内容，不过需要区分静态与非静态  

#### 多重代码块  
```java
    {
        System.out.println("111111");
    }

    {
        System.out.println("222222");
    }

    static {
        System.out.println("333333");
    }

    static {
        System.out.println("444444");
    }
```
代码块可以写多个，执行的顺序按照代码的顺序来执行  
但实际开发中不必要写多重代码块  
```java
    {
        System.out.println("新用户创建");
        registrationTime = System.currentTimeMillis();
    }

    public User() {
        userName = System.currentTimeMillis() + "";
        password = "123456";
    }

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
```
像这样不同构造器有相同的代码时，我们可以使用代码块来代替  
代码块并不是必须的，我们还可以通过构造器调用构造器实现类似效果  
```java
    public User() {
        System.out.println("新用户创建");
        registrationTime = System.currentTimeMillis();
        userName = System.currentTimeMillis() + "";
        password = "123456";
    }

    public User(String userName, String password) {
        this();
        this.userName = userName;
        this.password = password;
    }
```

### final 关键字
final，翻译过来是最终的  
final关键字可以修饰类，方法，变量  

当final修饰类时，表示类无法被继承  
final修饰方法时，方法无法被重写，但可以被重载  
final修饰变量时，变量值无法更改  

final与static搭配  
修饰成员变量时，成员变量兼具两者的效果  
这种变量称为全局常量  

### 面向对象-抽象类
最初设计时，或者设计过程中，将一个类设计成没有具体的实例的类，这样的类称为抽象类  

在先前，我们创建过一个几何图形类，以及相应的子类，圆，圆柱，棱形等，你会发现其中定义了求面积，或求周长等通用型方法，这些特征是所属于几何图形类的，然而，几何图形太过于抽象，无法对其求面积，求周长有明确的方法写法，只能交给子类去写方法，父类则是提供了一个方法签名，但是没有方法体，像这样只有方法签名，没有方法体的方法称为抽象方法，在Java中，规定包含抽象方法的类必须是抽象类  

我们可以使用abstract来修饰类，声明这是一个抽象类  
同样，我们可以使用abstract来修饰方法，声明这是一个抽象方法  
```java
public abstract class Test {
    public abstract int getSum();
    public abstract int getAverage(int len);
}
```
抽象类里面也可以有非抽象方法  
子类必须重写父类中所有的抽象方法才可以实例化  

### 面向对象-模板方法设计
抽象类体现的就是一种模板模式的设计，抽象类作为多个子类的通用模板，子类在抽象类的基础上进行扩展、改造，但子类总体上会保留抽象类的行为方式  

当功能内部一部分实现是确定的，另一部分实现是不确定的，这时可以把不确定的部分暴露出去，让子类去实现  

模板方法设计是基于抽象类的基础来实现的  
例如，计算某段代码运行时间  
```java
public abstract class Test {
    public void spendTime() {
        long start = System.currentTimeMillis();

        code();

        long end = System.currentTimeMillis();
        System.out.println("花费的时间为" + (end - start));
    }

    public abstract void code();
}

class PrintPrimeNumber extends Test {
    public void code() {
        for (int i = 0; i < 100000; i++) {
            System.out.println("Hello World");
        }
    }
}

class ArbTest {
    public static void main(String[] args) {
        PrintPrimeNumber primeNumber = new PrintPrimeNumber();
        primeNumber.spendTime();
    }
}
```

### 面向对象-接口
关键字 interface  
接口就是规范，定义的是一组规则，体现了现实世界中“如果你是/要...则必须能...”的思想  
继承是一个"是不是"的is-a关系，而接口实现则是"能不能"的`has-a`关系  

> 接口的本质是契约、标准、规范，就像我们的法律一样，制定好后大家都要遵守  

接口内部结构说明  
可以声明：  
属性必须被public static final共同修饰  

方法：  
在jdk8之前，只能声明抽象方法，修饰为public abstract  
jdk8：新增声明静态方法，默认方法  
jdk9：新增声明私有方法  

不可以声明：  
构造器，因为根本没有  
```java
public class ArbitrayTest implements Flyable {
    public static void main(String[] args) {

        System.out.println(Flyable.MIX_SPEED);

        ArbitrayTest arbTest = new ArbitrayTest();
        arbTest.fly();

        Flyable.staticMethod();  //静态方法，只能被接口调用
        arbTest.defaultMethod();  //默认方法
    }

    public void fly() {
        System.out.println("飞起来");
    }

    public void defaultMethod() {  //默认方法可以被重写
        System.out.println("默认方法可以被重写");
    }

}

interface Flyable {
    //可以省略声明
    public static final double MIN_SPEED = 0;
    public static final double MIX_SPEED = 20;
    double DEFFER = 1.0;

    public abstract void fly();  //jdk8之前

    public static void staticMethod() {  //jdk 8 静态方法
        System.out.println("jdk8静态方法");
    }

    public default void defaultMethod() {  //jkd 8 默认方法
        System.out.println("jdk8默认方法");
    }

    private void privateMethod() {  //jdk 9 私有方法
        //提供一个公用代码区
    }

}
```

#### 接口与类的关系
类可以使用关键字`implements`接入接口，获取其中的属性和方法  
类可以接入多个接口  
```java
class ArbTest implements Flyable, CanAttack {

}
```
我们称接入接口的方法是实现类  

#### 接口的多继承
相较于类的单继承，接口能够实现多继承  
```java
interface Flyable extends AA, BB {

}
```

#### 接口的多态性
`接口名 变量名 = new 实现类的对象`  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Flyable fly = new Bullet();
        fly.fly();
    }
}

interface Flyable {
    public static final double MIN_SPEED = 0;
    public static final double MIX_SPEED = 20;
    double DEFFER = 1.0;

    public abstract void fly();

}

class Bullet implements Flyable {
    public void fly() {
        System.out.println("你妈妈飞了");
    }
}
```

#### 匿名实现类的创建对象
太tm抽象了  
`接口名 变量名 = new 接口名()`  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Flyable fly = new Flyable() {
            public void fly() {
                System.out.println("抽象啊啊啊啊");
            }
        };
        fly.fly();
    }
}

interface Flyable {
    public static final double MIN_SPEED = 0;
    public static final double MIX_SPEED = 20;
    double DEFFER = 1.0;

    public abstract void fly();
}
```

#### 匿名实现类的创建匿名对象
喵？  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        Bullet bullet = new Bullet();
        bullet.ToPrint(new Flyable() {
            public void fly() {
                System.out.println("匿名对象我喜欢你");
            }
        });
    }
}

interface Flyable {
    public static final double MIN_SPEED = 0;
    public static final double MIX_SPEED = 20;
    double DEFFER = 1.0;

    public abstract void fly();
}

class Bullet {
    public void ToPrint(Flyable fly) {
        fly.fly();
    }
}
```

#### 接口棱形继承
棱形继承是C++的说法，这里我直接拿来用了  
```java
public class Test implements interfaceTest1, interfaceTest2 {
    public static void main(String[] args) {
        Test test = new Test();
        test.defaultMethod();  //不允许，发生接口冲突，必须重写
    }

    public void defaultMethod() {
        System.out.println("棱形继承测试3");

        toPrint();  //自己类的方法
        interfaceTest1.super.defaultMethod();  //调用接口1的方法
    }

    public void toPrint() {
        System.out.println("输出");
    }
}

interface interfaceTest1 {
    public default void defaultMethod() {
        System.out.println("棱形继承测试1");
    }
}

interface interfaceTest2 {
    public default void defaultMethod() {
        System.out.println("棱形继承测试2");
    }
}
```

#### 类的优先原则
```java
public class Test extends Test2 implements interfaceTest1 {
    public static void main(String[] args) {
        Test test = new Test();
        test.defaultMethod();
    }
}

class Test2 {
    public void defaultMethod() {
        System.out.println("棱形继承测试-类");
    }
}

interface interfaceTest1 {
    public default void defaultMethod() {
        System.out.println("棱形继承测试-接口");
    }
}
```

#### 接口应用的体现
interface CompareObject  
```java
interface CompareObject {
    public abstract int compareTo(Object o);
}
```
Circle.java  
```java
public class Circle {
    private double radius;

    public Circle() {
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String toString() {
        return "圆[" +
                "半径=" + radius +
                ']';
    }
}
```
ComparableCircle.java  
```java
public class ComparableCircle extends Circle implements CompareObject {

    public ComparableCircle() {
    }

    public ComparableCircle(double radius) {
        super(radius);
    }

    public int compareTo(Object o) {
        if (this == o) {
            return 0;
        }

        if (o instanceof ComparableCircle) {
            ComparableCircle c = (ComparableCircle) o;

            if (this.getRadius() > c.getRadius()) {
                return 1;
            } else if (this.getRadius() < c.getRadius()) {
                return -1;
            } else {
                return 0;
            }
            //第二种写法
//            return Double.compare(this.getRadius(), c.getRadius());
//        } else {
//            return 2;
        } else {
            return 2;
            //else只有学习了抛出异常你才能写，目前只能随便写
        }
    }
}
```
InterfaceTest.java  
```java
public class InterfaceTest {
    public static void main(String[] args) {
        ComparableCircle c1 = new ComparableCircle(2.3);
        ComparableCircle c2 = new ComparableCircle(5.3);
        int compareValue = c1.compareTo(c2);
        if (compareValue > 0) {
            System.out.println("c1大");
        } else if (compareValue < 0) {
            System.out.println("c2大");
        } else {
            System.out.println("一样大");
        }
    }
}
```

### 类的成员-内部类
用得很少，其实，应该只有5%，可以考虑只是简单了解  
将一个类A定义在另一个类B里面，里面的那个类A就称为`内部类`，类B则称为`外部类`  

具体来说，当一个事物A的内部，还有一个部分需要一个完整的结构B进行描述，而这个内部的完整的结构B又只为外部事物A提供服务，不在其他地方单独使用，那么整个内部的完整结构B最好使用内部类  

#### 内部类的分类
鉴于类的位置，可以分为`成员内部类`和`局部内部类`  

成员内部类又分为静态成员内部类，非静态成员内部类  
局部内部类分为匿名局部内部类，非匿名局部内部类  
```java
public class ArbitrayTest {

    public ArbitrayTest() {  //构造器
        class InnerClass2 {

        }
    }

    static class ArbTest {  //静态成员内部类

    }

    class ArbTest2 {  //非静态成员内部类

    }

    public void method() {  //方法
        class InnerClass1 {  //局部内部类

        }
    }
}
```

#### 成员内部类的理解
从类的角度来看，内部类就是个类，具有类的相关特征  
可以声明属性，构造器，代码块，内部类，方法  
内部类还可以进行继承，接口  
可以使用final，abstract修饰  

从外部类的成员的角度来看，内部类可以调用外部类的属性，方法，内部类可以使用四种权限修饰符修饰，private是允许的  

#### 成员内部类的实例
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        ArbitrayTest.ArbTest arbTest = new ArbitrayTest.ArbTest();  //静态成员内部类的创建实例

        ArbitrayTest arbitrayTest = new ArbitrayTest();
        ArbitrayTest.ArbTest2 arbTest2 = arbitrayTest.new ArbTest2();  //非静态成员内部类的创建实例
    }

    static class ArbTest {  //静态成员内部类

    }

    class ArbTest2 {  //非静态成员内部类

    }
}
```

#### 成员内部类如何调用外部类结构
```java
public class ArbitrayTest {
    String name = "测试2";
    int age = 0;

    public void toOuter() {
        System.out.println("name>" + name + " age>" + age);
    }

    class ArbTest {
        String name = "测试1";
        int age = 0;

        public void toPrint() {
            System.out.println(name);
            System.out.println(age);

            System.out.println(this.name);
            System.out.println(ArbitrayTest.this.name);

            toOuter();
            ArbitrayTest.this.toOuter();
        }

        public void toOuter() {
            System.out.println("name>" + name + " age>" + age);
        }
    }
}
```

#### 局部内部类的基本使用
```java
public class ArbitrayTest {

    public void outMethod() {
        class A {  //局部内部类
            //声明属性，方法
        }
    }

    //开发中的场景
    public Comparable getInstance() {
        //提供实现Comparable接口的类
        //方式1：提供了接口实现类的的对象
//        class MyComparable implements Comparable {
//            public int compareTo(Object o) {
//                return 0;
//            }
//        }
//        MyComparable m = new MyComparable();
//        return m;

        //方式2：提供了接口的实现类的匿名对象
//        class MyComparable implements Comparable {
//            public int compareTo(Object o) {
//                return 0;
//            }
//        }
//        return new MyComparable();

        //方式3：提供了接口匿名实现类的对象
//            Comparable c = new Comparable() {
//                public int compareTo(Object o) {
//                    return 0;
//                }
//            };
//            return c;

        //方式4：提供了接口的匿名实现类的匿名对象
        return new Comparable() {
            public int compareTo(Object o) {
                return 0;
            }
        };

    }
}
```
编写一个匿名内部类，它继承Object，并在匿名内部类中，声明一个方法public void test()打印荧火light  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        new Object() {
            public void test() {
                System.out.println("关注见竹老师谢谢喵");
            }
        }.test();
    }
}
```

#### 内部类知识总结
```java
public class OuterClassTest2 {
    public static void main(String[] args) {

        SubA a = new SubA();
        a.method();

        //举例1：提供接口匿名实现类的对象
        A a1 = new A() {
            public void method() {
                System.out.println("匿名实现类重写的方法method()");
            }
        };

        a1.method();

        //举例2：提供接口匿名实现类的匿名对象
        new A() {
            public void method() {
                System.out.println("匿名实现类重写的方法method()");
            }
        }.method();

        //举例3：
        SubB s1 = new SubB();
        s1.method1();

        //举例4：提供了继承于抽象类的匿名子类的对象
        B b = new B() {
            public void method1() {
                System.out.println("继承于抽象类的子类调用的方法");
            }
        };

        b.method1();
        System.out.println(b.getClass());
        System.out.println(b.getClass().getSuperclass());

        //举例5：
        new B() {
            public void method1() {
                System.out.println("继承于抽象类的子类调用的方法1");
            }
        }.method1();

        //举例6：
        C c = new C();
        c.method2();

        //举例7：提供了一个继承于C的匿名子类的对象
        C c1 = new C() {
        };
        c1.method2();
        System.out.println(c1.getClass());
        System.out.println(c1.getClass().getSuperclass());


        C c2 = new C() {
            public void method2() {
                System.out.println("SubC");
            }
        };
        c2.method2();

    }
}

interface A {
    public void method();
}

class SubA implements A {

    public void method() {
        System.out.println("SubA");
    }
}

abstract class B {

    public abstract void method1();

}

class SubB extends B {

    public void method1() {
        System.out.println("SubB");
    }
}


class C {
    public void method2() {
        System.out.println("C");
    }
}
```

### 面向对象-枚举
枚举类型本质也是类，只不过枚举类型限定了对象的数量  

在jdk5之前，程序员自定义枚举类型  
jdk5之后，Java提供了关键字enum来快速定义  
注意的是，enum定义的枚举类默认继承enum类  
并且不要声明这个父类  

#### 枚举类的定义
jdk5之前的定义方式  
```java
public class ArbitrayTest {

}

class ArbTest {
    private final String testName;
    private final int index;

    private ArbTest(String testName, int index) {
        this.testName = testName;
        this.index = index;
    }

    public String getTestName() {
        return testName;
    }

    public int getIndex() {
        return index;
    }

    public static final ArbTest test1 = new ArbTest("枚举类测试1", 1);
    public static final ArbTest test2 = new ArbTest("枚举类测试2", 2);
    public static final ArbTest test3 = new ArbTest("枚举类测试3", 3);
    public static final ArbTest test4 = new ArbTest("枚举类测试4", 4);

}
```
使用enum来定义枚举类型  
```java
public class ArbitrayTest {

}

enum ArbTest {
    test1("枚举类测试1", 1),
    test2("枚举类测试2", 2),
    test3("枚举类测试3", 3),
    test4("枚举类测试4", 4);

    private final String testName;
    private final int index;

    private ArbTest(String testName, int index) {
        this.testName = testName;
        this.index = index;
    }

    public String getTestName() {
        return testName;
    }

    public int getIndex() {
        return index;
    }

}
```

#### 枚举类常用方法
String toString()：默认返回的是常量名（对象名）  
static 枚举类型[] values()：返回枚举类型的对象数组，该方法可以很方便地遍历所有的枚举值，是一个静态方法  
static 枚举类型 valueOf(String name)：可以把一个字符串转为对应的枚举类对象，要求字符串必须是枚举类对象的“名字”，如不是，会有运行时异常IllegalArgumentException  
String name():得到当前枚举常量的名称，建议优先使用toString()  
int ordinal():返回当前枚举常量的次序号，默认从0开始  

#### 枚举类实现接口
经典情况  
多个对象调用同一个方法  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        ArbTest.test1.toPrint();
    }
}

enum ArbTest implements Arb {
    //public static final ArbTest test1 = new ArbTest("枚举类测试1", 1);
    test1("枚举类测试1", 1),
    test2("枚举类测试2", 2),
    test3("枚举类测试3", 3),
    test4("枚举类测试4", 4);

    private final String testName;
    private final int index;

    private ArbTest(String testName, int index) {
        this.testName = testName;
        this.index = index;
    }

    public void toPrint() {
        System.out.println(testName);
        System.out.println(index);
    }
}

interface Arb {
    public abstract void toPrint();
}
```

枚举类情况  
各个对象重写同一方法    
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        ArbTest.test1.show();
        ArbTest.test2.show();
        ArbTest.test3.show();
        ArbTest.test4.show();
    }
}

enum ArbTest implements Arb {
    test1("枚举类测试1", 1) {
        public void show() {
            System.out.println("对象1");
        }
    },
    test2("枚举类测试2", 2) {
        public void show() {
            System.out.println("对象2");
        }
    },
    test3("枚举类测试3", 3) {
        public void show() {
            System.out.println("对象3");
        }
    },
    test4("枚举类测试4", 4) {
        public void show() {
            System.out.println("对象4");
        }
    };

    private final String testName;
    private final int index;

    private ArbTest(String testName, int index) {
        this.testName = testName;
        this.index = index;
    }
}

interface Arb {
    public abstract void show();
}
```

#### 枚举类实际例子
使用枚举类，定义员工的状态，并显示出来  
EmpolyeeTest.java  
```java
public class EmpolyeeTest {
    public static void main(String[] args) {
        Employee employee = new Employee("荧火", 18, Status.FREE);
        System.out.println(employee.toString());
    }
}
```
Status.java  
```java
public enum Status {
    BUSY, FREE, VOCATION, DIMISSION;
}
```
Employee.java  
```java
public class Employee {
    private String name;
    private int age;
    private Status status;

    public Employee() {
    }

    public Employee(String name, int age, Status status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", status=" + status +
                '}';
    }
}
```

使用枚举实现单例模式  
jdk5.0之前  
```java
public class ArbitrayTest {
    private ArbitrayTest() {

    }

    public static final ArbitrayTest arbitrayTest = new ArbitrayTest();
}
```
jdk5.0之后  
```java
public enum ArbitrayTest {
    ArbTest;
}
```

#### 面向对象-注解 Annotation
注解是从`JDK5.0`引入的，以`@注解名`在代码中存在  
```java
@Override
```
```java
@Deprecated
```
```java
@SuppressWarnings(value=”unchecked”)
```
Annotation可以像修饰符一样被使用，可用于修饰包、类、构造器、方法、成员变量、参数、局部变量的声明，还可以添加一些参数值  

注解可以在类编译、运行时进行加载，体现不同的功能  
注解可以看做是一种注释，通过使用Annotation，程序员可以在不改变原有逻辑的情况下，在源文件中嵌入一些补充信息  

然而注解是可以被编译器或其他程序读取的，程序还可以根据注解的不同，做出相应的处理  

#### 注解的相关作用
**1.生成文档相关的注解**  
```java
@author 标明开发该类模块的作者，多个作者之间使用，分割
@version 标明该类模块的版本
@see 参考转向，也就是相关主题
@since 从哪个版本开始增加的
@param 对方法中某参数的说明，如果没有参数就不能写
@return 对方法返回值的说明，如果方法的返回值类型是void就不能写
@exception 对方法可能抛出的异常进行说明 ，如果方法没有用throws显式抛出的异常就不能写
```

**在编译时进行格式检查(JDK内置的三个基本注解)**
`@Override`：限定重写父类方法，该注解只能用于方法  
`@Deprecated`：用于表示所修饰的元素(类，方法等)已过时，通常是因为所修饰的结构危险或存在更好的选择  
`@SuppressWarnings`：抑制编译器警告  

**跟踪代码依赖性，实现替代配置文件功能**  

#### 基本注解的使用与自定义注解
`@Override`检测是否对父类进行了重写  
class ArbTest {
    String name;
    int index;

    public void toPrint() {
        System.out.println("测试名" + name + "测试序号" + index);
    }
}

class Test2 extends ArbTest {
    @Override  //显示声明是不是重写，相当于保护机制
    public void toPrint() {
        System.out.println("测试名" + name + "测试序号" + index);
        System.out.println("第" + index + "次测试");
    }
}

自定义注解要搭配反射用  
目前写的只有标识作用  
MyAnnotation.java  
```java
public @interface MyAnnotation {
    String value() default "测试";
}
```
ArbitrayTest.java  
```java
public class ArbitrayTest {
    public static void main(String[] args) {
        @MyAnnotation() int index = 0;
        @MyAnnotation(value = "unused") int count = 0;
    }
}
```

#### 元注解
对现有的注解进行解释说明的注解  
JDK1.5在java.lang.annotation包定义了4个标准的meta-annotation类型，它们被用来提供对其它annotation类型作说明  

**@Target**用于描述注解的使用范围  
* 可以通过枚举类型ElementType的10个常量对象来指定  
* TYPE，METHOD，CONSTRUCTOR，PACKAGE.....  

**@Retention**用于描述注解的生命周期  
* 可以通过枚举类型RetentionPolicy的3个常量对象来指定  
* SOURCE（源代码）、CLASS（字节码）、RUNTIME（运行时）  
* `唯有RUNTIME阶段才能被反射读取到`  

**@Documented**表明这个注解应该被javadoc工具记录  

**@Inherited**允许子类继承父类中的注解  

### JUnit单元测试
**黑盒测试**不需要写代码，给输入值，看程序是否能够输出期望的值  
**白盒测试**需要写代码的，关注程序具体的执行流程  

JUnit是由Erich Gamma和Kent Beck编写的一个测试框架（regression testing framework），供Java开发人员编写单元测试之用  
**JUnit测试是程序员测试，即所谓白盒测试，因为程序员知道被测试的软件如何（How）完成功能和完成什么样（What）的功能**  

要使用JUnit，必须在项目的编译路径中`引入JUnit的库`，即相关的.class文件组成的jar包，jar就是一个压缩包，压缩包都是开发好的第三方（Oracle公司第一方，我们自己第二方，其他都是第三方）工具类，都是以class文件形式存在的  

#### 如何使用JUnit
首先，我们需要下载[junit](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api)的jar包  
点击版本号，例如5.11.3，然后在Files那一栏中，点击jdk(xxx KB)，即可以下载，注意，这里使用的是比较新的版本，要搭配一些其他需求文件  
在页面中，寻找Compile Dependencies栏，将相关文件都下载  

同时，我们还需要下载[hamcrest](https://mvnrepository.com/artifact/org.hamcrest/hamcrest)的jar包  

在下载完成之后  
点击IDEA的文件栏，选择项目结构，库，点击+，添加java  
直接导入文件夹或者单独的jar  
添加之后会询问你应用在哪个模块，自行选择  
然后点击项目结构中的模块，选择依赖，看一看有没有，如果有就点击应用就可以了   

我这里使用的文件有  
1. hamcrest-3.0.jar  
2. junit-jupiter-api-5.11.3.jar  
3. junit-platform-commons-1.11.3.jar  
4. opentest4j-1.3.0.jar  
5. apiguardian-api-1.1.2.jar  

在代码上，我们使用@Test标记需要运行的方法  
```java
import org.junit.jupiter.api.Test;

public class JUnitTest {

    @Test
    public void test1() {
        System.out.println("Hello World");
    }

    @Test
    public void test2() {
        System.out.println("你好，世界");
        test3();
    }

    @Test
    public void test3() {
        System.out.println("你好");
    }

}
```
没错，你可以同时运行多个方法  
或者运行单个方法  

#### 单元测试的条件
所在的类必须是public，非抽象的，包含唯一无参数构造器  
@Test的方法必须是public，非抽象，非静态，void无返回值，()无参数的  
yysy，你完全可以写一个满足条件的单元测试方法，然后调用不满足条件的方法  

在单元测试方法中，Scanner类失效怎么解决？
打开IDEA帮助菜单，选择编辑自定义虚拟机选项，
在idea64.exe.vmoptions配置文件中加入`-Deditable.java.test.console=true`  

#### 定义test测试方法模板
打开IDEA设置，编译器，实时模板，新建一个组，起名随意，再新建一个模板，模板名称这个很重要，像你在编译器输入main一样，会弹出一个小窗口，回车就自动生成模板，这里也同理，这里的名称是test  
```java
@Test
public void test$var1$() {
    $end$;
}
```
注意，记得点击下方的更改，选择Java  
以后输入test就可以直接生成了  

注意，以后都是使用单元测试的了，后续的代码看到单元测试不要说什么  

### 面向对象-包装类
Java提供了两个类型系统，`基本数据类型`与`引用数据类型`，使用基本数据类型在于效率，然而要使用对象设计的API或新特性时，基本数据类型并不支持它们的相关特征，我们需要怎么做？  
可以使用对应的包装类来将基本数据类型转换为引用数据类型  

#### 有什么包装类
基本数据类型对于的包装类有  
基本数据类型|包装类|
:-:|:-:|
byte|Byte|
short|Short|
int|**Integer**|
long|Long|
float|Float|
double|Double|
boolean|Boolean|
char|**Character**|

#### 如何使用包装类
##### 使用包装类的构造器
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        int i1 = 10;
        Integer ii1 = new Integer(i1);  //还可以传入String类型，Float类型还可以传入double类型的
        System.out.println(ii1.toString());
    }
    //  报错无所谓，能用，只不过是被标记废弃了
}
```

##### 使用valueOf
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        int i1 = 10;
        Integer ii1 = Integer.valueOf(i1);
        System.out.println(ii1.toString());
    }
}
```

#### 将包装类转换成基本数据类型
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        int i1 = 10;
        Integer ii1 = Integer.valueOf(i1);
        int i2 = ii1.intValue();
    }
}
```

你先别急  
在jdk5.0时，有一个新特性，叫做自动装箱和自动拆箱  
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        //自动装箱
        int i1 = 10;
        Integer i11 = i1;
        Integer i12 = 10;
        System.out.println(i1);
        System.out.println(i11);
        System.out.println(i12);

        System.out.println();
        
        //自动拆箱
        Integer i21 = Integer.valueOf(10);
        int i2 = i21;
        int i3 = Integer.valueOf(10);
        System.out.println(i21);
        System.out.println(i2);
        System.out.println(i3);
    }
}
```

#### 自定义包装类
```java
public class MyInteger {
    int value;

    public MyInteger() {
    }

    public MyInteger(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }
}
```

#### 基本数据类型，包装类与String
##### 基本数据类型，包装类转变成String
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        int i1 = 10;
        String str = String.valueOf(i1);
        System.out.println(str);  //带引号的

        int i11 = 10;
        String str2 = String.valueOf(i11);
        System.out.println(str2);

        int i2 = 11;
        String str3 = i2 + "";
        System.out.println(str3);
    }
}
```

##### String转变成基本数据类型，包装类
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {
        String str = "11";
        int i1 = Integer.parseInt(str);  //parseXxx，具体自己查API，不可能什么都讲的
    }
}
```

#### 包装类中有趣的现象
```java
import org.junit.jupiter.api.Test;

public class ArbitrayTest {
    @Test
    public void test() {

        Integer i = new Integer(1);
        Integer j = new Integer(1);
        System.out.println(i == j);  //false

        Integer x = 1;
        Integer y = 1;
        System.out.println(x == y);  //true

        Integer m = 128;
        Integer n = 128;
        System.out.println(m == n);  //false

    }
}
```
具体解释上网查Integer 128 陷阱  
具体要明白，要看字节码文件，简单的解释就是为了效率，java预先创建了256个Integer对象  
如果输入的值在-128~127区间，则直接返回这个对象  
或者说，直接看源代码，IDEA CTRL+n，搜索Integer，CTRL+F12搜索，valueOf  
```java
    public static Integer valueOf(int i) {
        if (i >= IntegerCache.low && i <= IntegerCache.high)
            return IntegerCache.cache[i + (-IntegerCache.low)];
        return new Integer(i);
    }
```
注意的是，Float和Double没有这个操作  