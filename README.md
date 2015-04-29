[js-itertools](http://aureooms.github.io/js-itertools)
==

Iterator and iterable code bricks for JavaScript.

```js
cycle( chain( [ [ 0 , 1 , 2 ] , [ 3 , 4 , 5 ] ] ) ) ; // 0 1 2 3 4 5 0 1 ...
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-itertools.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-itertools/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-itertools.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-itertools)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-itertools.svg?style=flat)](http://bower.io/search/?q=aureooms-js-itertools)
[![Build Status](http://img.shields.io/travis/aureooms/js-itertools.svg?style=flat)](https://travis-ci.org/aureooms/js-itertools)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-itertools.svg?style=flat)](https://coveralls.io/r/aureooms/js-itertools)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-itertools.svg?style=flat)](https://david-dm.org/aureooms/js-itertools#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-itertools.svg?style=flat)](https://david-dm.org/aureooms/js-itertools#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-itertools.svg?style=flat)](https://codeclimate.com/github/aureooms/js-itertools)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-itertools.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-itertools)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-itertools.svg?style=flat)](https://github.com/aureooms/js-itertools/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-itertools.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-itertools)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Caveat

Requires `regeneratorRuntime` to be defined, see
[babel docs](http://babeljs.io/docs/usage/polyfill/).

## Install

### jspm
```terminal
jspm install github:aureooms/js-itertools
# or
jspm install npm:aureooms-js-itertools
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-itertools
```

### bower
```terminal
bower install aureooms-js-itertools
```

### ender
```terminal
ender add aureooms-js-itertools
```

### jam
```terminal
jam install aureooms-js-itertools
```

### spm
```terminal
spm install aureooms-js-itertools --save
```

### npm
```terminal
npm install aureooms-js-itertools --save
```

## Require
### jspm
```js
let itertools = require( "github:aureooms/js-itertools" ) ;
// or
import itertools from 'aureooms-js-itertools' ;
```
### duo
```js
let itertools = require( "aureooms/js-itertools" ) ;
```

### component, ender, spm, npm
```js
let itertools = require( "aureooms-js-itertools" ) ;
```

### bower
The script tag exposes the global variable `itertools`.
```html
<script src="bower_components/aureooms-js-itertools/js/dist/itertools.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-itertools" ] , function ( itertools ) { ... } ) ;
```

## Use

```js
itertools.range( 2 , 5 , 1 ) ; // 2 3 4

itertools.range( 5 , 2 , -1 ) ; // 5 4 3

itertools.count( 2 , 3 ) ; // 2 5 8 11 14 ...

itertools.repeat( "A" ) ; // A A A ...

itertools.nrepeat( "A" , 3 ) ; // A A A

itertools.cycle( "AB" ) ; // A B A B A B ...

itertools.ncycle( "AB" , 3 ) ; // A B A B A B

itertools.head( itertools.repeat( "A" ) , 3 ) : // A A A

itertools.list( itertools.nrepeat( "A" , 3 ) ) ; // AAA

itertools.pick( "ABCD" , itertools.range( 0 , 2 , 1 ) ) ; // A C

itertools.tee( "ABC" , 2 ) ; // [ A B C , A B C ]

itertools.any( [ false* , true , ... ] ) ; // T

itertools.any( [ false* ] ) ; // F

itertools.all( [ true* , false , ... ] ) ; // F

itertools.all( [ true* ] ) ; // T

itertools.some( [ true , true , false , true , ... ] , 3 ) ; // T

itertools.some( [ true , false , true , false* ] , 3 ) ; // F

let compare = require( "aureooms-js-compare" ) ;

itertools.min( compare.increasing , [ 2 , 1 , 3 ] ) ; // 1

itertools.max( compare.increasing , [ 2 , 1 , 3 ] ) ; // 3

let operator = require( "aureooms-js-operator" ) ;

itertools.reduce( operator.mul , itertools.range( 2 , 6 , 1 ) , 1 ) ; // 120

itertools.reduce( operator.add , itertools.range( 2 , 6 , 1 ) , 1 ) ; // 15

itertools.sum( itertools.range( 1 , 6 , 1 ) ) ; // 15

itertools.chain( [ "ABC" , "XY" ] ) ; // A B C X Y

itertools.zip( [ "ABC" , "XY" ] ) ; // AX BY

itertools.compress( itertools.count( 0 , 1 ) , itertools.cycle( [ true , false ] ) ) ; // 0 2 4 6 ...

let predicate = require( "aureooms-js-predicate" ) ;

itertools.takewhile( predicate.le( 5 ) , itertools.count( 0 , 1 ) ) ; // 0 1 2 3 4 5

itertools.dropwhile( predicate.le( 5 ) , itertools.count( 0 , 1 ) ) ; // 6 7 8 ...

itertools.zip( [ itertools.count( 0 , 1 ) , "ABC" ] ) ; // 0A 1B 2C

itertools.enumerate( "ABC" ) ; // 0A 1B 2C

itertools.filter( predicate.divisible( 2 ) , itertools.count( 0 , 1 ) ) ; // 0 2 4 8 ...

itertools.filterfalse( predicate.divisible( 2 ) , itertools.count( 0 , 1 ) ) ; // 1 3 5 7 ...

itertools.group( operator.identity , "AAAABBBCCAABB" ) ; // [ A AAAA ] [ B BBB ] [ C CC ] [ A AA ] [ B BB ]

itertools.slice( itertools.count( 0 , 1 ) , 40 , 50 , 3 ) ; // 40 43 46 49

itertools.map( operator.truth , [ 0 , 1 , null , undefined , "A" ] ) ; // F T F F T

itertools.starmap( operator.mul , itertools.zip( itertools.count( 0 , 1 ) , itertools.count( 0 , 1 ) ) ) ; // 0 1 4 9 16 25 36 ...

itertools.product( [ "ABCD" , "xy" ] , 1 ) ; // Ax Ay Bx By Cx Cy Dx Dy

itertools.product( [ itertools.range( 0 , 2 , 1 ) ] , 3 ) ; // 000 001 010 011 100 101 110 111

itertools.permutations( "ABCD" , 2 ) ; // AB AC AD BA BC BD CA CB CD DA DB DC

itertools.permutations( itertools.range( 0 , 3 , 1 ) , 3 ) ; // 012 021 102 120 201 210

itertools.combinations( "ABCD" , 2 ) ; // AB AC AD BC BD CD

itertools.combinations( itertools.range( 0 , 4 , 1 ) , 3 ) ; // 012 013 023 123

itertools.combinationswithrepetition( "ABC" , 1 ) ; // A B C

itertools.combinationswithrepetition( itertools.range( 0 , 3 , 1 ) , 2 ) ; // 00 01 02 11 12 22

itertools.reversed( "ABC" ) ; // C B A

itertools.sorted( compare.increasing , [ 3 , 1 , 2 ] ) ; // 1 2 3
```

## References in Python and JavaScript

  - https://docs.python.org/3/library/itertools.html
  - http://mochi.github.io/mochikit/doc/html/MochiKit/Iter.html
  - https://github.com/cweider/js-itertools
  - http://itertoolsjs.com/
  - https://github.com/thegoleffect/node-itertools
  - http://rfw.name/sloth.js/
  - https://github.com/lodash/lodash
  - https://github.com/erikrose/more-itertools
  - https://github.com/StreetStrider/aux.js
