function changemail() {
			var data = new FormData();
			data.append('email', document.getElementById("chemail").value);
			var x=document.getElementById("chemail").value;
			if(x.length==0){
				document.getElementById("showMessage").innerHTML="Please enter a valid email!";
				return;
			}
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x))){  
				document.getElementById("showMessage").innerHTML="Please enter a valid email!";
    				return ;
			}
			xhttp= new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
				if(this.readyState==4 && this.status==200){
					
					if(xhttp.responseText.localeCompare("Success")==0){
						window.location.href = "account.html";
					}	
					else
					document.getElementById("showMessage").innerHTML=xhttp.responseText;
				}
			};
			
			xhttp.open("POST","changeMail.php",true);
			xhttp.send(data);
}


function loadmail() {
			xhttp= new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
				if(this.readyState==4 && this.status==200){
					if(xhttp.responseText.localeCompare("login")==0){
						window.location.href = "login";
					}	
					else
					document.getElementById("mailid").innerHTML=xhttp.responseText;
				}
			};
			xhttp.open("POST","getmail.php",true);
			xhttp.send();
		}
