'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivote = array[Math.floor(array.length  / 2)];
  let izq = [];
  let der = [];
  let ordenados = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivote) izq.push(array[i])
    else if(array[i] > pivote) der.push(array[i])
    else ordenados.push(array[i])
  }
  return quickSort(izq).concat(ordenados).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array;
  let division = elQueDivide(array)
  let left = division[0]
  let right = division[1]

  return mezcla(mergeSort(left), mergeSort(right));
}

function mezcla(izq, der){
  let iIzq = 0
  let iDer = 0
  let array = []

  while(iIzq < izq.length && iDer < der.length){
    if(izq[iIzq] < der[iDer]){
      array.push(izq[iIzq]);
      iIzq++;
    }else{
      array.push(der[iDer]);
      iDer++;
    } 
  }
  return array.concat(izq.slice(iIzq)).concat(der.slice(iDer));
}

function elQueDivide(array){
  let medio = Math.floor(array.length/2)
  let left = array.slice(0, medio)
  let right = array.slice(medio, array.length)
  return [left, right]
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
