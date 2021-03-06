
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const integerToRoman = (x) => {
  let str = ''
  const symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  for (let i = 0; i < values.length; i++) {
    while (x >= values[i]) {
      str += symbols[i]
      x -= values[i]
    }
  }
  return str
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(integerToRoman(1), 'I')
assert.equal(integerToRoman(6), 'VI')
assert.equal(integerToRoman(19), 'XIX')
assert.equal(integerToRoman(46), 'XLVI')
assert.equal(integerToRoman(146), 'CXLVI')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
