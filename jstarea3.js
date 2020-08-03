document.querySelector('#boton').onclick = function(){
    
    let resultado = document.querySelector('#resultado');
      
   resultado.innerText = calcularDuracionDeVideo();
                 
     return false 
}


function calcularDuracionDeVideo(){
    const horasVideo = Number (document.querySelector('#horas')).value;
    const minutosVideo = Number  (document.querySelector('#minutos')).value;
    const segundosVideo = Number (document.querySelector('#segundos')).value;
     
    return horasVideo + minutosVideo + segundosVideo;
}   