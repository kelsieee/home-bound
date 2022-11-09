function openTab(evt, name) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
  }


document.getElementById("defaultOpen").click();


function passValues(obj){
	console.log(obj.parentNode)
	var parentObj = obj.parentNode
	// <input type="checkbox" id="heart1" onchange="passValues(this)">
	
	if($(obj).is(":checked")){
		// alert('checked')
		

		var likedCard = parentObj;		
		
		var cardElementString = likedCard.outerHTML
		localStorage.setItem('thecard', cardElementString);

		
		// var likedCard = document.getElementById('card1');		
		// var cardElementString = likedCard.outerHTML
		// localStorage.setItem('thecard', cardElementString);
		
		
		
	  }	  
	
	}