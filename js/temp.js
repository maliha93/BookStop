function create(value,days) {
			if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
	
		var temp="";
		if(document.cookie.indexOf("debug") != -1)
		temp=readCookie("debug")+",";
		if(temp.indexOf(value)!=-1)
			return;
		document.cookie = "debug"+"="+temp+value+expires+"; path=/";
		console.log("debug"+" "+value+" "+days);
			
}

function read(name) {
	
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name,value,days) {
	
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	
	var temp="";
	if(document.cookie.indexOf(name) != -1)
		temp=readCookie(name)+",";
	document.cookie = name+"="+temp+value+expires+"; path=/";
	console.log(name+" "+value+" "+days);
	//document.getElementById("pp").innerHTML="NOW";
}


function eraseCookie(name) {
	//document.getElementById("temp").innerHTML="erase"+name;
	createCookie(name,"done",-1);
}

function remove(id,name) {
	
	var val=read("debug");
	if(val.indexOf(name+",") != -1)
		val=val.replace(name+",","");
	else if(val.indexOf(","+name) != -1)
		val=val.replace(","+name,"");
	else{
		val=val.replace(name,"");
		document.cookie = "debug=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}
	document.cookie = "debug=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	create(val,1);
	document.getElementById(id).innerHTML="Removed";
	document.getElementById(id).style.color = 'red';
	window.location.href = "cart";
}
