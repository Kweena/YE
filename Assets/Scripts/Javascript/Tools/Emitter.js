"use strict"
function Emitter(position,velocity,spread,rate,max)
{
	this.particles = [];
	this.position = position || new Vector(); //position
	this.velocity = velocity || new Vector(); // accelleration
	this.spread = spread || Math.PI / 32; //angle possible
	this.color = Math.Random.ColorRGB() /*"white"*/; //couleur des particule
	this.rate = rate || 5; // nbr de particule a la frame
	this.particlesMax = max || 20000;
	this.rnd = 0;
}

Emitter.prototype.emitParticles = function()
{
	var count = this.rate;
	while (count--) 
	{
		if (this.particles.length < this.particlesMax)
		{
			var angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2) + ++ this.rnd;
			var position = new Vector(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random());
			var velocity = this.velocity.fromAngle(angle); 

			this.particles.push(new Particles(position,velocity,this.color));
			continue;
		}
	else return;
	//new Particles ( position , velocity); 
	}
}

Emitter.prototype.update = function()
{
	this.emitParticles();
	for(var particle in this.particles)
	{
		this.particles[particle].update();
		this.particles[particle].render();
		if (this.particles[particle].outOfBounds()) 
		{
			this.particles.splice(particle, 1);
		}
		
	}
}

