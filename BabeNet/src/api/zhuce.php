<?php
	$uname = isset($_GET["uname"])? $_GET["uname"] : "0000";
	$passwords = isset($_GET["pwd"])? $_GET["pwd"] : "0000";

	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'project';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
	
	if($uname !=null && $passwords !=null){
		$res = $conn ->query('insert into zhuce (uname,pwd) values ("'.$uname.'","'.$passwords.'")');
		echo "true";
	}else if($uname == 0000 || $passwords == 0000){
		echo "false";
	}
	
	$conn->close();
?>