'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let div = 2;
  
  while (num !== 1){
   if (num%div === 0){
      array.push(div)
      num = num/div
  }else div++;
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  var huboCambio = true
  while(huboCambio){
    huboCambio = false
    for (let i = 0; i < array.length; i++){
    if(array[i]>array[i+1]){
      let aux = array[i]
      array[i] = array[i+1]
      array[i+1] = aux
      huboCambio =  true;
    }
  }
}
return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1; i<array.length; i++){
    var x = i - 1
    var aux = array[i]
    while(x>=0 && array[x]>aux){
      array[x+1] = array[x]
      x = x-1
    }
    array[x+1] = aux
  }
    return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let minimo = i
  
    for (let x = i+1; x < array.length; x++){
      if(array[x]<array[minimo]){
        minimo = x
      }
    }
    if(minimo !== i){
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
