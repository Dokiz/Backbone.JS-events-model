var app = app || {};
$ (function (){
	
	app.MyObject = Backbone.Model.extend({
		
	});
	
	app.myObject = new app.MyObject({
		name:"Rocket",
		description: "super"
});
     var json = app.myObject.toJSON();
	 console.log(json);
	
	
	
	
});