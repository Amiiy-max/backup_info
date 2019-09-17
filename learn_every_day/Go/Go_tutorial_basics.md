### Flow Control
牛顿法实现开方函数
```Go
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
```Go
var p *int
```
& 符号会生成一个指向其作用对象的指针。
```Go
i := 42
p = &i
```
*符号表示指针指向的底层的值。
```Go
fmt.Println(*p) // 通过指针 p 读取 i
*p = 21         // 通过指针 p 设置 i
```
>这也就是通常所说的“间接引用”或“非直接引用”。

>与 C 不同，Go 没有指针运算。

#### struct (a collection of fields.)
```Go
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
```Go
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
```Go
func main() {
	q := [3]bool{true, true, false}	//array literal
	r := []bool{true, true, false}	//Slice literal: 创建一个数组,然后references这个数组
	fmt.Println(q,r)
}
```
slice has both a *length* and a *capacity*.(capacity: counting from the first element in the slice)
```Go
s := []int{2, 3, 5, 7, 11, 13}	//len(s)=6 cap(s)=6 [2 3 5 7 11 13]
s = s[:0]			//len(s)=0 cap(s)=6 []
s = s[:4]			//len(s)=4 cap(s)=6 [2 3 5 7]
s = s[2:]			//len(s)=2 cap(s)=4 [5 7]
```
A nil slice has a length and capacity of 0 and has no underlying array.
#### create dynamically-sized arrays: make
```Go
func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
a := make([]int, 5)  	// printSlice("a", a) => a len=5 cap=5 [0 0 0 0 0]
b := make([]int, 0, 5) 	// printSlice("b", b) => b len=0 cap=5 []
```
#### Appending to a slice (Go provides a built-in ***append*** function).
```Go
var s []int
s = append(s, 2, 3, 4)
```

#### Range (The range form of the *for loop* iterates over a *slice or map*.)
```Go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
	for i := range pow {
		pow[i] = 1 << uint(i) // == 2**i
	}
	for _, value := range pow {
		fmt.Printf("%d\n", value)
	}
}
```
Exercise: Slices
```Go
package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	image := make([][]uint8, dy)
	for i := range image {
		image[i] = make([]uint8, dx)
		for j := range image[i] {
			image[i][j] = uint8((i * j) / 2)
		}
	}
	return image
}

func main() {
	pic.Show(Pic)
}
```

#### map (类似struct,不过必须有键名)
map 在使用之前必须用 make 而不是 new 来创建；值为 nil 的 map 是空的，并且不能赋值。
```Go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex
var m2 = map[string]Vertex{			//map literals
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}
var m3 = map[string]Vertex{			//省略键名
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"], m2, m3)
}
```
修改map
```Go
m[key] = elem		//插入或修改一个元素
elem = m[key]		//获得元素
delete(m, key)		//删除元素
elem, ok = m[key]	//通过双赋值检测某个键存在
```
>If key is not in the map, then elem is the ***zero value*** for the map's element type.

Exercise: Maps
```Go
package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	ss := strings.Fields(s)
	wordCount := make(map[string]int)
	for _, i := range ss {
		wordCount[i] = wordCount[i] + 1
	}
	return wordCount
}

func main() {
	wc.Test(WordCount)
}
```

#### Function values
Function values may be used as function arguments and return values.
#### Function closures
A closure is a function value that references variables from outside its body.
```Go
package main

import "fmt"				//The function may access and assign to the referenced variables; 
					//in this sense the function is "bound" to the variables.
func adder() func(int) int {		//the adder function returns a closure. 
	sum := 0			//Each closure is bound to its own sum variable.
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),		//0  1  3   6  10  15  21  28  36  45
			neg(-2*i),	//0 -2 -6 -12 -20 -30 -42 -56 -72 -90
		)
	}
}
```
Exercise: Fibonacci closure
```Go
package main

import "fmt"

func fibonacci() func() int {
	v1, v2 := 0, 0
	return func() int {
		v := v1 + v2
		v1, v2 = v2, v
		if v2 == 0 && v1 == 0 {
			v1 = 1
		}
		return v
	}
}
func fibonacci2() func() int {
	pre, now := 0, 1
	return func() int {
		v := pre
		pre, now = now, pre+now
		return v
	}
}

func main() {
	f := fibonacci()
	f2 := fibonacci2()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
	for i := 0; i < 10; i++ {
		fmt.Println(f2())
	}
}
```
