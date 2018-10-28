jQuery(function($){
	var $put1 = $(".put1");		//用户名
	var $put2 = $(".put2");		//密码	
	var getMa = $(".put3");		//验证码值
	var setMa = $(".s1");		//获取验证码
	var $put4 = $(".put4");		//自动登录
	var $put5 = $(".put5");		//登陆
	var $jieguo = $(".jieguo");	//提示1
	var $zhuce = $(".zhucehao");
	var yanz = $(".yanzhengma"); //验证码提示
	
	
//	//注册用户名
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
				if(res=="true"){
					 $(".put1").val("");  
					$jieguo.html("该用户名已被注册");
					
				}
				}
			})
		}
	})
	$put1.on("click",function(){
		$jieguo.html("");
	})

	//验证码
	var randomNum ;
	setMa[0].onclick=function(){
		randomNum = ""+parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
		setMa[0].value = randomNum;
		var shuju1 = randomNum;
	}
	yanzhen();
	function yanzhen(){
		getMa[0].onblur=function(){
					var _getMa = getMa[0].value;
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
		})
	}	
	//注册
	$put5.on("click",function(){
		var $_uname = $put1.val();
		var $_pwd = $put2.val();
		if($_uname.length>0 && $_pwd.length>0){
			$.ajax({
			type:"GET",
			url:"../api/zhuce.php",
			data :{
				uname : $_uname,
				pwd : $_pwd
			},
			async:true,
			success :function(res){
				if(res=="true"){
					yanzhen();
					if($_uname.length>0 && $_pwd.length>0){
						$zhuce.html("注册成功");
					}else{
						$zhuce.html("请检查你的信息是否正确");
					}
				}else if(res=="false"){
					$zhuce.html("注册失败");
				}
			}
					
		})
		}
	})
	
	
	//注册信息
	
	
	
	
	
})













