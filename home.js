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

	if($(obj).is(":checked")){
		alert('checked')
		var likedCard = document.getElementById('card1');
		// console.log(likedCard.parentElement)
		
		var cardElement = likedCard.parentElement
		var cardElementString = cardElement.outerHTML
		// console.log(cardElementString)
		// console.log(stringify(cardElement))
		localStorage.setItem('thecard', cardElementString);
		// console.log((localStorage.getItem('thecard')))
		// return cardElement
		// localStorage.setItem("thecard", likedCard);
		// return false;
		// var like
	  }	  
	
	}