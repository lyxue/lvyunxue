document.addEventListener("DOMContentLoaded",function(){
	var output = document.querySelector(".output");
	var status=[200,304];
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && (status.indexOf(xhr.status) !=-1)){
	        var res = JSON.parse(xhr.responseText);
 	        var res1 = res.slice(0,57); 
 	        var res2 = res.slice(57,65);
			var res3 = res.slice(65,75);
			var res4 = res.slice(75,80);
			var res5 = res.slice(80,86);
			var res6 = res.slice(86,92);
			var res7 = res.slice(92,97);
			var res8 = res.slice(97,100);
			var res9 = res.slice(100,104);
			var res10 = res.slice(104,106);
			
			var res11 = res.slice(107,110);
			
	        for(var i=0;i<res1.length;i++){
	        	output.innerHTML += `<li data-id="${res[i].id}">
										<a href="javaScript:;">
											<img src="${res[i].img}"/>
											<div class="zhuti">
												<p>${res[i].title}</p>
												<span class="zhu1">${res[i].price1}</span>
												<span class="zhu2">${res[i].price2}</span>
												<span class="zhu3">${res[i].zhekou}</span>
											</div>
										</a>
									</li>`;
	        }
	       
	        for(var i=0;i<res2.length;i++){
	        	document.querySelector(".output2_1").innerHTML += `
	        			<li data-id="${res2[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res2[i].img}"/>
	        					<span>${res2[i].uname}</span></a>
	        			</li>`;
	        }
	        
	         for(var i=0;i<res3.length;i++){
	        	document.querySelector(".output2_2").innerHTML += `
	        			<li data-id="${res3[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res3[i].img}"/>
	        					<span>${res3[i].uname}</span></a>
	        			</li>`;
	        }
	         
	         for(var i=0;i<res4.length;i++){
	        	document.querySelector(".output2_3").innerHTML += `
	        			<li data-id="${res4[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res4[i].img}"/>
	        					<span>${res4[i].uname}</span></a>
	        			</li>`;
	        }
	         
	         for(var i=0;i<res5.length;i++){
	        	document.querySelector(".output2_4").innerHTML += `
	        			<li data-id="${res5[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res5[i].img}"/>
	        					<span>${res5[i].uname}</span></a>
	        			</li>`;
	        }
	         
	         for(var i=0;i<res6.length;i++){
	        	document.querySelector(".output2_5").innerHTML += `
	        			<li data-id="${res6[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res6[i].img}"/>
	        					<span>${res6[i].uname}</span></a>
	        			</li>`;
	        }
	        
	        for(var i=0;i<res7.length;i++){
	        	document.querySelector(".output2_6").innerHTML += `
	        			<li data-id="${res7[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res7[i].img}"/>
	        					<span>${res7[i].uname}</span></a>
	        			</li>`;
	        }
	        
	        for(var i=0;i<res8.length;i++){
	        	document.querySelector(".output2_7").innerHTML += `
	        			<li data-id="${res8[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res8[i].img}"/>
	        					<span>${res8[i].uname}</span></a>
	        			</li>`;
	        } 
	        
	        for(var i=0;i<res9.length;i++){
	        	document.querySelector(".output2_8").innerHTML += `
	        			<li data-id="${res9[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res9[i].img}"/>
	        					<span>${res9[i].uname}</span></a>
	        			</li>`;
	        }
	        for(var i=0;i<res10.length;i++){
	        	document.querySelector(".output2_9").innerHTML += `
	        			<li data-id="${res10[i].id}">
	        				<a href="javaScript:;">
	        					<img src="${res10[i].img}"/>
	        					<span>${res10[i].uname}</span></a>
	        			</li>`;
	        }
	        
	       	//热卖榜
	       	
	       	for(var i=0;i<res11.length;i++){
	        	document.querySelector(".tongzhuang").innerHTML += `
	        				<li data-id="${res11[i].id}">
    							<a href="javaScript:;">
    								<img src="${res11[i].img}"/>
									<div class="carimg">
										<p>${res11[i].title}</p>
										<span>${res11[i].price1}</span>
										<span class="xiayige">${res11[i].price2}</span>
									</div>
    							</a>
    						</li>`;
	        }
	       	
	       	for(var i=0;i<res11.length;i++){
	        	document.querySelector(".tongxie").innerHTML += `
	        				<li data-id="${res11[i].id}">
    							<a href="javaScript:;">
    								<img src="${res11[i].img}"/>
									<div class="carimg">
										<p>${res11[i].title}</p>
										<span>${res11[i].price1}</span>
										<span class="xiayige">${res11[i].price2}</span>
									</div>
    							</a>
    						</li>`;
	        }
	       	
	       	for(var i=0;i<res11.length;i++){
	        	document.querySelector(".wanju").innerHTML += `
	        				<li data-id="${res11[i].id}">
    							<a href="javaScript:;">
    								<img src="${res11[i].img}"/>
									<div class="carimg">
										<p>${res11[i].title}</p>
										<span>${res11[i].price1}</span>
										<span class="xiayige">${res11[i].price2}</span>
									</div>
    							</a>
    						</li>`;
	        }
	       	
	       	for(var i=0;i<res11.length;i++){
	        	document.querySelector(".yongpin").innerHTML += `
	        				<li data-id="${res11[i].id}">
    							<a href="javaScript:;">
    								<img src="${res11[i].img}"/>
									<div class="carimg">
										<p>${res11[i].title}</p>
										<span>${res11[i].price1}</span>
										<span class="xiayige">${res11[i].price2}</span>
									</div>
    							</a>
    						</li>`;
	        }
		}
	}	
	xhr.open('get','api/zhuye.php',true);
	xhr.send(null);	
	
	output.onclick = function(e){
	    if(e.target.tagName.toLowerCase()==="img"){
	        var curLi = e.target.parentElement.parentElement;
	        let id = curLi.dataset.id;
	        location.href="html/goods.html?id="+id;
	    }
   }
})