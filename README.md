:hammer_and_wrench:
[js-itertools](https://make-github-pseudonymous-again.github.io/js-itertools)
[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-itertools.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-itertools/main/LICENSE)
==

<p align="center">
<a href="https://xkcd.com/353">
<img src="https://imgs.xkcd.com/comics/python.png" width="450">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Python's iterable and iterator library for JavaScript.
Parent is [js-library](https://github.com/make-github-pseudonymous-again/js-library).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {cycle} from '@iterable-iterator/cycle';
import {chain} from '@iterable-iterator/chain';
cycle( chain( [ 0 , 1 , 2 ] , [ 3 , 4 , 5 ] ) ) ; // 0 1 2 3 4 5 0 1 ...
```

## :newspaper: Description

The goal of this project is to make (the parts that interest me of)
the following python constructs/idioms/libraries available in JavaScript under the
[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-itertools.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-itertools/main/LICENSE)
  - `iter`, `next`, `StopIteration`, `list`, `sorted`, `map`, `zip`, `filter`, `sum`, `any`, `all`, `min`, `max`
  - [itertools](https://docs.python.org/3/library/itertools.html)
  - [itertools recipes](https://docs.python.org/3/library/itertools.html#itertools-recipes)
  - [more-itertools](https://pypi.org/project/more-itertools)
  - [cardinality](https://github.com/wbolster/cardinality)
  - [`reduce`](https://docs.python.org/3/library/functools.html?highlight=reduce#functools.reduce)

The corresponding software library used to be released as a monolith.
It has since been split up into multiple packages.

## :deciduous_tree: Hierarchy

The packages are released under multiple npm @scopes.
Extra features are marked with a `*`.

### [`@iterable-iterator`](https://github.com/iterable-iterator)

  - [`@iterable-iterator/cardinality`](https://github.com/iterable-iterator/cardinality):
    `isEmpty`, `count`, ...
  - [`@iterable-iterator/chain`](https://github.com/iterable-iterator/chain):
    `chain`, `chain.from_iterable` as `_chain`
  - [`@iterable-iterator/consume`](https://github.com/iterable-iterator/consume):
    `consume(it, n)` as `consume`, `consume(it)` as `exhaust`
  - [`@iterable-iterator/convolution`](https://github.com/iterable-iterator/convolution):
    `convolve` as `convolution`, `_convolution*`
  - [`@iterable-iterator/count`](https://github.com/iterable-iterator/count):
    `count`
  - [`@iterable-iterator/cycle`](https://github.com/iterable-iterator/cycle):
    `cycle`, `ncycles` as `ncycle`
  - [`@iterable-iterator/filter`](https://github.com/iterable-iterator/filter):
    `filter`, `filtertrue`, `filterfalse`, `compress`
  - [`@iterable-iterator/group`](https://github.com/iterable-iterator/group):
    `group`, `groupby`, `by*`
  - [`@iterable-iterator/iter`](https://github.com/iterable-iterator/iter):
    `iter`
  - [`@iterable-iterator/list`](https://github.com/iterable-iterator/list):
    `list`
  - [`@iterable-iterator/map`](https://github.com/iterable-iterator/map):
    `map` (:warning: unary only), `starmap`, `pick`
  - [`@iterable-iterator/next`](https://github.com/iterable-iterator/next):
    `next`, `StopIteration`, `_next*`
  - [`@iterable-iterator/range`](https://github.com/iterable-iterator/range):
    `range`
  - [`@iterable-iterator/reduce`](https://github.com/iterable-iterator/reduce):
    `reduce`, `sum`, `any`, `all`, `some`, `min`, `max`
  - [`@iterable-iterator/repeat`](https://github.com/iterable-iterator/repeat):
    `repeat`, `nrepeat`
  - [`@iterable-iterator/reversed`](https://github.com/iterable-iterator/reversed):
    `reversed`
  - [`@iterable-iterator/round-robin`](https://github.com/iterable-iterator/round-robin):
    `roundRobin`
  - [`@iterable-iterator/select`](https://github.com/iterable-iterator/select):
    `first`, `last`, `nth*` (:sparkles: supports negative indices)
  - [`@iterable-iterator/slice`](https://github.com/iterable-iterator/slice):
    `take` (also aliased to `head`), `drop`, `trunc`, `tail`, `takewhile`, `dropwhile`, `islice` as `slice`
  - [`@iterable-iterator/sorted`](https://github.com/iterable-iterator/sorted):
    `sorted`
  - [`@iterable-iterator/tee`](https://github.com/iterable-iterator/tee):
    `tee`
  - [`@iterable-iterator/window`](https://github.com/iterable-iterator/window):
    `window*`
  - [`@iterable-iterator/zip`](https://github.com/iterable-iterator/zip):
    `zip`, `zip_longest` as `ziplongest`, `enumerate`

### [`@combinatorics`](https://github.com/computational-combinatorics)
  - [`@combinatorics/n-combinations`](https://github.com/computational-combinatorics/n-combinations): `combinations`, `_combinations*`
  - [`@combinatorics/n-multicombinations`](https://github.com/computational-combinatorics/n-multicombinations): `combinations_with_replacement` as `multicombinations`, `_multicombinations*`
  - [`@combinatorics/n-permutations`](https://github.com/computational-combinatorics/n-permutations): `permutations`, `_permutations*`

### [`@set-theory`](https://github.com/set-theory)

  - [`@set-theory/cartesian-product`](https://github.com/set-theory/cartesian-product): `product`, `diagonal*`
  - [`@set-theory/closure`](https://github.com/set-theory/closure): `closure*`



## :link: More references in Python and JavaScript

  - http://mochi.github.io/mochikit/doc/html/MochiKit/Iter.html
  - https://github.com/cweider/js-itertools
  - http://itertoolsjs.com
  - https://github.com/thegoleffect/node-itertools
  - http://rfw.name/sloth.js
  - https://github.com/lodash/lodash
  - https://github.com/StreetStrider/aux.js
