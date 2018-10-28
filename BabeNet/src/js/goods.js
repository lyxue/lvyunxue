jQuery(function($){
	$good_t = $(".good_t");
	$good_b = $(".xiaotu");
	$title = $(".title");
	$price = $(".price");
	$Color_1 = $(".Color_1");
	$Cma_1 = $(".Cma_1");
	let param =location.search;
	
	param = param.slice(4);
	//请求大图
	$.ajax({
		type:"get",
		url:"../api/goods.php",
		data :{id : param},
		async:true,
		success : function(res){
			res = JSON.parse(res);
			for(var i=0;i<res.length;i++){
	        	$good_t.append(`<img src="../${res[i].img}" class="img1"/>`)	
	      	}
			
			$good_t.xZoom({
				width:350,
				height:350
			});
			
		}
	});
	//请求小图
	$.ajax({
		type:"get",
		url:"../api/goods2.php",
		data :{id : param},
		async:true,
		success : function(res){
			res = JSON.parse(res);
			for(var i=0;i<res.length;i++){
	        	//小图
	        	$good_b.append(`
	        		<li><a href="javaScript:;"><img src="${res[i].img1}"/></a></li>
	        		<li><a href="javaScript:;"><img src="${res[i].img2}"/></a></li>
	        		<li><a href="javaScript:;"><img src="${res[i].img3}"/></a></li>
	        		<li><a href="javaScript:;"><img src="${res[i].img4}"/></a></li>
	        	`)
	        	//标题
	        	$title.append(`
	        		<h3>
						<span>今日特卖</span>
						${res[i].title1}
					</h3>
					<p class="biaoti">${res[i].title2}</p>
	        	`)
	        	//价格
	        	$price.append(`
	        		<div class="now-price"> 
			             <em style="font-style: normal;">&yen;<i op-attr="*" op-value="price" class="ct4_1">${res[i].price1}</i></em> 
			        </div> 
			        <div> 
			            <span></span> 
			            <del op-attr="*" op-value="originPrice" class="ct4_2">&yen;${res[i].price2} </del> 
			        </div> 
			        <div class="tuan-discount"> 
			           <span>折扣</span> 
			           <strong op-attr="*" op-value="discount">${res[i].zhekou}</strong> 
			        </div> 
			        <div> 
			           <span>您节省了</span> 
			           <strong op-attr="*" op-value="save">&yen;${res[i].jieS}</strong> 
			        </div> 
			           <div class="line-effect"> 
			        </div>
	        	`)
	        	//颜色
	        	$Color_1.append(`
	        		<li data-id="${res[i].id}"><a href="javaScript:;"><img src="${res[i].img1}"/>${res[i].cocle1}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;"><img src="${res[i].img2}"/>${res[i].cocle2}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;"><img src="${res[i].img3}"/>${res[i].cocle3}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;"><img src="${res[i].img4}"/>${res[i].cocle4}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;"><img src="${res[i].img5}"/>${res[i].cocle5}</a></li>
	        	`)
	        	
	        	//尺寸
	        	$Cma_1.append(`
	        		<li data-id="${res[i].id}"><a href="javaScript:;">${res[i].chicun1}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;">${res[i].chicun2}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;">${res[i].chicun3}</a></li>
					<li data-id="${res[i].id}"><a href="javaScript:;">${res[i].chicun4}</a></li>
	        	`)
	        	
	        	var total = (res[i].price1).slice(1);
	        	var total_1 = $(".total_1");
	        	total_1.html(total);
	        	//加的效果
				$(".add").click(function(){
					var n = $(".num").val();
					var num=parseInt(n)+1;
					if(num==0){ return;}
					$(".num").val(num);
					total_1.html(( total*num).toFixed(2));
				});
				//减的效果
				$(".jian").click(function(){
					var n=$(".num").val();
					var num=parseInt(n)-1;
					if(num==0){ return}
					$(".num").val(num);
					total_1.html(( total*num).toFixed(2));
				});
	      	}
		}
	});

//====================================获取已经选择的颜色及商品大小=====================================
	//颜色、尺码、购物数量处理
	//颜色
	$(".Color_1").on("click","li",function(){
		$(".Color_1").children().removeClass('gongyou');
		$(this).addClass("gongyou");
	})
	//尺码
	$(".Cma_1").on("click","li",function(){
		$(".Cma_1").children().removeClass('gongyou');
		$(this).addClass("gongyou");
	})
//========================================点击购买按钮实现商品购买=====================================	
	$(".goumai_1").on("click",function(){
		let color;
		$(".Color_1").children().each(function(idx,item){
			if($(item).hasClass('gongyou')){
				color = $(item).text();
				return color;
			}
		})
		
		let daxiao;
		$(".Cma_1").children().each(function(idx,item){
			if($(item).hasClass('gongyou')){
				daxiao = $(item).text();
				return daxiao;
			}
		})
		
		var img = $(".img1").attr("src");				//获取图片
		var title = $(".biaoti").html();				//获取标题
		var ct4_1 = $(".ct4_1").html();   				//单价
		var ct4_2 = $(".ct4_2").html();   				//原价
		var qty = $(".num").val();						//获取数量
		var total_2 = $(".total_1").html();				//获取总价
		var uname = $.cookie("username");				//当前用户名
		var youhui = ((ct4_2.slice(1))*qty).toFixed(2)*1;

		location.href="car.html?";
		//将选择好的数据存入数据库
		$.ajax({
			type:"get",
			url:"../api/car.php",
			data:{
				id :        location.search.slice(4),
				img:		img,
				title:		$(".biaoti").html(),
				color:		color,
				daxiao:		daxiao,
				prise1:		$(".ct4_1").html(),
				prise2:		$(".ct4_2").html(),
				qty:		$(".num").val(),
				total:		$(".total_1").html(),
				uname:uname,
				youhui :youhui
			},	
			async:true,
			ssuccess : function(res){
				if(res == "true"){
					alert("已为你成功添加到购物车");
				}else if(res == "false"){	
					alert("插入失败");
				}	
			}
		});	
//===================================================================================================		
	})

})

