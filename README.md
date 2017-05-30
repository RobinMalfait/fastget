## Fastget

An alternative to lodash' `_.get()`. It can get the value from an object or an array with ease.

### Install

```
npm install fastget --save
```

or with yarn

```
yarn add fastget
```

### Usage


```js
import get from 'fastget';

const obj = {a: [{b: {c: 3}}]}

get(() => obj.a[0].b.c)
// => 3

get(() => obj.a.b.c, 'default')
// => 'default'
```

### Tests

```
npm test
```

or with yarn

```
yarn test
```

### Licence

MIT