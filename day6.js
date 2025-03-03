const prompt = require("prompt-sync")({ sigint: true });

let foodUser = "";
let category = "";
let vegetables = [];
let fruits = [];
let meat = [];

let error = "** Error, no se reconoce la respuesta **\n";
let notFoundProduct = "** Producto no encontrado **\n";

let addMore = "SI";
let deleteProduct = "";
let indexProduct = -1;

while (addMore !== "NO") {
    addMore = prompt(
        "¿Deseas agregar productos en tu lista de mercado? Responde si o no: "
    ).toUpperCase();

    while (addMore != "SI" && addMore != "NO") {
        console.log(error);
        addMore = prompt(
            "\n¿Deseas agregar comida en tu lista de mercado? Responde si o no: "
        ).toUpperCase();
    }

    if (addMore === "SI") {
        foodUser = prompt("Nombre del producto: ").toUpperCase();
        category = prompt(
            "Categoria (Vegetales, Frutas, Carnicos): "
        ).toUpperCase();
        if (category == "VEGETALES") {
            vegetables.push(foodUser);
        } else if (category == "FRUTAS") {
            fruits.push(foodUser);
        } else if (category == "CARNICOS") {
            meat.push(foodUser);
        } else {
            console.log("** Categoria no existente **");
        }
    } else {
        break;
    }

    deleteProduct = prompt(
        "¿Deseas eliminar algun producto de la lista? Responde si o no: "
    ).toUpperCase();
    while (deleteProduct != "SI" && deleteProduct != "NO") {
        console.log(error);
        deleteProduct = prompt(
            "¿Deseas eliminar algun producto de la lista? Responde si o no: "
        ).toUpperCase();
    }

    if (deleteProduct === "SI") {
        foodUser = prompt("Nombre del producto a eliminar: ").toUpperCase();
        category = prompt(
            "Categoria del producto a eliminar (Vegetales, Frutas, Carnicos): "
        ).toUpperCase();

        if (category == "VEGETALES") {
            indexProduct = vegetables.indexOf(foodUser);
            vegetables.splice(indexProduct, 1);

            if (indexProduct == -1) console.log(notFoundProduct);
            console.log(`Productos actuales ${vegetables}`);
        } else if (category == "FRUTAS") {
            indexProduct = fruits.indexOf(foodUser);
            fruits.splice(indexProduct, 1);

            if (indexProduct == -1) console.log(notFoundProduct);
            console.log(`Productos actuales ${fruits}`);
        } else if (category == "CARNICOS") {
            indexProduct = meat.indexOf(foodUser);
            meat.splice(indexProduct, 1);

            if (indexProduct == -1) console.log(notFoundProduct);
            console.log(`Productos actuales ${meat}`);
        } else {
            console.log("** Categoria no existente **");
        }
    }
}

console.log(
    `\n-----  LISTA DE PRODUCTOS  -----\nVegetales: ${vegetables}\nFrutas: ${fruits}\nCarnicos: ${meat}\n`
);

// TODO: Improvements made by AI
//const prompt = require("prompt-sync")({ sigint: true });

let categories = {
    VEGETALES: [],
    FRUTAS: [],
    CARNICOS: []
};

const errorMsg = "** Error, no se reconoce la respuesta **\n";
const notFoundMsg = "** Producto no encontrado **\n";

while (true) {
    let addMore = prompt("¿Deseas agregar productos en tu lista de mercado? (Si/No): ").toUpperCase();
    
    while (addMore !== "SI" && addMore !== "NO") {
        console.log(errorMsg);
        addMore = prompt("¿Deseas agregar productos en tu lista de mercado? (Si/No): ").toUpperCase();
    }

    if (addMore === "NO") break;

    let foodUser = prompt("Nombre del producto: ").toUpperCase();
    let category = prompt("Categoría (Vegetales, Frutas, Carnicos): ").toUpperCase();

    if (categories[category]) {
        categories[category].push(foodUser);
    } else {
        console.log("** Categoría no existente. Intenta de nuevo. **");
        continue; // Vuelve a preguntar sin añadir el producto
    }
}

// Opción de eliminar productos al final
while (true) {
    let deleteProduct = prompt("¿Deseas eliminar algún producto de la lista? (Si/No): ").toUpperCase();
    
    while (deleteProduct !== "SI" && deleteProduct !== "NO") {
        console.log(errorMsg);
        deleteProduct = prompt("¿Deseas eliminar algún producto de la lista? (Si/No): ").toUpperCase();
    }

    if (deleteProduct === "NO") break;

    let foodUser = prompt("Nombre del producto a eliminar: ").toUpperCase();
    let category = prompt("Categoría del producto a eliminar (Vegetales, Frutas, Carnicos): ").toUpperCase();

    if (categories[category]) {
        let indexProduct = categories[category].indexOf(foodUser);

        if (indexProduct !== -1) {
            categories[category].splice(indexProduct, 1);
            console.log(`Producto eliminado. Lista actualizada: ${categories[category]}`);
        } else {
            console.log(notFoundMsg);
        }
    } else {
        console.log("** Categoría no existente. Intenta de nuevo. **");
    }
}

// Mostrar la lista final
console.log("\n-----  LISTA DE PRODUCTOS  -----");
for (let cat in categories) {
    console.log(`${cat}: ${categories[cat].join(", ") || "Ninguno"}`);
}
