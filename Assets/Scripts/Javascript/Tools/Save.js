layerPrefs = 
{
	//solution : localStorage

	Save: function(key,value)
	{
		localStorage.setItem(key,value);
	}

	Load : function(key)
	{
		localStorage.getItem(key);
	}

	Delete : function(key)
	{
		localStorage.removeItem(key);

	}
}