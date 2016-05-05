//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page3').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	
	
	//reproducir las notas
	
	$('.imgcapa').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.imgcapa').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready