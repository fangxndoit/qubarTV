$('#ul_list').css('position', 'absolute');
var userTop = 0;
var userlist = '<div id="user1"><img src="img/head_3.png" /><span id="">147***05用户买一打百威猜莱斯切特队胜</span></div>' +
	'<div id="user2"><img src="img/head_4.png" /><span id="">150***89用户买一支VSOP猜威姆斯队胜</span></div>';
$('#userlist').append(userlist);
setInterval(function() {
	userTop -= 0.005;
	$('#userlist').css('top', userTop + 'rem');
	if(userTop < -2.73) {
		userTop = 2.00;
	}

}, 10);

var speed = 20,jianxi=2;
var scroll = document.getElementById("left");
var slider1 = document.getElementById("silder1");
var slider2 = document.getElementById("slider2");
slider2.innerHTML = slider1.innerHTML;
function Marquee(){
 if(slider2.offsetTop-scroll.scrollTop<=0){
  scroll.scrollTop-=slider1.offsetHeight;
  
 }else{
  scroll.scrollTop+=jianxi;
//console.log(getComputedStyle(window.document.documentElement)['font-size']*1.2);
  var hh=parseInt(parseInt(getComputedStyle(window.document.documentElement)['font-size'])*1.18);
//console.log(hh);
  if(scroll.scrollTop%hh<=jianxi){
  	clearInterval(MyMar)
  	var time=setTimeout(function(){
  		MyMar=setInterval(Marquee,speed);
  		clearTimeout(time);
  	},2000)
  }
 }
}
var MyMar=setInterval(Marquee,speed)
//scroll.onmouseover=function() {clearInterval(MyMar)}
//scroll.onmouseout=function() {MyMar=setInterval(Marquee,speed)}