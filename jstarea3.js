document.querySelector('#boton-calcular').onclick = function () {
	// Input clase 1
	let horasClase1 = Number(document.querySelector('#horas-clase-1').value);
	let minutosClase1 = Number(document.querySelector('#minutos-clase-1').value);
	let segundosClase1 = Number(document.querySelector('#segundos-clase-1').value);
    // input clase 2
	let horasClase2 = Number(document.querySelector('#horas-clase-2').value);
	let minutosClase2 = Number(document.querySelector('#minutos-clase-2').value);
	let segundosClase2 = Number(document.querySelector('#segundos-clase-2').value);
    //  suma de los inputs
	let horas = horasClase1 + horasClase2;
	let minutos = minutosClase1 + minutosClase2;
	let segundos = segundosClase1 + segundosClase2;
    //  calculo del tiempo total
	let horasSegundos = horas * 3600;
	let minutosSegundos = minutos * 60;
	let segundosTotales = segundos + horasSegundos + minutosSegundos;

	let hours = Math.floor(segundosTotales / 3600);
	let minutes = Math.floor((segundosTotales % 3600) / 60);
	let seconds = segundosTotales % 60;

	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
    // resultado total
	let resultado = hours + ':' + minutes + ':' + seconds;
	document.querySelector('#resultado').innerText = resultado;

	return false;
};
