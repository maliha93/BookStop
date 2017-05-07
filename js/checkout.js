function createCookie(name,value,days) {
	
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	
	var temp="";
	document.cookie = name+"="+temp+value+expires+"; path=/";
	console.log(name+" "+value+" "+days);
	//document.getElementById("pp").innerHTML="NOW";
}


function check() {
		
			
	var data = new FormData();
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var address=document.getElementById("address").value;
	if(name.length==0 || email.length==0 || address.length==0)
		return;
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))  
    		return ;
	var mobile=document.getElementById("mobile").value;
	if(mobile.length==0 || mobile.search(/[a-z]/i)!=-1)
		return;
	data.append('name', document.getElementById("name").value);
	data.append('email', document.getElementById("email").value);
	data.append('mobile', document.getElementById("mobile").value);	
	data.append('address', document.getElementById("address").value);
	data.append('note', document.getElementById("note").value);
	var e = document.getElementById("type");
	var text = e.options[e.selectedIndex].text;
	data.append('type', text);
	data.append('bill',localStorage.getItem("bill")); 
	document.getElementById("sub").innerHTML="Processing..";
	document.getElementById("sub").style.color = 'green';
	xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
	
	if(this.readyState==4 && this.status==200){
		createCookie("debug","",-1);
		window.location.href = "orderprocessed";
		//document.getElementById(temp).style.color = 'green';
		}
	};
	xhttp.open("POST","checkout.php",true);
	xhttp.send(data);
	
}
