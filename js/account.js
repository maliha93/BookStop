function loadAcc() {
			
			xhttp= new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
				if(this.readyState==4 && this.status==200){
					
					if(xhttp.responseText.indexOf("login")!=-1)
					{
						window.location.href="login";
					}
					else
					document.getElementById("acc").innerHTML=xhttp.responseText;
					
				}
			};
			xhttp.open("POST","account.php",true);
			xhttp.send();
}
