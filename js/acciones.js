// JavaScript Document

$(document).ready(function(e){
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert("Deslizo a la izquierda",function(){"Aplicacion8","Aceptar"});
});

$('#derecha').on("swiperight",function(){
	navigator.notification. confirm("¿Que quieres hacer?",function(opt){
	switch(opt)
	{
		case 1:
		$('#beep').tap(function(){
	navigator. notification.beep (1)
        });//tap beep
		break;
		
		case 2:
		$('#vibrar').tap(function(){
	      navigator .notification.vibrate (1000);
          });//tap vibrar
		break;
	}
	},"Aplicacion8","Beep,Vibrar,Cancelar");
	
});
 },false);//deviceready
});//ready