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

var mySwiper = new Swiper('.swiper-container', {
	 autoplay: 2000,//可选选项，自动滑动
	loop: true, //可选选项，开启循环
	mode: 'vertical',
	speed: 1000,
	slidesPerView: 'auto',
	loopedSlides: 4,
	paginationClickable: true,
	onlyExternal: true,

})

