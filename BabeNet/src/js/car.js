jQuery(function($) {
	var uname = $.cookie("username");
	var $alltotal = $(".alltotal");
	var $youhui = $(".youhui");
	var $zshangpin = $(".zongshangpin");
	var zzjia=0;
	var youhui=0;
	var zongjian=0;
//====================================第一次渲染页面========================================================	
	$centerB = $(".centerB");
	$.ajax({
		type: "get",
		url: "../api/car2.php",
		data: {
			name: uname
		},
		async: true,
		success: function(res) {
			res1 = JSON.parse(res);
			for(var i=0;i<res1.length;i++){
				zzjia    += res1[i].total*1;
				zongjian += res1[i].qty*1;
				youhui   += res1[i].you*1;
	    	}	
	   		$alltotal.html("【请刷新后看总价】"+(zzjia).toFixed(2));
	   		$zshangpin.html(zongjian);
	   		$youhui.html(youhui);
	   		
			renfer(res1);
//============================================点击删除商品===============================================
			$(".del").on("click", function() {
				$centerB.empty();
				let id = $(this).parent().parent().parent().attr("data-id");
				$.ajax({
					type: "get",
					url: "../api/car3.php",
					data: {
						id: id,
						name: $.cookie("username")
					},
					async: true,
					success: function(res2) {
						res1 = JSON.parse(res2);
						console.log(res1);
						renfer(res1);

					}
				});
			})

//=================================================================================================			
			//加的效果
			$(".add").on("click", function() {
				var yy = $(this).closest('.zhong').find('.xiaoji');
				var danjia = $(".ct4_1").html().slice(1);
				var n = $(this).prev().val();
				var num = parseInt(n) + 1;
				if(num <=1) {
					num = 1;
				}
				$(this).prev().val(num);
				yy.html((danjia*num).toFixed(2));
				
//================================================================
				var qty1 = $(this).prev().val();
				var total1 = yy.html();
				var id = $(this).closest('.zhong').attr("data-id");
				console.log($(this).prev().val())
				$.ajax({
					type:"get",
					url:"../api/car4.php",
					data : {
						id:id,
						name: $.cookie("username"),
						qty : $(this).prev().val(),
						total : total1
					},
					async:true,
					success: function(res) {
						res1 = JSON.parse(res);
						renfer(res1);
					}
				});
			})
//======================================================================================
			//减的效果
			$(".jian").on("click", function() {
				var yy = $(this).closest('.zhong').find('.xiaoji');
				var danjia = $(".ct4_1").html().slice(1);
				var n = $(this).next().val();
				var num = parseInt(n) - 1;
				if(num <=1) {
					num =1;
				}
				$(this).next().val(num);
				yy.empty();
				yy.html((danjia*num).toFixed(2));
//=================================================================
				var qty1 = $(this).next().val();
				var total1 = yy.html();
				var id = $(this).closest('.zhong').attr("data-id"); 
				$.ajax({
					type:"get",
					url:"../api/car4.php",
					data : {
						id:id,
						name: $.cookie("username"),
						qty : $(this).next().val(),
						total : total1
					},
					async:true,
					success: function(res) {
						res1 = JSON.parse(res);
						renfer(res1);
					}
				});
			})
//=======================================================================================================			
		}
	});

	function renfer(res1) {
		for(var i = 0; i < res1.length; i++) {
			$centerB.append(`
				<div class="zhong" data-id="${res1[i].id}">
					<input type="checkbox"/>
							
					<div class="ct1">
						<img src="${res1[i].imgsrc}"/>
					</div>
					
					<div class="ct2">
						<a href="javaScript:;">${res1[i].title}</a>
					</div>
					
					<div class="ct3">
						<span>${res1[i].color},${res1[i].daxiao}</span>
					</div>
					
					<div class="ct4">
						<span class="ct4_1">${res1[i].prise1}</span>
						<p class="ct4_2">${res1[i].prise2}</p>
					</div>
					
					<div class="ct5">
						<ul>
							<input type="button" class="jian" value="-" />
							<input type="text" class="num" value="${res1[i].qty}" style="text-align: center;"/>
							<input type="button" class="add" value="+" />
						</ul>
					</div>
					
					<div class="ct6">
						<span class="xiaoji">${res1[i].total}</span>
					</div>
					
					<div class="ct7">
						<span><a href="javaScript:;" style="color: #777777;" class="del">删除</a></span>
					</div>	
				</div>
			`)
		}
	}
})