# :hammer_and_wrench: [@aureooms/js-itertools](https://aureooms.github.io/js-itertools)

<p align="center">
<a href="https://xkcd.com/353">
<img src="https://imgs.xkcd.com/comics/python.png" width="450">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Python's iterable and iterator library for JavaScript.
See [docs](https://aureooms.github.io/js-itertools).
Parent is [@aureooms/js-library](https://github.com/aureooms/js-library).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
cycle( chain( [ [ 0 , 1 , 2 ] , [ 3 , 4 , 5 ] ] ) ) ; // 0 1 2 3 4 5 0 1 ...
```

[![License](https://img.shields.io/github/license/aureooms/js-itertools.svg)](https://raw.githubusercontent.com/aureooms/js-itertools/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-itertools.svg)](https://www.npmjs.org/package/@aureooms/js-itertools)
[![Build](https://img.shields.io/travis/aureooms/js-itertools/main.svg)](https://travis-ci.org/aureooms/js-itertools/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-itertools.svg)](https://david-dm.org/aureooms/js-itertools)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-itertools.svg)](https://david-dm.org/aureooms/js-itertools?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-itertools.svg)](https://github.com/aureooms/js-itertools/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-itertools.svg)](https://www.npmjs.org/package/@aureooms/js-itertools)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-itertools.svg)](https://codeclimate.com/github/aureooms/js-itertools/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-itertools.svg)](https://codeclimate.com/github/aureooms/js-itertools/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-itertools/main.svg)](https://codecov.io/gh/aureooms/js-itertools)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-itertools.svg)](https://codeclimate.com/github/aureooms/js-itertools/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-itertools/badge.svg)](https://aureooms.github.io/js-itertools/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-itertools)](https://bundlephobia.com/result?p=@aureooms/js-itertools)

## :link: References in Python and JavaScript

  - https://docs.python.org/3/library/itertools.html
  - http://mochi.github.io/mochikit/doc/html/MochiKit/Iter.html
  - https://github.com/cweider/js-itertools
  - http://itertoolsjs.com
  - https://github.com/thegoleffect/node-itertools
  - http://rfw.name/sloth.js
  - https://github.com/lodash/lodash
  - https://github.com/erikrose/more-itertools
  - https://github.com/StreetStrider/aux.js
