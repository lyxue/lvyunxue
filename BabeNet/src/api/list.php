<?php
	$curpage = isset($_GET["curpage"])?  $_GET["curpage"] : "1";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8'); 
      
//  $start =  ($page-1)*20;
//  $end  =	$page*20
//
//	$sql ='select * from `index`limit 0,20';  
//	
	$sql ='select * from `index`';  
    $result = $conn->query($sql);

    $arr = $result->fetch_all(MYSQLI_ASSOC);
	
	//这里得到的是数组，需要输出到前台，还得转换为字符串
	$res=json_encode($arr);   
	
	echo $res;

	$result->close();
	$conn->close();

?>