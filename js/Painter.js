(function(){

    function Painter(_context,_canvas){
    	this.canvas = _canvas;
        this.context = _context;
        this.getClassName();
    }

   	//画笔核心功能
	//监听鼠标按下的事件 moveTo(鼠标按下的点)
	//监听鼠标按下并且移动的事件 lineTo(鼠标移动的点)
	//监听鼠标抬起的事件，移除鼠标移动事件
	
	Painter.prototype.getClassName = function(){
		this.audios = document.querySelector(".audios");
		
		this.huabi = document.querySelector(".huabi");
		this.huabi.addEventListener("click",function(){
			this.drawLine();
		}.bind(this));
		
		this.qingkon = document.querySelector(".qingkon");
		this.qingkon.addEventListener("click",function(){
			this.clearAll();
		}.bind(this));
		
		this.xiangpica = document.querySelector(".xiangpica");
		this.xiangpica.addEventListener("click",function(){
			this.clearLine();
		}.bind(this));
	}
	
	Painter.prototype.getColor = function(){
		this.colors = document.querySelector(".colors").value;
		this.context.strokeStyle = this.colors;
	}
	
	Painter.prototype.getNumber = function(){
		this.numbers = document.querySelector(".numbers").value;
		this.context.lineWidth = this.numbers;
	}
	
	Painter.prototype.getPlay = function(){
		this.audios.play();
	}
	
	Painter.prototype.getPause = function(){
		this.audios.pause();
	}

    Painter.prototype.drawLine = function(){
		
        var self = this;
		
        function move(event){
        	self.getPlay();
            self.context.lineTo(event.pageX,event.pageY);
            self.context.stroke();
        }

        this.canvas.addEventListener("mousedown",function(event){
        	self.getColor();
        	self.getNumber();
        	self.context.beginPath();
            self.context.moveTo(event.pageX,event.pageY);
            this.addEventListener("mousemove",move);
        });

        this.canvas.addEventListener("mouseup",function(event){
        	self.getPause();
        	this.removeEventListener("mousemove",move);
        });
    }
    
    Painter.prototype.clearAll = function(){
		this.context.clearRect(0,0,800,800);
	}
	
	Painter.prototype.clearLine = function(){
		
        var self = this;
		
        function move(event){
        	self.getPlay();
            self.context.lineTo(event.pageX,event.pageY);
            self.context.stroke();
        }

        this.canvas.addEventListener("mousedown",function(event){
        	self.context.strokeStyle = "#0094FF";
        	self.getNumber();
        	self.context.beginPath();
            self.context.moveTo(event.pageX,event.pageY);
            this.addEventListener("mousemove",move);
        });

        this.canvas.addEventListener("mouseup",function(event){
        	self.getPause();
        	this.removeEventListener("mousemove",move);
        });
    }
	
    window.Painter = Painter;
})();