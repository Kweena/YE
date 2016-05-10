function Particles(position,velocity,color)
{
	this.position = position;
	this.velocity = velocity;
	this.color = Math.Random.ColorRGB() /*"white"*/;
	this.acceleration = new Vector(0,0);
}

Particles.prototype.update = function()
{	
	this.submitToField();
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);

}

Particles.prototype.render = function()
{
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x,this.position.y, 2,2);
}

Particles.prototype.outOfBounds = function()
{
	if (this.position.x > canvas.width || this.position.x < 0) 
	{
		return true;
	}
	if (this.position.y > canvas.height || this.position.y < 0) 
	{
		return true;
	}
	return false;
}

Particles.prototype.submitToField = function(fields)
{
	 //var Acceleration = new Vector();

	 for (var i = 0; i < Application.LoadedScene.GameObjects[0].fields.length; i++) 
	 {
	 	var field = Application.LoadedScene.GameObjects[0].fields[i];
	 	var vector = new Vector();

	 	vector.x = field.position.x - this.position.x;  	
	 	vector.y = field.position.y - this.position.y; 

	 	var strength = field.mass / vector.lengthSq();
	 	this.acceleration = vector.mul(strength);

	 	//Acceleration = vector.mul(strength);
	 }  

	 //this.acceleration = Acceleration;
}