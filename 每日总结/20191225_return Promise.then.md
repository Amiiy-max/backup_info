问题：return promise.then(); 返回值是第一个Promise还是第二个Promise?还是Promise链？
```
function test() {
  return new Promise((resolve, reject) => {
    console.log(0)
    setTimeout(resolve, 3000);
  }).then(()=> {
    console.log(1);
    return 1;
  });
}

test().then((res)=>console.log(2, res))
console.log(3)
```
==>
```
0
3

1
2 1
```
