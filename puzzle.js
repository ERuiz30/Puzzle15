document.onreadystatechange = function () {
	var puzzleAreaTiles = document.getElementById("puzzlearea").children;
      
    function initializePuzzleArea() {
		var x = 0;
        var y = 0;
        for (i = 0; i < puzzleAreaTiles.length; i++) {
			puzzleAreaTiles[i].setAttribute("class", "puzzlepiece");
			//This will set the coordinate of the top left tile
			puzzleAreaTiles[i].style.top = y+"px" ;
			puzzleAreaTiles[i].style.left = x+"px" ;
			puzzleAreaTiles[i].style.backgroundPosition = "-"+x+"px "+"-"+y+"px" ;
			// This will increment until we get to position 300px an dthen it will change to reset the x value
			if (x==300){
				var y = y + 100; 
				var x = 0; }
			else{var x = x + 100;}
			}
		}
    initializePuzzleArea();
}
