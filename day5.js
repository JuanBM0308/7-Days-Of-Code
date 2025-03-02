const prompt = require('prompt-sync')({sigint: true});

let foodUser = '';
let category = '';
let vegetables = [];
let fruits = [];
let meat = [];

let error = '** Error, no se reconoce la respuesta **\n';

let addMore = 'SI';

while(addMore !== 'NO') {
    addMore =  prompt('¿Deseas agregar comida en tu lista de mercado? Responde si o no: ').toUpperCase();

    while(addMore != 'SI' && addMore != 'NO') {
        console.log(error);
        addMore = prompt('\n¿Deseas agregar comida en tu lista de mercado? Responde si o no: ').toUpperCase();
    }

    if (addMore === 'SI'){
        foodUser = prompt('Nombre del producto: ').toUpperCase();
        category = prompt('Categoria (Vegetales, Frutas, Carnicos): ').toUpperCase();
        if (category == 'VEGETALES') {
            vegetables.push(foodUser);
        } else if(category == 'FRUTAS') {
            fruits.push(foodUser);
        } else if(category == 'CARNICOS') {
            meat.push(foodUser);
        } else {
            console.log('** Categoria no existente **');
        }
    } else {
        break;
    }
}

console.log(`\n-----  LISTA DE PRODUCTOS  -----\nVegetales: ${vegetables}\nFrutas: ${fruits}\nCarnicos: ${meat}\n`);