//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('g','audio/G.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('c','audio/C.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ch','audio/CH.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('o','audio/O.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('pt','audio/PT.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('v','audio/V.mp3',function(){},function(e){alert('Error '+e);});
audio.preloadFX('r','audio/R.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('j','audio/J.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('l','audio/L.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('m','audio/M.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('s','audio/S.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('z','audio/Z.mp3',function(){},function(e){alert('Error '+e);});
	
	//reproducir las notas
	
	$('.contimg').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.contimg').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready