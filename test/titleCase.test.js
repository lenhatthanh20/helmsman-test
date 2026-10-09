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

test('keeps multiple acronyms and a leading acronym', () => {
  assert.equal(titleCase('parse URL and API data'), 'Parse URL and API Data')
  assert.equal(titleCase('API design'), 'API Design')
})

test('capitalizes lower case words', () => {
  assert.equal(titleCase('hello world'), 'Hello World')
  assert.equal(titleCase('hello'), 'Hello')
})

test('capitalizes a small word that is the only word', () => {
  assert.equal(titleCase('of'), 'Of')
})

test('does not trim or collapse whitespace', () => {
  assert.equal(titleCase('  history of   the web '), '  History of   the Web ')
})
