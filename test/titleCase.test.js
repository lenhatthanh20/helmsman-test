import assert from 'node:assert/strict'
import { test } from 'node:test'
import { titleCase } from '../src/titleCase.js'

test('capitalizes words and keeps small words lower case', () => {
  assert.equal(titleCase('history of the web'), 'History of the Web')
})

test('capitalizes a small word when it comes first', () => {
  assert.equal(titleCase('the lord of the rings'), 'The Lord of the Rings')
})

test('keeps acronyms as they are', () => {
  assert.equal(titleCase('using the API'), 'Using the API')
  assert.equal(titleCase('fetch a URL'), 'Fetch a URL')
  assert.equal(titleCase('API'), 'API')
})

test('normalizes mixed case words', () => {
  assert.equal(titleCase('hELLO wORLD'), 'Hello World')
})

test('returns an empty string for empty input', () => {
  assert.equal(titleCase(''), '')
})
