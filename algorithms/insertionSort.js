
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [3,2,4,6,7,0,1,8,5,9]
assert.deepEqual(insertionSort(arr), [0,1,2,3,4,5,6,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
