var imgS = pictureS.getElementsByTagName('img');
for (var i = 0; i < imgS.length; i++) {
	imgS[i].index = i;
	imgS[i].onmouseup = function  () {
		m.src = 'images/'+(this.index+1)+'m.jpg';
		l.src = 'images/'+(this.index+1)+'l.jpg';  
	}
} 
pictureM.onmouseover = function () {
	boxM.style.display = 'block';
	pictureL.style.display = 'block';
	var maxW = pictureM.clientWidth-boxM.clientWidth; 
	var maxH = pictureM.clientHeight-boxM.clientHeight;
	pictureM.onmousemove = function (event) {
		var e = event ||window.event;
		var left = e.clientX-(boxM.offsetWidth/2)-pictureM.offsetLeft;
		var top = e.clientY-(boxM.offsetHeight/2)-pictureM.offsetTop;
		var numW = pictureM.offsetWidth/boxM.offsetWidth;
		var numH = pictureM.offsetHeight/boxM.offsetHeight;
		if (left>=maxW) {
			left = maxW;
		} 
		if (left<=0) {
			left = 0;
		}
		if (top>=maxH) {
			top = maxH;
		} 
		if (top<=0) {
			top = 0;
		}
		boxM.style.left = left+'px';
		boxM.style.top = top+'px';
		pictureL.scrollLeft = left*numW;
		pictureL.scrollTop = top*numH;		
	}
}
pictureM.onmouseout = function () {
	boxM.style.display = 'none';
	pictureL.style.display = 'none';
}