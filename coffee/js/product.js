//banner轮播
var ban=document.querySelector(".banner");
var imgs=document.querySelectorAll(".banner img");
var index=0;
var timer=setInterval(function(){
	index++;
	if(index==3){
		index=0;
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].className="";
	}
	imgs[index].className="active";
},2000);

//section部分切换
var lis=document.querySelectorAll("section>.header>ul>li");
var p=document.querySelectorAll("section>.header>p");
var cont=document.querySelectorAll("section>.content");
var num=0;
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
		}
		this.className="active";
		
		for(var j=0;j<p.length;j++){
			p[j].className="";
		}
		var num=this.getAttribute("num");
		p[num].className="active";
			
		for(var h=0;h<cont.length;h++){
			cont[h].className="content";
		}
		cont[num].className="active";
	}	
}
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

