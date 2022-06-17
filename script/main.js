// we always start with a module to encapsulate our own code
// is is called an IIFE (Immediately-Invoked Function Expression)

(() => {
	// collect ALL of the elements that we want the user to interact with and also elements that to change
	// JS holds these in memory so that it can access them later (these are elements in the HTML)
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
		gameBoard = document.querySelector('.puzzle-board'),
		pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone');

		




	function resetBackg(id){
		gameBoard.style.backgroundImage = `url(images/backGround${id}.jpg)`;

	}

	function updatedPieces(id){
	
		pzlPieces[0].src = 'images/topLeft'+ id+'.jpg';
		pzlPieces[1].src = 'images/topRight'+ id+'.jpg';
		pzlPieces[2].src = 'images/bottomLeft'+ id+'.jpg';
		pzlPieces[3].src = 'images/bottomRight'+ id+'.jpg';
	}




	function resetBackgroundAndPieces() {
		
		resetBackg(this.dataset.bgref);
		updatedPieces(this.dataset.bgref);

	}

	function allowDrag(event) {
		console.log('started draggin me');

		// create a reference to the element we're dragging so we can retrieve it later
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		// override default behaviour on certain elements when an event happens
		event.preventDefault();
		console.log('started draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		let droppedElId = event.dataTransfer.getData('draggedEl');
		console.log("dropped");

			
	}

	// how to we want the user to interact with the elements that we collected earlier?
	// events are things like clikcs, drags, double-clicks, keypresses... all the ways that a user can interact with a mouse, a keyboard etc
 
	theThumbnails.forEach(image => image.addEventListener('click', resetBackgroundAndPieces));
	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	// set up the drop zone event handling
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
})();
