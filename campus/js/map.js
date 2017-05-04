var maplet = null;
function initMap(){
	//构造函数，创建新地图
	maplet = new Maplet("mapbar");
	//centerAndZoom（）初始化地图，设置中心点和缩放级别
	maplet.centerAndZoom(new MPoint(115.81889,28.64899), 13);
	maplet.addControl(new MStandardControl());
}
