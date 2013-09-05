function toggleVisibility(thisCommand)
{
    //Find the command's content entity (In a retarded way)
    b = thisCommand.nextSibling; //THIS
    b = b.nextSibling;           //IS
    b = b.nextSibling;           //CRAP!!

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
    return;
}