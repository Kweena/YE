function Particles(position,velocity,color)
{
	this.position = position;
	this.velocity = velocity;
	this.color = color;
	this.acceleration = new Vector(0,0);
}

Particles.prototype.update = function()
{
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	this.submitToField(Application.LoadedScene.GameObjects[0]);
}

Particles.prototype.render = function()
{
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x,this.position.y, 1,1);
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
	 var Acceleration = new Vector();

	 for (var i = 0; i < fields.length; i++) 
	 {
	 	var field = fields[i];
	 	var vector = new Vector();

	 	vector.x = field.position.x - this.position.x;  	
	 	vector.y = field.position.y - this.position.y; 

	 	var strength = field.mass / vector.lengthSq();

	 	Acceleration = vector.mul(strength);
	 }  

	 this.acceleration = Acceleration;
}