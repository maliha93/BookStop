function loadr() {
			
			xhttp= new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
				if(this.readyState==4 && this.status==200){
					
					if(xhttp.responseText.localeCompare("login")==0)
						window.location.href="login";
					else
						document.getElementById("body").innerHTML=xhttp.responseText;
				}
			};
			xhttp.open("POST","myproduct.php",true);
			xhttp.send();
		}


function remove(id,name) {
			
	var data = new FormData();
	data.append('id', name);	
	xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
	if(this.readyState==4 && this.status==200){
		document.getElementById(id).innerHTML=xhttp.responseText;
		document.getElementById(id).style.color = 'red';
		}
	};
	xhttp.open("POST","remove.php",true);
	xhttp.send(data);
	
}
