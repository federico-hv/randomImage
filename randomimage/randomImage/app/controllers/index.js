var touchSound = require('com.gstreetmedia.androidtouchsound');
var player = Ti.Media.createSound({url:"/audio/audio1.wav"});
/** Para añadir eventos al iniciar **/
$.index.addEventListener('open',function(){
	deshabilitarSonido();
});

var num = 1;

$.cambiarFoto.addEventListener('click',function(e){
	reproducirSonido();
	cambiarFoto();
});

function cambiarFoto(){
	var pic = $.foto;
	
	if(num%2==0)
	{
		pic.setImage('/images/fotitos/luna.jpg');
	}
	else
	{
		pic.setImage('/images/fotitos/lunaroja.jpeg');
	}
	num++;
}

/** Esta función deshabilita el sonido por defecto en android de los elementos de la ventana 
	Debo ver como obtener todos los elementos de una ventana
**/

function deshabilitarSonido(){	
	touchSound.disable($.unoUno);
	touchSound.disable($.titulo);	
	touchSound.disable($.unoDos);
	touchSound.disable($.foto);
	touchSound.disable($.unoTres);
	touchSound.disable($.dos);
	touchSound.disable($.cambiarFoto);
}

function reproducirSonido(){
	player.play();
}


$.index.open();