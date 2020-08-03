document.querySelector('#boton').onclick = function(){
    
    const resultado = document.querySelector('#resultado');
      
      
   resultado.innerText = calcularDuracionDeVideo();
                 
     return false 
}


function calcularDuracionDeVideo(){
    const horasVideo =  Number(document.querySelector('#horas').value);
    const minutosVideo = Number(document.querySelector('#minutos').value);
    const segundoVideo = Number(document.querySelector('#segundos').value);



    return horasVideo + minutosVideo + segundoVideo;
}   