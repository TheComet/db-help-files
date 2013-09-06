function toggleVisibility2(thisCommand)
{
	var b = document.getElementById(thisCommand.id + "-content");
	if(thisCommand.className == "commandUnfolded")
	{
		thisCommand.className = "commandFolded";
		b.style.display = "none";
	}
	else
	{
		thisCommand.className = "commandUnfolded";
		b.style.display = "block";
	}
}