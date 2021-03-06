
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isSubsequence = (sub, str) => {
  if (!sub) return true
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[count]) {
      count += 1
      if (count === sub.length) {
        return true
      }
    }
  }
  return false
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(isSubsequence('abc', 'ahbgdc'), true)
assert.equal(isSubsequence('axc', 'ahbgdc'), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
