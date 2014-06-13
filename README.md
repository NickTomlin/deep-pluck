Pluck Deep
---

``pluckDeep(<haystack>, <needle>);``

Returns an array containing the values of all keys in haystack that match needle.

# Installation

``npm i pluckdeep``

# Example

``` javascript
// A ``<script>`` consumable build provided in ``./dist``.
var pluckDeep = require('pluck-deep');
var data = {
  foo: {
    bar: {
      'biz': 1
     }
  },
  bar:{
    baz: {
      'biz': 2
     }
  }
}

pluckDeep(data, 'biz')
=> [1, 2]
```


# Testing

Run client and server specs
```bash
$ gulp test
```

Run client specs in Safari, Chrome, and Firefox

```bash
$ gulp test:client:all
```

Run client specs on Sauce Labs (requires sauce account credentials be added to ``sauce-config.json``)

```bash
$ gulp test:client:sauce
```

Run server specs

```bash
$ gulp test:server
```

Continuously client tests (via PhantomJS) during development

```bash
$ gulp
```

# Browser Support

Chrome
Firefox
Safari
ie8+
