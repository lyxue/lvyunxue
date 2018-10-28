<?php
	$uname = isset($_GET["uname"])?  $_GET["uname"] : "0000";
	$passwords = isset($_GET["pwd"])?  $_GET["pwd"] : "0000";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8');     
    
    //点击登录
	$sql3 ='select * from zhuce';  

    $result3 = $conn->query($sql3);

    $arr3 = $result3->fetch_all(MYSQLI_ASSOC);

	foreach($arr3 as $item){
	    if($item["uname"] == $uname && $item["pwd"] == $passwords){
	        echo "keyi";
	        return;
	    }
	}
	echo "buxing"; 
	
	if($uname!= 0000 && $passwords!= 0000){
		$res = $conn ->query('insert into zhece (uname,pwd) values ("'.$uname.'","'.$passwords.'")');
		echo "true";
	}else if($uname == 0000 && $passwords == 0000){
		echo "false";
	}

	$result3->close();
	$conn->close();
?>