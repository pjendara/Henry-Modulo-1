"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  var dec = 0
  var numReverse = num.split('').reverse().join('')

  for (let i = 0; i < numReverse.length; i++) {
    dec = dec + numReverse[i] * 2 ** i;
  }
  return dec;
  
}

function DecimalABinario(num) {
  // tu codigo aca
  var bin = ""
  
  while (num > 0){
    bin = (num%2) + bin
    num = Math.floor(num/2)
  }
  return bin;
  
}

// No se pueden usar: 
// parseInt
// toString


//Por lo tanto: 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
