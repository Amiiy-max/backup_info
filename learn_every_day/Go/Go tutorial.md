### Flow Control
#### 牛顿法实现开方函数
```
package main
import "fmt"
func Sqrt(x float64) float64 {
	z := 1.0
	for i := 0; i < 10; i++ {
		z = z - (z*z-x)/(2*z)
		fmt.Println(z)
	}
	return z
}
func main() {
	fmt.Println(Sqrt(4))
}
```
#### switch
>Go's switch cases need not be constants, and the values involved need not be integers.
>switch true ==> 长的 if-then-else 链

#### defer
>defer 语句会延迟函数的执行直到上层函数(surrounding function)返回。延迟调用的参数会立刻生成，但是在上层函数返回前函数都不会被调用。
>defer 栈: 后进先出的顺序调用被延迟的函数

### More Types
#### pointer (holds the memory address of a value)
类型 *T 是指向类型 T 的值的指针。其零值是 `nil`。
```
var p *int
```
& 符号会生成一个指向其作用对象的指针。
```
i := 42
p = &i
```
*符号表示指针指向的底层的值。
```
fmt.Println(*p) // 通过指针 p 读取 i
*p = 21         // 通过指针 p 设置 i
```
>这也就是通常所说的“间接引用”或“非直接引用”。

>与 C 不同，Go 没有指针运算。

#### struct (a collection of fields.)
```
type Vertex struct {		//(type的含义跟其字面意思相符)
	X int
	Y int
}
var (				//*Struct Literals*
	v1 = Vertex{1, 2}  	// has type Vertex
	v2 = Vertex{X: 1}  	// Y:0 is implicit
	v3 = Vertex{}      	// X:0 and Y:0
	p1  = &Vertex{1, 2} 	// has type *Vertex
)
func main() {
	v := Vertex{1, 2}
	v.X = 4			//(结构体字段使用点号来访问)
	p := &v
	p.X = 1e9		//(结构体字段可以通过结构体指针来访问。)
				//(*p).X ==> notation is cumbersome ==> p.X
	fmt.Println(v.X, v)
}

```

#### array ([n]T) slices ([]T)
```
func main() {
	var a [2]string
	a[0] = "Hello"
	fmt.Println(a)
	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
	//An array's length is part of its type, so arrays cannot be resized.
	
	var s []int = primes[1:4]	//half-open range 左包含 右不包含
					//p[:3] ==> 0-2, p[4:] ==> 4-end
	fmt.Println(s)
	//slice: dynamically-sized, flexible view into the elements of an *array*
	
	//default slice:
	//var a [10]int ==> a[0:10] a[:10] a[0:] a[:]
}	
```
Slices are like references to arrays(A slice does not store any data, it just describes a section of an underlying array.)
```
func main() {
	q := [3]bool{true, true, false}	//array literal
	r := []bool{true, true, false}	//Slice literal: 创建一个数组,然后references这个数组
	fmt.Println(q,r)
}
```
https://tour.golang.org/moretypes/10
