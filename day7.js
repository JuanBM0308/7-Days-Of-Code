// Calculator
const prompt = require('prompt-sync')({ sigint: true });

console.log('----  CALCULADORA  ----\n');

function menu() {
    let optionUser;

    do {
        console.log('Digite el número de la opción a elegir:\n');
        console.log('1) Suma\n2) Resta\n3) Multiplicación\n4) División\n5) Salir');
        
        optionUser = parseInt(prompt('\nOpción: '));

        if (optionUser < 1 || optionUser > 5 || isNaN(optionUser)) {
            console.log('** Opción no válida, intenta de nuevo **\n');
        }

    } while (optionUser < 1 || optionUser > 5 || isNaN(optionUser));

    return optionUser;
}

function getNumbers() {
    let num1 = parseInt(prompt('Digite el primer numero: '));
    let num2 = parseInt(prompt('Digite el segundo numero: '));

    return { num1 , num2 };
}


function addition(add1, add2) {
    return add1 + add2;
}

function subtraction(sub1, sub2) {
    return sub1 - sub2;
}

function multiplication(mult1, mult2) {
    return mult1 * mult2;
}

function division(div1, div2) {
    return div1 / div2;
}

while(true) {
    let optionSelect = menu();

    if (optionSelect === 5) {
        console.log('\n** Hasta la próxima **');
        break;
    } 

    let { num1, num2 } = getNumbers();
    let result = 0; 

    if (optionSelect === 1) {
        result = addition(num1, num2);
        console.log(`\n-- El resultado de la suma es: ${result} --\n`);
    }
    
    if (optionSelect === 2) {
        result = subtraction(num1, num2);
        console.log(`\n-- El resultado de la resta es: ${result} --\n`);
    }
    
    if (optionSelect === 3) {
        result = multiplication(num1, num2);
        console.log(`\n-- El resultado de la multipicacion es: ${result} --\n`);
    }
    
    if (optionSelect === 4) {
        result = division(num1, num2);
        console.log(`\n-- El resultado de la division es: ${result} --\n`);
    }   
}
