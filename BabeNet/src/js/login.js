jQuery(function($){
	var $dlogin = $(".Dlogin");   //立即注册
	var $put1 = $(".put1");		//用户名
	var $put2 = $(".put2");		//密码	
	var getMa = $(".put3");		//验证码值
	var setMa = $(".s1");		//获取验证码
	var $put4 = $(".put4");		//自动登录
	var $put5 = $(".put5");		//登陆
	var $jieguo = $(".jieguo");	//提示1
	var $mima = $(".mima");		//密码提示
	var yanz = $(".yanzhengma"); //验证码提示
	
	//立即注册
	$dlogin.on("click",function(){
		location.href="zhuce.html";
	})
	
	//登陆验证(验证用户名)
	$put1.blur(function(){
		var $_uname = $put1.val();
		if($_uname.length==0){
			$jieguo.html("用户名不能为空");
		}else if($_uname.length>0){
			$.ajax({
			type:"get",
			url:"../api/login.php",
			data :{uname : $_uname},
			async:true,
			success : function(res){
				res=res.slice(0,5);
				if(res=="false"){
					$jieguo.html("没有该用户名");
				}
				}
			})
		}
	})
	$put1.on("click",function(){
		$jieguo.html("");
	})
	
	//(验证密码)
	$put2.on("click",function(){
		$put2.blur(function(){
			var $pwd = $(".put2").val();
			if($pwd.length==0){
				$mima.html("密码不能为空");
			}else if($pwd.length>0){
				$.ajax({
				type:"get",
				url:"../api/login.php",
				data :{pwd : $pwd},
				async:true,
				success : function(res){
					res=res.slice(5,8);
					if(res=="not"){
						$mima.html("密码错误");
					}
					}
				})
			}	
	
		})
	})
	$put2.on("click",function(){
		$mima.html("");
	})

	//验证码
	var randomNum ;
	setMa[0].onclick=function(){
		randomNum = ""+parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
		setMa[0].value = randomNum;
		
	}
	var shuju1;
	var shuju12;
	getMa[0].onblur=function(){
				var _getMa = getMa[0].value;
				shuju2 = getMa[0].value;
				shuju1 = randomNum;
				if(_getMa == randomNum){
				}else if(_getMa != randomNum){
					yanz[0].innerHTML = "验证码不正确";
					getMa[0].value ="";
					setMa[0].value ="重新获取验证码";
				}
				setMa[0].value ="获取验证码";
				}  
		getMa.on("click",function(){
		yanz.html("");
		return shuju1;
		return shuju2;
	})
		
	//登录
	$put5.on("click",function(){
		var $_uname = $put1.val();
		var $_pwd = $put2.val();
		$.ajax({
			type:"get",
			url:"../api/login2.php",
			data :{
				uname:$_uname,
				pwd : $_pwd
			},
			async:true,
			success :function(res){
				if(res=="keyi"){
					if(shuju1==shuju2){
						$.cookie("username", $_uname, {
							path: '/'
						});
						location.href="../index.html";
					}
				}else if(res=="buxing"){
					alert("信息不正确 ，请核对后在输入");
				}
			}
		});
		
	})
	
	
	//注册信息
	
	
	
	
	
})













