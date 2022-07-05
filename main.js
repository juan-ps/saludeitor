//Programa que saluda al usuario a través de la consola las veces que quiera

let multiplo = parseInt(prompt("Ingrese la cantidad de saludos que quiera recibir"));
let nombre = prompt("Ingrese su nombre a continuación");
alert("A continuacion le pedimos que abra la consola con F12 para ver nuestros saludos :)");
for (let i = 1; i <= multiplo; i++){
    console.log(`Hola ${nombre}!`);
}
if (multiplo <= 0){
    console.log(`Bueno ${nombre}, aunque no quieras que te salude, te saludo igual... Hola! :)`)
}
console.log ("Gracias por utilizar nuestro programa!");