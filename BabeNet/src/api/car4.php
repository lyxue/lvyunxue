<?php
	$id = isset($_GET["id"])?  $_GET["id"] : "0000";
	$name = isset($_GET["name"])?  $_GET["name"] : "0000";
	$qty = isset($_GET["qty"])?  $_GET["qty"] : "0000";
	$total = isset($_GET["total"])?  $_GET["total"] : "0000";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8'); 
	
	$result = $conn -> query('select * from car where name="'.$name.'" and id="'.$id.'"');
    $c = $result -> fetch_assoc(); 
  
    if($c){
        $res = $conn->query('update car set qty="'.$qty.'",total ="'.$total.'"  where name="'.$name.'" and id="'.$id.'"');
    }
    if ($res) {
        echo "true";
    } else {
        echo "false";
    }
?>