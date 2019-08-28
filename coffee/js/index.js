//百度地图
var map = new BMap.Map('allmap');
var poi = new BMap.Point(106.4912613060, 29.5378179960);
map.centerAndZoom(poi, 16);
map.enableScrollWheelZoom();
var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
	'<img src="3.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
	'地址：重庆大坪龙湖时代天街3号写字楼2407室<br/>电话：(023)688888888<br/>简介：咖啡。' +
	'</div>';
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
	title: "咖啡", //标题
	width: 350, //宽度
	height: 105, //高度
	panel: "panel", //检索结果面板
	enableAutoPan: true, //自动平移
	searchTypes: [
		BMAPLIB_TAB_SEARCH, //周边检索
		BMAPLIB_TAB_TO_HERE, //到这里去
		BMAPLIB_TAB_FROM_HERE //从这里出发
	]
});
var marker = new BMap.Marker(poi); //创建marker小红点对象
marker.addEventListener("click", function(e) {
	searchInfoWindow.open(marker);
})
map.addOverlay(marker); //在地图中添加marker

//滚动监听
$(document).scroll(() => {
	var top = $(document).scrollTop();
	var elemTop = $(".head").offset().top;
	if (top > 200) {
		$(".head").css({
			"position": "fixed",
			"top": 0,
			"box-shadow": " 0px 5px 5px #866961"
		})
	} else {
		$(".head").css({
			"position": "static",
			"top": 0,
			"box-shadow": ""
		})
	}
})