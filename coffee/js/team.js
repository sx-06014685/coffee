//滚动监听
	$(document).scroll(()=>{
		var top=$(document).scrollTop();
		console.log(top)
		var elemTop=$(".head").offset().top;
		if(top>170){
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


//板块切换
var texts=document.querySelectorAll(".list>div>.text");
var imgs=document.querySelectorAll(".list>div>img");
var intexts=document.querySelectorAll(".introduce>.text");
var pics=document.querySelectorAll(".content>.pic>img")

for(var i=0;i<texts.length;i++){
	texts[i].onclick=function(){
		for(var i=0;i<texts.length;i++){		
			texts[i].className="text";
			intexts[i].className="text";
			imgs[i].className="";
			pics[i].className="";
		}
		this.className="text active";
		
		var num=this.getAttribute("num");
		intexts[num].className="text active";
//		intexts[num].style.animation="slideInDow all 1s";
		imgs[num].className="active";
		pics[num].className="active";
		
		
		
	}
}



