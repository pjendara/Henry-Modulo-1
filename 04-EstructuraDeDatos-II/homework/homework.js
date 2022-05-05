'use strict'
/*Ejercicio 1: Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
  Ejemplo:
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._lenght = 0;
  }
function Node(value){
  this.value = value;
  this.next = null;

}
let list = new LinkedList()

LinkedList.prototype.add = function(value){
  var node = new Node(value);
  var currentNode = this.head;
  if (currentNode === null){
    this.head = node;
    this._lenght++
    return node
  } while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._lenght++
    return node;
  }
  
LinkedList.prototype.remove = function (){
  var currentNode = this.head;
  if (currentNode === null){
    return null;
  }
  if (currentNode && currentNode.next === null ){
    var elim = currentNode.value
    this.head = null;
    this._lenght--
    return elim;
  } 
  while (currentNode.next.next){
    currentNode = currentNode.next
  }
    var elim = currentNode.next.value;
    currentNode.next = null;
    this._lenght--
    return elim;
}
  
LinkedList.prototype.search = function (value){
  var currentNode = this.head;
  
  while (currentNode) {
    if (currentNode.value === value) return value;
    else if (typeof value === "function") {
      if (value(currentNode.value)) {
      return currentNode.value;
     }  
    }
    currentNode = currentNode.next
   
  }
  return null
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){
let sum = 0;
for(let i = 0; i < key.length; i++){
  sum = sum + key.charCodeAt(i);
 }
  return sum % this.numBuckets;
 };

HashTable.prototype.set = function(key, value){
  if(typeof key !== "string") throw new TypeError ("keys must be strings")
  var i = this.hash(key)
  if(!this.buckets[i]) {
    this.buckets[i] = {}
  }
  this.buckets[i][key] = value
 }
HashTable.prototype.get = function(key){
  let i = this.hash(key)
  return this.buckets[i] ? this.buckets[i][key] : undefined
 }
HashTable.prototype.hasKey = function(key){
  var i = this.hash(key)
  return this.buckets[i].hasOwnProperty(key)
 };



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
