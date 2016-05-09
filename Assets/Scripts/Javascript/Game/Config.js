var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: true
};

var ImagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = [
	// { name:"monImage",path: "background/image.png"},
	{name : "sujet", path : "Boy.png"},
	{name : "sujet1", path : "Character Cat Girl.png"},
	{name : "sujet2", path : "Character Horn Girl.png"},
	{name : "Mask", path : "mask.png"},
	{name : "cible", path : "Enemy Bug.png"}

];
var Images = {};
