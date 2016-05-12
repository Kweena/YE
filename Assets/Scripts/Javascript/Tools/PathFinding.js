function PathFinding(map, collumnNb, lineNb)
{
	//map
	this.map = map;
	this.WalkableTiles = [];

	//Size and Dimension
	this.mapDimensions = new Vector();
	this.mapDimensions.x  = collumnNb;
	this.mapDimensions.y = lineNb;
	this.mapSize = this.mapDimensions.x * this.mapDimensions.y;

	//shortcuts
	this.tileCol = Physics.TileCollision;

	//settings
	this.distanceAlgo = Math.ManathanDist;
	// this.NeighboursAlgo = function();

	this.Neighbours = function (x,y)
	{
		var N = 1;
		var S = 3;
		var E = 2;
		var W = 4;


		var myN = this.tileCol(this.map, this.mapDimensions, new Vector(x,y),N);
		var myS = this.tileCol(this.map, this.mapDimensions, new Vector(x,y),S);
		var myE = this.tileCol(this.map, this.mapDimensions, new Vector(x,y),E);
		var myW = this.tileCol(this.map, this.mapDimensions, new Vector(x,y),W);

		result = [];
		if (myN) result.push({x:x, y: y-1});
		if (myS) result.push({x:x, y: y+1});
		if (myE) result.push({x: x+1, y:y});
		if (myW) result.push({x: x-1, y:y});

		return result;
		//FindNeighbours();
	};

	this.Node = function(parent,pos,worldWidth)
	{
		var node = 
		{
			parent : parent,

			value : pos.x + (pos.y * worldWidth),
			x : pos.x,
			y : pos.y,
			estimateCost : 0,
			goal : 0
		};
		return node;
	};

	this.Process = function()
	{
		var pathStart = this.Node(null,new Vector(0,0),this.mapDimensions.x);
		var pathEnd = this.Node(null,new Vector(13,13),this.mapDimensions.x);

		var ASTAR = new Array(this.mapSize);

		var Available = [pathStart];
		var Forbidden = [];
		var Results = [];
		var neighbours;
		var node;
		var path;
		var length,max,min,i,j;

		while(length = Available.length)
		{
			max = this.mapSize;
			min = -1;
			for(i = 0; i < length; i ++)
			{
				if (Available[i].estimateCost < max) 
				{
					max = Available[i].estimateCost;
					min = i;
				}
			}
			node = Available.splice(min,1)[0];
			//si le node que je teste est ma destination
			if (node.value === pathEnd.value) 
			{
				path = Forbidden[Forbidden.push(node) - 1];
				while (path = path.parent)
				{
					Results.push([path.x,path.y]);
				}

				ASTAR = Forbidden = Available = [];

				Results.reverse();
				console.log(Results);
				return Results;
			}
			else //n'est pas ma destination
			{
				// console.log("coucou")
				this.neighbours = this.Neighbours(node.x,node.y);
				// console.log(this.neighbours)
				for(i = 0, j = this.neighbours.length; i< j ; i++)
				{
					path = this.Node(node,this.neighbours[i],this.mapDimensions.x); //parent et position
					if (!ASTAR[path.value]) 
					{
						path.goal = node.goal + this.distanceAlgo(this.neighbours[i],node); 
						path.estimateCost = node.goal + this.distanceAlgo(this.neighbours[i],pathEnd);
						Available.push(path);

						ASTAR[path.value] = true;
						// console.log("coucou")
					}
				}

				Forbidden.push(node);
			}
			// return result;
		}
		// return this.Process();
	};

	
}