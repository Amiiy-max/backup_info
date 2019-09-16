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
type Vertex struct {（而 type 的含义跟其字面意思相符。）
	X int
	Y int
}
```
