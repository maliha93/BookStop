function loadmodal() {
			var modal = document.getElementById('myModal');
			modal.style.display = "block";
			var span = document.getElementsByClassName("close")[0];
			span.onclick = function() {
			    modal.style.display = "none";
			}
			window.onclick = function(event) {
    				if (event.target == modal) {
       				 modal.style.display = "none";
   				 }
			}
}


function loadmodal2(name) {
			var modal = document.getElementById('myModal');
			//document.getElementById("temp").innerHTML=name;
			create2(name,1);
			modal.style.display = "block";
			var span = document.getElementsByClassName("close")[0];
			span.onclick = function() {
			    modal.style.display = "none";
			}
			window.onclick = function(event) {
    				if (event.target == modal) {
       				 modal.style.display = "none";
   				 }
			}
}

function create2(value,days) {
			
			if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		
		var temp="";
		if(document.cookie.indexOf("debug") != -1)
		temp=readCookie("debug")+",";
		document.cookie = "debug"+"="+temp+value+expires+"; path=/";
		console.log("debug"+" "+value+" "+days);
			
}

function readCookie(name) {
	
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}




