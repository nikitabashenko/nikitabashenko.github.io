



    	menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');
   
    if (x.className === "topnav") {
     x.className += " responsive";
     } else {
         x.className = "topnav";
    }
}




var k = document.getElementById("headerrrr").clientHeight;



var f=function(){
var event = function(e){

	var header = document.getElementById('header');

	var y =window.scrollY;

	if (y<k){
		header.style.cssText = 'position:absolute;';
		
	
	}
	 if(y>k){

		header.style.cssText = 'position:fixed; top:0;';


	}
	
}

window.addEventListener('scroll',event,false);
	}

	document.addEventListener('DOMContentLoaded',f,false);