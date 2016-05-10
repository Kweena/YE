var Dialogue =
{
	
	font : "",
	fontSize : "",
	color : "",
	text : "",
	destination : new Vector(100,230),
	interval : 1,
	interrupt : false,

	words: [],
	lettersCounter : 0,
	wordsCounter : 0,
	actualType : "",

	InitText : function(font, fontSize, color, text)
	{
		this.font = font || "Arial";
		this.fontSize = fontSize || "14px";
		this.color = color || "black";
		this.text = text || "Great men are forged in fire. It is the privilege of lesser men to light the flame. Whatever the cost.";

		//ctx.font = font + " " +fontSize;
		//ctx.fillStyle = color;
		//ctx.fillText(text, destination.Transform.position.x, destination.Transform.position.y)

		this.Begin();
	},
	
	Begin : function()
	{
		this.words = this.text.split(" ");
		this.Continue();
		ctx.rect(100,200,900,300);
		ctx.fillStyle = "rgba(255,105,180,0.3)";
		ctx.fill();

	},

	Continue : function()
	{
		if (this.wordsCounter != this.words.length) 
		{
			for(this.wordsCounter = 0; this.wordsCounter < this.words.length; this.wordsCounter++)
			{
				for(this.lettersCounter = 0; this.lettersCounter < this.words[this.wordsCounter].length; this.lettersCounter++)
					{
						this.actualType += this.words[this.wordsCounter][this.lettersCounter];

						this.Write();
						//this.lettersCounter ++;
					}
						// console.log("idx mot : " + wordsCounter);

		 		if(this.lettersCounter === this.words[this.wordsCounter].length)
		 		{
		 			this.actualType += " ";
					this.lettersCounter = 0;
		 		}
			}
		}
		this.Write();
	},

	Interrupt : function()
	{
		ctx.fillText(this.text, this.destination.x, this.destination.y);
	},

	Write : function()
	{
		
		ctx.fillText(this.actualType, this.destination.x, this.destination.y);
		
	},

	CheckLineLength : function()
	{
		if( ctx.measureText(currentText).width >= destination.Transform.size.x)
		{

		}	 
	}
}
