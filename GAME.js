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


(lib.plant = function() {
	this.initialize(img.plant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1282,1081);


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



(lib.raft = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.plant();
	this.instance.setTransform(142.1,40.1,0.1108,0.1489,0,0,180);

	this.instance_1 = new lib.plant();
	this.instance_1.setTransform(401,20,0.1316,0.1489);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(2,1,1).moveTo(0,-0).lineTo(-0,0);
	this.shape.setTransform(139.775,337.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.1,1,1).moveTo(118.3,-70.2).curveTo(118.2,-70.8,118.1,-71.4).moveTo(128.7,-71.4).lineTo(128.7,-70.2).moveTo(128.9,-70.2).lineTo(128.9,-71.4).moveTo(129.5,-41.8).lineTo(129.2,-56).moveTo(122,-41.2).curveTo(121,-48.6,120.1,-56).moveTo(123.4,-30.8).curveTo(123.1,-33.4,122.7,-36).curveTo(122.6,-36.7,122.5,-37.4).moveTo(129.7,-30.8).lineTo(129.6,-37.8).moveTo(54,-70.2).curveTo(53.9,-70.8,53.8,-71.4).moveTo(68.3,-71.4).lineTo(68.3,-70.2).moveTo(68.2,-56).lineTo(68.2,-53.8).moveTo(68.2,-47.6).lineTo(68.1,-30.8).moveTo(60.8,-30.8).curveTo(58.2,-43.9,56.2,-56).moveTo(151.3,25.2).curveTo(151.2,25.2,151.1,25.2).lineTo(151,25.3).curveTo(147.1,26.4,144,29).curveTo(138.7,33.4,137.4,38.1).curveTo(136.4,42.3,136.9,46.6).curveTo(138,53,140.8,59.2).curveTo(141.5,61.3,143,63.1).curveTo(145.7,66.8,151.1,69.7).curveTo(155.1,71.7,159.7,71.4).curveTo(160.9,71.4,162.1,71.2).moveTo(149.6,52.9).lineTo(151.5,57.8).curveTo(153.8,61.3,156.1,63.1).curveTo(156.6,63.5,157.2,63.9).curveTo(161.3,66.3,166.4,65.2).lineTo(166.4,65.1).lineTo(173.9,62.3).curveTo(180.5,58.4,181,53).curveTo(181.4,47.3,180.7,42.2).curveTo(180.2,37,177.3,33.4).curveTo(172.4,27.9,164.8,25.6).curveTo(161.1,24.7,157.7,24.6).moveTo(130.2,-8).lineTo(130.4,0.9).lineTo(127.2,-6.8).moveTo(126.5,-8.8).curveTo(126.5,-9.1,126.4,-9.4).moveTo(173.1,68.8).curveTo(173.8,68.5,174.5,68.2).curveTo(179,66.2,181.2,63.1).curveTo(182.3,61.7,182.8,60).curveTo(186.1,53,187.9,45.9).curveTo(188.9,38,185.2,34.3).curveTo(179.8,27.9,172,25.3).moveTo(130,-16.7).lineTo(130.1,-12.1).moveTo(68,-16.7).lineTo(67.9,3.3).curveTo(65.6,-6.9,63.6,-16.7).moveTo(-188.1,-70.2).curveTo(-188.1,-70.8,-188.2,-71.4).moveTo(-176.1,-71.4).lineTo(-176.1,-70.2).moveTo(-176.3,-33.1).lineTo(-176.3,-30.8).moveTo(-176.2,-51.5).lineTo(-176.3,-37).moveTo(-183.8,-30.8).curveTo(-184.9,-39.2,-186.1,-51).moveTo(7.9,-71.4).lineTo(7.8,-70.2).moveTo(-5.3,-70.2).curveTo(-5.4,-70.8,-5.5,-71.4).moveTo(-1.2,-42.9).curveTo(-1.2,-43.2,-1.3,-43.5).curveTo(-1.3,-43.7,-1.3,-43.8).curveTo(-2.3,-50,-3.2,-56).moveTo(7.5,-33.1).lineTo(7.4,-30.8).moveTo(7.7,-56).lineTo(7.5,-37).moveTo(-53.1,-71.4).lineTo(-53.1,-70.2).moveTo(-68.9,-70.2).curveTo(-69,-70.8,-69.1,-71.4).moveTo(-115.5,-71.4).curveTo(-115.5,-70.8,-115.4,-70.2).moveTo(-123.7,-42.9).curveTo(-123.9,-44.5,-124.2,-46.2).moveTo(-115.1,-31.6).curveTo(-115.1,-31.2,-115.1,-30.8).moveTo(-121.8,-30.8).curveTo(-122.3,-33.6,-122.7,-36.4).curveTo(-122.9,-37.4,-123,-38.3).moveTo(-115.1,-54.2).curveTo(-115,-44.8,-115.2,-35.5).moveTo(-62.1,-30.8).curveTo(-64.7,-43.1,-66.8,-56).moveTo(-53.1,-56).lineTo(-53.1,-34.6).moveTo(-53.1,-12.3).lineTo(-53.2,6.3).curveTo(-53.2,6.2,-53.2,6.2).curveTo(-55.5,-2.1,-57.6,-10.6).curveTo(-58.1,-12.8,-58.6,-15.1).curveTo(-58.8,-15.9,-59,-16.7).moveTo(-114.8,-12.9).lineTo(-114.8,-12.9).moveTo(-114.8,-10.4).curveTo(-114.8,-10.2,-114.8,-10.1).curveTo(-114.8,-10,-114.8,-9.9).lineTo(-114.8,-8.9).lineTo(-114.8,-8.3).moveTo(-119,-13.7).curveTo(-119,-13.9,-119.1,-14.1).moveTo(-114.8,-8.9).lineTo(-114.8,-9.5).moveTo(-116.9,-2.3).curveTo(-117.5,-5.5,-118.1,-8.8).curveTo(-118.2,-9.4,-118.3,-10.1).moveTo(-116.1,7.2).curveTo(-116.2,5.7,-116.3,4.2).curveTo(-116.4,2,-116.6,-0.4).curveTo(-116.6,-0.4,-116.6,-0.4).lineTo(-116.6,-0.6).moveTo(-116.6,1.1).curveTo(-116.3,4.5,-116.1,7.2).moveTo(-115.7,11.5).curveTo(-115.6,13,-115.5,14.2).curveTo(-114.9,20.5,-115.5,14.7).curveTo(-115.6,13.3,-115.7,11.5).lineTo(-116.1,7.2).moveTo(7.2,-11.3).lineTo(7,6.4).curveTo(6.9,6.2,6.9,5.9).curveTo(5.9,0.1,4.9,-5.6).curveTo(4.7,-6.6,4.6,-7.6).curveTo(4.4,-8.3,4.3,-9).moveTo(7.3,-16.7).lineTo(7.3,-15.3).moveTo(3.7,-12.6).curveTo(3.4,-14.7,3,-16.7);
	this.shape_1.setTransform(295.0064,312.3892);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#814229").setStrokeStyle(1,1,1).moveTo(193.5,-49.7).lineTo(195.4,-59.3).curveTo(195.5,-64.4,195.1,-69.3).curveTo(194.6,-74.9,193.4,-80.3).curveTo(190.5,-82.9,190.1,-80.4).lineTo(190.9,-76.7).lineTo(191.5,-73).curveTo(191.9,-71.1,192.2,-69.3).curveTo(192.9,-64,192.2,-59.7).curveTo(192,-54.7,191,-49.7).curveTo(190.8,-49.1,190.7,-48.4).curveTo(190.3,-46.6,189.7,-44.8).lineTo(181.7,-51.2).lineTo(181,-51.7).moveTo(190.9,-76.7).lineTo(182.5,-69.3).lineTo(181,-68).moveTo(193.5,-49.7).lineTo(193.4,-49.3).curveTo(193.3,-48.6,193.1,-47.9).lineTo(192.9,-46.8).moveTo(193.5,-49.7).lineTo(193.5,-49.7).moveTo(181,-56).lineTo(188.6,-50.1).lineTo(190.7,-48.4).moveTo(189.7,-44.8).curveTo(191.8,-43.1,192.6,-45.5).curveTo(192.7,-45.9,192.8,-46.4).moveTo(190.1,-80.4).curveTo(185.6,-76,181,-71.8).moveTo(149.5,44).curveTo(148.7,44.7,148,45.5).curveTo(147.7,45.8,147.5,46).curveTo(142.7,50.6,137.8,55).curveTo(137.3,55.4,136.8,55.9).curveTo(136.5,56.2,136.2,56.4).curveTo(133.7,58.6,131.2,60.7).curveTo(130.1,61.6,129,62.5).lineTo(121.2,55.9).lineTo(111.1,47.3).curveTo(110.7,45.6,110.4,43.9).curveTo(109.8,43.4,109.4,43.2).curveTo(107.4,41.8,107.1,43.8).curveTo(102,48.8,96.9,53.5).curveTo(96.6,53.7,96.4,53.9).curveTo(95.8,54.4,95.2,55).curveTo(94.8,55.3,94.4,55.7).curveTo(94.3,55.8,94.2,55.9).curveTo(91.5,58.3,88.7,60.6).curveTo(87.6,61.5,86.6,62.4).curveTo(82.5,65.8,78.3,69.1).curveTo(77.7,69.6,77.1,70).curveTo(76.8,70.2,76.6,70.4).curveTo(76.1,70.8,75.7,71.1).curveTo(71.6,74.2,67.5,77.2).moveTo(151.8,43.3).curveTo(151.9,42.1,152.6,42.5).lineTo(153.8,43.5).lineTo(155.5,44.9).lineTo(155.6,45.1).lineTo(164.6,52.8).lineTo(172.8,59.9).lineTo(173.1,60.1).lineTo(173,60.1).curveTo(172,61,170.9,61.9).curveTo(170.9,61.9,170.9,61.9).lineTo(170.8,61.9).lineTo(170.5,62.3).lineTo(166,67).curveTo(164.2,68.4,162.4,69.8).curveTo(161.9,70.2,161.5,70.5).curveTo(159.8,71.8,158,73.1).curveTo(157.9,73.2,157.8,73.3).curveTo(156.9,74,156.1,74.6).curveTo(154.3,75.9,152.5,77.2).curveTo(152.4,77.2,152.4,77.3).moveTo(153.5,47.2).curveTo(153.2,45.6,152.8,44.1).curveTo(152.3,43.6,151.8,43.3).curveTo(149.8,42,149.5,44).lineTo(150.3,47.7).lineTo(148.5,49.3).lineTo(148,49.7).lineTo(141,55.9).lineTo(133.2,62.7).lineTo(142.5,70).lineTo(150.1,76).curveTo(149.7,77.8,149.1,79.6).lineTo(137,70).lineTo(130.9,65.2).lineTo(124.8,70).lineTo(113.4,79).lineTo(111.1,79.9).lineTo(108.6,80.8).curveTo(108.1,81,108.5,80.1).curveTo(109.4,79.8,109.8,77.8).lineTo(109.9,77.4).lineTo(109.9,77.4).lineTo(109.9,77.3).lineTo(109.9,77.4).lineTo(109.9,77.4).curveTo(114.8,73.8,119.8,70).curveTo(120.3,69.6,120.9,69.1).curveTo(125,65.9,129,62.5).moveTo(154.8,58.5).lineTo(154.7,57.8).curveTo(154.7,56.8,154.6,55.9).curveTo(154.6,55.4,154.5,55).curveTo(154.2,51.4,153.6,47.9).curveTo(153.5,47.5,153.5,47.2).moveTo(170.9,61.9).lineTo(161.4,53.9).lineTo(155.7,49.1).lineTo(155.5,48.9).lineTo(153.6,47.3).lineTo(153.5,47.2).moveTo(150.3,47.7).lineTo(150.9,51.4).curveTo(151.3,53.2,151.5,55).curveTo(151.6,55.4,151.7,55.9).curveTo(152.2,60.7,151.6,64.7).curveTo(151.5,66.9,151.3,69.1).curveTo(151.2,69.6,151.2,70).curveTo(151.1,70.3,151.1,70.7).curveTo(150.7,73.3,150.1,76).moveTo(154.8,58.5).curveTo(154.9,59.7,154.9,60.9).curveTo(155.1,65,154.5,69.1).curveTo(154.4,69.6,154.3,70).curveTo(153.7,73.4,152.5,76.8).curveTo(152.5,76.9,152.4,77).lineTo(152.4,77.3).moveTo(154.1,69).lineTo(154.8,65.1).curveTo(154.9,61.8,154.8,58.5).moveTo(175.1,62).lineTo(175.7,62.5).lineTo(190.1,73.9).lineTo(192.5,75.9).lineTo(192.7,76).moveTo(173.4,65).lineTo(172.8,64.5).lineTo(175.1,62).moveTo(173.3,65.1).lineTo(173.4,65).moveTo(170.9,61.9).lineTo(170.8,61.9).moveTo(173.3,65.1).lineTo(165.8,71.1).lineTo(156.2,78.7).lineTo(155.8,78.9).lineTo(153.2,79.9).lineTo(153,80).lineTo(151.1,80.7).curveTo(150.6,80.9,150.8,80.3).curveTo(151.8,80,152.2,78).lineTo(152.4,77.4).lineTo(152.4,77.3).lineTo(152.4,77.3).moveTo(191.9,44).lineTo(191.5,43.4).lineTo(191.4,43.3).curveTo(191.3,43.4,191.3,43.5).curveTo(190.1,44.6,188.9,45.8).curveTo(188.8,45.9,188.7,46).curveTo(185.1,49.4,181.4,52.8).curveTo(181,53.2,180.6,53.5).curveTo(180.5,53.6,180.4,53.7).curveTo(176.7,56.9,173.1,60.1).moveTo(192.2,43.2).lineTo(192.2,43.1).curveTo(191.9,40.7,193,41.2).lineTo(194.4,42.4).lineTo(210.5,56.3).moveTo(192,44.1).lineTo(191.9,44).moveTo(192,43.9).curveTo(191.9,43.9,191.9,44).moveTo(192,43.9).lineTo(192,44.1).moveTo(192.5,44.8).lineTo(192,44.1).moveTo(192.5,44.8).lineTo(192.3,45.4).lineTo(192.7,47.6).lineTo(193.4,51.3).curveTo(193.8,53.2,194,55).curveTo(194.7,60.3,194.1,64.6).curveTo(193.8,69.5,192.9,74.3).curveTo(192.9,74.4,192.8,74.6).curveTo(192.7,75.2,192.5,75.9).moveTo(192.2,43.2).curveTo(192,43.4,192,43.9).moveTo(192.5,44.8).curveTo(192.3,43.8,192.2,43.2).moveTo(192.5,44.8).curveTo(193.9,48.5,194.6,52.8).curveTo(194.7,53.2,194.7,53.7).curveTo(195.1,56.5,195.3,59.6).curveTo(195.6,66.2,193.8,72.6).curveTo(193.3,74.2,192.8,75.8).curveTo(192.7,75.9,192.7,76).moveTo(211.3,61.6).lineTo(211.2,61.6).curveTo(210.1,62.5,209,63.5).curveTo(208.8,63.7,208.5,63.9).curveTo(203,68.3,197.5,72.5).curveTo(196.5,73.2,195.5,74).lineTo(197.3,65).curveTo(197.4,59.9,197,55).curveTo(196.6,51.3,196,47.8).lineTo(192.5,44.8).moveTo(211.8,61.1).lineTo(211.1,60.5).moveTo(211.8,61.1).lineTo(211.8,65.3).moveTo(211.8,61.1).lineTo(210.5,56.3).moveTo(211.1,60.5).lineTo(196,47.8).moveTo(192.3,45.4).lineTo(191.4,47.7).lineTo(175.1,62).moveTo(192.7,47.6).lineTo(175.7,62.5).moveTo(66.9,43.4).curveTo(64.9,42.1,64.6,44.1).lineTo(65.4,47.8).lineTo(66,51.5).curveTo(66.4,53.3,66.6,55).curveTo(66.7,55.4,66.8,55.9).curveTo(67.3,60.8,66.7,64.8).curveTo(66.6,67,66.4,69.1).curveTo(66.3,69.6,66.3,70).curveTo(65.8,73.1,65.2,76.1).curveTo(64.8,77.9,64.2,79.7).lineTo(63.2,78.8).lineTo(52,70).lineTo(46,65.3).lineTo(48.3,62.8).lineTo(57.5,70).lineTo(63.4,74.7).lineTo(65.2,76.1).moveTo(66.9,43.4).curveTo(66.9,42.1,67.7,42.4).lineTo(83.3,55.9).lineTo(88.7,60.6).moveTo(68.5,47.1).curveTo(68.2,45.6,67.9,44.2).curveTo(67.4,43.7,66.9,43.4).moveTo(69.8,57.5).curveTo(69.7,56.7,69.7,55.9).curveTo(69.6,55.4,69.6,55).curveTo(69.2,51,68.5,47.1).moveTo(69.8,57.5).curveTo(69.9,59.1,70,60.8).curveTo(70.2,65,69.6,69.1).curveTo(69.5,69.6,69.4,70).curveTo(68.8,73.4,67.6,76.7).lineTo(67.6,76.8).lineTo(69,70).lineTo(69.9,65.2).curveTo(70,61.3,69.8,57.5).closePath().moveTo(65.4,47.8).lineTo(56.2,55.9).lineTo(48.3,62.8).moveTo(106.7,79.4).lineTo(94.8,70).lineTo(88.4,65).lineTo(90.7,62.5).lineTo(100.3,70).lineTo(107.6,75.8).curveTo(107.2,77.6,106.7,79.4).curveTo(107.7,80.3,108.5,80.1).moveTo(86.6,62.4).lineTo(78.9,55.9).lineTo(68.5,47.1).moveTo(88.4,65).lineTo(82.1,70).lineTo(70.9,78.9).lineTo(66.2,80.6).curveTo(65.8,80.8,65.9,80.4).curveTo(66.9,80.2,67.3,78.1).lineTo(67.5,77.2).lineTo(67.6,76.8).lineTo(67.6,76.8).moveTo(109.4,43.2).curveTo(109.5,42.3,110.2,42.6).lineTo(125.6,55.9).lineTo(131.2,60.7).moveTo(112.3,58.3).curveTo(112.3,57.1,112.2,55.9).curveTo(112.1,55.4,112.1,55).curveTo(111.7,51.1,111.1,47.3).moveTo(107.8,47.5).lineTo(108.5,51.2).curveTo(108.9,53.2,109.1,55).curveTo(109.2,55.4,109.2,55.9).curveTo(109.8,60.7,109.2,64.5).curveTo(109.1,66.8,108.8,69.1).curveTo(108.7,69.6,108.7,70).curveTo(108.3,73,107.6,75.8).moveTo(112.3,58.3).curveTo(112.4,59.6,112.5,61).curveTo(112.7,65.1,112.1,69.1).curveTo(112,69.6,111.9,70).curveTo(111.2,73.7,109.9,77.3).lineTo(111.4,70).lineTo(112.4,65).curveTo(112.5,61.6,112.3,58.3).closePath().moveTo(107.8,47.5).lineTo(98.3,55.9).lineTo(90.7,62.5).moveTo(130.9,65.2).lineTo(133.2,62.7).moveTo(107.1,43.8).lineTo(107.8,47.5).moveTo(64.2,79.7).curveTo(65.2,80.5,65.9,80.4).moveTo(191,78.9).curveTo(191.1,78.6,191.2,78.3).curveTo(191.4,78,191.6,77.7).curveTo(192,77.2,192.4,76.5).curveTo(192.5,76.2,192.7,76).moveTo(195.5,74).curveTo(194.3,74.9,193,75.7).curveTo(192.9,75.8,192.7,76).moveTo(191.2,79.2).curveTo(191.2,79.1,191.2,79).curveTo(191.3,79.1,191.5,79.4).lineTo(191.4,79.4).curveTo(191.1,79.6,191.2,79.2).lineTo(185.8,74.9).lineTo(183.6,73.2).lineTo(173.3,65.1).moveTo(191.5,79.4).lineTo(191.2,79.2).moveTo(191.6,79.5).lineTo(191.5,79.4).moveTo(191,78.9).curveTo(191.1,79,191.2,79).moveTo(211.8,65.3).lineTo(199.5,75).lineTo(196.2,77.6).lineTo(194.6,78.2).lineTo(191.6,79.3).lineTo(191.5,79.4).moveTo(191.6,79.5).curveTo(193.6,81.2,194.5,78.8).lineTo(194.6,78.2).moveTo(191.6,79.3).curveTo(191.6,79.4,191.6,79.5).moveTo(149.1,79.6).curveTo(150.1,80.4,150.8,80.3).moveTo(191,78.9).lineTo(173.4,65).moveTo(-186.9,-77.3).lineTo(-188,-78.8).curveTo(-189.3,-77.5,-190.6,-76.3).curveTo(-190.7,-76.2,-190.7,-76.1).curveTo(-194.4,-72.7,-198,-69.3).curveTo(-198.5,-68.9,-198.9,-68.6).curveTo(-202.6,-65.2,-206.4,-62).moveTo(-206.7,-57.6).lineTo(-204.4,-60.1).lineTo(-190.7,-49.3).lineTo(-186.8,-46.1).moveTo(-186.9,-77.3).lineTo(-188,-74.4).lineTo(-193.8,-69.3).lineTo(-204.4,-60.1).moveTo(-211.4,-66.4).lineTo(-211.4,-66.3).lineTo(-211.4,-62.7).lineTo(-211.5,-61.6).moveTo(-208.5,-60.2).curveTo(-209.9,-59.1,-211.3,-57.9).curveTo(-211.5,-57.8,-211.6,-57.7).lineTo(-211.6,-53.6).lineTo(-206.7,-57.6).moveTo(-208.5,-60.2).lineTo(-211.4,-62.7).lineTo(-211.5,-62.7).moveTo(-188.4,-43.2).lineTo(-195.9,-49).lineTo(-206.7,-57.6).moveTo(-188.4,-43.2).curveTo(-188.4,-43.1,-188.3,-43.1).curveTo(-188.2,-43,-188,-42.9).moveTo(-211.4,-66.3).lineTo(-206.4,-62).curveTo(-207.5,-61.1,-208.5,-60.2).moveTo(-186.9,-77.3).curveTo(-187.9,-81.5,-186.5,-80.9).lineTo(-180.9,-76.1).moveTo(-186.9,-77.3).curveTo(-185.6,-73.6,-184.9,-69.3).curveTo(-184.3,-66.1,-184.2,-62.5).curveTo(-183.9,-55.9,-185.7,-49.5).curveTo(-186.2,-47.8,-186.8,-46.1).moveTo(-180.9,-50.4).curveTo(-181.4,-50,-182,-49.6).curveTo(-184.4,-47.8,-186.8,-46.1).moveTo(-180.9,-46.3).lineTo(-183.3,-44.5).lineTo(-188,-42.7).curveTo(-188.4,-42.5,-188.3,-43.1).moveTo(-188,-43.8).curveTo(-187.6,-44.6,-186.8,-46.1).moveTo(-180.9,-72.2).lineTo(-186.9,-77.3).moveTo(-188,-44.5).curveTo(-188.2,-43.9,-188.4,-43.2).moveTo(-185.1,47).lineTo(-186.2,49.9).lineTo(-193,55.9).lineTo(-202.5,64.2).lineTo(-185.2,78).lineTo(-184.9,78.2).moveTo(-185.1,47).curveTo(-183.7,50.7,-183,55).curveTo(-182.9,55.4,-182.9,55.9).curveTo(-182.5,58.7,-182.3,61.8).curveTo(-182,68.4,-183.8,74.8).curveTo(-184.3,76.4,-184.8,78).curveTo(-184.9,78.1,-184.9,78.2).moveTo(-165.8,63.3).curveTo(-167.2,64.5,-168.6,65.7).curveTo(-168.8,65.9,-169.1,66.1).curveTo(-174.6,70.5,-180.1,74.7).curveTo(-182.3,76.3,-184.6,77.9).curveTo(-184.7,78,-184.9,78.2).moveTo(-165.8,63.3).lineTo(-174.6,55.9).lineTo(-185.1,47).curveTo(-186,42.8,-184.6,43.4).lineTo(-170.1,55.9).lineTo(-163.6,61.5).curveTo(-164.7,62.4,-165.8,63.3).closePath().moveTo(-145.3,44.8).curveTo(-146.6,46,-147.8,47.3).curveTo(-147.9,47.3,-148,47.4).curveTo(-149.2,48.6,-150.4,49.7).curveTo(-150.5,49.8,-150.6,49.9).curveTo(-153.4,52.5,-156.1,55).curveTo(-156.6,55.4,-157.1,55.9).curveTo(-160.4,58.8,-163.6,61.5).moveTo(-144.5,48.5).lineTo(-150.4,53.6).lineTo(-150.6,53.8).lineTo(-152.9,55.9).lineTo(-161.6,63.5).lineTo(-146.1,75.7).lineTo(-144.7,76.8).curveTo(-145.1,78.6,-145.7,80.4).curveTo(-144.7,81.2,-144,81.1).curveTo(-143,80.9,-142.6,78.8).lineTo(-142.3,77.6).lineTo(-142.2,76.9).moveTo(-163.9,66).lineTo(-161.6,63.5).moveTo(-185.1,47).lineTo(-186.2,45.5).curveTo(-187.5,46.8,-188.7,48).curveTo(-188.8,48.1,-188.9,48.2).curveTo(-192.5,51.6,-196.2,55).curveTo(-196.6,55.4,-197,55.7).curveTo(-197.1,55.8,-197.2,55.9).curveTo(-200.9,59.1,-204.5,62.3).curveTo(-205.6,63.2,-206.7,64.1).curveTo(-208.1,65.2,-209.5,66.4).curveTo(-209.6,66.5,-211.6,67.1).lineTo(-211.6,71.3).lineTo(-204.8,66.7).lineTo(-202.5,64.2).moveTo(-143,44.1).curveTo(-145,42.8,-145.3,44.8).lineTo(-144.5,48.5).lineTo(-143.9,52.2).curveTo(-143.6,53.6,-143.4,55).curveTo(-143.3,55.4,-143.2,55.9).curveTo(-142.5,61.2,-143.2,65.5).curveTo(-143.4,69.4,-144,73.2).curveTo(-144.2,74.4,-144.5,75.6).curveTo(-144.6,76.2,-144.7,76.8).moveTo(-143,44.1).curveTo(-143.1,42.5,-142.2,42.9).lineTo(-127.1,55.9).lineTo(-121.2,61).curveTo(-122.3,61.9,-123.3,62.8).lineTo(-131.5,55.9).lineTo(-141.4,47.5).curveTo(-141.7,46.2,-142,44.9).curveTo(-142.5,44.4,-143,44.1).closePath().moveTo(-140.1,57.6).curveTo(-140.2,56.7,-140.3,55.9).curveTo(-140.3,55.4,-140.4,55).curveTo(-140.7,51.2,-141.4,47.5).moveTo(-140.1,57.6).curveTo(-140,59.4,-139.9,61.3).curveTo(-139.6,67.2,-141,73.1).curveTo(-141.3,74.2,-141.7,75.4).curveTo(-141.9,76.1,-142.2,76.9).lineTo(-141.9,75.4).lineTo(-140,65.9).curveTo(-139.9,61.7,-140.1,57.6).closePath().moveTo(-102.8,44.3).curveTo(-106.1,47.5,-109.5,50.6).curveTo(-109.6,50.7,-109.7,50.8).curveTo(-112,52.9,-114.2,55).curveTo(-114.7,55.4,-115.2,55.9).curveTo(-118.2,58.5,-121.2,61).moveTo(-121.5,65.5).lineTo(-119.2,63).lineTo(-106,73.4).lineTo(-102.3,76.3).curveTo(-102.7,78.1,-103.2,79.9).lineTo(-111.1,73.7).lineTo(-121.5,65.5).lineTo(-133.4,75).lineTo(-139,79.3).lineTo(-143.7,81.1).curveTo(-144,81.2,-144,81.1).moveTo(-102.1,48).lineTo(-111.1,55.9).lineTo(-119.2,63).moveTo(-206.7,64.1).lineTo(-211.7,64.2).lineTo(-211.7,62.4).lineTo(-211.7,61.5).lineTo(-211.7,58.9).moveTo(-211.8,57.7).lineTo(-204.5,62.3).moveTo(-123.3,62.8).curveTo(-129.5,68,-135.8,72.8).curveTo(-137.5,74.1,-139.1,75.3).curveTo(-140.7,76.4,-142.3,77.6).moveTo(-186.6,81.1).curveTo(-186.5,80.8,-186.4,80.5).curveTo(-186.2,80.2,-186,79.9).curveTo(-185.5,79.2,-184.9,78.2).moveTo(-186.4,81.2).curveTo(-186.3,81.3,-186.1,81.6).lineTo(-186.2,81.6).curveTo(-186.6,81.8,-186.4,81.2).closePath().moveTo(-186.6,81.1).curveTo(-186.5,81.2,-186.4,81.2).moveTo(-163.9,66).lineTo(-178.6,77.6).lineTo(-181.4,79.8).lineTo(-182.1,80.1).lineTo(-186.1,81.6).moveTo(-145.7,80.4).lineTo(-151.2,76).lineTo(-163.9,66).moveTo(-186.6,81.1).lineTo(-190.2,78.3).lineTo(-204.8,66.7).moveTo(-17.9,43.5).curveTo(-19.1,43.2,-19.3,44.6).curveTo(-22.3,47.5,-25.2,50.3).curveTo(-25.4,50.4,-25.5,50.5).curveTo(-26.3,51.3,-27.2,52.1).curveTo(-28.8,53.5,-30.3,55).curveTo(-30.8,55.4,-31.3,55.9).curveTo(-34.5,58.7,-37.7,61.4).curveTo(-38.8,62.3,-39.8,63.2).lineTo(-48.4,55.9).lineTo(-55.2,50.1).curveTo(-54.9,52.5,-54.7,55).curveTo(-54.6,55.4,-54.6,55.9).curveTo(-54.2,60.5,-54.3,65.3).lineTo(-55.3,70.6).lineTo(-56.5,76.3).moveTo(-17.9,43.5).curveTo(-18,42.1,-17.1,42.4).lineTo(-1.6,55.9).lineTo(3.9,60.6).moveTo(-15.4,47.9).curveTo(-15.7,46.3,-16,44.7).curveTo(-17.2,43.7,-17.9,43.5).moveTo(-16.1,76.3).lineTo(-14.9,70).lineTo(-14,65.8).curveTo(-13.9,60.7,-14.3,55.9).curveTo(-14.3,55.4,-14.4,55).curveTo(-14.8,51.4,-15.4,47.9).moveTo(1.7,62.4).lineTo(-5.9,55.9).lineTo(-15.4,47.9).moveTo(-18.6,48.3).lineTo(-17.9,52).curveTo(-17.6,53.5,-17.4,55).curveTo(-17.3,55.4,-17.2,55.9).curveTo(-16.6,61.1,-17.2,65.3).curveTo(-17.3,67.2,-17.5,69.1).curveTo(-17.6,69.6,-17.6,70).curveTo(-18,73.4,-18.8,76.6).curveTo(-19.2,78.4,-19.7,80.2).lineTo(-27.2,74.4).lineTo(-32.6,70).lineTo(-38,65.8).lineTo(-43.6,70.3).lineTo(-55.5,79.7).lineTo(-59.6,81.2).lineTo(-60.2,81.4).curveTo(-61,81.8,-59.9,79.8).curveTo(-59.7,80,-59.5,80.1).curveTo(-57.6,81.4,-56.9,78.2).lineTo(-56.5,76.3).moveTo(1.7,62.4).curveTo(-2.4,65.8,-6.6,69.1).curveTo(-7.2,69.6,-7.7,70).curveTo(-11.9,73.3,-16.1,76.3).moveTo(22.2,43.8).curveTo(17.8,48.2,13.3,52.3).curveTo(12.5,53,11.7,53.7).curveTo(11,54.3,10.3,55).curveTo(9.8,55.4,9.3,55.9).curveTo(6.6,58.3,3.9,60.6).curveTo(2.8,61.5,1.7,62.4).moveTo(-17.1,80.1).lineTo(-13.9,78.9).lineTo(-2.7,70).lineTo(3.6,65).moveTo(21.8,79.4).lineTo(9.9,70).lineTo(3.6,65).lineTo(5.9,62.5).lineTo(15.4,70).lineTo(22.8,75.8).curveTo(22.4,77.6,21.8,79.4).curveTo(22.9,80.3,23.6,80.1).curveTo(24.5,79.8,24.9,77.8).lineTo(25,77.5).lineTo(25,77.4).moveTo(23,47.5).lineTo(13.5,55.9).lineTo(5.9,62.5).moveTo(-19.3,44.6).lineTo(-18.6,48.3).lineTo(-27,55.9).lineTo(-35.4,63.5).lineTo(-27.1,70).lineTo(-24.9,71.8).lineTo(-24.8,71.9).lineTo(-18.8,76.6).moveTo(24.5,43.1).curveTo(22.5,41.9,22.2,43.8).lineTo(23,47.5).lineTo(23.6,51.2).curveTo(24,53.2,24.3,55).curveTo(24.3,55.4,24.4,55.9).curveTo(24.9,60.7,24.3,64.5).curveTo(24.2,66.8,23.9,69.1).curveTo(23.9,69.6,23.8,70).curveTo(23.4,73,22.8,75.8).moveTo(24.5,43.1).curveTo(24.5,43,24.6,42.9).curveTo(24.8,42.5,25.3,42.7).lineTo(33.4,49.7).lineTo(40.6,55.9).lineTo(46.3,60.8).curveTo(45.2,61.7,44.1,62.6).lineTo(36.2,55.9).lineTo(33.4,53.6).lineTo(26.2,47.5).curveTo(25.9,45.7,25.5,43.9).curveTo(25.1,43.5,24.7,43.2).curveTo(24.6,43.2,24.5,43.1).closePath().moveTo(27.5,60.8).lineTo(27.5,60.6).curveTo(27.5,60.6,27.5,60.5).curveTo(27.5,60.4,27.5,60.3).curveTo(27.5,60.1,27.5,59.8).curveTo(27.4,57.8,27.3,55.9).curveTo(27.3,55.4,27.2,55).curveTo(26.9,51.2,26.2,47.5).moveTo(27.5,60.8).curveTo(27.5,60.9,27.6,61.1).curveTo(27.8,65.1,27.2,69.1).curveTo(27.1,69.6,27,70).curveTo(26.4,73.7,25,77.4).lineTo(26.5,70).lineTo(27.5,65).curveTo(27.6,62.8,27.5,60.8).closePath().moveTo(64.6,44.1).curveTo(58.9,49.7,53,55).curveTo(52.5,55.4,52,55.9).curveTo(49.1,58.4,46.3,60.8).moveTo(44.1,62.6).curveTo(40.2,66,36.1,69.1).curveTo(35.8,69.4,35.4,69.7).curveTo(35.2,69.9,35,70).curveTo(34.3,70.6,33.6,71.1).curveTo(33.4,71.2,33.2,71.4).curveTo(31.4,72.7,29.7,74.1).curveTo(29.5,74.2,29.3,74.3).curveTo(27.2,75.9,25,77.5).moveTo(46,65.3).lineTo(40,70).lineTo(33.7,75).lineTo(33.2,75.4).lineTo(30.3,77.7).lineTo(30.1,77.9).lineTo(28.5,79.1).lineTo(23.7,80.9).curveTo(23.2,81.2,23.6,80.1).moveTo(-99.8,44.2).curveTo(-102.4,41.9,-102.8,44.3).lineTo(-102.1,48).lineTo(-101.4,51.7).curveTo(-101.1,53.4,-100.8,55).curveTo(-100.8,55.4,-100.7,55.9).curveTo(-100.1,60.9,-100.7,65).curveTo(-100.9,68.2,-101.3,71.4).curveTo(-101.5,72.2,-101.6,73.1).curveTo(-101.9,74.7,-102.3,76.3).moveTo(-99,46.7).curveTo(-99.3,45.5,-99.5,44.4).curveTo(-99.7,44.3,-99.8,44.2).curveTo(-99.9,42.4,-99,42.8).lineTo(-97.8,43.8).lineTo(-97.7,43.8).lineTo(-89.3,51.2).lineTo(-89.2,51.2).lineTo(-83.8,55.9).lineTo(-78,60.9).moveTo(-80.1,62.7).lineTo(-88.2,55.9).lineTo(-89.2,55.1).lineTo(-89.2,55).lineTo(-97.1,48.4).lineTo(-97.2,48.2).lineTo(-99,46.7).moveTo(-98.7,48.5).curveTo(-98.9,47.6,-99,46.7).moveTo(-103.2,79.9).curveTo(-100.9,81.8,-100.1,78.3).lineTo(-99,73).lineTo(-97.5,65.4).curveTo(-97.4,60.6,-97.8,55.9).curveTo(-97.8,55.4,-97.9,55).curveTo(-98.2,51.7,-98.7,48.5).curveTo(-97.8,51.5,-97.3,55).curveTo(-97.2,55.4,-97.1,55.9).curveTo(-96.8,58.4,-96.7,61.2).curveTo(-96.4,66.2,-97.4,71.2).curveTo(-97.6,72.1,-97.8,72.9).curveTo(-98.4,75.2,-99.3,77.6).moveTo(-80.1,62.7).curveTo(-83.5,65.6,-87,68.4).curveTo(-88.6,69.6,-90.3,70.9).curveTo(-91.3,71.7,-92.4,72.6).curveTo(-92.7,72.8,-93,73).curveTo(-93.3,73.2,-93.5,73.4).curveTo(-96.4,75.5,-99.3,77.6).moveTo(-58.9,47.9).lineTo(-68,55.9).lineTo(-76,62.9).lineTo(-65.6,71).lineTo(-59.3,76).lineTo(-59.1,76.2).curveTo(-59.2,76.8,-59.4,77.5).curveTo(-59.7,78.6,-60,79.8).curveTo(-60,79.8,-59.9,79.8).moveTo(-78.3,65.4).lineTo(-76,62.9).moveTo(-59.6,44.2).curveTo(-65.3,49.7,-71.1,55).curveTo(-71.6,55.4,-72.1,55.9).curveTo(-75,58.5,-78,60.9).curveTo(-79.1,61.8,-80.1,62.7).moveTo(-56.1,45.5).curveTo(-56.2,44.9,-56.3,44.3).curveTo(-58.5,42.4,-59.2,43.3).curveTo(-59.3,43.3,-59.4,43.4).curveTo(-59.5,43.7,-59.6,44.2).lineTo(-58.9,47.9).lineTo(-58.2,51.6).curveTo(-57.9,53.3,-57.6,55).curveTo(-57.6,55.4,-57.5,55.9).curveTo(-56.9,60.9,-57.5,64.9).curveTo(-57.6,67.2,-57.9,69.6).curveTo(-58,70.1,-58,70.6).curveTo(-58.4,73.4,-59.1,76.2).moveTo(-39.8,63.2).curveTo(-43,65.9,-46.2,68.4).curveTo(-46.7,68.8,-47.1,69.1).curveTo(-47.4,69.4,-47.7,69.6).curveTo(-48.2,70,-48.7,70.4).curveTo(-52.6,73.4,-56.5,76.3).moveTo(-38,65.8).lineTo(-35.7,63.3).lineTo(-35.4,63.5).closePath().moveTo(-56.1,45.5).lineTo(-44,55.9).lineTo(-37.7,61.4).moveTo(-55.2,50.1).curveTo(-55.6,47.8,-56.1,45.5).moveTo(-78.3,65.4).lineTo(-86.9,72.3).lineTo(-88.9,73.8).moveTo(-88.9,73.8).lineTo(-92.4,76.6).lineTo(-92.8,76.9).lineTo(-95.8,79.2).lineTo(-100.5,81).curveTo(-101.5,81.5,-99.3,77.6).moveTo(-60,79.8).lineTo(-70.8,71.3).lineTo(-78.3,65.4).moveTo(-19.7,80.2).curveTo(-18,81.7,-17.1,80.1).curveTo(-16.8,79.5,-16.6,78.6).lineTo(-16.1,76.3);
	this.shape_2.setTransform(269.1,225.6764);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#333333").setStrokeStyle(0.1,1,1).moveTo(189.1,-6).lineTo(192.1,1.6).moveTo(197.4,-5.6).lineTo(203.6,7.5).moveTo(195.1,2.4).lineTo(193.8,-6.9).moveTo(-186.9,-7.3).lineTo(-183.2,1.9).moveTo(-181.2,2.4).lineTo(-183.9,-7.4).moveTo(-198.2,-5.4).lineTo(-192.2,2.3).moveTo(-188.6,2.2).lineTo(-192.5,-7.4).moveTo(-203.6,2.1).lineTo(-199.4,5).moveTo(-202.1,-1.1).lineTo(-197.2,3.8).moveTo(-173,4.4).lineTo(-174,-5.3).moveTo(-181.1,-7.5).lineTo(-176,3.6);
	this.shape_3.setTransform(261.05,133.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(191.1,-115.1).curveTo(192,-115,192.7,-115.9).curveTo(194,-118.6,193.4,-121).curveTo(192.8,-123.5,191.1,-126).curveTo(189.2,-127.8,186.6,-128.9).curveTo(185.7,-129.3,184.7,-129.7).curveTo(183.8,-130,182.9,-130.2).curveTo(180.6,-131,178.2,-131.4).moveTo(178.2,-122.4).lineTo(181.3,-121.7).lineTo(184.3,-121).curveTo(187.9,-118.4,189.4,-115.9).curveTo(190.3,-115.2,191.1,-115.1).curveTo(191.9,-107.5,192.6,-100.2).lineTo(194.9,-79.6).lineTo(190.6,-80.2).moveTo(192.3,-100.2).lineTo(192.6,-100.2).moveTo(179.7,-100.2).lineTo(189.4,-100.2).moveTo(188.2,-80.6).lineTo(185.8,-81).moveTo(178.9,-82.1).lineTo(178.2,-82.2).moveTo(194.9,-79.6).curveTo(196,-69.7,197,-60.6).lineTo(197.9,-52.2).curveTo(198.6,-46.5,199.2,-41.1).curveTo(200.9,-26.2,202.3,-14.4).moveTo(178.2,-60.6).lineTo(197,-60.6).moveTo(199.2,-41.1).lineTo(178.2,-43.5).moveTo(140.8,-15.6).curveTo(140.9,-15,141,-14.4).lineTo(141.4,-14.4).lineTo(151.8,-14.4).lineTo(152.1,-14.4).lineTo(152.7,-14.4).curveTo(152.7,-15,152.7,-15.6).moveTo(204.9,6.8).lineTo(152.9,-0.2).lineTo(152.7,-0.2).lineTo(152.4,-0.2).lineTo(151.4,-0.2).lineTo(143.2,-0.2).lineTo(142.7,-0.2).curveTo(142.8,0.3,142.8,0.8).curveTo(143.6,6.9,144.3,12.2).curveTo(144.5,13.7,144.7,15.1).moveTo(152.8,14.2).curveTo(152.8,7,152.7,-0.2).moveTo(153,25).curveTo(152.9,22.4,152.9,19.8).curveTo(152.9,19,152.9,18.2).moveTo(145.2,18.8).curveTo(145.3,19.6,145.4,20.2).curveTo(145.7,22.7,146,25).lineTo(146.6,25).lineTo(148.9,25).moveTo(151.8,25).lineTo(152.9,25).lineTo(153,25).lineTo(158.6,23).moveTo(148.2,39.1).curveTo(148.2,39.4,148.3,39.8).moveTo(158.7,39.6).lineTo(154.3,39.1).lineTo(153.2,39.1).lineTo(151.5,39.1).moveTo(148.4,39.1).lineTo(148.2,39.1).lineTo(139.7,39.1).moveTo(138.2,25).lineTo(146,25).moveTo(204.9,6.8).lineTo(204.9,6.9).lineTo(204.9,6.8).closePath().moveTo(188.7,12.6).lineTo(189.4,12.3).moveTo(208.3,29.6).lineTo(208.4,30.8).moveTo(208.3,29.6).lineTo(208.5,30.8).moveTo(209,34.4).lineTo(209,34.8).lineTo(210.5,44.9).lineTo(210.6,45.8).lineTo(196.7,44.1).moveTo(209,34.4).lineTo(209,34.8).moveTo(204.9,6.8).lineTo(207.7,25.4).moveTo(191.6,11.6).lineTo(204.9,6.9).moveTo(161.8,21.9).lineTo(188.5,12.6).moveTo(152.7,-14.4).lineTo(202.3,-14.4).lineTo(204.9,6.8).moveTo(-92.4,-14.4).lineTo(-92.3,-14.4).lineTo(-45.8,-14.4).lineTo(-29.9,-14.4).lineTo(17.8,-14.4).lineTo(31,-14.4).lineTo(77.1,-14.4).lineTo(91.4,-14.4).lineTo(141,-14.4).moveTo(142.7,-0.2).lineTo(91.4,-0.2).lineTo(79.4,-0.2).lineTo(30.8,-0.2).lineTo(19.9,-0.2).lineTo(-30,-0.2).lineTo(-43.6,-0.2).lineTo(-53,-0.2).lineTo(-92,1.6).lineTo(-92.3,1.6).lineTo(-102,2.1).lineTo(-153.1,4.3).lineTo(-153.5,4.4).lineTo(-162.9,4.8).curveTo(-162.5,8.6,-162,12.2).curveTo(-161.6,15.6,-161.2,18.6).curveTo(-160.7,21.9,-160.3,25).lineTo(-159.9,25).moveTo(91.6,24.8).curveTo(91.5,17.1,91.4,8.2).lineTo(91.4,2).moveTo(74.3,39.1).lineTo(66.6,39.1).lineTo(66.2,39.1).moveTo(63.5,39.1).lineTo(54.7,39.1).moveTo(53.4,25).lineTo(64,25).moveTo(80.5,25).lineTo(83.9,25).lineTo(91.2,25).lineTo(91.4,25).moveTo(91.7,39.1).lineTo(91.2,39.1).lineTo(86.8,39.1).lineTo(79.3,39.1).moveTo(92,39.1).lineTo(91.7,39.1).moveTo(66.9,25).lineTo(76.1,25).moveTo(117,39.1).lineTo(109.1,39.1).lineTo(108.6,39.1).moveTo(95.5,25).lineTo(106.4,25).moveTo(105.9,39.1).lineTo(97.5,39.1).moveTo(109.4,25).lineTo(118.4,25).moveTo(124.1,70.5).curveTo(121.5,65.2,121,58.4).curveTo(120.8,56.4,121.1,53.1).lineTo(121.9,39.9).moveTo(109.7,74.6).curveTo(109.9,73.9,110,73.4).curveTo(110.8,67.3,110.9,63).curveTo(111.1,61.1,110.2,57.8).lineTo(108.3,49).moveTo(111.5,108.7).lineTo(113.4,113.6).curveTo(115.6,117.1,118,118.9).curveTo(118.5,119.3,119,119.7).curveTo(123.1,122.1,128.2,121).lineTo(135.7,118.1).curveTo(142.4,114.2,142.9,108.8).curveTo(143.3,103.1,142.6,98).curveTo(142,92.8,139.2,89.2).curveTo(134.2,83.8,126.7,81.4).curveTo(119.1,79.6,112.9,81.1).lineTo(112.9,81.1).curveTo(108.9,82.2,105.9,84.8).curveTo(100.5,89.2,99.3,93.9).curveTo(98.2,98.1,98.8,102.4).curveTo(99.8,108.8,102.6,115).curveTo(103.4,117.1,104.8,118.9).curveTo(107.6,122.6,113,125.6).curveTo(116.9,127.5,121.5,127.2).curveTo(126,127.1,130.4,126).curveTo(133.4,125.2,136.4,124.1).curveTo(140.8,122.1,143.1,118.9).curveTo(144.1,117.5,144.7,115.8).curveTo(147.9,108.8,149.8,101.8).curveTo(150.8,93.8,147.1,90.1).curveTo(141.5,83.6,133.7,81.1).moveTo(152.5,88.8).curveTo(137.4,69.4,118.5,73.3).curveTo(114.4,74.1,111,75.8).curveTo(98.5,81.8,93.4,100.1).curveTo(91.7,66.5,91.7,47.8).curveTo(91.7,44.5,91.7,40.6).curveTo(91.7,39.8,91.7,39.1).moveTo(63,70.5).curveTo(60.4,65.2,59.9,58.4).curveTo(59.7,56.4,60,53.1).lineTo(60.4,47.9).moveTo(67.2,121).lineTo(74.6,118.1).curveTo(81.3,114.2,81.8,108.8).curveTo(82.2,103.1,81.5,98).curveTo(80.9,92.8,78.1,89.2).curveTo(73.1,83.8,65.6,81.4).curveTo(61.8,80.5,58.5,80.4).lineTo(52,81).lineTo(52,81.1).curveTo(48,82.1,45,84.8).curveTo(39.6,89.1,38.4,93.9).curveTo(37.3,98.1,37.9,102.3).curveTo(38.9,108.8,41.7,114.9).curveTo(42.5,117.1,43.9,118.9).curveTo(46.7,122.6,52.1,125.5).curveTo(56,127.4,60.6,127.2).curveTo(61.7,127.2,62.8,127.1).lineTo(69.3,126).curveTo(69.4,126,69.5,125.9).lineTo(73.8,124.6).curveTo(74.5,124.3,75.3,124.1).curveTo(79.7,122.1,82,118.9).curveTo(83,117.5,83.6,115.8).curveTo(86.8,108.8,88.7,101.8).curveTo(89.7,93.8,86,90.1).curveTo(80.5,83.7,72.7,81.1).curveTo(80.6,83.6,86.2,90.1).curveTo(89.9,93.8,88.9,101.7).curveTo(87,108.8,83.8,115.8).curveTo(83.2,117.4,82.2,118.9).curveTo(79.9,122,75.5,124).curveTo(74.6,124.3,73.8,124.6).moveTo(67.2,121).curveTo(67.2,121,67.3,120.9).lineTo(74.8,118.1).curveTo(81.5,114.1,82,108.8).curveTo(82.4,103.1,81.7,97.9).curveTo(81.1,92.8,78.3,89.1).curveTo(73.3,83.7,65.8,81.3).curveTo(61.9,80.5,58.5,80.4).moveTo(91.1,59.1).curveTo(91.6,63.1,91.6,66.8).curveTo(91.6,77.9,91.4,88.8).curveTo(76.3,69.4,57.4,73.3).curveTo(53.3,74.1,49.9,75.8).curveTo(37.4,81.8,32.3,100.1).curveTo(31.9,101.6,36.3,115.3).curveTo(36.9,117.2,37.9,118.9).curveTo(42.7,127.7,56.8,130.6).curveTo(59.1,131,61.8,131.3).curveTo(64.1,131,66.2,130.6).curveTo(68.5,130.1,70.6,129.5).curveTo(82.4,126,87.4,118.9).curveTo(88.9,116.8,89.8,114.3).curveTo(94.4,101.3,91.4,88.8).moveTo(73.4,72.7).lineTo(72.6,52.6).moveTo(44.8,104.1).curveTo(44.1,98.8,47.5,94.2).curveTo(51.8,91.5,55.6,90.7).curveTo(56.5,90.6,57.3,90.4).curveTo(64.9,89.8,69.7,92.8).curveTo(75.2,96.5,77.1,101.1).curveTo(78.8,104.9,77.8,108.4).curveTo(77.1,111.4,74,113.8).curveTo(70.4,116.7,65.9,117.6).curveTo(64.9,117.7,63.9,117.8).curveTo(61.2,118,61,116.4).moveTo(49.4,95.1).curveTo(48.1,99.9,50,105.1).curveTo(51.5,109.2,56.4,111.2).lineTo(62.3,114.3).curveTo(63.4,114.1,64.5,113.8).curveTo(68.7,112.3,70.1,108.7).curveTo(72.9,103.2,71.2,99.1).curveTo(70.3,97.1,68.8,95.1).curveTo(64.9,90.6,59.5,91.8).curveTo(58,92.1,56.5,93.1).curveTo(55.7,93.6,54.9,94.5).curveTo(52.5,97.2,53.3,100).curveTo(54.6,104,58.5,104.6).curveTo(59.9,104.9,61,104.8).curveTo(63,104.5,64.5,102.9).curveTo(66.4,101.1,65.6,99.1).curveTo(65,97.1,62.4,96.6).curveTo(60.6,96.2,59,97.9).curveTo(58.8,98.1,58.6,98.4).curveTo(58,99.4,58.4,100.8).curveTo(58.9,102.4,60,102.1).curveTo(60.2,102,60.5,101.8).moveTo(67.2,121).curveTo(62.1,122.1,58.1,119.6).curveTo(57.6,119.3,57.1,118.9).curveTo(54.7,117.1,52.5,113.6).lineTo(50.4,108.7).lineTo(52.3,113.6).curveTo(54.5,117.1,56.9,118.9).curveTo(57.4,119.3,57.9,119.7).curveTo(62,122.1,67.1,121).closePath().moveTo(52,81).curveTo(51.9,81,51.8,81.1).lineTo(51.8,81.1).curveTo(47.8,82.2,44.8,84.8).curveTo(39.4,89.2,38.2,93.9).curveTo(37.1,98.1,37.7,102.4).curveTo(38.7,108.8,41.5,115).curveTo(42.3,117.1,43.7,118.9).curveTo(46.5,122.6,51.9,125.6).curveTo(55.8,127.5,60.4,127.2).curveTo(61.6,127.2,62.8,127.1).moveTo(110.5,95.1).curveTo(109.2,99.9,111.1,105.1).curveTo(112.6,109.2,117.5,111.2).lineTo(123.4,114.3).curveTo(124.5,114.1,125.6,113.8).curveTo(129.8,112.3,131.2,108.7).curveTo(134,103.2,132.3,99.1).curveTo(131.4,97.1,129.9,95.1).curveTo(126,90.6,120.6,91.8).curveTo(119.1,92.1,117.6,93.1).curveTo(116.8,93.6,116,94.5).curveTo(113.6,97.2,114.4,100).curveTo(115.7,104,119.6,104.6).curveTo(121,104.9,122.1,104.8).curveTo(124.1,104.5,125.6,102.9).curveTo(127.5,101.1,126.7,99.1).curveTo(126.1,97.1,123.5,96.6).curveTo(121.7,96.2,120.1,97.9).curveTo(119.9,98.1,119.7,98.4).curveTo(119.1,99.4,119.5,100.8).curveTo(120,102.4,121.1,102.1).curveTo(121.3,102,121.6,101.8).moveTo(105.9,104.1).curveTo(105.2,98.8,108.6,94.2).curveTo(112.9,91.5,116.7,90.7).curveTo(117.6,90.6,118.4,90.4).curveTo(126,89.8,130.8,92.8).curveTo(136.3,96.5,138.2,101.1).curveTo(139.9,104.9,138.9,108.4).curveTo(138.2,111.4,135.1,113.8).curveTo(131.5,116.7,127,117.6).curveTo(126,117.7,125,117.8).curveTo(122.3,118,122.1,116.4).moveTo(93.4,100.1).curveTo(93,101.6,97.4,115.3).curveTo(98,117.2,99,118.9).curveTo(103.8,127.7,117.9,130.6).curveTo(120.2,131,122.9,131.3).curveTo(125.2,131,127.3,130.6).curveTo(129.6,130.1,131.7,129.5).curveTo(143.5,126,148.5,118.9).curveTo(150,116.8,150.9,114.3).curveTo(155.5,101.3,152.5,88.8).moveTo(210.5,44.9).curveTo(211,47.2,211.4,48.8).curveTo(213.9,58.3,214,66.8).curveTo(214,77.9,213.8,88.8).curveTo(198.7,69.4,179.8,73.3).curveTo(175.7,74.1,172.3,75.8).curveTo(159.8,81.8,154.7,100.1).curveTo(154.3,101.6,158.7,115.3).curveTo(159.3,117.2,160.3,118.9).curveTo(165.1,127.7,179.2,130.6).curveTo(181.5,131,184.2,131.3).curveTo(186.5,131,188.6,130.6).curveTo(190.9,130.1,193,129.5).curveTo(204.8,126,209.8,118.9).curveTo(211.3,116.8,212.2,114.3).curveTo(216.8,101.3,213.8,88.8).moveTo(190.1,43.4).lineTo(187.3,43.1).moveTo(185.4,70.5).curveTo(182.8,65.2,182.3,58.4).curveTo(182.1,56.4,182.4,53.1).lineTo(183,44.1).moveTo(172.8,108.7).lineTo(174.9,113.6).curveTo(177.1,117.1,179.5,118.9).curveTo(180,119.3,180.5,119.6).curveTo(184.5,122.1,189.6,121).curveTo(189.6,121,189.7,120.9).lineTo(197.2,118.1).curveTo(203.9,114.1,204.4,108.8).curveTo(204.8,103.1,204.1,97.9).curveTo(203.5,92.8,200.7,89.1).curveTo(195.7,83.7,188.2,81.3).curveTo(184.3,80.5,180.9,80.4).lineTo(174.4,81).lineTo(174.4,81.1).curveTo(170.4,82.1,167.4,84.8).curveTo(162,89.1,160.8,93.9).curveTo(159.7,98.1,160.3,102.3).curveTo(161.3,108.8,164.1,114.9).curveTo(164.9,117.1,166.3,118.9).curveTo(169.1,122.6,174.5,125.5).curveTo(178.4,127.4,183,127.2).curveTo(184.1,127.2,185.2,127.1).lineTo(191.7,126).curveTo(191.8,126,191.9,125.9).lineTo(196.2,124.6).curveTo(197,124.3,197.9,124).curveTo(202.3,122,204.6,118.9).curveTo(205.6,117.4,206.2,115.8).curveTo(209.4,108.8,211.3,101.7).curveTo(212.3,93.8,208.6,90.1).curveTo(203,83.6,195.1,81.1).moveTo(195.8,72.7).lineTo(195,52.6).moveTo(171,74.6).curveTo(171.2,73.9,171.3,73.4).curveTo(172.1,67.3,172.2,63).curveTo(172.4,61.1,171.5,57.8).lineTo(169.4,48.2).moveTo(150.2,49.1).curveTo(150.3,49.8,150.5,50.6).curveTo(152.6,59.1,152.7,66.8).curveTo(152.7,77.9,152.5,88.8).moveTo(134.5,72.7).lineTo(133.7,52.6).moveTo(171.8,95.1).curveTo(170.5,99.9,172.4,105.1).curveTo(173.9,109.2,178.8,111.2).lineTo(184.7,114.3).curveTo(185.8,114.1,186.9,113.8).curveTo(191.1,112.3,192.5,108.7).curveTo(195.3,103.2,193.6,99.1).curveTo(192.7,97.1,191.2,95.1).curveTo(187.3,90.6,181.9,91.8).curveTo(180.4,92.1,178.9,93.1).curveTo(178.1,93.6,177.3,94.5).curveTo(174.9,97.2,175.7,100).curveTo(177,104,180.9,104.6).curveTo(182.3,104.9,183.4,104.8).curveTo(185.4,104.5,186.9,102.9).curveTo(188.8,101.1,188,99.1).curveTo(187.4,97.1,184.8,96.6).curveTo(183,96.2,181.4,97.9).curveTo(181.2,98.1,181,98.4).curveTo(180.4,99.4,180.8,100.8).curveTo(181.3,102.4,182.4,102.1).curveTo(182.6,102,182.9,101.8).moveTo(167.2,104.1).curveTo(166.5,98.8,169.9,94.2).curveTo(174.2,91.5,178,90.7).curveTo(178.9,90.6,179.7,90.4).curveTo(187.3,89.8,192.1,92.8).curveTo(197.6,96.5,199.5,101.1).curveTo(201.2,104.9,200.2,108.4).curveTo(199.5,111.4,196.4,113.8).curveTo(192.8,116.7,188.3,117.6).curveTo(187.3,117.7,186.3,117.8).curveTo(183.6,118,183.4,116.4).moveTo(154.7,100.1).curveTo(154,78.2,153.5,56.7).moveTo(180.8,42.3).lineTo(163,40.2).moveTo(60.6,43.8).lineTo(60.8,39.9).moveTo(122.8,25).lineTo(134,25).moveTo(134.2,39.1).lineTo(122,39.1).moveTo(-195.2,-130.7).lineTo(-197.7,-130.6).curveTo(-199.5,-130.8,-201.4,-130.8).curveTo(-202.3,-130.9,-203.3,-130.8).curveTo(-206,-130.5,-209.1,-128.7).curveTo(-209.4,-128.5,-209.8,-128.2).lineTo(-212.9,-125.1).curveTo(-213.8,-123.3,-214.2,-121.8).curveTo(-214.3,-121.5,-214.4,-121.2).curveTo(-214.9,-118.8,-214.4,-116.9).curveTo(-214.1,-116,-213.6,-115.1).curveTo(-213.6,-115.2,-213.5,-115.2).moveTo(-214.1,-100.2).curveTo(-214.1,-102.9,-214,-105.5).curveTo(-213.9,-109.6,-213.8,-113.6).curveTo(-213.7,-114.4,-213.5,-115.2).curveTo(-213.3,-115.5,-213.1,-115.7).curveTo(-212.2,-116.9,-210.5,-118.1).curveTo(-210.4,-118.2,-210.2,-118.3).curveTo(-209.2,-119,-208,-119.6).curveTo(-206.9,-120.3,-205.5,-120.9).lineTo(-203,-121).lineTo(-199.4,-121.2).lineTo(-194,-121.4).lineTo(-192,-120.9).lineTo(-186.8,-119.7).lineTo(-183.8,-119).curveTo(-183.7,-118.9,-183.7,-118.9).moveTo(-192.1,-130.8).lineTo(-194.7,-130.7).lineTo(-195.2,-130.7).curveTo(-195.1,-130.7,-195,-130.7).curveTo(-193.6,-130.9,-192.1,-130.8).closePath().moveTo(-185.8,-129.6).curveTo(-187.8,-131,-191.9,-130.8).lineTo(-192.1,-130.8).moveTo(-214.2,-97.2).lineTo(-214.1,-99.6).curveTo(-214.1,-99.9,-214.1,-100.2).lineTo(-200.8,-100.2).moveTo(-214.4,-88.6).lineTo(-214.3,-92.5).lineTo(-214.3,-93.6).moveTo(-214.8,-60.6).curveTo(-214.7,-69.9,-214.5,-79.2).lineTo(-214.6,-79.2).lineTo(-214.4,-84.5).moveTo(-198.7,-79.9).lineTo(-214.5,-79.2).moveTo(-185.8,-129.6).curveTo(-185,-129.2,-184.3,-128.9).curveTo(-184,-128.8,-183.7,-128.6).moveTo(-183.7,-128.2).curveTo(-184.2,-128.5,-184.8,-128.6).curveTo(-185.2,-129.2,-185.8,-129.6).moveTo(-196.6,-100.2).lineTo(-187.7,-100.2).lineTo(-183.7,-100.2).moveTo(-184.8,-80.5).lineTo(-188.5,-80.4).lineTo(-193.5,-80.2).moveTo(-214.8,-60.6).lineTo(-183.7,-60.6).moveTo(-165.3,-14.4).lineTo(-164.9,-14.4).lineTo(-153.6,-14.4).lineTo(-153,-14.4).lineTo(-104,-14.4).lineTo(-92.4,-14.4).curveTo(-92.4,-15,-92.4,-15.6).moveTo(-165.5,-15.6).curveTo(-165.4,-15,-165.3,-14.4).moveTo(-153.6,-14.4).curveTo(-153.6,-15,-153.6,-15.6).moveTo(-162.9,4.8).lineTo(-163,4.8).lineTo(-214.8,7.1).curveTo(-214.8,6.6,-214.8,6.1).lineTo(-214.9,-14.4).curveTo(-215,-26.7,-214.9,-38.9).lineTo(-214.8,-60.6).moveTo(-195.8,25).lineTo(-185.7,25).lineTo(-177.4,25).moveTo(-153.3,25).curveTo(-153.4,24.8,-153.3,24.4).curveTo(-153.4,23.7,-153.4,22.9).moveTo(-153.3,25).lineTo(-153.2,25).lineTo(-146,25).moveTo(-155.7,25).lineTo(-153.3,25).moveTo(-172.9,25).lineTo(-160.7,25).lineTo(-160.3,25).moveTo(-153.4,19.1).curveTo(-153.5,11.7,-153.5,4.4).moveTo(-143.1,25).lineTo(-134.3,25).moveTo(-129.9,25).lineTo(-118,25).moveTo(-214.5,28.1).lineTo(-214.6,26.8).curveTo(-214.6,26.4,-214.6,26).curveTo(-214.8,16.6,-214.8,7.1).moveTo(-214.6,26.8).lineTo(-214.6,25).lineTo(-200,25).moveTo(-214.2,48.6).lineTo(-214.3,48.6).lineTo(-214.5,33.3).curveTo(-214.5,32.8,-214.5,32.3).moveTo(-214.5,31.1).lineTo(-214.5,30.6).moveTo(-196.6,74.6).curveTo(-196.4,73.9,-196.3,73.4).curveTo(-195.5,67.3,-195.4,63).curveTo(-195.2,61.1,-196.1,57.8).lineTo(-198.2,48.2).moveTo(-194.8,108.7).lineTo(-192.9,113.6).curveTo(-190.7,117.1,-188.3,118.9).curveTo(-187.8,119.3,-187.3,119.7).curveTo(-183.2,122.1,-178.1,121).lineTo(-170.6,118.1).curveTo(-163.9,114.2,-163.4,108.8).curveTo(-163,103.1,-163.7,98).curveTo(-164.3,92.8,-167.1,89.2).curveTo(-172.1,83.8,-179.6,81.4).curveTo(-187.2,79.6,-193.4,81.1).lineTo(-193.4,81.1).curveTo(-197.4,82.2,-200.4,84.8).curveTo(-205.8,89.2,-207,93.9).curveTo(-208.1,98.1,-207.5,102.4).curveTo(-206.5,108.8,-203.7,115).curveTo(-202.9,117.1,-201.5,118.9).curveTo(-198.7,122.6,-193.3,125.6).curveTo(-189.4,127.5,-184.8,127.2).curveTo(-180.3,127.1,-175.9,126).curveTo(-172.9,125.2,-169.9,124.1).curveTo(-165.5,122.1,-163.2,118.9).curveTo(-162.2,117.5,-161.6,115.8).curveTo(-158.4,108.8,-156.5,101.8).curveTo(-155.5,93.8,-159.2,90.1).curveTo(-164.8,83.6,-172.6,81.1).moveTo(-193,47.4).lineTo(-214.2,48.6).moveTo(-200.4,104.1).curveTo(-201.1,98.8,-197.7,94.2).curveTo(-193.4,91.5,-189.6,90.7).curveTo(-188.7,90.6,-187.9,90.4).curveTo(-180.3,89.8,-175.5,92.8).curveTo(-170,96.5,-168.1,101.1).curveTo(-166.4,104.9,-167.4,108.4).curveTo(-168.1,111.4,-171.2,113.8).curveTo(-174.8,116.7,-179.3,117.6).curveTo(-180.3,117.7,-181.3,117.8).curveTo(-184,118,-184.2,116.4).moveTo(-195.8,95.1).curveTo(-197.1,99.9,-195.2,105.1).curveTo(-193.7,109.2,-188.8,111.2).lineTo(-182.9,114.3).curveTo(-181.8,114.1,-180.7,113.8).curveTo(-176.5,112.3,-175.1,108.7).curveTo(-172.3,103.2,-174,99.1).curveTo(-174.9,97.1,-176.4,95.1).curveTo(-180.3,90.6,-185.7,91.8).curveTo(-187.2,92.1,-188.7,93.1).curveTo(-189.5,93.6,-190.3,94.5).curveTo(-192.7,97.2,-191.9,100).curveTo(-190.6,104,-186.7,104.6).curveTo(-185.3,104.9,-184.2,104.8).curveTo(-182.2,104.5,-180.7,102.9).curveTo(-178.8,101.1,-179.6,99.1).curveTo(-180.2,97.1,-182.8,96.6).curveTo(-184.6,96.2,-186.2,97.9).curveTo(-186.4,98.1,-186.6,98.4).curveTo(-187.2,99.4,-186.8,100.8).curveTo(-186.3,102.4,-185.2,102.1).curveTo(-185,102,-184.7,101.8).moveTo(-212.9,100.1).curveTo(-213.3,101.6,-208.9,115.3).curveTo(-208.3,117.2,-207.3,118.9).curveTo(-202.5,127.7,-188.4,130.6).curveTo(-186.1,131,-183.4,131.3).curveTo(-181.1,131,-179,130.6).curveTo(-176.7,130.1,-174.6,129.5).curveTo(-162.8,126,-157.8,118.9).curveTo(-156.3,116.8,-155.4,114.3).curveTo(-150.8,101.3,-153.8,88.8).curveTo(-168.9,69.4,-187.8,73.3).curveTo(-191.9,74.1,-195.3,75.8).curveTo(-207.8,81.8,-212.9,100.1).curveTo(-213.8,74.2,-214.2,48.6).moveTo(-113.9,42.8).lineTo(-123.3,43.3).lineTo(-136.2,44.1).moveTo(-120.9,70.5).curveTo(-123.5,65.2,-124,58.4).curveTo(-124.2,56.4,-123.9,53.1).lineTo(-123.3,43.3).moveTo(-141.9,44.4).lineTo(-144.5,44.6).lineTo(-144.7,44.6).moveTo(-147.3,44.7).lineTo(-148.9,44.8).moveTo(-135.3,74.6).curveTo(-135.1,73.9,-135,73.4).curveTo(-134.2,67.3,-134.1,63).curveTo(-133.9,61.1,-134.8,57.8).lineTo(-136.9,48.2).moveTo(-132.1,81.1).curveTo(-136.1,82.2,-139.1,84.8).curveTo(-144.5,89.2,-145.7,93.9).curveTo(-146.8,98.1,-146.2,102.4).curveTo(-145.2,108.8,-142.4,115).curveTo(-141.6,117.1,-140.2,118.9).curveTo(-137.4,122.6,-132,125.6).curveTo(-128.1,127.5,-123.5,127.2).curveTo(-119,127.1,-114.6,126).curveTo(-111.6,125.2,-108.6,124.1).curveTo(-104.2,122.1,-101.9,118.9).curveTo(-100.9,117.5,-100.3,115.8).curveTo(-97.1,108.8,-95.2,101.8).curveTo(-94.2,93.8,-97.9,90.1).curveTo(-103.5,83.6,-111.3,81.1).moveTo(-133.5,108.7).lineTo(-131.6,113.6).curveTo(-129.4,117.1,-127,118.9).curveTo(-126.5,119.3,-126,119.7).curveTo(-121.9,122.1,-116.8,121).lineTo(-109.3,118.1).curveTo(-102.6,114.2,-102.1,108.8).curveTo(-101.7,103.1,-102.4,98).curveTo(-103,92.8,-105.8,89.2).curveTo(-110.8,83.8,-118.3,81.4).curveTo(-125.9,79.6,-132.1,81.1).moveTo(-110.5,72.7).lineTo(-111.3,52.6).moveTo(-92.5,88.8).curveTo(-107.6,69.4,-126.5,73.3).curveTo(-130.6,74.1,-134,75.8).curveTo(-146.5,81.8,-151.6,100.1).curveTo(-152,101.6,-147.6,115.3).curveTo(-147,117.2,-146,118.9).curveTo(-141.2,127.7,-127.1,130.6).curveTo(-124.8,131,-122.1,131.3).curveTo(-119.8,131,-117.7,130.6).curveTo(-115.4,130.1,-113.3,129.5).curveTo(-101.5,126,-96.5,118.9).curveTo(-95,116.8,-94.1,114.3).curveTo(-89.5,101.3,-92.5,88.8).closePath().moveTo(-157,45.3).curveTo(-157,45.6,-156.9,45.8).lineTo(-156.6,47.2).curveTo(-156.5,47.4,-156.5,47.6).lineTo(-156.5,47.8).lineTo(-156.4,47.9).curveTo(-156.4,48.1,-156.3,48.3).curveTo(-156.3,48.5,-156.3,48.7).curveTo(-156.2,48.8,-156.2,48.8).curveTo(-153.7,58.3,-153.6,66.8).curveTo(-153.6,67.6,-153.6,68.4).curveTo(-153.6,78.8,-153.8,88.8).moveTo(-154,45.1).lineTo(-157,45.3).lineTo(-181.4,46.7).moveTo(-187.4,47.1).lineTo(-187.6,47.1).lineTo(-188,47.1).moveTo(-182.2,70.5).curveTo(-184.8,65.2,-185.3,58.4).curveTo(-185.5,56.4,-185.2,53.1).lineTo(-184.9,49.2).moveTo(-171.8,72.7).lineTo(-172.6,52.6).moveTo(-153.6,68.4).curveTo(-154.7,57.4,-156.3,48.7).moveTo(-134.5,95.1).curveTo(-135.8,99.9,-133.9,105.1).curveTo(-132.4,109.2,-127.5,111.2).lineTo(-121.6,114.3).curveTo(-120.5,114.1,-119.4,113.8).curveTo(-115.2,112.3,-113.8,108.7).curveTo(-111,103.2,-112.7,99.1).curveTo(-113.6,97.1,-115.1,95.1).curveTo(-119,90.6,-124.4,91.8).curveTo(-125.9,92.1,-127.4,93.1).curveTo(-128.2,93.6,-129,94.5).curveTo(-131.4,97.2,-130.6,100).curveTo(-129.3,104,-125.4,104.6).curveTo(-124,104.9,-122.9,104.8).curveTo(-120.9,104.5,-119.4,102.9).curveTo(-117.5,101.1,-118.3,99.1).curveTo(-118.9,97.1,-121.5,96.6).curveTo(-123.3,96.2,-124.9,97.9).curveTo(-125.1,98.1,-125.3,98.4).curveTo(-125.9,99.4,-125.5,100.8).curveTo(-125,102.4,-123.9,102.1).curveTo(-123.7,102,-123.4,101.8).moveTo(-139.1,104.1).curveTo(-139.8,98.8,-136.4,94.2).curveTo(-132.1,91.5,-128.3,90.7).curveTo(-127.4,90.6,-126.6,90.4).curveTo(-119,89.8,-114.2,92.8).curveTo(-108.7,96.5,-106.8,101.1).curveTo(-105.1,104.9,-106.1,108.4).curveTo(-106.8,111.4,-109.9,113.8).curveTo(-113.5,116.7,-118,117.6).curveTo(-119,117.7,-120,117.8).curveTo(-122.7,118,-122.9,116.4).moveTo(-151.6,100.1).curveTo(-152.2,82.5,-153.6,68.4).moveTo(-183.7,-40.2).lineTo(-214.9,-38.9).moveTo(-214.9,-14.4).lineTo(-165.3,-14.4).moveTo(-17.1,25).lineTo(-8.7,25).moveTo(-10.5,39.1).lineTo(-17.7,39.1).moveTo(-3.8,39.1).lineTo(-5.5,39.1).moveTo(7.1,39.1).lineTo(-3.5,39.1).moveTo(-4.4,25).lineTo(6.5,25).moveTo(24.5,25).lineTo(30.6,25).lineTo(33.4,25).moveTo(21,39.1).lineTo(12.6,39.1).moveTo(25.8,39.1).lineTo(24.2,39.1).lineTo(23.7,39.1).moveTo(30.8,39.1).lineTo(30.4,39.1).lineTo(26.2,39.1).lineTo(25.8,39.1).curveTo(26.1,41.5,26.5,43.4).moveTo(30.8,40.2).curveTo(30.8,39.7,30.8,39.1).moveTo(37.8,25).lineTo(49.2,25).moveTo(49.2,39.1).lineTo(37.2,39.1).moveTo(32.2,39.1).lineTo(30.8,39.1).moveTo(10.7,25).lineTo(21.6,25).moveTo(-104.1,-15.6).lineTo(-104,-14.4).moveTo(-102,2.1).lineTo(-101,9.6).curveTo(-100.9,10.9,-100.7,12.2).curveTo(-100.7,12.6,-100.6,12.9).moveTo(-99,25).lineTo(-98.7,25).lineTo(-92,25).curveTo(-92.1,24.6,-92,24.1).moveTo(-92,25).lineTo(-92,25).lineTo(-91,25).moveTo(-100,17.3).curveTo(-100,18,-99.9,18.6).curveTo(-99.8,18.9,-99.8,19.2).curveTo(-99.4,22.2,-99,25).moveTo(-100.6,25).lineTo(-99.9,25).lineTo(-99,25).moveTo(-86.6,25).lineTo(-74.9,25).moveTo(-92.1,20.3).curveTo(-92.2,10.9,-92.3,1.6).moveTo(-57.4,25).lineTo(-51.2,25).moveTo(-60.8,39.8).lineTo(-61.8,39.8).lineTo(-68.4,40.1).moveTo(-51.5,39.6).lineTo(-58.1,39.7).moveTo(-46.8,25).lineTo(-39,25).lineTo(-34.1,25).moveTo(-35.4,39.1).lineTo(-35.9,39.1).lineTo(-46.4,39.4).moveTo(-70.8,25).lineTo(-60.3,25).moveTo(-34.4,45.2).curveTo(-34,47.3,-33.6,48.8).curveTo(-31.1,58.3,-31,66.8).curveTo(-31,77.9,-31.2,88.8).curveTo(-46.3,69.4,-65.2,73.3).curveTo(-69.3,74.1,-72.7,75.8).curveTo(-85.2,81.8,-90.3,100.1).curveTo(-90.7,101.6,-86.3,115.3).curveTo(-85.7,117.2,-84.7,118.9).curveTo(-79.9,127.7,-65.8,130.6).curveTo(-63.5,131,-60.8,131.3).curveTo(-58.5,131,-56.4,130.6).curveTo(-54.1,130.1,-52,129.5).curveTo(-40.2,126,-35.2,118.9).curveTo(-33.7,116.8,-32.8,114.3).curveTo(-28.2,101.3,-31.2,88.8).moveTo(-59.6,70.5).curveTo(-62.2,65.2,-62.7,58.4).curveTo(-62.9,56.4,-62.6,53.1).lineTo(-62.4,50.3).lineTo(-62.3,49.2).moveTo(-72.2,108.7).lineTo(-70.3,113.6).curveTo(-68.1,117.1,-65.7,118.9).curveTo(-65.2,119.3,-64.7,119.7).curveTo(-60.6,122.1,-55.5,121).lineTo(-48,118.1).curveTo(-41.3,114.2,-40.8,108.8).curveTo(-40.4,103.1,-41.1,98).curveTo(-41.7,92.8,-44.5,89.2).curveTo(-49.5,83.8,-57,81.4).curveTo(-64.6,79.6,-70.8,81.1).lineTo(-70.8,81.1).curveTo(-74.8,82.2,-77.8,84.8).curveTo(-83.2,89.2,-84.4,93.9).curveTo(-85.5,98.1,-84.9,102.4).curveTo(-83.9,108.8,-81.1,115).curveTo(-80.3,117.1,-78.9,118.9).curveTo(-76.1,122.6,-70.7,125.6).curveTo(-66.8,127.5,-62.2,127.2).curveTo(-57.7,127.1,-53.3,126).curveTo(-50.3,125.2,-47.3,124.1).curveTo(-42.9,122.1,-40.6,118.9).curveTo(-39.6,117.5,-39,115.8).curveTo(-35.8,108.8,-33.9,101.8).curveTo(-32.9,93.8,-36.6,90.1).curveTo(-42.2,83.6,-50,81.1).moveTo(-49.2,72.7).lineTo(-50,52.6).moveTo(-74,74.6).curveTo(-73.8,73.9,-73.7,73.4).curveTo(-72.9,67.3,-72.8,63).curveTo(-72.6,61.1,-73.5,57.8).lineTo(-75.6,48.2).moveTo(-93.8,53.5).lineTo(-91.7,47.5).lineTo(-91.7,46.3).lineTo(-91.7,45.9).moveTo(-91.7,42.9).curveTo(-91.7,43.7,-91.7,44.4).curveTo(-91.7,44.9,-91.7,45.4).moveTo(-96.4,41.8).curveTo(-96.3,42.1,-96.3,42.5).moveTo(-95.2,41.7).lineTo(-95.9,41.8).lineTo(-96.4,41.8).lineTo(-100.6,42).lineTo(-101.8,42.1).moveTo(-95.6,46).curveTo(-95.4,46.7,-95.3,47.3).curveTo(-95.1,48.1,-94.9,48.8).curveTo(-94.3,51.1,-93.8,53.5).moveTo(-104.4,42.2).lineTo(-108.8,42.5).moveTo(-93.7,53.8).curveTo(-93.8,53.6,-93.8,53.5).moveTo(-93.5,55.2).curveTo(-93.5,55.4,-93.4,55.4).curveTo(-92.4,61.3,-92.3,66.8).curveTo(-92.3,67.7,-92.3,68.7).curveTo(-92.7,64.4,-93.1,60).curveTo(-93.3,58.4,-93.4,56.9).lineTo(-93.7,53.8).lineTo(-93.5,55.4).moveTo(-92.3,68.7).curveTo(-92.3,69.3,-92.3,70).curveTo(-92.3,70.2,-92.3,70.5).curveTo(-92.4,79.8,-92.5,88.8).moveTo(-73.6,40.4).lineTo(-89.7,41.4).moveTo(-73.2,95.1).curveTo(-74.5,99.9,-72.6,105.1).curveTo(-71.1,109.2,-66.2,111.2).lineTo(-60.3,114.3).curveTo(-59.2,114.1,-58.1,113.8).curveTo(-53.9,112.3,-52.5,108.7).curveTo(-49.7,103.2,-51.4,99.1).curveTo(-52.3,97.1,-53.8,95.1).curveTo(-57.7,90.6,-63.1,91.8).curveTo(-64.6,92.1,-66.1,93.1).curveTo(-66.9,93.6,-67.7,94.5).curveTo(-70.1,97.2,-69.3,100).curveTo(-68,104,-64.1,104.6).curveTo(-62.7,104.9,-61.6,104.8).curveTo(-59.6,104.5,-58.1,102.9).curveTo(-56.2,101.1,-57,99.1).curveTo(-57.6,97.1,-60.2,96.6).curveTo(-62,96.2,-63.6,97.9).curveTo(-63.8,98.1,-64,98.4).curveTo(-64.6,99.4,-64.2,100.8).curveTo(-63.7,102.4,-62.6,102.1).curveTo(-62.4,102,-62.1,101.8).moveTo(-77.8,104.1).curveTo(-78.5,98.8,-75.1,94.2).curveTo(-70.8,91.5,-67,90.7).curveTo(-66.1,90.6,-65.3,90.4).curveTo(-57.7,89.8,-52.9,92.8).curveTo(-47.4,96.5,-45.5,101.1).curveTo(-43.8,104.9,-44.8,108.4).curveTo(-45.5,111.4,-48.6,113.8).curveTo(-52.2,116.7,-56.7,117.6).curveTo(-57.7,117.7,-58.7,117.8).curveTo(-61.4,118,-61.6,116.4).moveTo(-29,100.1).curveTo(-29.6,80.9,-30.1,62).moveTo(-90.3,100.1).curveTo(-90.8,86.4,-92.3,68.7).moveTo(48.6,74.6).curveTo(48.8,73.9,48.9,73.4).curveTo(49.7,67.3,49.8,63).curveTo(50,61.1,49.1,57.8).lineTo(47,48.2).moveTo(32.3,100.1).curveTo(31.4,72.7,30.9,45.7).curveTo(30.9,44.9,30.9,44.1).moveTo(27.3,47).curveTo(27.4,47.7,27.6,48.3).curveTo(27.6,48.6,27.7,48.8).curveTo(27.9,49.5,28.1,50.2).moveTo(30,61.8).curveTo(30.3,64.3,30.3,66.8).curveTo(30.3,77.9,30.1,88.8).curveTo(15,69.4,-3.9,73.3).curveTo(-8,74.1,-11.4,75.8).curveTo(-23.9,81.8,-29,100.1).curveTo(-29.4,101.6,-25,115.3).curveTo(-24.4,117.2,-23.4,118.9).curveTo(-18.6,127.7,-4.5,130.6).curveTo(-2.2,131,0.5,131.3).curveTo(2.8,131,4.9,130.6).curveTo(7.2,130.1,9.3,129.5).curveTo(21.1,126,26.1,118.9).curveTo(27.6,116.8,28.5,114.3).curveTo(33.1,101.3,30.1,88.8).moveTo(1.7,70.5).curveTo(-0.9,65.2,-1.4,58.4).curveTo(-1.6,56.4,-1.3,53.1).lineTo(-0.5,39.9).moveTo(-12.7,74.6).curveTo(-12.5,73.9,-12.4,73.4).curveTo(-11.6,67.3,-11.5,63).curveTo(-11.3,61.1,-12.2,57.8).lineTo(-14.3,48.2).moveTo(-10.9,108.7).lineTo(-9,113.6).curveTo(-6.8,117.1,-4.4,118.9).curveTo(-3.9,119.3,-3.4,119.7).curveTo(0.7,122.1,5.8,121).lineTo(13.3,118.1).curveTo(20,114.2,20.5,108.8).curveTo(20.9,103.1,20.2,98).curveTo(19.6,92.8,16.8,89.2).curveTo(11.8,83.8,4.3,81.4).curveTo(-3.3,79.6,-9.5,81.1).lineTo(-9.5,81.1).curveTo(-13.5,82.2,-16.5,84.8).curveTo(-21.9,89.2,-23.1,93.9).curveTo(-24.2,98.1,-23.6,102.4).curveTo(-22.6,108.8,-19.8,115).curveTo(-19,117.1,-17.6,118.9).curveTo(-14.8,122.6,-9.4,125.6).curveTo(-5.5,127.5,-0.9,127.2).curveTo(3.6,127.1,8,126).curveTo(11,125.2,14,124.1).curveTo(18.4,122.1,20.7,118.9).curveTo(21.7,117.5,22.3,115.8).curveTo(25.5,108.8,27.4,101.8).curveTo(28.4,93.8,24.7,90.1).curveTo(19.1,83.6,11.3,81.1).moveTo(-11.9,95.1).curveTo(-13.2,99.9,-11.3,105.1).curveTo(-9.8,109.2,-4.9,111.2).lineTo(1,114.3).curveTo(2.1,114.1,3.2,113.8).curveTo(7.4,112.3,8.8,108.7).curveTo(11.6,103.2,9.9,99.1).curveTo(9,97.1,7.5,95.1).curveTo(3.6,90.6,-1.8,91.8).curveTo(-3.3,92.1,-4.8,93.1).curveTo(-5.6,93.6,-6.4,94.5).curveTo(-8.8,97.2,-8,100).curveTo(-6.7,104,-2.8,104.6).curveTo(-1.4,104.9,-0.3,104.8).curveTo(1.7,104.5,3.2,102.9).curveTo(5.1,101.1,4.3,99.1).curveTo(3.7,97.1,1.1,96.6).curveTo(-0.7,96.2,-2.3,97.9).curveTo(-2.5,98.1,-2.7,98.4).curveTo(-3.3,99.4,-2.9,100.8).curveTo(-2.4,102.4,-1.3,102.1).curveTo(-1.1,102,-0.8,101.8).moveTo(-16.5,104.1).curveTo(-17.2,98.8,-13.8,94.2).curveTo(-9.5,91.5,-5.7,90.7).curveTo(-4.8,90.6,-4,90.4).curveTo(3.6,89.8,8.4,92.8).curveTo(13.9,96.5,15.8,101.1).curveTo(17.5,104.9,16.5,108.4).curveTo(15.8,111.4,12.7,113.8).curveTo(9.1,116.7,4.6,117.6).curveTo(3.6,117.7,2.6,117.8).curveTo(-0.1,118,-0.3,116.4).moveTo(12.1,72.7).lineTo(11.3,52.6).moveTo(-29.8,25).lineTo(-20,25).moveTo(-20.4,39.1).lineTo(-29.9,39.1).moveTo(-62.1,45.1).lineTo(-61.8,39.8).moveTo(-113.9,25).lineTo(-103.5,25);
	this.shape_4.setTransform(271.8957,256.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#96A8B4").beginStroke().moveTo(10.9,17.8).lineTo(10.8,17.7).lineTo(11.2,16.3).lineTo(10.8,17.7).lineTo(3.3,11.8).lineTo(-7.5,3.3).lineTo(-5.2,0.7).lineTo(8.5,11.5).lineTo(12.4,14.7).lineTo(11.2,17).lineTo(11.2,17.9).lineTo(10.9,17.8).closePath().moveTo(-12.4,3.2).lineTo(-12.1,2.9).lineTo(-9.3,0.6).lineTo(-12.2,-1.9).lineTo(-12.2,-5.5).lineTo(-7.2,-1.2).lineTo(0.3,-7.7).lineTo(1.2,-8.5).lineTo(8.5,-15.3).lineTo(8.6,-15.5).lineTo(11.2,-18).lineTo(12.3,-16.5).lineTo(11.2,-13.6).lineTo(5.4,-8.5).lineTo(-5.2,0.7).lineTo(-7.5,3.3).lineTo(-12.4,7.2).closePath().moveTo(-9.3,0.6).lineTo(-7.2,-1.2).lineTo(-9.3,0.6).closePath();
	this.shape_5.setTransform(69.875,164.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F6E3B3").beginStroke().moveTo(178.2,28.5).curveTo(164.1,25.7,159.3,16.9).curveTo(158.3,15.2,157.7,13.3).curveTo(153.3,-0.4,153.7,-1.9).curveTo(158.8,-20.2,171.3,-26.2).curveTo(174.7,-28,178.8,-28.7).curveTo(197.7,-32.6,212.8,-13.2).curveTo(215.8,-0.7,211.2,12.3).curveTo(210.3,14.8,208.8,16.9).curveTo(203.8,24,192,27.5).lineTo(187.6,28.5).lineTo(183.2,29.3).curveTo(180.5,29,178.2,28.5).closePath().moveTo(180.8,25.3).lineTo(181.8,25.2).lineTo(184.2,25.1).lineTo(190.7,24).lineTo(190.9,23.9).lineTo(195.2,22.6).lineTo(196.9,22).curveTo(201.3,20,203.6,16.9).curveTo(204.6,15.4,205.2,13.7).curveTo(208.4,6.8,210.3,-0.3).curveTo(210.5,-2,210.5,-3.5).curveTo(210.5,-9,207.6,-11.9).lineTo(207.3,-12.2).curveTo(201.8,-18.5,194.1,-20.9).curveTo(201.8,-18.5,207.3,-12.2).lineTo(207.6,-11.9).curveTo(210.5,-9,210.5,-3.5).curveTo(210.5,-2,210.3,-0.3).curveTo(208.4,6.8,205.2,13.7).curveTo(204.6,15.4,203.6,16.9).curveTo(201.3,20,196.9,22).lineTo(195.2,22.6).lineTo(196.7,22).curveTo(201.1,20,203.4,16.9).curveTo(204.4,15.5,205,13.8).curveTo(208.2,6.8,210.1,-0.3).curveTo(210.3,-1.9,210.3,-3.4).curveTo(210.3,-8.9,207.4,-11.9).curveTo(201.9,-18.3,194.1,-20.9).curveTo(201.9,-18.3,207.4,-11.9).curveTo(210.3,-8.9,210.3,-3.4).curveTo(210.3,-1.9,210.1,-0.3).curveTo(208.2,6.8,205,13.8).curveTo(204.4,15.5,203.4,16.9).curveTo(201.1,20,196.7,22).lineTo(195.2,22.6).lineTo(190.9,23.9).lineTo(190.7,24).lineTo(184.2,25.1).lineTo(182,25.2).lineTo(181,25.2).lineTo(181,25.2).lineTo(180.9,25.2).curveTo(177.3,25.2,174.1,23.8).lineTo(173.9,23.7).lineTo(173.6,23.6).lineTo(173.5,23.5).curveTo(168.1,20.6,165.3,16.9).curveTo(163.9,15,163.1,12.9).curveTo(160.3,6.8,159.3,0.3).curveTo(159.1,-1.1,159.1,-2.6).curveTo(159.1,-5.3,159.8,-8.1).curveTo(161,-12.9,166.4,-17.3).curveTo(169.4,-19.9,173.4,-21).lineTo(173.4,-21).lineTo(179.9,-21.6).curveTo(183.2,-21.5,187,-20.6).curveTo(194.5,-18.3,199.5,-12.8).curveTo(202.3,-9.2,202.9,-4).curveTo(203.3,-0.7,203.3,2.8).lineTo(203.2,6.8).curveTo(202.7,12.2,196,16.1).lineTo(188.6,19).lineTo(188.3,19).lineTo(188.2,19).curveTo(186.8,19.3,185.6,19.3).lineTo(185.5,19.3).lineTo(185.5,19.3).curveTo(182.3,19.3,179.5,17.6).lineTo(178.5,16.9).curveTo(176.1,15.1,173.9,11.6).lineTo(171.8,6.7).lineTo(173.7,11.6).curveTo(175.9,15.1,178.3,16.9).lineTo(179.3,17.7).lineTo(179.4,17.8).lineTo(179.5,17.8).lineTo(179.8,18).curveTo(182.3,19.4,185.3,19.4).lineTo(185.4,19.4).lineTo(185.4,19.4).curveTo(186.7,19.4,188.2,19.1).lineTo(188.3,19).lineTo(188.5,19).lineTo(188.6,19).lineTo(188.7,18.9).lineTo(196.2,16.1).curveTo(202.9,12.1,203.4,6.7).lineTo(203.5,2.7).curveTo(203.5,-0.8,203.1,-4.1).curveTo(202.5,-9.3,199.7,-12.9).curveTo(194.7,-18.3,187.2,-20.7).curveTo(183.3,-21.5,179.9,-21.6).lineTo(173.4,-21).lineTo(173.4,-21).curveTo(169.4,-19.9,166.4,-17.3).curveTo(161,-12.9,159.8,-8.1).curveTo(159.1,-5.3,159.1,-2.6).curveTo(159.1,-1.1,159.3,0.3).curveTo(160.3,6.8,163.1,12.9).curveTo(163.9,15,165.3,16.9).curveTo(168.1,20.6,173.5,23.5).lineTo(173.6,23.6).lineTo(173.9,23.7).lineTo(174.1,23.8).curveTo(177.3,25.2,180.9,25.2).lineTo(181,25.2).lineTo(181,25.2).lineTo(182,25.2).lineTo(184.2,25.1).lineTo(181.8,25.2).lineTo(180.8,25.3).lineTo(180.8,25.3).lineTo(180.7,25.3).curveTo(177.1,25.3,173.8,23.8).lineTo(173.8,23.8).lineTo(173.3,23.5).curveTo(167.9,20.6,165.1,16.9).curveTo(163.7,15.1,162.9,13).curveTo(160.1,6.8,159.1,0.4).curveTo(158.9,-1.1,158.9,-2.5).curveTo(158.9,-5.3,159.6,-8.1).curveTo(160.8,-12.8,166.2,-17.2).curveTo(169.2,-19.8,173.2,-20.9).lineTo(173.2,-21).lineTo(173.4,-21).lineTo(173.2,-21).lineTo(173.2,-20.9).curveTo(169.2,-19.8,166.2,-17.2).curveTo(160.8,-12.8,159.6,-8.1).curveTo(158.9,-5.3,158.9,-2.5).curveTo(158.9,-1.1,159.1,0.4).curveTo(160.1,6.8,162.9,13).curveTo(163.7,15.1,165.1,16.9).curveTo(167.9,20.6,173.3,23.5).lineTo(173.8,23.8).lineTo(173.8,23.8).curveTo(177.1,25.3,180.7,25.3).lineTo(180.8,25.3).lineTo(180.8,25.3).closePath().moveTo(184.6,15.8).lineTo(185.1,15.8).lineTo(185.3,15.7).lineTo(187.3,15.5).curveTo(191.8,14.7,195.4,11.8).curveTo(198.5,9.4,199.2,6.4).curveTo(199.6,5.1,199.6,3.8).curveTo(199.6,1.5,198.5,-0.9).curveTo(196.6,-5.5,191.1,-9.2).lineTo(191,-9.3).lineTo(190.9,-9.3).curveTo(187,-11.7,181.4,-11.7).lineTo(181.3,-11.7).lineTo(181.3,-11.7).lineTo(179.3,-11.6).lineTo(178.7,-11.6).lineTo(177,-11.3).curveTo(173.2,-10.5,168.9,-7.8).curveTo(166.1,-3.9,166.1,0.3).lineTo(166.2,2).lineTo(166.1,0.3).curveTo(166.1,-3.9,168.9,-7.8).curveTo(173.2,-10.5,177,-11.3).lineTo(178.7,-11.6).lineTo(179.3,-11.6).lineTo(181.3,-11.7).lineTo(181.3,-11.7).lineTo(181.4,-11.7).curveTo(187,-11.7,190.9,-9.3).lineTo(191,-9.3).lineTo(191.1,-9.2).curveTo(196.6,-5.5,198.5,-0.9).curveTo(199.6,1.5,199.6,3.8).curveTo(199.6,5.1,199.2,6.4).curveTo(198.5,9.4,195.4,11.8).curveTo(191.8,14.7,187.3,15.5).lineTo(185.3,15.7).lineTo(185.1,15.8).lineTo(184.6,15.8).lineTo(184.6,15.8).lineTo(184.5,15.8).curveTo(182.6,15.8,182.4,14.5).lineTo(182.4,14.4).lineTo(182.4,14.5).curveTo(182.6,15.8,184.5,15.8).lineTo(184.6,15.8).lineTo(184.6,15.8).closePath().moveTo(183.7,12.3).lineTo(185.9,11.7).curveTo(190.1,10.3,191.5,6.7).curveTo(193.2,3.3,193.2,0.4).curveTo(193.2,-1.4,192.6,-2.9).curveTo(191.7,-5,190.2,-6.9).lineTo(190.2,-6.9).curveTo(187,-10.4,183,-10.5).lineTo(183,-10.5).lineTo(182.9,-10.5).lineTo(181.2,-10.3).lineTo(181.2,-10.3).lineTo(181.2,-10.3).lineTo(180.9,-10.3).curveTo(179.4,-10,177.9,-8.9).curveTo(177.1,-8.4,176.3,-7.5).curveTo(174.5,-5.4,174.5,-3.4).curveTo(174.5,-2.7,174.7,-2).curveTo(176,2,179.9,2.5).lineTo(180.2,2.6).lineTo(180.2,2.6).lineTo(181.6,2.8).lineTo(181.7,2.8).lineTo(181.7,2.8).lineTo(182.4,2.7).curveTo(184.4,2.5,185.9,0.9).curveTo(187.2,-0.4,187.2,-1.8).curveTo(187.2,-2.3,187,-2.9).curveTo(186.4,-5,183.8,-5.4).lineTo(183.7,-5.4).lineTo(183.6,-5.4).lineTo(183,-5.5).lineTo(183,-5.5).lineTo(183,-5.5).curveTo(181.7,-5.4,180.6,-4.3).lineTo(180.5,-4.2).lineTo(180.5,-4.1).lineTo(180.4,-4.1).lineTo(180,-3.6).curveTo(179.6,-3,179.6,-2.2).curveTo(179.6,-1.7,179.8,-1.2).lineTo(179.8,-1).lineTo(179.9,-1).curveTo(180.3,0.2,181.1,0.2).lineTo(181.1,0.2).lineTo(181.1,0.2).lineTo(181.4,0.1).lineTo(181.9,-0.2).lineTo(181.4,0.1).lineTo(181.1,0.2).lineTo(181.1,0.2).lineTo(181.1,0.2).curveTo(180.3,0.2,179.9,-1).lineTo(179.8,-1).lineTo(179.8,-1.2).curveTo(179.6,-1.7,179.6,-2.2).curveTo(179.6,-3,180,-3.6).lineTo(180.4,-4.1).lineTo(180.5,-4.1).lineTo(180.5,-4.2).lineTo(180.6,-4.3).curveTo(181.7,-5.4,183,-5.5).lineTo(183,-5.5).lineTo(183,-5.5).lineTo(183.6,-5.4).lineTo(183.7,-5.4).lineTo(183.8,-5.4).curveTo(186.4,-5,187,-2.9).curveTo(187.2,-2.3,187.2,-1.8).curveTo(187.2,-0.4,185.9,0.9).curveTo(184.4,2.5,182.4,2.7).lineTo(181.7,2.8).lineTo(181.7,2.8).lineTo(181.6,2.8).lineTo(180.2,2.6).lineTo(180.2,2.6).lineTo(179.9,2.5).curveTo(176,2,174.7,-2).curveTo(174.5,-2.7,174.5,-3.4).curveTo(174.5,-5.4,176.3,-7.5).curveTo(177.1,-8.4,177.9,-8.9).curveTo(179.4,-10,180.9,-10.3).lineTo(181.2,-10.3).lineTo(181.2,-10.3).lineTo(181.2,-10.3).lineTo(182.9,-10.5).lineTo(183,-10.5).lineTo(183,-10.5).curveTo(187,-10.4,190.2,-6.9).lineTo(190.2,-6.9).curveTo(191.7,-5,192.6,-2.9).curveTo(193.2,-1.4,193.2,0.4).curveTo(193.2,3.3,191.5,6.7).curveTo(190.1,10.3,185.9,11.7).lineTo(183.7,12.3).lineTo(177.8,9.2).curveTo(172.9,7.2,171.4,3).curveTo(170.2,0,170.2,-2.9).curveTo(170.2,-4.9,170.8,-6.9).curveTo(170.2,-4.9,170.2,-2.9).curveTo(170.2,0,171.4,3).curveTo(172.9,7.2,177.8,9.2).lineTo(183.7,12.3).closePath().moveTo(116.9,28.5).curveTo(102.8,25.7,98,16.9).curveTo(97,15.2,96.4,13.3).curveTo(92,-0.4,92.4,-1.9).curveTo(97.5,-20.2,110,-26.2).curveTo(113.4,-28,117.5,-28.7).curveTo(136.4,-32.6,151.5,-13.2).curveTo(154.5,-0.7,149.9,12.3).curveTo(149,14.8,147.5,16.9).curveTo(142.5,24,130.7,27.5).lineTo(126.3,28.5).lineTo(121.9,29.3).curveTo(119.2,29,116.9,28.5).closePath().moveTo(119.5,25.3).lineTo(120.5,25.2).curveTo(125,25.1,129.4,24).curveTo(132.4,23.2,135.4,22).curveTo(139.8,20,142.1,16.9).curveTo(143.1,15.5,143.7,13.8).curveTo(146.9,6.8,148.8,-0.3).curveTo(149,-1.9,149,-3.4).curveTo(149,-8.9,146.1,-11.9).curveTo(140.5,-18.4,132.7,-21).curveTo(140.5,-18.4,146.1,-11.9).curveTo(149,-8.9,149,-3.4).curveTo(149,-1.9,148.8,-0.3).curveTo(146.9,6.8,143.7,13.8).curveTo(143.1,15.5,142.1,16.9).curveTo(139.8,20,135.4,22).curveTo(132.4,23.2,129.4,24).curveTo(125,25.1,120.5,25.2).lineTo(119.5,25.3).lineTo(119.5,25.3).lineTo(119.4,25.3).curveTo(115.8,25.3,112.5,23.8).lineTo(112.5,23.8).lineTo(112,23.5).curveTo(106.6,20.6,103.8,16.9).curveTo(102.4,15.1,101.6,13).curveTo(98.8,6.8,97.8,0.4).curveTo(97.6,-1.1,97.6,-2.5).curveTo(97.6,-5.3,98.3,-8.1).curveTo(99.5,-12.8,104.9,-17.2).curveTo(107.9,-19.8,111.9,-20.9).lineTo(111.9,-21).lineTo(112,-21).curveTo(114.7,-21.6,117.7,-21.6).lineTo(117.7,-21.6).lineTo(117.7,-21.6).curveTo(120.9,-21.6,124.4,-20.9).lineTo(124.4,-20.9).lineTo(124.7,-20.8).lineTo(125.5,-20.6).lineTo(125.7,-20.6).curveTo(133.2,-18.3,138.2,-12.8).curveTo(141,-9.2,141.6,-4).curveTo(142,-0.7,142,2.8).lineTo(141.9,6.8).curveTo(141.4,12.2,134.7,16.1).lineTo(127.2,19).lineTo(127,19).lineTo(126.9,19.1).curveTo(125.4,19.4,124.1,19.4).lineTo(124.1,19.4).lineTo(124,19.4).curveTo(121,19.4,118.5,18).lineTo(118.2,17.8).lineTo(118.1,17.8).lineTo(118,17.7).lineTo(117,16.9).curveTo(114.6,15.1,112.4,11.6).lineTo(110.5,6.7).lineTo(112.4,11.6).curveTo(114.6,15.1,117,16.9).lineTo(118,17.7).lineTo(118.1,17.8).lineTo(118.2,17.8).lineTo(118.5,18).curveTo(121,19.4,124,19.4).lineTo(124.1,19.4).lineTo(124.1,19.4).curveTo(125.4,19.4,126.9,19.1).lineTo(127,19).lineTo(127.2,19).lineTo(134.7,16.1).curveTo(141.4,12.2,141.9,6.8).lineTo(142,2.8).curveTo(142,-0.7,141.6,-4).curveTo(141,-9.2,138.2,-12.8).curveTo(133.2,-18.3,125.7,-20.6).lineTo(125.5,-20.6).lineTo(124.7,-20.8).lineTo(124.4,-20.9).lineTo(124.4,-20.9).curveTo(120.9,-21.6,117.7,-21.6).lineTo(117.7,-21.6).lineTo(117.7,-21.6).curveTo(114.7,-21.6,112,-21).lineTo(111.9,-21).lineTo(111.9,-20.9).curveTo(107.9,-19.8,104.9,-17.2).curveTo(99.5,-12.8,98.3,-8.1).curveTo(97.6,-5.3,97.6,-2.5).curveTo(97.6,-1.1,97.8,0.4).curveTo(98.8,6.8,101.6,13).curveTo(102.4,15.1,103.8,16.9).curveTo(106.6,20.6,112,23.5).lineTo(112.5,23.8).lineTo(112.5,23.8).curveTo(115.8,25.3,119.4,25.3).lineTo(119.5,25.3).lineTo(119.5,25.3).closePath().moveTo(123.3,15.8).lineTo(123.8,15.8).lineTo(124,15.7).lineTo(126,15.5).curveTo(130.5,14.7,134.1,11.8).curveTo(137.2,9.4,137.9,6.4).curveTo(138.3,5.1,138.3,3.8).curveTo(138.3,1.5,137.2,-0.9).curveTo(135.3,-5.5,129.8,-9.2).lineTo(129.7,-9.3).lineTo(129.6,-9.3).lineTo(129.5,-9.4).lineTo(129.5,-9.4).curveTo(125.6,-11.7,120.1,-11.7).lineTo(120,-11.7).lineTo(120,-11.7).lineTo(118,-11.6).lineTo(117.4,-11.6).lineTo(115.7,-11.3).curveTo(111.9,-10.5,107.6,-7.8).curveTo(104.8,-3.9,104.8,0.3).lineTo(104.9,2).lineTo(104.8,0.3).curveTo(104.8,-3.9,107.6,-7.8).curveTo(111.9,-10.5,115.7,-11.3).lineTo(117.4,-11.6).lineTo(118,-11.6).lineTo(120,-11.7).lineTo(120,-11.7).lineTo(120.1,-11.7).curveTo(125.6,-11.7,129.5,-9.4).lineTo(129.5,-9.4).lineTo(129.6,-9.3).lineTo(129.7,-9.3).lineTo(129.8,-9.2).curveTo(135.3,-5.5,137.2,-0.9).curveTo(138.3,1.5,138.3,3.8).curveTo(138.3,5.1,137.9,6.4).curveTo(137.2,9.4,134.1,11.8).curveTo(130.5,14.7,126,15.5).lineTo(124,15.7).lineTo(123.8,15.8).lineTo(123.3,15.8).lineTo(123.3,15.8).lineTo(123.2,15.8).curveTo(121.3,15.8,121.1,14.5).lineTo(121.1,14.4).lineTo(121.1,14.5).curveTo(121.3,15.8,123.2,15.8).lineTo(123.3,15.8).lineTo(123.3,15.8).closePath().moveTo(122.4,12.3).lineTo(124.6,11.7).curveTo(128.8,10.3,130.2,6.7).curveTo(131.9,3.3,131.9,0.4).curveTo(131.9,-1.4,131.3,-2.9).curveTo(130.4,-5,128.9,-6.9).lineTo(128.9,-6.9).curveTo(125.7,-10.5,121.7,-10.5).lineTo(121.7,-10.5).lineTo(121.6,-10.5).lineTo(119.9,-10.3).lineTo(119.9,-10.3).lineTo(119.9,-10.3).lineTo(119.6,-10.3).curveTo(118.1,-10,116.6,-8.9).curveTo(115.8,-8.4,115,-7.5).curveTo(113.2,-5.4,113.2,-3.4).curveTo(113.2,-2.7,113.4,-2).curveTo(114.7,2,118.6,2.5).lineTo(118.9,2.6).lineTo(118.9,2.6).lineTo(120.3,2.8).lineTo(120.4,2.8).lineTo(120.4,2.8).lineTo(121.1,2.7).curveTo(123.1,2.5,124.6,0.9).curveTo(125.9,-0.4,125.9,-1.8).curveTo(125.9,-2.3,125.7,-2.9).curveTo(125.1,-5,122.5,-5.4).lineTo(121.8,-5.5).lineTo(121.7,-5.5).lineTo(121.7,-5.5).curveTo(120.4,-5.4,119.2,-4.2).lineTo(119.1,-4.1).lineTo(118.7,-3.6).curveTo(118.3,-3,118.3,-2.2).curveTo(118.3,-1.7,118.5,-1.2).lineTo(118.5,-1).lineTo(118.6,-1).curveTo(119,0.2,119.8,0.2).lineTo(119.8,0.2).lineTo(119.8,0.2).lineTo(120.1,0.1).lineTo(120.6,-0.2).lineTo(120.1,0.1).lineTo(119.8,0.2).lineTo(119.8,0.2).lineTo(119.8,0.2).curveTo(119,0.2,118.6,-1).lineTo(118.5,-1).lineTo(118.5,-1.2).curveTo(118.3,-1.7,118.3,-2.2).curveTo(118.3,-3,118.7,-3.6).lineTo(119.1,-4.1).lineTo(119.2,-4.2).curveTo(120.4,-5.4,121.7,-5.5).lineTo(121.7,-5.5).lineTo(121.8,-5.5).lineTo(122.5,-5.4).curveTo(125.1,-5,125.7,-2.9).curveTo(125.9,-2.3,125.9,-1.8).curveTo(125.9,-0.4,124.6,0.9).curveTo(123.1,2.5,121.1,2.7).lineTo(120.4,2.8).lineTo(120.4,2.8).lineTo(120.3,2.8).lineTo(118.9,2.6).lineTo(118.9,2.6).lineTo(118.6,2.5).curveTo(114.7,2,113.4,-2).curveTo(113.2,-2.7,113.2,-3.4).curveTo(113.2,-5.4,115,-7.5).curveTo(115.8,-8.4,116.6,-8.9).curveTo(118.1,-10,119.6,-10.3).lineTo(119.9,-10.3).lineTo(119.9,-10.3).lineTo(119.9,-10.3).lineTo(121.6,-10.5).lineTo(121.7,-10.5).lineTo(121.7,-10.5).curveTo(125.7,-10.5,128.9,-6.9).lineTo(128.9,-6.9).curveTo(130.4,-5,131.3,-2.9).curveTo(131.9,-1.4,131.9,0.4).curveTo(131.9,3.3,130.2,6.7).curveTo(128.8,10.3,124.6,11.7).lineTo(122.4,12.3).lineTo(116.5,9.2).curveTo(111.6,7.2,110.1,3).curveTo(108.9,0,108.9,-2.9).curveTo(108.9,-4.9,109.5,-6.9).curveTo(108.9,-4.9,108.9,-2.9).curveTo(108.9,0,110.1,3).curveTo(111.6,7.2,116.5,9.2).lineTo(122.4,12.3).closePath().moveTo(55.8,28.5).curveTo(41.7,25.7,36.9,16.9).curveTo(35.9,15.2,35.3,13.3).curveTo(30.9,-0.4,31.3,-1.9).curveTo(36.4,-20.2,48.9,-26.2).curveTo(52.3,-28,56.4,-28.7).curveTo(75.3,-32.6,90.4,-13.2).curveTo(93.4,-0.7,88.8,12.3).curveTo(87.9,14.8,86.4,16.9).curveTo(81.4,24,69.6,27.5).lineTo(65.2,28.5).lineTo(60.8,29.3).curveTo(58.1,29,55.8,28.5).closePath().moveTo(58.4,25.3).lineTo(59.4,25.2).lineTo(61.8,25.1).lineTo(59.6,25.2).lineTo(58.6,25.2).lineTo(58.6,25.2).lineTo(58.5,25.2).curveTo(54.9,25.2,51.7,23.8).lineTo(51.5,23.7).lineTo(51.2,23.6).lineTo(51.1,23.5).curveTo(45.7,20.6,42.9,16.9).curveTo(41.5,15,40.7,12.9).curveTo(37.9,6.8,36.9,0.3).curveTo(36.7,-1.1,36.7,-2.6).curveTo(36.7,-5.3,37.4,-8.1).curveTo(38.6,-12.9,44,-17.3).curveTo(47,-19.9,51,-21).lineTo(51,-21).lineTo(57.5,-21.6).lineTo(51,-21).lineTo(50.8,-21).lineTo(50.8,-20.9).curveTo(46.8,-19.8,43.8,-17.2).curveTo(38.4,-12.8,37.2,-8.1).curveTo(36.5,-5.3,36.5,-2.5).curveTo(36.5,-1.1,36.7,0.4).curveTo(37.7,6.8,40.5,13).curveTo(41.3,15.1,42.7,16.9).curveTo(45.5,20.6,50.9,23.5).lineTo(51.4,23.8).lineTo(51.4,23.8).curveTo(54.7,25.3,58.3,25.3).lineTo(58.4,25.3).lineTo(58.4,25.3).closePath().moveTo(68.5,23.9).lineTo(68.3,24).lineTo(61.8,25.1).lineTo(68.3,24).lineTo(68.5,23.9).lineTo(72.8,22.6).lineTo(74.5,22).curveTo(78.9,20,81.2,16.9).curveTo(82.2,15.4,82.8,13.7).curveTo(86,6.8,87.9,-0.3).curveTo(88.1,-2,88.1,-3.5).curveTo(88.1,-9,85.2,-11.9).curveTo(79.6,-18.4,71.7,-20.9).curveTo(79.5,-18.3,85,-11.9).curveTo(87.9,-8.9,87.9,-3.4).curveTo(87.9,-1.9,87.7,-0.3).curveTo(85.8,6.8,82.6,13.8).curveTo(82,15.5,81,16.9).curveTo(78.7,20,74.3,22).lineTo(72.8,22.6).closePath().moveTo(63,19.4).curveTo(64.3,19.4,65.8,19.1).lineTo(65.9,19).lineTo(66.1,19).lineTo(66.2,19).lineTo(66.3,18.9).lineTo(73.8,16.1).curveTo(80.5,12.1,81,6.7).lineTo(81.1,2.7).curveTo(81.1,-0.8,80.7,-4.1).curveTo(80.1,-9.3,77.3,-12.9).curveTo(72.3,-18.3,64.8,-20.7).curveTo(60.9,-21.5,57.5,-21.6).curveTo(60.8,-21.5,64.6,-20.6).curveTo(72.1,-18.3,77.1,-12.8).curveTo(79.9,-9.2,80.5,-4).curveTo(80.9,-0.7,80.9,2.8).lineTo(80.8,6.8).curveTo(80.3,12.2,73.6,16.1).lineTo(66.2,19).lineTo(65.9,19).lineTo(65.8,19).curveTo(64.4,19.3,63.2,19.3).lineTo(63.1,19.3).lineTo(63.1,19.3).curveTo(59.9,19.3,57.1,17.6).lineTo(56.1,16.9).curveTo(53.7,15.1,51.5,11.6).lineTo(49.4,6.7).lineTo(51.3,11.6).curveTo(53.5,15.1,55.9,16.9).lineTo(56.9,17.7).lineTo(57,17.8).lineTo(57.1,17.8).lineTo(57.4,18).curveTo(59.9,19.4,62.9,19.4).lineTo(63,19.4).lineTo(63,19.4).closePath().moveTo(62.2,15.8).lineTo(62.7,15.8).lineTo(62.9,15.7).lineTo(64.9,15.5).curveTo(69.4,14.7,73,11.8).curveTo(76.1,9.4,76.8,6.4).curveTo(77.2,5.1,77.2,3.8).curveTo(77.2,1.5,76.1,-0.9).curveTo(74.2,-5.5,68.7,-9.2).lineTo(68.6,-9.3).lineTo(68.5,-9.3).curveTo(64.6,-11.7,59,-11.7).lineTo(58.9,-11.7).lineTo(58.9,-11.7).lineTo(56.9,-11.6).lineTo(56.3,-11.6).lineTo(54.6,-11.3).curveTo(50.8,-10.5,46.5,-7.8).curveTo(43.7,-3.9,43.7,0.3).lineTo(43.8,2).lineTo(43.7,0.3).curveTo(43.7,-3.9,46.5,-7.8).curveTo(50.8,-10.5,54.6,-11.3).lineTo(56.3,-11.6).lineTo(56.9,-11.6).lineTo(58.9,-11.7).lineTo(58.9,-11.7).lineTo(59,-11.7).curveTo(64.6,-11.7,68.5,-9.3).lineTo(68.6,-9.3).lineTo(68.7,-9.2).curveTo(74.2,-5.5,76.1,-0.9).curveTo(77.2,1.5,77.2,3.8).curveTo(77.2,5.1,76.8,6.4).curveTo(76.1,9.4,73,11.8).curveTo(69.4,14.7,64.9,15.5).lineTo(62.9,15.7).lineTo(62.7,15.8).lineTo(62.2,15.8).lineTo(62.2,15.8).lineTo(62.1,15.8).curveTo(60.2,15.8,60,14.5).lineTo(60,14.4).lineTo(60,14.5).curveTo(60.2,15.8,62.1,15.8).lineTo(62.2,15.8).lineTo(62.2,15.8).closePath().moveTo(61.3,12.3).lineTo(63.5,11.7).curveTo(67.7,10.3,69.1,6.7).curveTo(70.8,3.3,70.8,0.4).curveTo(70.8,-1.4,70.2,-2.9).curveTo(69.3,-5,67.8,-6.9).lineTo(67.8,-6.9).curveTo(64.6,-10.4,60.6,-10.5).lineTo(60.6,-10.5).lineTo(60.5,-10.5).lineTo(58.8,-10.3).lineTo(58.8,-10.3).lineTo(58.8,-10.3).lineTo(58.5,-10.3).curveTo(57,-10,55.5,-8.9).curveTo(54.7,-8.4,53.9,-7.5).curveTo(52.1,-5.4,52.1,-3.4).curveTo(52.1,-2.7,52.3,-2).curveTo(53.6,2,57.5,2.5).lineTo(57.8,2.6).lineTo(57.8,2.6).lineTo(59.2,2.8).lineTo(59.3,2.8).lineTo(59.3,2.8).lineTo(60,2.7).curveTo(62,2.5,63.5,0.9).curveTo(64.8,-0.4,64.8,-1.8).curveTo(64.8,-2.3,64.6,-2.9).curveTo(64,-5,61.4,-5.4).lineTo(61.3,-5.4).lineTo(61.2,-5.4).lineTo(60.6,-5.5).lineTo(60.6,-5.5).lineTo(60.6,-5.5).curveTo(59.3,-5.4,58.2,-4.3).lineTo(58.1,-4.2).lineTo(58.1,-4.1).lineTo(58,-4.1).lineTo(57.6,-3.6).curveTo(57.2,-3,57.2,-2.2).curveTo(57.2,-1.7,57.4,-1.2).lineTo(57.4,-1).lineTo(57.5,-1).curveTo(57.9,0.2,58.7,0.2).lineTo(58.7,0.2).lineTo(58.7,0.2).lineTo(59,0.1).lineTo(59.5,-0.2).lineTo(59,0.1).lineTo(58.7,0.2).lineTo(58.7,0.2).lineTo(58.7,0.2).curveTo(57.9,0.2,57.5,-1).lineTo(57.4,-1).lineTo(57.4,-1.2).curveTo(57.2,-1.7,57.2,-2.2).curveTo(57.2,-3,57.6,-3.6).lineTo(58,-4.1).lineTo(58.1,-4.1).lineTo(58.1,-4.2).lineTo(58.2,-4.3).curveTo(59.3,-5.4,60.6,-5.5).lineTo(60.6,-5.5).lineTo(60.6,-5.5).lineTo(61.2,-5.4).lineTo(61.3,-5.4).lineTo(61.4,-5.4).curveTo(64,-5,64.6,-2.9).curveTo(64.8,-2.3,64.8,-1.8).curveTo(64.8,-0.4,63.5,0.9).curveTo(62,2.5,60,2.7).lineTo(59.3,2.8).lineTo(59.3,2.8).lineTo(59.2,2.8).lineTo(57.8,2.6).lineTo(57.8,2.6).lineTo(57.5,2.5).curveTo(53.6,2,52.3,-2).curveTo(52.1,-2.7,52.1,-3.4).curveTo(52.1,-5.4,53.9,-7.5).curveTo(54.7,-8.4,55.5,-8.9).curveTo(57,-10,58.5,-10.3).lineTo(58.8,-10.3).lineTo(58.8,-10.3).lineTo(58.8,-10.3).lineTo(60.5,-10.5).lineTo(60.6,-10.5).lineTo(60.6,-10.5).curveTo(64.6,-10.4,67.8,-6.9).lineTo(67.8,-6.9).curveTo(69.3,-5,70.2,-2.9).curveTo(70.8,-1.4,70.8,0.4).curveTo(70.8,3.3,69.1,6.7).curveTo(67.7,10.3,63.5,11.7).lineTo(61.3,12.3).lineTo(55.4,9.2).curveTo(50.5,7.2,49,3).curveTo(47.8,0,47.8,-2.9).curveTo(47.8,-4.9,48.4,-6.9).curveTo(47.8,-4.9,47.8,-2.9).curveTo(47.8,0,49,3).curveTo(50.5,7.2,55.4,9.2).lineTo(61.3,12.3).closePath().moveTo(-5.5,28.5).curveTo(-19.6,25.7,-24.4,16.9).curveTo(-25.4,15.2,-26,13.3).curveTo(-30.4,-0.4,-30,-1.9).curveTo(-24.9,-20.2,-12.4,-26.2).curveTo(-9,-28,-4.9,-28.7).curveTo(14,-32.6,29.1,-13.2).curveTo(32.1,-0.7,27.5,12.3).curveTo(26.6,14.8,25.1,16.9).curveTo(20.1,24,8.3,27.5).lineTo(3.9,28.5).lineTo(-0.5,29.3).curveTo(-3.2,29,-5.5,28.5).closePath().moveTo(-2.9,25.3).lineTo(-1.9,25.2).curveTo(2.6,25.1,7,24).curveTo(10,23.2,13,22).curveTo(17.4,20,19.7,16.9).curveTo(20.7,15.5,21.3,13.8).curveTo(24.5,6.8,26.4,-0.3).curveTo(26.6,-1.9,26.6,-3.4).curveTo(26.6,-8.9,23.7,-11.9).curveTo(18.1,-18.4,10.3,-21).curveTo(18.1,-18.4,23.7,-11.9).curveTo(26.6,-8.9,26.6,-3.4).curveTo(26.6,-1.9,26.4,-0.3).curveTo(24.5,6.8,21.3,13.8).curveTo(20.7,15.5,19.7,16.9).curveTo(17.4,20,13,22).curveTo(10,23.2,7,24).curveTo(2.6,25.1,-1.9,25.2).lineTo(-2.9,25.3).lineTo(-2.9,25.3).lineTo(-3,25.3).curveTo(-6.6,25.3,-9.9,23.8).lineTo(-9.9,23.8).lineTo(-10.4,23.5).curveTo(-15.8,20.6,-18.6,16.9).curveTo(-20,15.1,-20.8,13).curveTo(-23.6,6.8,-24.6,0.4).curveTo(-24.8,-1.1,-24.8,-2.5).curveTo(-24.8,-5.3,-24.1,-8.1).curveTo(-22.9,-12.8,-17.5,-17.2).curveTo(-14.5,-19.8,-10.5,-20.9).lineTo(-10.5,-21).lineTo(-10.4,-21).curveTo(-7.7,-21.6,-4.7,-21.6).lineTo(-4.7,-21.6).lineTo(-4.7,-21.6).curveTo(-1.5,-21.6,2,-20.9).lineTo(2,-20.9).lineTo(2.3,-20.8).lineTo(3.1,-20.6).lineTo(3.3,-20.6).curveTo(10.8,-18.3,15.8,-12.8).curveTo(18.6,-9.2,19.2,-4).curveTo(19.6,-0.7,19.6,2.8).lineTo(19.5,6.8).curveTo(19,12.2,12.3,16.1).lineTo(4.8,19).lineTo(4.6,19).lineTo(4.5,19.1).curveTo(3,19.4,1.7,19.4).lineTo(1.7,19.4).lineTo(1.6,19.4).curveTo(-1.4,19.4,-3.9,18).lineTo(-4.2,17.8).lineTo(-4.3,17.8).lineTo(-4.4,17.7).lineTo(-5.4,16.9).curveTo(-7.8,15.1,-10,11.6).lineTo(-11.9,6.7).lineTo(-10,11.6).curveTo(-7.8,15.1,-5.4,16.9).lineTo(-4.4,17.7).lineTo(-4.3,17.8).lineTo(-4.2,17.8).lineTo(-3.9,18).curveTo(-1.4,19.4,1.6,19.4).lineTo(1.7,19.4).lineTo(1.7,19.4).curveTo(3,19.4,4.5,19.1).lineTo(4.6,19).lineTo(4.8,19).lineTo(12.3,16.1).curveTo(19,12.2,19.5,6.8).lineTo(19.6,2.8).curveTo(19.6,-0.7,19.2,-4).curveTo(18.6,-9.2,15.8,-12.8).curveTo(10.8,-18.3,3.3,-20.6).lineTo(3.1,-20.6).lineTo(2.3,-20.8).lineTo(2,-20.9).lineTo(2,-20.9).curveTo(-1.5,-21.6,-4.7,-21.6).lineTo(-4.7,-21.6).lineTo(-4.7,-21.6).curveTo(-7.7,-21.6,-10.4,-21).lineTo(-10.5,-21).lineTo(-10.5,-20.9).curveTo(-14.5,-19.8,-17.5,-17.2).curveTo(-22.9,-12.8,-24.1,-8.1).curveTo(-24.8,-5.3,-24.8,-2.5).curveTo(-24.8,-1.1,-24.6,0.4).curveTo(-23.6,6.8,-20.8,13).curveTo(-20,15.1,-18.6,16.9).curveTo(-15.8,20.6,-10.4,23.5).lineTo(-9.9,23.8).lineTo(-9.9,23.8).curveTo(-6.6,25.3,-3,25.3).lineTo(-2.9,25.3).lineTo(-2.9,25.3).closePath().moveTo(0.9,15.8).lineTo(1.4,15.8).lineTo(1.6,15.7).lineTo(3.6,15.5).curveTo(8.1,14.7,11.7,11.8).curveTo(14.8,9.4,15.5,6.4).curveTo(15.9,5.1,15.9,3.8).curveTo(15.9,1.5,14.8,-0.9).curveTo(12.9,-5.5,7.4,-9.2).lineTo(7.3,-9.3).lineTo(7.2,-9.3).lineTo(7.1,-9.4).lineTo(7.1,-9.4).curveTo(3.2,-11.7,-2.3,-11.7).lineTo(-2.4,-11.7).lineTo(-2.4,-11.7).lineTo(-4.4,-11.6).lineTo(-5,-11.6).lineTo(-6.7,-11.3).curveTo(-10.5,-10.5,-14.8,-7.8).curveTo(-17.6,-3.9,-17.6,0.3).lineTo(-17.5,2).lineTo(-17.6,0.3).curveTo(-17.6,-3.9,-14.8,-7.8).curveTo(-10.5,-10.5,-6.7,-11.3).lineTo(-5,-11.6).lineTo(-4.4,-11.6).lineTo(-2.4,-11.7).lineTo(-2.4,-11.7).lineTo(-2.3,-11.7).curveTo(3.2,-11.7,7.1,-9.4).lineTo(7.1,-9.4).lineTo(7.2,-9.3).lineTo(7.3,-9.3).lineTo(7.4,-9.2).curveTo(12.9,-5.5,14.8,-0.9).curveTo(15.9,1.5,15.9,3.8).curveTo(15.9,5.1,15.5,6.4).curveTo(14.8,9.4,11.7,11.8).curveTo(8.1,14.7,3.6,15.5).lineTo(1.6,15.7).lineTo(1.4,15.8).lineTo(0.9,15.8).lineTo(0.9,15.8).lineTo(0.8,15.8).curveTo(-1.1,15.8,-1.3,14.5).lineTo(-1.3,14.4).lineTo(-1.3,14.5).curveTo(-1.1,15.8,0.8,15.8).lineTo(0.9,15.8).lineTo(0.9,15.8).closePath().moveTo(-0,12.3).lineTo(2.2,11.7).curveTo(6.4,10.3,7.8,6.7).curveTo(9.5,3.3,9.5,0.4).curveTo(9.5,-1.4,8.9,-2.9).curveTo(8,-5,6.5,-6.9).lineTo(6.2,-7.2).lineTo(6.1,-7.3).curveTo(3.1,-10.4,-0.7,-10.5).lineTo(-0.7,-10.5).lineTo(-0.8,-10.5).lineTo(-2.5,-10.3).lineTo(-2.5,-10.3).lineTo(-2.5,-10.3).lineTo(-2.8,-10.3).curveTo(-4.3,-10,-5.8,-8.9).curveTo(-6.6,-8.4,-7.4,-7.5).curveTo(-9.2,-5.4,-9.2,-3.4).curveTo(-9.2,-2.7,-9,-2).curveTo(-7.7,2,-3.8,2.5).lineTo(-3.5,2.6).lineTo(-3.5,2.6).lineTo(-2.1,2.8).lineTo(-2,2.8).lineTo(-2,2.8).lineTo(-1.3,2.7).curveTo(0.7,2.5,2.2,0.9).curveTo(3.5,-0.4,3.5,-1.8).curveTo(3.5,-2.3,3.3,-2.9).curveTo(2.7,-5,0.1,-5.4).lineTo(-0.6,-5.5).lineTo(-0.7,-5.5).lineTo(-0.7,-5.5).curveTo(-2,-5.4,-3.2,-4.2).lineTo(-3.3,-4.1).lineTo(-3.7,-3.6).curveTo(-4.1,-3,-4.1,-2.2).curveTo(-4.1,-1.7,-3.9,-1.2).lineTo(-3.9,-1).lineTo(-3.8,-1).curveTo(-3.4,0.2,-2.6,0.2).lineTo(-2.6,0.2).lineTo(-2.6,0.2).lineTo(-2.3,0.1).lineTo(-1.8,-0.2).lineTo(-2.3,0.1).lineTo(-2.6,0.2).lineTo(-2.6,0.2).lineTo(-2.6,0.2).curveTo(-3.4,0.2,-3.8,-1).lineTo(-3.9,-1).lineTo(-3.9,-1.2).curveTo(-4.1,-1.7,-4.1,-2.2).curveTo(-4.1,-3,-3.7,-3.6).lineTo(-3.3,-4.1).lineTo(-3.2,-4.2).curveTo(-2,-5.4,-0.7,-5.5).lineTo(-0.7,-5.5).lineTo(-0.6,-5.5).lineTo(0.1,-5.4).curveTo(2.7,-5,3.3,-2.9).curveTo(3.5,-2.3,3.5,-1.8).curveTo(3.5,-0.4,2.2,0.9).curveTo(0.7,2.5,-1.3,2.7).lineTo(-2,2.8).lineTo(-2,2.8).lineTo(-2.1,2.8).lineTo(-3.5,2.6).lineTo(-3.5,2.6).lineTo(-3.8,2.5).curveTo(-7.7,2,-9,-2).curveTo(-9.2,-2.7,-9.2,-3.4).curveTo(-9.2,-5.4,-7.4,-7.5).curveTo(-6.6,-8.4,-5.8,-8.9).curveTo(-4.3,-10,-2.8,-10.3).lineTo(-2.5,-10.3).lineTo(-2.5,-10.3).lineTo(-2.5,-10.3).lineTo(-0.8,-10.5).lineTo(-0.7,-10.5).lineTo(-0.7,-10.5).curveTo(3.1,-10.4,6.1,-7.3).lineTo(6.2,-7.2).lineTo(6.5,-6.9).curveTo(8,-5,8.9,-2.9).curveTo(9.5,-1.4,9.5,0.4).curveTo(9.5,3.3,7.8,6.7).curveTo(6.4,10.3,2.2,11.7).lineTo(-0,12.3).lineTo(-5.9,9.2).curveTo(-10.8,7.2,-12.3,3).curveTo(-13.5,0,-13.5,-2.9).curveTo(-13.5,-4.9,-12.9,-6.9).curveTo(-13.5,-4.9,-13.5,-2.9).curveTo(-13.5,0,-12.3,3).curveTo(-10.8,7.2,-5.9,9.2).lineTo(-0,12.3).closePath().moveTo(-66.8,28.5).curveTo(-80.9,25.7,-85.7,16.9).curveTo(-86.7,15.2,-87.3,13.3).curveTo(-91.7,-0.4,-91.3,-1.9).curveTo(-86.2,-20.2,-73.7,-26.2).curveTo(-70.3,-28,-66.2,-28.7).curveTo(-47.3,-32.6,-32.2,-13.2).curveTo(-29.2,-0.7,-33.8,12.3).curveTo(-34.7,14.8,-36.2,16.9).curveTo(-41.2,24,-53,27.5).lineTo(-57.4,28.5).lineTo(-61.8,29.3).curveTo(-64.5,29,-66.8,28.5).closePath().moveTo(-64.2,25.3).lineTo(-63.2,25.2).curveTo(-58.7,25.1,-54.3,24).curveTo(-51.3,23.2,-48.3,22).curveTo(-43.9,20,-41.6,16.9).curveTo(-40.6,15.5,-40,13.8).curveTo(-36.8,6.8,-34.9,-0.3).curveTo(-34.7,-1.9,-34.7,-3.4).curveTo(-34.7,-8.9,-37.6,-11.9).curveTo(-43.2,-18.4,-51,-21).curveTo(-43.2,-18.4,-37.6,-11.9).curveTo(-34.7,-8.9,-34.7,-3.4).curveTo(-34.7,-1.9,-34.9,-0.3).curveTo(-36.8,6.8,-40,13.8).curveTo(-40.6,15.5,-41.6,16.9).curveTo(-43.9,20,-48.3,22).curveTo(-51.3,23.2,-54.3,24).curveTo(-58.7,25.1,-63.2,25.2).lineTo(-64.2,25.3).lineTo(-64.2,25.3).lineTo(-64.3,25.3).curveTo(-67.9,25.3,-71.2,23.8).lineTo(-71.2,23.8).lineTo(-71.7,23.5).curveTo(-77.1,20.6,-79.9,16.9).curveTo(-81.3,15.1,-82.1,13).curveTo(-84.9,6.8,-85.9,0.4).curveTo(-86.1,-1.1,-86.1,-2.5).curveTo(-86.1,-5.3,-85.4,-8.1).curveTo(-84.2,-12.8,-78.8,-17.2).curveTo(-75.8,-19.8,-71.8,-20.9).lineTo(-71.8,-21).lineTo(-71.7,-21).lineTo(-71.3,-21.1).lineTo(-71.2,-21.1).curveTo(-68.7,-21.6,-66,-21.6).lineTo(-66,-21.6).lineTo(-66,-21.6).curveTo(-62.8,-21.6,-59.4,-20.9).lineTo(-59.3,-20.9).lineTo(-59,-20.8).lineTo(-58.2,-20.6).lineTo(-58,-20.6).curveTo(-50.5,-18.3,-45.5,-12.8).curveTo(-42.7,-9.2,-42.1,-4).curveTo(-41.7,-0.7,-41.7,2.8).lineTo(-41.8,6.8).curveTo(-42.3,12.2,-49,16.1).lineTo(-56.5,19).lineTo(-56.7,19).lineTo(-56.8,19.1).curveTo(-58.3,19.4,-59.6,19.4).lineTo(-59.6,19.4).lineTo(-59.7,19.4).curveTo(-62.7,19.3,-65.2,18).lineTo(-65.5,17.8).lineTo(-65.6,17.8).lineTo(-65.7,17.7).lineTo(-66.7,16.9).curveTo(-69.1,15.1,-71.3,11.6).lineTo(-73.2,6.7).lineTo(-71.3,11.6).curveTo(-69.1,15.1,-66.7,16.9).lineTo(-65.7,17.7).lineTo(-65.6,17.8).lineTo(-65.5,17.8).lineTo(-65.2,18).curveTo(-62.7,19.3,-59.7,19.4).lineTo(-59.6,19.4).lineTo(-59.6,19.4).curveTo(-58.3,19.4,-56.8,19.1).lineTo(-56.7,19).lineTo(-56.5,19).lineTo(-49,16.1).curveTo(-42.3,12.2,-41.8,6.8).lineTo(-41.7,2.8).curveTo(-41.7,-0.7,-42.1,-4).curveTo(-42.7,-9.2,-45.5,-12.8).curveTo(-50.5,-18.3,-58,-20.6).lineTo(-58.2,-20.6).lineTo(-59,-20.8).lineTo(-59.3,-20.9).lineTo(-59.4,-20.9).curveTo(-62.8,-21.6,-66,-21.6).lineTo(-66,-21.6).lineTo(-66,-21.6).curveTo(-68.7,-21.6,-71.2,-21.1).lineTo(-71.3,-21.1).lineTo(-71.7,-21).lineTo(-71.8,-21).lineTo(-71.8,-20.9).curveTo(-75.8,-19.8,-78.8,-17.2).curveTo(-84.2,-12.8,-85.4,-8.1).curveTo(-86.1,-5.3,-86.1,-2.5).curveTo(-86.1,-1.1,-85.9,0.4).curveTo(-84.9,6.8,-82.1,13).curveTo(-81.3,15.1,-79.9,16.9).curveTo(-77.1,20.6,-71.7,23.5).lineTo(-71.2,23.8).lineTo(-71.2,23.8).curveTo(-67.9,25.3,-64.3,25.3).lineTo(-64.2,25.3).lineTo(-64.2,25.3).closePath().moveTo(-60.4,15.8).lineTo(-59.9,15.8).lineTo(-59.7,15.7).lineTo(-57.7,15.5).curveTo(-53.2,14.7,-49.6,11.8).curveTo(-46.5,9.4,-45.8,6.4).curveTo(-45.4,5.1,-45.4,3.8).curveTo(-45.4,1.5,-46.5,-0.9).curveTo(-48.4,-5.5,-53.9,-9.2).lineTo(-54,-9.3).lineTo(-54.1,-9.3).lineTo(-54.2,-9.4).lineTo(-54.2,-9.4).curveTo(-58.1,-11.7,-63.6,-11.7).lineTo(-63.7,-11.7).lineTo(-63.7,-11.7).lineTo(-65.7,-11.6).lineTo(-66.3,-11.6).lineTo(-68,-11.3).curveTo(-71.8,-10.5,-76.1,-7.8).curveTo(-78.9,-3.9,-78.9,0.3).lineTo(-78.8,2).lineTo(-78.9,0.3).curveTo(-78.9,-3.9,-76.1,-7.8).curveTo(-71.8,-10.5,-68,-11.3).lineTo(-66.3,-11.6).lineTo(-65.7,-11.6).lineTo(-63.7,-11.7).lineTo(-63.7,-11.7).lineTo(-63.6,-11.7).curveTo(-58.1,-11.7,-54.2,-9.4).lineTo(-54.2,-9.4).lineTo(-54.1,-9.3).lineTo(-54,-9.3).lineTo(-53.9,-9.2).curveTo(-48.4,-5.5,-46.5,-0.9).curveTo(-45.4,1.5,-45.4,3.8).curveTo(-45.4,5.1,-45.8,6.4).curveTo(-46.5,9.4,-49.6,11.8).curveTo(-53.2,14.7,-57.7,15.5).lineTo(-59.7,15.7).lineTo(-59.9,15.8).lineTo(-60.4,15.8).lineTo(-60.4,15.8).lineTo(-60.5,15.8).curveTo(-62.4,15.8,-62.6,14.5).lineTo(-62.6,14.4).lineTo(-62.6,14.5).curveTo(-62.4,15.8,-60.5,15.8).lineTo(-60.4,15.8).lineTo(-60.4,15.8).closePath().moveTo(-61.3,12.3).lineTo(-59.1,11.7).curveTo(-54.9,10.3,-53.5,6.7).curveTo(-51.8,3.3,-51.8,0.4).curveTo(-51.8,-1.4,-52.4,-2.9).curveTo(-53.3,-5,-54.8,-6.9).lineTo(-54.8,-6.9).curveTo(-58,-10.5,-62,-10.5).lineTo(-62,-10.5).lineTo(-62.1,-10.5).lineTo(-63.8,-10.3).lineTo(-63.8,-10.3).lineTo(-63.8,-10.3).lineTo(-64.1,-10.3).curveTo(-65.6,-10,-67.1,-8.9).curveTo(-67.9,-8.4,-68.7,-7.5).curveTo(-70.5,-5.4,-70.5,-3.4).curveTo(-70.5,-2.7,-70.3,-2).curveTo(-69,2,-65.1,2.5).lineTo(-64.8,2.6).lineTo(-64.8,2.6).lineTo(-63.4,2.8).lineTo(-63.3,2.8).lineTo(-63.3,2.8).lineTo(-62.6,2.7).curveTo(-60.6,2.5,-59.1,0.9).curveTo(-57.8,-0.4,-57.8,-1.8).curveTo(-57.8,-2.3,-58,-2.9).curveTo(-58.6,-5,-61.2,-5.4).lineTo(-62,-5.5).lineTo(-62,-5.5).lineTo(-62,-5.5).curveTo(-63.3,-5.4,-64.5,-4.2).lineTo(-64.6,-4.1).lineTo(-65,-3.6).curveTo(-65.4,-3,-65.4,-2.2).curveTo(-65.4,-1.7,-65.2,-1.2).lineTo(-65.2,-1).lineTo(-65.1,-1).curveTo(-64.7,0.2,-63.9,0.2).lineTo(-63.9,0.2).lineTo(-63.9,0.2).lineTo(-63.6,0.1).lineTo(-63.1,-0.2).lineTo(-63.6,0.1).lineTo(-63.9,0.2).lineTo(-63.9,0.2).lineTo(-63.9,0.2).curveTo(-64.7,0.2,-65.1,-1).lineTo(-65.2,-1).lineTo(-65.2,-1.2).curveTo(-65.4,-1.7,-65.4,-2.2).curveTo(-65.4,-3,-65,-3.6).lineTo(-64.6,-4.1).lineTo(-64.5,-4.2).curveTo(-63.3,-5.4,-62,-5.5).lineTo(-62,-5.5).lineTo(-62,-5.5).lineTo(-61.2,-5.4).curveTo(-58.6,-5,-58,-2.9).curveTo(-57.8,-2.3,-57.8,-1.8).curveTo(-57.8,-0.4,-59.1,0.9).curveTo(-60.6,2.5,-62.6,2.7).lineTo(-63.3,2.8).lineTo(-63.3,2.8).lineTo(-63.4,2.8).lineTo(-64.8,2.6).lineTo(-64.8,2.6).lineTo(-65.1,2.5).curveTo(-69,2,-70.3,-2).curveTo(-70.5,-2.7,-70.5,-3.4).curveTo(-70.5,-5.4,-68.7,-7.5).curveTo(-67.9,-8.4,-67.1,-8.9).curveTo(-65.6,-10,-64.1,-10.3).lineTo(-63.8,-10.3).lineTo(-63.8,-10.3).lineTo(-63.8,-10.3).lineTo(-62.1,-10.5).lineTo(-62,-10.5).lineTo(-62,-10.5).curveTo(-58,-10.5,-54.8,-6.9).lineTo(-54.8,-6.9).curveTo(-53.3,-5,-52.4,-2.9).curveTo(-51.8,-1.4,-51.8,0.4).curveTo(-51.8,3.3,-53.5,6.7).curveTo(-54.9,10.3,-59.1,11.7).lineTo(-61.3,12.3).lineTo(-67.2,9.2).curveTo(-72.1,7.2,-73.6,3).curveTo(-74.8,0,-74.8,-2.9).curveTo(-74.8,-4.9,-74.2,-6.9).curveTo(-74.8,-4.9,-74.8,-2.9).curveTo(-74.8,0,-73.6,3).curveTo(-72.1,7.2,-67.2,9.2).lineTo(-61.3,12.3).closePath().moveTo(-128.1,28.5).curveTo(-142.2,25.7,-147,16.9).curveTo(-148,15.2,-148.6,13.3).curveTo(-153,-0.4,-152.6,-1.9).curveTo(-147.5,-20.2,-135,-26.2).curveTo(-131.6,-28,-127.5,-28.7).curveTo(-108.6,-32.6,-93.5,-13.2).curveTo(-90.5,-0.7,-95.1,12.3).curveTo(-96,14.8,-97.5,16.9).curveTo(-102.5,24,-114.3,27.5).lineTo(-118.7,28.5).lineTo(-123.1,29.3).curveTo(-125.8,29,-128.1,28.5).closePath().moveTo(-125.5,25.3).lineTo(-124.5,25.2).curveTo(-120,25.1,-115.6,24).curveTo(-112.6,23.2,-109.6,22).curveTo(-105.2,20,-102.9,16.9).curveTo(-101.9,15.5,-101.3,13.8).curveTo(-98.1,6.8,-96.2,-0.3).curveTo(-96,-1.9,-96,-3.4).curveTo(-96,-8.9,-98.9,-11.9).curveTo(-104.5,-18.4,-112.3,-21).curveTo(-104.5,-18.4,-98.9,-11.9).curveTo(-96,-8.9,-96,-3.4).curveTo(-96,-1.9,-96.2,-0.3).curveTo(-98.1,6.8,-101.3,13.8).curveTo(-101.9,15.5,-102.9,16.9).curveTo(-105.2,20,-109.6,22).curveTo(-112.6,23.2,-115.6,24).curveTo(-120,25.1,-124.5,25.2).lineTo(-125.5,25.3).lineTo(-125.5,25.3).lineTo(-125.6,25.3).curveTo(-129.2,25.3,-132.4,23.8).lineTo(-132.7,23.7).lineTo(-133,23.5).curveTo(-138.4,20.6,-141.2,16.9).curveTo(-142.6,15.1,-143.4,13).curveTo(-146.2,6.8,-147.2,0.4).curveTo(-147.4,-1.1,-147.4,-2.5).curveTo(-147.4,-5.3,-146.7,-8.1).curveTo(-145.5,-12.8,-140.1,-17.2).curveTo(-137.1,-19.8,-133.1,-20.9).curveTo(-137.1,-19.8,-140.1,-17.2).curveTo(-145.5,-12.8,-146.7,-8.1).curveTo(-147.4,-5.3,-147.4,-2.5).curveTo(-147.4,-1.1,-147.2,0.4).curveTo(-146.2,6.8,-143.4,13).curveTo(-142.6,15.1,-141.2,16.9).curveTo(-138.4,20.6,-133,23.5).lineTo(-132.7,23.7).lineTo(-132.4,23.8).curveTo(-129.2,25.3,-125.6,25.3).lineTo(-125.5,25.3).lineTo(-125.5,25.3).closePath().moveTo(-120.9,19.4).curveTo(-119.6,19.4,-118.1,19.1).lineTo(-118,19).lineTo(-117.8,19).lineTo(-110.3,16.1).curveTo(-103.6,12.2,-103.1,6.8).lineTo(-103,2.8).curveTo(-103,-0.7,-103.4,-4).curveTo(-104,-9.2,-106.8,-12.8).curveTo(-111.8,-18.3,-119.3,-20.6).lineTo(-119.5,-20.6).lineTo(-120.3,-20.8).lineTo(-120.6,-20.9).lineTo(-120.7,-20.9).curveTo(-124.1,-21.6,-127.3,-21.6).lineTo(-127.3,-21.6).lineTo(-127.3,-21.6).curveTo(-130,-21.6,-132.5,-21.1).lineTo(-132.6,-21.1).lineTo(-133,-21).lineTo(-133.1,-21).lineTo(-133.1,-20.9).lineTo(-133.1,-21).lineTo(-133,-21).lineTo(-132.6,-21.1).lineTo(-132.5,-21.1).curveTo(-130,-21.6,-127.3,-21.6).lineTo(-127.3,-21.6).lineTo(-127.3,-21.6).curveTo(-124.1,-21.6,-120.7,-20.9).lineTo(-120.6,-20.9).lineTo(-120.3,-20.8).lineTo(-119.5,-20.6).lineTo(-119.3,-20.6).curveTo(-111.8,-18.3,-106.8,-12.8).curveTo(-104,-9.2,-103.4,-4).curveTo(-103,-0.7,-103,2.8).lineTo(-103.1,6.8).curveTo(-103.6,12.2,-110.3,16.1).lineTo(-117.8,19).lineTo(-118,19).lineTo(-118.1,19.1).curveTo(-119.6,19.4,-120.9,19.4).lineTo(-120.9,19.4).lineTo(-121,19.4).curveTo(-124,19.3,-126.5,18).lineTo(-126.8,17.8).lineTo(-126.9,17.8).lineTo(-127,17.7).lineTo(-128,16.9).curveTo(-130.4,15.1,-132.6,11.6).lineTo(-134.5,6.7).lineTo(-132.6,11.6).curveTo(-130.4,15.1,-128,16.9).lineTo(-127,17.7).lineTo(-126.9,17.8).lineTo(-126.8,17.8).lineTo(-126.5,18).curveTo(-124,19.3,-121,19.4).lineTo(-120.9,19.4).lineTo(-120.9,19.4).closePath().moveTo(-121.7,15.8).lineTo(-121.2,15.8).lineTo(-121,15.7).lineTo(-119,15.5).curveTo(-114.5,14.7,-110.9,11.8).curveTo(-107.8,9.4,-107.1,6.4).curveTo(-106.7,5.1,-106.7,3.8).curveTo(-106.7,1.5,-107.8,-0.9).curveTo(-109.7,-5.5,-115.2,-9.2).lineTo(-115.3,-9.3).lineTo(-115.4,-9.3).lineTo(-115.5,-9.4).lineTo(-115.5,-9.4).curveTo(-119.4,-11.7,-125,-11.7).lineTo(-125,-11.7).lineTo(-125,-11.7).lineTo(-127,-11.6).lineTo(-127.6,-11.6).lineTo(-129.3,-11.3).curveTo(-133.1,-10.5,-137.4,-7.8).curveTo(-140.2,-3.9,-140.2,0.3).lineTo(-140.1,2).lineTo(-140.2,0.3).curveTo(-140.2,-3.9,-137.4,-7.8).curveTo(-133.1,-10.5,-129.3,-11.3).lineTo(-127.6,-11.6).lineTo(-127,-11.6).lineTo(-125,-11.7).lineTo(-125,-11.7).lineTo(-125,-11.7).curveTo(-119.4,-11.7,-115.5,-9.4).lineTo(-115.5,-9.4).lineTo(-115.4,-9.3).lineTo(-115.3,-9.3).lineTo(-115.2,-9.2).curveTo(-109.7,-5.5,-107.8,-0.9).curveTo(-106.7,1.5,-106.7,3.8).curveTo(-106.7,5.1,-107.1,6.4).curveTo(-107.8,9.4,-110.9,11.8).curveTo(-114.5,14.7,-119,15.5).lineTo(-121,15.7).lineTo(-121.2,15.8).lineTo(-121.7,15.8).lineTo(-121.7,15.8).lineTo(-121.8,15.8).curveTo(-123.7,15.8,-123.9,14.5).lineTo(-123.9,14.4).lineTo(-123.9,14.5).curveTo(-123.7,15.8,-121.8,15.8).lineTo(-121.7,15.8).lineTo(-121.7,15.8).closePath().moveTo(-122.6,12.3).lineTo(-120.4,11.7).curveTo(-116.2,10.3,-114.8,6.7).curveTo(-113.1,3.3,-113.1,0.4).curveTo(-113.1,-1.4,-113.7,-2.9).curveTo(-114.6,-5,-116.1,-6.9).lineTo(-116.1,-6.9).curveTo(-119.3,-10.5,-123.3,-10.5).lineTo(-123.3,-10.5).lineTo(-123.4,-10.5).lineTo(-125.1,-10.3).lineTo(-125.1,-10.3).lineTo(-125.1,-10.3).lineTo(-125.4,-10.3).curveTo(-126.9,-10,-128.4,-8.9).curveTo(-129.2,-8.4,-130,-7.5).curveTo(-131.8,-5.4,-131.8,-3.3).curveTo(-131.8,-2.7,-131.6,-2).curveTo(-130.3,2,-126.4,2.5).lineTo(-126.1,2.6).lineTo(-126.1,2.6).lineTo(-124.7,2.8).lineTo(-124.6,2.8).lineTo(-124.6,2.8).lineTo(-123.9,2.7).curveTo(-121.9,2.5,-120.4,0.9).curveTo(-119.1,-0.4,-119.1,-1.8).curveTo(-119.1,-2.3,-119.3,-2.9).curveTo(-119.9,-5,-122.5,-5.4).lineTo(-123.3,-5.5).lineTo(-123.3,-5.5).lineTo(-123.3,-5.5).curveTo(-124.6,-5.4,-125.8,-4.2).lineTo(-125.9,-4.1).lineTo(-126.3,-3.6).curveTo(-126.7,-3,-126.7,-2.2).curveTo(-126.7,-1.7,-126.5,-1.2).lineTo(-126.5,-1).lineTo(-126.4,-1).curveTo(-126,0.2,-125.2,0.2).lineTo(-125.2,0.2).lineTo(-125.2,0.2).lineTo(-125,0.2).lineTo(-125,0.2).lineTo(-124.9,0.1).lineTo(-124.4,-0.2).lineTo(-124.9,0.1).lineTo(-125,0.2).lineTo(-125,0.2).lineTo(-125.2,0.2).lineTo(-125.2,0.2).lineTo(-125.2,0.2).curveTo(-126,0.2,-126.4,-1).lineTo(-126.5,-1).lineTo(-126.5,-1.2).curveTo(-126.7,-1.7,-126.7,-2.2).curveTo(-126.7,-3,-126.3,-3.6).lineTo(-125.9,-4.1).lineTo(-125.8,-4.2).curveTo(-124.6,-5.4,-123.3,-5.5).lineTo(-123.3,-5.5).lineTo(-123.3,-5.5).lineTo(-122.5,-5.4).curveTo(-119.9,-5,-119.3,-2.9).curveTo(-119.1,-2.3,-119.1,-1.8).curveTo(-119.1,-0.4,-120.4,0.9).curveTo(-121.9,2.5,-123.9,2.7).lineTo(-124.6,2.8).lineTo(-124.6,2.8).lineTo(-124.7,2.8).lineTo(-126.1,2.6).lineTo(-126.1,2.6).lineTo(-126.4,2.5).curveTo(-130.3,2,-131.6,-2).curveTo(-131.8,-2.7,-131.8,-3.3).curveTo(-131.8,-5.4,-130,-7.5).curveTo(-129.2,-8.4,-128.4,-8.9).curveTo(-126.9,-10,-125.4,-10.3).lineTo(-125.1,-10.3).lineTo(-125.1,-10.3).lineTo(-125.1,-10.3).lineTo(-123.4,-10.5).lineTo(-123.3,-10.5).lineTo(-123.3,-10.5).curveTo(-119.3,-10.5,-116.1,-6.9).lineTo(-116.1,-6.9).curveTo(-114.6,-5,-113.7,-2.9).curveTo(-113.1,-1.4,-113.1,0.4).curveTo(-113.1,3.3,-114.8,6.7).curveTo(-116.2,10.3,-120.4,11.7).lineTo(-122.6,12.3).lineTo(-128.5,9.2).curveTo(-133.4,7.2,-134.9,3).curveTo(-136.1,0,-136.1,-2.9).curveTo(-136.1,-4.9,-135.5,-6.9).curveTo(-136.1,-4.9,-136.1,-2.9).curveTo(-136.1,0,-134.9,3).curveTo(-133.4,7.2,-128.5,9.2).lineTo(-122.6,12.3).closePath().moveTo(-189.4,28.5).curveTo(-203.5,25.7,-208.3,16.9).curveTo(-209.3,15.2,-209.9,13.3).curveTo(-214.3,-0.4,-213.9,-1.9).curveTo(-208.8,-20.2,-196.3,-26.2).curveTo(-192.9,-28,-188.8,-28.7).curveTo(-169.9,-32.6,-154.8,-13.2).curveTo(-151.8,-0.7,-156.4,12.3).curveTo(-157.3,14.8,-158.8,16.9).curveTo(-163.8,24,-175.6,27.5).lineTo(-180,28.5).lineTo(-184.4,29.3).curveTo(-187.1,29,-189.4,28.5).closePath().moveTo(-186.8,25.3).lineTo(-185.8,25.2).curveTo(-181.3,25.1,-176.9,24).curveTo(-173.9,23.2,-170.9,22).curveTo(-166.5,20,-164.2,16.9).curveTo(-163.2,15.5,-162.6,13.8).curveTo(-159.4,6.8,-157.5,-0.3).curveTo(-157.3,-1.9,-157.3,-3.4).curveTo(-157.3,-8.9,-160.2,-11.9).curveTo(-165.8,-18.4,-173.6,-21).curveTo(-165.8,-18.4,-160.2,-11.9).curveTo(-157.3,-8.9,-157.3,-3.4).curveTo(-157.3,-1.9,-157.5,-0.3).curveTo(-159.4,6.8,-162.6,13.8).curveTo(-163.2,15.5,-164.2,16.9).curveTo(-166.5,20,-170.9,22).curveTo(-173.9,23.2,-176.9,24).curveTo(-181.3,25.1,-185.8,25.2).lineTo(-186.8,25.3).lineTo(-186.8,25.3).lineTo(-186.9,25.3).curveTo(-190.5,25.3,-193.7,23.8).lineTo(-194,23.7).lineTo(-194.3,23.5).curveTo(-199.7,20.6,-202.5,16.9).curveTo(-203.9,15.1,-204.7,13).curveTo(-207.5,6.8,-208.5,0.4).curveTo(-208.7,-1.1,-208.7,-2.5).curveTo(-208.7,-5.3,-208,-8.1).curveTo(-206.8,-12.8,-201.4,-17.2).curveTo(-198.4,-19.8,-194.4,-20.9).lineTo(-194.4,-21).lineTo(-194.3,-21).lineTo(-193.9,-21.1).lineTo(-193.9,-21.1).curveTo(-191.4,-21.6,-188.6,-21.6).lineTo(-188.6,-21.6).lineTo(-188.6,-21.6).curveTo(-185.4,-21.6,-181.9,-20.9).lineTo(-181.9,-20.9).lineTo(-181.6,-20.8).lineTo(-180.8,-20.6).lineTo(-180.6,-20.6).curveTo(-173.1,-18.3,-168.1,-12.8).curveTo(-165.3,-9.2,-164.7,-4).curveTo(-164.3,-0.7,-164.3,2.8).lineTo(-164.4,6.8).curveTo(-164.9,12.2,-171.6,16.1).lineTo(-179.1,19).lineTo(-179.3,19).lineTo(-179.4,19.1).curveTo(-180.9,19.4,-182.2,19.4).lineTo(-182.2,19.4).lineTo(-182.3,19.4).curveTo(-185.2,19.3,-187.8,18).lineTo(-188.1,17.8).lineTo(-188.2,17.8).lineTo(-188.3,17.7).lineTo(-189.3,16.9).curveTo(-191.7,15.1,-193.9,11.6).lineTo(-195.8,6.7).lineTo(-193.9,11.6).curveTo(-191.7,15.1,-189.3,16.9).lineTo(-188.3,17.7).lineTo(-188.2,17.8).lineTo(-188.1,17.8).lineTo(-187.8,18).curveTo(-185.2,19.3,-182.3,19.4).lineTo(-182.2,19.4).lineTo(-182.2,19.4).curveTo(-180.9,19.4,-179.4,19.1).lineTo(-179.3,19).lineTo(-179.1,19).lineTo(-171.6,16.1).curveTo(-164.9,12.2,-164.4,6.8).lineTo(-164.3,2.8).curveTo(-164.3,-0.7,-164.7,-4).curveTo(-165.3,-9.2,-168.1,-12.8).curveTo(-173.1,-18.3,-180.6,-20.6).lineTo(-180.8,-20.6).lineTo(-181.6,-20.8).lineTo(-181.9,-20.9).lineTo(-181.9,-20.9).curveTo(-185.4,-21.6,-188.6,-21.6).lineTo(-188.6,-21.6).lineTo(-188.6,-21.6).curveTo(-191.4,-21.6,-193.9,-21.1).lineTo(-193.9,-21.1).lineTo(-194.3,-21).lineTo(-194.4,-21).lineTo(-194.4,-20.9).curveTo(-198.4,-19.8,-201.4,-17.2).curveTo(-206.8,-12.8,-208,-8.1).curveTo(-208.7,-5.3,-208.7,-2.5).curveTo(-208.7,-1.1,-208.5,0.4).curveTo(-207.5,6.8,-204.7,13).curveTo(-203.9,15.1,-202.5,16.9).curveTo(-199.7,20.6,-194.3,23.5).lineTo(-194,23.7).lineTo(-193.7,23.8).curveTo(-190.5,25.3,-186.9,25.3).lineTo(-186.8,25.3).lineTo(-186.8,25.3).closePath().moveTo(-183,15.8).lineTo(-182.5,15.8).lineTo(-182.3,15.7).lineTo(-180.3,15.5).curveTo(-175.8,14.7,-172.2,11.8).curveTo(-169.1,9.4,-168.4,6.4).curveTo(-168,5.1,-168,3.8).curveTo(-168,1.5,-169.1,-0.9).curveTo(-171,-5.5,-176.5,-9.2).lineTo(-176.6,-9.3).lineTo(-176.7,-9.3).lineTo(-176.8,-9.4).lineTo(-176.8,-9.4).curveTo(-180.7,-11.7,-186.3,-11.7).lineTo(-186.3,-11.7).lineTo(-186.3,-11.7).lineTo(-188.3,-11.6).lineTo(-188.9,-11.6).lineTo(-190.6,-11.3).curveTo(-194.4,-10.5,-198.7,-7.8).curveTo(-201.5,-3.9,-201.5,0.3).lineTo(-201.4,2).lineTo(-201.5,0.3).curveTo(-201.5,-3.9,-198.7,-7.8).curveTo(-194.4,-10.5,-190.6,-11.3).lineTo(-188.9,-11.6).lineTo(-188.3,-11.6).lineTo(-186.3,-11.7).lineTo(-186.3,-11.7).lineTo(-186.3,-11.7).curveTo(-180.7,-11.7,-176.8,-9.4).lineTo(-176.8,-9.4).lineTo(-176.7,-9.3).lineTo(-176.6,-9.3).lineTo(-176.5,-9.2).curveTo(-171,-5.5,-169.1,-0.9).curveTo(-168,1.5,-168,3.8).curveTo(-168,5.1,-168.4,6.4).curveTo(-169.1,9.4,-172.2,11.8).curveTo(-175.8,14.7,-180.3,15.5).lineTo(-182.3,15.7).lineTo(-182.5,15.8).lineTo(-183,15.8).lineTo(-183,15.8).lineTo(-183.1,15.8).curveTo(-185,15.8,-185.2,14.5).lineTo(-185.2,14.4).lineTo(-185.2,14.5).curveTo(-185,15.8,-183.1,15.8).lineTo(-183,15.8).lineTo(-183,15.8).closePath().moveTo(-183.9,12.3).lineTo(-181.7,11.7).curveTo(-177.5,10.3,-176.1,6.7).curveTo(-174.4,3.3,-174.4,0.4).curveTo(-174.4,-1.4,-175,-2.9).curveTo(-175.9,-5,-177.4,-6.9).lineTo(-177.4,-6.9).curveTo(-180.6,-10.5,-184.6,-10.5).lineTo(-184.6,-10.5).lineTo(-184.7,-10.5).lineTo(-186.4,-10.3).lineTo(-186.4,-10.3).lineTo(-186.4,-10.3).lineTo(-186.7,-10.3).curveTo(-188.2,-10,-189.7,-8.9).curveTo(-190.5,-8.4,-191.3,-7.5).curveTo(-193.1,-5.4,-193.1,-3.3).curveTo(-193.1,-2.7,-192.9,-2).curveTo(-191.6,2,-187.7,2.5).lineTo(-187.4,2.6).lineTo(-187.4,2.6).lineTo(-186.6,2.8).lineTo(-186.5,2.8).lineTo(-186,2.8).lineTo(-185.9,2.8).lineTo(-185.9,2.8).lineTo(-185.6,2.8).lineTo(-185.2,2.7).curveTo(-183.2,2.5,-181.7,0.9).curveTo(-180.4,-0.4,-180.4,-1.8).curveTo(-180.4,-2.3,-180.6,-2.9).curveTo(-181.2,-5,-183.8,-5.4).lineTo(-183.9,-5.4).lineTo(-184,-5.4).lineTo(-184.6,-5.5).lineTo(-184.6,-5.5).lineTo(-184.6,-5.5).curveTo(-185.9,-5.4,-187,-4.3).lineTo(-187.1,-4.2).lineTo(-187.2,-4.1).lineTo(-187.2,-4.1).lineTo(-187.6,-3.6).curveTo(-188,-3,-188,-2.2).curveTo(-188,-1.7,-187.8,-1.2).lineTo(-187.8,-1).lineTo(-187.7,-1).curveTo(-187.3,0.2,-186.5,0.2).lineTo(-186.5,0.2).lineTo(-186.5,0.2).lineTo(-186.3,0.2).lineTo(-186.3,0.2).lineTo(-186.2,0.1).lineTo(-185.7,-0.2).lineTo(-186.2,0.1).lineTo(-186.3,0.2).lineTo(-186.3,0.2).lineTo(-186.5,0.2).lineTo(-186.5,0.2).lineTo(-186.5,0.2).curveTo(-187.3,0.2,-187.7,-1).lineTo(-187.8,-1).lineTo(-187.8,-1.2).curveTo(-188,-1.7,-188,-2.2).curveTo(-188,-3,-187.6,-3.6).lineTo(-187.2,-4.1).lineTo(-187.2,-4.1).lineTo(-187.1,-4.2).lineTo(-187,-4.3).curveTo(-185.9,-5.4,-184.6,-5.5).lineTo(-184.6,-5.5).lineTo(-184.6,-5.5).lineTo(-184,-5.4).lineTo(-183.9,-5.4).lineTo(-183.8,-5.4).curveTo(-181.2,-5,-180.6,-2.9).curveTo(-180.4,-2.3,-180.4,-1.8).curveTo(-180.4,-0.4,-181.7,0.9).curveTo(-183.2,2.5,-185.2,2.7).lineTo(-185.6,2.8).lineTo(-185.9,2.8).lineTo(-185.9,2.8).lineTo(-186,2.8).lineTo(-186.5,2.8).lineTo(-186.6,2.8).lineTo(-187.4,2.6).lineTo(-187.4,2.6).lineTo(-187.7,2.5).curveTo(-191.6,2,-192.9,-2).curveTo(-193.1,-2.7,-193.1,-3.3).curveTo(-193.1,-5.4,-191.3,-7.5).curveTo(-190.5,-8.4,-189.7,-8.9).curveTo(-188.2,-10,-186.7,-10.3).lineTo(-186.4,-10.3).lineTo(-186.4,-10.3).lineTo(-186.4,-10.3).lineTo(-184.7,-10.5).lineTo(-184.6,-10.5).lineTo(-184.6,-10.5).curveTo(-180.6,-10.5,-177.4,-6.9).lineTo(-177.4,-6.9).curveTo(-175.9,-5,-175,-2.9).curveTo(-174.4,-1.4,-174.4,0.4).curveTo(-174.4,3.3,-176.1,6.7).curveTo(-177.5,10.3,-181.7,11.7).lineTo(-183.9,12.3).lineTo(-189.8,9.2).curveTo(-194.7,7.2,-196.2,3).curveTo(-197.4,0,-197.4,-2.9).curveTo(-197.4,-4.9,-196.8,-6.9).curveTo(-197.4,-4.9,-197.4,-2.9).curveTo(-197.4,0,-196.2,3).curveTo(-194.7,7.2,-189.8,9.2).lineTo(-183.9,12.3).closePath().moveTo(58.3,25.3).curveTo(54.7,25.3,51.4,23.8).lineTo(51.4,23.8).lineTo(50.9,23.5).curveTo(45.5,20.6,42.7,16.9).curveTo(41.3,15.1,40.5,13).curveTo(37.7,6.8,36.7,0.4).curveTo(36.5,-1.1,36.5,-2.5).curveTo(36.5,-5.3,37.2,-8.1).curveTo(38.4,-12.8,43.8,-17.2).curveTo(46.8,-19.8,50.8,-20.9).lineTo(50.8,-21).lineTo(51,-21).lineTo(51,-21).curveTo(47,-19.9,44,-17.3).curveTo(38.6,-12.9,37.4,-8.1).curveTo(36.7,-5.3,36.7,-2.6).curveTo(36.7,-1.1,36.9,0.3).curveTo(37.9,6.8,40.7,12.9).curveTo(41.5,15,42.9,16.9).curveTo(45.7,20.6,51.1,23.5).lineTo(51.2,23.6).lineTo(51.5,23.7).lineTo(51.7,23.8).curveTo(54.9,25.2,58.5,25.2).lineTo(58.6,25.2).lineTo(58.6,25.2).lineTo(59.6,25.2).lineTo(61.8,25.1).lineTo(59.4,25.2).lineTo(58.4,25.3).lineTo(58.4,25.3).lineTo(58.3,25.3).closePath().moveTo(195.2,22.6).lineTo(195.2,22.6).closePath().moveTo(72.8,22.6).lineTo(72.8,22.6).closePath().moveTo(74.3,22).curveTo(78.7,20,81,16.9).curveTo(82,15.5,82.6,13.8).curveTo(85.8,6.8,87.7,-0.3).curveTo(87.9,-1.9,87.9,-3.4).curveTo(87.9,-8.9,85,-11.9).curveTo(79.5,-18.3,71.7,-20.9).curveTo(79.6,-18.4,85.2,-11.9).curveTo(88.1,-9,88.1,-3.5).curveTo(88.1,-2,87.9,-0.3).curveTo(86,6.8,82.8,13.7).curveTo(82.2,15.4,81.2,16.9).curveTo(78.9,20,74.5,22).lineTo(72.8,22.6).lineTo(74.3,22).closePath().moveTo(185.3,19.4).curveTo(182.3,19.4,179.8,18).lineTo(179.5,17.8).lineTo(179.4,17.8).lineTo(179.3,17.7).lineTo(178.3,16.9).curveTo(175.9,15.1,173.7,11.6).lineTo(171.8,6.7).lineTo(173.9,11.6).curveTo(176.1,15.1,178.5,16.9).lineTo(179.5,17.6).curveTo(182.3,19.3,185.5,19.3).lineTo(185.5,19.3).lineTo(185.6,19.3).curveTo(186.8,19.3,188.2,19).lineTo(188.3,19).lineTo(188.6,19).lineTo(188.5,19).lineTo(188.3,19).lineTo(188.2,19.1).curveTo(186.7,19.4,185.4,19.4).lineTo(185.4,19.4).lineTo(185.3,19.4).closePath().moveTo(62.9,19.4).curveTo(59.9,19.4,57.4,18).lineTo(57.1,17.8).lineTo(57,17.8).lineTo(56.9,17.7).lineTo(55.9,16.9).curveTo(53.5,15.1,51.3,11.6).lineTo(49.4,6.7).lineTo(51.5,11.6).curveTo(53.7,15.1,56.1,16.9).lineTo(57.1,17.6).curveTo(59.9,19.3,63.1,19.3).lineTo(63.1,19.3).lineTo(63.2,19.3).curveTo(64.4,19.3,65.8,19).lineTo(65.9,19).lineTo(66.2,19).lineTo(66.1,19).lineTo(65.9,19).lineTo(65.8,19.1).curveTo(64.3,19.4,63,19.4).lineTo(63,19.4).lineTo(62.9,19.4).closePath().moveTo(188.6,19).lineTo(196,16.1).curveTo(202.7,12.2,203.2,6.8).lineTo(203.3,2.8).curveTo(203.3,-0.7,202.9,-4).curveTo(202.3,-9.2,199.5,-12.8).curveTo(194.5,-18.3,187,-20.6).curveTo(183.2,-21.5,179.9,-21.6).curveTo(183.3,-21.5,187.2,-20.7).curveTo(194.7,-18.3,199.7,-12.9).curveTo(202.5,-9.3,203.1,-4.1).curveTo(203.5,-0.8,203.5,2.7).lineTo(203.4,6.7).curveTo(202.9,12.1,196.2,16.1).lineTo(188.7,18.9).lineTo(188.6,19).closePath().moveTo(66.2,19).lineTo(73.6,16.1).curveTo(80.3,12.2,80.8,6.8).lineTo(80.9,2.8).curveTo(80.9,-0.7,80.5,-4).curveTo(79.9,-9.2,77.1,-12.8).curveTo(72.1,-18.3,64.6,-20.6).curveTo(60.8,-21.5,57.5,-21.6).curveTo(60.9,-21.5,64.8,-20.7).curveTo(72.3,-18.3,77.3,-12.9).curveTo(80.1,-9.3,80.7,-4.1).curveTo(81.1,-0.8,81.1,2.7).lineTo(81,6.7).curveTo(80.5,12.1,73.8,16.1).lineTo(66.3,18.9).lineTo(66.2,19).closePath().moveTo(179.9,-21.6).lineTo(179.9,-21.6).closePath().moveTo(57.5,-21.6).lineTo(57.5,-21.6).closePath();
	this.shape_6.setTransform(272.891,358.5562);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F3E0AD").beginStroke().moveTo(-1.2,28.5).lineTo(1.4,27.5).lineTo(1.8,27.3).lineTo(1.9,36.2).closePath().moveTo(-1.9,25.4).curveTo(-0.7,21.9,-0.1,18.6).lineTo(1.6,18.6).lineTo(1.7,23.2).lineTo(-1.9,25.8).lineTo(-1.9,25.4).closePath().moveTo(0.2,4.4).lineTo(0.1,3.5).curveTo(-0.2,0,-0.8,-3.5).lineTo(-0.8,-4.1).lineTo(1.1,-2.5).lineTo(1.2,4.4).closePath().moveTo(-0.7,-7.9).lineTo(-0.2,-20.8).lineTo(0.8,-20.8).lineTo(1,-6.5).closePath().moveTo(0.2,-34.9).lineTo(0.2,-34.9).lineTo(0.2,-36.2).lineTo(0.5,-36.2).lineTo(0.5,-34.9).closePath();
	this.shape_7.setTransform(423.5,277.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFEFCA").beginStroke().moveTo(-85.7,41.6).lineTo(-85.7,41.1).lineTo(-85.5,44.5).lineTo(-85.7,41.6).closePath().moveTo(36.6,32.9).lineTo(34.7,21.3).lineTo(34.3,19.3).lineTo(34,18).lineTo(36.9,15.7).lineTo(36.7,33.4).lineTo(36.6,32.9).closePath().moveTo(-23.5,33.1).curveTo(-25.8,24.9,-27.9,16.3).lineTo(-28.9,11.9).lineTo(-29.3,10.3).lineTo(-28.9,10.3).lineTo(-23.4,14.6).lineTo(-23.5,33.3).lineTo(-23.5,33.1).closePath().moveTo(93.3,10.3).lineTo(97.8,10.3).lineTo(97.7,30.3).curveTo(95.3,20,93.3,10.3).closePath().moveTo(-88.4,18.2).lineTo(-88.6,16.8).lineTo(-85.1,14.1).lineTo(-85.1,15.6).lineTo(-85.1,16.6).lineTo(-85.1,16.8).lineTo(-85.1,17.1).lineTo(-85.1,17.5).lineTo(-85.1,18.6).lineTo(-87.2,24.6).lineTo(-88.4,18.2).closePath().moveTo(156.2,17.6).lineTo(156.2,17.5).lineTo(156.3,17.4).lineTo(156.2,17.5).lineTo(156.2,17.3).lineTo(156.3,17).lineTo(156.3,17.4).lineTo(156.3,18.1).lineTo(156.2,17.6).closePath().moveTo(32.8,10.3).lineTo(37,10.3).lineTo(37,11.6).lineTo(33.4,14.3).lineTo(32.8,10.3).closePath().moveTo(-89.4,12.9).lineTo(-88.6,12.8).lineTo(-89.3,13.3).lineTo(-89.4,12.9).closePath().moveTo(153.1,-3.9).lineTo(152.5,-9.1).lineTo(152.2,-10.5).lineTo(154,-12.1).lineTo(154.7,-8.4).curveTo(155.1,-6.5,155.3,-4.8).lineTo(155.4,-3.9).closePath().moveTo(90.5,-3.9).curveTo(87.9,-17,86,-29.1).lineTo(97.9,-29.1).lineTo(97.9,-26.9).lineTo(97.9,-20.7).lineTo(97.8,-3.9).closePath().moveTo(31.1,-3.9).lineTo(31,-4.8).curveTo(30.7,-8.6,30,-12.3).lineTo(37.2,-6.2).lineTo(37.2,-3.9).closePath().moveTo(-32.4,-3.9).curveTo(-34.9,-16.2,-37.1,-29.1).lineTo(-23.4,-29.1).lineTo(-23.4,-7.7).lineTo(-26.5,-4.8).lineTo(-27.5,-3.9).closePath().moveTo(-92.1,-3.9).lineTo(-93,-9.5).lineTo(-93.3,-11.4).lineTo(-85.5,-4.7).lineTo(-85.5,-3.9).closePath().moveTo(-149.1,-3.9).lineTo(-146.8,-6).lineTo(-146.8,-4.4).lineTo(-146.8,-3.9).closePath().moveTo(-153.7,-3.9).lineTo(-154.6,-10.3).lineTo(-155.4,-16.6).lineTo(-156.3,-24.1).lineTo(-147,-24.5).lineTo(-146.9,-9.8).lineTo(-152.4,-4.8).lineTo(-153.3,-3.9).closePath().moveTo(-85.5,-8.6).lineTo(-85.5,-8.6).lineTo(-85.5,-8.6).lineTo(-85.7,-27.3).lineTo(-85.5,-8.6).lineTo(-93.9,-15.9).lineTo(-94.5,-19.2).lineTo(-95.5,-26.8).lineTo(-85.7,-27.3).lineTo(-85.4,-27.3).curveTo(-85.3,-17.9,-85.5,-8.6).lineTo(-85.5,-8).lineTo(-85.5,-8.6).closePath().moveTo(29.1,-17.1).curveTo(28.5,-17.3,28.4,-16.9).lineTo(26.5,-29.1).lineTo(37.4,-29.1).lineTo(37.2,-10).closePath().moveTo(157.2,-12.6).lineTo(157.4,-12.4).lineTo(157.4,-11.8).lineTo(157.2,-12.6).closePath().moveTo(149.8,-29.1).lineTo(158,-29.1).lineTo(157.5,-16.3).lineTo(156.4,-17.3).curveTo(155.7,-17.6,155.6,-16.5).curveTo(153.6,-17.8,153.3,-15.8).lineTo(151.8,-14.2).lineTo(149.8,-29.1).closePath().moveTo(148,-43.2).lineTo(147.9,-44.5).lineTo(158.4,-44.5).lineTo(158.4,-43.3).lineTo(158.4,-43.2).closePath().moveTo(83.7,-43.2).lineTo(83.5,-44.5).lineTo(98,-44.5).lineTo(98,-43.2).closePath().moveTo(24.4,-43.2).lineTo(24.2,-44.5).lineTo(37.6,-44.5).lineTo(37.6,-43.2).closePath().moveTo(-39.2,-43.2).lineTo(-39.3,-44.5).lineTo(-23.4,-44.5).lineTo(-23.4,-43.2).closePath().moveTo(-85.8,-43.2).lineTo(-85.8,-44.5).lineTo(-85.8,-43.2).lineTo(-97.4,-43.2).lineTo(-97.5,-44.5).lineTo(-85.8,-44.5).lineTo(-85.7,-44.5).lineTo(-85.7,-43.2).closePath().moveTo(-158.4,-43.2).lineTo(-158.5,-44.5).lineTo(-147,-44.5).lineTo(-147,-43.2).closePath();
	this.shape_8.setTransform(265.3,285.4026);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCB798").beginStroke().moveTo(-212.1,74.4).lineTo(-212.3,59.1).lineTo(-207.3,59).lineTo(-210.1,61.4).lineTo(-212.3,62).lineTo(-212.2,66.2).lineTo(-205.5,61.7).lineTo(-190.8,73.2).lineTo(-212.1,74.4).closePath().moveTo(-185.8,72.9).lineTo(-203.2,59.1).lineTo(-193.6,50.8).lineTo(-183.5,50.8).lineTo(-175.2,50.8).lineTo(-166.4,58.2).lineTo(-169.2,60.6).lineTo(-169.7,61).curveTo(-175.2,65.4,-180.8,69.6).lineTo(-185.2,72.8).lineTo(-185.5,72.9).lineTo(-184.5,69.8).curveTo(-182.9,64.2,-182.9,58.6).lineTo(-183,56.7).curveTo(-183.1,53.6,-183.5,50.8).curveTo(-183.1,53.6,-183,56.7).lineTo(-182.9,58.6).curveTo(-182.9,64.2,-184.5,69.8).lineTo(-185.5,72.9).closePath().moveTo(-164.6,60.9).lineTo(-151.9,70.9).lineTo(-154.9,71.1).lineTo(-179.2,72.5).closePath().moveTo(198.8,69.9).lineTo(211.1,60.2).lineTo(211.2,60.6).lineTo(212.7,70.8).lineTo(212.8,71.6).closePath().moveTo(-162.3,58.4).lineTo(-153.6,50.8).lineTo(-151.2,50.8).lineTo(-151,50.8).lineTo(-143.9,50.8).curveTo(-143.2,56.1,-143.8,60.4).curveTo(-144,64.3,-144.7,68.1).lineTo(-145.1,70.5).lineTo(-146.8,70.6).closePath().moveTo(-142.5,70.4).lineTo(-140.6,60.9).curveTo(-140.5,56.7,-140.8,52.6).lineTo(-140.5,56.2).lineTo(-140.5,58.2).curveTo(-140.5,63.2,-141.7,68).lineTo(-142.3,70.4).lineTo(-141.7,68).curveTo(-140.5,63.2,-140.5,58.2).lineTo(-140.5,56.2).lineTo(-140.8,52.6).lineTo(-140.9,50.8).lineTo(-132.2,50.8).lineTo(-124,57.8).curveTo(-130.2,62.9,-136.5,67.8).lineTo(-139.8,70.2).lineTo(-142.3,70.4).closePath().moveTo(-122.1,60.4).lineTo(-111.8,68.6).lineTo(-121.1,69.1).lineTo(-134.1,69.9).closePath().moveTo(189.5,68.9).lineTo(175.1,57.4).lineTo(192.1,42.5).lineTo(192.7,46.2).lineTo(193.4,49.9).curveTo(194.1,55.2,193.4,59.5).curveTo(193.2,64.4,192.3,69.2).closePath().moveTo(196.6,59.9).curveTo(196.7,54.8,196.3,49.9).curveTo(196,46.3,195.4,42.7).lineTo(210.4,55.4).lineTo(210.6,56.5).lineTo(208.4,58.4).lineTo(207.9,58.8).curveTo(202.4,63.3,196.8,67.4).lineTo(194.8,68.9).closePath().moveTo(-119.8,57.9).lineTo(-111.7,50.8).lineTo(-101.4,50.8).curveTo(-100.8,55.8,-101.4,59.9).curveTo(-101.5,63.1,-102,66.3).lineTo(-102.3,68).lineTo(-106.6,68.3).closePath().moveTo(165.2,66).lineTo(172.7,60).lineTo(182.9,68.1).closePath().moveTo(-98.2,60.3).curveTo(-98.1,55.5,-98.4,50.8).lineTo(-97.8,50.8).lineTo(-96.8,50.8).lineTo(-96.5,50.8).lineTo(-89.9,50.8).lineTo(-89.8,50.8).lineTo(-88.9,50.8).lineTo(-80.8,57.6).lineTo(-87.6,63.3).lineTo(-90.9,65.9).lineTo(-93.1,67.5).lineTo(-93.8,67.5).lineTo(-94.2,67.5).lineTo(-98.5,67.8).lineTo(-98.1,66.2).curveTo(-97.3,62.2,-97.3,58.1).lineTo(-97.3,56.1).curveTo(-97.5,53.3,-97.8,50.8).curveTo(-97.5,53.3,-97.3,56.1).lineTo(-97.3,58.1).curveTo(-97.3,62.2,-98.1,66.2).lineTo(-98.5,67.8).lineTo(-99.7,67.9).closePath().moveTo(-78.9,60.3).lineTo(-71.4,66.2).lineTo(-87.6,67.2).closePath().moveTo(-76.6,57.8).lineTo(-68.6,50.8).lineTo(-58.1,50.8).curveTo(-57.6,55.8,-58.2,59.8).curveTo(-58.3,62.2,-58.6,64.5).lineTo(-58.7,65.5).lineTo(-59.6,65.5).lineTo(-66.3,66).closePath().moveTo(-55,60.2).curveTo(-54.9,55.5,-55.2,50.8).lineTo(-49.1,50.8).lineTo(-40.5,58.1).curveTo(-43.6,60.8,-46.9,63.4).lineTo(-47.8,64.1).lineTo(-48.4,64.5).lineTo(-49.4,65.4).lineTo(-56,65.5).closePath().moveTo(156.5,65).lineTo(155.3,65).lineTo(153.7,65).lineTo(153.8,64.1).curveTo(154.5,59.9,154.3,55.8).lineTo(154.1,53.5).lineTo(154.1,52.7).lineTo(154,50.8).lineTo(155,50.8).lineTo(155.1,50.8).lineTo(160.8,48.8).lineTo(170.3,56.8).lineTo(170.2,56.8).lineTo(170.2,56.9).lineTo(169.8,57.2).lineTo(170.2,56.8).lineTo(169.8,57.2).lineTo(165.4,61.9).lineTo(161.7,64.7).lineTo(160.8,65.4).closePath().moveTo(-38.6,60.8).lineTo(-36.3,58.2).lineTo(-36.1,58.4).lineTo(-38.6,60.8).lineTo(-33.3,65).lineTo(-33.7,65).lineTo(-44.2,65.2).closePath().moveTo(150.3,65).lineTo(141.9,65).lineTo(132.5,57.6).lineTo(140.3,50.8).lineTo(148.2,50.8).lineTo(148.7,50.8).lineTo(151,50.8).curveTo(151.6,55.7,151,59.6).curveTo(150.9,61.9,150.6,64.1).lineTo(150.5,65).closePath().moveTo(124.1,65).lineTo(130.2,60.1).lineTo(136.4,65).closePath().moveTo(111.3,65).lineTo(111.4,64.1).curveTo(111.9,61,111.9,57.9).lineTo(111.8,55.9).lineTo(111.7,53.2).lineTo(111.5,50.8).lineTo(120.5,50.8).lineTo(128.4,57.4).curveTo(124.3,60.8,120.3,64.1).lineTo(119.1,65).closePath().moveTo(111.3,65).lineTo(110.7,65).lineTo(111.7,59.9).curveTo(111.8,56.5,111.7,53.2).lineTo(111.8,55.9).lineTo(111.9,57.9).curveTo(111.9,61,111.4,64.1).lineTo(111.3,65).closePath().moveTo(99.6,65).lineTo(90.1,57.4).lineTo(97.7,50.8).lineTo(108.6,50.8).curveTo(109.1,55.6,108.5,59.4).curveTo(108.4,61.7,108.1,64.1).lineTo(108,65).closePath().moveTo(93.8,65).lineTo(93.3,65).lineTo(88.9,65).lineTo(81.5,65).lineTo(87.8,59.9).lineTo(94.1,65).closePath().moveTo(68.8,65).lineTo(68.9,64.1).curveTo(69.4,60.9,69.4,57.7).lineTo(69.4,55.9).lineTo(69.4,55.7).lineTo(69.1,52.5).lineTo(69,50.8).lineTo(78.3,50.8).lineTo(85.9,57.3).curveTo(81.8,60.7,77.6,64.1).lineTo(76.5,65).closePath().moveTo(68.8,65).lineTo(68.3,65).lineTo(69.3,60.1).curveTo(69.4,56.2,69.1,52.5).lineTo(69.4,55.7).lineTo(69.4,55.9).lineTo(69.4,57.7).curveTo(69.4,60.9,68.9,64.1).lineTo(68.8,65).closePath().moveTo(56.9,65).lineTo(47.6,57.7).lineTo(55.5,50.8).lineTo(66.1,50.8).curveTo(66.7,55.7,66.1,59.7).curveTo(66,61.9,65.7,64.1).lineTo(65.6,65).closePath().moveTo(39.3,65).lineTo(45.3,60.2).lineTo(51.4,65).closePath().moveTo(14.8,65).lineTo(5.2,57.4).lineTo(12.8,50.8).lineTo(23.7,50.8).curveTo(24.3,55.6,23.7,59.4).curveTo(23.6,61.7,23.3,64.1).lineTo(23.2,65).closePath().moveTo(-1.4,65).lineTo(-1.6,65).lineTo(-3.3,65).lineTo(2.9,59.9).lineTo(9.3,65).closePath().moveTo(-15.5,65).lineTo(-14.7,60.7).curveTo(-14.5,55.7,-14.9,50.8).lineTo(-6.6,50.8).lineTo(1.1,57.3).curveTo(-3,60.7,-7.2,64.1).lineTo(-8.4,65).closePath().moveTo(-27.8,65).lineTo(-36.1,58.4).lineTo(-27.7,50.8).lineTo(-17.9,50.8).curveTo(-17.2,56,-17.9,60.2).lineTo(-18.2,64.1).lineTo(-18.3,65).closePath().moveTo(-212.3,59.1).lineTo(-212.4,58.1).lineTo(-212.4,56.9).lineTo(-212.3,57.3).lineTo(-212.3,59.1).closePath().moveTo(-212.4,52.7).lineTo(-212.5,50.8).lineTo(-197.8,50.8).lineTo(-205.2,57.2).closePath().moveTo(-170.8,50.8).lineTo(-158.5,50.8).lineTo(-158.1,50.8).lineTo(-157.8,50.8).lineTo(-164.3,56.4).closePath().moveTo(-44.7,50.8).lineTo(-36.8,50.8).lineTo(-32,50.8).lineTo(-38.3,56.3).closePath().moveTo(-127.8,50.8).lineTo(-115.9,50.8).lineTo(-121.8,56).closePath().moveTo(-84.5,50.8).lineTo(-72.8,50.8).lineTo(-78.6,55.8).closePath().moveTo(39.9,50.8).lineTo(51.3,50.8).lineTo(45.6,55.7).closePath().moveTo(124.9,50.8).lineTo(136.2,50.8).lineTo(135.5,51.3).lineTo(130.5,55.6).closePath().moveTo(82.7,50.8).lineTo(86.1,50.8).lineTo(93.4,50.8).lineTo(93.5,50.8).lineTo(88.1,55.5).closePath().moveTo(-2.2,50.8).lineTo(8.7,50.8).lineTo(3.2,55.5).closePath().moveTo(172.1,54.8).lineTo(163.9,47.7).lineTo(190.6,38.4).lineTo(188.2,40.8).lineTo(188.1,40.9).lineTo(180.8,47.7).lineTo(179.9,48.4).lineTo(179.8,48.6).lineTo(172.4,55).closePath().moveTo(193.8,37.4).lineTo(207,32.7).lineTo(207.1,32.7).lineTo(209.8,51.2).closePath().moveTo(190.8,38.4).lineTo(191.6,38.1).curveTo(191.4,38.4,191.3,38.8).lineTo(191.3,38.9).closePath().moveTo(-212.6,32).lineTo(-212.8,11.4).lineTo(-163.2,11.4).lineTo(-162.8,11.4).lineTo(-151.5,11.4).lineTo(-150.8,11.4).lineTo(-101.8,11.4).lineTo(-90.2,11.4).lineTo(-90.1,11.4).lineTo(-43.6,11.4).lineTo(-27.8,11.4).lineTo(20,11.4).lineTo(33.1,11.4).lineTo(79.3,11.4).lineTo(93.6,11.4).lineTo(143.1,11.4).lineTo(143.6,11.4).lineTo(154,11.4).lineTo(154.2,11.4).lineTo(154.8,11.4).lineTo(204.4,11.4).lineTo(207.1,32.7).lineTo(207,32.7).lineTo(155.1,25.6).lineTo(154.9,25.6).lineTo(154.5,25.6).lineTo(153.6,25.6).lineTo(145.4,25.6).lineTo(144.9,25.6).lineTo(93.5,25.6).lineTo(81.5,25.6).lineTo(33,25.6).lineTo(22.1,25.6).lineTo(-27.8,25.6).lineTo(-41.5,25.6).lineTo(-50.8,25.6).lineTo(-89.8,27.4).lineTo(-90.1,27.4).lineTo(-99.9,27.8).lineTo(-150.9,30.2).lineTo(-151.4,30.2).lineTo(-160.8,30.6).lineTo(-160.8,30.6).lineTo(-212.6,32.9).lineTo(-212.6,32).closePath().moveTo(-212.6,-34.7).lineTo(-181.5,-34.7).lineTo(-181.5,-14.5).lineTo(-212.7,-13).closePath().moveTo(180.4,-17.7).lineTo(180.4,-34.7).lineTo(199.1,-34.7).lineTo(200.1,-26.4).lineTo(201.3,-15.3).closePath().moveTo(-212.4,-53.4).lineTo(-212.3,-58.7).lineTo(-207.3,-62.6).lineTo(-196.5,-54.1).lineTo(-212.4,-53.4).closePath().moveTo(192.8,-54.4).lineTo(192.9,-54.7).lineTo(192.9,-54.8).lineTo(194.8,-64.3).curveTo(194.9,-69.4,194.5,-74.4).lineTo(194.8,-74.4).lineTo(197.1,-53.7).closePath().moveTo(-205,-65.2).lineTo(-194.5,-74.4).lineTo(-185.5,-74.4).lineTo(-181.5,-74.4).lineTo(-181.5,-55.5).lineTo(-182.6,-54.7).lineTo(-186.3,-54.5).curveTo(-184.8,-60.1,-184.8,-65.7).lineTo(-184.8,-67.6).curveTo(-185,-71.1,-185.5,-74.4).curveTo(-185,-71.1,-184.8,-67.6).lineTo(-184.8,-65.7).curveTo(-184.8,-60.1,-186.3,-54.5).lineTo(-191.3,-54.4).closePath().moveTo(187.9,-55.2).lineTo(180.4,-61.1).lineTo(180.4,-73.1).lineTo(181.8,-74.4).lineTo(191.5,-74.4).curveTo(192.2,-69,191.6,-64.8).curveTo(191.3,-59.7,190.3,-54.8).closePath().moveTo(180.4,-56.3).lineTo(180.4,-56.8).lineTo(181,-56.2).closePath().moveTo(-212.1,-66.7).lineTo(-212.1,-67.8).lineTo(-212.1,-67.8).lineTo(-212.1,-66.7).lineTo(-212.1,-67.8).lineTo(-209.2,-65.3).lineTo(-212,-63).lineTo(-212.2,-62.7).closePath().moveTo(-212,-71.4).lineTo(-212,-71.4).lineTo(-212,-73.8).lineTo(-212,-74.4).lineTo(-198.7,-74.4).lineTo(-199.5,-73.6).lineTo(-207,-67.1).closePath();
	this.shape_9.setTransform(269.725,230.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#83A4AC").beginStroke().moveTo(-186.4,81.3).lineTo(-186.6,81.2).lineTo(-186.4,80.5).lineTo(-186,80).lineTo(-184.9,78.2).lineTo(-184.6,77.9).lineTo(-180.1,74.7).curveTo(-174.6,70.6,-169.1,66.1).lineTo(-168.6,65.7).lineTo(-165.8,63.4).lineTo(-174.6,55.9).lineTo(-185.1,47).lineTo(-186.2,49.9).lineTo(-193,55.9).lineTo(-202.5,64.3).lineTo(-185.2,78).lineTo(-184.9,78.2).lineTo(-186,80).lineTo(-186.4,80.5).lineTo(-186.6,81.2).lineTo(-190.2,78.3).lineTo(-204.8,66.8).lineTo(-202.5,64.3).lineTo(-204.8,66.8).lineTo(-211.6,71.4).lineTo(-211.6,67.1).lineTo(-209.5,66.5).lineTo(-206.7,64.1).lineTo(-211.7,64.3).lineTo(-211.7,62.5).lineTo(-211.7,61.5).lineTo(-211.7,59).lineTo(-211.8,57.8).lineTo(-204.5,62.3).lineTo(-197.2,55.9).lineTo(-197,55.8).lineTo(-196.2,55).lineTo(-188.9,48.2).lineTo(-188.7,48.1).lineTo(-186.2,45.5).lineTo(-185.1,47).curveTo(-186,42.8,-184.6,43.4).lineTo(-170.1,55.9).lineTo(-163.6,61.6).lineTo(-157.1,55.9).lineTo(-156.1,55).lineTo(-150.6,50).lineTo(-150.4,49.7).lineTo(-148,47.4).lineTo(-147.8,47.3).lineTo(-145.3,44.8).curveTo(-145,42.8,-143,44.1).curveTo(-143.1,42.5,-142.2,42.9).lineTo(-127.1,55.9).lineTo(-121.2,61.1).lineTo(-115.2,55.9).lineTo(-114.2,55).lineTo(-109.7,50.9).lineTo(-109.5,50.7).lineTo(-102.8,44.3).curveTo(-102.4,42,-99.8,44.2).curveTo(-99.9,42.4,-99,42.8).lineTo(-97.8,43.8).lineTo(-97.7,43.8).lineTo(-89.3,51.2).lineTo(-89.3,51.7).lineTo(-89.2,51.2).lineTo(-83.8,55.9).lineTo(-78,60.9).lineTo(-72.1,55.9).lineTo(-71.1,55).curveTo(-65.3,49.7,-59.6,44.2).lineTo(-59.4,43.5).lineTo(-59.2,43.3).curveTo(-58.5,42.4,-56.3,44.3).lineTo(-56.1,45.5).lineTo(-44,55.9).lineTo(-37.7,61.4).lineTo(-39.8,63.2).lineTo(-48.4,55.9).lineTo(-55.2,50.1).curveTo(-54.9,52.6,-54.7,55).lineTo(-54.6,55.9).curveTo(-54.2,60.6,-54.3,65.3).lineTo(-55.3,70.6).lineTo(-56.5,76.3).lineTo(-48.7,70.5).lineTo(-47.7,69.7).lineTo(-47.1,69.2).lineTo(-46.2,68.5).curveTo(-43,65.9,-39.8,63.2).lineTo(-37.7,61.4).lineTo(-31.3,55.9).lineTo(-30.3,55).lineTo(-27.2,52.1).lineTo(-25.5,50.6).lineTo(-25.2,50.3).lineTo(-19.3,44.6).lineTo(-18.6,48.3).lineTo(-27,55.9).lineTo(-35.4,63.5).lineTo(-27.1,70.1).lineTo(-24.9,71.9).lineTo(-24.8,71.9).lineTo(-18.8,76.7).curveTo(-18,73.4,-17.6,70.1).lineTo(-17.5,69.2).lineTo(-17.2,65.3).curveTo(-16.6,61.2,-17.2,55.9).lineTo(-17.4,55).lineTo(-17.9,52.1).lineTo(-18.6,48.3).lineTo(-19.3,44.6).curveTo(-19.1,43.2,-17.9,43.5).curveTo(-18,42.1,-17.1,42.5).lineTo(-1.6,55.9).lineTo(3.9,60.6).lineTo(1.7,62.4).lineTo(-5.9,55.9).lineTo(-15.4,47.9).lineTo(-16,44.7).curveTo(-17.2,43.7,-17.9,43.5).curveTo(-17.2,43.7,-16,44.7).lineTo(-15.4,47.9).curveTo(-14.8,51.4,-14.4,55).lineTo(-14.3,55.9).curveTo(-13.9,60.8,-14,65.8).lineTo(-14.9,70.1).lineTo(-16.1,76.4).curveTo(-11.9,73.3,-7.7,70.1).lineTo(-6.6,69.2).curveTo(-2.4,65.8,1.7,62.4).lineTo(3.9,60.6).lineTo(9.3,55.9).lineTo(10.3,55).lineTo(11.7,53.7).lineTo(13.3,52.3).curveTo(17.8,48.2,22.2,43.8).curveTo(22.5,41.9,24.5,43.2).lineTo(24.7,43.3).lineTo(24.8,43.8).lineTo(24.7,43.3).lineTo(25.5,44).lineTo(26.2,47.5).lineTo(25.5,44).lineTo(24.7,43.3).lineTo(24.6,42.9).curveTo(24.8,42.5,25.3,42.7).lineTo(33.4,49.8).lineTo(40.6,55.9).lineTo(46.3,60.8).lineTo(52,55.9).lineTo(53,55).curveTo(58.9,49.7,64.6,44.1).lineTo(65.4,47.8).lineTo(56.2,55.9).lineTo(48.3,62.8).lineTo(57.5,70.1).lineTo(63.4,74.7).lineTo(65.2,76.1).lineTo(64.2,79.7).lineTo(63.2,78.8).lineTo(52,70.1).lineTo(46,65.3).lineTo(48.3,62.8).lineTo(46,65.3).lineTo(40,70.1).lineTo(33.7,75.1).lineTo(33.2,75.5).lineTo(30.3,77.8).lineTo(30.1,77.9).lineTo(28.5,79.2).lineTo(23.7,80.9).curveTo(23.2,81.2,23.6,80.1).curveTo(24.5,79.8,24.9,77.9).lineTo(25,77.5).lineTo(24.9,77.9).curveTo(24.5,79.8,23.6,80.1).curveTo(22.9,80.4,21.8,79.5).lineTo(22.8,75.9).curveTo(23.4,73,23.8,70.1).lineTo(23.9,69.2).curveTo(24.2,66.9,24.3,64.5).curveTo(24.9,60.7,24.4,55.9).lineTo(24.3,55).lineTo(23.6,51.3).lineTo(23,47.6).lineTo(22.2,43.8).lineTo(23,47.6).lineTo(13.5,55.9).lineTo(5.9,62.6).lineTo(15.4,70.1).lineTo(22.8,75.9).lineTo(21.8,79.5).lineTo(9.9,70.1).lineTo(3.6,65.1).lineTo(5.9,62.6).lineTo(3.6,65.1).lineTo(-2.7,70.1).lineTo(-13.9,78.9).lineTo(-17.1,80.1).curveTo(-16.8,79.6,-16.6,78.7).lineTo(-16.1,76.4).lineTo(-16.6,78.7).curveTo(-16.8,79.6,-17.1,80.1).curveTo(-18,81.7,-19.7,80.3).lineTo(-18.8,76.7).lineTo(-19.7,80.3).lineTo(-27.2,74.4).lineTo(-32.6,70.1).lineTo(-38,65.9).lineTo(-35.4,63.5).lineTo(-35.7,63.4).lineTo(-38,65.9).lineTo(-43.6,70.3).lineTo(-55.5,79.7).lineTo(-59.6,81.3).lineTo(-59.5,80.2).lineTo(-59.4,77.5).lineTo(-59.1,76.2).curveTo(-58.4,73.4,-58,70.7).lineTo(-57.9,69.6).curveTo(-57.6,67.3,-57.5,64.9).curveTo(-56.9,60.9,-57.5,55.9).lineTo(-57.6,55).lineTo(-58.2,51.6).lineTo(-58.9,47.9).lineTo(-59.6,44.2).lineTo(-58.9,47.9).lineTo(-68,55.9).lineTo(-76,62.9).lineTo(-78.3,65.4).lineTo(-76,62.9).lineTo(-65.6,71.1).lineTo(-59.3,76.1).lineTo(-59.4,77.5).lineTo(-60,79.8).lineTo(-70.8,71.4).lineTo(-78.3,65.4).lineTo(-86.9,72.3).lineTo(-88.9,73.8).lineTo(-88.9,72.4).lineTo(-88.9,72.4).lineTo(-88.9,73.8).lineTo(-88.9,73.9).lineTo(-92.4,76.6).lineTo(-92.8,76.9).lineTo(-95.8,79.3).lineTo(-100.5,81).curveTo(-101.5,81.5,-99.3,77.6).lineTo(-93.5,73.4).lineTo(-93,73.1).lineTo(-92.4,72.6).lineTo(-90.3,71).lineTo(-87,68.4).lineTo(-80.1,62.7).lineTo(-88.2,55.9).lineTo(-89.2,55.1).lineTo(-89.2,52.9).lineTo(-89.3,52.6).lineTo(-89.3,52.8).lineTo(-89.2,55.1).lineTo(-97.1,48.4).lineTo(-97.2,48.2).lineTo(-99,46.8).lineTo(-99.5,44.4).lineTo(-99.8,44.2).lineTo(-99.5,44.4).lineTo(-99,46.8).lineTo(-98.7,48.5).curveTo(-98.2,51.7,-97.9,55).lineTo(-97.8,55.9).curveTo(-97.4,60.6,-97.5,65.4).lineTo(-99,73).lineTo(-100.1,78.3).curveTo(-100.9,81.9,-103.2,79.9).lineTo(-102.3,76.3).lineTo(-103.2,79.9).lineTo(-111.1,73.7).lineTo(-121.5,65.5).lineTo(-119.2,63).lineTo(-121.5,65.5).lineTo(-133.4,75).lineTo(-139,79.4).lineTo(-143.7,81.1).curveTo(-143.8,81.1,-143.8,81.2).curveTo(-143.9,81.2,-143.9,81.2).curveTo(-144,81.2,-144,81.2).curveTo(-144,81.1,-144,81.1).curveTo(-143,80.9,-142.6,78.8).lineTo(-142.3,77.6).lineTo(-139.1,75.3).lineTo(-135.8,72.9).curveTo(-129.5,68,-123.3,62.9).lineTo(-121.2,61.1).lineTo(-123.3,62.9).lineTo(-131.5,55.9).lineTo(-141.4,47.5).lineTo(-142,44.9).lineTo(-143,44.1).lineTo(-142,44.9).lineTo(-141.4,47.5).curveTo(-140.7,51.2,-140.4,55).lineTo(-140.3,55.9).lineTo(-140.1,57.7).curveTo(-139.9,61.8,-140,66).lineTo(-141.9,75.5).lineTo(-142.2,76.9).lineTo(-142.3,77.6).lineTo(-142.6,78.8).curveTo(-143,80.9,-144,81.1).curveTo(-144.7,81.2,-145.7,80.4).lineTo(-144.7,76.8).lineTo(-144.5,75.6).lineTo(-144,73.2).curveTo(-143.4,69.4,-143.2,65.5).curveTo(-142.5,61.3,-143.2,55.9).lineTo(-143.4,55).lineTo(-143.9,52.2).lineTo(-144.5,48.5).lineTo(-145.3,44.8).lineTo(-144.5,48.5).lineTo(-150.4,53.6).lineTo(-150.6,53.8).lineTo(-152.9,55.9).lineTo(-161.6,63.5).lineTo(-146.1,75.7).lineTo(-144.7,76.8).lineTo(-145.7,80.4).lineTo(-151.2,76).lineTo(-163.9,66).lineTo(-161.6,63.5).lineTo(-163.9,66).lineTo(-178.6,77.6).lineTo(-181.4,79.8).lineTo(-182.1,80.2).lineTo(-186.1,81.6).lineTo(-186.4,81.3).closePath().moveTo(-58.5,80.5).curveTo(-57.5,80.5,-57,78.4).lineTo(-56.9,78.2).lineTo(-56.5,76.3).lineTo(-56.9,78.2).lineTo(-57,78.4).curveTo(-57.5,80.5,-58.5,80.5).lineTo(-58.6,80.5).lineTo(-58.6,80.5).curveTo(-59,80.5,-59.4,80.2).lineTo(-59.4,80.2).lineTo(-59.5,80.2).lineTo(-59.5,80.2).lineTo(-59.5,80.2).lineTo(-59.4,80.2).lineTo(-59.4,80.2).curveTo(-59,80.5,-58.6,80.5).lineTo(-58.6,80.5).lineTo(-58.5,80.5).closePath().moveTo(26.5,70.1).lineTo(25,77.4).lineTo(25,77.5).lineTo(29.3,74.3).lineTo(29.7,74.1).lineTo(33.2,71.4).lineTo(33.6,71.1).lineTo(35,70.1).lineTo(33.6,70.1).lineTo(33.2,70.1).lineTo(29,70.1).lineTo(28.6,70.1).lineTo(27,70.1).lineTo(27.2,69.2).curveTo(27.6,66.2,27.6,63.1).lineTo(27.6,61.1).lineTo(27.5,60.9).lineTo(27.5,60.8).lineTo(27.5,60.7).lineTo(27.5,60.6).lineTo(27.5,60.4).lineTo(27.5,59.9).lineTo(27.3,55.9).lineTo(33.4,55.9).lineTo(36.2,55.9).lineTo(33.4,53.6).lineTo(26.2,47.5).curveTo(26.9,51.2,27.2,55).lineTo(27.3,55.9).lineTo(27.5,59.9).lineTo(27.5,60.4).lineTo(27.5,60.6).lineTo(27.5,60.7).lineTo(27.5,60.8).lineTo(27.5,60.9).lineTo(27.6,62.9).lineTo(27.5,65).lineTo(26.5,70.1).closePath().moveTo(-102.1,48).lineTo(-111.1,55.9).lineTo(-119.2,63).lineTo(-106,73.4).lineTo(-102.3,76.3).lineTo(-101.6,73.2).lineTo(-101.3,71.4).curveTo(-100.9,68.3,-100.7,65).curveTo(-100.1,61,-100.7,55.9).lineTo(-100.8,55).lineTo(-101.4,51.7).lineTo(-102.1,48).lineTo(-102.8,44.3).closePath().moveTo(36.1,69.2).lineTo(35.4,69.7).lineTo(35,70.1).lineTo(35.4,69.7).lineTo(36.1,69.2).curveTo(40.2,66,44.1,62.6).lineTo(46.3,60.8).lineTo(44.1,62.6).lineTo(36.2,55.9).lineTo(44.1,62.6).curveTo(40.2,66,36.1,69.2).closePath().moveTo(-206.7,64.1).lineTo(-204.5,62.3).lineTo(-206.7,64.1).closePath().moveTo(-165.8,63.4).lineTo(-163.6,61.6).lineTo(-165.8,63.4).closePath().moveTo(-80.1,62.7).lineTo(-78,60.9).lineTo(-80.1,62.7).closePath().moveTo(-55.2,50.1).curveTo(-55.6,47.8,-56.1,45.5).curveTo(-55.6,47.8,-55.2,50.1).closePath().moveTo(108.5,80.1).curveTo(107.7,80.4,106.7,79.5).lineTo(107.6,75.9).lineTo(106.7,79.5).lineTo(94.8,70.1).lineTo(88.4,65.1).lineTo(82.1,70.1).lineTo(70.9,78.9).lineTo(66.2,80.6).curveTo(65.8,80.8,65.9,80.4).curveTo(65.2,80.5,64.2,79.7).lineTo(65.2,76.1).curveTo(65.8,73.1,66.3,70.1).lineTo(66.4,69.2).curveTo(66.6,67,66.7,64.8).curveTo(67.3,60.9,66.8,55.9).lineTo(66.6,55).lineTo(66,51.5).lineTo(65.4,47.8).lineTo(64.6,44.1).curveTo(64.9,42.2,66.9,43.4).curveTo(66.9,42.1,67.7,42.5).lineTo(83.3,55.9).lineTo(88.7,60.6).lineTo(86.6,62.4).lineTo(88.7,60.6).lineTo(94.2,55.9).lineTo(94.4,55.9).lineTo(94.4,55.7).lineTo(95.2,55).lineTo(96.4,53.9).lineTo(96.9,53.6).lineTo(107.1,43.8).lineTo(107.8,47.6).lineTo(98.3,55.9).lineTo(90.7,62.6).lineTo(88.4,65.1).lineTo(90.7,62.6).lineTo(100.3,70.1).lineTo(107.6,75.9).curveTo(108.3,73,108.7,70.1).lineTo(108.8,69.2).curveTo(109.1,66.9,109.2,64.5).curveTo(109.8,60.7,109.2,55.9).lineTo(109.1,55).lineTo(108.5,51.3).lineTo(107.8,47.6).lineTo(107.1,43.8).curveTo(107.4,41.9,109.4,43.2).lineTo(110.4,44).lineTo(111.1,47.3).curveTo(111.7,51.1,112.1,55).lineTo(112.2,55.9).lineTo(112.3,58.3).curveTo(112.5,61.6,112.4,65).lineTo(111.4,70.1).lineTo(109.9,77.4).lineTo(109.9,77.4).lineTo(109.9,77.4).curveTo(114.8,73.9,119.8,70.1).lineTo(120.9,69.2).curveTo(125,66,129,62.6).lineTo(131.2,60.8).lineTo(136.2,56.4).lineTo(136.8,55.9).lineTo(137.8,55).curveTo(142.7,50.7,147.5,46.1).lineTo(148,45.5).lineTo(149.5,44).curveTo(149.8,42,151.8,43.3).curveTo(151.9,42.1,152.6,42.5).lineTo(153.8,43.5).lineTo(155.5,45).lineTo(155.6,45.1).lineTo(164.6,52.8).lineTo(172.8,59.9).lineTo(173.1,60.1).lineTo(180.4,53.7).lineTo(180.6,53.6).lineTo(181.4,52.8).lineTo(188.7,46).lineTo(188.9,45.9).lineTo(191.3,43.5).lineTo(191.4,43.4).lineTo(191.5,43.5).lineTo(191.9,44).lineTo(192,44.2).lineTo(192.5,44.8).lineTo(192.3,45.5).lineTo(192.5,44.8).curveTo(193.9,48.5,194.6,52.8).lineTo(194.7,53.7).curveTo(195.1,56.6,195.3,59.6).lineTo(195.3,61.5).curveTo(195.3,67.1,193.8,72.6).lineTo(192.8,75.8).lineTo(192.7,76).lineTo(192.5,75.9).lineTo(192.8,74.6).lineTo(192.9,74.3).curveTo(193.8,69.5,194.1,64.6).curveTo(194.7,60.4,194,55).lineTo(193.4,51.3).lineTo(192.7,47.6).lineTo(192.3,45.5).lineTo(191.4,47.7).lineTo(175.1,62.1).lineTo(175.7,62.6).lineTo(175.1,62.1).lineTo(191.4,47.7).lineTo(192.3,45.5).lineTo(192.7,47.6).lineTo(175.7,62.6).lineTo(190.1,74).lineTo(192.5,75.9).lineTo(192.7,76).lineTo(192.4,76.5).lineTo(191.6,77.8).lineTo(191.2,78.3).lineTo(191,78.9).lineTo(191.2,78.3).lineTo(191.6,77.8).lineTo(192.4,76.5).lineTo(192.7,76).lineTo(193,75.8).lineTo(195.5,74).lineTo(193,75.8).lineTo(192.7,76).lineTo(192.8,75.8).lineTo(193.8,72.6).curveTo(195.3,67.1,195.3,61.5).lineTo(195.3,59.6).curveTo(195.1,56.6,194.7,53.7).lineTo(194.6,52.8).curveTo(193.9,48.5,192.5,44.8).lineTo(196,47.8).lineTo(192.5,44.8).lineTo(192.2,43.2).lineTo(192.5,44.8).lineTo(192,44.2).lineTo(192,43.9).curveTo(192,43.5,192.2,43.2).lineTo(192.2,43.2).curveTo(191.9,40.8,193,41.2).lineTo(194.4,42.5).lineTo(210.5,56.3).lineTo(210.5,56.3).lineTo(211.1,60.6).lineTo(211.1,60.5).lineTo(196,47.8).curveTo(196.6,51.4,197,55).curveTo(197.4,60,197.3,65.1).lineTo(195.5,74).lineTo(197.5,72.5).curveTo(203,68.4,208.5,63.9).lineTo(209,63.5).lineTo(211.2,61.7).lineTo(211.3,61.7).lineTo(211.8,65.3).lineTo(211.8,65.3).lineTo(199.5,75.1).lineTo(196.2,77.7).lineTo(194.6,78.3).lineTo(191.6,79.4).lineTo(194.6,78.3).lineTo(194.5,78.8).curveTo(193.6,81.2,191.6,79.5).lineTo(191.6,79.4).lineTo(191.5,79.4).lineTo(191.2,79.1).lineTo(191,78.9).lineTo(173.4,65.1).lineTo(191,78.9).lineTo(191.2,79.1).lineTo(191.2,79.2).lineTo(185.8,75).lineTo(183.6,73.2).lineTo(173.3,65.1).lineTo(173.4,65.1).lineTo(172.8,64.5).lineTo(175.1,62.1).lineTo(172.8,64.5).lineTo(173.4,65.1).lineTo(173.3,65.1).lineTo(165.8,71.1).lineTo(156.2,78.7).lineTo(155.8,78.9).lineTo(153.2,80).lineTo(153,80).lineTo(151.1,80.7).curveTo(150.6,80.9,150.8,80.3).curveTo(150.1,80.5,149.1,79.6).lineTo(150.1,76).curveTo(150.7,73.4,151.1,70.7).lineTo(151.2,70.1).lineTo(151.3,69.2).curveTo(151.5,67,151.6,64.7).curveTo(152.2,60.8,151.7,55.9).lineTo(151.5,55).curveTo(151.3,53.3,150.9,51.4).lineTo(150.3,47.7).lineTo(149.5,44).lineTo(150.3,47.7).lineTo(148.5,49.3).lineTo(148,49.8).lineTo(141,55.9).lineTo(133.2,62.7).lineTo(130.9,65.2).lineTo(124.8,70.1).lineTo(113.4,79.1).lineTo(111.1,79.9).lineTo(108.6,80.8).lineTo(108.4,80.9).curveTo(108.2,80.9,108.5,80.1).closePath().moveTo(67.5,77.2).lineTo(67.3,78.1).curveTo(66.9,80.2,65.9,80.4).curveTo(66.9,80.2,67.3,78.1).lineTo(67.5,77.2).curveTo(71.6,74.3,75.7,71.2).lineTo(76.6,70.5).lineTo(77.1,70.1).lineTo(78.3,69.2).curveTo(82.5,65.8,86.6,62.4).lineTo(78.9,55.9).lineTo(68.5,47.1).lineTo(67.9,44.2).lineTo(66.9,43.4).lineTo(67.9,44.2).lineTo(68.5,47.1).curveTo(69.2,51,69.6,55).lineTo(69.7,55.9).lineTo(69.8,57.6).curveTo(70,61.3,69.9,65.3).lineTo(69,70.1).lineTo(67.6,76.8).lineTo(67.6,76.9).lineTo(67.5,77.2).lineTo(67.5,77.2).closePath().moveTo(152.4,77.5).lineTo(152.2,78).curveTo(151.8,80,150.8,80.3).curveTo(151.8,80,152.2,78).lineTo(152.4,77.5).lineTo(152.4,77.4).lineTo(152.5,77.9).lineTo(152.5,77.2).lineTo(156.1,74.7).lineTo(157.8,73.4).lineTo(158,73.2).lineTo(161.5,70.6).lineTo(162.4,69.8).lineTo(166,67).lineTo(170.5,62.3).lineTo(170.9,62).lineTo(170.9,61.9).lineTo(173,60.2).lineTo(173.1,60.1).lineTo(173,60.2).lineTo(170.9,61.9).lineTo(161.4,53.9).lineTo(155.7,49.1).lineTo(155.5,49).lineTo(153.6,47.3).lineTo(153.5,47.2).lineTo(152.8,44.1).lineTo(151.8,43.3).lineTo(152.8,44.1).lineTo(153.5,47.2).lineTo(153.6,48).curveTo(154.2,51.5,154.5,55).lineTo(154.6,55.9).lineTo(154.7,57.8).lineTo(154.8,58.6).lineTo(154.9,60.9).curveTo(155.1,65.1,154.5,69.2).lineTo(154.3,70.1).curveTo(153.7,73.4,152.5,76.8).lineTo(152.4,77).lineTo(152.4,77.3).lineTo(152.4,77.4).closePath().moveTo(109.9,77.5).lineTo(109.8,77.9).curveTo(109.4,79.8,108.5,80.1).curveTo(109.4,79.8,109.8,77.9).lineTo(109.9,77.5).lineTo(109.9,77.4).closePath().moveTo(154.8,65.2).lineTo(154.1,69).lineTo(154.8,65.2).lineTo(154.9,62.4).lineTo(154.8,58.6).lineTo(154.9,62.4).lineTo(154.8,65.2).closePath().moveTo(137,70.1).lineTo(130.9,65.2).lineTo(133.2,62.7).lineTo(142.5,70.1).lineTo(150.1,76).lineTo(149.1,79.6).closePath().moveTo(191.5,79.4).lineTo(191.6,79.4).lineTo(191.6,79.5).closePath().moveTo(191.2,79.2).lineTo(191.2,79.1).lineTo(191.5,79.4).closePath().moveTo(191.2,79.1).lineTo(191.2,79.1).closePath().moveTo(-184.9,78.2).closePath().moveTo(-144.7,76.8).closePath().moveTo(192.7,76).closePath().moveTo(192.7,76).lineTo(192.7,76).closePath().moveTo(22.8,75.9).closePath().moveTo(-88.9,73.8).lineTo(-88.9,73.8).closePath().moveTo(27,70.1).lineTo(26.5,70.1).lineTo(27.5,65).lineTo(27.6,62.9).lineTo(27.5,60.9).lineTo(27.6,61.1).lineTo(27.6,63.1).curveTo(27.6,66.2,27.2,69.2).lineTo(27,70.1).closePath().moveTo(121.2,55.9).lineTo(111.1,47.3).lineTo(110.4,44).lineTo(109.4,43.2).curveTo(109.5,42.3,110.2,42.6).lineTo(125.6,55.9).lineTo(131.2,60.8).lineTo(129,62.6).closePath().moveTo(-211.7,62).lineTo(-211.7,61.5).lineTo(-211.7,62.5).closePath().moveTo(175.1,62.1).closePath().moveTo(170.8,61.9).lineTo(170.9,61.9).lineTo(170.9,62).closePath().moveTo(170.9,61.9).closePath().moveTo(27.5,60.8).lineTo(27.5,60.9).lineTo(27.5,60.8).closePath().moveTo(27.5,60.8).lineTo(27.5,60.8).closePath().moveTo(131.2,60.8).closePath().moveTo(88.7,60.6).closePath().moveTo(3.9,60.6).closePath().moveTo(27.3,55.9).closePath().moveTo(-58.9,47.9).closePath().moveTo(150.3,47.7).closePath().moveTo(192.7,47.6).closePath().moveTo(23,47.6).closePath().moveTo(192.5,44.8).lineTo(192.5,44.8).closePath().moveTo(192.5,44.8).closePath().moveTo(192,44.2).closePath().moveTo(191.9,44).lineTo(192,43.9).lineTo(192,44.2).closePath().moveTo(107.1,43.8).closePath().moveTo(109.4,43.2).lineTo(109.4,43.2).closePath().moveTo(-188.3,-43).lineTo(-188,-42.8).lineTo(-188,-43.7).lineTo(-186.8,-46.1).lineTo(-182,-49.6).lineTo(-180.9,-50.4).lineTo(-180.9,-46.3).lineTo(-183.3,-44.5).lineTo(-188,-42.7).lineTo(-188.2,-42.6).curveTo(-188.2,-42.6,-188.3,-42.7).curveTo(-188.3,-42.7,-188.3,-42.7).curveTo(-188.3,-42.8,-188.3,-42.9).curveTo(-188.3,-42.9,-188.3,-43).closePath().moveTo(189.7,-44.8).lineTo(190.7,-48.4).lineTo(189.7,-44.8).lineTo(181.7,-51.1).lineTo(181,-51.7).lineTo(181,-56).lineTo(188.6,-50).lineTo(190.7,-48.4).lineTo(191,-49.7).curveTo(192,-54.6,192.2,-59.7).curveTo(192.9,-63.9,192.2,-69.3).lineTo(191.5,-73).lineTo(190.9,-76.7).lineTo(182.5,-69.3).lineTo(181,-68).lineTo(181,-71.7).curveTo(185.6,-75.9,190.1,-80.4).lineTo(190.9,-76.7).lineTo(190.1,-80.4).curveTo(190.5,-82.8,193.4,-80.3).curveTo(194.6,-74.9,195.1,-69.3).curveTo(195.5,-64.3,195.4,-59.2).lineTo(193.5,-49.7).lineTo(193.4,-49.3).lineTo(193.1,-47.8).lineTo(192.9,-46.7).lineTo(192.8,-46.4).lineTo(192.6,-45.5).curveTo(192.1,-44.1,191.2,-44.1).curveTo(190.6,-44.1,189.7,-44.8).closePath().moveTo(193.5,-49.7).lineTo(193.5,-49.6).lineTo(193.4,-49.3).closePath().moveTo(-186.9,-77.3).curveTo(-187.9,-81.5,-186.5,-80.9).lineTo(-180.9,-76).lineTo(-180.9,-72.1).closePath();
	this.shape_10.setTransform(269.075,225.6498);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#BB9065").beginStroke().moveTo(154,72.1).lineTo(153.9,63.2).lineTo(163.5,55.6).lineTo(181.3,57.7).lineTo(183.5,59.4).lineTo(188.9,63.7).lineTo(189.2,63.9).lineTo(189.1,63.9).lineTo(189.1,63.9).lineTo(189.1,63.9).lineTo(189,63.9).lineTo(188.9,63.9).lineTo(188.9,63.9).lineTo(188.8,63.7).lineTo(188.9,63.7).lineTo(188.9,63.7).lineTo(188.9,63.7).lineTo(188.8,63.7).lineTo(188.9,63.9).lineTo(188.9,63.9).lineTo(189,63.9).lineTo(189.1,63.9).lineTo(189.1,63.9).lineTo(189.1,63.9).lineTo(189.2,63.9).lineTo(189.3,64).curveTo(191.3,65.7,192.2,63.3).lineTo(192.3,62.7).lineTo(193.9,62.1).lineTo(197.2,59.5).lineTo(211.1,61.2).lineTo(211,60.3).lineTo(211.9,64.2).curveTo(214.4,73.7,214.5,82.1).curveTo(214.5,93.3,214.3,104.2).curveTo(199.2,84.8,180.3,88.7).curveTo(176.2,89.4,172.8,91.2).curveTo(160.3,97.2,155.2,115.5).curveTo(154.5,93.6,154,72.1).closePath().moveTo(172.7,78.4).curveTo(172.6,82.7,171.8,88.8).lineTo(171.5,90).lineTo(171.8,88.8).curveTo(172.6,82.7,172.7,78.4).lineTo(172.7,77.6).curveTo(172.7,75.8,172,73.1).lineTo(169.9,63.6).lineTo(172,73.1).curveTo(172.7,75.8,172.7,77.6).lineTo(172.7,78.4).closePath().moveTo(196.3,88.1).lineTo(195.5,67.9).closePath().moveTo(182.8,73.8).curveTo(183.3,80.6,185.9,85.9).curveTo(183.3,80.6,182.8,73.8).lineTo(182.7,72).curveTo(182.7,70.5,182.9,68.5).lineTo(183.5,59.4).lineTo(182.9,68.5).curveTo(182.7,70.5,182.7,72).lineTo(182.8,73.8).closePath().moveTo(92.2,63.2).lineTo(92.2,56).lineTo(92.2,54.5).lineTo(92.5,54.5).lineTo(104.4,63.9).curveTo(105.4,64.8,106.2,64.6).curveTo(105.8,65.5,106.3,65.3).lineTo(108.8,64.4).lineTo(111.1,63.5).lineTo(122.5,54.5).lineTo(134.7,54.5).lineTo(146.8,64.1).curveTo(147.8,64.9,148.5,64.8).curveTo(148.3,65.4,148.8,65.2).lineTo(150.7,64.5).lineTo(151,65.9).curveTo(153.1,74.5,153.2,82.1).curveTo(153.2,93.3,153,104.2).curveTo(137.9,84.8,119,88.7).curveTo(114.9,89.4,111.5,91.2).curveTo(99,97.2,93.9,115.5).curveTo(92.2,81.9,92.2,63.2).closePath().moveTo(111.4,78.4).curveTo(111.3,82.7,110.5,88.8).lineTo(110.2,90).lineTo(110.5,88.8).curveTo(111.3,82.7,111.4,78.4).lineTo(111.4,77.6).curveTo(111.4,75.8,110.7,73.1).lineTo(108.8,64.4).lineTo(110.7,73.1).curveTo(111.4,75.8,111.4,77.6).lineTo(111.4,78.4).closePath().moveTo(135,88.1).lineTo(134.2,67.9).closePath().moveTo(121.5,73.8).curveTo(122,80.6,124.6,85.9).curveTo(122,80.6,121.5,73.8).lineTo(121.4,72).curveTo(121.4,70.5,121.6,68.5).lineTo(122.4,55.3).lineTo(121.6,68.5).curveTo(121.4,70.5,121.4,72).lineTo(121.5,73.8).closePath().moveTo(31.4,61.1).lineTo(31.4,59.5).lineTo(37.7,54.5).lineTo(49.7,54.5).lineTo(60.9,63.3).lineTo(61.9,64.2).curveTo(62.9,65,63.6,64.9).curveTo(63.5,65.3,63.9,65.1).lineTo(68.6,63.4).lineTo(79.8,54.5).lineTo(87.3,54.5).curveTo(89.3,64.3,91.6,74.5).curveTo(92.1,78.4,92.1,82.1).curveTo(92.1,93.3,91.9,104.2).curveTo(76.8,84.8,57.9,88.7).curveTo(53.8,89.4,50.4,91.2).curveTo(37.9,97.2,32.8,115.5).curveTo(31.9,88.1,31.4,61.1).closePath().moveTo(50.3,78.4).curveTo(50.2,82.7,49.4,88.8).lineTo(49.1,90).lineTo(49.4,88.8).curveTo(50.2,82.7,50.3,78.4).lineTo(50.3,77.6).curveTo(50.3,75.8,49.6,73.1).lineTo(47.5,63.6).lineTo(49.6,73.1).curveTo(50.3,75.8,50.3,77.6).lineTo(50.3,78.4).closePath().moveTo(73.9,88.1).lineTo(73.1,67.9).closePath().moveTo(60.4,73.8).curveTo(60.9,80.6,63.5,85.9).curveTo(60.9,80.6,60.4,73.8).lineTo(60.3,72).curveTo(60.3,70.5,60.5,68.5).lineTo(60.9,63.3).lineTo(60.5,68.5).curveTo(60.3,70.5,60.3,72).lineTo(60.4,73.8).closePath().moveTo(-29.6,77.4).lineTo(-29.5,77.5).lineTo(-29.5,58.9).lineTo(-22,64.7).curveTo(-20.3,66.2,-19.4,64.6).lineTo(-16.2,63.4).lineTo(-5,54.5).lineTo(-3.3,54.5).lineTo(-3,54.5).lineTo(7.6,54.5).lineTo(19.5,63.9).curveTo(20.6,64.8,21.3,64.6).curveTo(20.9,65.7,21.4,65.4).lineTo(26.2,63.6).lineTo(27.8,62.4).lineTo(28.1,63.7).lineTo(28.2,64.2).lineTo(28.6,65.6).lineTo(30.5,77.1).curveTo(30.8,79.7,30.8,82.1).curveTo(30.8,93.3,30.6,104.2).curveTo(15.5,84.8,-3.4,88.7).curveTo(-7.5,89.4,-10.9,91.2).curveTo(-23.4,97.2,-28.5,115.5).lineTo(-29.6,77.4).closePath().moveTo(-11,78.4).curveTo(-11.1,82.7,-11.9,88.8).lineTo(-12.2,90).lineTo(-11.9,88.8).curveTo(-11.1,82.7,-11,78.4).lineTo(-11,77.6).curveTo(-11,75.8,-11.7,73.1).lineTo(-13.8,63.6).lineTo(-11.7,73.1).curveTo(-11,75.8,-11,77.6).lineTo(-11,78.4).closePath().moveTo(12.6,88.1).lineTo(11.8,67.9).closePath().moveTo(2.2,85.9).curveTo(-0.3,80.8,-0.9,74.3).lineTo(-0.9,73.8).lineTo(-1,72).curveTo(-1,70.5,-0.8,68.5).lineTo(0,55.3).lineTo(-0.8,68.5).curveTo(-1,70.5,-1,72).lineTo(-0.9,73.8).lineTo(-0.9,74.3).curveTo(-0.3,80.8,2.2,85.9).lineTo(2.2,85.9).closePath().moveTo(-91.8,84.1).lineTo(-91.8,82.1).curveTo(-91.9,76.7,-92.9,70.8).lineTo(-93,70.6).lineTo(-92.9,70.8).curveTo(-91.9,76.7,-91.8,82.1).lineTo(-91.8,84.1).lineTo(-92.6,75.4).lineTo(-92.9,70.8).lineTo(-93,70.8).lineTo(-93,70.6).lineTo(-93,70.8).lineTo(-92.9,70.8).lineTo(-92.6,75.4).lineTo(-92.9,72.3).lineTo(-93.2,69.2).lineTo(-93,70.8).lineTo(-93.2,69.2).lineTo(-93.3,68.9).lineTo(-93.2,69.2).lineTo(-92.9,72.3).lineTo(-92.4,78.4).lineTo(-92.6,75.4).lineTo(-91.8,84.1).lineTo(-91.8,85.4).lineTo(-92.1,82.7).lineTo(-91.8,85.4).lineTo(-91.8,85.9).lineTo(-92.1,82.7).lineTo(-91.8,85.9).lineTo(-92,104.2).curveTo(-107.1,84.8,-126,88.7).curveTo(-130.1,89.4,-133.5,91.2).curveTo(-146,97.2,-151.1,115.5).curveTo(-151.7,97.9,-153.1,83.8).lineTo(-153.1,82.1).curveTo(-153.2,73.7,-155.7,64.2).lineTo(-155.8,64.1).lineTo(-155.8,63.7).lineTo(-155.9,63.3).lineTo(-156,63.2).lineTo(-156,63).lineTo(-156.1,62.6).lineTo(-156.4,61.2).lineTo(-156.5,60.7).lineTo(-153.5,60.5).lineTo(-148,64.9).curveTo(-147,65.7,-146.3,65.6).curveTo(-146.3,65.6,-146.3,65.6).curveTo(-146.3,65.6,-146.2,65.6).curveTo(-146.2,65.6,-146.2,65.6).curveTo(-146.1,65.6,-146,65.6).lineTo(-141.3,63.8).lineTo(-135.7,59.5).lineTo(-122.8,58.7).lineTo(-123.4,68.5).curveTo(-123.6,70.5,-123.6,72).lineTo(-123.5,73.8).curveTo(-123,80.6,-120.4,85.9).curveTo(-123,80.6,-123.5,73.8).lineTo(-123.6,72).curveTo(-123.6,70.5,-123.4,68.5).lineTo(-122.8,58.7).lineTo(-113.4,58.2).lineTo(-105.5,64.4).curveTo(-103.2,66.3,-102.4,62.8).lineTo(-101.3,57.5).lineTo(-100.1,57.4).lineTo(-95.9,57.1).lineTo(-95.8,57.9).lineTo(-101.6,62.1).curveTo(-100.7,59.7,-100.1,57.4).curveTo(-100.7,59.7,-101.6,62.1).curveTo(-103.8,66,-102.8,65.5).lineTo(-98.1,63.7).lineTo(-95.1,61.4).lineTo(-94.8,62.7).lineTo(-94.4,64.2).lineTo(-93.3,68.9).lineTo(-91.2,62.9).lineTo(-91.2,61.7).lineTo(-91.2,61.3).lineTo(-91.2,61.1).lineTo(-91.2,60.8).lineTo(-91.2,59.8).lineTo(-91.2,58.3).lineTo(-91.2,58.3).lineTo(-89.2,56.8).lineTo(-73.1,55.8).lineTo(-62.3,64.3).lineTo(-61.7,62).lineTo(-61.8,64.6).lineTo(-62.2,64.3).lineTo(-62.3,64.3).lineTo(-62.2,64.3).lineTo(-62.3,64.4).lineTo(-62.3,64.4).lineTo(-62.3,64.5).curveTo(-63.2,66,-62.7,66).lineTo(-62.6,65.9).lineTo(-62.6,65.9).lineTo(-62.5,65.9).lineTo(-61.9,65.7).lineTo(-62.1,68.5).curveTo(-62.3,70.5,-62.3,72).lineTo(-62.2,73.8).curveTo(-61.7,80.6,-59.1,85.9).curveTo(-61.7,80.6,-62.2,73.8).lineTo(-62.3,72).curveTo(-62.3,70.5,-62.1,68.5).lineTo(-61.9,65.7).lineTo(-57.8,64.2).lineTo(-45.9,54.8).lineTo(-35.4,54.5).lineTo(-35,56.1).lineTo(-33.9,60.6).curveTo(-33.5,62.7,-33.1,64.2).curveTo(-30.6,73.7,-30.5,82.1).curveTo(-30.5,93.3,-30.7,104.2).curveTo(-45.8,84.8,-64.7,88.7).curveTo(-68.8,89.4,-72.2,91.2).curveTo(-84.7,97.2,-89.8,115.5).curveTo(-90.3,101.8,-91.8,84.1).closePath().moveTo(-72.3,78.4).curveTo(-72.4,82.7,-73.2,88.8).lineTo(-73.5,90).lineTo(-73.2,88.8).curveTo(-72.4,82.7,-72.3,78.4).lineTo(-72.3,77.6).curveTo(-72.3,75.8,-73,73.1).lineTo(-75.1,63.6).lineTo(-73,73.1).curveTo(-72.3,75.8,-72.3,77.6).lineTo(-72.3,78.4).closePath().moveTo(-133.6,78.4).curveTo(-133.7,82.7,-134.5,88.8).lineTo(-134.8,90).lineTo(-134.5,88.8).curveTo(-133.7,82.7,-133.6,78.4).lineTo(-133.6,77.6).curveTo(-133.6,75.8,-134.3,73.1).lineTo(-136.4,63.6).lineTo(-134.3,73.1).curveTo(-133.6,75.8,-133.6,77.6).lineTo(-133.6,78.4).closePath().moveTo(-48.7,88.1).lineTo(-49.5,67.9).closePath().moveTo(-110,88.1).lineTo(-110.8,67.9).closePath().moveTo(-92.1,82.7).lineTo(-92.4,78.4).closePath().moveTo(-91.2,62.9).lineTo(-91.1,62.3).lineTo(-91.2,61.7).lineTo(-91.1,62.3).closePath().moveTo(-91.1,62.3).lineTo(-91.2,61.3).closePath().moveTo(-213.7,64).lineTo(-192.5,62.8).lineTo(-188.9,65.6).lineTo(-188.7,65.7).lineTo(-188.8,65.8).curveTo(-188.8,65.9,-188.8,65.9).curveTo(-188.8,66,-188.8,66).curveTo(-188.8,66.1,-188.7,66.1).curveTo(-188.7,66.1,-188.7,66.1).lineTo(-188.7,66.1).lineTo(-188.5,66.1).lineTo(-188.4,66.1).lineTo(-184.4,64.6).lineTo(-183.7,64.3).lineTo(-180.9,62.1).lineTo(-156.5,60.7).lineTo(-156.4,61.2).lineTo(-156.1,62.6).lineTo(-156,63).lineTo(-156,63.2).lineTo(-155.9,63.3).lineTo(-155.8,63.7).lineTo(-155.8,64.1).lineTo(-155.7,64.2).curveTo(-153.2,73.7,-153.1,82.1).lineTo(-153.1,83.8).curveTo(-154.2,72.8,-155.8,64.1).curveTo(-154.2,72.8,-153.1,83.8).curveTo(-153.1,94.1,-153.3,104.2).curveTo(-168.4,84.8,-187.3,88.7).curveTo(-191.4,89.4,-194.8,91.2).curveTo(-207.3,97.2,-212.4,115.5).curveTo(-213.3,89.6,-213.7,64).closePath().moveTo(-194.9,78.4).curveTo(-195,82.7,-195.8,88.8).lineTo(-196.1,90).lineTo(-195.8,88.8).curveTo(-195,82.7,-194.9,78.4).lineTo(-194.9,77.6).curveTo(-194.9,75.8,-195.6,73.1).lineTo(-197.7,63.6).lineTo(-195.6,73.1).curveTo(-194.9,75.8,-194.9,77.6).lineTo(-194.9,78.4).closePath().moveTo(-171.3,88.1).lineTo(-172.1,67.9).closePath().moveTo(-184.8,73.8).curveTo(-184.3,80.6,-181.7,85.9).curveTo(-184.3,80.6,-184.8,73.8).lineTo(-184.9,72).curveTo(-184.9,70.5,-184.7,68.5).lineTo(-184.4,64.6).lineTo(-184.7,68.5).curveTo(-184.9,70.5,-184.9,72).lineTo(-184.8,73.8).closePath().moveTo(-91.8,84.1).lineTo(-91.8,84.1).closePath().moveTo(-91.8,84.1).lineTo(-91.8,84.1).closePath().moveTo(-153.1,83.8).lineTo(-153.1,83.8).closePath().moveTo(-93.2,69.2).closePath().moveTo(-188.7,66.1).curveTo(-188.7,66.1,-188.7,66.1).curveTo(-188.8,66.1,-188.8,66).curveTo(-188.8,66,-188.8,65.9).curveTo(-188.8,65.9,-188.8,65.8).lineTo(-188.7,65.7).lineTo(-188.4,66.1).lineTo(-188.5,66.1).lineTo(-188.7,66.1).lineTo(-188.7,66.1).closePath().moveTo(-62.3,64.5).lineTo(-62.3,64.4).lineTo(-62.3,64.4).lineTo(-62.2,64.3).lineTo(-61.8,64.6).lineTo(-61.9,65.7).lineTo(-62.5,65.9).lineTo(-62.6,65.9).lineTo(-62.6,65.9).lineTo(-62.7,66).lineTo(-62.7,66).curveTo(-63.1,66,-62.3,64.5).closePath().moveTo(-62.2,64.3).lineTo(-62.2,64.3).closePath().moveTo(-187.5,62.5).lineTo(-187.1,62.5).lineTo(-187.2,62.7).lineTo(-187.1,62.5).lineTo(-186.9,62.4).lineTo(-187.2,62.7).closePath().moveTo(-187.1,62.5).closePath().moveTo(-144.5,61.4).lineTo(-144,59.9).lineTo(-141.4,59.8).lineTo(-144.6,62.1).closePath().moveTo(22.7,61.9).curveTo(24.1,58.2,24.7,54.5).lineTo(26.3,54.5).lineTo(27,58.8).lineTo(22.7,62).closePath().moveTo(-61.6,60.5).lineTo(-61.4,60.7).lineTo(-61.6,60.5).lineTo(-61.3,55.1).lineTo(-61.6,60.5).lineTo(-67.9,55.5).lineTo(-61.3,55.1).lineTo(-60.3,55.1).curveTo(-60.7,57.9,-61.4,60.7).lineTo(-61.7,62).closePath().moveTo(107.6,61.9).lineTo(107.6,61.8).curveTo(108.9,58.2,109.6,54.5).curveTo(108.9,58.2,107.6,61.8).lineTo(109.1,54.5).lineTo(109.6,54.5).lineTo(117.5,54.5).curveTo(112.5,58.3,107.6,61.9).lineTo(107.6,61.8).lineTo(107.6,61.9).closePath().moveTo(24.2,54.5).lineTo(24.7,54.5).curveTo(24.1,58.2,22.7,61.9).closePath().moveTo(65.3,61.3).lineTo(65.3,61.3).lineTo(65.3,61.2).curveTo(66.5,57.9,67.1,54.5).curveTo(66.5,57.9,65.3,61.2).lineTo(65.3,61.3).lineTo(66.7,54.5).lineTo(67.1,54.5).lineTo(74.8,54.5).lineTo(74.3,54.9).lineTo(73.4,55.6).curveTo(69.3,58.7,65.2,61.7).closePath().moveTo(-144.2,59.9).lineTo(-144,59.9).lineTo(-144.5,61.4).closePath().moveTo(-148.4,60.2).lineTo(-146.8,60.1).lineTo(-147,61.3).closePath().moveTo(-27.1,56.4).lineTo(-27.2,56.3).lineTo(-29.4,54.5).lineTo(-19.9,54.5).curveTo(-20.3,57.9,-21.1,61.1).closePath().moveTo(-17.2,54.5).lineTo(-10,54.5).curveTo(-14.2,57.8,-18.4,60.8).closePath().moveTo(-57.6,55.1).lineTo(-51,54.9).lineTo(-58.8,60.8).closePath().moveTo(-108.3,57.9).lineTo(-103.9,57.6).lineTo(-104.6,60.8).closePath().moveTo(-156.5,60.7).lineTo(-156.5,60.7).closePath().moveTo(61.1,59.2).lineTo(61.3,55.3).lineTo(61.1,59.2).lineTo(55.2,54.5).lineTo(64,54.5).curveTo(63.5,57.6,62.9,60.6).closePath().moveTo(140.2,54.5).lineTo(148.7,54.5).lineTo(148.8,55.2).curveTo(148.4,57.8,147.8,60.5).closePath().moveTo(187.8,58.4).lineTo(190.6,58.8).lineTo(190.5,59.1).lineTo(190.2,60.4).closePath().moveTo(98,54.5).lineTo(106.4,54.5).curveTo(106,57.5,105.3,60.3).closePath().moveTo(13.1,54.5).lineTo(21.5,54.5).curveTo(21.1,57.5,20.5,60.3).closePath().moveTo(-144,59.9).closePath().moveTo(153.7,54.5).lineTo(154.8,54.5).lineTo(159.2,55).lineTo(155.7,57.6).lineTo(155.5,57.8).lineTo(153.8,59.1).closePath().moveTo(-91.2,56.9).lineTo(-91.2,56.9).lineTo(-91.2,58.3).lineTo(-91.2,56.9).closePath().moveTo(31.3,54.5).lineTo(32.7,54.5).lineTo(31.3,55.6).lineTo(31.3,54.5).closePath().moveTo(24.7,54.5).closePath().moveTo(-214.1,41.4).lineTo(-214.3,22.5).lineTo(-162.5,20.2).lineTo(-162.4,20.2).lineTo(-161.5,27.6).lineTo(-160.7,34).lineTo(-159.8,40.4).lineTo(-160.2,40.4).curveTo(-161.2,32,-162.5,20.2).curveTo(-161.2,32,-160.2,40.4).lineTo(-172.4,40.4).lineTo(-186.9,27.9).curveTo(-188.3,27.3,-187.4,31.5).curveTo(-186,35.2,-185.3,39.5).lineTo(-185.2,40.4).lineTo(-185.3,39.5).curveTo(-186,35.2,-187.4,31.5).lineTo(-176.9,40.4).lineTo(-185.2,40.4).lineTo(-195.3,40.4).lineTo(-188.5,34.4).lineTo(-187.4,31.5).lineTo(-188.5,30).lineTo(-191,32.5).lineTo(-191.2,32.7).lineTo(-198.5,39.5).lineTo(-199.3,40.2).lineTo(-199.5,40.4).lineTo(-214.1,40.4).lineTo(-214.1,42.2).lineTo(-214.1,41.4).closePath().moveTo(153.4,35.2).lineTo(153.4,33.6).lineTo(159.1,38.4).lineTo(153.5,40.4).lineTo(153.4,35.2).closePath().moveTo(138.7,40.4).lineTo(145.7,34.2).lineTo(145.9,35.6).lineTo(146.5,40.4).closePath().moveTo(123.3,40.4).lineTo(107.9,27.1).curveTo(107.2,26.8,107.1,27.7).curveTo(105.1,26.3,104.8,28.3).lineTo(94.6,38).lineTo(94.1,38.4).lineTo(92.9,39.5).lineTo(92.1,40.2).lineTo(91.9,23.6).lineTo(91.9,17.4).lineTo(91.9,15.2).lineTo(143.2,15.2).lineTo(143.3,16.2).lineTo(144.8,27.6).lineTo(145.2,30.5).curveTo(140.4,35.1,135.5,39.5).lineTo(134.5,40.4).closePath().moveTo(109.9,40.4).lineTo(109.8,39.5).curveTo(109.4,35.6,108.8,31.8).lineTo(118.9,40.4).closePath().moveTo(96,40.4).lineTo(105.5,32).lineTo(106.2,35.7).lineTo(106.8,39.5).lineTo(106.9,40.4).closePath().moveTo(81,40.4).lineTo(65.4,26.9).curveTo(64.6,26.6,64.6,27.9).curveTo(62.6,26.6,62.3,28.6).curveTo(56.6,34.2,50.7,39.5).lineTo(49.7,40.4).lineTo(38.3,40.4).lineTo(31.1,34.2).lineTo(31.3,15.2).lineTo(79.9,15.2).curveTo(81.9,27.3,84.4,40.4).closePath().moveTo(67.4,40.4).lineTo(67.3,39.5).curveTo(66.9,35.5,66.2,31.6).lineTo(76.6,40.4).closePath().moveTo(53.9,40.4).lineTo(63.1,32.3).lineTo(63.7,36).lineTo(64.3,39.5).lineTo(64.5,40.4).closePath().moveTo(31.1,40.4).lineTo(31.1,38.1).lineTo(33.9,40.4).closePath().moveTo(11.2,40.4).lineTo(20.7,32).lineTo(21.3,35.7).lineTo(22,39.5).lineTo(22.1,40.4).closePath().moveTo(-3.9,40.4).lineTo(-19.4,26.9).curveTo(-20.3,26.6,-20.2,28).curveTo(-21.4,27.7,-21.6,29.1).lineTo(-27.5,34.8).lineTo(-27.8,35).lineTo(-29.5,36.6).lineTo(-29.5,15.2).lineTo(20.4,15.2).lineTo(22.3,27.4).lineTo(22.2,27.6).curveTo(20.2,26.4,19.9,28.3).curveTo(15.5,32.7,11,36.8).lineTo(9.4,38.2).lineTo(8,39.5).lineTo(7,40.4).closePath().moveTo(-16.6,40.4).lineTo(-16.7,39.5).curveTo(-17.1,35.9,-17.7,32.4).lineTo(-8.2,40.4).closePath().moveTo(-29.3,40.4).lineTo(-20.9,32.8).lineTo(-20.2,36.5).lineTo(-19.7,39.5).lineTo(-19.5,40.4).closePath().moveTo(-46.3,40.4).lineTo(-58.4,30).lineTo(-58.6,28.8).curveTo(-60.8,26.9,-61.5,27.8).lineTo(-61.7,27.9).lineTo(-61.9,28.7).curveTo(-67.6,34.2,-73.4,39.5).lineTo(-74.4,40.4).lineTo(-86.1,40.4).lineTo(-91.5,35.7).curveTo(-91.4,26.4,-91.5,17).lineTo(-52.5,15.2).lineTo(-43.1,15.2).curveTo(-41,28.1,-38.5,40.4).closePath().moveTo(-56.9,40.4).lineTo(-57,39.5).curveTo(-57.2,37,-57.5,34.6).lineTo(-50.7,40.4).closePath().moveTo(-70.3,40.4).lineTo(-61.2,32.4).lineTo(-60.5,36.1).lineTo(-59.9,39.5).lineTo(-59.8,40.4).closePath().moveTo(-91.5,40.4).lineTo(-91.5,39.6).lineTo(-90.5,40.4).closePath().moveTo(-91.5,40.4).lineTo(-91.5,40.4).lineTo(-91.5,39.5).lineTo(-91.5,39.6).lineTo(-91.5,40.4).closePath().moveTo(-99.4,40.4).lineTo(-99.6,39.5).curveTo(-100.1,36,-101,33).lineTo(-101.3,31.2).lineTo(-99.5,32.7).lineTo(-99.4,34).lineTo(-99.3,34.6).lineTo(-98.5,40.4).closePath().moveTo(-100.1,40.4).lineTo(-100.2,39.5).curveTo(-100.5,36.2,-101,33).curveTo(-100.1,36,-99.6,39.5).lineTo(-99.4,40.4).closePath().moveTo(-113.4,40.4).lineTo(-104.4,32.5).lineTo(-103.7,36.2).lineTo(-103.1,39.5).lineTo(-103,40.4).closePath().moveTo(-129.4,40.4).lineTo(-144.5,27.4).curveTo(-145.4,27,-145.3,28.6).curveTo(-147.3,27.3,-147.6,29.3).lineTo(-150.1,31.8).lineTo(-150.3,31.9).lineTo(-152.7,34.2).lineTo(-152.6,19.7).lineTo(-152.7,34.2).lineTo(-152.9,34.4).lineTo(-153,19.8).lineTo(-152.6,19.7).lineTo(-101.5,17.4).lineTo(-100.5,25).lineTo(-100.2,27.6).lineTo(-100.1,28.3).lineTo(-101.3,27.3).curveTo(-102.2,26.9,-102.1,28.7).curveTo(-104.7,26.4,-105.1,28.8).lineTo(-111.8,35.1).lineTo(-112,35.3).lineTo(-116.5,39.5).lineTo(-117.5,40.4).closePath().moveTo(-142.6,40.4).lineTo(-142.7,39.5).curveTo(-143,35.7,-143.7,32).lineTo(-133.8,40.4).closePath().moveTo(-152.7,40.4).lineTo(-152.8,40.4).lineTo(-152.8,39.8).lineTo(-152.9,38.3).lineTo(-152.7,38.1).lineTo(-152.7,40.4).lineTo(-152.7,38.1).lineTo(-146.8,33).lineTo(-146.2,36.7).lineTo(-145.7,39.5).lineTo(-145.5,40.4).closePath().moveTo(-91.5,39.5).lineTo(-91.6,37.3).lineTo(-91.6,37).lineTo(-91.5,37.4).lineTo(-91.5,39.6).closePath().moveTo(-152.7,38.1).closePath().moveTo(153.3,29.6).lineTo(153.2,15.2).lineTo(153.4,15.2).lineTo(205.4,22.2).lineTo(205.4,22.3).lineTo(192.1,26.9).lineTo(190.7,25.7).curveTo(189.6,25.2,189.9,27.6).lineTo(189.9,27.7).lineTo(189.2,27.9).lineTo(189.1,27.8).lineTo(189,28).lineTo(162.3,37.3).closePath().moveTo(-152.7,34.2).closePath().moveTo(-101,33).lineTo(-101,33).closePath().moveTo(22.2,27.6).lineTo(22.3,27.4).lineTo(22.4,27.7).lineTo(22.2,27.6).closePath().moveTo(153.2,1).lineTo(153.2,-0.2).lineTo(165.9,-0.2).curveTo(177.3,-2.2,178.7,-14.2).lineTo(178.7,-28.1).lineTo(199.7,-25.7).lineTo(202.8,1).closePath().moveTo(91.9,1).lineTo(91.9,-0.2).lineTo(141.3,-0.2).lineTo(141.5,1).closePath().moveTo(31.5,1).lineTo(31.5,-0.2).lineTo(77.5,-0.2).lineTo(77.6,1).closePath().moveTo(-29.4,1).lineTo(-29.4,-0.2).lineTo(18.2,-0.2).lineTo(18.3,1).closePath().moveTo(-91.8,1).lineTo(-91.8,-0.2).lineTo(-45.4,-0.2).lineTo(-45.3,1).closePath().moveTo(-152.5,1).lineTo(-152.5,-0.2).lineTo(-152.5,1).lineTo(-153.1,1).lineTo(-153.1,-0.2).lineTo(-152.5,-0.2).lineTo(-103.6,-0.2).lineTo(-103.5,1).closePath().moveTo(-214.4,1).curveTo(-214.5,-11.3,-214.4,-23.5).lineTo(-183.2,-24.9).lineTo(-183.2,-12.6).curveTo(-182.8,-1.5,-177.2,-0.2).lineTo(-165,-0.2).lineTo(-164.8,1).closePath().moveTo(178.7,-45.2).lineTo(178.7,-66.8).lineTo(179.4,-66.7).lineTo(187.4,-60.3).curveTo(189.5,-58.6,190.3,-61).lineTo(190.5,-61.9).lineTo(190.6,-62.3).lineTo(190.8,-63.4).lineTo(191.1,-64.8).lineTo(195.4,-64.2).lineTo(197.5,-45.2).closePath().moveTo(-214.3,-45.2).lineTo(-214,-63.9).lineTo(-198.2,-64.5).lineTo(-190.7,-58.7).lineTo(-190.6,-58.6).curveTo(-190.7,-58,-190.3,-58.2).lineTo(-185.6,-60).lineTo(-183.2,-61.8).lineTo(-183.2,-45.2).closePath().moveTo(-193,-64.8).lineTo(-188,-65).lineTo(-184.3,-65.1).lineTo(-189.1,-61.6).lineTo(-188,-65).lineTo(-189.1,-61.6).closePath().moveTo(186.3,-65.6).lineTo(188.7,-65.2).lineTo(188.4,-63.9).closePath().moveTo(192.8,-84.8).curveTo(192.3,-90.4,191.1,-95.8).curveTo(188.2,-98.4,187.8,-95.9).curveTo(183.3,-91.5,178.7,-87.3).lineTo(178.7,-107).lineTo(181.8,-106.3).lineTo(184.8,-105.6).curveTo(188.4,-103,189.9,-100.5).curveTo(190.8,-99.8,191.6,-99.7).lineTo(193.1,-84.8).closePath().moveTo(180.2,-84.8).lineTo(188.6,-92.2).lineTo(189.2,-88.5).lineTo(189.9,-84.8).closePath().moveTo(-187.2,-84.8).curveTo(-187.9,-89.1,-189.2,-92.8).curveTo(-187.9,-89.1,-187.2,-84.8).lineTo(-196.1,-84.8).lineTo(-190.3,-89.9).lineTo(-189.2,-92.8).lineTo(-190.3,-94.3).lineTo(-192.9,-91.8).lineTo(-193,-91.6).lineTo(-200.3,-84.8).lineTo(-213.6,-84.8).lineTo(-213.5,-90.1).lineTo(-213.3,-98.2).lineTo(-213,-99.8).lineTo(-212.6,-100.3).curveTo(-211.7,-101.5,-210,-102.7).lineTo(-209.7,-102.9).curveTo(-208.7,-103.6,-207.5,-104.2).curveTo(-206.4,-104.9,-205,-105.5).lineTo(-202.5,-105.6).lineTo(-198.9,-105.8).lineTo(-193.5,-106).lineTo(-191.5,-105.5).lineTo(-186.3,-104.3).lineTo(-183.3,-103.6).lineTo(-183.2,-103.5).lineTo(-183.2,-91.6).lineTo(-188.8,-96.4).curveTo(-190.2,-97,-189.2,-92.8).lineTo(-183.2,-87.7).lineTo(-183.2,-84.8).closePath().moveTo(-184.3,-113.2).curveTo(-184.7,-113.8,-185.3,-114.2).lineTo(-183.8,-113.5).lineTo(-183.2,-113.2).lineTo(-183.2,-112.9).lineTo(-184.3,-113.2).closePath().moveTo(-194.5,-115.3).curveTo(-193.1,-115.5,-191.6,-115.4).lineTo(-194.2,-115.3).lineTo(-194.7,-115.3).lineTo(-194.5,-115.3).closePath();
	this.shape_11.setTransform(271.3917,241.1938);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#DB7A4D").beginStroke().moveTo(-203.9,6.3).curveTo(-204.4,4.4,-203.9,2).lineTo(-203.7,1.4).curveTo(-203.3,-0.1,-202.4,-1.9).lineTo(-199.3,-5).lineTo(-198.6,-5.5).curveTo(-195.5,-7.3,-192.8,-7.5).curveTo(-191.8,-7.7,-190.9,-7.6).lineTo(-187.2,-7.4).lineTo(-184.7,-7.4).lineTo(-184.2,-7.5).lineTo(-181.6,-7.6).lineTo(-181.4,-7.6).curveTo(-177.3,-7.8,-175.3,-6.4).curveTo(-174.7,-6,-174.3,-5.4).lineTo(-173.2,-5).lineTo(-173.2,4.3).lineTo(-173.3,4.3).lineTo(-174.3,-5.4).lineTo(-173.3,4.3).lineTo(-176.3,3.5).lineTo(-181.4,-7.6).lineTo(-176.3,3.5).lineTo(-181.5,2.3).lineTo(-184.2,-7.5).lineTo(-181.5,2.3).lineTo(-183.5,1.8).lineTo(-187.2,-7.4).lineTo(-183.5,1.8).lineTo(-188.9,2).lineTo(-192.8,-7.5).lineTo(-188.9,2).lineTo(-192.5,2.2).lineTo(-198.6,-5.5).lineTo(-192.5,2.2).lineTo(-195,2.4).curveTo(-196.4,2.9,-197.5,3.6).lineTo(-202.4,-1.2).lineTo(-197.5,3.6).curveTo(-198.7,4.3,-199.7,4.9).lineTo(-203.9,2).lineTo(-199.7,4.9).lineTo(-200,5.1).curveTo(-201.7,6.3,-202.6,7.6).lineTo(-203,8).lineTo(-203.1,8.1).curveTo(-203.6,7.3,-203.9,6.3).closePath().moveTo(201.6,8.1).curveTo(200.8,8,199.9,7.3).curveTo(198.4,4.8,194.8,2.3).lineTo(193.4,-7).lineTo(194.8,2.3).lineTo(191.8,1.5).lineTo(188.7,-6.1).lineTo(191.8,1.5).lineTo(188.7,0.8).lineTo(188.7,-6.1).lineTo(188.7,-8.2).curveTo(191.1,-7.8,193.4,-7).lineTo(195.2,-6.4).lineTo(197.1,-5.7).curveTo(199.7,-4.6,201.6,-2.8).curveTo(203.3,-0.3,203.9,2.2).curveTo(204.5,4.6,203.2,7.3).lineTo(197.1,-5.7).lineTo(203.2,7.3).curveTo(202.6,8.1,201.8,8.1).lineTo(201.6,8.1).closePath().moveTo(203.2,7.3).closePath().moveTo(-183.5,1.8).closePath();
	this.shape_12.setTransform(261.3697,133.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,569.7,368.9);


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
	this.instance = new lib.raft("synched",0);
	this.instance.setTransform(277.4,193.5,1,1,0,0,0,277.4,193.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(1.4,-0.5).lineTo(-1.4,0.5);
	this.shape.setTransform(533.175,214.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#814229").setStrokeStyle(1,1,1).moveTo(20.4,-49).lineTo(22.3,-58.6).curveTo(22.4,-63.7,22,-68.6).curveTo(21.5,-74.2,20.3,-79.6).curveTo(17.4,-82.2,17,-79.7).curveTo(11.2,-74,5.2,-68.6).curveTo(1.9,-65.7,-1.3,-63).curveTo(-2.4,-62.1,-3.5,-61.2).lineTo(-12.3,-68.6).lineTo(-14.4,-70.4).lineTo(-16.5,-70).lineTo(-24.8,-68.4).lineTo(-24.9,-68.4).curveTo(-30.6,-67.3,-36.3,-66.2).lineTo(-36.7,-66.1).lineTo(-36.7,-66.1).lineTo(-37.8,-65.9).lineTo(-38.6,-66.5).moveTo(17.8,-76).lineTo(9.4,-68.6).lineTo(0.7,-61).lineTo(15.5,-49.4).lineTo(17.6,-47.7).curveTo(17.2,-45.9,16.6,-44.1).lineTo(8.6,-50.5).lineTo(-1.6,-58.5).lineTo(0.7,-61).moveTo(17.8,-76).lineTo(18.4,-72.3).curveTo(18.8,-70.4,19.1,-68.6).curveTo(19.8,-63.3,19.1,-59).curveTo(18.9,-54,17.9,-49).curveTo(17.7,-48.4,17.6,-47.7).moveTo(-17.5,-73.3).lineTo(-16.5,-73.5).lineTo(-14,-74).lineTo(-8.4,-69.1).lineTo(-7.8,-68.6).lineTo(-7.2,-68.1).lineTo(-1.3,-63).moveTo(-14.4,-70.4).lineTo(-16.5,-72.2).lineTo(-17.5,-73.3).lineTo(-38,-69.2).lineTo(-38.7,-68.1).moveTo(-8.7,-52.9).lineTo(-8.7,-52.9).lineTo(-16.5,-46.7).lineTo(-24.2,-51.8).lineTo(-24.2,-51.8).lineTo(-38,-60.8).moveTo(-1.6,-58.5).lineTo(-7.9,-53.5).moveTo(-3.5,-61.2).curveTo(-8,-57.4,-12.6,-53.8).curveTo(-14.5,-52.3,-16.5,-50.8).lineTo(-20,-53.2).lineTo(-20,-53.2).lineTo(-37.8,-65.9).moveTo(20.4,-49).lineTo(20.4,-49).lineTo(20.3,-48.6).curveTo(20.2,-47.9,20,-47.2).lineTo(19.8,-46.1).moveTo(16.6,-44.1).curveTo(18.7,-42.4,19.5,-44.8).curveTo(19.6,-45.2,19.7,-45.7).moveTo(17,-79.7).lineTo(17.8,-76).moveTo(-23.2,57.3).lineTo(-22.5,59.1).lineTo(-21.8,61.1).moveTo(-16.5,46.6).curveTo(-19,49.4,-21.5,52.1).lineTo(-23.8,54.7).lineTo(-23.2,57.3).moveTo(0.2,65.8).lineTo(-7.3,71.8).lineTo(-16.5,79.1).lineTo(-20.6,69.5).lineTo(-20.6,69.5).curveTo(-21.1,68.4,-21.5,67.4).lineTo(-22,66.3).lineTo(-21.8,61.1).moveTo(-2.3,62.6).lineTo(-2.6,63).lineTo(-7.1,67.7).curveTo(-8.9,69.1,-10.7,70.5).curveTo(-11.2,70.9,-11.6,71.2).curveTo(-13.3,72.5,-15.1,73.8).curveTo(-15.2,73.9,-15.3,74).curveTo(-15.9,74.5,-16.5,75).lineTo(-18.3,70.2).lineTo(-18.4,70.1).lineTo(-21.8,61.1).moveTo(-22,66.3).lineTo(-22.4,65.3).moveTo(18.8,44.7).lineTo(18.4,44.1).lineTo(18.3,44).curveTo(18.2,44.1,18.2,44.2).curveTo(17,45.3,15.8,46.5).curveTo(15.7,46.6,15.6,46.7).curveTo(12,50.1,8.3,53.5).curveTo(7.9,53.9,7.5,54.2).curveTo(7.4,54.3,7.3,54.4).curveTo(3.6,57.6,-0,60.8).moveTo(19.1,43.9).lineTo(19.1,43.8).curveTo(18.8,41.4,19.9,41.9).lineTo(21.3,43.1).lineTo(37.4,57).moveTo(19.4,45.5).lineTo(18.9,44.8).moveTo(18.9,44.6).curveTo(18.8,44.6,18.8,44.7).moveTo(19.4,45.5).lineTo(19.2,46.1).lineTo(19.6,48.3).lineTo(20.3,52).curveTo(20.7,53.9,20.9,55.7).curveTo(21.6,61,21,65.3).curveTo(20.7,70.2,19.8,75).curveTo(19.8,75.1,19.7,75.3).curveTo(19.6,75.9,19.4,76.6).lineTo(19.6,76.7).moveTo(18.9,44.6).lineTo(18.9,44.8).lineTo(18.8,44.7).moveTo(19.4,45.5).curveTo(19.2,44.5,19.1,43.9).curveTo(18.9,44.1,18.9,44.6).moveTo(-2.2,62.6).lineTo(-11.7,54.6).lineTo(-16.5,50.5).lineTo(-16.5,46.6).lineTo(-8.5,53.5).lineTo(-0.3,60.6).lineTo(-0,60.8).lineTo(-0.1,60.8).curveTo(-1.1,61.7,-2.2,62.6).lineTo(-2.3,62.6).moveTo(2,62.7).lineTo(2.6,63.2).lineTo(17,74.6).lineTo(19.4,76.6).moveTo(0.3,65.7).lineTo(-0.3,65.2).lineTo(2,62.7).moveTo(0.2,65.8).lineTo(0.3,65.7).moveTo(-2.2,62.6).curveTo(-2.2,62.6,-2.2,62.6).lineTo(-2.3,62.6).moveTo(19.4,45.5).curveTo(20.8,49.2,21.5,53.5).curveTo(21.6,53.9,21.6,54.4).curveTo(22,57.2,22.2,60.3).curveTo(22.5,66.9,20.7,73.3).curveTo(20.2,74.9,19.7,76.5).curveTo(19.6,76.6,19.6,76.7).moveTo(19.6,48.3).lineTo(2.6,63.2).moveTo(19.2,46.1).lineTo(18.3,48.4).lineTo(2,62.7).moveTo(22.9,48.5).lineTo(19.4,45.5).moveTo(38.7,61.8).lineTo(38,61.2).moveTo(38.2,62.3).lineTo(38.1,62.3).curveTo(37,63.2,35.9,64.2).curveTo(35.7,64.4,35.4,64.6).curveTo(29.9,69,24.4,73.2).curveTo(23.4,73.9,22.4,74.7).lineTo(24.2,65.7).curveTo(24.3,60.6,23.9,55.7).curveTo(23.5,52,22.9,48.5).moveTo(38.7,61.8).lineTo(38.7,66).moveTo(38.7,61.8).lineTo(37.4,57).moveTo(38,61.2).lineTo(22.9,48.5).moveTo(22.4,74.7).curveTo(21.2,75.6,19.9,76.4).curveTo(19.8,76.5,19.6,76.7).moveTo(17.9,79.6).curveTo(18,79.3,18.1,79).curveTo(18.3,78.7,18.5,78.4).curveTo(18.9,77.9,19.3,77.2).curveTo(19.4,76.9,19.6,76.7).moveTo(18.1,79.7).curveTo(18.2,79.8,18.4,80.1).lineTo(18.3,80.1).curveTo(18,80.3,18.1,79.9).curveTo(18.1,79.8,18.1,79.7).closePath().moveTo(17.9,79.6).curveTo(18,79.7,18.1,79.7).moveTo(18.4,80.1).lineTo(18.1,79.9).lineTo(12.7,75.6).lineTo(10.5,73.9).lineTo(0.2,65.8).moveTo(18.5,80.2).lineTo(18.4,80.1).moveTo(38.7,66).lineTo(26.4,75.7).lineTo(23.1,78.3).lineTo(21.5,78.9).moveTo(18.5,80.2).curveTo(20.5,81.9,21.4,79.5).lineTo(21.5,78.9).lineTo(18.5,80).lineTo(18.4,80.1).moveTo(18.5,80).curveTo(18.5,80.1,18.5,80.2).moveTo(17.9,79.6).lineTo(0.3,65.7).moveTo(-16.5,50.5).lineTo(-23.2,57.3);
	this.shape_1.setTransform(502.925,224.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#000000").setStrokeStyle(0.1,1,1).moveTo(0,-1.8).lineTo(0,-0.4).curveTo(0,0.7,-0,1.8);
	this.shape_2.setTransform(486.425,144.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-18.8,-116.4).curveTo(-18.6,-116.7,-18.3,-116.9).curveTo(-17.4,-118.2,-15.7,-119.4).curveTo(-15.5,-119.5,-15.4,-119.6).curveTo(-14.4,-120.2,-13.2,-120.8).curveTo(-12.1,-121.5,-10.7,-122.1).lineTo(-8.2,-122.3).lineTo(-4.6,-122.4).lineTo(0.9,-122.7).lineTo(2.8,-122.2).lineTo(8,-121).lineTo(11,-120.2).curveTo(14.6,-117.6,16.1,-115.1).curveTo(17,-114.5,17.8,-114.4).curveTo(18.7,-114.3,19.4,-115.1).curveTo(20.7,-117.9,20.1,-120.3).curveTo(19.5,-122.8,17.8,-125.3).curveTo(15.9,-127,13.3,-128.2).curveTo(12.4,-128.6,11.4,-128.9).curveTo(10.5,-129.2,9.6,-129.5).curveTo(7.3,-130.2,4.8,-130.7).curveTo(4.4,-130.8,4,-130.8).curveTo(2.6,-131.1,1.2,-131.4).curveTo(-0.8,-131.6,-2.9,-131.9).curveTo(-4.7,-132,-6.6,-132.1).curveTo(-7.5,-132.2,-8.5,-132).curveTo(-10.6,-131.8,-12.9,-130.7).curveTo(-13.5,-130.3,-14.2,-129.9).curveTo(-14.6,-129.8,-14.9,-129.5).lineTo(-18.1,-126.4).curveTo(-18.9,-124.6,-19.4,-123.1).curveTo(-19.4,-122.8,-19.5,-122.6).moveTo(-19.5,-112.8).curveTo(-19.2,-114.7,-18.8,-116.4).moveTo(-19.5,-118).curveTo(-19.3,-117.1,-18.8,-116.3).lineTo(-18.8,-116.4).moveTo(6.4,-99.5).lineTo(16.1,-99.5).moveTo(19,-99.5).lineTo(19.3,-99.5).lineTo(21.6,-78.8).curveTo(22.7,-68.9,23.7,-59.8).lineTo(24.6,-51.5).curveTo(25.3,-45.7,25.9,-40.4).curveTo(27.6,-25.5,29,-13.6).lineTo(31.6,7.6).lineTo(31.6,7.6).lineTo(31.6,7.6).lineTo(31.6,7.6).lineTo(34.4,26.1).moveTo(-27.8,-99.3).lineTo(-19.5,-99.5).lineTo(-15.3,-99.5).moveTo(-10.9,-99.5).lineTo(-10.8,-99.5).lineTo(2.2,-99.5).moveTo(-15.6,-84.6).lineTo(-19.5,-85.3).lineTo(-22.5,-84.2).lineTo(-23,-84.1).lineTo(-23.3,-84).curveTo(-23.3,-83.9,-23.4,-83.9).curveTo(-23.4,-83.9,-23.5,-83.9).curveTo(-25.4,-83.2,-27.2,-82.6).lineTo(-28.6,-82.1).lineTo(-39.7,-78.3).lineTo(-37.8,-60.6).lineTo(-37.3,-60.5).lineTo(-37.4,-61).lineTo(-19.5,-59.8).lineTo(23.7,-59.8).moveTo(14.9,-79.9).lineTo(12.5,-80.2).moveTo(5.6,-81.3).lineTo(-11.4,-84).moveTo(17.8,-114.4).curveTo(18.6,-106.7,19.3,-99.5).moveTo(21.6,-78.8).lineTo(17.3,-79.5).moveTo(-22.5,-84.2).lineTo(-23,-84.1).lineTo(-23.3,-84).moveTo(-23.4,-83.9).lineTo(-27.2,-82.6).lineTo(-28.6,-82.1).moveTo(-39.7,-78.3).lineTo(-41,-91.6).lineTo(-41.6,-97.3).lineTo(-41.7,-98.9).lineTo(-27.9,-99.3).moveTo(-35.1,-40.5).lineTo(-31.8,-13.7).lineTo(29,-13.6).moveTo(-33.5,-13.8).lineTo(-31.8,-13.7).moveTo(-35.1,-40.5).lineTo(-36.6,-40).moveTo(25.9,-40.4).lineTo(-19.5,-45.6).curveTo(-26,-43.5,-32.5,-41.3).curveTo(-32.8,-41.2,-33,-41.2).lineTo(-35.1,-40.5).lineTo(-37.3,-60.5).lineTo(-19.5,-59.8).moveTo(-28.1,6.4).lineTo(-29,7).lineTo(-26.8,23.8).lineTo(-26.1,29.2).moveTo(-28.1,6.4).lineTo(-29,7).lineTo(-29,7).moveTo(-29,7).lineTo(-31.6,8.7).moveTo(-23.6,38.6).lineTo(-24.5,38.4).lineTo(-23.5,46.6).lineTo(-19.5,61.3).lineTo(-19.5,48.2).moveTo(-23.6,38.7).lineTo(-24.5,38.4).moveTo(-29,7).lineTo(-31.8,-13.7).moveTo(15.4,13.3).lineTo(16.1,13).moveTo(-19.5,25.5).lineTo(-14.7,23.7).moveTo(-14.6,40.4).lineTo(-19,39.9).lineTo(-19.5,39.7).lineTo(-21.4,39.2).moveTo(-19,39.9).lineTo(-19.5,39.9).lineTo(-21.3,39.3).moveTo(-11.5,22.6).lineTo(15.2,13.3).moveTo(35,30.3).lineTo(35.1,31.5).moveTo(35,30.4).lineTo(35.2,31.5).moveTo(35.7,35.2).lineTo(35.7,35.5).lineTo(37.2,45.7).lineTo(37.3,46.5).lineTo(23.4,44.9).moveTo(35.7,35.1).lineTo(35.7,35.5).moveTo(18.3,12.3).lineTo(31.6,7.6).moveTo(31.6,7.6).lineTo(-19.5,0.7).lineTo(-28.1,6.4).moveTo(22.5,73.4).lineTo(21.7,53.3).moveTo(37.2,45.7).curveTo(37.7,48,38.1,49.5).curveTo(40.6,59,40.7,67.5).curveTo(40.7,78.7,40.5,89.6).curveTo(25.4,70.2,6.5,74).curveTo(2.4,74.8,-1,76.5).curveTo(-13.5,82.6,-18.6,100.8).curveTo(-19.1,84.6,-19.5,68.6).lineTo(-19.5,61.3).moveTo(16.8,44.1).lineTo(14,43.8).moveTo(12.1,71.2).curveTo(9.5,66,9,59.2).curveTo(8.8,57.2,9.1,53.9).lineTo(9.7,44.8).moveTo(-2.3,75.4).curveTo(-2.1,74.7,-2,74.1).curveTo(-1.2,68.1,-1.1,63.7).curveTo(-0.9,61.8,-1.8,58.5).lineTo(-3.9,48.9).moveTo(-0.5,109.4).lineTo(1.4,114.4).curveTo(3.6,117.9,6,119.7).curveTo(6.5,120.1,7,120.4).curveTo(11.1,122.9,16.2,121.7).lineTo(23.7,118.9).curveTo(30.4,114.9,30.9,109.5).curveTo(31.3,103.9,30.6,98.7).curveTo(30,93.5,27.2,89.9).curveTo(22.2,84.5,14.7,82.1).curveTo(7.1,80.4,0.9,81.8).lineTo(0.9,81.8).curveTo(-3.1,82.9,-6.1,85.5).curveTo(-11.5,89.9,-12.7,94.7).curveTo(-13.8,98.9,-13.2,103.1).curveTo(-12.2,109.6,-9.4,115.7).curveTo(-8.6,117.8,-7.2,119.7).curveTo(-4.4,123.4,1,126.3).curveTo(4.9,128.2,9.5,128).curveTo(14,127.8,18.4,126.7).curveTo(21.4,125.9,24.4,124.8).curveTo(28.8,122.8,31.1,119.7).curveTo(32.1,118.2,32.7,116.5).curveTo(35.9,109.6,37.8,102.5).curveTo(38.8,94.6,35.1,90.9).curveTo(29.5,84.4,21.7,81.8).moveTo(-1.5,95.9).curveTo(-2.8,100.7,-0.9,105.8).curveTo(0.6,109.9,5.5,112).lineTo(11.4,115.1).curveTo(12.5,114.8,13.6,114.5).curveTo(17.8,113,19.2,109.4).curveTo(22,103.9,20.3,99.8).curveTo(19.4,97.8,17.9,95.9).curveTo(14,91.4,8.6,92.5).curveTo(7.1,92.8,5.6,93.8).curveTo(4.8,94.3,4,95.2).curveTo(1.6,98,2.4,100.7).curveTo(3.7,104.7,7.6,105.3).curveTo(9,105.6,10.1,105.5).curveTo(12.1,105.2,13.6,103.7).curveTo(15.5,101.8,14.7,99.9).curveTo(14.1,97.8,11.5,97.4).curveTo(9.7,96.9,8.1,98.6).curveTo(7.9,98.9,7.7,99.2).curveTo(7.1,100.2,7.5,101.6).curveTo(8,103.2,9.1,102.9).curveTo(9.3,102.7,9.6,102.6).moveTo(-6.1,104.8).curveTo(-6.8,99.6,-3.4,95).curveTo(0.9,92.2,4.7,91.4).curveTo(5.6,91.3,6.4,91.2).curveTo(14,90.5,18.8,93.5).curveTo(24.3,97.2,26.2,101.9).curveTo(27.9,105.6,26.9,109.1).curveTo(26.2,112.2,23.1,114.5).curveTo(19.5,117.4,15,118.3).curveTo(14,118.4,13,118.5).curveTo(10.3,118.7,10.1,117.2).moveTo(-18.6,100.8).curveTo(-19,102.4,-14.6,116).curveTo(-14,118,-13,119.7).curveTo(-7.3,129.9,10.9,132.1).curveTo(15.7,131.3,19.7,130.2).curveTo(31.5,126.7,36.5,119.7).curveTo(38,117.5,38.9,115).curveTo(43.5,102,40.5,89.6).moveTo(7.5,43).lineTo(-10.3,40.9).moveTo(-19.5,44.1).lineTo(-19.5,39.9).moveTo(-25.5,28.3).lineTo(-19.5,25.5).lineTo(-25.3,27.7);
	this.shape_3.setTransform(505.9041,255.805);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#333333").setStrokeStyle(0.1,1,1).moveTo(-4.6,1.2).lineTo(-8.4,-8.5).moveTo(-18,-2.1).lineTo(-13.2,2.8).moveTo(-14.2,-6.3).lineTo(-8.1,1.3).moveTo(-19.5,1.2).lineTo(-15.3,4).moveTo(4.1,-7.2).lineTo(8.1,2.6).moveTo(2.9,1.4).lineTo(1.3,-7.8).moveTo(11.1,3.3).lineTo(9.7,-5.9).moveTo(13.4,-4.6).lineTo(19.5,8.4).moveTo(-2.8,-8.3).lineTo(0.9,0.9);
	this.shape_4.setTransform(505.875,132.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F6E3B3").beginStroke().moveTo(-24.5,16.9).curveTo(-25.5,15.2,-26.1,13.3).curveTo(-30.5,-0.4,-30.1,-1.9).curveTo(-25,-20.2,-12.5,-26.2).curveTo(-9.1,-28,-5,-28.7).curveTo(13.9,-32.6,29,-13.2).curveTo(32,-0.7,27.4,12.3).curveTo(26.5,14.8,25,16.9).curveTo(20,24,8.2,27.5).curveTo(4.2,28.6,-0.6,29.3).curveTo(-18.8,27.2,-24.5,16.9).closePath().moveTo(-3,25.3).lineTo(-2,25.2).curveTo(2.5,25.1,6.9,24).curveTo(9.9,23.2,12.9,22).curveTo(17.3,20,19.6,16.9).curveTo(20.6,15.5,21.2,13.8).curveTo(24.4,6.8,26.3,-0.3).curveTo(26.5,-1.9,26.5,-3.4).curveTo(26.5,-8.9,23.6,-11.9).curveTo(18,-18.4,10.2,-21).curveTo(18,-18.4,23.6,-11.9).curveTo(26.5,-8.9,26.5,-3.4).curveTo(26.5,-1.9,26.3,-0.3).curveTo(24.4,6.8,21.2,13.8).curveTo(20.6,15.5,19.6,16.9).curveTo(17.3,20,12.9,22).curveTo(9.9,23.2,6.9,24).curveTo(2.5,25.1,-2,25.2).lineTo(-3,25.3).lineTo(-3,25.3).lineTo(-3.1,25.3).curveTo(-6.7,25.3,-10,23.8).lineTo(-10,23.8).lineTo(-10.5,23.5).curveTo(-15.9,20.6,-18.7,16.9).curveTo(-20.1,15.1,-20.9,13).curveTo(-23.7,6.8,-24.7,0.4).curveTo(-24.9,-1.1,-24.9,-2.5).curveTo(-24.9,-5.3,-24.2,-8.1).curveTo(-23,-12.8,-17.6,-17.2).curveTo(-14.6,-19.8,-10.6,-20.9).lineTo(-10.6,-21).lineTo(-10.5,-21).curveTo(-7.8,-21.6,-4.8,-21.6).lineTo(-4.8,-21.6).lineTo(-4.8,-21.6).curveTo(-1.6,-21.6,1.9,-20.9).lineTo(1.9,-20.9).lineTo(2.2,-20.8).lineTo(3,-20.6).lineTo(3.2,-20.6).curveTo(10.7,-18.3,15.7,-12.8).curveTo(18.5,-9.2,19.1,-4).curveTo(19.5,-0.7,19.5,2.8).lineTo(19.4,6.8).curveTo(18.9,12.2,12.2,16.1).lineTo(4.7,19).lineTo(4.5,19).lineTo(4.4,19.1).curveTo(2.9,19.4,1.6,19.4).lineTo(1.6,19.4).lineTo(1.5,19.4).curveTo(-1.5,19.4,-4,18).lineTo(-4.3,17.8).lineTo(-4.4,17.8).lineTo(-4.5,17.7).lineTo(-5.5,16.9).curveTo(-7.9,15.1,-10.1,11.6).lineTo(-12,6.7).lineTo(-10.1,11.6).curveTo(-7.9,15.1,-5.5,16.9).lineTo(-4.5,17.7).lineTo(-4.4,17.8).lineTo(-4.3,17.8).lineTo(-4,18).curveTo(-1.5,19.4,1.5,19.4).lineTo(1.6,19.4).lineTo(1.6,19.4).curveTo(2.9,19.4,4.4,19.1).lineTo(4.5,19).lineTo(4.7,19).lineTo(12.2,16.1).curveTo(18.9,12.2,19.4,6.8).lineTo(19.5,2.8).curveTo(19.5,-0.7,19.1,-4).curveTo(18.5,-9.2,15.7,-12.8).curveTo(10.7,-18.3,3.2,-20.6).lineTo(3,-20.6).lineTo(2.2,-20.8).lineTo(1.9,-20.9).lineTo(1.9,-20.9).curveTo(-1.6,-21.6,-4.8,-21.6).lineTo(-4.8,-21.6).lineTo(-4.8,-21.6).curveTo(-7.8,-21.6,-10.5,-21).lineTo(-10.6,-21).lineTo(-10.6,-20.9).curveTo(-14.6,-19.8,-17.6,-17.2).curveTo(-23,-12.8,-24.2,-8.1).curveTo(-24.9,-5.3,-24.9,-2.5).curveTo(-24.9,-1.1,-24.7,0.4).curveTo(-23.7,6.8,-20.9,13).curveTo(-20.1,15.1,-18.7,16.9).curveTo(-15.9,20.6,-10.5,23.5).lineTo(-10,23.8).lineTo(-10,23.8).curveTo(-6.7,25.3,-3.1,25.3).lineTo(-3,25.3).lineTo(-3,25.3).closePath().moveTo(0.8,15.8).lineTo(1.3,15.8).lineTo(1.5,15.7).lineTo(3.5,15.5).curveTo(8,14.7,11.6,11.8).curveTo(14.7,9.4,15.4,6.4).curveTo(15.8,5.1,15.8,3.8).curveTo(15.8,1.5,14.7,-0.9).curveTo(12.8,-5.5,7.3,-9.2).lineTo(7.2,-9.3).lineTo(7.1,-9.3).curveTo(3.2,-11.7,-2.4,-11.7).lineTo(-2.5,-11.7).lineTo(-2.5,-11.7).lineTo(-4.5,-11.6).lineTo(-5.1,-11.6).lineTo(-6.8,-11.3).curveTo(-10.6,-10.5,-14.9,-7.8).curveTo(-17.7,-3.9,-17.7,0.3).lineTo(-17.6,2).lineTo(-17.7,0.3).curveTo(-17.7,-3.9,-14.9,-7.8).curveTo(-10.6,-10.5,-6.8,-11.3).lineTo(-5.1,-11.6).lineTo(-4.5,-11.6).lineTo(-2.5,-11.7).lineTo(-2.5,-11.7).lineTo(-2.4,-11.7).curveTo(3.2,-11.7,7.1,-9.3).lineTo(7.2,-9.3).lineTo(7.3,-9.2).curveTo(12.8,-5.5,14.7,-0.9).curveTo(15.8,1.5,15.8,3.8).curveTo(15.8,5.1,15.4,6.4).curveTo(14.7,9.4,11.6,11.8).curveTo(8,14.7,3.5,15.5).lineTo(1.5,15.7).lineTo(1.3,15.8).lineTo(0.8,15.8).lineTo(0.8,15.8).lineTo(0.7,15.8).curveTo(-1.2,15.8,-1.4,14.5).lineTo(-1.4,14.4).lineTo(-1.4,14.5).curveTo(-1.2,15.8,0.7,15.8).lineTo(0.8,15.8).lineTo(0.8,15.8).closePath().moveTo(-0.1,12.3).lineTo(2.1,11.7).curveTo(6.3,10.3,7.7,6.7).curveTo(9.4,3.3,9.4,0.4).curveTo(9.4,-1.4,8.8,-2.9).curveTo(7.9,-5,6.4,-6.9).lineTo(6.4,-6.9).curveTo(3.2,-10.4,-0.8,-10.5).lineTo(-0.8,-10.5).lineTo(-0.9,-10.5).lineTo(-2.6,-10.3).lineTo(-2.6,-10.3).lineTo(-2.6,-10.3).lineTo(-2.9,-10.3).curveTo(-4.4,-10,-5.9,-8.9).curveTo(-6.7,-8.4,-7.5,-7.5).curveTo(-9.3,-5.4,-9.3,-3.4).curveTo(-9.3,-2.7,-9.1,-2).curveTo(-7.8,2,-3.9,2.5).lineTo(-3.6,2.6).lineTo(-3.6,2.6).lineTo(-2.2,2.8).lineTo(-2.1,2.8).lineTo(-2.1,2.8).lineTo(-1.4,2.7).curveTo(0.6,2.5,2.1,0.9).curveTo(3.4,-0.4,3.4,-1.8).curveTo(3.4,-2.3,3.2,-2.9).curveTo(2.6,-5,-0,-5.4).lineTo(-0.1,-5.4).lineTo(-0.2,-5.4).lineTo(-0.8,-5.5).lineTo(-0.8,-5.5).lineTo(-0.8,-5.5).curveTo(-2.1,-5.4,-3.2,-4.3).lineTo(-3.3,-4.2).lineTo(-3.3,-4.1).lineTo(-3.4,-4.1).lineTo(-3.8,-3.6).curveTo(-4.2,-3,-4.2,-2.2).curveTo(-4.2,-1.7,-4,-1.2).lineTo(-4,-1).lineTo(-3.9,-1).curveTo(-3.5,0.2,-2.7,0.2).lineTo(-2.7,0.2).lineTo(-2.7,0.2).lineTo(-2.4,0.1).lineTo(-1.9,-0.2).lineTo(-2.4,0.1).lineTo(-2.7,0.2).lineTo(-2.7,0.2).lineTo(-2.7,0.2).curveTo(-3.5,0.2,-3.9,-1).lineTo(-4,-1).lineTo(-4,-1.2).curveTo(-4.2,-1.7,-4.2,-2.2).curveTo(-4.2,-3,-3.8,-3.6).lineTo(-3.4,-4.1).lineTo(-3.3,-4.1).lineTo(-3.3,-4.2).lineTo(-3.2,-4.3).curveTo(-2.1,-5.4,-0.8,-5.5).lineTo(-0.8,-5.5).lineTo(-0.8,-5.5).lineTo(-0.2,-5.4).lineTo(-0.1,-5.4).lineTo(-0,-5.4).curveTo(2.6,-5,3.2,-2.9).curveTo(3.4,-2.3,3.4,-1.8).curveTo(3.4,-0.4,2.1,0.9).curveTo(0.6,2.5,-1.4,2.7).lineTo(-2.1,2.8).lineTo(-2.1,2.8).lineTo(-2.2,2.8).lineTo(-3.6,2.6).lineTo(-3.6,2.6).lineTo(-3.9,2.5).curveTo(-7.8,2,-9.1,-2).curveTo(-9.3,-2.7,-9.3,-3.4).curveTo(-9.3,-5.4,-7.5,-7.5).curveTo(-6.7,-8.4,-5.9,-8.9).curveTo(-4.4,-10,-2.9,-10.3).lineTo(-2.6,-10.3).lineTo(-2.6,-10.3).lineTo(-2.6,-10.3).lineTo(-0.9,-10.5).lineTo(-0.8,-10.5).lineTo(-0.8,-10.5).curveTo(3.2,-10.4,6.4,-6.9).lineTo(6.4,-6.9).curveTo(7.9,-5,8.8,-2.9).curveTo(9.4,-1.4,9.4,0.4).curveTo(9.4,3.3,7.7,6.7).curveTo(6.3,10.3,2.1,11.7).lineTo(-0.1,12.3).lineTo(-6,9.2).curveTo(-10.9,7.2,-12.4,3).curveTo(-13.6,0,-13.6,-2.9).curveTo(-13.6,-4.9,-13,-6.9).curveTo(-13.6,-4.9,-13.6,-2.9).curveTo(-13.6,0,-12.4,3).curveTo(-10.9,7.2,-6,9.2).lineTo(-0.1,12.3).closePath();
	this.shape_5.setTransform(517.441,358.5562);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CCB798").beginStroke().moveTo(25.2,71.3).lineTo(37.5,61.6).lineTo(37.6,62).lineTo(39.1,72.1).lineTo(39.2,73).closePath().moveTo(15.9,70.3).lineTo(1.5,58.8).lineTo(18.5,43.9).lineTo(19.1,47.6).lineTo(19.8,51.3).curveTo(20.5,56.6,19.8,60.9).curveTo(19.6,65.8,18.7,70.6).closePath().moveTo(23,61.3).curveTo(23.1,56.2,22.7,51.3).curveTo(22.4,47.7,21.8,44.1).lineTo(36.8,56.8).lineTo(37,57.9).lineTo(34.8,59.8).lineTo(34.3,60.2).curveTo(28.8,64.7,23.2,68.8).lineTo(21.2,70.3).closePath().moveTo(-8.4,67.4).lineTo(-0.9,61.4).lineTo(9.3,69.5).closePath().moveTo(-17.1,66.4).lineTo(-17.7,66.2).lineTo(-17.1,66.4).lineTo(-17.7,66.4).lineTo(-17.7,66.2).lineTo(-19.5,65.7).lineTo(-22.9,56.7).lineTo(-23.6,54.8).lineTo(-17.7,52).lineTo(-12.8,50.2).lineTo(-3.3,58.2).lineTo(-3.4,58.2).lineTo(-3.8,58.6).lineTo(-3.4,58.2).lineTo(-3.4,58.3).lineTo(-3.8,58.6).lineTo(-8.2,63.3).lineTo(-11.9,66.1).lineTo(-12.8,66.8).closePath().moveTo(-1.5,56.2).lineTo(-9.7,49.1).lineTo(17,39.8).lineTo(14.6,42.2).lineTo(14.5,42.3).lineTo(7.2,49.1).lineTo(6.3,49.8).lineTo(6.2,50).lineTo(-1.2,56.4).closePath().moveTo(20.2,38.8).lineTo(33.4,34.1).lineTo(33.5,34.1).lineTo(36.2,52.6).closePath().moveTo(17.2,39.8).lineTo(18,39.5).curveTo(17.8,39.8,17.7,40.2).lineTo(17.7,40.3).closePath().moveTo(33.4,34.1).lineTo(-17.7,27.1).lineTo(-26.3,32.9).lineTo(-27.2,33.5).lineTo(-29.9,12.7).lineTo(30.8,12.8).lineTo(33.5,34.1).closePath().moveTo(-17.7,-19.1).lineTo(-30.7,-14.9).lineTo(-31.2,-14.7).lineTo(-33.2,-14).lineTo(-35.5,-34.1).lineTo(-17.7,-33.3).lineTo(25.5,-33.3).lineTo(26.5,-25).lineTo(27.7,-13.9).closePath().moveTo(-39.2,-65.2).lineTo(-25.4,-56.2).lineTo(-26.8,-55.7).lineTo(-37.9,-51.9).closePath().moveTo(19.2,-53).lineTo(19.3,-53.3).lineTo(19.3,-53.4).lineTo(21.2,-62.9).curveTo(21.3,-68,20.9,-73).lineTo(21.2,-73).lineTo(23.5,-52.3).closePath().moveTo(14.3,-53.8).lineTo(-0.5,-65.4).lineTo(8.2,-73).lineTo(17.9,-73).curveTo(18.6,-67.6,18,-63.4).curveTo(17.7,-58.3,16.7,-53.4).closePath().moveTo(-9.6,-57.5).lineTo(-9,-57.9).lineTo(-2.8,-62.9).lineTo(7.4,-54.8).closePath().moveTo(-21.2,-57.6).lineTo(-20.7,-57.7).lineTo(-21.1,-57.6).closePath().moveTo(-38.9,-70.3).lineTo(-37.9,-70.5).lineTo(-37.8,-70.5).lineTo(-37.5,-70.6).lineTo(-26,-72.8).lineTo(-26,-72.8).lineTo(-17.7,-73).lineTo(-13.4,-73).lineTo(-4.6,-65.5).curveTo(-9.1,-61.7,-13.7,-58.2).lineTo(-17.7,-58.8).lineTo(-20.7,-57.7).lineTo(-21.2,-57.6).closePath().moveTo(-8.4,-72.5).lineTo(-9,-73).lineTo(-9,-73).lineTo(-8.4,-72.5).lineTo(-9,-73).lineTo(4,-73).lineTo(-2.5,-67.4).closePath().moveTo(-9,-73).closePath();
	this.shape_6.setTransform(504.075,229.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#83A4AC").beginStroke().moveTo(18.5,80.2).lineTo(18.6,80).lineTo(21.5,78.9).lineTo(21.4,79.5).curveTo(20.9,80.9,20,80.9).curveTo(19.3,80.9,18.5,80.2).closePath().moveTo(18.4,80.1).lineTo(18.6,80).lineTo(18.5,80.2).closePath().moveTo(18.1,79.9).lineTo(18.1,79.7).lineTo(17.9,79.6).lineTo(0.3,65.7).lineTo(17.9,79.6).lineTo(18.1,79.7).lineTo(18.1,79.9).lineTo(12.7,75.6).lineTo(10.5,73.9).lineTo(0.3,65.8).lineTo(0.3,65.7).lineTo(0.3,65.8).lineTo(-7.3,71.8).lineTo(-16.5,79.1).lineTo(-20.6,69.5).lineTo(-20.6,69.5).lineTo(-21.5,67.4).lineTo(-21.9,66.3).lineTo(-21.8,61.1).lineTo(-18.3,70.1).lineTo(-18.3,70.2).lineTo(-16.5,75).lineTo(-15.3,74).lineTo(-15,73.8).lineTo(-11.6,71.2).lineTo(-10.7,70.5).lineTo(-7.1,67.7).lineTo(-2.6,63).lineTo(-2.2,62.6).lineTo(-2.1,62.6).lineTo(-11.7,54.6).lineTo(-16.5,50.5).lineTo(-16.5,46.6).lineTo(-16.5,50.5).lineTo(-23.1,57.3).lineTo(-23.8,54.7).lineTo(-21.5,52.1).lineTo(-16.5,46.6).lineTo(-8.5,53.5).lineTo(-0.3,60.6).lineTo(0,60.8).lineTo(7.3,54.4).lineTo(7.5,54.2).lineTo(8.4,53.5).lineTo(15.7,46.7).lineTo(15.8,46.5).lineTo(18.2,44.2).lineTo(18.4,44).lineTo(18.4,44.1).lineTo(18.8,44.7).lineTo(18.9,44.6).curveTo(18.9,44.1,19.2,43.9).lineTo(19.2,43.8).curveTo(18.8,41.4,19.9,41.9).lineTo(21.4,43.1).lineTo(37.4,57).lineTo(37.4,57).lineTo(38.1,61.2).lineTo(38,61.2).lineTo(23,48.5).curveTo(23.5,52,23.9,55.7).curveTo(24.3,60.6,24.2,65.7).lineTo(22.4,74.7).lineTo(24.4,73.2).curveTo(30,69,35.5,64.6).lineTo(35.9,64.2).lineTo(38.2,62.3).lineTo(38.2,62.3).lineTo(38.7,66).lineTo(38.7,66).lineTo(26.4,75.7).lineTo(23.1,78.3).lineTo(21.5,78.9).lineTo(18.6,80).lineTo(18.4,80.1).lineTo(18.1,79.7).lineTo(18.4,80.1).closePath().moveTo(19.4,77.2).lineTo(18.6,78.4).lineTo(18.1,79).lineTo(17.9,79.6).lineTo(18.1,79).lineTo(18.6,78.4).lineTo(19.4,77.2).lineTo(19.6,76.7).lineTo(19.9,76.4).lineTo(22.4,74.7).lineTo(19.9,76.4).lineTo(19.6,76.7).lineTo(19.5,76.6).lineTo(19.7,75.3).lineTo(19.8,75).curveTo(20.8,70.2,21,65.3).curveTo(21.7,61,21,55.7).lineTo(20.3,52).lineTo(19.6,48.3).lineTo(2.6,63.2).lineTo(17,74.6).lineTo(19.5,76.6).lineTo(19.6,76.7).lineTo(19.4,77.2).closePath().moveTo(20.7,73.3).lineTo(19.7,76.5).lineTo(19.6,76.7).lineTo(19.7,76.5).lineTo(20.7,73.3).curveTo(22.2,67.8,22.2,62.2).lineTo(22.2,60.3).curveTo(22.1,57.2,21.6,54.4).lineTo(21.5,53.5).curveTo(20.8,49.2,19.5,45.5).lineTo(23,48.5).lineTo(19.5,45.5).lineTo(19.2,43.9).lineTo(19.5,45.5).lineTo(18.9,44.8).lineTo(19.5,45.5).lineTo(19.2,46.1).lineTo(19.5,45.5).curveTo(20.8,49.2,21.5,53.5).lineTo(21.6,54.4).curveTo(22.1,57.2,22.2,60.3).lineTo(22.2,62.2).curveTo(22.2,67.8,20.7,73.3).closePath().moveTo(-0.3,65.2).lineTo(0.3,65.7).lineTo(-0.3,65.2).lineTo(2,62.7).lineTo(-0.3,65.2).closePath().moveTo(2,62.7).lineTo(2.6,63.2).lineTo(2,62.7).lineTo(18.4,48.4).lineTo(19.2,46.1).lineTo(19.6,48.3).lineTo(19.2,46.1).lineTo(18.4,48.4).lineTo(2,62.7).closePath().moveTo(-0.1,60.8).lineTo(-2.1,62.6).lineTo(-0.1,60.8).lineTo(0,60.8).closePath().moveTo(18.9,44.8).lineTo(18.9,44.6).lineTo(18.9,44.8).lineTo(18.8,44.7).closePath().moveTo(18.1,79.7).lineTo(18.1,79.7).closePath().moveTo(21.5,78.9).closePath().moveTo(-2.2,62.6).lineTo(-2.1,62.6).lineTo(-2.2,62.6).closePath().moveTo(-2.1,62.6).closePath().moveTo(19.5,45.5).lineTo(19.5,45.5).closePath().moveTo(19.5,45.5).lineTo(19.5,45.5).closePath().moveTo(19.5,45.5).closePath().moveTo(16.7,-44.1).lineTo(17.6,-47.7).lineTo(17.9,-49).curveTo(18.9,-54,19.2,-59).curveTo(19.8,-63.3,19.1,-68.6).lineTo(18.5,-72.3).lineTo(17.8,-76).lineTo(17,-79.7).lineTo(17.8,-76).lineTo(9.4,-68.6).lineTo(0.7,-61).lineTo(-1.6,-58.5).lineTo(0.7,-61).lineTo(15.5,-49.4).lineTo(17.6,-47.7).lineTo(16.7,-44.1).lineTo(8.6,-50.5).lineTo(-1.6,-58.5).lineTo(-7.8,-53.5).lineTo(-8.4,-53.1).lineTo(-8.6,-52.9).lineTo(-8.7,-52.9).lineTo(-16.5,-46.7).lineTo(-24.2,-51.8).lineTo(-20.5,-53).lineTo(-20.4,-53.1).lineTo(-20.3,-53.1).lineTo(-20.4,-53.1).lineTo(-24.2,-51.8).lineTo(-38,-60.8).lineTo(-38.6,-66.5).lineTo(-37.8,-65.9).lineTo(-38.6,-66.5).lineTo(-38.7,-68.1).lineTo(-24.8,-68.4).lineTo(-36.3,-66.2).lineTo(-36.6,-66.1).lineTo(-36.7,-66.1).lineTo(-37.8,-65.9).lineTo(-20,-53.2).lineTo(-20.3,-53.1).lineTo(-20,-53.2).lineTo(-16.5,-50.8).lineTo(-12.6,-53.8).curveTo(-7.9,-57.4,-3.5,-61.2).lineTo(-12.2,-68.6).lineTo(-14.4,-70.4).lineTo(-16.5,-72.2).lineTo(-16.5,-73.5).lineTo(-16.5,-76.1).lineTo(-14,-74).lineTo(-8.4,-69.1).lineTo(-7.8,-68.6).lineTo(-7.2,-68.1).lineTo(-1.3,-63).lineTo(5.2,-68.6).curveTo(11.2,-74,17,-79.7).curveTo(17.5,-82.2,20.4,-79.6).curveTo(21.5,-74.2,22.1,-68.6).curveTo(22.4,-63.7,22.3,-58.6).lineTo(20.4,-49).lineTo(20.4,-48.6).lineTo(20.1,-47.2).lineTo(19.8,-46.1).lineTo(19.7,-45.7).lineTo(19.6,-44.8).curveTo(19.1,-43.4,18.1,-43.4).curveTo(17.5,-43.4,16.7,-44.1).closePath().moveTo(-3.5,-61.2).lineTo(-1.3,-63).lineTo(-3.5,-61.2).closePath().moveTo(-16.5,-73.5).lineTo(-14,-74).closePath().moveTo(20.4,-49).lineTo(20.4,-49).lineTo(20.4,-48.6).closePath().moveTo(20.4,-49).closePath().moveTo(-38.6,-66.5).closePath().moveTo(-38,-69.2).lineTo(-17.5,-73.3).lineTo(-16.5,-72.2).lineTo(-16.5,-70).lineTo(-24.8,-68.4).lineTo(-24.8,-68.4).lineTo(-38.7,-68.1).closePath().moveTo(-24.8,-68.4).lineTo(-24.8,-68.4).closePath().moveTo(17.8,-76).closePath();
	this.shape_7.setTransform(502.9,224.9522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#BB9065").beginStroke().moveTo(-20,79.5).lineTo(-20,72.3).lineTo(-23.9,57.5).lineTo(-25,49.3).lineTo(-24.1,49.6).lineTo(-20,59.1).lineTo(-10.8,51.8).lineTo(7,54).lineTo(9.2,55.7).lineTo(14.6,59.9).lineTo(14.6,60).curveTo(14.6,60.1,14.6,60.1).curveTo(14.6,60.1,14.6,60.2).curveTo(14.6,60.2,14.6,60.2).curveTo(14.6,60.2,14.7,60.2).lineTo(14.7,60.2).lineTo(14.7,60.2).lineTo(14.8,60.2).lineTo(14.8,60.2).lineTo(14.8,60.2).lineTo(14.9,60.1).lineTo(14.9,60.1).lineTo(15,60.3).curveTo(17.1,62,17.9,59.6).lineTo(18,59).lineTo(19.6,58.4).lineTo(22.9,55.8).lineTo(36.8,57.4).lineTo(36.7,56.6).lineTo(37.6,60.5).curveTo(40.1,70,40.2,78.4).curveTo(40.2,89.6,40,100.5).curveTo(24.9,81.1,6,85).curveTo(2,85.7,-1.5,87.5).curveTo(-14,93.5,-19.1,111.8).lineTo(-20,79.5).closePath().moveTo(-1.6,74.7).curveTo(-1.7,79,-2.5,85).lineTo(-2.8,86.3).lineTo(-2.5,85).curveTo(-1.7,79,-1.6,74.7).lineTo(-1.6,73.9).curveTo(-1.6,72.1,-2.2,69.4).lineTo(-4.4,59.8).lineTo(-2.2,69.4).curveTo(-1.6,72.1,-1.6,73.9).lineTo(-1.6,74.7).closePath().moveTo(22,84.3).lineTo(21.2,64.2).closePath().moveTo(8.6,70.1).curveTo(9,76.9,11.6,82.2).curveTo(9,76.9,8.6,70.1).lineTo(8.5,68.3).curveTo(8.5,66.8,8.7,64.8).lineTo(9.2,55.7).lineTo(8.7,64.8).curveTo(8.5,66.8,8.5,68.3).lineTo(8.6,70.1).closePath().moveTo(-20,72.3).lineTo(-20,59.1).closePath().moveTo(14.7,60.2).curveTo(14.6,60.2,14.6,60.2).curveTo(14.6,60.2,14.6,60.2).curveTo(14.6,60.1,14.6,60.1).curveTo(14.6,60.1,14.6,60).lineTo(14.6,59.9).lineTo(14.9,60.1).lineTo(14.9,60.1).lineTo(14.8,60.2).lineTo(14.8,60.2).lineTo(14.8,60.2).lineTo(14.7,60.2).lineTo(14.7,60.2).lineTo(14.7,60.2).closePath().moveTo(14.9,60.1).closePath().moveTo(13.5,54.7).lineTo(16.3,55.1).lineTo(16.2,55.3).lineTo(16,56.7).closePath().moveTo(-21.8,50.2).lineTo(-20,50.8).lineTo(-20,55.1).lineTo(-20,50.8).lineTo(-19.4,50.8).lineTo(-15.1,51.3).lineTo(-18.5,53.9).lineTo(-18.8,54.1).lineTo(-20,55.1).closePath().moveTo(-26.6,37.4).lineTo(-20,30.6).lineTo(-15.2,34.6).lineTo(-20,36.4).lineTo(-25.8,38.7).lineTo(-20,36.4).lineTo(-26,39.2).closePath().moveTo(-20,36.4).closePath().moveTo(-29.5,18).lineTo(-28.6,17.4).lineTo(-20,11.6).lineTo(31.1,18.5).lineTo(31.1,18.5).lineTo(17.9,23.2).lineTo(16.4,22).curveTo(15.3,21.5,15.7,23.9).lineTo(15.7,23.9).lineTo(14.9,24.2).lineTo(14.9,24.1).lineTo(14.7,24.3).lineTo(-12,33.6).lineTo(-20,26.7).lineTo(-25,32.1).lineTo(-27.3,34.7).closePath().moveTo(-32.3,-2.8).lineTo(-35.5,-29.5).lineTo(-33.5,-30.3).lineTo(-33,-30.4).lineTo(-20,-34.7).lineTo(25.4,-29.4).lineTo(28.5,-2.7).closePath().moveTo(-20,-48.9).lineTo(-37.9,-50.1).lineTo(-37.8,-49.6).lineTo(-38.3,-49.7).lineTo(-40.2,-67.4).lineTo(-29.1,-71.2).lineTo(-27.7,-71.7).lineTo(-20,-66.6).lineTo(-12.2,-72.8).lineTo(-12.1,-72.8).lineTo(-11.9,-73.1).lineTo(5.1,-70.4).lineTo(13.2,-64.1).curveTo(15.2,-62.4,16.1,-64.7).lineTo(16.2,-65.6).lineTo(16.3,-66).lineTo(16.6,-67.1).lineTo(16.9,-68.6).lineTo(21.2,-67.9).lineTo(23.2,-48.9).closePath().moveTo(-37.8,-49.6).lineTo(-37.9,-50.1).lineTo(-20,-48.9).closePath().moveTo(12,-69.3).lineTo(14.4,-69).lineTo(14.1,-67.7).closePath().moveTo(-23.5,-73.2).lineTo(-23,-73.3).lineTo(-20,-74.3).lineTo(-16.1,-73.7).lineTo(-20,-70.7).closePath().moveTo(18.6,-88.6).curveTo(18,-94.2,16.9,-99.6).curveTo(14,-102.1,13.5,-99.6).curveTo(7.7,-93.9,1.7,-88.6).lineTo(-11.3,-88.6).lineTo(-11.9,-89).lineTo(-17.5,-93.9).lineTo(-20,-96).lineTo(-20,-98.3).lineTo(-20,-100.5).lineTo(-20,-101.9).curveTo(-19.7,-103.8,-19.2,-105.5).lineTo(-18.8,-106).curveTo(-17.9,-107.3,-16.2,-108.5).lineTo(-15.8,-108.6).lineTo(-13.7,-109.9).curveTo(-12.5,-110.6,-11.1,-111.2).lineTo(-8.6,-111.3).lineTo(-5.1,-111.5).lineTo(0.4,-111.8).lineTo(2.4,-111.3).lineTo(7.6,-110.1).lineTo(10.6,-109.3).curveTo(14.1,-106.7,15.7,-104.2).curveTo(16.5,-103.5,17.3,-103.4).lineTo(18.8,-88.6).closePath().moveTo(5.9,-88.6).lineTo(14.3,-96).lineTo(15,-92.3).lineTo(15.6,-88.6).closePath().moveTo(-11.3,-88.6).lineTo(-11.9,-89).lineTo(-11.3,-88.6).closePath().moveTo(-20,-88.6).lineTo(-20,-89.9).lineTo(-17.9,-90.4).lineTo(-15.7,-88.6).closePath().moveTo(-20,-92.2).lineTo(-17.9,-90.4).lineTo(-20,-89.9).closePath();
	this.shape_8.setTransform(506.4,244.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DB7A4D").beginStroke().moveTo(17.4,8.9).curveTo(16.6,8.8,15.7,8.1).curveTo(14.2,5.6,10.6,3).lineTo(9.2,-6.2).lineTo(10.6,3).lineTo(7.6,2.3).lineTo(3.6,-7.6).lineTo(7.6,2.3).lineTo(2.4,1.1).lineTo(0.8,-8.1).lineTo(2.4,1.1).lineTo(0.5,0.6).lineTo(-3.3,-8.6).lineTo(0.5,0.6).lineTo(-5,0.8).lineTo(-8.9,-8.8).lineTo(-5,0.8).lineTo(-8.6,1).lineTo(-14.6,-6.7).lineTo(-8.6,1).lineTo(-11.1,1.1).curveTo(-12.5,1.7,-13.6,2.4).lineTo(-18.5,-2.4).lineTo(-13.6,2.4).lineTo(-15.8,3.7).lineTo(-19.9,0.8).lineTo(-15.8,3.7).lineTo(-16.1,3.9).curveTo(-17.8,5.1,-18.7,6.3).lineTo(-19.2,6.9).lineTo(-19.2,6.9).curveTo(-19.7,6.1,-19.9,5.3).lineTo(-19.9,0.8).lineTo(-19.9,0.7).lineTo(-19.8,0.2).curveTo(-19.3,-1.3,-18.5,-3.1).lineTo(-15.3,-6.2).lineTo(-14.6,-6.7).lineTo(-13.3,-7.4).curveTo(-11,-8.6,-8.9,-8.8).curveTo(-7.9,-8.9,-7,-8.8).lineTo(-3.3,-8.6).lineTo(0.8,-8.1).lineTo(3.6,-7.6).lineTo(4.4,-7.4).curveTo(6.9,-7,9.2,-6.2).lineTo(11,-5.7).lineTo(12.9,-4.9).curveTo(15.5,-3.8,17.4,-2).curveTo(19.1,0.5,19.7,3).curveTo(20.3,5.4,19,8.1).lineTo(12.9,-4.9).lineTo(19,8.1).curveTo(18.4,8.9,17.6,8.9).lineTo(17.4,8.9).closePath().moveTo(19,8.1).closePath().moveTo(0.5,0.6).closePath();
	this.shape_9.setTransform(506.3197,132.5853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,569.7,388.9);


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
		{src:"images/bankofariver.png?1644274105770", id:"bankofariver"},
		{src:"images/Bitmap2.png?1644274105770", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1644274105770", id:"Bitmap3"},
		{src:"images/BlueFrogi.png?1644274105770", id:"BlueFrogi"},
		{src:"images/brownborad.png?1644274105770", id:"brownborad"},
		{src:"images/butterfly_open.png?1644274105770", id:"butterfly_open"},
		{src:"images/Cards.png?1644274105770", id:"Cards"},
		{src:"images/check_active.png?1644274105770", id:"check_active"},
		{src:"images/check_notActive.png?1644274105770", id:"check_notActive"},
		{src:"images/clock.png?1644274105770", id:"clock"},
		{src:"images/ComboBox.png?1644274105770", id:"ComboBox"},
		{src:"images/CONTINUEBTN.png?1644274105770", id:"CONTINUEBTN"},
		{src:"images/EndAnimitonBackground.png?1644274105770", id:"EndAnimitonBackground"},
		{src:"images/endbuttuns.png?1644274105770", id:"endbuttuns"},
		{src:"images/finalborad.png?1644274105770", id:"finalborad"},
		{src:"images/frogiHappy.png?1644274105770", id:"frogiHappy"},
		{src:"images/FrogiSideLook.png?1644274105770", id:"FrogiSideLook"},
		{src:"images/Game_Name_Subject.png?1644274105770", id:"Game_Name_Subject"},
		{src:"images/GameBackground.png?1644274105770", id:"GameBackground"},
		{src:"images/gm1.png?1644274105770", id:"gm1"},
		{src:"images/GreenFrogi.png?1644274105770", id:"GreenFrogi"},
		{src:"images/Homescreenbackground.png?1644274105770", id:"Homescreenbackground"},
		{src:"images/Howtoplayborad.png?1644274105770", id:"Howtoplayborad"},
		{src:"images/img_temp_1.jpg?1644274105770", id:"img_temp_1"},
		{src:"images/img_temp_2.jpg?1644274105770", id:"img_temp_2"},
		{src:"images/img_temp_3.jpg?1644274105770", id:"img_temp_3"},
		{src:"images/img_temp_4.jpg?1644274105770", id:"img_temp_4"},
		{src:"images/jump.png?1644274105770", id:"jump"},
		{src:"images/jump2.png?1644274105770", id:"jump2"},
		{src:"images/jumpBlue.png?1644274105770", id:"jumpBlue"},
		{src:"images/jumpeGreen.png?1644274105770", id:"jumpeGreen"},
		{src:"images/jumperGreen.png?1644274105770", id:"jumperGreen"},
		{src:"images/jumpingfrogi.png?1644274105770", id:"jumpingfrogi"},
		{src:"images/jumpPink.png?1644274105770", id:"jumpPink"},
		{src:"images/looksideBlue.png?1644274105770", id:"looksideBlue"},
		{src:"images/looksidePink.png?1644274105770", id:"looksidePink"},
		{src:"images/music.png?1644274105770", id:"music"},
		{src:"images/mute.png?1644274105770", id:"mute"},
		{src:"images/namegameH1.png?1644274105770", id:"namegameH1"},
		{src:"images/num0.png?1644274105770", id:"num0"},
		{src:"images/num1.png?1644274105770", id:"num1"},
		{src:"images/num2.png?1644274105770", id:"num2"},
		{src:"images/num3.png?1644274105770", id:"num3"},
		{src:"images/num4.png?1644274105770", id:"num4"},
		{src:"images/num5.png?1644274105770", id:"num5"},
		{src:"images/num6.png?1644274105770", id:"num6"},
		{src:"images/num7.png?1644274105770", id:"num7"},
		{src:"images/num8.png?1644274105770", id:"num8"},
		{src:"images/num9.png?1644274105770", id:"num9"},
		{src:"images/OpenanimitonBackground.png?1644274105770", id:"OpenanimitonBackground"},
		{src:"images/PAUSEBTN.png?1644274105770", id:"PAUSEBTN"},
		{src:"images/PauseH1.png?1644274105771", id:"PauseH1"},
		{src:"images/PinkFrogi.png?1644274105771", id:"PinkFrogi"},
		{src:"images/plant.png?1644274105771", id:"plant"},
		{src:"images/sadfrogi.png?1644274105771", id:"sadfrogi"},
		{src:"images/stopbutton.png?1644274105771", id:"stopbutton"},
		{src:"images/TimeoverH1png.png?1644274105771", id:"TimeoverH1png"},
		{src:"images/Viconpng.png?1644274105771", id:"Viconpng"},
		{src:"images/wave.png?1644274105771", id:"wave"},
		{src:"images/whiteline.png?1644274105771", id:"whiteline"},
		{src:"images/Xicon.png?1644274105771", id:"Xicon"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644274105771", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644274105771", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1644274105771", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644274105771", id:"an.ComboBox"}
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