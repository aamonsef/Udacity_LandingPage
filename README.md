# Landing Page Project

## Table of Contents

1-> looping for all sections to get the att. 'data-nav'
2-> in the loop 
	creating li with link a and href to selected sections
	
3-> adding eventListner to window Element act to 'scroll'
4-> when scroll :
	looping for all section (again) and geting its cordinates by .getBoundingCleintRec() Method
	by if statement, checking if **.top is between viweable range ( assume from -70 to +400 )
		if yes ==> adding 'your-active-class' to the classList
		if No  ==> Removing 'your-active-class' from the classList
	by the same if statement ==> adding/ removing class 'activebutton' to the active link in nav bar 
	
	
minor modification of HTML file ==> ( removing 'your-active-class' from original file ) and added/removed by HTML

adding some styles in CSS file just like navbar styling 