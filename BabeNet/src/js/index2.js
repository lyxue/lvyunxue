jQuery(function($) {
	if($.cookie("username") != null) {
		$(".f0").empty();
		var uname = $.cookie("username");
		$(".f0").append(`<li>${uname}<a href="html/login.html"></a></li>
					<li class="tuichu"><a href="javaScript:;">退出</a></li>
					<li><span>商家入驻</span></li>
					<li><span>贝贝商家中心</span><i></i></li>
					<li><span>帮助中心</span><i></i></li>
					<li><span>关注</span>	<i></i></li>`);
		$(".tuichu").on("click", function() {
			$(".f0").empty();
			$.cookie("username", null, {
				expires: -1,
				path: "/"
			});
			$(".f0").append(`
					<li>你好，<a href="html/login.html">请先登录</a></li>
					<li><a href="html/zhuce.html">免费注册</a></li>
					<li><span>商家入驻</span></li>
					<li><span>贝贝商家中心</span><i></i></li>
					<li><span>帮助中心</span><i></i></li>
					<li><span>关注</span>	<i></i></li>
				`);

		})

	}
})