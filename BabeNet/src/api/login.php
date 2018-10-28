<?php
	$uname = isset($_GET["uname"])?  $_GET["uname"] : "0000";
	$passwords = isset($_GET["pwd"])?  $_GET["pwd"] : "0000";
	
	$servername = "localhost";   	//主机名
    $username = "root";				//用户名，如果没有改过，原本是root
    $password = "";					//密码
    $dbname = 'project';			//数据库的名字
    
    //创建与数据库连接   //$conn连接后的一个对象
    $conn = new mysqli($servername, $username, $password, $dbname);

    $conn->set_charset('utf8');     //在查询前设置字符编码，为了防止后边转码出现错误  //或者在转码是设置
    
    //用户名         
    $sql1 = 'select uname from zhuce ';   
    //获取查询结果集
    $result1 = $conn->query($sql1);
    //使用查询后的结果集    //结果为一个数组
    $arr1 = $result1->fetch_all(MYSQLI_ASSOC);
    //这里得到的是数组，需要输出到前台，还得转换为字符串

	foreach($arr1 as $item1){
	    if($item1["uname"] == $uname){
	        echo "true";
	        return;
	    }
  	}
  	echo "false"; 
	
	//密码
	$sql2 ='select pwd from zhuce';  
	//获取查询结果集
    $result2 = $conn->query($sql2);
    //使用查询后的结果集    //结果为一个数组
    $arr2 = $result2->fetch_all(MYSQLI_ASSOC);
    //这里得到的是数组，需要输出到前台，还得转换为字符串

  	foreach($arr2 as $item){
	    if($item["pwd"] == $passwords){
	        echo "have";
	        return;
	    }
  	}
  	echo "not"; 
  	

  	$result1->close();
    $result2->close();
    //关闭连接
    $conn->close();
    
?>