/**	**** Create a new Scene **** 
*
*	@step 1							Copy the content of this file in a new .js document.
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 2							Save the new file in Assets/Javascript/Scenes/NameOfYourScene.js .
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 3                      	In the index.html add below this comment <!-- Scene --> the line: 
*                    "<script type="text/javascript" src="Assets/Scripts/Javascript/Scenes/NameOfYourGameObject.js"></script>"
*	----------------------------------------------------------------------------------------------------------------------------
*	@step 4						    For create a new scene, use this instruction: "new Scene()".
*/

/*	**** How to make the setup of a Scene ****
*	
*	@property name 																											{string} 			 
*	The name of the scene.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@property GameObjects 																				   {array[GameObject1, ...]} 			 
*	All the GameObject of the scene	
*
*/

/*	**** Scene's Methods ****
*
*	@method Awake()									
*	Called at the instruction new Scene().
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Start()									
*	Called at the first use of scene in game.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Update()								
*	Called each frame,code game is here.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method GUI()
*	Called each frame, code all the GUI here.
*/

/* **** For launch Scene ****
*
*	To load your scene, use this instruction: "Application.LoadLevel(LevelName)".
*/
function GridScene() {
	this.name = "GridScene";
	this.GameObjects =[];
	this.position = Input.mousemove;
	this.obstacles = new Array(196);
	this.map = new Array(196);
	this.width = 700;
	this.height = 700;
	this.nbCol = 700 / 50;
	this.nbline = 700 / 50;
	this.sizeCell = new Vector();
	this.sizeCell.x = 50;
	this.sizeCell.y = 50;
	this.startPoint = 0;
	this.endPoint = 650;

	this.started = false;

	this.Awake = function() {
		console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenSceneBegin();
			// operation start
			this.started = true;


			for (var i = 0; i < this.obstacles.length; i++) {
				this.obstacles[i] = Math.Random.RangeInt(1,4,true);
			}
			WalkableTiles = [2,3,4];
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	
	this.Update = function() 
	{
		// Grid(this.width,this.height,this.sizeCell,"black");

		ctx.beginPath();
		ctx.strokeStyle = "black";
		for (var i = 0; i <= this.width; i+=this.sizeCell.x)
		{
			ctx.moveTo(i,0);
			ctx.lineTo(i,this.width);
			for (var j = 0; j <= this.height; j+=this.sizeCell.y)
			{
				if (i == 0) 
				{
					ctx.moveTo(0,j);
					ctx.lineTo(this.height,j);
				}
				if (this.obstacles[i / this.sizeCell.x + j /this.sizeCell.y * this.nbCol] == 1 && i != this.width) 
				{
					ctx.fillStyle = "black";
					ctx.fillRect(i,j,this.sizeCell.x,this.sizeCell.y);
				}
			}	
		}

		for (var i = 0; i < this.width; i++) 
		{
			for (var j = 0; j < this.height; j++)
			{
				if (i == this.startPoint && j == this.startPoint) 
				{
					ctx.fillStyle = "green";
					ctx.fillRect(i,j,this.sizeCell.x,this.sizeCell.y);
				}
				if (i == this.endPoint && j== this.endPoint) 
				{
					ctx.fillStyle = "red";
					ctx.fillRect(i,j,this.sizeCell.x,this.sizeCell.y);
				}
			} 
		}	
		ctx.stroke();
		ctx.closePath();

		var path = new PathFinding(this.obstacles,this.nbCol,this.nbline);
		var result = path.Process();

		for (var i = 0; i < result.length; i++) 
		{
			for (var j = 0; j < result.length; j++) 
			{
				
				ctx.fillStyle = "blue";
				ctx.fillRect(result[i],result[j],this.sizeCell.x,this.sizeCell.y);
			}
		}
			



		if (Input.MouseClick) 
		{
			console.log("Case X : " + Math.floor(Input.MousePosition.x / this.sizeCell.x) + " Case Y : " + Math.floor(Input.MousePosition.y / this.sizeCell.y))
		
		}

		if (!Application.GamePaused) {
			for (var i = 0; i < this.GameObjects.length; i++) {
				//this.GameObjects[i].Start();
			}

		}
		this.GUI();
		
	}
	this.GUI = function() {
		if (!Application.GamePaused) {
			//Show UI
		} else {
			// Show pause menu
		}
	}

	this.Awake()
}