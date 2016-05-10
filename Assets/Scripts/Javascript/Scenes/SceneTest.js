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
function SceneTest() {
	this.name = "SceneTest";
	this.GameObjects =[];
	this.count = 0;
	this.power = 15;

	this.started = false;

	this.Awake = function() {
		// console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenSceneBegin();
			// operation start

			this.GameObjects.push(new GoTest());
			this.GameObjects.push(new GoTest1());
			this.GameObjects.push(new GoTest2());
			this.GameObjects.push(new GoCible());

			

			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {

			ctx.fillStyle = '#5F71A5';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();
			}

			var text = "Would you tell me , please , where I have to go from here ? Much depends on where you want to go . I care not the place ... In this case, regardless of the route you will take ."

			Dialogue.Begin(text,5,400,400,"white","Georgia");

			console.log(Dialogue.interval)
			console.clear();

			console.log(Dialogue.words)
			console.log(Dialogue.letters)
			this.GUI();
		// 	//GFX
		// 	if (this.count % this.power == 0) 
		// 	{
		// 		var affectedZone = {
		// 		x : 0,
		// 		y : 0,
		// 		w : canvas.width,
		// 		h : canvas.height
		// 		};

		// 		Gfx.Filter.Flash(affectedZone,1,"white");

		// 	}
			
		// 	this.count ++;
		// }
	}
}
	this.GUI = function() 
	{
		if (!Application.GamePaused) 
		{
			if (Dialogue.finished) 
			{
				Dialogue.interrupted = false;
			}	
			else
			{
				Dialogue.Continue();
			}	
		} 
		else 
		{
			// Show pause menu
		}
	}

	this.Awake();

}