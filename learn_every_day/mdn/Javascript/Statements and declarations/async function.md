## [Async function mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).  
1. Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.  
2. Top-level code, up to and **including** the first await expression (if there is one), is run synchronously.   
3. Code after each await expression can be thought of as existing in a `.then` callback.  
```
async function test1() {
  var a = await Promise.resolve('one');
  var b = a + '1';
  return b;
}

function test2() {
  return Promise.resolve('one').then(function (a) {
    var b = a + '1';
    return b;
  });
}
```

### the promise chain is not built-up in one go
```
async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))   
   const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}) // Attempt to swallow all errors...
```
> p2 will not be "wired into" the promise chain until control returns from p1.

### return await promiseValue vs. return promiseValue
return 自动封装Promise.resolve
```
async function getProcessedData(url) {
  let v
  try {
    v = await downloadData(url)
  } catch(e) {
    v = await downloadFallbackData(url)
  }
  try {
    return await processDataInWorker(v)  // Note the `return await` vs. just `return`
  } catch (e) {
    return null
  }
}
```
