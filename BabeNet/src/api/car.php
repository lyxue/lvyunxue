<?php
	$id     =   isset($_GET["id"])     ?  $_GET["id"]     : "0000" ;
	$imgs   =   isset($_GET["img"])    ?  $_GET["img"]    : "0000" ;
	$title  =   isset($_GET["title"])  ?  $_GET["title"]  : "0000" ;
	$color  =   isset($_GET["color"])  ?  $_GET["color"]  : "您没有选择颜色" ;
	$daxiao =   isset($_GET["daxiao"]) ?  $_GET["daxiao"] : "您没有选择合适的大小" ;
	$prise1 =   isset($_GET["prise1"]) ?  $_GET["prise1"] : "0000" ;
	$prise2 =   isset($_GET["prise2"]) ?  $_GET["prise2"] : "0000" ;
	$qty    =   isset($_GET["qty"])    ?  $_GET["qty"]    : "0000" ;
	$total  =   isset($_GET["total"])  ?  $_GET["total"]  : "0000" ;
	$uname  =   isset($_GET["uname"])  ?  $_GET["uname"]  : "0000" ;
	$you  =   isset($_GET["youhui"])  ?  $_GET["youhui"]  : "0000" ;

	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'project';
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
	

	if($id != 0000){
		$res = $conn ->query('insert into car (id,imgsrc,title,color,daxiao,prise1,prise2,qty,total,name,you) values ("'.$id.'","'.$imgs.'","'.$title.'","'.$color.'","'.$daxiao.'","'.$prise1.'","'.$prise2.'","'.$qty.'","'.$total.'","'.$uname.'","'.$you.'")');
		echo "true";
	}else if($id == 0000 ){
		echo "false";
	}
	
	$conn->close();
?>