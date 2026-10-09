const SMALL_WORDS = new Set(['a', 'an', 'and', 'of', 'the'])

const isAcronym = (word) => /[A-Z]/.test(word) && word === word.toUpperCase()

// Capitalizes each word; small words stay lower case unless first, acronyms are kept.
export function titleCase(text) {
  let first = true
  return text.replace(/\S+/g, (word) => {
    const isFirst = first
    first = false
    if (isAcronym(word)) return word
    const lower = word.toLowerCase()
    if (!isFirst && SMALL_WORDS.has(lower)) return lower
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  })
}
