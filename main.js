$(function (){
	var object = {}; //создаеться обьект
	
	
	_.extend(object, Backbone.Events);//и посредствон андерскоер расширяем наш обьект бекбоном
	
	object.on("alert", function(msg) {  //слушаеься событие и вызываеться функия
		     alert("Triggered" + msg); 
	});
	
	
	object.on("alert", function(msg) {
		 console.log("Triggered" + msg); //вызов в консоль
	});
	
	
	object.trigger("alert","an event");//вызываеться событие алерт с параметром ан авент
    
	
	$('#btn').live('click',function(){
		object.trigger("alert","clicked");
	});
});