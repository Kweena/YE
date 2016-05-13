function Camera(x,y)
{
	this.name = "Camera";
	this.Transform = {};
	this.Transform.position = new Vector();
	this.Transform.position.x = x;
	this.Transform.position.y = y;
	this.speed = 10;

	this.MoveOnX = function(KeyCode)
	{
		if (Input.KeysDown[KeyCode]) 
		{
			this.Transform.position.x -= this.speed;
		}
		else
		{
			this.Transform.position.x = 0
		}

	};

	this.MoveOnY = function(KeyCode)
	{
		if (Input.KeysDown[KeyCode]) 
		{
			this.Transform.position.y -= this.speed;
		}
	};

}

