const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos); // (3) ["BMW", "Mercedes Benz", "Volvo"]

console.log(autos[0]); // BMW
console.log(autos[2]); // Volvo

for(let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]); 
} 

autos[1] = 'MercedesBenz';
console.log(autos); // (3) ["BMW", "MercedesBenz", "Volvo"]

autos.push('Audi');
console.log(autos); // (4) ["BMW", "MercedesBenz", "Volvo", "Audi"]


console.log(typeof autos); // object
// typeof nos dice que es un objeto


console.log(Array.isArray(autos)); // true



console.log(autos instanceof Array); // true
