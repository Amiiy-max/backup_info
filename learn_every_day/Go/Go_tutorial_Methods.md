### Methods
> *Go 没有类*, define methods on types.   
> A method is a function with a special *receiver* argument.方法接收者
```Go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Abs2(v Vertex) float64 {         //a method is just a function with a receiver argument.
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

type MyFloat float64

func (f MyFloat) Abs() float64 {      //method receiver必须defined in the *same package*, 包括int等内置类型
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
	fmt.Println(Abs2(v))
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
}
```

