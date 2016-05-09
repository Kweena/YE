Gfx = {
	Filter : {
		Greyscale : function(affectedZone)
		{
			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h); //(x,y,w,h)
			var d = pixels.data;

			for(var i = 0; i < d.length; i += 4)
			{
				var r = d[i];
				var g =	d[i + 1];
				var b = d[i + 2];

				var variation = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

				d[i] = d[i + 1] = d[i + 2] = variation;
			}

			ctx.putImageData(pixels, affectedZone.x, affectedZone.y);
		},

		Sepia : function(affectedZone){

			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);

			var d = pixels.data;

			for (var i = 0; i < d.length; i += 4) {
				var r = d[i];
				var g = d[i+1];
				var b = d[i+2];

				var outR = (r * 0.393) + (g *.769) + (b * .189);
				var outG = (r * 0.349) + (g *0.686) + (b * 0.168);
				var outB = (r * 0.272) + (g *0.534) + (b * 0.131);

				d[i] = outR;
				d[i + 1] = outG;
				d[i + 2] = outB
			}

			ctx.putImageData(pixels, affectedZone.x, affectedZone.y);
		},

		// White2transparent : function(affectedZone,img)
		// {
			
		// 	ctx.drawImage(Images["Mask"],0,0,canvas.width,canvas.height);
		// 	var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
		// 	var d = pixels.data;

		//     var r=0, g=1, b=2,a=3;

		//     for (var i = 0; i < d.length; i += 4)
		//     {
		//       	if 
		//       	(
	 //            	d[i+r] > 250 &&
	 //            	d[i+g] > 250 &&
	 //            	d[i+b] > 250) // if white then change alpha to 0
		  		
		//       	{
		//       		d[i+a] = 0;
		//       	}
		//     }

		//     fillStyle = "blue";
		// 	ctx.fillRect(0,0,canvas.width,canvas.height);
		//     ctx.putImageData(pixels, affectedZone.x, affectedZone.y);

		// },

		Flash : function(affectedZone,power,color)
		{
			
			ctx.save();

			ctx.fillStyle = color;
			ctx.fillRect(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);

			ctx.restore();

		}
	}
};