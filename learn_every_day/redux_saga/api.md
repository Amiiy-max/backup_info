# [redux-saga api](https://redux-saga-in-chinese.js.org/docs/api/)
1. all: Promise.all
```
import { all, call } from `redux-saga/effects`

function* mySaga() {
  const [customers, products] = yield all([
    call(fetchCustomers),
    call(fetchProducts)
  ])
}
```
2. take: 
