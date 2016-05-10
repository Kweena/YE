var Dialogue =
{
	//Settings
	interval : 0,
	shortInterval : 1,
	mediumInterval : 2,
	longInterval : 3,

	//Dont Touch this Var
	words: [],
	letters : [],
	intervalCountDown : 0,
	destination : "", // Text a affiché
	position : 
	{
		x : 0,
		y : 0,
	},
	finished : true,
	interrupted : false,
	colorFont : "black",
	font : "14px Georgia",

	//restart value
	InitDialogue : function()
	{
        this.words = [];
        this.letters = [];
        this.intervalCountdown = 0;
        this.destination = "";
        this.position = 
        {
            x: 0,
            y: 0
        };
        this.finished = true;
        this.defaultColor = "black"
	},
	
	//start value
	Begin : function(text,interval,destination,defaultColor,font)
	{
		this.words = text.split(" ");
		this.interval = interval;
		this.position = destination;
		this.finished = false;
		this.destination = " ";
		this.font = font;
		
	},

	Continue : function()
	{
		if (!Application.LoadedScene.GamePaused) 
		{
			this.Write(this.destination,this.position.x,this.position.y,this.defaultColor);
			this.intervalCountDown -= Time.DeltaTime;
			if (this.intervalCountDown <= 0 && this.words.length > - 1 ) //si on a attendu la fin du count et qu'il reste des lettres a affiché
			{
				if (this.letters.length > 0) //si un mot est en cours d'affichage
				{
					this.destination += this.letters[0];
					this.letters.splice(0,1); //on retire l'index zero, une fois.
					this.intervalCountdown = this.interval; //restart de l'intervalCount
				}
				else
				{
					switch(this.words[0])
					{
						case "[short]":
							this.intervalCountdown += this.shortInterval;
							this.words.splice(0,1);
							return;

						case "[medium]":
							this.intervalCountdown += this.mediumInterval;
							this.words.splice(0,1);
							return;

						case "[long]":
							this.intervalCountdown += this.longInterval;
							this.words.splice(0,1);
							return;

						default:
							if (this.words[0] != undefined) 
							{
								this.letters = this.words[0].split("");
								this.words.splice(0,1);
								this.destination += " ";
								this.finished = false;
							} 
							else
							{
								if(!this.interrupted)
								{
									this.finished = true;
								}
							}
							return;
					}		
				}
			}
		}

		/*Old Version*/
		// if (this.wordsCounter != this.words.length) 
		// {
		// 	for(this.wordsCounter = 0; this.wordsCounter < this.words.length; this.wordsCounter++)
		// 	{
		// 		for(this.lettersCounter = 0; this.lettersCounter < this.words[this.wordsCounter].length; this.lettersCounter++)
		// 			{
		// 				this.actualType += this.words[this.wordsCounter][this.lettersCounter];

		// 				this.Write();
		// 				//this.lettersCounter ++;
		// 			}
		// 				// console.log("idx mot : " + wordsCounter);

		//  		if(this.lettersCounter === this.words[this.wordsCounter].length)
		//  		{
		//  			this.actualType += " ";
		// 			this.lettersCounter = 0;
		//  		}
		// 	}
		// }
		// this.Write();
	},

	Interrupt : function()
	{
		if(this.interrupted) // si c'est interrupted, le text a donc été affiché il n'est donc plus interrupt mais fini.
		{
			this.interrupted = false;
			this.finished = true;
		}
		else if (!this.interrupt) 
		{
			while (this.letters.length > 0)
			{
				this.destination += this.letters[0];
				this.letters.splice(0,1);
			}
			while (this.words.length > 0)
			{
				if (this.words[0] == "[short]" || this.words[0] == "[medium]" || this.words[0] == "[long]" ) 
				{
					this.words.splice(0,1);
				}
				else
				{
					this.destination += " " + this.words[0];
					this.words.splice(0,1);
				}
			}
			this.finished = false;
			this.interrupt = true;
		}
	},

	Write : function(str,x,y,color)
	{
		ctx.fillStyle = color;
		ctx.font = this.font;
		for (var i = 0; i < str.length; i++) {
			var ch = str.charAt(i);
			switch(ch)
			{
				case "$": //Red Flag
				ctx.fillStyle = (ctx.fillStyle == color) ? "red" : color;
				continue;

				case "°": //Green Flag
				ctx.fillStyle = (ctx.fillStyle == color) ? "green" : color;
				continue;
			}
			ctx.fillText(ch,x,y);
			x += ctx.measureText(ch).width;
		}
	},
}
