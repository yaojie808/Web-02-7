var pra = document.getElementById('pra');
var p = document.getElementById('p');
var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var timer1
var isMoving = false;

//循环文字
window.onload = function () {
	timer1 = setInterval(word,100);
}

function word() {
	var now = parseInt(getStyle(p,'left'));
	var speed = 5;
	if(now <= -260){
		p.style.left = "800px";

	}else{
		p.style.left = now - speed +'px';
	}
}

//轮播下一张图片函数
function next(){
	if(!isMoving){
		isMoving = true;
		index++;
		navChange();
		animate(slider,{left:-1200*index},function () {
			if(index == 6){
				slider.style.left = "-1200px";
				index = 1;
			}
			isMoving = false;
		});
	}
}

//轮播上一张图片函数
function prev(){
	if (!isMoving) {
		isMoving = true;
		index--;
		navChange();
		animate(slider,{left:-1200*index},function () {
			if(index == 0){
				slider.style.left = "-6000px";
				index = 5;
			}
			isMoving = false;
		});
		
	}	
}

var timer = setInterval(next,3000);

//鼠标划入
box.onmouseover = function () {
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}

//鼠标划出
box.onmouseout = function () {
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}

//右箭头点击事件
right.onclick = next;

//左箭头点击事件
left.onclick = prev;

//按钮点击事件
for(var i = 0; i<oNavlist.length; i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navChange();
		animate(slider,{left:-1200*index});

	}
}

//导航变化
function navChange() {
	for(var i =0 ;i<oNavlist.length;i++){
		oNavlist[i].id = '';
	}
	if(index == 6){
		oNavlist[0].id = "active";
	}else if(index == 0){
		oNavlist[4].id = "active";
	}else{
		oNavlist[index-1].id = "active";	
	}
}