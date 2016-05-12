function Grid(w,h,sizeCell,color)
{
	ctx.beginPath();
	ctx.strokeStyle = color;
	for (var i = 0; i <= w; i+= sizeCell)
	{
		ctx.moveTo(i,0);
		ctx.lineTo(i, w);
		for (var j = 0; j <= h; j+= sizeCell)
		{
			if (i == 0) 
			{
				ctx.moveTo(0,j);
				ctx.lineTo(h,j);
			}
		}	
	}

}
		