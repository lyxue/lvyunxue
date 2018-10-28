<?php
	$id = isset($_GET["id"])?  $_GET["id"] : "0000";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8'); 

	//请求大图使用
	$sql ='select * from `index` where id = "'.$id.'"';  
    
    $result = $conn->query($sql);

    $arr = $result->fetch_all(MYSQLI_ASSOC);
	
	$res=json_encode($arr);   
	
	echo $res;
	
	$result->close();
	$conn->close();

?>