<?php

	//pending posts that need approval
	session_start();
	
	require_once('connect.php');
	if(!isset($_SESSION['login_user'])){
		echo "denied";
		
	}
	else if(isset($_SESSION['login_user'])){
		$query='select * from admin where email="'.$_SESSION['login_user'].'"';
		$result = mysqli_query($dbc, $query);
		$row = mysqli_num_rows($result);
		if($row==0){
			echo "denied";
		}
		else{
			$query="select * from sell";
        		$result = mysqli_query($dbc, $query);
			$num = mysqli_num_rows($result);
			if($num==0)
				echo "You currently have no pending items";
			$rows = array();
			$ret='';
			$i=1;
        		while ($array = mysqli_fetch_row($result)) {
			$item1='<tr><td class="cart_product"><a href=""><img src="'.$array[2].'" width="200" height="auto" style="max-height: 300px;" alt=""></a></td>';
			$item2=	'<td class="cart_description"style="margin-left:20px;"><h4><a href="" >'.$array[3].'</a></h4><p>'.$array[6].'</p></td>';	
			$item3='<td class="cart_price"><p>'.$array[4].'</p></td>';
			$item4='<td class="cart_price"><p>'.$array[5].'</p></td>';
			$item6='<td class="cart_price"><p>'.$array[7].'</p></td>';
			$item7='<td><button name="'.$array[0].'" id="button'.$array[0].'" onClick="approve(this.id,this.name)" class="editbtn">Approve</button></td>    <td><button name="'.$array[0].'" id="b'.$array[0].'" onClick="remove(this.id,this.name)" class="editbtn">Remove</button></td></tr>';
			$i=$i+1;
			$ret=$ret.$item1.$item2.$item3.$item4.$item6.$item7;
		}
		echo $ret;
		}
	}
	
        mysqli_close($dbc);
    


?>
