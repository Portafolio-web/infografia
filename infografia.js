(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"infografia_atlas_1", frames: [[1173,1228,251,200],[473,1026,146,149],[0,1026,471,385],[0,1413,296,297],[632,0,629,630],[473,1228,361,362],[632,632,629,594],[836,1228,335,262],[0,0,630,1024]]},
		{name:"infografia_atlas_2", frames: [[0,0,1669,1050],[0,1052,1196,919]]},
		{name:"infografia_atlas_3", frames: [[0,0,1266,1522]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.agricultura = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.botonabrir = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.botoncapitulo = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.capitulo1 = function() {
	this.initialize(ss["infografia_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.comida = function() {
	this.initialize(ss["infografia_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.danzas = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.esclavooos = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.esclavos = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1921,2272);


(lib.instruccion = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.musicadanza = function() {
	this.initialize(ss["infografia_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.vivienda = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.viviendaaaa = function() {
	this.initialize(ss["infografia_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Interpolación23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.esclavooos();
	this.instance.setTransform(-416.55,-417.25,1.3246,1.3246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.5,-417.2,833.1,834.5);


(lib.Interpolación20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.viviendaaaa();
	this.instance.setTransform(-370.35,-601.95,1.1757,1.1757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370.3,-601.9,740.6,1203.9);


(lib.Interpolación19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.musicadanza();
	this.instance.setTransform(-529.55,-636.65,0.8366,0.8366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-529.5,-636.6,1059.1,1273.3000000000002);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.comida();
	this.instance.setTransform(-598,-459.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-598,-459.5,1196,919);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.instruccion();
	this.instance.setTransform(-271.05,-256,0.8619,0.8619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-256,542.1,512);


(lib.cerrarprimero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.capitulo1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1669,1050);


(lib.btn_vivienda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.vivienda();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-17,y:-13},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-13,368.5,288.2);


(lib.btn_esclavos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.esclavos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-18,y:-18},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18,397.1,398.2);


(lib.btn_danzas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.danzas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-15,y:-15},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,325.6,326.7);


(lib.btn_comida = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.agricultura();
	this.instance.setTransform(0,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.1,x:-12,y:63},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,63,273.6,220);


(lib.btn_capitulo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.botoncapitulo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-24,y:-19},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,518.1,423.5);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación23("synched",0);
	this.instance.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-479,-479.8,958.1,959.7), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación20("synched",0);
	this.instance.setTransform(0.05,0,1.162,1.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-430.2,-699.4,860.5999999999999,1398.9), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación19("synched",0);
	this.instance.setTransform(0,0,1.1355,1.1355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-601.2,-722.9,1202.6,1445.8), null);


(lib.instrucciones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_12 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa_8
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(322.65,309.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0948,scaleY:1.0948,x:296.8,y:280.3},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,593.8,565.5);


(lib.comida_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.setTransform(-150,430.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comida_1, new cjs.Rectangle(-748,-29,1196,919), null);


(lib.btn_instrucciones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.botonabrir();

	this.instance_1 = new lib.instrucciones();
	this.instance_1.setTransform(-117.45,509.75,1,1,0,0,0,322.7,309.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:0,y:0}}]}).to({state:[{t:this.instance,p:{scaleX:1.1,scaleY:1.1,x:-7,y:-7}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:1.1,scaleY:1.1,x:-7,y:-7}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388.5,-7,542.1,772.8);


// stage content:
(lib.infografia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ceerrrarrr:54};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,28,29,54,58,84,88,110,114,115,136,139,164];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_capitulo1.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(30);
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_comida.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(60);
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_danzas.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(90);
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_vivienda.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(116);
		});
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.btn_esclavos.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(141);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_28 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_29 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_54 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.button_1.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay(1);
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_58 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_84 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.movieClip_3.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
	}
	this.frame_88 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_110 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.movieClip_4.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
	}
	this.frame_114 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_115 = function() {
		
	}
	this.frame_136 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		 
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.movieClip_6.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
	}
	this.frame_139 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_164 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.movieClip_7.on('click', function(){
		/*
		Mueve la cabeza lectora al número de fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndStop(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1).call(this.frame_29).wait(25).call(this.frame_54).wait(4).call(this.frame_58).wait(26).call(this.frame_84).wait(4).call(this.frame_88).wait(22).call(this.frame_110).wait(4).call(this.frame_114).wait(1).call(this.frame_115).wait(21).call(this.frame_136).wait(3).call(this.frame_139).wait(25).call(this.frame_164).wait(236));

	// boton_capitulo
	this.btn_capitulo1 = new lib.btn_capitulo1();
	this.btn_capitulo1.name = "btn_capitulo1";
	this.btn_capitulo1.setTransform(197.5,228.15,0.4375,0.4375,0,0,0,235.6,192.6);
	var btn_capitulo1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.btn_capitulo1.filters = [btn_capitulo1Filter_1];
	this.btn_capitulo1.cache(-26,-21,522,428);
	new cjs.ButtonHelper(this.btn_capitulo1, 0, 1, 2);

	this.instance = new lib.cerrarprimero();
	this.instance.setTransform(187.6,229.7,0.0914,0.0914,0,0,0,834.8,525.1);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.button_1 = new lib.cerrarprimero();
	this.button_1.name = "button_1";
	this.button_1.setTransform(419.9,547.65,0.4624,0.4624,0,0,0,834.6,524.8);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_capitulo1).wait(28).to({_off:true},1).wait(25).to({_off:false},2).wait(108).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true,regX:834.6,regY:524.8,scaleX:0.4624,scaleY:0.4624,x:419.9,y:547.65},25).wait(346));
	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(29).to({_off:false},25).to({_off:true,regX:235.6,regY:192.6,scaleX:0.4375,scaleY:0.4375,x:197.5,y:228.15},2).wait(344));
	this.timeline.addTween(cjs.Tween.get(btn_capitulo1Filter_1).wait(53).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 2).wait(3).to(new cjs.ColorFilter(0.28,0.28,0.28,1,0,0,0,0), 0).wait(29).to(new cjs.ColorFilter(0.98,0.98,0.98,1,5.1,5.1,5.1,0), 0).wait(1).to(new cjs.ColorFilter(0.28,0.28,0.28,1,0,0,0,0), 0).wait(25).to(new cjs.ColorFilter(0.98,0.98,0.98,1,5.1,5.1,5.1,0), 0).wait(1).to(new cjs.ColorFilter(0.28,0.28,0.28,1,0,0,0,0), 0).wait(24).to(new cjs.ColorFilter(0.98,0.98,0.98,1,5.1,5.1,5.1,0), 0).wait(1).to(new cjs.ColorFilter(0.28,0.28,0.28,1,0,0,0,0), 0).wait(259));

	// fondo2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EjB9DleMAAAnK7MGD7AAAMAAAHK7g");
	this.shape.setTransform(448.925,368.3622,0.4375,0.4375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:false},0).wait(25).to({_off:true},1).wait(345));

	// btn_agricultura
	this.btn_comida = new lib.btn_comida();
	this.btn_comida.name = "btn_comida";
	this.btn_comida.setTransform(428.85,429.3,0.4375,0.4375,0,0,0,125.6,173.1);
	new cjs.ButtonHelper(this.btn_comida, 0, 1, 2);

	this.instance_1 = new lib.comida_1();
	this.instance_1.setTransform(522.65,582.95,0.4145,0.3989,0,0,0,-150,430.7);
	this.instance_1._off = true;

	this.movieClip_3 = new lib.comida_1();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(524.8,627.35,0.4732,0.4713,0,0,0,-149.8,430.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_comida}]}).to({state:[{t:this.btn_comida}]},58).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.movieClip_3}]},25).to({state:[]},1).wait(315));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({_off:true,regX:-149.8,regY:430.6,scaleX:0.4732,scaleY:0.4713,x:524.8,y:627.35},25).wait(316));

	// Capa_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("EhIwBiRMAAAjEhMCRgAAAMAAADEhg");
	this.shape_1.setTransform(400.8,415.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(59).to({_off:false},0).wait(25).to({_off:true},1).wait(315));

	// btn_danza
	this.btn_danzas = new lib.btn_danzas();
	this.btn_danzas.name = "btn_danzas";
	this.btn_danzas.setTransform(339.5,656.45,0.4375,0.4375,0,0,0,148.1,148.6);
	new cjs.ButtonHelper(this.btn_danzas, 0, 1, 2);

	this.movieClip_4 = new lib.Símbolo1();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(531.15,691.6,0.3835,0.3835,0,0,0,0.1,0.1);
	this.movieClip_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_danzas}]}).to({state:[{t:this.btn_danzas}]},54).to({state:[{t:this.btn_danzas}]},34).to({state:[{t:this.movieClip_4}]},1).to({state:[{t:this.movieClip_4}]},21).to({state:[]},1).wait(289));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(89).to({_off:false},0).to({regX:0,scaleX:0.4375,scaleY:0.4375,x:549.75},21).to({_off:true},1).wait(289));

	// Capa_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiMyhzMMEZlAAAMAAADmZMkZlAAAg");
	this.shape_2.setTransform(158.725,332.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("EiMyBzMMAAAjmYMEZlAAAMAAADmYg");
	this.shape_3.setTransform(158.725,332.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},89).to({state:[{t:this.shape_3},{t:this.shape_2}]},21).to({state:[]},1).wait(289));

	// btn_vivienda
	this.btn_vivienda = new lib.btn_vivienda();
	this.btn_vivienda.name = "btn_vivienda";
	this.btn_vivienda.setTransform(488,743.3,0.4375,0.4375,0,0,0,167.6,131.1);
	new cjs.ButtonHelper(this.btn_vivienda, 0, 1, 2);

	this.movieClip_6 = new lib.Símbolo3();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.setTransform(565.85,688.8,0.3349,0.3349,0,0,0,0.3,0.1);
	this.movieClip_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_vivienda}]}).to({state:[{t:this.btn_vivienda}]},54).to({state:[{t:this.btn_vivienda}]},60).to({state:[{t:this.movieClip_6}]},1).to({state:[{t:this.movieClip_6}]},21).to({state:[]},1).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(115).to({_off:false},0).to({regX:0.1,scaleX:0.3917,scaleY:0.3917,x:565.8},21).to({_off:true},1).wait(263));

	// Capa_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eh4Vhq2MDwrAAAMAAADVtMjwrAAAg");
	this.shape_4.setTransform(207.45,334.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.8)").s().p("Eh4VBq3MAAAjVtMDwrAAAMAAADVtg");
	this.shape_5.setTransform(207.45,334.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},115).to({state:[{t:this.shape_5},{t:this.shape_4}]},21).to({state:[]},1).wait(263));

	// secundarios
	this.instance_2 = new lib.agricultura();
	this.instance_2.setTransform(374,385,0.4375,0.4375);

	this.instance_3 = new lib.danzas();
	this.instance_3.setTransform(275,591,0.4375,0.4375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},114).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},21).to({state:[]},1).wait(263));

	// btn_esclavos
	this.btn_esclavos = new lib.btn_esclavos();
	this.btn_esclavos.name = "btn_esclavos";
	this.btn_esclavos.setTransform(600,614.7,0.4375,0.4375,0,0,0,180.6,181.1);
	new cjs.ButtonHelper(this.btn_esclavos, 0, 1, 2);

	this.movieClip_7 = new lib.Símbolo4();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.setTransform(553.75,729.35,0.2894,0.2894,0,0,0,0.4,0);
	this.movieClip_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_esclavos}]}).to({state:[{t:this.btn_esclavos}]},54).to({state:[{t:this.btn_esclavos}]},85).to({state:[{t:this.movieClip_7}]},1).to({state:[{t:this.movieClip_7}]},24).to({state:[]},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(140).to({_off:false},0).to({regX:0.1,scaleX:0.3717,scaleY:0.3717,x:553.7},24).to({_off:true},1).wait(235));

	// Capa_7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhtkhddMDbJAAAMAAAC67MjbJAAAg");
	this.shape_6.setTransform(330.05,495.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.8)").s().p("EhtkBdeMAAAi67MDbJAAAMAAAC67g");
	this.shape_7.setTransform(330.05,495.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},140).to({state:[{t:this.shape_7},{t:this.shape_6}]},24).to({state:[]},1).wait(235));

	// secundarios_copia
	this.instance_4 = new lib.agricultura();
	this.instance_4.setTransform(374,385,0.4375,0.4375);

	this.instance_5 = new lib.danzas();
	this.instance_5.setTransform(275,591,0.4375,0.4375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},139).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},24).to({state:[]},1).wait(235));

	// btn_instruccion
	this.btn_instrucciones = new lib.btn_instrucciones();
	this.btn_instrucciones.name = "btn_instrucciones";
	this.btn_instrucciones.setTransform(780.9,80.7,0.4375,0.4375,0,0,0,73,74.5);
	new cjs.ButtonHelper(this.btn_instrucciones, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn_instrucciones).wait(400));

	// fondo
	this.instance_6 = new lib.fondo();
	this.instance_6.setTransform(0,0,0.4375,0.4375);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(400));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:1, endFrame:28, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:29, endFrame:29, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:55, endFrame:56, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:57, endFrame:59, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:60, endFrame:88, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:89, endFrame:89, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:90, endFrame:114, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:115, endFrame:115, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:116, endFrame:139, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:140, endFrame:140, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:141, endFrame:164, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:165, endFrame:165, x:-26, y:-21, w:522, h:428});
	this.filterCacheList.push({instance: this.btn_capitulo1, startFrame:165, endFrame:400, x:-26, y:-21, w:522, h:428});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-323.3,91.1,1384.1,1003.1999999999999);
// library properties:
lib.properties = {
	id: '6B65E3BC50900B48AC76FF51C4493236',
	width: 840,
	height: 993,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fondo.png?1631658496153", id:"fondo"},
		{src:"images/infografia_atlas_1.png?1631658496043", id:"infografia_atlas_1"},
		{src:"images/infografia_atlas_2.png?1631658496043", id:"infografia_atlas_2"},
		{src:"images/infografia_atlas_3.png?1631658496043", id:"infografia_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6B65E3BC50900B48AC76FF51C4493236'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;