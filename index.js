'use strict';

/**
 * splice one
 *
 * TODO: index > len
 * 
 * @param {Array} arr
 * @param {Number} index   index of removed item 
 * @return {Array}
 */
function spliceOne(arr, index) {
  var len = arr.length;
  if (!len) return;

  if (!index) {
    index = 0;
  }
  
  while(index < len - 1) {
    arr[index] = arr[index + 1];
    index++;
  }

  arr.length--;
}

module.exports = spliceOne;