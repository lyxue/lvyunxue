jQuery(function($){
	$output = $(".output");
	$.ajax({
		type:"get",
		url:"../api/zhuye.php",
		async:true,
		success : function(res){
			var res = JSON.parse(res);
			var zong = res;
			var res= res.splice(0,16);
			for(var i=0;i<res.length;i++){
				var aa = res[i].price1;
	        	$output.append(`
	        			<li data-id="${res[i].id}">
							<a href="javaScript:;">
								<img src="../${res[i].img}"/>
								<div class="zhuti">
									<p>${res[i].title}</p>
									<span class="zhu1">${res[i].price1}</span>
									<span class="zhu2">${res[i].price2}</span>
									<span class="zhu3">${res[i].zhekou}</span>
								</div>
							</a>
						</li>`)	
	        }

			$(".output").on("click","li",function(){
				let id=$(this)[0].dataset.id;
				location.href="goods.html?id="+id;
			})
//==========================================================================================
			//第1页output
			$(".yema_1").on("click",".y1",function(){
				$(".output").empty();
				res = zong.slice(0,20);
				show(res);
			})
			
			//2
			$(".yema_1").on("click",".y2",function(){
				$(".output").empty();
				res = zong.slice(17,33);
				console.log(res);
				show(res);
			})
			
			//3
			$(".yema_1").on("click",".y3",function(){
				$(".output").empty();
				res = zong.slice(20,40);
				show(res);
			})
			
			//4
			$(".yema_1").on("click",".y4",function(){
				$(".output").empty();
				res = zong.slice(30,42);
				show(res);
			})
			
			//5
			$(".yema_1").on("click",".y5",function(){
				$(".output").empty();
				res = zong.slice(5,25);
				show(res);
			})
			//6
			$(".yema_1").on("click",".y6",function(){
				$(".output").empty();
				res = zong.slice(8,24);
				show(res);
			})
			//7
			$(".yema_1").on("click",".y8",function(){
				$(".output").empty();
				res = zong.slice(2,36);
				show(res);
			})
			//总函数
			function show(res){
				for(var i=0;i<res.length;i++){
	        	$output.append(`
        			<li>
						<a href="#">
							<img src="../${res[i].img}"/>
							<div class="zhuti">
								<p>${res[i].title}</p>
								<span class="zhu1">${res[i].price1}</span>
								<span class="zhu2">${res[i].price2}</span>
								<span class="zhu3">${res[i].zhekou}</span>
							</div>
						</a>
					</li>`)	
	        	}
			}
//==================================================================================
		}
    });

    $(".yema_1").on("click","a",function(){
    	$(".yema_1").children().removeClass('yema_bbb');
    	$(this).addClass("yema_bbb");
    })
})
