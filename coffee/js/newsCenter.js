//滚动监听
	$(document).scroll(()=>{
		var top=$(document).scrollTop();
		var elemTop=$(".head").offset().top;
		if(top>200){
			$(".head").css({
				"position":"fixed",
				"top":0,
				"box-shadow":" 0px 5px 5px #866961"
			})
		}else{
			$(".head").css({
				"position":"static",
				"top":0,
				"box-shadow":""
			})
		}
	})
