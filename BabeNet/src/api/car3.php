<?php
	$id = isset($_GET["id"])?  $_GET["id"] : "0000";
	$name = isset($_GET["name"])?  $_GET["name"] : "0000";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8'); 

	$sql ='DELETE FROM car WHERE id  = "'.$id .'"';  
      
    $result = $conn->query($sql);

	$sql2 =' select * from `car` where name = "'.$name.'"'; 
	$result2 = $conn->query($sql2);

    $arr2 = $result2->fetch_all(MYSQLI_ASSOC);
	
	$res2=json_encode($arr2);   
	
	echo $res2;
	

	$result2->close();
	$conn->close();

?>