//Programa que saluda al usuario a través de la consola las veces que quiera
alert("Bienvenid@ a Saludeitor! El mejor saludador por consola de Internet")
alert("Siga las instrucciones a continuación para recibir nuestros saludos")
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