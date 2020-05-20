# Markdown基本语法

[高鸿祥](https://www.jianshu.com/p/191d1e21f7ed) 

## ~~***一.标题***~~

## 二、字体

**bold***bold****bold***~~bold~~

## 三、引用

> 1
>
> > 2
>

## 四、分割线

---

***

## 五、图片

![pic alt](http://www.520touxiang.com/uploads/allimg/2018122414/h5k1awstauu.jpg)

## 六、超链接

[markdown 简书](https://www.jianshu.com/p/191d1e21f7ed)

## 七、列表

* 1
  * 1.2
    - 1.2.1
    - 1.2.2
  * 1.3
    + 1.3.1

+ 2



1. 一级有序列表内容
   1. er
   2. er

## 八、表格


表头|表头|表头
:-:|:-|-:
内容|内容|内容
内容|内容|内容

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟

## 九、代码

`create database hero;`

```
function fun(){
         echo "这是一句非常牛逼的代码";
    }
    fun();
```


## 十、流程图

```flow
st=>start: 开始
op1=>operation: My Operation 1
op2=>operation: My Operation 2
op3=>operation: My Operation 3
cond=>condition: Yes or No?
cond1=>condition: Y or N?
e=>end
st->op1->cond
cond(yes)->op2
cond(no)->op1
op2->cond1
cond1(yes)->op3
cond1(no)->e
op3->e
```
