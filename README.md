Pluck Deep
---

``pluckDeep(<haystack>, <needle>);``
The javascript function you (maybe never) wish you had. Returns the value of all keys in haystack, that match needle.


``` javascript
var data = {
  foo: {
    bar: {
      'biz': 1
     }
  }
  bar:{
    baz: {
      'biz': 2
     }
  }
}

pluckDeep(data, 'biz')
=> [1, 2]

// functional programming is cool, right?
pluckDeep(data, 'biz')
  .reduce(function(a, x){ return a + x });
=> 3
```

As a lodash mixin:

``` javascript
// node
var pluckDeep = require('pluck-deep');

_.mixin({pluckDeep: pluckDeep});

_.pluckDeep(data, 'target');
```

# Testing

Run client and server specs
```bash
$ gulp test
```

Run client specs on Sauce Labs (requires sauce account credentials be added to ``sauce-config.json``)

```bash
$ gulp test:client:sauce
```

Continuously client tests during development

```bash
$ gulp
```

