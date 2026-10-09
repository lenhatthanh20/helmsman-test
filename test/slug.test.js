import assert from 'node:assert/strict'
import { test } from 'node:test'
import { slug } from '../src/slug.js'

test('joins words with dashes', () => {
  assert.equal(slug('Hello World'), 'hello-world')
})

test('drops marks at the ends', () => {
  assert.equal(slug('  Ship it!  '), 'ship-it')
})
