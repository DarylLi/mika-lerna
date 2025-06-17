'use strict';

const mikaPackage1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(mikaPackage1(), 'Hello from mikaPackage1');
console.info('mikaPackage1 tests passed');
