const frutas = ['Manzana', 'Pera', 'Piña', 'Sandía', 'Melón', 'Coco'];

// Iterar un arreglo con for
// 1ro: Inicializar una variable contador
// 2do: Condición
// 3ro: Incrementar el contador
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} // Manzana Pera Piña Sandía Melón Coco





// Iterar un arreglo con forEach
// El método forEach recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
frutas.forEach(function(fruta) {
    console.log(fruta);
}); // Manzana Pera Piña Sandía Melón Coco

frutas.forEach(function(fruta, index) {
    console.log(`${index}: ${fruta}`);
}); // 0: Manzana 1: Pera 2: Piña 3: Sandía 4: Melón 5: Coco

// Iterar un arreglo con map
// El método map recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método map crea un nuevo arreglo con los resultados
const numeroLetras = frutas.map(function(fruta) {
    console.log(fruta.length);
    return fruta.length;
}); // 6 4 3 6 5 4

console.log(numeroLetras); // (6) [6, 4, 3, 6, 5, 4]

// Iterar un arreglo con filter
// El método filter recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método filter crea un nuevo arreglo con los elementos que cumplan la condición
const letras5 = frutas.filter(function(fruta) {
    return fruta.length === 5;
}); // (2) ["Pera", "Melón"]

console.log(letras5); // (2) ["Pera", "Melón"]

// Iterar un arreglo con find
// El método find recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método find devuelve el primer elemento que cumpla la condición
const frutaConC = frutas.find(function(fruta) {
    return fruta.includes('C');
}); // Coco

console.log(frutaConC); // Coco

// Iterar un arreglo con reduce
// El método reduce recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método reduce devuelve un valor único
const letras = frutas.reduce(function(total, fruta) {
    return total += fruta.length;
}, 0); // 26

console.log(letras); // 26

// Iterar un arreglo con some
// El método some recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método some devuelve un booleano si al menos un elemento cumple la condición
const existeC = frutas.some(function(fruta) {
    return fruta.includes('C');
}); // true

console.log(existeC); // true

// Iterar un arreglo con every
// El método every recibe como parámetro una función
// La función recibe como parámetro el elemento del arreglo
// El método every devuelve un booleano si todos los elementos cumplen la condición
const todasTienenC = frutas.every(function(fruta) {
    return fruta.includes('C');
}); // false

console.log(todasTienenC); // false

// Iterar un arreglo con sort
// El método sort ordena los elementos de un arreglo
// El método sort ordena los elementos alfabéticamente
const frutasOrdenadas = frutas.sort();
console.log(frutasOrdenadas); // (6) ["Coco", "Manzana", "Melón", "Pera", "Piña", "Sandía"]

// Iterar un arreglo con sort y palabras con acentos
// El método sort ordena los elementos de un arreglo
// El método sort ordena los elementos alfabéticamente
const frutasOrdenadas2 = frutas.sort(function(a, b) {
    return a.localeCompare(b);
}); // (6) ["Coco", "Manzana", "Melón", "Pera", "Piña", "Sandía"]

console.log(frutasOrdenadas2); // (6) ["Coco", "Manzana", "Melón", "Pera", "Piña", "Sandía"]

// Iterar un arreglo con sort y números
// El método sort ordena los elementos de un arreglo
// El método sort ordena los elementos alfabéticamente
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosOrdenados = numeros.sort(function(a, b) {
    return a - b;
}); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numerosOrdenados); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Iterar un arreglo con reverse
// El método reverse invierte el orden de los elementos de un arreglo
const frutasReversa = frutas.reverse();
console.log(frutasReversa); // (6) ["Coco", "Sandía", "Piña", "Pera", "Melón", "Manzana"]

// Iterar un arreglo con includes
// El método includes busca un elemento en un arreglo
// El método includes devuelve un booleano
const existeMelon = frutas.includes('Melón');
console.log(existeMelon); // true

// Iterar un arreglo con indexOf
// El método indexOf busca un elemento en un arreglo
// El método indexOf devuelve el índice del elemento
const indiceMelon = frutas.indexOf('Melón');
console.log(indiceMelon); // 4