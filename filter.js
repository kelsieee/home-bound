//find all elements with "item" class
//function to initially loop through all items and hide them
// function hide_init(){
//    for (var i = 0; i < alls.length; ++i) { 
//  alls[i].style.display = 'none'; 
// }
// }


// function show_all(){  
//   //loop through all items and show them
//    for (var i = 0; i < alls.length; ++i) { 
//  alls[i].style.display = 'inline-block'; 
// } 
// }


function show_one_dollar(){  
    var onedollars = document.querySelectorAll('.onedollar');
    var alls = document.querySelectorAll('.project-container');
    for (var i = 0; i < alls.length; ++i) { 
        alls[i].style.display = 'none'
    }
   for (var i = 0; i < onedollars.length; ++i) { 
    onedollars[i].style.display = 'inline-block'; 
} 
}

function reset(){
    var alls = document.querySelectorAll('.project-container');
    for (var i = 0; i < alls.length; ++i) { 
         alls[i].style.display = 'inline-block'; 
    } 
}