/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// * Define Global Variables
 
const existingUL = document.getElementById('navbar__list');	
const mySections = document.querySelectorAll('section');
myFragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
	
	for (let mySection of mySections){
		var i = mySections.length;
		let myText = mySection.getAttribute('data-nav');
		let myTarget = mySection.getAttribute('id');
		let myListItem = document.createElement('li');
			myListItem.classList.add('col-' + i, 'col-s-' + i); // for responsive 12 columns media Query
		let myLink = document.createElement('a');
			myLink.href = ('#' + myTarget);
			myListItem.id = (myTarget + ' button');
			myLink.addEventListener("click", function (event) {
				
				event.preventDefault();
				mySection.scrollIntoView({
				behavior: "smooth",
				block: "center",
				});
			});
			
		let textNode = document.createTextNode(myText);
		
		//appending all data together
		myLink.appendChild(textNode);
		myListItem.appendChild(myLink);
		myFragment.appendChild(myListItem);
		//i = i + 1;
	};
	//
	existingUL.appendChild(myFragment);




// Add class 'active' to section when near top of viewport

window.addEventListener('scroll',function(){
		
	for (let mySectionAgain of mySections){
		const sectionCord = mySectionAgain.getBoundingClientRect(); 	// Storing the Coordinates of each section
				
		if (sectionCord.top >= -70 && sectionCord.top <= 400){			// setting condition to check if section is active
		
		// Section is Active
		
		mySectionAgain.classList.add('your-active-class'); // ==> adding class 'your-active-class' to active section

		// finding the active button => then adding class 'activeButton' to it
		let myLinkItem2 = document.getElementById(mySectionAgain.getAttribute('id') + ' button');
			myLinkItem2.classList.add('activebutton');

			
		} else {
		// Section is NOT active
		
		mySectionAgain.classList.remove('your-active-class'); // ==> Removing class 'your-active-class' from active section
		
		// finding the Not active button => then removing class 'activeButton' from it
		let myLinkItem2 = document.getElementById(mySectionAgain.getAttribute('id') + ' button');
			myLinkItem2.classList.remove('activebutton');
		}
		
	};
});

