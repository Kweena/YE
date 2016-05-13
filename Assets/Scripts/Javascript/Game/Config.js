/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @return {object} Object1 - The first object
 */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
// canvas.style.background = 'red';
var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: false
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
