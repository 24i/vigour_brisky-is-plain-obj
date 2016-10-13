# brisky-is-plain-obj

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/brisky-is-plain-obj.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-is-plain-obj)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-is-plain-obj.svg)](https://badge.fury.io/js/brisky-is-plain-obj)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-is-plain-obj/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-is-plain-obj?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc isPlain -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var plain = isPlain(obj)

Checks whether an object is a plain object (excludes streams, buffers, vigour-base objects and null)
- **obj** (*object*) - the object to check
- **returns** (*boolean*) plain - `true` if *obj* is a plain object, `false` otherwise

<!-- VDOC END -->

```javascript
const isPlain = require('brisky-is-plain-obj')
isPlain({}) // true
isPlain(new Base({})) // false
```