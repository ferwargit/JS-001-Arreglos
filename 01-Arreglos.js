// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos); // (3) ["BMW", "Mercedes Benz", "Volvo"]

// Acceder a un elemento del arreglo
console.log(autos[0]); // BMW
console.log(autos[1]); // Mercedes Benz
console.log(autos[2]); // Volvo

// ****** AGREGAR ELEMENTOS A UN ARREGLO ********

// Agregar un elemento al final del arreglo
autos.push('Audi');
console.log(autos); // (4) ["BMW", "Mercedes Benz", "Volvo", "Audi"]

// Agregar un elemento al inicio del arreglo
autos.unshift('Cadillac');
console.log(autos); // (5) ["Cadillac", "BMW", "Mercedes Benz", "Volvo", "Audi"]

// Agregar un elemento en una posición específica con el método splice
// El primer parámetro es la posición en la que se va a agregar el elemento
// El segundo parámetro es la cantidad de elementos que se van a eliminar
// El tercer parámetro es el elemento que se va a agregar
autos.splice(2, 0, 'Porsche');
console.log(autos); // (6) ["Cadillac", "BMW", "Porsche", "Mercedes Benz", "Volvo", "Audi"]

// ****** ELIMINAR ELEMENTOS DE UN ARREGLO ********

// Eliminar el último elemento del arreglo
autos.pop();
console.log(autos); // (4) ["Cadillac", "BMW", "Mercedes Benz", "Volvo"]

// Eliminar el primer elemento del arreglo
autos.shift();
console.log(autos); // (3) ["BMW", "Mercedes Benz", "Volvo"]

// Eliminar desde una posición específica con el método splice
const autos2 = ['BMW', 'Mercedes Benz', 'Volvo'];
autos2.splice(1); // Elimina desde la posición 1 hasta el final
console.log(autos2); // (1) ["BMW"]

// Eliminar desde una posición específica
const autos3 = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi', 'Cadillac', 'Porsche'];
// El 1er parámetro es la posición en la que se va a eliminar el elemento
// El 2do parámetro es la cantidad de elementos que se van a eliminar
autos3.splice(1, 2); 
console.log(autos3); // (4) ["BMW", "Audi", "Cadillac", "Porsche"]





