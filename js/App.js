(function(){
	
	function init(){
		var canvas = document.querySelector("canvas");
	    var context = canvas.getContext("2d");
	    new Painter(context,canvas);
    }
	
	init();
})();
