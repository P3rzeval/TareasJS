//Tarea numero #2 clase 5 
document.querySelector("#boton").onclick = function(){
let nombre = document.querySelector("#nombres").value;
let primerApellido = document.querySelector("#primer-apellido").value;
let segundoApellido = document.querySelector("#segundo-apellido").value;
let edad = Number(document.querySelector("#edad").value);
const TituloDePagina = document.querySelector('h1');

TituloDePagina.innerText = `Bienvenido ${nombre}` 
  
  document.querySelector("#informacion").value = 
  `Nombres: ${nombre} 
  Primer apellido: ${primerApellido} 
  Segundo apellido: ${segundoApellido} 
  Edad: ${edad}`;


return false
}

//Tarea numero #3 clase 5



