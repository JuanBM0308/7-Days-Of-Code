const prompt = require('prompt-sync')({sigint: true});

console.log('¡Bienvenido cibernanuta!\n');

console.log('¿En que te gustaria especializarte?');

let errorMessage = 'Digite una opcion correcta\n';

let wayDeveloper = " ";
let technologyBack = " ";
let technologyFront = " ";

// 1
while(wayDeveloper !== 'F' && wayDeveloper !== 'B') {
    wayDeveloper = prompt('Digita F, para front-end ó digita B, para back-end: ').toUpperCase();

    if(wayDeveloper !== 'F' && wayDeveloper !== 'B') {
        console.log(errorMessage);
    } else {
        if(wayDeveloper == 'F') {
            console.log('\nFelicidades futuro desarrollador Front-End');
            console.log('Podrias aprender tecnologias como React o Vue')
            while(technologyFront !== 'R' && technologyFront !== 'V') {
                technologyFront = prompt('Marca R, para React o V para Vue: ').toUpperCase();

                if(technologyFront == 'R') {
                    console.log(`\n¡Buena elección React hace tus sueños realidad!`);
                } else if (technologyFront == 'V') {
                    console.log('\n¡Genial Vue es muy utilizado en el mercado!');
                } else {
                    console.log(errorMessage);
                }
            }
        } else {
            console.log('\nFelicidades futuro desarrollador back-end');
            console.log('Podrias aprender tecnologias como C# o Java')
            while(technologyBack !== 'C' && technologyBack !== 'J') {
                technologyBack = prompt('Marca C, para C# o J para Java: ').toUpperCase();

                if(technologyBack == 'C') {
                    console.log(`\n¡Buena elección C# tiene un gran nivel de aprendizaje!`);
                } else if (technologyBack == 'J') {
                    console.log('\n¡Genial Java es muy utilizado en el mercado, junto con SpringBoot!');
                } else {
                    console.log(errorMessage);
                }
            }
        }  
    } 
}

// 2
let nextWayDeveloper = " ";

while(nextWayDeveloper !== 'SI' && nextWayDeveloper !== 'NO') {
    nextWayDeveloper = prompt('¿Deseas continuar en el area elegida? Responde SI o NO: ').toUpperCase();
    if (nextWayDeveloper == 'SI') {
        if(wayDeveloper == 'F' && technologyFront == 'R') {
            console.log('\n¡Te felicito el Fron-End con React, tiene mucho que enseñar, sigue así!');
        } else if (wayDeveloper == 'F' && technologyFront == 'V') {
            console.log('\n¡Te felicito el Fron-End con Vue, tiene mucho que enseñar, sigue así!');
        } else if (wayDeveloper == 'B' && technologyBack == 'C') {
            console.log('\n¡Te felicito el Back-End con C#, tiene mucho que enseñar, sigue así!');
        } else if (wayDeveloper == 'B' && technologyBack == 'J') {
            console.log('\n¡Te felicito el Back-End con Java, tiene mucho que enseñar, sigue así!');
        }
    } else if(nextWayDeveloper == 'NO') {
        console.log('¡Genial seras un desrrollador Full-Stack!');
    } else {
        console.log(errorMessage);
    }
}

// 3 
let arrayTechnologies = [];

let newTechnology = prompt('¿En que tecnologias te gustaria especializarte?: ');

arrayTechnologies.push(newTechnology);

let moreTechnologies = "";

let index = "SI";

while(index !== 'NO') {
    index = prompt('¿Hay alguna otra tecnología que te gustaría aprender? Responde SI o NO: ').toUpperCase();
    if (index ==  'SI') {
        moreTechnologies = prompt('Digita el nombre de la tecnologia: ');
        arrayTechnologies.push(moreTechnologies);
    }
}

console.log('Que buenas elecciones: \n')
for(let i = 0; i < arrayTechnologies.length; i++) {
    console.log(`${i}) ${arrayTechnologies[i]}`);
}