function loader() {
			
						
			xhttp= new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
				if(this.readyState==4 && this.status==200){
					
					document.getElementById("body").innerHTML=xhttp.responseText;
					localStorage.setItem("bill",document.getElementById("total").innerHTML);
					option();
					
				}
			};
			xhttp.open("POST","cart.php",true);
			xhttp.send();
		}

function option() {
	
	xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	console.log(this.readyState+" "+this.status+" "+xhttp.responseText);
	if(this.readyState==4 && this.status==200){
		document.getElementById("options").innerHTML=xhttp.responseText;	
		}
	};

	xhttp.open("POST","options.php",true);
	xhttp.send();	
	
}

function update(id,name) {


	var cur=document.getElementById(id).value;
	var prev=document.getElementById(id).name;
	var cur2=0;
	if(cur.length!=0)
		cur2=parseInt(cur);
	if(cur.length==0)
		return;	
	if(cur2 >=0)
	document.getElementById(id).name=cur;
	else
		return;
	var p="p"+id.substring(1,id.length);
	var unit=parseInt(document.getElementById(p).innerHTML);
	var total=parseInt(document.getElementById("total").innerHTML.substring(4,document.getElementById("total").innerHTML.length));
	var sub=parseInt(prev)*unit;
	var add=parseInt(cur)*unit;
	total=total+add-sub;
	document.getElementById("total").innerHTML="BDT " +total;
	localStorage.setItem("bill", "BDT "+total);
	document.getElementById("temp").innerHTML=localStorage.getItem("bill");
}



