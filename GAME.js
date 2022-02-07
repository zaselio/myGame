(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.bankofariver = function() {
	this.initialize(img.bankofariver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,83);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,266);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,266);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,369);


(lib.BlueFrogi = function() {
	this.initialize(img.BlueFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.brownborad = function() {
	this.initialize(img.brownborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,113);


(lib.butterfly_open = function() {
	this.initialize(img.butterfly_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,136);


(lib.Cards = function() {
	this.initialize(img.Cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,316);


(lib.check_active = function() {
	this.initialize(img.check_active);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.check_notActive = function() {
	this.initialize(img.check_notActive);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.clock = function() {
	this.initialize(img.clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,574);


(lib.ComboBox = function() {
	this.initialize(img.ComboBox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.CONTINUEBTN = function() {
	this.initialize(img.CONTINUEBTN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.EndAnimitonBackground = function() {
	this.initialize(img.EndAnimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1139);


(lib.endbuttuns = function() {
	this.initialize(img.endbuttuns);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,80);


(lib.finalborad = function() {
	this.initialize(img.finalborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,570);


(lib.frogiHappy = function() {
	this.initialize(img.frogiHappy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,107);


(lib.FrogiSideLook = function() {
	this.initialize(img.FrogiSideLook);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,112);


(lib.Game_Name_Subject = function() {
	this.initialize(img.Game_Name_Subject);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,172);


(lib.GameBackground = function() {
	this.initialize(img.GameBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1924,1259);


(lib.gm1 = function() {
	this.initialize(img.gm1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,164);


(lib.GreenFrogi = function() {
	this.initialize(img.GreenFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.Homescreenbackground = function() {
	this.initialize(img.Homescreenbackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1926,1070);


(lib.Howtoplayborad = function() {
	this.initialize(img.Howtoplayborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,134);


(lib.img_temp_1 = function() {
	this.initialize(img.img_temp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1125);


(lib.img_temp_2 = function() {
	this.initialize(img.img_temp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1125);


(lib.img_temp_3 = function() {
	this.initialize(img.img_temp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1686,1125);


(lib.img_temp_4 = function() {
	this.initialize(img.img_temp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5905,4970);


(lib.jump = function() {
	this.initialize(img.jump);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,234);


(lib.jump2 = function() {
	this.initialize(img.jump2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,179);


(lib.jumpBlue = function() {
	this.initialize(img.jumpBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.jumpeGreen = function() {
	this.initialize(img.jumpeGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,190);


(lib.jumperGreen = function() {
	this.initialize(img.jumperGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,190);


(lib.jumpingfrogi = function() {
	this.initialize(img.jumpingfrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,187);


(lib.jumpPink = function() {
	this.initialize(img.jumpPink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,190);


(lib.looksideBlue = function() {
	this.initialize(img.looksideBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,191);


(lib.looksidePink = function() {
	this.initialize(img.looksidePink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,191);


(lib.music = function() {
	this.initialize(img.music);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.mute = function() {
	this.initialize(img.mute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,67);


(lib.namegameH1 = function() {
	this.initialize(img.namegameH1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,103);


(lib.num0 = function() {
	this.initialize(img.num0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,126);


(lib.num1 = function() {
	this.initialize(img.num1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,123);


(lib.num2 = function() {
	this.initialize(img.num2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,123);


(lib.num3 = function() {
	this.initialize(img.num3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,127);


(lib.num4 = function() {
	this.initialize(img.num4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,125);


(lib.num5 = function() {
	this.initialize(img.num5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,125);


(lib.num6 = function() {
	this.initialize(img.num6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,128);


(lib.num7 = function() {
	this.initialize(img.num7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,122);


(lib.num8 = function() {
	this.initialize(img.num8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,127);


(lib.num9 = function() {
	this.initialize(img.num9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,119);


(lib.OpenanimitonBackground = function() {
	this.initialize(img.OpenanimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1923,1068);


(lib.PAUSEBTN = function() {
	this.initialize(img.PAUSEBTN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,105);


(lib.PauseH1 = function() {
	this.initialize(img.PauseH1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,103);


(lib.PinkFrogi = function() {
	this.initialize(img.PinkFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.sadfrogi = function() {
	this.initialize(img.sadfrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,191);


(lib.stopbutton = function() {
	this.initialize(img.stopbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.TimeoverH1png = function() {
	this.initialize(img.TimeoverH1png);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,103);


(lib.Viconpng = function() {
	this.initialize(img.Viconpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.wave = function() {
	this.initialize(img.wave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,82);


(lib.whiteline = function() {
	this.initialize(img.whiteline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1924,1);


(lib.Xicon = function() {
	this.initialize(img.Xicon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);// helper functions:

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


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.GEZA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו ברפסודה עם התשובה הנכונה באמצעות העכבר", "normal 700 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 465;
	this.text.parent = this;
	this.text.setTransform(826.05,18.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#7D3F16").setStrokeStyle(3,0,1).moveTo(243.7,-16.7).lineTo(243.7,16.7).lineTo(-243.7,16.7).lineTo(-243.7,-16.7).closePath();
	this.shape.setTransform(587.75,25.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#7D3F16").setStrokeStyle(5,1,1).moveTo(-426.9,-32.9).lineTo(426.9,-32.9).lineTo(426.9,33).lineTo(-426.9,33).closePath();
	this.shape_1.setTransform(426.875,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#7D3F16").setStrokeStyle(5,0,1).moveTo(411.6,28.6).lineTo(411.6,-28.6).moveTo(-411.7,28.6).lineTo(-411.7,-28.6);
	this.shape_2.setTransform(427.85,28.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-426.9,57.8).lineTo(-426.9,-8.1).lineTo(426.9,-8.1).lineTo(426.9,57.8).closePath().moveTo(-82.8,-24.3).lineTo(-82.8,-57.8).lineTo(404.6,-57.8).lineTo(404.6,-24.3).closePath();
	this.shape_3.setTransform(426.875,66.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,858.8,129.8);


(lib.btn_continue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PAUSEBTN();
	this.instance.setTransform(0,0,0.7027,0.7142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue, new cjs.Rectangle(0,0,182,75), null);


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wave();
	this.instance.setTransform(0,245.8,1.6614,1.0098,0,180,0);

	this.instance_1 = new lib.wave();
	this.instance_1.setTransform(15,0,1.5353,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves, new cjs.Rectangle(0,0,413.7,245.8), null);


(lib.butterfly_open_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.butterfly_open();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.butterfly_open_1, new cjs.Rectangle(0,0,141,136), null);


(lib.questionNumber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(51,0,0,0)").beginStroke().moveTo(-102.6,75.2).lineTo(-102.6,-75.2).lineTo(102.6,-75.2).lineTo(102.6,75.2).closePath();
	this.shape.setTransform(102.6,75.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionNumber, new cjs.Rectangle(0,0,205.2,150.4), null);


(lib.mc_raft_MAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(12,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft_MAIN, new cjs.Rectangle(12,-1,432,266), null);


(lib.mc_raft_animitonbetwwn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft_animitonbetwwn, new cjs.Rectangle(-1,-1,432,266), null);


(lib.mc_raft = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570,389);


(lib.MAINSCREEN_IslandB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(155,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandB, new cjs.Rectangle(0,0,155,83), null);


(lib.MAINSCREEN_IslandA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandA, new cjs.Rectangle(0,0,155,83), null);


(lib.clock_animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock();
	this.instance.setTransform(-144,0,0.1008,0.1007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_animiton, new cjs.Rectangle(-144,0,46.8,57.8), null);


(lib.brown_borad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_Name_Subject();
	this.instance.setTransform(0,0,0.9752,0.9802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brown_borad, new cjs.Rectangle(0,0,149.2,168.6), null);


(lib.ICON_X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Xicon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_X, new cjs.Rectangle(0,0,45,45), null);


(lib.ICON_V = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Viconpng();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_V, new cjs.Rectangle(0,0,48,48), null);


(lib.Game_boradkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו בתשובה הנכונה באמצעות העכבר", "bold 14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(97.75,31.9);

	this.instance = new lib.Howtoplayborad();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game_boradkey, new cjs.Rectangle(0,0,186,134), null);


(lib.startButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("התחל", "bold 40px 'Heebo ExtraBold'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 105;
	this.text.alpha = 0.61568627;
	this.text.parent = this;
	this.text.setTransform(87.6,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(6,1,1).moveTo(-108.5,-56.5).lineTo(108.5,-56.5).curveTo(131.9,-56.5,148.5,-39.9).curveTo(165,-23.4,165,0).curveTo(165,23.4,148.5,40).curveTo(131.9,56.5,108.5,56.5).lineTo(-108.5,56.5).curveTo(-131.9,56.5,-148.4,40).curveTo(-165,23.4,-165,0).curveTo(-165,-23.4,-148.4,-39.9).curveTo(-131.9,-56.5,-108.5,-56.5).closePath();
	this.shape.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(217,219,199,0.616)").beginStroke().moveTo(-108.5,56.5).curveTo(-131.9,56.5,-148.5,40).curveTo(-165,23.4,-165,0).curveTo(-165,-23.4,-148.5,-40).curveTo(-131.9,-56.5,-108.5,-56.5).lineTo(108.5,-56.5).curveTo(131.9,-56.5,148.4,-40).curveTo(165,-23.4,165,0).curveTo(165,23.4,148.4,40).curveTo(131.9,56.5,108.5,56.5).closePath();
	this.shape_1.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(194,248,1,0.616)").beginStroke().moveTo(-108.5,56.5).curveTo(-131.9,56.5,-148.5,40).curveTo(-165,23.4,-165,0).curveTo(-165,-23.4,-148.5,-40).curveTo(-131.9,-56.5,-108.5,-56.5).lineTo(108.5,-56.5).curveTo(131.9,-56.5,148.4,-40).curveTo(165,-23.4,165,0).curveTo(165,23.4,148.4,40).curveTo(131.9,56.5,108.5,56.5).closePath();
	this.shape_2.setTransform(136.5911,45.5954,0.828,0.8067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,279.2,97.2);


(lib.sad_frogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sadfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_frogi, new cjs.Rectangle(0,0,179,191), null);


(lib.jumperfrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpingfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperfrogi, new cjs.Rectangle(0,0,188,187), null);


(lib.jumper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumper, new cjs.Rectangle(0,0,230,234), null);


(lib.frogiwin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiwin, new cjs.Rectangle(0,0,223,179), null);


(lib.FrogiQuestionBoxY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxY, new cjs.Rectangle(0,0,105,112), null);


(lib.FrogiQuestionBoxR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxR, new cjs.Rectangle(0,0,0,0), null);


(lib.HappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiHappy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyFrogi, new cjs.Rectangle(0,0,108,107), null);


(lib.frogiEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiEnd, new cjs.Rectangle(0,0,105,112), null);


(lib.frgiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frgiraft, new cjs.Rectangle(0,0,105,112), null);


(lib.lookside_pink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksidePink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_pink, new cjs.Rectangle(0,0,179,191), null);


(lib.lookside_Green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpeGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Green, new cjs.Rectangle(0,0,179,190), null);


(lib.lookside_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksideBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Blue, new cjs.Rectangle(0,0,180,191), null);


(lib.line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#9E5729").setStrokeStyle(6,1,1).moveTo(-14.2,7.8).lineTo(14.2,-7.8);
	this.shape.setTransform(14.15,7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line1, new cjs.Rectangle(-3,-3,34.3,21.6), null);


(lib.jumperPink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpPink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperPink, new cjs.Rectangle(0,0,189,190), null);


(lib.jumperGreen_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumperGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperGreen_1, new cjs.Rectangle(0,0,189,190), null);


(lib.jumperBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperBlue, new cjs.Rectangle(0,0,190,190), null);


(lib.GreenHappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GreenFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenHappyFrogi, new cjs.Rectangle(0,0,147,145), null);


(lib.ENDSCREEN_PinkFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PinkFrogi();
	this.instance.setTransform(0,0,0.6775,0.6799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_PinkFrog, new cjs.Rectangle(0,0,99.6,98.6), null);


(lib.ENDSCREEN_LOG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.brownborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_LOG, new cjs.Rectangle(0,0,310,113), null);


(lib.ENDSCREEN_BOARD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.finalborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BOARD, new cjs.Rectangle(0,0,690,570), null);


(lib.ENDSCREEN_BlueFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BlueFrog, new cjs.Rectangle(0,0,147,145), null);


(lib.green_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(4,1,1).moveTo(-222.3,-44.5).lineTo(222.3,-44.5).curveTo(231.4,-44.5,239.1,-41.8).curveTo(240.8,-41.2,242.3,-40.6).curveTo(249.8,-37.3,256,-31.5).curveTo(270,-18.5,270,0).curveTo(270,18.4,256,31.4).curveTo(249,38,240.5,41.3).curveTo(239.8,41.5,239.1,41.8).curveTo(231.4,44.5,222.3,44.5).lineTo(-222.3,44.5).curveTo(-232.1,44.5,-240.4,41.3).curveTo(-249,38,-256.1,31.4).curveTo(-270,18.4,-270,0).curveTo(-270,-18.5,-256.1,-31.5).curveTo(-249.8,-37.3,-242.3,-40.6).curveTo(-233.2,-44.5,-222.3,-44.5).closePath();
	this.shape.setTransform(97.35,-150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#D5E06A").beginStroke().moveTo(-222.3,44.5).curveTo(-232.1,44.5,-240.5,41.3).curveTo(-249,38.1,-256,31.5).curveTo(-270,18.5,-270,-0).curveTo(-270,-18.4,-256,-31.5).curveTo(-249.8,-37.3,-242.3,-40.5).curveTo(-233.2,-44.5,-222.3,-44.5).lineTo(222.3,-44.5).curveTo(231.4,-44.5,239.2,-41.8).lineTo(242.3,-40.5).curveTo(249.8,-37.3,256.1,-31.5).curveTo(270,-18.4,270,-0).curveTo(270,18.5,256.1,31.5).curveTo(249,38.1,240.5,41.3).lineTo(239.2,41.8).curveTo(231.4,44.5,222.3,44.5).closePath();
	this.shape_1.setTransform(97.35,-150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_btn, new cjs.Rectangle(-174.6,-196.6,544,93), null);


(lib.end_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.endbuttuns();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_btn, new cjs.Rectangle(0,0,176,80), null);


(lib.stopbutton_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stopbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopbutton_1, new cjs.Rectangle(0,0,73,67), null);


(lib.magnify = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(3.6,2.9).curveTo(0.9,5.1,-2.6,5.1).curveTo(-6.7,5.1,-9.5,2.3).curveTo(-11.8,0,-12.2,-2.9).curveTo(-12.4,-3.8,-12.4,-4.6).curveTo(-12.4,-8.7,-9.5,-11.5).curveTo(-6.7,-14.4,-2.6,-14.4).curveTo(0.1,-14.4,2.4,-13).curveTo(3.4,-12.4,4.3,-11.5).curveTo(7.1,-8.7,7.1,-4.6).curveTo(7.1,-0.8,4.7,1.9).curveTo(4.5,2.1,4.3,2.3).curveTo(3.9,2.6,3.6,2.9).closePath().moveTo(12.4,14.4).lineTo(3.6,2.9);
	this.shape.setTransform(12.375,14.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.9,6.9).curveTo(-9.2,4.6,-9.6,1.7).lineTo(-9.8,-0).curveTo(-9.7,-4.1,-6.9,-6.9).curveTo(-4.1,-9.7,-0,-9.8).curveTo(2.7,-9.8,5,-8.4).curveTo(6,-7.8,6.9,-6.9).curveTo(9.8,-4.1,9.8,-0).curveTo(9.8,3.8,7.3,6.5).lineTo(6.9,6.9).lineTo(6.2,7.5).curveTo(3.5,9.8,-0,9.8).curveTo(-4.1,9.8,-6.9,6.9).closePath();
	this.shape_1.setTransform(9.75,9.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnify, new cjs.Rectangle(-1,-1,26.8,30.8), null);


(lib.btn_continue_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CONTINUEBTN();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue_new, new cjs.Rectangle(0,0,145,82), null);


(lib.btn_check_active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.check_active();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_check_active, new cjs.Rectangle(0,0,145,82), null);


(lib.main_btn = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.check_notActive();

	this.instance_1 = new lib.check_active();

	this.instance_2 = new lib.CONTINUEBTN();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.num_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_9, new cjs.Rectangle(0,0,86,119), null);


(lib.num_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num8();
	this.instance.setTransform(0,0,0.9247,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_8, new cjs.Rectangle(0,0,86,119), null);


(lib.num_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num7();
	this.instance.setTransform(0,0,0.9556,0.9754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_7, new cjs.Rectangle(0,0,86,119), null);


(lib.num_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num6();
	this.instance.setTransform(0,0,0.8687,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_6, new cjs.Rectangle(0,0,86,119), null);


(lib.num_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num5();
	this.instance.setTransform(0,0,0.9556,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_5, new cjs.Rectangle(0,0,86,119), null);


(lib.num_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num4();
	this.instance.setTransform(0,0,0.86,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_4, new cjs.Rectangle(0,0,86,119), null);


(lib.num_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num3();
	this.instance.setTransform(0,0,0.9053,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_3, new cjs.Rectangle(0,0,86,119), null);


(lib.num_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num2();
	this.instance.setTransform(0,0,1.0488,0.9675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_2, new cjs.Rectangle(0,0,86,119), null);


(lib.num_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_1, new cjs.Rectangle(0,0,52,123), null);


(lib.num_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num0();
	this.instance.setTransform(0,0,0.8958,0.9444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_0, new cjs.Rectangle(0,0,86,119), null);


(lib.mg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gm1();
	this.instance.setTransform(0,0,0.625,0.4018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mg_1, new cjs.Rectangle(0,0,60,65.9), null);


(lib.img_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_4();
	this.instance.setTransform(0,0,0.0203,0.0132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_4, new cjs.Rectangle(0,0,120,65.9), null);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_3();
	this.instance.setTransform(0,0,0.1513,0.1209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_3, new cjs.Rectangle(0,0,255.1,136), null);


(lib.img_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_2();
	this.instance.setTransform(0,0,0.2834,0.1209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_2, new cjs.Rectangle(0,0,255.1,136), null);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_1();
	this.instance.setTransform(0,0,0.1275,0.1209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_1, new cjs.Rectangle(0,0,255.1,136.1), null);


(lib.Cards_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cards();
	this.instance.setTransform(0,0,0.2459,0.2085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cards_1, new cjs.Rectangle(0,0,90,65.9), null);


(lib.forCombo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/cssCombo.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(208,-11,1,1,0,0,0,50,11);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, גיאוגרפיה, 1, חשבון, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50.1,11.1,1.5,1.5,0,0,0,33.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.myCSS}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forCombo, new cjs.Rectangle(-0.7,-22.5,259.2,56.3), null);


(lib.timeUp_Screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(625.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.btn_continueTimeUp = new lib.btn_continue();
	this.btn_continueTimeUp.name = "btn_continueTimeUp";
	this.btn_continueTimeUp.setTransform(158,635.5,1,1,0,0,0,91,37.5);

	this.instance_2 = new lib.TimeoverH1png();
	this.instance_2.setTransform(292,140);

	this.timeovet_txt = new cjs.Text("לא נורא תהיה עוד הזדמנות לענות על השאלה", "normal 400 35px 'Heebo'");
	this.timeovet_txt.name = "timeovet_txt";
	this.timeovet_txt.textAlign = "center";
	this.timeovet_txt.lineHeight = 47;
	this.timeovet_txt.lineWidth = 648;
	this.timeovet_txt.parent = this;
	this.timeovet_txt.setTransform(627.15,337.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.timeovet_txt);
	}

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.timeovet_txt},{t:this.instance_2},{t:this.btn_continueTimeUp},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeUp_Screen, new cjs.Rectangle(0,0,1287.4,731.7), null);


(lib.pause_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.pContinue_btn = new lib.btn_continue();
	this.pContinue_btn.name = "pContinue_btn";
	this.pContinue_btn.setTransform(152,635.5,1,1,0,0,0,91,37.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(619.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.instance_2 = new lib.PauseH1();
	this.instance_2.setTransform(286,140);

	this.pausetime_txt = new cjs.Text("פרוגי לא אוהב לחכות יותר מידי אז חזרו מהר", "35px 'Heebo'");
	this.pausetime_txt.name = "pausetime_txt";
	this.pausetime_txt.lineHeight = 53;
	this.pausetime_txt.lineWidth = 637;
	this.pausetime_txt.parent = this;
	this.pausetime_txt.setTransform(308.85,363.05);

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#55851D").beginStroke().moveTo(-1.3,22.3).lineTo(-1.4,11.7).curveTo(-1.4,10.4,-1.8,9.7).curveTo(-2.4,8.9,-3.7,8.8).lineTo(-6.1,8.8).curveTo(-8.8,8.8,-11.1,6.9).curveTo(-13.3,5,-14.1,2.2).curveTo(-14.8,-0.4,-14.1,-3.3).curveTo(-13.5,-5.9,-11.8,-8.3).curveTo(-9,-12.2,-3.3,-15.4).lineTo(-3.3,-22.2).lineTo(-1.2,-22.7).lineTo(-0.1,-17.6).curveTo(1.1,-18.6,2.6,-18.5).curveTo(2.4,-14.6,4.6,-11.4).lineTo(6,-9.4).curveTo(6.8,-8.2,7,-7.2).curveTo(7.1,-6.4,6.9,-5.1).lineTo(6.6,-3).curveTo(6.6,-1.8,7.2,-0.9).curveTo(7.8,0.1,8.8,0.2).curveTo(9.4,0.2,10.4,-0.3).curveTo(11.5,-0.8,12,-0.8).curveTo(13.2,-0.8,13.9,0.5).curveTo(14.4,1.6,14.4,3.1).curveTo(14.5,7.9,11.8,13.4).curveTo(10.6,16,9,17).curveTo(8,17.7,6.2,18.1).lineTo(3.1,18.7).lineTo(2.7,22.4).curveTo(1.7,22.7,0.8,22.7).curveTo(-0.3,22.7,-1.3,22.3).closePath().moveTo(6.3,12.9).lineTo(5.8,13.7).lineTo(5.2,14).lineTo(3.1,14.5).lineTo(7.7,14.1).lineTo(7.6,12.4).curveTo(7.5,11.4,6.8,10.9).curveTo(6.8,11.4,6.3,12.9).closePath().moveTo(-4.4,-11).lineTo(-5.4,-10.1).curveTo(-5.7,-9.8,-7.3,-9).curveTo(-9.9,-7.7,-11,-4.6).curveTo(-11.9,-2.2,-11.5,1.1).curveTo(-11.1,4.1,-9.4,4.7).curveTo(-8.9,4.9,-7.9,4.9).lineTo(-3.3,4.9).curveTo(-2.9,3.7,-4.2,1.4).curveTo(-5.6,-0.7,-4.9,-2).lineTo(-4.1,-3.1).curveTo(-3,-4.5,-3.2,-7).lineTo(-3.4,-9.1).curveTo(-3.4,-10.3,-3.3,-11.2).lineTo(-3.6,-11.2).curveTo(-4,-11.2,-4.4,-11).closePath();
	this.shape.setTransform(251.2755,176.4315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.pausetime_txt},{t:this.instance_2},{t:this.instance_1},{t:this.pContinue_btn},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_screen, new cjs.Rectangle(0,0,1287.4,731.7), null);


(lib.frogiProgress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();
	this.instance.setTransform(-66,80,0.3067,0.3732);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(-47.95,119.95,0.2337,0.245,0,0,0,227.4,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiProgress, new cjs.Rectangle(-98.3,80,101,72.5), null);


(lib.frogiraft = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.mc_raft_animitonbetwwn();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.instance_1 = new lib.mc_raft_animitonbetwwn();
	this.instance_1.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-0.6,266.4,164.4);


(lib.FROGI_START_NEW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.mc_raft_animitonbetwwn();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(74.75,72.5,0.5832,0.5483,0,0,0,215.1,132.2);

	this.instance_1 = new lib.mc_raft_animitonbetwwn();
	this.instance_1.setTransform(74.75,72.5,0.5832,0.5483,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-0.5,252,145.8);


(lib.FROGI_START = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.mc_raft_animitonbetwwn();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.instance_1 = new lib.mc_raft_animitonbetwwn();
	this.instance_1.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-0.6,266.4,164.4);


(lib.FORGI_ENTER_MAIN_SCREEN = function(mode,startPosition,loop,reversed) {
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
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// BUBBLE
	this.instance = new lib.waves();
	this.instance.setTransform(493.4,70.75,1,1.1867,0,0,0,206.8,122.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:122.9,y:71.6},0).wait(1).to({regX:206.9,regY:122.2,x:363.15,y:70.7},0).wait(1).to({regX:206.8,regY:122.9,x:363.05,y:71.55},0).wait(2).to({regY:122.2,x:295.1,y:70.55},0).wait(1).to({regY:122.9,y:71.4},0).wait(2).to({regY:120.5,scaleY:1.1105,skewX:11.2415,x:299.1,y:69.95},0).wait(1).to({regY:122.9,scaleX:1.0207,scaleY:1.1102,skewX:0.0989,x:283.35,y:72.65},0).to({_off:true},1).wait(2));

	// RAFT
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(508.05,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.instance_2 = new lib.FROGI_START();
	this.instance_2.setTransform(310.9,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.9,regY:81.6,x:366.55,y:72.4},0).wait(1).to({x:287.55},0).wait(1).to({x:275.9},0).wait(1).to({x:263.4},0).wait(5).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-74.4,700.3,291.9);


(lib.end_animiton = function(mode,startPosition,loop,reversed) {
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
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// main
	this.instance = new lib.butterfly_open_1();
	this.instance.setTransform(-304.85,-134.8,0.2697,0.367,0,58.6522,95.8493);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(1));

	// Bubbles
	this.instance_1 = new lib.waves();
	this.instance_1.setTransform(176,58.95,1,1.0732,0,0,0,206.8,122.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:122.9,scaleY:1.0632,skewX:-1.5062,x:155,y:58.05},0).wait(1).to({scaleY:1.0532,skewX:-3.0123,x:133.9,y:56.75},0).wait(1).to({scaleY:1.0431,skewX:-4.5185,x:112.85,y:55.4},0).wait(1).to({scaleY:1.0331,skewX:-6.0247,x:91.8,y:54.05},0).wait(1).to({scaleY:1.023,skewX:-7.5308,x:75.65},0).wait(1).to({scaleY:1.013,skewX:-9.037,x:59.4},0).wait(1).to({scaleY:1.0029,skewX:-10.5432,x:43.2},0).wait(1).to({scaleY:0.9929,skewX:-12.0493,x:26.95},0).wait(1).to({scaleY:0.9829,skewX:-13.5555,x:10.75},0).wait(1).to({scaleY:0.9702,skewX:-8.774,x:-8.65,y:54.55},0).wait(1).to({scaleY:0.9576,skewX:-3.9925,x:-28.05,y:55.05},0).wait(1).to({scaleY:0.9449,skewX:0.789,x:-47.5,y:55.5},0).wait(1).to({scaleY:0.9323,skewX:5.5704,x:-66.9,y:56.05},0).wait(1).to({scaleY:0.9196,skewX:10.3519,x:-86.3,y:56.55},0).wait(1).to({scaleY:0.907,skewX:15.1334,x:-105.75,y:57.05},0).to({_off:true},1).wait(103));

	// frogi
	this.end_animiton = new lib.frogiraft();
	this.end_animiton.name = "end_animiton";
	this.end_animiton.setTransform(132.6,68.8,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.end_animiton).wait(1).to({regX:81.9,regY:81.6,x:81.9,y:68.7},0).wait(2).to({x:67.4},0).wait(1).to({x:52.95},0).wait(1).to({x:38.45},0).wait(1).to({x:24},0).wait(1).to({x:9.5},0).wait(1).to({x:-4.95},0).wait(1).to({x:-19.45},0).wait(1).to({x:-33.95},0).wait(1).to({x:-48.4},0).wait(1).to({x:-62.9},0).wait(1).to({x:-77.35},0).wait(1).to({x:-91.85},0).wait(1).to({x:-106.3},0).wait(1).to({x:-120.8},0).wait(1).to({x:-135.3},0).wait(2).to({_off:true},1).wait(101));

	// jumper
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(-221.5,39,0.4643,0.533,0,0,180,133.9,111.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:94,regY:93.5,scaleX:0.4707,scaleY:0.5287,skewX:-2.3537,skewY:179.9732,x:-215.45,y:27.25},0).wait(1).to({scaleX:0.4771,scaleY:0.5245,skewX:-4.7075,skewY:179.9464,x:-228.05,y:24.9},0).wait(1).to({scaleX:0.4835,scaleY:0.5202,skewX:-7.0612,skewY:179.9197,x:-240.5,y:22.55},0).wait(1).to({scaleX:0.4899,scaleY:0.516,skewX:-9.4149,skewY:179.8929,x:-253,y:20.25},0).wait(1).to({scaleX:0.4963,scaleY:0.5117,skewX:-16.7691,skewY:174.8656,x:-274.1,y:15.45},0).wait(1).to({scaleX:0.5027,scaleY:0.5075,skewX:-24.1233,skewY:169.8384,x:-295.3,y:10.8},0).wait(1).to({scaleX:0.5091,scaleY:0.5033,skewX:-31.4775,skewY:164.8112,x:-316.65,y:6.3},0).wait(1).to({scaleX:0.5155,scaleY:0.4811,skewX:-33.6509,skewY:167.326,x:-329.5,y:7.6},0).wait(1).to({scaleX:0.5219,scaleY:0.4589,skewX:-35.8243,skewY:169.8407,x:-342.5,y:8.9},0).wait(1).to({scaleX:0.5283,scaleY:0.4368,skewX:-37.9977,skewY:172.3555,x:-355.35,y:10.3},0).wait(1).to({scaleX:0.5263,scaleY:0.4192,skewX:-29.7302,skewY:170.4835,x:-361.15,y:14.85},0).wait(1).to({scaleX:0.5243,scaleY:0.4017,skewX:-21.4627,skewY:168.6114,x:-366.9,y:19.55},0).wait(1).to({scaleX:0.5223,scaleY:0.3841,skewX:-13.1953,skewY:166.7393,x:-372.8,y:24.4},0).wait(1).to({scaleX:0.5203,scaleY:0.3666,skewX:-4.9278,skewY:164.8673,x:-378.65,y:29.45},0).wait(1).to({scaleX:0.5183,scaleY:0.3848,skewX:0.2649,skewY:164.8795,x:-383.55,y:37.55},0).wait(1).to({scaleX:0.5163,scaleY:0.4031,skewX:5.4576,skewY:164.8918,x:-388.4,y:45.65},0).wait(1).to({scaleX:0.5143,scaleY:0.4214,skewX:10.6502,skewY:164.9041,x:-393.2,y:53.75},0).wait(1).to({scaleX:0.5123,scaleY:0.4396,skewX:15.8429,skewY:164.9164,x:-397.85,y:62.05},0).wait(1).to({scaleX:0.4991,scaleY:0.5375,skewX:17.3004,skewY:164.9496,x:-407.95,y:70.4},0).wait(1).to({scaleX:0.4505,scaleY:0.4722,skewX:1.8505,skewY:164.9689,x:-422.65,y:81.35},0).wait(1).to({scaleX:0.402,scaleY:0.4068,skewX:-13.5994,skewY:164.9881,x:-436.7,y:92.95},0).wait(1).to({scaleX:0.5991,scaleY:0.403,skewX:1.7998,skewY:164.9173,x:-434.05,y:98.3},0).to({_off:true},1).wait(79));

	// raft_finalborad
	this.text = new cjs.Text("!כל הכבוד פרוגי", "35px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(-17.05,-120.7);

	this.instance_3 = new lib.ENDSCREEN_LOG();
	this.instance_3.setTransform(-17.05,-108.45,0.878,0.7168,0,0,0,154.8,56.5);

	this.text_1 = new cjs.Text(":ציון סופי", "bold 20px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 87;
	this.text_1.parent = this;
	this.text_1.setTransform(70.45,82);

	this.text_2 = new cjs.Text(":שגיאות", "bold 20px 'Heebo'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 31;
	this.text_2.lineWidth = 85;
	this.text_2.parent = this;
	this.text_2.setTransform(70.45,22);

	this.text_3 = new cjs.Text(":זמן ", "bold 20px 'Heebo'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 37;
	this.text_3.parent = this;
	this.text_3.setTransform(70.45,-38);

	this.instance_4 = new lib.ENDSCREEN_BOARD();
	this.instance_4.setTransform(-119.3,143.3,0.7757,0.8121,0,0,0,344.9,284.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.instance_3},{t:this.text}]},68).wait(53));

	// walking_frogi
	this.instance_5 = new lib.jumper();
	this.instance_5.setTransform(-460.6,86.05,0.4159,0.4391,0,-3.1237,-13.0972,71.7,37.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).wait(1).to({regX:115,regY:117,scaleX:0.4233,scaleY:0.446,skewX:0.8429,skewY:-8.0676,x:-442.65,y:133.25},0).wait(1).to({scaleX:0.4307,scaleY:0.453,skewX:4.8109,skewY:-3.0348,x:-444.45,y:149.75},0).wait(1).to({scaleX:0.4381,scaleY:0.4599,skewX:8.7789,skewY:1.998,x:-446.35,y:166.1},0).wait(1).to({scaleX:0.4455,scaleY:0.4669,skewX:12.7469,skewY:7.0308,x:-448.5,y:182.25},0).wait(1).to({scaleX:0.4244,scaleY:0.4738,skewX:16.8646,skewY:12.2085,x:-452.15,y:198.1},0).wait(1).to({scaleX:0.4032,scaleY:0.4807,skewX:20.9822,skewY:17.3862,x:-455.9,y:213.55},0).wait(1).to({scaleX:0.4072,scaleY:0.4687,skewX:10.9012,skewY:8.3712,x:-450.75,y:214.1},0).wait(1).to({scaleX:0.4113,scaleY:0.4566,skewX:0.8201,skewY:-0.6438,x:-446.2,y:213.3},0).wait(1).to({scaleX:0.4153,scaleY:0.4445,skewX:16.9894,skewY:16.5916,x:-458.9,y:218.5},0).wait(1).to({scaleX:0.3919,scaleY:0.5163,skewX:13.8487,skewY:14.5131,x:-461.45,y:225.9},0).wait(1).to({scaleX:0.4138,scaleY:0.4994,skewX:11.0876,skewY:12.8026,x:-460.7,y:230.45},0).wait(1).to({scaleX:0.4005,scaleY:0.4913,skewX:7.9347,skewY:10.7156,x:-461.35,y:235.15},0).wait(1).to({scaleX:0.3871,scaleY:0.4832,skewX:4.7818,skewY:8.6285,x:-462.05,y:239.8},0).wait(1).to({scaleX:0.3738,scaleY:0.4751,skewX:1.6289,skewY:6.5414,x:-462.85,y:244.3},0).wait(1).to({scaleX:0.3605,scaleY:0.4671,skewX:-1.5241,skewY:4.4543,x:-463.7,y:248.8},0).wait(1).to({scaleX:0.3471,scaleY:0.459,skewX:-4.677,skewY:2.3672,x:-464.7,y:253.15},0).wait(1).to({scaleX:0.3558,scaleY:0.4651,skewX:6.1407,skewY:2.416,x:-475,y:257.85},0).wait(1).to({scaleX:0.3646,scaleY:0.4811,skewX:-5.8269,skewY:2.4534,x:-470.65,y:263.5},0).wait(1).to({scaleX:0.3733,scaleY:0.4599,skewX:-7.3026,skewY:2.4777,x:-473.3,y:266},0).wait(1).to({scaleX:0.382,scaleY:0.4388,skewX:-8.7783,skewY:2.502,x:-476.05,y:268.55},0).wait(1).to({scaleX:0.3269,scaleY:0.4885,skewX:-9.9299,skewY:2.4292,x:-480.9,y:276.5},0).wait(1).to({scaleX:0.4252,scaleY:0.4259,skewX:1.923,skewY:2.4633,x:-484.45,y:272.3},0).wait(1).to({scaleX:0.4264,scaleY:0.4721,skewX:13.6676,skewY:2.3986,x:-492.1,y:274.85},0).wait(1).to({scaleX:0.4275,scaleY:0.4561,skewX:13.6788,skewY:2.4094,x:-491.8,y:273.65},0).wait(1).to({scaleX:0.4287,scaleY:0.4401,skewX:13.69,skewY:2.4202,x:-491.45,y:272.45},0).wait(1).to({scaleX:0.4298,scaleY:0.4241,skewX:13.7012,skewY:2.431,x:-491.05,y:271.2},0).wait(1).to({scaleX:0.4032,scaleY:0.4491,skewX:11.5957,skewY:2.6316,x:-491.45,y:273.45},0).to({_off:true},1).wait(51));

	// happyfrogs
	this.instance_6 = new lib.HappyFrogi();
	this.instance_6.setTransform(-490.6,279.85,0.9222,0.9215,0,0,0,54,79.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({_off:false},0).wait(51));

	// Pinkfrogi
	this.instance_7 = new lib.lookside_pink();
	this.instance_7.setTransform(-1036.3,240.9,0.2082,0.2299,0,5.159,-173.8073,87.8,141.8);

	this.instance_8 = new lib.ENDSCREEN_PinkFrog();
	this.instance_8.setTransform(-695.8,255.8,1,1,0,0,0,49.8,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},48).to({state:[]},3).to({state:[{t:this.instance_8}]},21).wait(49));

	// jumpPink
	this.instance_9 = new lib.jumperPink();
	this.instance_9.setTransform(-1015.2,206.4,0.3756,0.2975,0,0,0,94.2,69);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3729,scaleY:0.3262,skewX:-0.0324,skewY:1.9374,x:-998.85,y:204.6},0).wait(1).to({scaleX:0.3702,scaleY:0.3548,skewX:-0.0647,skewY:3.8747,x:-982.55,y:195.1},0).wait(1).to({scaleX:0.3675,scaleY:0.3835,skewX:-0.0971,skewY:5.8121,x:-966.3,y:185.6},0).wait(1).to({scaleX:0.3648,scaleY:0.4121,skewX:-0.1295,skewY:7.7495,x:-950.05,y:176.1},0).wait(1).to({scaleX:0.35,scaleY:0.3115,skewX:-0.1619,skewY:9.6869,x:-924.55,y:169.25},0).wait(1).to({scaleX:0.3352,scaleY:0.2108,skewX:-0.1942,skewY:11.6242,x:-899.05,y:162.4},0).wait(1).to({scaleX:0.3486,scaleY:0.2557,skewX:-0.7485,skewY:13.4389,x:-873.5,y:159.35},0).wait(1).to({scaleX:0.3619,scaleY:0.3006,skewX:-1.3027,skewY:15.2537,x:-847.9,y:156.25},0).wait(1).to({scaleX:0.3752,scaleY:0.3467,skewX:-5.2317,skewY:13.6936,x:-829.6,y:171.05},0).wait(1).to({scaleX:0.3886,scaleY:0.3928,skewX:-9.1608,skewY:12.1336,x:-811.1,y:185.85},0).wait(1).to({scaleX:0.4019,scaleY:0.4389,skewX:-13.0898,skewY:10.5735,x:-792.45,y:200.5},0).wait(1).to({scaleX:0.4102,scaleY:0.4203,skewX:-20.3917,skewY:9.0992,x:-785.6,y:212.55},0).wait(1).to({scaleX:0.4184,scaleY:0.4018,skewX:-27.6937,skewY:7.6249,x:-778.85,y:224.35},0).wait(1).to({scaleX:0.4267,scaleY:0.3832,skewX:-34.9957,skewY:6.1506,x:-772.25,y:236.1},0).wait(1).to({scaleX:0.435,scaleY:0.3646,skewX:-42.2976,skewY:4.6763,x:-765.95,y:247.8},0).wait(1).to({scaleY:0.4021,skewX:-36.0492,skewY:3.1542,x:-761.2,y:251.05},0).wait(1).to({scaleY:0.4395,skewX:-29.8007,skewY:1.6322,x:-756.75,y:254.3},0).wait(1).to({scaleY:0.477,skewX:-23.5523,skewY:0.1102,x:-752.55,y:257.55},0).wait(1).to({scaleY:0.4611,skewX:-6.1818,skewY:0.1093,x:-737.2,y:258.2},0).wait(1).to({scaleY:0.4452,skewX:11.1887,skewY:0.1084,x:-721.7,y:257.75},0).to({_off:true},1).wait(49));

	// Greenfrogi
	this.instance_10 = new lib.lookside_Green();
	this.instance_10.setTransform(-991.6,76.15,0.2658,0.2552,0,0,-172.7314,89.5,95);

	this.instance_11 = new lib.GreenHappyFrogi();
	this.instance_11.setTransform(-596.25,255.8,0.6776,0.68,0,0,0,73.4,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},48).to({state:[]},3).to({state:[{t:this.instance_11}]},21).wait(49));

	// jumpGreen
	this.instance_12 = new lib.jumperGreen_1();
	this.instance_12.setTransform(-961.65,86.75,0.3756,0.2976,14.9967,0,0,85.6,89.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3615,scaleY:0.2584,rotation:0,skewX:10.4136,skewY:17.5431,x:-922.35,y:85.7},0).wait(1).to({scaleX:0.3473,scaleY:0.2191,skewX:5.8291,skewY:20.0881,x:-885.85,y:82.05},0).wait(1).to({scaleX:0.3509,scaleY:0.2175,skewX:1.2446,skewY:22.6332,x:-858.55,y:83.95},0).wait(1).to({scaleX:0.3546,scaleY:0.2158,skewX:-3.3399,skewY:25.1782,x:-831.2,y:85.8},0).wait(1).to({scaleX:0.3582,scaleY:0.2142,skewX:-7.9244,skewY:27.7232,x:-803.9,y:87.7},0).wait(1).to({scaleX:0.3619,scaleY:0.2125,skewX:-12.5089,skewY:30.2682,x:-776.6,y:89.55},0).wait(1).to({scaleX:0.3655,scaleY:0.2482,skewX:-13.6839,skewY:29.0917,x:-755.9,y:99.7},0).wait(1).to({scaleX:0.3692,scaleY:0.2839,skewX:-14.8589,skewY:27.9152,x:-735.3,y:109.85},0).wait(1).to({scaleX:0.3728,scaleY:0.3196,skewX:-16.0338,skewY:26.7386,x:-714.7,y:120.05},0).wait(1).to({scaleX:0.3765,scaleY:0.3553,skewX:-17.2088,skewY:25.5621,x:-694.05,y:130.15},0).wait(1).to({scaleX:0.3802,scaleY:0.3495,skewX:-15.9107,skewY:24.4186,x:-676.65,y:151.7},0).wait(1).to({scaleX:0.3838,scaleY:0.3437,skewX:-14.6126,skewY:23.275,x:-659.25,y:173.2},0).wait(1).to({scaleX:0.3875,scaleY:0.3378,skewX:-13.3145,skewY:22.1315,x:-641.85,y:194.75},0).wait(1).to({scaleY:0.3475,skewX:-16.6317,skewY:20.8835,x:-624.3,y:216.3},0).wait(1).to({scaleY:0.3571,skewX:-19.9488,skewY:19.6355,x:-606.75,y:237.8},0).wait(1).to({scaleY:0.3872,skewX:-20.4524,skewY:18.453,x:-607.25,y:238.9},0).wait(1).to({scaleY:0.4173,skewX:-20.9559,skewY:17.2704,x:-607.85,y:239.95},0).wait(1).to({scaleY:0.4475,skewX:-21.4594,skewY:16.0879,x:-608.4,y:241.05},0).wait(1).to({scaleY:0.4776,skewX:-20.7128,skewY:16.1555,x:-594.55,y:248.6},0).wait(1).to({scaleY:0.5077,skewX:-19.9661,skewY:16.2232,x:-580.7,y:256.1},0).to({_off:true},1).wait(49));

	// Bluefrogi
	this.instance_13 = new lib.lookside_Blue();
	this.instance_13.setTransform(-1049.65,346.4,0.2442,0.2354,0,0,159.4318,88.5,94.1);

	this.instance_14 = new lib.ENDSCREEN_BlueFrog();
	this.instance_14.setTransform(-790.2,255.8,0.6776,0.68,0,0,0,73.5,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13,p:{regX:88.5,regY:94.1,x:-1049.65}}]},58).to({state:[{t:this.instance_13,p:{regX:89.9,regY:94,x:-1031.65}}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},10).wait(51));

	// jumpBlue
	this.instance_15 = new lib.jumperBlue();
	this.instance_15.setTransform(-1023.15,318,0.4,0.2952,-14.9972,0,0,89.2,90.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(61).to({_off:false},0).wait(1).to({regX:95,regY:95,scaleX:0.366,scaleY:0.2882,rotation:0,skewX:-10.377,skewY:-12.5559,x:-992.45,y:303.95},0).wait(1).to({scaleX:0.3319,scaleY:0.2811,skewX:-5.7551,skewY:-10.1129,x:-964.4,y:289},0).wait(1).to({scaleX:0.2979,scaleY:0.2739,skewX:-1.1332,skewY:-7.6699,x:-936.4,y:274.05},0).wait(1).to({scaleY:0.2805,skewX:3.5759,skewY:-5.1701,x:-917.8,y:269.4},0).wait(1).to({scaleY:0.2871,skewX:8.2849,skewY:-2.6703,x:-899.3,y:264.75},0).wait(1).to({scaleY:0.2937,skewX:12.9939,skewY:-0.1705,x:-880.7,y:260.05},0).wait(1).to({scaleY:0.3003,skewX:15.2031,skewY:-0.1705,x:-854.45,y:256.05},0).wait(1).to({scaleY:0.3069,skewX:17.4123,x:-828.15,y:252.05},0).to({_off:true},1).wait(51));

	// butterfly_open
	this.instance_16 = new lib.butterfly_open_1();
	this.instance_16.setTransform(-1039.7,-331.75,0.1765,0.3382,0,120.3355,134.979);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:70.5,regY:68,scaleX:0.1854,scaleY:0.3449,skewX:117.8959,skewY:134.3634,x:-1063.7,y:-322.65},0).wait(1).to({scaleX:0.1944,scaleY:0.3515,skewX:115.4528,skewY:133.7469,x:-1059.1,y:-310.7},0).wait(1).to({scaleX:0.2033,scaleY:0.3581,skewX:113.0097,skewY:133.1305,x:-1054.45,y:-298.75},0).wait(1).to({scaleX:0.2122,scaleY:0.3647,skewX:110.5667,skewY:132.5141,x:-1049.7,y:-286.65},0).wait(1).to({scaleX:0.2211,scaleY:0.3714,skewX:108.1236,skewY:131.8976,x:-1045,y:-274.6},0).wait(1).to({scaleX:0.23,scaleY:0.378,skewX:105.6805,skewY:131.2812,x:-1040.25,y:-262.4},0).wait(1).to({scaleX:0.2389,scaleY:0.3846,skewX:103.2375,skewY:130.6648,x:-1035.45,y:-250.2},0).wait(1).to({scaleX:0.242,scaleY:0.3824,skewX:100.6398,skewY:121.724,x:-1025.3,y:-237.9},0).wait(1).to({scaleX:0.245,scaleY:0.3802,skewX:98.0422,skewY:112.7832,x:-1014.9,y:-225.85},0).wait(1).to({scaleX:0.2481,scaleY:0.378,skewX:95.4446,skewY:103.8424,x:-1004.2,y:-214.25},0).wait(1).to({scaleX:0.2511,scaleY:0.3758,skewX:92.847,skewY:94.9016,x:-993.2,y:-203},0).wait(1).to({scaleX:0.2542,scaleY:0.3736,skewX:90.2493,skewY:85.9608,x:-982.15,y:-192.25},0).wait(1).to({scaleX:0.2354,scaleY:0.3713,skewX:83.7298,skewY:70.4603,x:-964.95,y:-187.8},0).wait(1).to({scaleX:0.2166,scaleY:0.3691,skewX:77.2103,skewY:54.9597,x:-948.55,y:-184.35},0).wait(1).to({scaleX:0.2231,scaleY:0.3669,skewX:70.8382,skewY:53.7777,x:-934.45,y:-177.7},0).wait(1).to({scaleX:0.2296,scaleY:0.3647,skewX:64.4661,skewY:52.5956,x:-920.15,y:-171.25},0).wait(1).to({scaleX:0.2361,scaleY:0.3625,skewX:58.094,skewY:51.4135,x:-905.5,y:-164.95},0).wait(1).to({scaleX:0.2426,scaleY:0.3603,skewX:54.7217,skewY:53.2313,x:-886.3,y:-165.5},0).wait(1).to({scaleX:0.2491,scaleY:0.358,skewX:51.3493,skewY:55.049,x:-867.05,y:-166.15},0).wait(1).to({scaleX:0.2556,scaleY:0.3558,skewX:47.977,skewY:56.8667,x:-847.75,y:-166.85},0).wait(1).to({scaleX:0.2621,scaleY:0.3536,skewX:44.6047,skewY:58.6844,x:-828.5,y:-167.65},0).wait(1).to({scaleX:0.2357,scaleY:0.3528,skewX:44.4806,skewY:63.438,x:-814.2,y:-173.9},0).wait(1).to({scaleX:0.2093,scaleY:0.3521,skewX:44.3564,skewY:68.1915,x:-799.75,y:-180.4},0).wait(1).to({scaleX:0.1828,scaleY:0.3513,skewX:44.2323,skewY:72.9451,x:-785.05,y:-187.15},0).wait(1).to({scaleX:0.1737,scaleY:0.3505,skewX:40.6195,skewY:69.4869,x:-763.7,y:-195.65},0).wait(1).to({scaleX:0.1646,scaleY:0.3497,skewX:37.0067,skewY:66.0287,x:-742.45,y:-204.25},0).wait(1).to({scaleX:0.1555,scaleY:0.349,skewX:33.3939,skewY:62.5705,x:-721.2,y:-213},0).wait(1).to({scaleX:0.1904,scaleY:0.3482,skewX:32.8855,skewY:62.2165,x:-709.55,y:-214.05},0).wait(1).to({scaleX:0.2253,scaleY:0.3474,skewX:32.377,skewY:61.8624,x:-697.85,y:-215.1},0).wait(1).to({scaleX:0.2602,scaleY:0.3467,skewX:31.8685,skewY:61.5084,x:-686.15,y:-216.2},0).wait(1).to({scaleX:0.2951,scaleY:0.3459,skewX:31.36,skewY:61.1543,x:-674.4,y:-217.25},0).wait(1).to({scaleX:0.2879,scaleY:0.3451,skewX:38.2721,skewY:70.418,x:-667.7,y:-218.05},0).wait(1).to({scaleX:0.2807,scaleY:0.3443,skewX:45.1842,skewY:79.6817,x:-660.75,y:-219.6},0).wait(1).to({scaleX:0.2736,scaleY:0.3436,skewX:52.0963,skewY:88.9454,x:-653.55,y:-221.9},0).wait(1).to({scaleX:0.2664,scaleY:0.3428,skewX:59.0084,skewY:98.2091,x:-645.9,y:-224.95},0).wait(1).to({scaleX:0.2417,scaleY:0.342,skewX:66.6396,skewY:103.7957,x:-635.2,y:-223.2},0).wait(1).to({scaleX:0.217,scaleY:0.3413,skewX:74.2707,skewY:109.3822,x:-623.9,y:-221.6},0).wait(1).to({scaleX:0.1923,scaleY:0.3405,skewX:81.9019,skewY:114.9688,x:-611.65,y:-220.2},0).wait(1).to({scaleX:0.2795,scaleY:0.3397,skewX:89.5228,skewY:120.554,x:-602.8,y:-212.05},0).wait(1).to({scaleX:0.2676,scaleY:0.3389,skewX:81.9408,skewY:113.8771,x:-588.6,y:-200.6},0).wait(1).to({scaleX:0.2556,scaleY:0.3382,skewX:74.3587,skewY:107.2003,x:-574.15,y:-189.65},0).wait(1).to({scaleX:0.2436,scaleY:0.3374,skewX:66.7767,skewY:100.5234,x:-559.35,y:-179.05},0).wait(1).to({scaleX:0.2316,scaleY:0.3366,skewX:59.1946,skewY:93.8465,x:-544.35,y:-168.95},0).wait(1).to({scaleX:0.1264,scaleY:0.3359,skewX:58.9586,skewY:62.0534,x:-526.45,y:-178.9},0).wait(1).to({scaleX:0.1301,scaleY:0.3351,skewX:59.0063,skewY:64.4284,x:-514.2,y:-180.15},0).wait(1).to({scaleX:0.1338,scaleY:0.3343,skewX:59.0541,skewY:66.8034,x:-501.9,y:-181.4},0).wait(1).to({scaleX:0.1375,scaleY:0.3335,skewX:59.1018,skewY:69.1783,x:-489.6,y:-182.7},0).wait(1).to({scaleX:0.1412,scaleY:0.3328,skewX:47.9003,skewY:60.3041,x:-478.2,y:-192.9},0).wait(1).to({scaleX:0.1448,scaleY:0.332,skewX:36.6988,skewY:51.4299,x:-466.25,y:-203.95},0).wait(1).to({scaleX:0.1758,scaleY:0.3312,skewX:40.5144,skewY:57.5752,x:-459.85,y:-215.8},0).wait(1).to({scaleX:0.2067,scaleY:0.3305,skewX:44.3299,skewY:63.7204,x:-453.85,y:-227.6},0).wait(1).to({scaleX:0.2376,scaleY:0.3297,skewX:39.7302,skewY:61.4504,x:-440.7,y:-229.55},0).wait(1).to({scaleX:0.2446,scaleY:0.3289,skewX:38.8878,skewY:62.9357,x:-430.3,y:-233.55},0).wait(1).to({scaleX:0.2515,scaleY:0.3281,skewX:28.0447,skewY:54.4203,x:-414.05,y:-237},0).wait(1).to({scaleX:0.2585,scaleY:0.3274,skewX:62.2005,skewY:90.9037,x:-423.6,y:-247.3},0).wait(1).to({scaleX:0.2655,scaleY:0.3266,skewX:96.3563,skewY:127.3871,x:-426.75,y:-268.3},0).wait(1).to({scaleX:0.2692,scaleY:0.3274,skewX:83.3876,skewY:114.4187,x:-404.3,y:-258.6},0).wait(1).to({scaleX:0.273,scaleY:0.3283,skewX:70.4189,skewY:101.4503,x:-380.2,y:-249.85},0).wait(1).to({scaleX:0.2768,scaleY:0.3291,skewX:57.4502,skewY:88.4818,x:-354.7,y:-242.4},0).wait(1).to({scaleX:0.2805,scaleY:0.3299,skewX:44.4814,skewY:75.5134,x:-328.1,y:-236.55},0).wait(1).to({scaleX:0.2665,scaleY:0.3307,skewX:56.4625,skewY:87.495,x:-329.9,y:-237.35},0).wait(1).to({scaleX:0.2524,scaleY:0.3316,skewX:68.4436,skewY:99.4766,x:-330.45,y:-239.45},0).wait(1).to({scaleX:0.2384,scaleY:0.3324,skewX:80.4247,skewY:111.4582,x:-329.6,y:-242.7},0).wait(1).to({scaleX:0.2244,scaleY:0.3332,skewX:92.4058,skewY:123.4398,x:-327.1,y:-246.65},0).wait(1).to({scaleX:0.2103,scaleY:0.334,skewX:104.3869,skewY:135.4214,x:-322.9,y:-250.95},0).wait(1).to({scaleX:0.2107,scaleY:0.3348,skewX:107.3506,skewY:138.3843,x:-317,y:-248.45},0).wait(1).to({scaleX:0.2111,scaleY:0.3357,skewX:110.3143,skewY:141.3472,x:-311,y:-245.9},0).wait(1).to({scaleX:0.2115,scaleY:0.3365,skewX:113.2779,skewY:144.3101,x:-304.95,y:-243.45},0).wait(1).to({scaleX:0.2119,scaleY:0.3373,skewX:116.2416,skewY:147.2729,x:-298.8,y:-241},0).wait(1).to({scaleX:0.2123,scaleY:0.3382,skewX:119.2053,skewY:150.2358,x:-292.6,y:-238.45},0).wait(1).to({scaleX:0.2126,scaleY:0.339,skewX:149.1681,skewY:180.1979,x:-286.15,y:-249.2},0).wait(1).to({scaleX:0.186,scaleY:0.3398,skewX:156.6927,skewY:187.7206,x:-281.3,y:-246.95},0).wait(1).to({scaleX:0.1594,scaleY:0.3406,skewX:164.2172,skewY:195.2433,x:-276.15,y:-243.95},0).wait(1).to({scaleX:0.2529,scaleY:0.3415,skewX:179.2096,skewY:210.2184,x:-281.25,y:-241.15},0).wait(1).to({scaleX:0.222,scaleY:0.3423,skewX:194.194,skewY:225.1992,x:-277.45,y:-233},0).wait(1).to({scaleX:0.1912,scaleY:0.3431,skewX:209.1785,skewY:240.1799,x:-274,y:-221.75},0).wait(1).to({scaleX:0.2433,scaleY:0.3439,skewX:227.4536,skewY:258.4536,x:-287.35,y:-214.8},0).wait(1).to({scaleX:0.2118,scaleY:0.3447,skewX:227.6559,skewY:258.6544,x:-309.25,y:-205.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3456,skewX:227.8582,skewY:258.8552,x:-315.7,y:-200.55},0).wait(1).to({scaleX:0.1487,scaleY:0.3464,skewX:228.0606,skewY:259.0559,x:-322.15,y:-196.05},0).wait(1).to({scaleX:0.1172,scaleY:0.3472,skewX:228.2629,skewY:259.2567,x:-328.6,y:-191.5},0).wait(1).to({scaleX:0.1739,scaleY:0.348,skewX:228.4668,skewY:259.4565,x:-346.25,y:-174.7},0).wait(1).to({scaleX:0.2306,scaleY:0.3489,skewX:179.1709,skewY:210.1564,x:-356.15,y:-165.1},0).wait(1).to({scaleX:0.2004,scaleY:0.3497,skewX:156.5889,skewY:175.2691,x:-356.8,y:-150.4},0).wait(1).to({scaleX:0.1702,scaleY:0.3505,skewX:134.0069,skewY:140.3819,x:-351.15,y:-135.15},0).wait(1).to({scaleX:0.1695,scaleY:0.3513,skewX:128.9869,skewY:140.2881,x:-347.5,y:-129.95},0).wait(1).to({scaleX:0.1689,scaleY:0.3522,skewX:123.9668,skewY:140.1943,x:-343.75,y:-124.7},0).wait(1).to({scaleX:0.1682,scaleY:0.353,skewX:118.9468,skewY:140.1005,x:-339.85,y:-119.25},0).wait(1).to({scaleX:0.1411,scaleY:0.3538,skewX:119.0001,skewY:145.0762,x:-338.95,y:-121.2},0).wait(1).to({scaleX:0.1141,scaleY:0.3546,skewX:119.0534,skewY:150.0518,x:-337.8,y:-122.95},0).wait(1).to({scaleX:0.1296,scaleY:0.3555,skewX:119.0522,skewY:150.0498,x:-327.8,y:-115.95},0).wait(1).to({scaleX:0.1451,scaleY:0.3563,skewX:119.0509,skewY:150.0479,x:-317.8,y:-108.9},0).wait(1).to({scaleX:0.1606,scaleY:0.3571,skewX:114.0501,skewY:145.0463,x:-311.25,y:-105.65},0).wait(1).to({scaleX:0.1761,scaleY:0.3579,skewX:109.0492,skewY:140.0446,x:-304.25,y:-102.25},0).wait(1).to({scaleX:0.1916,scaleY:0.3588,skewX:104.0483,skewY:135.043,x:-296.95,y:-98.6},0).wait(1).to({scaleX:0.1859,scaleY:0.3596,skewX:89.025,skewY:120.0186,x:-287.75,y:-100.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3604,skewX:74.0018,skewY:104.9942,x:-276.6,y:-102.55},0).wait(1).to({scaleX:0.1745,scaleY:0.3612,skewX:58.9785,skewY:89.9697,x:-263.8,y:-106.3},0).wait(1).to({scaleX:0.1689,scaleY:0.3621,skewX:36.4555,skewY:67.4456,x:-256.35,y:-112.95},0).wait(1).to({scaleX:0.1632,scaleY:0.3629,skewX:13.9326,skewY:44.9215,x:-247.55,y:-124.2},0).wait(1).to({scaleX:0.1575,scaleY:0.3637,skewX:-1.0903,skewY:29.8975,x:-247.4,y:-126.7},0).wait(1).to({scaleX:0.1518,scaleY:0.3646,skewX:-16.1131,skewY:14.8735,x:-248,y:-131.2},0).wait(1).to({scaleX:0.1659,scaleY:0.3654,skewX:-38.661,skewY:-1.2997,x:-245.8,y:-139.35},0).wait(1).to({scaleX:0.18,scaleY:0.3662,skewX:-61.2088,skewY:-17.473,x:-246.85,y:-151.05},0).wait(1).to({scaleX:0.1727,scaleY:0.367,skewX:-65.3024,skewY:-27.9432,x:-268.6,y:-172},0).wait(1).to({scaleX:0.1655,skewX:-72.082,skewY:-41.1028,x:-288,y:-174.2},0).wait(1).to({scaleX:0.1071,skewX:-96.9956,skewY:-66.0247,x:-319.5,y:-184.2},0).wait(1).to({scaleX:0.1646,skewX:-118.0543,skewY:-87.078,x:-324,y:-184.1},0).wait(1).to({scaleX:0.2221,skewX:-139.113,skewY:-108.1313,x:-334.4,y:-181},0).wait(1).to({scaleX:0.234,skewX:-160.1914,skewY:-127.6546,x:-346.55,y:-184.95},0).wait(1).to({scaleX:0.2459,skewX:-181.2697,skewY:-147.1778,x:-359,y:-183.9},0).wait(1).to({scaleX:0.2578,skewX:-203.8115,skewY:-168.1646,x:-351.8,y:-165.65},0).wait(1).to({scaleX:0.2697,skewX:-226.3533,skewY:-189.1513,x:-340.7,y:-142.8},0).wait(1).to({skewX:-233.8528,skewY:-196.6508,x:-334.7,y:-132.5},0).wait(1).to({skewX:-241.3523,skewY:-204.1503,x:-328.1,y:-122.1},0).wait(1).to({skewX:-248.8518,skewY:-211.6498,x:-331.35,y:-115.5},0).wait(1).to({skewX:-256.3513,skewY:-219.1493,x:-333.85,y:-109},0).wait(1).to({skewX:-278.8503,skewY:-241.6483,x:-333.55,y:-104.35},0).wait(1).to({skewX:-301.3493,skewY:-264.1473,x:-328.1,y:-102.9},0).wait(1).to({regX:0,regY:0,skewX:-301.3478,skewY:-264.1507,x:-304.85,y:-134.8},0).wait(1));

	// RAFT
	this.instance_17 = new lib.mc_raft_MAIN();
	this.instance_17.setTransform(-76.85,68.8,0.6168,0.6181,0,0,0,227.6,132.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1097,-355,1479.9,732.1);


(lib.MC_MAIN_GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FORGI_ENTER_MAIN_SCREEN();
	this.instance.setTransform(1458.15,403.2,1,1,0,0,0,493.4,71.1);

	this.islandA = new lib.MAINSCREEN_IslandA();
	this.islandA.name = "islandA";
	this.islandA.setTransform(1228.5,678.5,1,1,0,0,0,77.5,41.5);

	this.islandB = new lib.MAINSCREEN_IslandB();
	this.islandB.name = "islandB";
	this.islandB.setTransform(59.5,678.5,1,1,0,0,0,77.5,41.5);

	this.instance_1 = new lib.whiteline();
	this.instance_1.setTransform(-5,637,0.6709,1);

	this.text = new cjs.Text("רפסודה", "14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(1208.25,580.45);

	this.text_1 = new cjs.Text("מתוך", "14px 'Heebo'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 35;
	this.text_1.parent = this;
	this.text_1.setTransform(1210.85,606.95);

	this.GEZA = new lib.GEZA();
	this.GEZA.name = "GEZA";
	this.GEZA.setTransform(825.05,62.65,1,1,0,0,0,433.7,62.4);

	this.instance_2 = new lib.Game_boradkey();
	this.instance_2.setTransform(1152.1,189.65,1,1,0,0,0,93,67);

	this.SubjectGame_txt = new cjs.Text("", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(77.7,113.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.6).curveTo(-3.1,4,-3.7,2.9).curveTo(-4.3,1.9,-4.3,0.4).lineTo(-4.3,-0.4).curveTo(-4.3,-1.9,-3.8,-2.9).curveTo(-3.3,-4,-2.3,-4.6).curveTo(-1.3,-5.1,0.2,-5.1).curveTo(1.4,-5.1,2.3,-4.7).curveTo(3.2,-4.3,3.7,-3.6).curveTo(4.1,-2.9,4.3,-2.1).lineTo(2.8,-2.1).curveTo(2.7,-2.6,2.4,-3.1).curveTo(2.1,-3.5,1.6,-3.8).curveTo(1,-4,0.2,-4).curveTo(-0.9,-4,-1.5,-3.6).curveTo(-2.2,-3.2,-2.5,-2.3).curveTo(-2.8,-1.5,-2.8,-0.4).lineTo(-2.8,0.4).curveTo(-2.8,1.5,-2.4,2.4).curveTo(-2,3.2,-1.3,3.6).curveTo(-0.6,4,0.4,4).lineTo(1.6,3.9).curveTo(2.1,3.8,2.4,3.6).lineTo(2.8,3.3).lineTo(2.8,1.1).lineTo(0.2,1.1).lineTo(0.2,0).lineTo(4.3,0).lineTo(4.3,3.7).lineTo(3.6,4.3).curveTo(3.2,4.6,2.4,4.9).curveTo(1.6,5.1,0.3,5.1).curveTo(-1,5.1,-2.1,4.6).closePath();
	this.shape.setTransform(98.825,59.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.5).curveTo(-3.3,4,-3.9,2.9).curveTo(-4.5,1.8,-4.5,0.3).lineTo(-4.5,-0.3).curveTo(-4.5,-1.8,-3.9,-2.9).curveTo(-3.3,-4,-2.3,-4.5).curveTo(-1.3,-5.1,-0,-5.1).curveTo(1.4,-5.1,2.4,-4.5).curveTo(3.4,-4,3.9,-2.9).curveTo(4.5,-1.8,4.5,-0.3).lineTo(4.5,0.3).curveTo(4.5,1.8,3.9,2.9).curveTo(3.4,4,2.4,4.5).curveTo(1.4,5.1,0,5.1).curveTo(-1.3,5.1,-2.3,4.5).closePath().moveTo(-1.6,-3.6).curveTo(-2.3,-3.2,-2.6,-2.3).curveTo(-3,-1.5,-3,-0.3).lineTo(-3,0.3).curveTo(-3,1.5,-2.6,2.3).curveTo(-2.3,3.2,-1.6,3.6).curveTo(-0.9,4,0,4).curveTo(1,4,1.6,3.6).curveTo(2.3,3.2,2.6,2.3).curveTo(3,1.5,3,0.3).lineTo(3,-0.3).curveTo(3,-1.5,2.6,-2.3).curveTo(2.3,-3.2,1.6,-3.6).curveTo(0.9,-4,-0,-4).curveTo(-0.9,-4,-1.6,-3.6).closePath();
	this.shape_1.setTransform(88.225,59.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,5).lineTo(0,0.9).lineTo(0.5,0.9).lineTo(1,0.8).lineTo(1.4,0.7).lineTo(1.3,0.5).lineTo(-0.3,0.5).lineTo(0,0.9).lineTo(-2.6,0.9).lineTo(-2.6,-0.1).lineTo(-2.9,-0.1).lineTo(-2.9,0.9).lineTo(-2.6,0.9).lineTo(-2.6,5).lineTo(-4,5).lineTo(-4,-5).lineTo(-0.4,-5).curveTo(0.9,-5,1.8,-4.6).curveTo(2.6,-4.3,3.1,-3.6).curveTo(3.5,-3,3.5,-2).curveTo(3.5,-1.3,3.2,-0.7).curveTo(2.9,-0.2,2.3,0.2).curveTo(1.9,0.5,1.4,0.7).lineTo(4,4.9).lineTo(4,5).closePath().moveTo(-0.3,-0.1).curveTo(0.5,-0.1,1,-0.4).curveTo(1.5,-0.6,1.8,-1.1).curveTo(2.1,-1.5,2.1,-2).curveTo(2.1,-2.9,1.5,-3.4).curveTo(0.9,-3.9,-0.4,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,-0.1).closePath().moveTo(0.5,0.9).lineTo(0,0.9).lineTo(-0.3,0.5).lineTo(1.3,0.5).lineTo(1.4,0.7).lineTo(1,0.8).lineTo(0.5,0.9).closePath().moveTo(-2.6,0.9).closePath().moveTo(-2.9,0.9).lineTo(-2.9,-0.1).lineTo(-2.6,-0.1).lineTo(-2.6,0.9).closePath().moveTo(-2.6,-0.1).lineTo(-2.6,-3.9).lineTo(-0.4,-3.9).curveTo(0.9,-3.9,1.5,-3.4).curveTo(2.1,-2.9,2.1,-2).curveTo(2.1,-1.5,1.8,-1.1).curveTo(1.5,-0.6,1,-0.4).curveTo(0.5,-0.1,-0.3,-0.1).closePath().moveTo(-2.6,-0.1).closePath();
	this.shape_2.setTransform(78.575,59.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,5).lineTo(-3.4,-5).lineTo(-2.3,-5).lineTo(-2,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).lineTo(-2,-3.9).lineTo(-2,-5).lineTo(-2,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2,-3.9).lineTo(-2,-0.5).lineTo(2.7,-0.5).lineTo(2.7,0.6).lineTo(-2,0.6).lineTo(-2,-0.5).lineTo(-2.3,-0.5).lineTo(-2.3,0.6).lineTo(-2,0.6).lineTo(-2,5).closePath().moveTo(-2,0.6).lineTo(-2.3,0.6).lineTo(-2.3,-0.5).lineTo(-2,-0.5).lineTo(-2,0.6).closePath().moveTo(-2,-3.9).closePath();
	this.shape_3.setTransform(69.325,59.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.4,5).lineTo(2.3,2.4).lineTo(3.2,2.4).lineTo(3.2,1.3).lineTo(1.9,1.3).lineTo(2.3,2.4).lineTo(-2.3,2.4).lineTo(-1.8,1.3).lineTo(1.9,1.3).lineTo(-0,-3.4).lineTo(0.3,-4.1).lineTo(0.3,-5).lineTo(0.7,-5).lineTo(4.9,5).closePath().moveTo(-4.9,5).lineTo(-0.7,-5).lineTo(-0.3,-5).lineTo(-0.3,-4.1).lineTo(-0,-3.4).lineTo(1.9,1.3).lineTo(-1.8,1.3).lineTo(-0,-3.4).lineTo(-1.8,1.3).lineTo(-3.1,1.3).lineTo(-3.1,2.4).lineTo(-2.3,2.4).lineTo(-3.4,5).closePath().moveTo(2.3,2.4).lineTo(1.9,1.3).lineTo(3.2,1.3).lineTo(3.2,2.4).closePath().moveTo(2.3,2.4).closePath().moveTo(-3.1,2.4).lineTo(-3.1,1.3).lineTo(-1.8,1.3).lineTo(-2.3,2.4).closePath().moveTo(-1.8,1.3).closePath().moveTo(-1.8,1.3).closePath().moveTo(-0,-3.4).lineTo(-0.3,-4.1).lineTo(-0.3,-5).lineTo(0.3,-5).lineTo(0.3,-4.1).lineTo(-0,-3.4).closePath();
	this.shape_4.setTransform(55.65,59.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,5).lineTo(-2.1,3.9).lineTo(-2.3,3.9).lineTo(-2.3,5).lineTo(-3.5,5).lineTo(-3.5,-5).lineTo(-2.3,-5).lineTo(-2.1,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-5).lineTo(-2.1,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-0.7).lineTo(-2.3,-0.7).lineTo(-2.3,0.4).lineTo(-2.1,0.4).lineTo(-2.1,3.9).lineTo(3.5,3.9).lineTo(3.5,5).closePath().moveTo(-2.3,5).lineTo(-2.3,3.9).lineTo(-2.1,3.9).lineTo(-2.1,5).closePath().moveTo(-2.1,3.9).closePath().moveTo(-2.1,0.4).lineTo(-2.1,-0.7).lineTo(2.7,-0.7).lineTo(2.7,0.4).closePath().moveTo(-2.3,0.4).lineTo(-2.3,-0.7).lineTo(-2.1,-0.7).lineTo(-2.1,0.4).closePath().moveTo(-2.1,-3.9).closePath();
	this.shape_5.setTransform(112.075,36.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,5).lineTo(-1.4,0.3).lineTo(-0.7,-0.3).lineTo(-0.5,-0.6).lineTo(-0.8,-0.9).lineTo(-1.6,0.1).lineTo(-1.4,0.3).lineTo(-2.8,1.6).lineTo(-2.8,-0.1).lineTo(-3.6,0.7).lineTo(-3.3,2.1).lineTo(-2.8,1.6).lineTo(-2.8,5).lineTo(-4.3,5).lineTo(-4.3,-5).lineTo(-2.8,-5).lineTo(-2.8,-0.1).lineTo(-1.6,-1.3).lineTo(2.1,-5).lineTo(3.9,-5).lineTo(-0.5,-0.6).lineTo(4.3,5).closePath().moveTo(-3.6,0.7).lineTo(-2.8,-0.1).lineTo(-2.8,1.6).lineTo(-3.3,2.1).closePath().moveTo(-1.4,0.3).closePath().moveTo(-1.4,0.3).lineTo(-1.6,0.1).lineTo(-0.8,-0.9).lineTo(-0.5,-0.6).lineTo(-0.7,-0.3).lineTo(-1.4,0.3).closePath();
	this.shape_6.setTransform(103,36.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,5).lineTo(-0.8,-5).lineTo(0.8,-5).lineTo(0.8,5).closePath();
	this.shape_7.setTransform(95.35,36.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,5).lineTo(-1.9,3.9).lineTo(-2.2,3.9).lineTo(-2.2,5).lineTo(-3.4,5).lineTo(-3.4,-5).lineTo(-1.9,-5).lineTo(-1.9,3.9).lineTo(3.4,3.9).lineTo(3.4,5).closePath().moveTo(-2.2,5).lineTo(-2.2,3.9).lineTo(-1.9,3.9).lineTo(-1.9,5).closePath().moveTo(-1.9,3.9).closePath();
	this.shape_8.setTransform(89.475,36.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,5).lineTo(-4,-5).lineTo(0.1,-5).curveTo(1.3,-5,2.2,-4.6).curveTo(3.1,-4.2,3.6,-3.5).curveTo(4,-2.8,4,-1.9).curveTo(4,-1,3.6,-0.3).curveTo(3.1,0.4,2.2,0.7).curveTo(1.3,1.1,0.1,1.1).lineTo(-2.6,1.1).lineTo(-2.6,0).lineTo(0.1,0).curveTo(1,0,1.5,-0.2).curveTo(2,-0.5,2.2,-0.9).curveTo(2.5,-1.4,2.5,-1.9).curveTo(2.5,-2.4,2.2,-2.9).curveTo(2,-3.3,1.5,-3.6).curveTo(1,-3.9,0.1,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,0).lineTo(-2.8,0).lineTo(-2.8,1.1).lineTo(-2.6,1.1).lineTo(-2.6,5).closePath().moveTo(-2.8,1.1).lineTo(-2.8,0).lineTo(-2.6,0).lineTo(-2.6,1.1).closePath().moveTo(0.1,0).lineTo(-2.6,0).lineTo(-2.6,-3.9).lineTo(0.1,-3.9).curveTo(1,-3.9,1.5,-3.6).curveTo(2,-3.3,2.2,-2.9).curveTo(2.5,-2.4,2.5,-1.9).curveTo(2.5,-1.4,2.2,-0.9).curveTo(2,-0.5,1.5,-0.2).curveTo(1,0,0.1,0).closePath().moveTo(-2.6,0).closePath().moveTo(-2.6,0).closePath();
	this.shape_9.setTransform(76.35,36.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,5).lineTo(4.1,1.1).lineTo(4.2,-3.1).lineTo(5.1,-5).lineTo(4.2,-3.1).lineTo(0.6,5).lineTo(-0.6,5).lineTo(-4.2,-3.1).lineTo(-4.3,-5).lineTo(-3.6,-5).lineTo(-0,3.2).lineTo(3.6,-5).lineTo(4.3,-5).lineTo(4.2,-3.1).lineTo(4.3,-5).lineTo(5.1,-5).lineTo(5.5,-5).lineTo(5.5,5).closePath().moveTo(-5.5,5).lineTo(-5.5,-5).lineTo(-5.1,-5).lineTo(-4.2,-3.1).lineTo(-4.1,1.1).lineTo(-4.1,5).closePath().moveTo(-5.1,-5).lineTo(-4.3,-5).lineTo(-4.2,-3.1).closePath().moveTo(-5.1,-5).closePath();
	this.shape_10.setTransform(64.225,36.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.6).curveTo(-2.9,4.3,-3.5,3.5).curveTo(-4,2.8,-4,1.7).lineTo(-4,-5).lineTo(-2.5,-5).lineTo(-2.5,1.7).curveTo(-2.5,2.4,-2.2,2.9).curveTo(-1.9,3.5,-1.3,3.7).curveTo(-0.8,4,0,4).curveTo(0.8,4,1.3,3.7).curveTo(1.9,3.5,2.2,2.9).curveTo(2.6,2.4,2.6,1.7).lineTo(2.6,-5).lineTo(4,-5).lineTo(4,1.7).curveTo(4,2.8,3.5,3.5).curveTo(2.9,4.3,2,4.6).curveTo(1.1,5.1,0,5.1).curveTo(-1.1,5.1,-2,4.6).closePath();
	this.shape_11.setTransform(52.325,37.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,4.7).curveTo(-2.6,4.4,-3,3.7).curveTo(-3.5,3.1,-3.5,2.2).lineTo(-2,2.2).curveTo(-2,3.1,-1.4,3.5).curveTo(-0.9,3.9,0,4).curveTo(0.6,3.9,1,3.7).curveTo(1.5,3.5,1.7,3.1).curveTo(2,2.6,2.1,2).lineTo(2.1,-5).lineTo(3.5,-5).lineTo(3.5,2).curveTo(3.5,3,3.1,3.6).curveTo(2.6,4.4,1.8,4.7).curveTo(1.1,5,0,5.1).curveTo(-1,5,-1.8,4.7).closePath();
	this.shape_12.setTransform(42.55,37.05);

	this.instance_3 = new lib.brown_borad();
	this.instance_3.setTransform(82.7,80.2,1,1,0,0,0,74.6,84.3);

	this.raft3 = new lib.mc_raft();
	this.raft3.name = "raft3";
	this.raft3.setTransform(387.55,506.6,0.7067,0.5182,0,0,0,277.3,193.5);

	this.raft1 = new lib.mc_raft();
	this.raft1.name = "raft1";
	this.raft1.setTransform(203.75,316.6,0.7067,0.5182,0,0,0,309.2,215.8);

	this.raft4 = new lib.mc_raft();
	this.raft4.name = "raft4";
	this.raft4.setTransform(905.2,483.65,0.7067,0.5182,0,0,0,277.5,193.7);

	this.raft2 = new lib.mc_raft();
	this.raft2.name = "raft2";
	this.raft2.setTransform(636.65,305.05,0.7067,0.5182,0,0,0,277.4,193.5);

	this.instance_4 = new lib.GameBackground();
	this.instance_4.setTransform(0,0,0.6653,0.5719);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-40.3,-30.2).lineTo(40.3,-30.2).lineTo(40.3,30.2).lineTo(-40.3,30.2).closePath();
	this.shape_13.setTransform(431.65,92.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#BB9065").beginStroke().moveTo(-40.3,30.2).lineTo(-40.3,-30.2).lineTo(40.3,-30.2).lineTo(40.3,30.2).closePath();
	this.shape_14.setTransform(431.65,92.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_4},{t:this.raft2},{t:this.raft4},{t:this.raft1},{t:this.raft3},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance_2},{t:this.GEZA},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.islandB},{t:this.islandA},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_MAIN_GAME, new cjs.Rectangle(-18,-4.1,1683.1,724.1), null);


(lib.MC_homePage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_boradkey();
	this.instance.setTransform(1133.55,566.75,1,1,0,0,0,93,67);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(548.1,461.75,1.0259,1.028,0,0,0,54,53.6);

	this.instance_2 = new lib.namegameH1();
	this.instance_2.setTransform(359,107);

	this.text = new cjs.Text("עזרו לי להצטרף אל החברים שלי\nפרוגי לא יודע לשחות והוא צריך לעבור בהצלחה את הנהר כדי להצטרף לחבריו", "bold 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(916.7,269.95);

	this.instance_3 = new lib.green_btn();
	this.instance_3.setTransform(859.55,494.5,1,1,0,0,0,270,44.5);

	this.instance_4 = new lib.Homescreenbackground();
	this.instance_4.setTransform(0,0,0.6691,0.6929);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(44.2,32.8).curveTo(40.2,28.8,39,23.6).curveTo(29.4,27.2,16.5,27.2).curveTo(1.9,27.2,-8.5,22.6).curveTo(-15.9,19.3,-18,15).curveTo(-31.8,24.2,-51.4,24.2).curveTo(-70.9,24.2,-84.8,15).curveTo(-98.6,5.8,-98.6,-7.2).curveTo(-98.6,-20.2,-84.8,-29.4).curveTo(-70.9,-38.6,-51.4,-38.6).curveTo(-31.8,-38.6,-18,-29.4).curveTo(-4.1,-20.2,-4.1,-7.2).curveTo(-4.1,-3.9,-5,-0.9).curveTo(4.3,-4.1,16.5,-4.1).curveTo(25.1,-4.1,32.2,-2.5).lineTo(37.6,-2.6).curveTo(62.9,-2.6,80.7,0.9).curveTo(98.6,4.3,98.6,9.2).curveTo(98.6,14,80.7,17.5).lineTo(77.8,18).lineTo(77.8,18.9).curveTo(77.8,27.1,72,32.8).curveTo(66.3,38.6,58.1,38.6).curveTo(50,38.6,44.2,32.8).closePath();
	this.shape.setTransform(478.675,400.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_homePage, new cjs.Rectangle(0,0,1288.6,741.4), null);


(lib.FrogiSideLook_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.instance_1 = new lib.sad_frogi();
	this.instance_1.setTransform(52.5,56.05,0.5866,0.5864,0,0,180,89.5,95.6);

	this.instance_2 = new lib.frogiwin();
	this.instance_2.setTransform(52.75,56.95,0.4362,0.5504,0,29.097,31.3941,136.2,120.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.HappyFrogi();
	this.instance_3.setTransform(45.9,42.8,0.9722,1.0467,0,0,0,54,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:111.5,regY:89.5,skewX:29.0974,skewY:31.3954,x:51.7,y:7.2},0).wait(1).to({y:2.8},0).wait(1).to({y:-1.65},0).wait(1).to({y:-6.1},0).wait(1).to({y:6.15},0).wait(1).to({y:18.4},0).wait(1).to({y:30.65},0).wait(1).to({y:42.9},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-74.4,131,186.4);


(lib.FrogiAQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frgiraft();
	this.instance.setTransform(536.05,-43.95,0.6886,0.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiAQ, new cjs.Rectangle(536.1,-43.9,72.29999999999995,76.19999999999999), null);


(lib.FrogiQuestionBoxG = function(mode,startPosition,loop,reversed) {
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
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer_1
	this.instance = new lib.frogiwin();
	this.instance.setTransform(52.75,57,0.486,0.6177,0,29.0935,31.3914,135.2,120);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(60.75,33.45,1.1232,1.2809,0,0,0,54.1,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.5,regY:89.5,skewX:29.0941,skewY:31.3915,x:52.05,y:5.2},0).wait(1).to({y:0.8},0).wait(1).to({y:-3.65},0).wait(1).to({y:-8.1},0).wait(1).to({y:4.15},0).wait(1).to({y:16.4},0).wait(1).to({y:28.65},0).wait(1).to({y:40.9},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-84.5,146.4,202);


(lib.Playagain_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שחקו שוב", "bold 20px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(125.3,22.1);

	this.instance = new lib.end_btn();
	this.instance.setTransform(87.85,39.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Playagain_btn, new cjs.Rectangle(0,0,176.1,79.5), null);


(lib.MainMenu_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("תפריט ראשי", "bold 20px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 125;
	this.text.parent = this;
	this.text.setTransform(134.25,22.1);

	this.MainMenu_btn = new lib.end_btn();
	this.MainMenu_btn.name = "MainMenu_btn";
	this.MainMenu_btn.setTransform(87.85,39.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MainMenu_btn},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MainMenu_btn, new cjs.Rectangle(0,0,176.1,79.5), null);


(lib.umute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(25.2,23.3,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.mute();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umute_btn, new cjs.Rectangle(0,0,72,67), null);


(lib.umusic_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(26.6,23.85,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.music();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umusic_btn, new cjs.Rectangle(0,0,73,67), null);


(lib.music_btn = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.music();

	this.umusic_btn = new lib.umusic_btn();
	this.umusic_btn.name = "umusic_btn";
	this.umusic_btn.setTransform(36.5,33.5,1,1,0,0,0,36.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umusic_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.endAnimiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.end_animiton();
	this.instance.setTransform(1173.6,428.6,1,1,0,0,0,132.6,81.6);

	this.SubjectGame_txt = new cjs.Text("", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(76.8,113.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.6).curveTo(-3.1,4,-3.7,2.9).curveTo(-4.3,1.9,-4.3,0.4).lineTo(-4.3,-0.4).curveTo(-4.3,-1.9,-3.8,-2.9).curveTo(-3.3,-4,-2.3,-4.6).curveTo(-1.3,-5.1,0.2,-5.1).curveTo(1.4,-5.1,2.3,-4.7).curveTo(3.2,-4.3,3.7,-3.6).curveTo(4.1,-2.9,4.3,-2.1).lineTo(2.8,-2.1).curveTo(2.7,-2.6,2.4,-3.1).curveTo(2.1,-3.5,1.6,-3.8).curveTo(1,-4,0.2,-4).curveTo(-0.9,-4,-1.5,-3.6).curveTo(-2.2,-3.2,-2.5,-2.3).curveTo(-2.8,-1.5,-2.8,-0.4).lineTo(-2.8,0.4).curveTo(-2.8,1.5,-2.4,2.4).curveTo(-2,3.2,-1.3,3.6).curveTo(-0.6,4,0.4,4).lineTo(1.6,3.9).curveTo(2.1,3.8,2.4,3.6).lineTo(2.8,3.3).lineTo(2.8,1.1).lineTo(0.2,1.1).lineTo(0.2,0).lineTo(4.3,0).lineTo(4.3,3.7).lineTo(3.6,4.3).curveTo(3.2,4.6,2.4,4.9).curveTo(1.6,5.1,0.3,5.1).curveTo(-1,5.1,-2.1,4.6).closePath();
	this.shape.setTransform(97.875,59.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.5).curveTo(-3.3,4,-3.9,2.9).curveTo(-4.5,1.8,-4.5,0.3).lineTo(-4.5,-0.3).curveTo(-4.5,-1.8,-3.9,-2.9).curveTo(-3.3,-4,-2.3,-4.5).curveTo(-1.3,-5.1,-0,-5.1).curveTo(1.4,-5.1,2.4,-4.5).curveTo(3.4,-4,3.9,-2.9).curveTo(4.5,-1.8,4.5,-0.3).lineTo(4.5,0.3).curveTo(4.5,1.8,3.9,2.9).curveTo(3.4,4,2.4,4.5).curveTo(1.4,5.1,0,5.1).curveTo(-1.3,5.1,-2.3,4.5).closePath().moveTo(-1.6,-3.6).curveTo(-2.3,-3.2,-2.6,-2.3).curveTo(-3,-1.5,-3,-0.3).lineTo(-3,0.3).curveTo(-3,1.5,-2.6,2.3).curveTo(-2.3,3.2,-1.6,3.6).curveTo(-0.9,4,0,4).curveTo(1,4,1.6,3.6).curveTo(2.3,3.2,2.6,2.3).curveTo(3,1.5,3,0.3).lineTo(3,-0.3).curveTo(3,-1.5,2.6,-2.3).curveTo(2.3,-3.2,1.6,-3.6).curveTo(0.9,-4,-0,-4).curveTo(-0.9,-4,-1.6,-3.6).closePath();
	this.shape_1.setTransform(87.275,59.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,5).lineTo(0,0.9).lineTo(0.5,0.9).lineTo(1,0.8).lineTo(1.4,0.7).lineTo(1.3,0.5).lineTo(-0.3,0.5).lineTo(0,0.9).lineTo(-2.6,0.9).lineTo(-2.6,-0.1).lineTo(-0.3,-0.1).curveTo(0.5,-0.1,1,-0.4).curveTo(1.5,-0.6,1.8,-1.1).curveTo(2.1,-1.5,2.1,-2).curveTo(2.1,-2.9,1.5,-3.4).curveTo(0.9,-3.9,-0.4,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,-0.1).lineTo(-2.9,-0.1).lineTo(-2.9,0.9).lineTo(-2.6,0.9).lineTo(-2.6,5).lineTo(-4,5).lineTo(-4,-5).lineTo(-0.4,-5).curveTo(0.9,-5,1.8,-4.6).curveTo(2.6,-4.3,3.1,-3.6).curveTo(3.5,-3,3.5,-2).curveTo(3.5,-1.3,3.2,-0.7).curveTo(2.9,-0.2,2.3,0.2).curveTo(1.9,0.5,1.4,0.7).lineTo(4,4.9).lineTo(4,5).closePath().moveTo(0,0.9).lineTo(-0.3,0.5).lineTo(1.3,0.5).lineTo(1.4,0.7).lineTo(1,0.8).lineTo(0.5,0.9).closePath().moveTo(0,0.9).closePath().moveTo(-2.6,0.9).closePath().moveTo(-2.9,0.9).lineTo(-2.9,-0.1).lineTo(-2.6,-0.1).lineTo(-2.6,0.9).closePath().moveTo(-0.3,-0.1).lineTo(-2.6,-0.1).lineTo(-2.6,-3.9).lineTo(-0.4,-3.9).curveTo(0.9,-3.9,1.5,-3.4).curveTo(2.1,-2.9,2.1,-2).curveTo(2.1,-1.5,1.8,-1.1).curveTo(1.5,-0.6,1,-0.4).curveTo(0.5,-0.1,-0.3,-0.1).closePath();
	this.shape_2.setTransform(77.625,59.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,5).lineTo(-3.4,-5).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2,-3.9).lineTo(-2,-0.5).lineTo(2.7,-0.5).lineTo(2.7,0.6).lineTo(-2,0.6).lineTo(-2,-0.5).lineTo(-2.3,-0.5).lineTo(-2.3,0.6).lineTo(-2,0.6).lineTo(-2,5).closePath().moveTo(-2,0.6).lineTo(-2.3,0.6).lineTo(-2.3,-0.5).lineTo(-2,-0.5).lineTo(-2,0.6).closePath().moveTo(-2,-3.9).lineTo(-2,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).closePath().moveTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2,-5).lineTo(-2,-3.9).closePath().moveTo(-2.3,-5).closePath();
	this.shape_3.setTransform(68.375,59.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.4,5).lineTo(2.4,2.4).lineTo(3.2,2.4).lineTo(3.2,1.3).lineTo(1.9,1.3).lineTo(3.2,1.3).lineTo(3.2,2.4).lineTo(2.4,2.4).lineTo(1.9,1.3).lineTo(2.4,2.4).lineTo(-2.3,2.4).lineTo(-1.9,1.3).lineTo(-2.3,2.4).lineTo(-3,2.4).lineTo(-3,1.3).lineTo(-1.9,1.3).lineTo(1.9,1.3).lineTo(0,-3.4).lineTo(-0.3,-4.1).lineTo(-0.3,-5).lineTo(-0.3,-4.1).lineTo(0,-3.4).lineTo(-1.9,1.3).lineTo(-3,1.3).lineTo(-3,2.4).lineTo(-2.3,2.4).lineTo(-3.3,5).lineTo(-4.9,5).lineTo(-0.6,-5).lineTo(-0.3,-5).lineTo(0.4,-5).lineTo(0.3,-4.1).lineTo(0,-3.4).lineTo(0.3,-4.1).lineTo(0.4,-5).lineTo(0.6,-5).lineTo(4.9,5).closePath().moveTo(1.9,1.3).closePath().moveTo(-1.9,1.3).lineTo(0,-3.4).lineTo(1.9,1.3).closePath().moveTo(0,-3.4).closePath();
	this.shape_4.setTransform(54.7,59.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,5).lineTo(-2.1,3.9).lineTo(-2.3,3.9).lineTo(-2.3,5).lineTo(-3.5,5).lineTo(-3.5,-5).lineTo(-2.3,-5).lineTo(-2.1,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-5).lineTo(-2.1,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-0.7).lineTo(-2.3,-0.7).lineTo(-2.3,0.4).lineTo(-2.1,0.4).lineTo(-2.1,3.9).lineTo(3.5,3.9).lineTo(3.5,5).closePath().moveTo(-2.3,5).lineTo(-2.3,3.9).lineTo(-2.1,3.9).lineTo(-2.1,5).closePath().moveTo(-2.1,3.9).closePath().moveTo(-2.1,0.4).lineTo(-2.1,-0.7).lineTo(2.7,-0.7).lineTo(2.7,0.4).closePath().moveTo(-2.3,0.4).lineTo(-2.3,-0.7).lineTo(-2.1,-0.7).lineTo(-2.1,0.4).closePath().moveTo(-2.1,-3.9).closePath();
	this.shape_5.setTransform(111.125,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,5).lineTo(-1.4,0.4).lineTo(-0.7,-0.3).lineTo(-0.4,-0.6).lineTo(-0.7,-0.9).lineTo(-1.6,0.1).lineTo(-1.4,0.4).lineTo(-2.8,1.6).lineTo(-2.8,-0.1).lineTo(-3.6,0.7).lineTo(-3.3,2.1).lineTo(-2.8,1.6).lineTo(-2.8,5).lineTo(-4.2,5).lineTo(-4.2,-5).lineTo(-2.8,-5).lineTo(-2.8,-0.1).lineTo(-1.6,-1.3).lineTo(2.2,-5).lineTo(3.9,-5).lineTo(-0.4,-0.6).lineTo(4.2,5).closePath().moveTo(-3.6,0.7).lineTo(-2.8,-0.1).lineTo(-2.8,1.6).lineTo(-3.3,2.1).closePath().moveTo(-1.6,0.1).lineTo(-0.7,-0.9).lineTo(-0.4,-0.6).lineTo(-0.7,-0.3).lineTo(-1.4,0.4).closePath().moveTo(-0.4,-0.6).closePath();
	this.shape_6.setTransform(102.05,37.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,5).lineTo(-0.7,-5).lineTo(0.7,-5).lineTo(0.7,5).closePath();
	this.shape_7.setTransform(94.4,37.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,5).lineTo(-1.9,3.9).lineTo(-2.2,3.9).lineTo(-2.2,5).lineTo(-3.4,5).lineTo(-3.4,-5).lineTo(-1.9,-5).lineTo(-1.9,3.9).lineTo(3.4,3.9).lineTo(3.4,5).closePath().moveTo(-2.2,5).lineTo(-2.2,3.9).lineTo(-1.9,3.9).lineTo(-1.9,5).closePath().moveTo(-1.9,3.9).closePath();
	this.shape_8.setTransform(88.525,37.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,5).lineTo(-4,-5).lineTo(0.1,-5).curveTo(1.4,-5,2.2,-4.6).curveTo(3.1,-4.2,3.5,-3.5).curveTo(4,-2.8,4,-1.9).curveTo(4,-1,3.5,-0.3).curveTo(3.1,0.4,2.2,0.7).curveTo(1.4,1.1,0.1,1.1).lineTo(-2.6,1.1).lineTo(-2.6,0).lineTo(-2.9,0).lineTo(-2.9,1.1).lineTo(-2.6,1.1).lineTo(-2.6,5).closePath().moveTo(0.1,0).curveTo(1,0,1.5,-0.2).curveTo(2,-0.5,2.3,-0.9).curveTo(2.5,-1.4,2.5,-1.9).curveTo(2.5,-2.4,2.3,-2.9).curveTo(2,-3.3,1.5,-3.6).curveTo(1,-3.9,0.1,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,0).lineTo(0.1,0).closePath().moveTo(-2.6,1.1).lineTo(-2.9,1.1).lineTo(-2.9,0).lineTo(-2.6,0).lineTo(-2.6,1.1).closePath().moveTo(0.1,0).lineTo(-2.6,0).lineTo(-2.6,-3.9).lineTo(0.1,-3.9).curveTo(1,-3.9,1.5,-3.6).curveTo(2,-3.3,2.3,-2.9).curveTo(2.5,-2.4,2.5,-1.9).curveTo(2.5,-1.4,2.3,-0.9).curveTo(2,-0.5,1.5,-0.2).curveTo(1,0,0.1,0).closePath().moveTo(-2.6,0).closePath();
	this.shape_9.setTransform(75.4,37.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,5).lineTo(4.1,1.1).lineTo(4.2,-3.1).lineTo(5.1,-5).lineTo(4.2,-3.1).lineTo(0.6,5).lineTo(-0.6,5).lineTo(-4.2,-3.1).lineTo(-4.3,-5).lineTo(-3.6,-5).lineTo(-0,3.2).lineTo(3.6,-5).lineTo(4.3,-5).lineTo(4.2,-3.1).lineTo(4.3,-5).lineTo(5.1,-5).lineTo(5.5,-5).lineTo(5.5,5).closePath().moveTo(-5.5,5).lineTo(-5.5,-5).lineTo(-5.1,-5).lineTo(-4.2,-3.1).lineTo(-4.1,1.1).lineTo(-4.1,5).closePath().moveTo(-5.1,-5).lineTo(-4.3,-5).lineTo(-4.2,-3.1).closePath().moveTo(-5.1,-5).closePath();
	this.shape_10.setTransform(63.275,37.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.6).curveTo(-2.9,4.3,-3.5,3.6).curveTo(-4,2.8,-4,1.7).lineTo(-4,-5.1).lineTo(-2.5,-5.1).lineTo(-2.5,1.7).curveTo(-2.5,2.5,-2.2,2.9).curveTo(-1.9,3.4,-1.3,3.7).curveTo(-0.8,3.9,0,3.9).curveTo(0.8,3.9,1.3,3.7).curveTo(1.9,3.4,2.2,2.9).curveTo(2.6,2.5,2.6,1.7).lineTo(2.6,-5.1).lineTo(4,-5.1).lineTo(4,1.7).curveTo(4,2.8,3.5,3.6).curveTo(2.9,4.3,2,4.6).curveTo(1.1,5,0,5.1).curveTo(-1.1,5,-2,4.6).closePath();
	this.shape_11.setTransform(51.375,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,4.7).curveTo(-2.6,4.4,-3.1,3.7).curveTo(-3.5,3.1,-3.5,2.1).lineTo(-2,2.1).curveTo(-2,3.1,-1.5,3.6).curveTo(-0.9,3.9,-0,3.9).curveTo(0.6,3.9,1.1,3.7).curveTo(1.5,3.5,1.8,3.1).curveTo(2,2.7,2,2).lineTo(2,-5.1).lineTo(3.5,-5.1).lineTo(3.5,2).curveTo(3.5,2.9,3,3.7).curveTo(2.6,4.3,1.9,4.7).curveTo(1,5.1,-0,5.1).curveTo(-1,5.1,-1.8,4.7).closePath();
	this.shape_12.setTransform(41.6,37.3);

	this.instance_1 = new lib.brown_borad();
	this.instance_1.setTransform(81.8,80.45,1,1,0,0,0,74.6,84.3);

	this.instance_2 = new lib.EndAnimitonBackground();
	this.instance_2.setTransform(0,0,0.628,0.6424);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endAnimiton, new cjs.Rectangle(-56,-8,1343.4,739.7), null);


(lib.BetweenQA = function(mode,startPosition,loop,reversed) {
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
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Bubbles
	this.instance = new lib.waves();
	this.instance.setTransform(-21.2,81.9,1,1,0,0,0,206.8,122.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({x:-70.2},0).wait(1).to({x:-119.25},0).wait(1).to({x:-168.25},0).wait(1).to({x:-217.3},0).wait(1).to({x:-233.45},0).wait(1).to({x:-249.65},0).wait(1).to({x:-265.8},0).wait(1).to({x:-282},0).wait(1).to({x:-335.8,y:82.25},0).wait(1).to({x:-389.65,y:82.55},0).wait(1).to({x:-433.75},0).wait(1).to({x:-477.9},0).wait(1).to({x:-552.4},0).wait(1).to({x:-626.9},0).wait(1).to({x:-651.7,y:78.95},0).wait(1).to({x:-676.5,y:75.35},0).wait(1).to({x:-721.6},0).wait(1).to({x:-766.7},0).wait(1).to({x:-807.85},0).wait(1).to({x:-862.75},0).wait(1).to({x:-917.65},0).wait(1).to({x:-972.6},0).wait(2));

	// raft
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(132.6,81.7,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.9,regY:81.6,x:4.9,y:81.6},0).wait(1).to({x:-72.15},0).wait(1).to({x:-122.35},0).wait(1).to({x:-172.6},0).wait(1).to({x:-222.85},0).wait(1).to({x:-273.1},0).wait(1).to({x:-287.75},0).wait(1).to({x:-302.4},0).wait(1).to({x:-317.05},0).wait(1).to({x:-331.75},0).wait(1).to({x:-381.9},0).wait(1).to({x:-432.1},0).wait(1).to({x:-481},0).wait(1).to({x:-529.95},0).wait(1).to({x:-608.2},0).wait(1).to({x:-686.45},0).wait(1).to({x:-704.75},0).wait(1).to({x:-723.1},0).wait(1).to({x:-769.15},0).wait(1).to({x:-815.2},0).wait(1).to({x:-842.1},0).wait(1).to({x:-897.8},0).wait(1).to({x:-953.5},0).wait(1).to({x:-1009.2},0).wait(1).to({regX:132.6,regY:81.7,x:-958.5,y:81.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1179.4,-47.5,1394.5,253);


(lib.FrogiSideLook_2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// MAIN
	this.instance = new lib.FrogiSideLook_1();
	this.instance.setTransform(-161.7,114.35,0.7761,1,0,0,0,52.4,56);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(56));

	// raft
	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(-142.3,163.5,0.5222,0.5231,0,0,0,227.6,132.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

	// jumpingFrogi
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(77.95,78.8,0.6539,0.3383,0,0,180,9.1,90.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:94,regY:93.5,skewX:14.9997,skewY:194.9997,x:-20.65,y:6.6},0).wait(1).to({skewX:10.7141,skewY:190.7141,x:-33.9,y:7.05},0).wait(1).to({skewX:6.4284,skewY:186.4284,x:-46.8,y:7.65},0).wait(1).to({skewX:2.1428,skewY:182.1428,x:-59.4,y:8.2},0).wait(1).to({skewX:-2.1428,skewY:177.8572,x:-90.05,y:23.15},0).wait(1).to({skewX:-6.4284,skewY:173.5716,x:-120.55,y:38.15},0).wait(1).to({skewX:-10.7141,skewY:169.2859,x:-132.25,y:52.25},0).wait(1).to({skewX:-14.9997,skewY:165.0003,x:-143.65,y:66.4},0).to({_off:true},1).wait(56));

	// frogi
	this.instance_3 = new lib.FrogiSideLook_1();
	this.instance_3.setTransform(54.5,69.25,0.8768,0.8768,0,0,0,52.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(65));

	// butterfly
	this.instance_4 = new lib.butterfly_open_1();
	this.instance_4.setTransform(-1081.7,-459.35,0.2696,0.367,0,103.652,140.8479);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:70.5,regY:68,scaleX:0.3505,scaleY:0.3757,skewX:103.7472,skewY:140.9416,x:-1085.25,y:-414.75},0).wait(1).to({scaleX:0.3171,scaleY:0.3843,skewX:103.7124,skewY:140.9063,x:-1043.55,y:-381.25},0).wait(1).to({scaleX:0.2836,scaleY:0.393,skewX:103.6777,skewY:140.8711,x:-1019.4,y:-374.35},0).wait(1).to({scaleX:0.2501,scaleY:0.4017,skewX:103.6429,skewY:140.8358,x:-995.35,y:-367.5},0).wait(1).to({scaleX:0.2166,scaleY:0.4104,skewX:103.6081,skewY:140.8005,x:-971.3,y:-360.65},0).wait(1).to({scaleX:0.2726,scaleY:0.419,skewX:100.5907,skewY:137.7801,x:-955,y:-348.95},0).wait(1).to({scaleX:0.3285,scaleY:0.4277,skewX:97.5734,skewY:134.7598,x:-938.3,y:-336.85},0).wait(1).to({scaleX:0.3844,scaleY:0.4364,skewX:94.556,skewY:131.7394,x:-921.2,y:-324.45},0).wait(1).to({scaleX:0.4404,scaleY:0.4451,skewX:91.5387,skewY:128.7191,x:-903.6,y:-311.75},0).wait(1).to({scaleX:0.4963,scaleY:0.4537,skewX:88.5213,skewY:125.6987,x:-885.6,y:-298.85},0).wait(1).to({scaleX:0.4273,scaleY:0.4624,skewX:81.0308,skewY:118.2081,x:-859.6,y:-287.65},0).wait(1).to({scaleX:0.3584,scaleY:0.4711,skewX:73.5402,skewY:110.7175,x:-833.9,y:-277.45},0).wait(1).to({scaleX:0.2894,scaleY:0.4797,skewX:66.0497,skewY:103.2268,x:-808.65,y:-268.15},0).wait(1).to({scaleX:0.2204,scaleY:0.4884,skewX:58.5591,skewY:95.7362,x:-784.1,y:-259.6},0).wait(1).to({scaleX:0.2294,scaleY:0.4971,skewX:54.7527,skewY:91.9304,x:-761.75,y:-277.1},0).wait(1).to({scaleX:0.2384,scaleY:0.5057,skewX:50.9463,skewY:88.1247,x:-739.2,y:-294.7},0).wait(1).to({scaleX:0.2474,scaleY:0.5144,skewX:47.1399,skewY:84.3189,x:-716.4,y:-312.4},0).wait(1).to({scaleX:0.2564,scaleY:0.5231,skewX:43.3335,skewY:80.5131,x:-693.35,y:-330.25},0).wait(1).to({scaleX:0.2654,scaleY:0.514,skewX:42.8222,skewY:80.0019,x:-674.05,y:-343.45},0).wait(1).to({scaleX:0.2744,scaleY:0.5049,skewX:42.311,skewY:79.4907,x:-654.75,y:-356.75},0).wait(1).to({scaleX:0.2618,scaleY:0.4958,skewX:51.4501,skewY:88.6294,x:-624.7,y:-372.9},0).wait(1).to({scaleX:0.2491,scaleY:0.4867,skewX:60.5892,skewY:97.768,x:-594.9,y:-383.95},0).wait(1).to({scaleX:0.2364,scaleY:0.4776,skewX:69.7284,skewY:106.9067,x:-563.9,y:-395.7},0).wait(1).to({scaleX:0.2238,scaleY:0.4685,skewX:78.8675,skewY:116.0453,x:-531.7,y:-407.85},0).wait(1).to({scaleX:0.2111,scaleY:0.4594,skewX:88.0066,skewY:125.184,x:-498.2,y:-420.2},0).wait(1).to({scaleX:0.2498,scaleY:0.4503,skewX:90.178,skewY:127.3555,x:-482.25,y:-415.65},0).wait(1).to({scaleX:0.2886,scaleY:0.4412,skewX:92.3493,skewY:129.5269,x:-466.35,y:-411.2},0).wait(1).to({scaleX:0.3273,scaleY:0.432,skewX:94.5207,skewY:131.6984,x:-450.6,y:-406.8},0).wait(1).to({scaleX:0.3661,scaleY:0.4229,skewX:96.6921,skewY:133.8698,x:-434.9,y:-402.65},0).wait(1).to({scaleX:0.4049,scaleY:0.4138,skewX:98.8635,skewY:136.0413,x:-419.3,y:-398.55},0).wait(1).to({scaleX:0.4436,scaleY:0.4047,skewX:101.0348,skewY:138.2127,x:-403.75,y:-394.5},0).wait(1).to({scaleX:0.4824,scaleY:0.3956,skewX:103.2062,skewY:140.3842,x:-388.35,y:-390.7},0).wait(1).to({scaleX:0.4521,skewX:105.6836,skewY:142.8618,x:-364.5,y:-382.05},0).wait(1).to({scaleX:0.4219,skewX:108.1611,skewY:145.3393,x:-340.45,y:-373.35},0).wait(1).to({scaleX:0.3917,skewX:110.6385,skewY:147.8169,x:-316.25,y:-364.5},0).wait(1).to({scaleX:0.3615,skewX:113.1159,skewY:150.2945,x:-291.85,y:-355.4},0).wait(1).to({scaleX:0.3312,skewX:115.5934,skewY:152.772,x:-267.2,y:-346.2},0).wait(1).to({scaleX:0.301,skewX:118.0708,skewY:155.2496,x:-242.45,y:-336.9},0).wait(1).to({scaleX:0.3046,skewX:110.2953,skewY:148.0976,x:-229.1,y:-329.45},0).wait(1).to({scaleX:0.3081,skewX:102.5197,skewY:140.9457,x:-214.9,y:-321.9},0).wait(1).to({scaleX:0.3117,skewX:94.7442,skewY:133.7937,x:-199.95,y:-314.4},0).wait(1).to({scaleX:0.3153,skewX:86.9686,skewY:126.6417,x:-184.25,y:-307.1},0).wait(1).to({scaleX:0.3188,skewX:79.1931,skewY:119.4898,x:-167.75,y:-300.05},0).wait(1).to({scaleX:0.3224,skewX:79.017,skewY:119.9373,x:-154.25,y:-298.15},0).wait(1).to({scaleX:0.3259,skewX:78.841,skewY:120.3848,x:-140.65,y:-296.25},0).wait(1).to({scaleX:0.3295,skewX:78.6649,skewY:120.8323,x:-127.15,y:-294.3},0).wait(1).to({scaleX:0.333,skewX:78.4889,skewY:121.2799,x:-113.55,y:-292.45},0).wait(1).to({scaleX:0.3366,skewX:78.3128,skewY:121.7274,x:-100.05,y:-290.5},0).wait(1).to({scaleX:0.341,skewX:67.4624,skewY:110.877,x:-76.2,y:-297.85},0).wait(1).to({scaleX:0.3455,skewX:56.6121,skewY:100.0266,x:-51.15,y:-306.25},0).wait(1).to({scaleX:0.3499,skewX:45.7617,skewY:89.1762,x:-24.95,y:-316.1},0).wait(1).to({scaleX:0.3544,skewX:34.9113,skewY:78.3257,x:1.95,y:-327.45},0).wait(1).to({scaleX:0.3588,skewX:24.061,skewY:67.4753,x:29.4,y:-340.5},0).wait(1).to({scaleX:0.3632,skewX:13.2106,skewY:56.6249,x:57,y:-355.25},0).wait(1).to({scaleX:0.3677,skewX:20.6932,skewY:64.1074,x:72.7,y:-359.05},0).wait(1).to({scaleX:0.3721,skewX:28.1757,skewY:71.5899,x:88.4,y:-363.6},0).wait(1).to({scaleX:0.3765,skewX:35.6583,skewY:79.0724,x:104,y:-368.95},0).wait(1).to({scaleX:0.381,skewX:43.1408,skewY:86.5549,x:119.75,y:-375.1},0).wait(1).to({skewX:35.641,skewY:79.0551,x:142.75,y:-389.7},0).wait(1).to({skewX:28.1412,skewY:71.5553,x:165.85,y:-405.1},0).wait(1).to({skewX:20.6414,skewY:64.0555,x:189.05,y:-421.4},0).wait(1).to({skewX:13.1416,skewY:56.5557,x:212.25,y:-438.5},0).wait(1).to({x:229,y:-454.9},0).wait(1).to({x:245.75,y:-471.3},0).wait(1).to({x:262.5,y:-487.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1159.7,-536.2,1443.1,769.1);


(lib.questionBox = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(3,1,1).moveTo(127.5,-68).lineTo(127.5,68).lineTo(-127.6,68).lineTo(-127.6,-68).closePath();
	this.shape.setTransform(127.55,68.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-127.5,68).lineTo(-127.5,-68).lineTo(127.5,-68).lineTo(127.5,68).closePath();
	this.shape_1.setTransform(127.55,68.025);

	this.instance = new lib.FrogiQuestionBoxR();
	this.instance.setTransform(344.15,121.5,0.7095,0.7001,0,0,0,52.6,56.2);

	this.instance_1 = new lib.FrogiQuestionBoxG();
	this.instance_1.setTransform(279.25,147.65,0.7189,0.6384,0,0,0,52.6,56.3);

	this.instance_2 = new lib.ICON_V();
	this.instance_2.setTransform(132,-23,1,1,0,0,0,24,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#00FF00").setStrokeStyle(3,1,1).moveTo(-127.6,-68).lineTo(127.5,-68).lineTo(127.5,68).lineTo(-127.6,68).closePath();
	this.shape_2.setTransform(127.55,68.025);

	this.instance_3 = new lib.sad_frogi();
	this.instance_3.setTransform(288.55,139.7,0.4162,0.4104,0,0,180,89.5,95.7);

	this.instance_4 = new lib.ICON_X();
	this.instance_4.setTransform(133,-24,1,1,0,0,0,22.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#FF0000").setStrokeStyle(3,1,1).moveTo(-127.6,-68).lineTo(127.5,-68).lineTo(127.5,68).lineTo(-127.6,68).closePath();
	this.shape_3.setTransform(127.55,68.025);

	this.instance_5 = new lib.FrogiQuestionBoxY();
	this.instance_5.setTransform(288.75,139.75,0.7096,0.7,0,0,0,52.8,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#FFF8C5").setStrokeStyle(3,1,1).moveTo(-127.6,-68).lineTo(127.5,-68).lineTo(127.5,68).lineTo(-127.6,68).closePath();
	this.shape_4.setTransform(127.55,68.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:344.15,y:121.5}}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.instance_4},{t:this.instance,p:{x:288.6,y:139.75}},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-47,333,229.7);


(lib.mute_btn = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.mute();

	this.umute_btn = new lib.umute_btn();
	this.umute_btn.name = "umute_btn";
	this.umute_btn.setTransform(36,33.5,1,1,0,0,0,36,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umute_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,67);


(lib.Q_Animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(137,637,1,1,0,0,180);

	this.instance_1 = new lib.bankofariver();
	this.instance_1.setTransform(1152,637);

	this.instance_2 = new lib.BetweenQA();
	this.instance_2.setTransform(1227,405.55,0.9455,0.8871,0,0,0,132.6,81.8);

	this.SubjectGame_txt = new cjs.Text("", "normal 400 14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 20;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(78.25,114.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.SubjectGame_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,4.6).curveTo(-3.1,4,-3.7,2.9).curveTo(-4.3,1.9,-4.3,0.4).lineTo(-4.3,-0.4).curveTo(-4.3,-1.9,-3.8,-2.9).curveTo(-3.3,-4,-2.3,-4.6).curveTo(-1.3,-5.1,0.2,-5.1).curveTo(1.4,-5.1,2.3,-4.7).curveTo(3.2,-4.3,3.7,-3.6).curveTo(4.1,-2.9,4.3,-2.1).lineTo(2.8,-2.1).curveTo(2.7,-2.6,2.4,-3.1).curveTo(2.1,-3.5,1.6,-3.8).curveTo(1,-4,0.2,-4).curveTo(-0.9,-4,-1.5,-3.6).curveTo(-2.2,-3.2,-2.5,-2.3).curveTo(-2.8,-1.5,-2.8,-0.4).lineTo(-2.8,0.4).curveTo(-2.8,1.5,-2.4,2.4).curveTo(-2,3.2,-1.3,3.6).curveTo(-0.6,4,0.4,4).lineTo(1.6,3.9).curveTo(2.1,3.8,2.4,3.6).lineTo(2.8,3.3).lineTo(2.8,1.1).lineTo(0.2,1.1).lineTo(0.2,0).lineTo(4.3,0).lineTo(4.3,3.7).lineTo(3.6,4.3).curveTo(3.2,4.6,2.4,4.9).curveTo(1.6,5.1,0.3,5.1).curveTo(-1,5.1,-2.1,4.6).closePath();
	this.shape.setTransform(99.375,60.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.5).curveTo(-3.3,4,-3.9,2.9).curveTo(-4.5,1.8,-4.5,0.3).lineTo(-4.5,-0.3).curveTo(-4.5,-1.8,-3.9,-2.9).curveTo(-3.3,-4,-2.3,-4.5).curveTo(-1.3,-5.1,-0,-5.1).curveTo(1.4,-5.1,2.4,-4.5).curveTo(3.4,-4,3.9,-2.9).curveTo(4.5,-1.8,4.5,-0.3).lineTo(4.5,0.3).curveTo(4.5,1.8,3.9,2.9).curveTo(3.4,4,2.4,4.5).curveTo(1.4,5.1,0,5.1).curveTo(-1.3,5.1,-2.3,4.5).closePath().moveTo(-1.6,-3.6).curveTo(-2.3,-3.2,-2.6,-2.3).curveTo(-3,-1.5,-3,-0.3).lineTo(-3,0.3).curveTo(-3,1.5,-2.6,2.3).curveTo(-2.3,3.2,-1.6,3.6).curveTo(-0.9,4,0,4).curveTo(1,4,1.6,3.6).curveTo(2.3,3.2,2.6,2.3).curveTo(3,1.5,3,0.3).lineTo(3,-0.3).curveTo(3,-1.5,2.6,-2.3).curveTo(2.3,-3.2,1.6,-3.6).curveTo(0.9,-4,-0,-4).curveTo(-0.9,-4,-1.6,-3.6).closePath();
	this.shape_1.setTransform(88.775,60.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,5).lineTo(0,0.9).lineTo(0.5,0.9).lineTo(1,0.8).lineTo(1.4,0.7).lineTo(1.3,0.5).lineTo(-0.3,0.5).lineTo(0,0.9).lineTo(-2.6,0.9).lineTo(-2.6,-0.1).lineTo(-2.9,-0.1).lineTo(-2.9,0.9).lineTo(-2.6,0.9).lineTo(-2.6,5).lineTo(-4,5).lineTo(-4,-5).lineTo(-0.4,-5).curveTo(0.9,-5,1.8,-4.6).curveTo(2.6,-4.3,3.1,-3.6).curveTo(3.5,-3,3.5,-2).curveTo(3.5,-1.3,3.2,-0.7).curveTo(2.9,-0.2,2.3,0.2).curveTo(1.9,0.5,1.4,0.7).lineTo(4,4.9).lineTo(4,5).closePath().moveTo(-0.3,-0.1).curveTo(0.5,-0.1,1,-0.4).curveTo(1.5,-0.6,1.8,-1.1).curveTo(2.1,-1.5,2.1,-2).curveTo(2.1,-2.9,1.5,-3.4).curveTo(0.9,-3.9,-0.4,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,-0.1).lineTo(-0.3,-0.1).closePath().moveTo(0,0.9).lineTo(-0.3,0.5).lineTo(1.3,0.5).lineTo(1.4,0.7).lineTo(1,0.8).lineTo(0.5,0.9).closePath().moveTo(-2.9,0.9).lineTo(-2.9,-0.1).lineTo(-2.6,-0.1).lineTo(-2.6,0.9).closePath().moveTo(-0.3,-0.1).lineTo(-2.6,-0.1).lineTo(-2.6,-3.9).lineTo(-0.4,-3.9).curveTo(0.9,-3.9,1.5,-3.4).curveTo(2.1,-2.9,2.1,-2).curveTo(2.1,-1.5,1.8,-1.1).curveTo(1.5,-0.6,1,-0.4).curveTo(0.5,-0.1,-0.3,-0.1).closePath().moveTo(-2.6,-0.1).closePath();
	this.shape_2.setTransform(79.125,60.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,5).lineTo(-3.4,-5).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2,-3.9).lineTo(-2,-0.5).lineTo(2.7,-0.5).lineTo(2.7,0.6).lineTo(-2,0.6).lineTo(-2,-0.5).lineTo(-2.3,-0.5).lineTo(-2.3,0.6).lineTo(-2,0.6).lineTo(-2,5).closePath().moveTo(-2.3,0.6).lineTo(-2.3,-0.5).lineTo(-2,-0.5).lineTo(-2,0.6).closePath().moveTo(-2,-3.9).lineTo(-2,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).closePath().moveTo(-2,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2,-5).lineTo(-2,-3.9).closePath().moveTo(-2.3,-5).closePath();
	this.shape_3.setTransform(69.875,60.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.4,5).lineTo(2.4,2.4).lineTo(3.2,2.4).lineTo(3.2,1.3).lineTo(1.9,1.3).lineTo(3.2,1.3).lineTo(3.2,2.4).lineTo(2.4,2.4).lineTo(1.9,1.3).lineTo(-0,-3.4).lineTo(-0.3,-4.1).lineTo(-0.3,-5).lineTo(-0.3,-4.1).lineTo(-0,-3.4).lineTo(1.9,1.3).lineTo(-1.8,1.3).lineTo(-0,-3.4).lineTo(-1.8,1.3).lineTo(1.9,1.3).lineTo(2.4,2.4).lineTo(-2.3,2.4).lineTo(-1.8,1.3).lineTo(-3,1.3).lineTo(-3,2.4).lineTo(-2.3,2.4).lineTo(-3,2.4).lineTo(-3,1.3).lineTo(-1.8,1.3).lineTo(-2.3,2.4).lineTo(-3.4,5).lineTo(-4.9,5).lineTo(-0.7,-5).lineTo(-0.3,-5).lineTo(0.3,-5).lineTo(0.3,-4.1).lineTo(-0,-3.4).lineTo(0.3,-4.1).lineTo(0.3,-5).lineTo(0.7,-5).lineTo(4.9,5).closePath().moveTo(-1.8,1.3).closePath();
	this.shape_4.setTransform(56.2,60.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,5).lineTo(-2.1,3.9).lineTo(-2.3,3.9).lineTo(-2.3,5).lineTo(-2.3,3.9).lineTo(-2.1,3.9).lineTo(-2.1,5).lineTo(-2.3,5).lineTo(-3.5,5).lineTo(-3.5,-5).lineTo(-2.3,-5).lineTo(-2.1,-5).lineTo(-2.1,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-5).lineTo(-2.3,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-5).lineTo(3.4,-5).lineTo(3.4,-3.9).lineTo(-2.1,-3.9).lineTo(-2.1,-0.7).lineTo(2.7,-0.7).lineTo(2.7,0.4).lineTo(-2.1,0.4).lineTo(-2.1,-0.7).lineTo(-2.3,-0.7).lineTo(-2.3,0.4).lineTo(-2.1,0.4).lineTo(-2.3,0.4).lineTo(-2.3,-0.7).lineTo(-2.1,-0.7).lineTo(-2.1,0.4).lineTo(-2.1,3.9).lineTo(3.5,3.9).lineTo(3.5,5).closePath();
	this.shape_5.setTransform(112.625,38.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,5).lineTo(-1.4,0.3).lineTo(-0.7,-0.3).lineTo(-0.4,-0.6).lineTo(4.3,5).closePath().moveTo(-4.3,5).lineTo(-4.3,-5).lineTo(-2.8,-5).lineTo(-2.8,-0.1).lineTo(-1.6,-1.3).lineTo(2.1,-5).lineTo(3.9,-5).lineTo(-0.4,-0.6).lineTo(-0.8,-0.9).lineTo(-1.6,0.1).lineTo(-1.4,0.3).lineTo(-2.8,1.6).lineTo(-2.8,-0.1).lineTo(-3.6,0.7).lineTo(-3.3,2.1).lineTo(-2.8,1.6).lineTo(-2.8,5).closePath().moveTo(-3.6,0.7).lineTo(-2.8,-0.1).lineTo(-2.8,1.6).lineTo(-3.3,2.1).closePath().moveTo(-1.4,0.3).closePath().moveTo(-1.4,0.3).lineTo(-1.6,0.1).lineTo(-0.8,-0.9).lineTo(-0.4,-0.6).lineTo(-0.7,-0.3).lineTo(-1.4,0.3).closePath().moveTo(-0.4,-0.6).closePath();
	this.shape_6.setTransform(103.55,38.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.8,5).lineTo(-0.8,-5).lineTo(0.8,-5).lineTo(0.8,5).closePath();
	this.shape_7.setTransform(95.9,38.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,5).lineTo(-1.9,3.9).lineTo(-2.2,3.9).lineTo(-2.2,5).lineTo(-3.4,5).lineTo(-3.4,-5).lineTo(-1.9,-5).lineTo(-1.9,3.9).lineTo(3.4,3.9).lineTo(3.4,5).closePath().moveTo(-2.2,5).lineTo(-2.2,3.9).lineTo(-1.9,3.9).lineTo(-1.9,5).closePath().moveTo(-1.9,3.9).closePath();
	this.shape_8.setTransform(90.025,38.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,5).lineTo(-4,-5).lineTo(0.1,-5).curveTo(1.3,-5,2.2,-4.6).curveTo(3.1,-4.2,3.6,-3.5).curveTo(4,-2.8,4,-1.9).curveTo(4,-1,3.6,-0.3).curveTo(3.1,0.4,2.2,0.7).curveTo(1.3,1.1,0.1,1.1).lineTo(-2.6,1.1).lineTo(-2.6,0).lineTo(-2.8,0).lineTo(-2.8,1.1).lineTo(-2.6,1.1).lineTo(-2.6,5).closePath().moveTo(0.1,0).curveTo(1,0,1.5,-0.2).curveTo(2,-0.5,2.2,-0.9).curveTo(2.5,-1.4,2.5,-1.9).curveTo(2.5,-2.4,2.2,-2.9).curveTo(2,-3.3,1.5,-3.6).curveTo(1,-3.9,0.1,-3.9).lineTo(-2.6,-3.9).lineTo(-2.6,0).lineTo(0.1,0).closePath().moveTo(-2.6,1.1).lineTo(-2.8,1.1).lineTo(-2.8,0).lineTo(-2.6,0).lineTo(-2.6,1.1).closePath().moveTo(0.1,0).lineTo(-2.6,0).lineTo(-2.6,-3.9).lineTo(0.1,-3.9).curveTo(1,-3.9,1.5,-3.6).curveTo(2,-3.3,2.2,-2.9).curveTo(2.5,-2.4,2.5,-1.9).curveTo(2.5,-1.4,2.2,-0.9).curveTo(2,-0.5,1.5,-0.2).curveTo(1,0,0.1,0).closePath().moveTo(-2.6,0).closePath();
	this.shape_9.setTransform(76.9,38.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,5).lineTo(4.1,1.1).lineTo(4.2,-3.1).lineTo(5.1,-5).lineTo(4.2,-3.1).lineTo(4.3,-5).lineTo(4.2,-3.1).lineTo(0.6,5).lineTo(-0.6,5).lineTo(-4.2,-3.1).lineTo(-4.3,-5).lineTo(-3.6,-5).lineTo(-0,3.2).lineTo(3.6,-5).lineTo(4.3,-5).lineTo(5.1,-5).lineTo(5.5,-5).lineTo(5.5,5).closePath().moveTo(-5.5,5).lineTo(-5.5,-5).lineTo(-5.1,-5).lineTo(-4.2,-3.1).lineTo(-4.1,1.1).lineTo(-4.1,5).closePath().moveTo(4.2,-3.1).closePath().moveTo(-5.1,-5).lineTo(-4.3,-5).lineTo(-4.2,-3.1).closePath().moveTo(-5.1,-5).closePath();
	this.shape_10.setTransform(64.775,38.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,4.7).curveTo(-2.9,4.3,-3.5,3.5).curveTo(-4,2.8,-4,1.7).lineTo(-4,-5).lineTo(-2.5,-5).lineTo(-2.5,1.7).curveTo(-2.5,2.4,-2.2,3).curveTo(-1.9,3.5,-1.3,3.7).curveTo(-0.8,3.9,0,4).curveTo(0.8,3.9,1.3,3.7).curveTo(1.9,3.5,2.2,3).curveTo(2.6,2.4,2.6,1.7).lineTo(2.6,-5).lineTo(4,-5).lineTo(4,1.7).curveTo(4,2.8,3.5,3.5).curveTo(2.9,4.3,2,4.7).curveTo(1.1,5,0,5.1).curveTo(-1.1,5,-2,4.7).closePath();
	this.shape_11.setTransform(52.875,38.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,4.7).curveTo(-2.6,4.4,-3.1,3.8).curveTo(-3.5,3.1,-3.5,2.2).lineTo(-2,2.2).curveTo(-2,3.1,-1.4,3.5).curveTo(-0.9,4,0,4).curveTo(0.6,4,1.1,3.8).curveTo(1.5,3.5,1.7,3.1).curveTo(2.1,2.7,2.1,2).lineTo(2.1,-5).lineTo(3.5,-5).lineTo(3.5,2).curveTo(3.5,3,3.1,3.6).curveTo(2.6,4.4,1.8,4.7).curveTo(1.1,5,0,5.1).curveTo(-1,5,-1.8,4.7).closePath();
	this.shape_12.setTransform(43.1,38.15);

	this.instance_3 = new lib.brown_borad();
	this.instance_3.setTransform(83.25,81.3,1,1,0,0,0,74.6,84.3);

	this.instance_4 = new lib.GameBackground();
	this.instance_4.setTransform(0,0,0.6653,0.5719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q_Animiton, new cjs.Rectangle(-18,-3,1325,723), null);


(lib.MC_Open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.MC_animation01 = new lib.FrogiSideLook_2();
	this.MC_animation01.name = "MC_animation01";
	this.MC_animation01.setTransform(1004.25,410.3,0.8571,0.9182);

	this.instance = new lib.OpenanimitonBackground();
	this.instance.setTransform(0,0,0.6695,0.6851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.MC_animation01}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_Open, new cjs.Rectangle(0,-22.2,1287.4,753.9000000000001), null);


// stage content:
(lib.GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop(); //עצירת כל הפריימים
		
		createjs.Sound.registerSound("sounds/gameSound.mp3", "GameSound"); //פנייה לסאונד משחק
		createjs.Sound.registerSound("sounds/success.mp3", "Success"); //פנייה לסאונד הצלחה
		createjs.Sound.registerSound("sounds/Failure.mp3", "Failure"); //פנייה לסאונד כישלון
		createjs.Sound.registerSound("sounds/Endofgame.mp3", "Endofgame"); //פנייה לסאונד סיום משחק
		stopMusic();
		
		var myChoice = 0; //משתנה המכיל את הבחירה של נושא המשחק
		var myGame; //משתנה המכיל את המערכים הדו-ממדיים של המשחק
		var positionX; //X-משתנה שמכיל מערך של ציר ה
		var positionY; //Yמשתנה שמכיל מערך של ציר ה
		var positionX3; // משתנה שמכיל מערך של ציר ה-X במצב של 3 מסיחים
		var positionY3; // משתנה שמכיל מערך של ציר ה-Y במצב של 3 מסיחים
		var positionX2; // משתנה שמכיל מערך של ציר ה-X במצב של 2 מסיחים
		var positionY2; // משתנה שמכיל מערך של ציר ה-Y במצב של 2 מסיחים
		var randomPositionX; //באופן רנדומלי Xמשתנה שמסדר את המערך של ציר ה 
		var randomPositionY; //באופן רנדומלי Yמשתנה שמסדר את המערך של ציר ה
		var randomPositionX3; // משתנה שמסדר את המערך של ציר הX באופן רנדומלי במצב של 3 מסיחים
		var randomPositionY3; // משתנה שמסדר את המערך של ציר ה Y במצב של 3 מסיחים
		var randomPositionX2; // משתנה שמסדר את המערך של ציר הX במצב של 2 מסיחים
		var randomPositionY2; // משתנה שמסדר את המערך של ציר הY במצב של 2 מסיחים
		var question; //משתנה המכיל הפניה לשאלה באופן רנדומלי
		var counter; //משתנה המכיל את מספר השאלות שנותרו לשחקן
		sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		var grade = 0; //ציון סופי
		var totalQuestions; //סך השאלות במשחק
		var setTime; //משתנה שיכיל את הגדרת הזמן עבור כל שאלה
		var timeCounter = 30; //משתנה המכיל את השניות לכל שאלה
		var sumErrors = 0; //משתנה המכיל את סך כל השגיאות
		var setGlobalTime; //משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		var globalTimeCounter = 0; //משתנה המכיל את ספירת הזמן בשניות לכל המשחק
		var questionCounter = 1; //משתנה המכיל את מספר השאלה הנוכחי
		var countImg = 0; //סופר את מספר התמונות שמופיעות במסיחים
		imgName = []; //שומר את שמות התמונות שמופיעות במסיחים במערך
		var timer_txt = new createjs.Text(); //הגדרת משתנה המכיל את מספר השניות שנותרו למשחק כתיבת טקסט
		var music = "on"; //מחוון הפעלה של צילים ומוזיקה
		var moveX; //תזוזה על ציר הX של מד ההתקדמות
		var tempX = 1162; // מיקום התחלתי של מד ההתקדמות על ציר ה X
		var frogiProgress = new lib.frogiProgress(); // קריאה לאובייקט שמכיל את מד ההתקדמות
		var connect = ""; // המספר של שם המלבן שהשחקן לחץ עליו
		var loseFlag = "false"; // משתנה ששומר האם השחקן לחץ תשובה נכונה או לא נכונה
		var titleImgFlag = "false"; // משתנה שבודק אם קיימת תמונה בגזע השאלה
		var subject = ""; // נושא המשחק (חשבון/גיאוגרפיה)
		var connectionFlag = "false"; // משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
		
		var sound_btn = new lib.mute_btn();//קריאה לאובייקט שמכיל את כפתור צלילים
		sound_btn.name = "sound_btn";  //נותן שם לכפתור צלילים	
		sound_btn.x = 169.05; //מיקום הX של כפתור צלילים
		sound_btn.y = 39;// מיקום הY של כפתור צלילים
		
		var music_btn = new lib.music_btn();// קריאה לאובייקט שמכיל את כפתור מוזיקה
		music_btn.name = "music_btn";// נותן שם לכפתור מוזיקה
		music_btn.x = 215.65;// מיקום הX של כפתור מוזיקה
		music_btn.y = 39.05;// מיקום הY של כפתור מוזיקה
		
		var pause_btn = new lib.stopbutton();// קריאה לאובייקט שמכיל את כפתור השהייה
		pause_btn.name = "pause_btn";// נותן שם לכפתור השהייה
		pause_btn.x = 264.65;// מיקום הX של כפתור המוזיקה
		pause_btn.y = 39.05;// מיקום הY של כפתור המוזיקה
		
		var BTN_CHECK = new lib.main_btn;// קריאה לאובייקט שמכיל את כפתור בדוק לא פעיל
		BTN_CHECK.name = "BTN_CHECK";// נותן שם לכפתור בדוק לא פעיל
		BTN_CHECK.x = 70;// מיקום הX של כפתור בדוק לא פעיל
		BTN_CHECK.y = 450;// מיקום הY של כפתור לא פעיל
		
		var BTN_CHECKACTIVE = new lib.btn_check_active;//קריאה לאובייקט שמכיל את כפתור פעיל	
		BTN_CHECKACTIVE.name = "BTN_CHECKACTIVE"; // נותן שם לכפתור בדוק פעיל
		BTN_CHECKACTIVE.x = 70;// מיקום הX של כפתור בדוק פעיל
		BTN_CHECKACTIVE.y = 450;// מיקום הY של כפתור פעיל
		
		var BTN_CONTINUEACTIVE = new lib.btn_continue_new; // קריאה לאובייקט שמכיל כפתור המשך לאחר בדיקה של תשובה נכונה
		BTN_CONTINUEACTIVE.name = "BTN_CONTINUEACTIVE"; //נותן שם לכפתור המשך של בדיקה נכונה 
		BTN_CONTINUEACTIVE.x = 70; //מיקום הX של כפתור המשך לאחר בחירה במסיח נכון
		BTN_CONTINUEACTIVE.y = 450;//מיקום הY של כפתור המשך לאחר בחירה במסיח נכון
		
		var BTN_CONTINUEACTIVE2 = new lib.btn_continue_new;//קריאה לאובייקט שמכיל כפתור המשך לאחר בדיקה של תשובה לא נכונה
		BTN_CONTINUEACTIVE2.name = "BTN_CONTINUEACTIVE2";//נותן שם לכפתור המשך של בדיקה לא נכונה
		BTN_CONTINUEACTIVE2.x = 70;//מיקום הX של כפתור המשך לאחר תשובה לא נכונה
		BTN_CONTINUEACTIVE2.y = 450;//מיקום הY של כפתור המשך לאחר תשובה לא נכונה
		
		function createPositionXY() { //פונקציה שיוצרת מיקום מסיחים
			positionX = [46, 503, 770, 253]; //X-משתנה שמכיל מערך של ציר ה
			positionY = [193, 195, 382, 395]; //Yמשתנה שמכיל מערך של ציר ה
			positionX3 = [46, 503, 253]; // משתנה שמכיל מערך של ציר ה-X במצב של 3 מסיחים
			positionY3 = [193, 195, 395]; // משתנה שמכיל מערך של ציר ה-Y במצב של 3 מסיחים
			positionX2 = [46, 503]; // משתנה שמכיל מערך של ציר ה-X במצב של 2 מסיחים
			positionY2 = [193, 195]; // משתנה שמכיל מערך של ציר ה-Y במצב של 2 מסיחים
		}
		
		homePage(); //קריאה לפונקציה דף הבית
		
		function homePage() { //פונקציה דף הבית
			var homePage = new lib.MC_homePage();//קריאה לאובייקט שמכיל את מסך הפתיחה 
			stage.addChild(homePage);//מוסיף לבמה את מסך הפתיחה
			homePage.name = "homePage";//נותן שם למסך הבית
		
			var startbtn = new lib.startButton();//קריאה לאובייקט שמכיל את כפתור התחל לא פעיל
			stage.addChild(startbtn);// מוסיף כפתור התחל לא פעיל לבמה
			startbtn.name = "startbtn";// נותן שם לכפתור התחל לא פעיל
			startbtn.x = 464.25;//מיקום הX של כפתור התחל לא פעיל
			startbtn.y = 517.7;//מיקום הY של כפתור התחל לא פעיל
			startbtn.gotoAndStop(0); //שנה צבע כפתור התחל כי לא נבחר עדיין נושא משחק
		
			sound_btn.addEventListener("click", ClickMuteSound);//הוספת מאזין ללחיצה על כפתור צלילים
			if (music == "on") {// אם כפתור צלילים במצב פועל הפעל את מוזיקת משחק
				stopMusic();//עצור מוזיקה
				playSound();//נגן מוזיקה
			} else {
				sound_btn.gotoAndStop(1) // אם לא עבור לפריים 1 של כפתור צלילים
			};
			createButton(); //פונקציה ליצירת כפתורים
		
			var forCombo = new lib.forCombo(); //יצירת תפריט בחירת נושא על הבמה
			forCombo.name = "forCombo";// נותן שם לתפריט
			forCombo.x = 705.8; //הגדרת מיקום התפריט
			forCombo.y = 380.45; //הגדרת מיקום התפריט
			stage.addChild(forCombo); //הוספת התפריט לבמה
			$("#dom_overlay_container").on("change", "#mycb", mycb_change); //הגדרת התנהגות תפריט בחירת נושא המשחק
		}
		
		function mycb_change(evt) { //פונקציה המגדירה את התנהגות תפריט המשחק
			myChoice = evt.currentTarget.value; //ציון הנושא שהשחקן בחר למשחק
			if (myChoice == 0) { //אם לא נבחר נושא
				stage.getChildByName("startbtn").removeEventListener("click", fl_ClickToPosition); //הסרת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(0); //אם השחקן לא בחר נושא משחק כפתור התחל לא פעיל
			} else { //אם נבחר נושא
				stage.getChildByName("startbtn").addEventListener("click", fl_ClickToPosition); //הוספת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(1); //אם השחקן בחר נושא משחק כפתור התחל פעיל
			}
		}
		
		function fl_ClickToPosition() { //פונקציה המגדירה את ההפניה לסוג נושא המשק
			stage.removeChild(stage.getChildByName("forCombo")); //לאחר בחירה בנושא המשחק הסרת תפריט הבחירה מהבמה
			stage.removeChild(stage.getChildByName("homePage")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
			stage.removeChild(stage.getChildByName("startbtn")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
		
			if (myChoice == 1) { //אם נושא המשחק הוא גיאוגרפיה
				firstGameFunc(); //גש למשחק גיאוגרפיה
			} else if (myChoice == 2) { //אם נושא המשחק הוא חשבון
				secondGameFunc(); //גש למשחק חשבון
			}
		}
		
		function firstGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק הראשון
			counter = 10;// משתנה שמכיל את מספר השאלות שנותרו לשחקן
			totalQuestions = 10;//סך השאלות במשחק
			moveX = ((941.4) / totalQuestions); //תזוזה על ציר הX של מד ההתקדמות
			subject = "גיאוגרפיה";// המשתנה המכיל את נושא המשחק- מופיע על לוח במסך משחק
			myGame = [// מערך המכיל את השאלות והתשובות של משחק גיאוגרפיה
				[
					["?מי הוא האוקיינוס הגדול ביותר המחבר את יבשות אמריקה עם אסיה ואוסטרליה", 1, "SHOW"],
					["האוקיינוס האטלנטי", "true"],
					[lib.img_1, "false"]
				],
				[
					["בגבול הצפוני של ישראל נמצאת המדינה", 1, "SHOW"],
					["לבנון", "true"],
					["ירדן", "false"],
					["מצרים", "false"],
					["איטליה", "false"]
				],
				[
					["מדינת ישראל נמצאת ביבשת", 1, "SHOW"],
					["אסיה", "true"],
					["אוסטרליה", "false"],
					["ארצות הברית", "false"],
					["אירופה", "false"]
				],
				[
					["?מיהו ההר הגבוה ביותר בישראל", 1, "SHOW"],
					["הר החרמון", "true"],
					[lib.img_2, "false"],
					["הר גרזים", "false"],
					["הר ההימלאיה", "false"]
				],
				[
					["?מהו שמו של נחל קטן הנשפך אל נחל גדול יותר או לתוך נהר", 1, "SHOW"],
					["יובל", "true"],
					["נהר", "false"],
					["נחל", "false"],
					["פלג", "false"]
				],
				[
					["?מהו שטח מים, לרוב טבעי, המוקף יבשה ואינו מחובר לים או לאוקיינוס", 1, "SHOW"],
					["ימה", "true"],
					["גבעה", "false"],
					[lib.img_3, "false"],
					["מדבר", "false"]
				],
				[
					["לנוף הטבעי של מישור החוף התיכון והדרומי  מספר מאפיינים בולטים. בחרו מבין  המאפיינים הבאים את המאפיין שאינו מתאים למישור החוף התיכון והדרומי", 1, "SHOW"],
					["שטחי המישור ושטחי הגבעות מסודרים לאורכו של מישור החוף במעין ארבע רצועות של נוף:  שטחי החולות, גבעות הכורכר, גבעות החול האדום ורצועת המרזבה", "true"],
					["זהו אזור ארוך וצר שהולך ומתרחב מעט כלפי דרום", "false"],
					["קו החוף אינו ישר ויש בו מפרצים גדולים", "false"],
					["צורות הנוף העיקריות הן שטחי מישור וגבעות נמוכות שגובהם אינו עולה בדרך כלל על  מאה מטרים", "false"]
				],
				[
					["?איזה אזור לא נמצא בכלל בצפון הארץ", 1, "SHOW"],
					["השרון", "true"],
					["הגליל העליון", "false"],
					["הגליל התחתון", "false"],
					["עמק יזרעאל", "false"]
				],
				[
					["?מים טריטוריאליים הם", 1, "SHOW", lib.img_4],
					["נחשב כשטח תחת ריבונות של אותה המדינה, אך אפשרי המעבר בו לספינות זרות", "true"],
					["המים שבין קו הגבול הימי של המדינה לבין קו החוף שלה", "false"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?מי מבין המקומות בישראל נחשב פלא עולמי", 1, "SHOW"],
					["ים המלח", "true"],
					["הכותל המערבי", "false"],
					["הסחנה", "false"],
					["כל התשובות נכונות", "false"]
				]
			];
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function secondGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק השני
			counter = 20;// משתנה שמכיל את מספר השאלות שנותרו לשחקן
			totalQuestions = 20;//סך השאלות במשחק
			moveX = ((941.4) / totalQuestions);//תזוזה על ציר הX של מד ההתקדמות
			subject = "חשבון";// המשתנה המכיל את נושא המשחק- מופיע על לוח במסך משחק
			myGame = [ //מערך המכיל את השאלות והתשובות של משחק חשבון
				[
					["3 + 0 = [      ]", 1, "SHOW"],
					[lib.num_0, "false"],
					[lib.num_3, "true"]
				],
				[
					["6 + 0 = [      ]", 1, "SHOW"],
					[lib.num_1, "false"],
					[lib.num_6, "true"],
					[lib.num_9, "false"]
				],
				[
					["?מהי הכפולה של 5", 1, "SHOW"],
					["80", "true"],
					["59", "false"],
					["74", "false"],
					["21", "false"]
				],
				[
					["?אני קטן ב- 4 מ - 755 מי אני", 1, "SHOW"],
					["751", "true"],
					["754", "false"]
				],
				[
					["? = מהו ערכה של האות הבאה פ ", 1, "SHOW"],
					["30", "false"],
					["80", "true"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?לרון היו 16 שקלים. הוא קיבל עוד 2 שקלים.כמה שקלים יש לרון", 1, "SHOW"],
					["18", "true"],
					["14", "false"],
					["27", "false"],
					["21", "false"]
				],
				[
					["3 + 6 = [      ]", 1, "SHOW"],
					[lib.num_9, "true"],
					["10", "false"]
				],
				[
					["?אמא קנתה לרינת 15 מסטיקים. רינת קיבלה עוד 3 מסטיקים מחברותיה.כמה מסטיקים יש לרינת", 1, "SHOW", lib.mg_1],
					["16", "false"],
					["14", "false"],
					["18", "true"]
				],
				[
					["?לדני יש 5 קלפים.הוא הרוויח 4 קלפים נוספים.כמה קלפים יש לדני", 1, "SHOW", lib.Cards_1],
					["9", "true"],
					["10", "false"],
					["4", "false"],
					["6", "false"]
				],
				[
					["4 + 4 = [      ]", 1, "SHOW"],
					["8", "true"],
					["10", "false"]
				],
				[
					["0 + 0 = [      ]", 1, "SHOW"],
					["0", "true"],
					["1", "false"],
					["8", "false"]
				],
				[
					["?לשלי יש 9 בובות. היא קיבלה עוד 3 בובות ליום הולדתה.כמה בובות יש לשלי", 1, "SHOW"],
					["12", "true"],
					["8", "false"],
					["13", "false"],
				],
				[
					["?אמא אפתה 18 עוגיות. רון אכל 5 עוגיות.כמה עוגיות נשארו", 1, "SHOW"],
					["17", "false"],
					["13", "true"],
					["18", "false"],
					["10", "false"]
				],
				[
					["?לרוני היה  6 שקלים. רוני רכש מסטיק ב2 שקלים.כמה שקלים נשאר לרוני", 1, "SHOW"],
					["2", "false"],
					["4", "true"]
				],
				[
					["0 + [      ] = 11", 1, "SHOW"],
					["7", "false"],
					["4", "false"],
					["11", "true"]
				],
				[
					["[      ] - 6 = 11", 1, "SHOW"],
					["17", "true"],
					["16", "false"],
					["15", "false"],
					["12", "false"]
				],
				[
					["6 X [      ] = 18", 1, "SHOW"],
					["3", "true"],
					["12", "false"]
				],
				[
					["[      ] - 2 = 24", 1, "SHOW"],
					["24", "false"],
					["26", "true"],
					["12", "false"]
				],
				[
					["5 X [      ] = 15", 1, "SHOW"],
					[lib.num_3, "true"],
					[lib.num_7, "false"],
					[lib.num_2, "false"],
					[lib.num_4, "false"]
				],
				[
					["2 X [      ] = 0", 1, "SHOW"],
					["2", "false"],
					["0", "true"],
				]
			];
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function startGame() { //פונקציה פותחת
			setGlobalTime = setInterval(globalTimer, 1000); //הפעלת ספירת זמן כל שניה עבור כל המשחק
			var firstAnimation = new lib.MC_Open(); // קורא לפנוקצית אנימצייה ראשונה בין מסך פתיחה למשחק
			stage.addChild(firstAnimation);// הוסף לבמה את אנימציית הפתיחה
			setTimeout(function () {//פונקציה שמגדירה את משך הזמן של אנימציית הפתיחה
				stage.removeChild(firstAnimation);// הסרת האנימצייה מהבמה
				nextQuestion();//מעבר לפונקצית שאלות במסך משחק
			}, 4000); // זמן במילי שניות
		}
		
		function nextQuestion() { //פונקציה שיוצרת את השאלה והמסיחים על הבמה
			createjs.Sound.stop("GameSound"); //הפעלה או השתקה של מתג מוזיקה ראשי
			if (music == "on") {// אם כפתור צלילים מופעל השמע סאונד ראשי של משחק
				playSound();
			}
			var mainGame = new lib.MC_MAIN_GAME(); //קריאה לאובייקט המכיל את המסך המרכזי לטעינה
			mainGame.name="mainGame";
			stage.addChild(mainGame); //טעינת מסך מרכזי על הבמה
			mainGame.SubjectGame_txt.text = subject; //הוספת נושא המשחק על הבמה
		
			setTimeout(function () { //פונקציה שמבצעת החלפה של אנימציית סיום כניסה באובייקט סטטי ללא גלים
				var FROGI_START_NEW = new lib.FROGI_START_NEW(); //הכן לטעינה את פרוגי על רפסודה
				FROGI_START_NEW.name = "FROGI_START_NEW"; //תן שם לפרוגי על רפסודה
				FROGI_START_NEW.x = 1153.5; //מקם את הרפסודה במיקום של אנימציית סיום כניסה
				FROGI_START_NEW.y = 330.3; //מקם את הרפסודה במיקום של אנימציית סיום כניסה
				stage.addChild(FROGI_START_NEW); //צור את הרפסודה ביחד עם פרוגי במיקום המתאים לאחר אנימציית כניסה
				FROGI_START_NEW.gotoAndStop(0); //עבור לפריים 0 ללא גלים
			}, 550); // זמן במילי שניות
		
			frogiProgress.name = "frogiProgress"; //תן שם למד התקדמות
			stage.addChild(frogiProgress); //צור מד התקדמות על הבמה
			frogiProgress.x = tempX; // מיקום התחלתי של מד ההתקדמות על ציר ה X
			frogiProgress.y = 557; // מיקום התחלתי של מד ההתקדמות על ציר ה Y
		
			createButton(); //פונקציה ליצירת כפתורים
			stage.addChild(pause_btn); //צור כפתור השהייה על הבמה
		
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור השהייה על הבמה
		
			var currentQuestion = new createjs.Text(); //יצירת תיבת טקסט
			currentQuestion.text = questionCounter; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			currentQuestion.font = "14px Heebo"; //הגדרת גופן
			currentQuestion.textAlign = "center"; //הגדרת מיקום טקסט
			stage.addChild(currentQuestion);
			currentQuestion.name = "numberOne";
			currentQuestion.x = 1236; //מיקום X
			currentQuestion.y = 608; //מיקום Y
		
			var totalQuestion = new createjs.Text(); //יצירת תיבת טקסט
			totalQuestion.text = totalQuestions; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			totalQuestion.font = "14px Heebo"; //הגדרת גופן
			totalQuestion.textAlign = "center"; //יצירת אובייקט
			stage.addChild(totalQuestion);
			totalQuestion.name = "numberTwo";
			totalQuestion.x = 1180; //מיקום X
			totalQuestion.y = 608; //מיקום Y
		
			countImg = 0; //איפוס מספר תמונות על הבמה
			while (imgName.length > 0) { //כל עוד מערך השמות של התמונות גדול מאפס
				imgName.splice(0, 1); //מחק את השם ש התמונה ממיקום אפס במערך
			}
		
			var clock = new lib.clock_animiton(); // הגדרת משתנה שיכיל את הסימבול של השעון
			stage.addChild(clock); // יצירת אובייקט של שעון על הבמה
			clock.x = 190; // קביעת מיקום X
			clock.y = 560; // קביעת מיקום Y
		
			stage.addChild(timer_txt); // יצירת גרפיקה של טקסט על הבמה
			timer_txt.x = 61; // קביעת מיקום X
			timer_txt.y = 590; // קביעת מיקום Y
			timer_txt.color = "#000000"; // קביעת צבע טקסט 
			timer_txt.font = "14px Heebo Regular"; // קביעת גודל פונט וסוג
		
			createPositionXY(); //צור את מערך המיקומים מחדש
			randomQuestion(); //צור מספר שאלה רנדומלי
			while (myGame[question][0][2] == "NOSHOW") { //בדוק האם המספר הרנדומלי מחזיר שאלה שלא אמורה להופיע יותר
				randomQuestion(); //צור מספר שאלה רנדומלי
			}
		
			var questionTitel = new createjs.Text(); //צור כותרת לשאלה
			questionTitel.text = myGame[question][0][0]; //צור כותרת לשאלה עם תוכן
			questionTitel.name = "questionTitel"; //שם לכותרת
		
			if (myGame[question][0][3] != null) { //פונקציה שבודקת האם יש תמונה בגזע שאלה
				var temp = myGame[question][0][3].toString(); //אם יש תמונה בגזע שאלה הוצא את שם התמונה כמחרוזת
				var let = temp.charAt(0); //שלוף מספר שמופיע בסוף הלינקייג של התמונה
			}
			if (let == "f") { //אם המספר שווה ל-F אז
				var img = new(myGame[question][0][3])(); //צור משתנה חדש מסוג תמונה ומקם את התמונה מהמערך במשתנה זה
				img.name = "TITLEIMG"; //תן שם לתמונה
				img.y = 59; //מקם את התמונה במיקום Y
				mainGame.GEZA.addChild(img); //הוסף את התמונה לגזע
				titleImgFlag = "true" // "אם תמונה קיימת בגזע השאלה המשתנה שווה "נכון
				var titleMag = new lib.magnify(); //צור לטעינה זכוכית מגדלת
				titleMag.name = "titleMag"; //תן שם לזכוכית מגדלת
				img.addChild(titleMag); //מקם זכוכית מגדלת על התמונה
			}
		
			questionTitel.font = "14px Heebo"; //עיצוב גזע שאלה
			questionTitel.textAlign = "right"; //מקם טקסט בכיוון מתאים
			questionTitel.x = 1230; //מקם טקסט במיקום X
			questionTitel.y = 70; //מקם טקסט במיקום Y
			questionTitel.lineWidth = 720; //רווח שורה לפי רוחב
			questionTitel.lineHeight = 30; //רווח שורה לפי אורך
		
			connect = ""; // המספר של שם המלבן שהשחקן לחץ עליו
			stage.addChild(BTN_CHECK);//הוסף לבמה את כפתור בדוק לא פעיל
			stage.addChild(questionTitel); //הוספת גזע שאלה לבמה
		
			if (myGame[question].length == 4) { //אם במערך יש 3 מסיחים אז תעלים 3 רפסודות
				mainGame.raft4.gotoAndStop(1);//הסתר רפסודה מספר 4
			}
			if (myGame[question].length == 3) { //אם במערך יש 2 מסיחים אז תעלים 2 רפסודות
				mainGame.raft4.gotoAndStop(1);//הסתר רפסודה מספר 4
				mainGame.raft3.gotoAndStop(1);//הסתר רפסודה מספר 3
			}
		
			for (i = 1; i < myGame[question].length; i++) { //לולאה שיוצרת את כל המסיחים על הבמה כולל ההתנהגות שלהם
				var box = new lib.questionBox(); //צור מלבנים לקראת טעינה
				if (myGame[question].length == 5) {// אם אורך המערך שווה ל5
					randomPosition(); //צור מיקומים רנדומליים
					box.x = randomPositionX; //מקם מלבן במיקום רנדומלי X
					box.y = randomPositionY; //מקם מלבן במיקום רנדומלי Y
				}
				if (myGame[question].length == 4) { //אם אורך המערך שווה ל4
					randomPosition3(); //קרא לפונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית 
					box.x = randomPositionX3; // מיקום הX של ריבוע לבן של מסיח כאשר יש 3 מסיחים בשאלה
					box.y = randomPositionY3; // מיקום הY כאשר יש 3 מסיחים בשאלה
				}
				if (myGame[question].length == 3) {//אם אורך המערך שווה ל3
					randomPosition2();//קרא לפונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
					box.x = randomPositionX2; // מיקום הX כאשר יש 2 מסיחים בשאלה
					box.y = randomPositionY2; // מיקום הY כאשר יש 2 מסיחים בשאלה			
				}
		
				box.name = "question" + i; //שם המלבן
				stage.addChild(box); //הוסף מלבן לבמה
				box.addEventListener("click", connection); //הוסף מאזין למלבן
				box.gotoAndStop(0); //הפסק אנימציות מלבן
		
				var temp = myGame[question][i][0].toString(); //בדוק האם מדובר במחרוזת או תמונה
				var let = temp.charAt(0);// בדוק האם האות הראשונה במערך היא תמונה או טקסט אם כן תמקם בתור תמונה
		
				if (let == "f") { //אם מדובר בתמונה
					var img = new(myGame[question][i][0])(); //הגדר משתנה תמונה
					box.addChild(img); //מקם תמונה על מלבן
					img.name = "img" + i;//תן שם למשתנה תמונה
					var mag = new lib.magnify(); //צור מהספרייה אובייקט זכוכית מגדלת
					mag.name = "magnify" + i; //תן שם לאובייקט
					stage.addChild(mag); //הוסף את האובייקט על הבמה
		
					if (myGame[question].length == 5) {// אם אורך המערך שווה ל5
						mag.x = randomPositionX; //הגדר מיקום X
						mag.y = randomPositionY; //הגדר מיקום Y				
					}
					if (myGame[question].length == 4) {//אם אורך המערך שווה ל4
						mag.x = randomPositionX3; //הגדר מיקום X
						mag.y = randomPositionY3; //הגדר מיקום Y	
					}
					if (myGame[question].length == 3) {//אם אורך המערך שווה ל3
						mag.x = randomPositionX2; //הגדר מיקום X
						mag.y = randomPositionY2; //הגדר מיקום Y				
					}
					mag.addEventListener("click", showBIG); //הוסף מאזין בעת לחיצה על אובייקט
					countImg = countImg + 1; //הוסף מספר נוסף לספירת תמונות על הבמה
					imgName.push(mag.name); //הוסף את שם התמונה למערך שמות תמונות
		
				} else { //אם מדובר במחרוזת
					var string = new createjs.Text(); //הגדר משתנה טקסט
					string.text = myGame[question][i][0]; //הגדר תוכן במשתנה טקסט
					box.addChild(string); //מקם טקסט על מלבן
		
					string.font = "15px Heebo"; //הגדרות עיצוב
					string.textAlign = "right";
					string.x = 247;// מיקום הX של משתנה טקסט
					string.y = 15; //מיקום הY של משתנה טקסט
					string.lineWidth = 247;// הרוחב של משתנה טקסט
					string.lineHeight = 25;	// הרוחב של משתנה טקסט
				}
			}
			timeCounter = 30; //אפס את הזמן המוגדר לכל שאלה
			setTime = setInterval(timer, 1000); //הפעלת זמן פר שאלה
		}
		
		function connection(event) {//פונקציה שמחברת בין כפתור בדוק לא פעיל/לחיצה על מסיח ואז כפתור בדוק פעיל שעושה בדיקה
			connectionFlag = "true";// משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
			stage.getChildByName("FROGI_START_NEW").gotoAndStop(1);// שים את האובייקט על הבמה ולך לפריים 1
			changeColor();// שנה צבע חיווי של מסיחים
			event.currentTarget.gotoAndStop(3);//הצג מסגרת מסיח בצבע ורוד לפני לחיצה על כפתור בדיקה
			stage.removeChild(stage.getChildByName("BTN_CHECK"));//הסר כפתור בדוק לא פעיל מהבמה
			connect = event.currentTarget.name.slice(-1);//קח האינדקס של המסיח שלחצת עליו
			stage.addChild(BTN_CHECKACTIVE);//הוסף לבמה כפתור בדוק פעיל
			BTN_CHECKACTIVE.addEventListener("click", checkAnswer); //הוסף מאזין לכפתור בדוק פעיל לפונקציית בדיקת תשובה
		}
		
		function changeColor() {//פונקצייה שמחליפה את צבע המסגרת של המסיחים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שעוברת על מערך השאלות במשחק 
				stage.getChildByName("question" + i).gotoAndStop(0);// מחליף את צבע המסגרת של המסיחים לשחור
			}
		}
		
		function checkAnswer() { //פונקציה שמבצעת בדיקה האם הבחירה במסיח נכונה
			connectionFlag = "false";//// משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
			clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
			removeEventListener(); //בטל את כל המאזינים
			var boxNum = connect; //שלוף את המספר של שם המלבן
			var boxAnswer = myGame[question][boxNum][1]; //בדוק האם התשובה היא נכונה
			createjs.Sound.stop("GameSound");//צור מוזיקת משחק ועצור
		
			if (boxAnswer == "true") { //אם התשובה נכונה
				if (music == "on") {//אם כפתור צלילים עובד
					createjs.Sound.play("Success") // נגן מוזיקת הצלחה לבחירה במסיח נכון
				};
				var countRespone = myGame[question][0][1]; //שלוף את מספר ניסיונות המענה לשאלה
				var countGrade = 100 / (totalQuestions * countRespone); //בצע חישוב של נוסחת ציון ביניים
				sumScore.push(countGrade); //דחוף ציון למערך ציון ביניים
				myGame[question][0][2] = "NOSHOW"; //הגדר שאלה שלא תופיע יותר במשחק
				stage.getChildByName("question" + connect).gotoAndStop(1);// לך לפריים 2 של שם המלבן לפי המספר שלו
				counter = counter - 1; //צמצם ב-1 את כמות השאלות שנותרו לשחקן		
				if (counter == 0) { //אם כמות השאלות הגיעה ל-0
					clearInterval(setGlobalTime); //עצור את ספירת הזמן לכל המשחק
					for (i = 0; i <= sumScore.length - 1; i++) { //בצע חישוב של ציון המשחק
						grade = grade + sumScore[i]; //סכום את מערך ביניים של ציון המשחק
					}
					progressBar();// קרא לפונקציית מד התקדמות		
					stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
					setTimeout(function () { //פונקציה להגדרת זמן מעבר בין שאלות לאחר בחירת מסיח 
						endGame();// קרא לפונקציית מסך סיום
					}, 1000); // זמן במילי שניות
				} else { //אם כמות השאלות לא הגיעה ל-0
					questionCounter = questionCounter + 1; //הגדרת מספר השאלה הנוכחי באחד
					progressBar();// קרא לפונקציית מד התקדמות
					btnNextWin();//לאחר בחירה במסיח נכון הפעל כפתור המשך
				}
			} else { //אם התשובה לא נכונה
				if (music == "on") {// אם כפתור צלילים פעיל
					createjs.Sound.play("Failure");//הפעלת סאונד אי הצלחה
				} 
				sumErrors = sumErrors + 1;// העלאת משתנה ספירת טעויות באחד
				var countRespone = myGame[question][0][1]; //ציין בשאלה במערך מסיחים מספר ניסיון נוסף
				myGame[question][0][1] = countRespone + 1; //הוסף למספר הניסיון הקיים עוד 1
				stage.getChildByName("question" + connect).gotoAndStop(2);// לך לפריים 2 של שם המלבן לפי המספר שלו
				btnNextLose(); //הפעל כפתור המשך לאחר 
			}
		}
		
		function randomQuestion() { //פונקציה שיוצרת מספר רנדומלי איתו אנחנו בוחרים תת-מערך מסיחים רנדומלי
			question = parseInt(Math.random() * ((totalQuestions - 1) + 1)) - (1) + 1;
		}
		
		function randomPosition3() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (2 + 1)) - (1) + 1;
			while (positionX3[randomPosition] == null) {// כל עוד המשתנה שמכיל מערך של ציר הX במצב של 3 מסיחים במקום רנדומלי שווה למשהו 
				var randomPosition = parseInt(Math.random() * (2 + 1)) - (1) + 1;// הצג לי מספרים רנדומליים נוספים
			}
			randomPositionX3 = positionX3[randomPosition];// 
			randomPositionY3 = positionY3[randomPosition];
			positionX3.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY3.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function randomPosition2() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (1 + 1)) - (1) + 1;
			while (positionX2[randomPosition] == null) {//משתנה שמכיל את הערך של מיר הX במצב של 3 מסיחים במקום רנדומלי כל עוד הוא שווה למשהו 
				var randomPosition = parseInt(Math.random() * (1 + 1)) - (1) + 1;
			}
			randomPositionX2 = positionX2[randomPosition];
			randomPositionY2 = positionY2[randomPosition];
			positionX2.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY2.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function randomPosition() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			while (positionX[randomPosition] == null) {//משתנה שמכיל את הערך של X במצב רגיל של 4 מסיחים כל עוד הוא שווה למשהו
				var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			}
			randomPositionX = positionX[randomPosition];
			randomPositionY = positionY[randomPosition];
			positionX.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function removeEventListener() { //פונקציה שמבצעת ביטול מאזינים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).removeEventListener("click", connection);//לך למלבן לפי המספר שלו בשם והסר לו מאזין
			}
			stage.getChildByName("pause_btn").removeEventListener("click", pause); //הסר מאזין לכפתור השהייה
			stage.getChildByName("sound_btn").removeEventListener("click", ClickMuteSound); //הסר מאזין לכפתור צלילים
			
			if (connectionFlag == "true") {// אם השחקן לחץ על מסיח
				stage.getChildByName("BTN_CHECKACTIVE").removeEventListener("click", checkAnswer); //לך לכפתור בדוק פעיל והסר מאזין
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).removeEventListener("click", showBIG); //הסר מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function addEventListener() {//פונקציה שמוסיפה מאזינים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).addEventListener("click", connection);
			}
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור צלילים על הבמה
		
			if (connectionFlag == "true") {//אם השחקן לחץ על מסיח 
				stage.getChildByName("BTN_CHECKACTIVE").addEventListener("click", checkAnswer);// הוסף לכפתור בדוק פעיל מאזין
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).addEventListener("click", showBIG); //הוסף מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function showBIG(event) { //פונקציה להגדלת תמונה לפי התמונה עליה לחצתי
			var i = event.currentTarget.name.slice(-1); //קח את מספר התמונה לפי השם שלה
			var img = new(myGame[question][i][0])(); //צור תמונה חדשה על הבמה
			img.name = "bigImage"; //הגדר שם לתמונה
			stage.addChild(img); //הוסף את התמונה החדשה לבמה
			img.scale = 2; //הגדל את התמונה פי 2
			img.x = 400; //מקם את התמונה במיקום X
			img.y = 250; //מקם את התמונה במיקום Y
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים
			img.addEventListener("click", showMini); //הוסף מאזין בעת לחיצה על התמונה
		}
		
		function showMini() { //פונקציה לסגירת תמונה אחרי הגדלתה
			stage.removeChild(stage.getChildByName("bigImage")); //הסר את התמונה הגדולה מהבמה
			addEventListener(); //עבור לפונציה שמחזירה את כל המאזינים
		}
		
		function btnNextWin() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
			stage.addChild(BTN_CONTINUEACTIVE);// הוסף כפתור המשך לבמה
			BTN_CONTINUEACTIVE.addEventListener("click", betweenQAnimiton); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function btnNextLose() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך בעת בחירה שגויה ולא תהיה אנימציית מעבר
			loseFlag = "true";// משתנה שבודק האם התשובה לא נכונה
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
			stage.addChild(BTN_CONTINUEACTIVE2);//הוסף כפתור המשך במידה והתשובה לא נכונה
			BTN_CONTINUEACTIVE2.addEventListener("click", clearQuestionScreen); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function clearQuestionScreen() { //פונקציה שמבצעת ניקוי הבמה
			clearScreen();//קרא לפונקציה ניקוי מסך
			nextQuestion(); //קריאה לפונקציה שיוצרת שאלה חדשה
		}
		
		function clearScreen() { //פונקציה שבמצעת ניקוי מסך - קוראים לפונקציה הזו מכל מני פונקציות אחרות
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ניקוי לכל האלמנטים שמופיעים על-גבי הבמה
				stage.removeChild(stage.getChildByName("question" + i));//הסר אובייקט מלבן מסיח
			}
			stage.removeChild(stage.getChildByName("next")); //ניקוי כפתור המשך
			stage.removeChild(stage.getChildByName("questionTitel")); //ניקוי שאלה
			stage.removeChild(stage.getChildByName("numberOne")); //ניקוי מספר שאלה נוכחי
			stage.removeChild(stage.getChildByName("numberTwo")); //ניקוי מספר שאלות במשחק
			stage.removeChild(stage.getChildByName("clock")); // ניקוי אובייקט של שעון
			stage.removeChild(stage.getChildByName("FROGI_START_NEW"));// הסר אנימציית מעבר של פרוגי בכניסה לשאלה חדשה לאחר בחירה במסיח שגוי
			stage.removeChild(stage.getChildByName("mainGame"));
			if (loseFlag == "true") {//אם התשובה שבחר השחקן היא לא נכונה
				stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE2")); // הסר את כפתור המשך של בחירה שגויה
			}
			if (titleImgFlag == "true") {//אם יש תמונה בגזע הסתר את התמונה
				stage.removeChild(stage.getChildByName("TITLEIMG"));
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i < imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.removeChild(stage.getChildByName(temp)); //הסר תמונה לפי השם שקיבלת ממשתנה זמני
				}
				stage.removeChild(stage.getChildByName("bigImage")); //הסר תמונה גדולה
			}
		}
		
		function timer() { //פונקציה שמבצעת ספירה לאחור מ-זמן מוגדר עבור כל שאלה
			if (timeCounter == 0) { //אם הזמן המוגדר הגיע לאפס
				clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
				timer_txt.text = "";//איפוס תיבת טקסט לטיימר
				removeEventListener(); //בטל את כל המאזינים
				timeUp(); //גש לפונקציה שמבצעת פעולות מסוימות אם הזמן נגמר
			
			} else { //אם לא
				timer_txt.text = "";// איפוס תיבת הטקסט של הטיימר
				timeCounter = timeCounter - 1; //הורד בספרה אחת את הזמן המוגדר לכל שאלה
				
				if (timeCounter < 10) { //  אם הזמן שנקבע הוא פחות מ10
					timer_txt.x = 65; // הזז מיקום X
				}
				timer_txt.text = timeCounter; // הדפס זמן מוגדר
			}
		}
		
		function timeUp() { //פונקציה שמבצעת פעולות מסוימות כאשר הזמן נגמר
			clearScreen(); //גש ונקה מסך
			var timeUp = new lib.timeUp_Screen();// צור אובייקט של מסך זמן נגמר 
			stage.addChild(timeUp);// הוסף מסך זמן נגמר לבמה
			timeUp.name = "timeUpScreen";//תן שם למסך זמן נגמר
			timeUp.btn_continueTimeUp.addEventListener("click", clickContinueFromTimeUp); //הפעל מאזין לכפתור שנמצא על הבמה בפריים הזמן נגמר
		}
		
		function clickContinueFromTimeUp() { //פונקציה שמבצעת איפוס אחרי לחיצה לחיצה על כפתור המשך מפריים הזמן נגמר
			stage.removeChild(stage.getChildByName("timeUpScreen"));// הסר מסך הזמן נגמר מהבמה
			nextQuestion(); //הפעל פונקציה של השאלה הבאה
		}
		
		function globalTimer() { //פונקציה שמבצעת ספירה קדימה מזמן אפס עבור כל המשחק
			globalTimeCounter = globalTimeCounter + 1; //הוסף שניה אחת לזמן אפס
		}
		
		function pause() { //פונקציה להגדרת מסך השהייה
			var pause = new lib.pause_screen(); //צור כפתור השהייה
			stage.addChild(pause); //הוסף כפתור השהייה לבמה
			pause.name = "pauseScreen"; //תן שם לכפתור השהייה
			clearInterval(setTime); //אפס את ספירת הזמן לאחור עבור כל שאלה
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים על הבמה
			pause.pContinue_btn.addEventListener("click", unPause); //הוסף מאזין לכפתור המשך שיעביר לפונקציה לביטול מסך השהייה
		}
		
		function unPause() { //פונקציה לסיום מסך השהייה
			stage.removeChild(stage.getChildByName("pauseScreen")); //הסר מהבמה את מסך השהייה
			setTime = setInterval(timer, 1000); //הגדר ספירת זמן לאחור עבור כל שאלה כל 1 שניות
			addEventListener(); //עבור לפונקציה שמגדירה מאזינים לאובייקטים על הבמה
		}
		
		function betweenQAnimiton() {//פונקציית אנימציית מעבר בין שאלות לאחר תשובה במסיח נכון
			stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE"));
			var QAnimiton = new lib.Q_Animiton();//יצירת אנימציית מעבר
			stage.addChild(QAnimiton);// הוספה של אנימציית המעבר לבמה
			QAnimiton.SubjectGame_txt.text = subject;//הוספת נושא המשחק לאנימציית מעבר
			setTimeout(function () {// הגדרת זמן ליציאה מאנימציית מעבר
				stage.removeChild(QAnimiton);// הסר אנימציית מעבר מהבמה
				clearQuestionScreen();//נקה את המסך
			}, 1000); // זמן במילי שניות
		}
		
		function endGame() { // פונקציית אנימציית סיום
			clearScreen(); // מחיקת המסך הקודם
			var endAnimiton = new lib.endAnimiton(); // צור מסך אנימציית סיום
			endAnimiton.name = "endAnimation"; // תן שם למסך אנימציית הסיום
			stage.addChild(endAnimiton); // הוסף אנימציית סיום לבמה
			endAnimiton.SubjectGame_txt.text = subject;//הוספת נושא המשחק לאנימציית סיום
			if (music == "on") {//אם כפתור צלילים במצב פעיל
				createjs.Sound.play("Endofgame")//נגן מוזיקת סיום
			};
			setTimeout(function () {//הגדרת זמן להופעה של לוח מסכם באנימציית סיום
				summary();//פונקציה שמכילה את הנתונים בלוח המסכם ואת הכפתורים שחקו שוב ותפריט ראשי
			}, 3100); // זמן במילי שניות
		
			createButton(); //פונקציה ליצירת כפתורים
			sound_btn.addEventListener("click", ClickMuteSound);//הוספת מאזין לכפתור צלילים
		}
		
		function summary() {//פונקציה שמכילה את הנתונים בלוח המסכם ואת הכפתורים שחקו שוב ותפריט ראשי
			mygrade();//פונקציה שמחשבת את הציון הסופי
			myerros();// פנוקציה שמחשבת את מספר הטעויות שעשה השחקן
			mytime();//פונקציה שמחשבת את הזמן הכולל של המשחק בדקות
			myMain_btn();//פונקציה שמחזירה את המשחק לתפריט הראשי
			myPlayagain_btn();//פונקציה שמעבירה למשחק חוזר באותו נושא
		}
		
		function myMain_btn() {//פונקציית כפתור תפריט ראשי במסך סיום
			var MainMenu_btn = new lib.MainMenu_btn();//יצירת כפתור תפריט ראשי
			MainMenu_btn.name = "MainMenu_btn";//תן שם לכפתור תפריט ראשי
			MainMenu_btn.x = 920;//מיקום הX של כפתור תפריט ראשי
			MainMenu_btn.y = 465;//מיקום הY של כפתור תפריט ראשי
			stage.addChild(MainMenu_btn);//הוסף לבמה את הכפתור תפריט ראשי
			MainMenu_btn.addEventListener("click", gotohomepage);//הוספת מאזין לכפתור תפריט ראשי
		}
		
		function myPlayagain_btn() {//פונקציית כפתור שחק שוב במסך סיום 
			var Playagain_btn = new lib.Playagain_btn();//יצירת כפתור שחק שוב על הבמה
			Playagain_btn.name = "Playagain_btn";// תן שם לכפתור שחק שוב
			Playagain_btn.x = 750;// מיקום הX של כפתור שחק שוב
			Playagain_btn.y = 465;//מיקום הY של כפתור שחק שוב
			stage.addChild(Playagain_btn);//הוסף לבמה כפתור שחק שוב
			Playagain_btn.addEventListener("click", gotoGame);//הוספת מאזין לכפתור שחק שוב
		}
		
		function mygrade() { // פונקציית יצירת ציון סופי על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theGrade = new createjs.Text(); // צור תיבת טקסט דינמאית
			theGrade.name = "theGrade"; // תן שם לתיבת טקסט 
			stage.addChild(theGrade); // הוסף לבמה את תיבת הטקסט
			theGrade.x = 905; // מיקום תיבת הטקסט X
			theGrade.y = 430; // מיקום תיבת הטקסט Y
			theGrade.font = "20px Heebo "; // פונט גודל וסוג פונט
			theGrade.text = parseInt(grade); // הדפסה של משתנה הציון הסופי
		}
		
		function myerros() { //פונקציית יצירת מספר טעויות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theErros = new createjs.Text(); // צור תיבת טקסט דינמאית
			theErros.name = "theErros"; // תן שם לתיבת טקסט
			stage.addChild(theErros); // הוסף לבמה את תיבת הטקסט
			theErros.x = 905; // מיקום תיבת הטקסט X
			theErros.y = 370; // מיקום תיבת הטקסט Y
			theErros.font = "20px Heebo "; // פונט גודל וסוג פונט
			theErros.text = sumErrors; // הדפסה של משתנה מספר טעויות כללי
		}
		
		function mytime() { //פונקציית יצירת סך הכל זמן בשניות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theTime = new createjs.Text(); // צור תיבת טקסט דינמאית
			theTime.name = "theTime"; // תן שם לתיבת טקסט 
			stage.addChild(theTime); // הוסף לבמה את תיבת הטקסט
			theTime.x = 905; // מיקום תיבת הטקסט X
			theTime.y = 310; // מיקום תיבת הטקסט Y
			theTime.font = "20px Heebo "; // פונט גודל וסוג פונט
			theTime.text = " סך הכל " + (globalTimeCounter / 60).toFixed(2) + " דקות "; // הדפסה של משתנה סך הכל זמן בשניות
		}
		
		function ClickMuteSound() {//פונקציה של כפתור "השתק סאונד" באמצעות פונקציה זאת מתבצעת שליטה על הסאונד 
			if (music == "on") {
				music = "off"; /*מצב השתקת צלילים*/
				sound_btn.gotoAndStop(1);//כפתור סאונד עובר למצב השתקת צליל
				stopMusic();//עצירת סאונדים
			} else {
				music = "on"; /*הפעלת צליל משחק*/
				sound_btn.gotoAndStop(0);//כפתור סאונד במצב סאונד פעיל
				playSound();//הפעלת סאונד משחק
			}
		}
		
		function gotohomepage() {//פונקציה שמעבירה את מסך המשחק למסך הבית על ידי כפתור "תפריט ראשי"
			reset();//איפוס
			homePage();//פונקציה מסך הבית
		}
		
		function gotoGame() {// פונקציה שמעבירה את מסך המשחק להפעלה מחדש של אותו משחק על ידי כפתור "שחקו שוב
			reset();//איפוס
			if (myChoice == 1) {
				firstGameFunc();//הפעלת משחק גיאוגרפיה
			} else {
				secondGameFunc();//הפעלת משחק חשבון
			}
		}
		
		function reset() {//פונקציה שמאפסת את המסך 
			stage.removeChild(stage.getChildByName("MainMenu_btn"));//מחיקת כפתור "תפריט ראשי" מהבמה
			stage.removeChild(stage.getChildByName("endAnimation"));//מחיקת אנימצית סיום מהבמה
			stage.removeChild(stage.getChildByName("Playagain_btn"));//מחיקת כפתור"שחקו שוב" מהבמה
			stage.getChildByName("theGrade").text = "";//איפוס של הציון הסופי בבמה
			stage.getChildByName("theErros").text = "";//איפוס של כמות הטעויות בבמה
			stage.getChildByName("theTime").text = "";//איפוס של משך זמן המשחק
			sumScore = [];//איפוס מערך ביניים שמכיל ניקוד יחסי של שאלות
			globalTimeCounter = 0;//איפוס משתנה המכיל את ספירת הזמן בשניות לכל המשחק
			countImg = 0;// איפוס של משתנה שסופר את מספר התמונות שמופיעות במסיחים
			imgName = []; // איפוס של משתנה ששומר את שמות התמונות שמופיעות במסיחים במערך
			connect = "";// איפוס של משתנה של מספר שם המלבן שהשחקן לחץ עליו
			loseFlag = "false";// איפוס משתנה ששומר האם השחקן לחץ תשובה נכונה או לא נכונה
			titleImgFlag = "false";// איפוס משתנה שבודק אם קיימת תמונה בגזע השאלה
			subject = "";//איפוס שם נושא המשחק (חשבון/גיאוגרפיה)
			grade = 0; // איפוס ציון סופי
			sumErrors = 0; // איפוס משתנה המכיל את סך כל השגיאות
			questionCounter = 1;// איפוס משתנה המכיל את מספר השאלה הנוכחי
			tempX = 1162// Xאיפוס מיקום התחלתי של מד ההתקדמות על ציר
			setGlobalTime;// איפוס משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		}
		
		function progressBar(){//פונקציית מד התקדמות של המשחק
			tempX = tempX - moveX;//Xחישוב של מד התקדמות על הציר
			stage.removeChild(stage.getChildByName("frogiProgress"));//מחיקה של מד התקדמות 
			stage.addChild(frogiProgress);//מחיקה של מד התקדמות 
			frogiProgress.x = tempX;//המיקום הקפיצה החדש של פרוגי
		}
		
		function createButton() { //פונקציה ליצירת כפתורים
			stage.addChild(sound_btn); //יצירת כפתור צלילים
			stage.addChild(music_btn); //יצירת כפתור מוזיקה
		}
		
		function stopMusic() {//פונקציה שבאמצעותה עוצרים את הסאונדים במשחק
			createjs.Sound.stop("Success"); //עצירת סאונד הצלחה
			createjs.Sound.stop("Failure"); //עצירת סאונד אי הצלחה
			createjs.Sound.stop("Endofgame"); //עצירת סאונד סיום
			createjs.Sound.stop("GameSound");//עצירת סאונד משחק
		}
		
		function playSound() {//פונקציה שבאמצעותה מפעילים את סאונד המשחק 
			createjs.Sound.play("GameSound", {
				interrupt: createjs.Sound.INTERRUPT_ANY,
				loop: -1
			})
		}; //הפעלת מוזיקת פתיחה
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '6BF547886BE25247839B6B22E36D372B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bankofariver.png?1644274454279", id:"bankofariver"},
		{src:"images/Bitmap2.png?1644274454279", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1644274454279", id:"Bitmap3"},
		{src:"images/Bitmap5.png?1644274454279", id:"Bitmap5"},
		{src:"images/BlueFrogi.png?1644274454279", id:"BlueFrogi"},
		{src:"images/brownborad.png?1644274454279", id:"brownborad"},
		{src:"images/butterfly_open.png?1644274454279", id:"butterfly_open"},
		{src:"images/Cards.png?1644274454279", id:"Cards"},
		{src:"images/check_active.png?1644274454279", id:"check_active"},
		{src:"images/check_notActive.png?1644274454279", id:"check_notActive"},
		{src:"images/clock.png?1644274454279", id:"clock"},
		{src:"images/ComboBox.png?1644274454279", id:"ComboBox"},
		{src:"images/CONTINUEBTN.png?1644274454280", id:"CONTINUEBTN"},
		{src:"images/EndAnimitonBackground.png?1644274454280", id:"EndAnimitonBackground"},
		{src:"images/endbuttuns.png?1644274454280", id:"endbuttuns"},
		{src:"images/finalborad.png?1644274454280", id:"finalborad"},
		{src:"images/frogiHappy.png?1644274454280", id:"frogiHappy"},
		{src:"images/FrogiSideLook.png?1644274454280", id:"FrogiSideLook"},
		{src:"images/Game_Name_Subject.png?1644274454280", id:"Game_Name_Subject"},
		{src:"images/GameBackground.png?1644274454280", id:"GameBackground"},
		{src:"images/gm1.png?1644274454280", id:"gm1"},
		{src:"images/GreenFrogi.png?1644274454280", id:"GreenFrogi"},
		{src:"images/Homescreenbackground.png?1644274454280", id:"Homescreenbackground"},
		{src:"images/Howtoplayborad.png?1644274454280", id:"Howtoplayborad"},
		{src:"images/img_temp_1.jpg?1644274454280", id:"img_temp_1"},
		{src:"images/img_temp_2.jpg?1644274454280", id:"img_temp_2"},
		{src:"images/img_temp_3.jpg?1644274454280", id:"img_temp_3"},
		{src:"images/img_temp_4.jpg?1644274454280", id:"img_temp_4"},
		{src:"images/jump.png?1644274454280", id:"jump"},
		{src:"images/jump2.png?1644274454280", id:"jump2"},
		{src:"images/jumpBlue.png?1644274454280", id:"jumpBlue"},
		{src:"images/jumpeGreen.png?1644274454280", id:"jumpeGreen"},
		{src:"images/jumperGreen.png?1644274454280", id:"jumperGreen"},
		{src:"images/jumpingfrogi.png?1644274454280", id:"jumpingfrogi"},
		{src:"images/jumpPink.png?1644274454280", id:"jumpPink"},
		{src:"images/looksideBlue.png?1644274454280", id:"looksideBlue"},
		{src:"images/looksidePink.png?1644274454280", id:"looksidePink"},
		{src:"images/music.png?1644274454280", id:"music"},
		{src:"images/mute.png?1644274454280", id:"mute"},
		{src:"images/namegameH1.png?1644274454280", id:"namegameH1"},
		{src:"images/num0.png?1644274454280", id:"num0"},
		{src:"images/num1.png?1644274454280", id:"num1"},
		{src:"images/num2.png?1644274454280", id:"num2"},
		{src:"images/num3.png?1644274454280", id:"num3"},
		{src:"images/num4.png?1644274454280", id:"num4"},
		{src:"images/num5.png?1644274454280", id:"num5"},
		{src:"images/num6.png?1644274454280", id:"num6"},
		{src:"images/num7.png?1644274454280", id:"num7"},
		{src:"images/num8.png?1644274454280", id:"num8"},
		{src:"images/num9.png?1644274454280", id:"num9"},
		{src:"images/OpenanimitonBackground.png?1644274454280", id:"OpenanimitonBackground"},
		{src:"images/PAUSEBTN.png?1644274454280", id:"PAUSEBTN"},
		{src:"images/PauseH1.png?1644274454280", id:"PauseH1"},
		{src:"images/PinkFrogi.png?1644274454280", id:"PinkFrogi"},
		{src:"images/sadfrogi.png?1644274454280", id:"sadfrogi"},
		{src:"images/stopbutton.png?1644274454280", id:"stopbutton"},
		{src:"images/TimeoverH1png.png?1644274454280", id:"TimeoverH1png"},
		{src:"images/Viconpng.png?1644274454280", id:"Viconpng"},
		{src:"images/wave.png?1644274454280", id:"wave"},
		{src:"images/whiteline.png?1644274454280", id:"whiteline"},
		{src:"images/Xicon.png?1644274454280", id:"Xicon"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644274454280", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644274454280", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1644274454280", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644274454280", id:"an.ComboBox"}
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
an.compositions['6BF547886BE25247839B6B22E36D372B'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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