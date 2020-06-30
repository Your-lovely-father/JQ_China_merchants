// 一开始的时候动画效果并不会出现,只有当界面滚动的时候或者是当达到一定的值得时候才会出现动画效果 WOW要配合animate.css使用!
$(function () {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	});
	wow.init();

	del(3, 0.1, $(".news_list li"))


	function del(a, b, c) {
		var t1 = a;
		for(var i = 0; i < c.length; i++) {
			var t2 = (t1 * b) + 's';
			t1++;
			c.eq(i).attr('data-wow-delay', t2);
		}
	}


	$(".menu").click(function (e) {
		$(".nav_page").fadeIn(300)
	});
	$(".nav_close").click(function (e) {
		$(".nav_page").fadeOut(300)
	});

	$(".phone_menu").click(function (e) {
		$(".phone_page_nav").fadeIn(300);
	});
	$(".phone_nav_close").click(function (e) {
		$(".phone_page_nav").fadeOut(300)
	});

	$('.phone_pro_list li').click(function () {
		$(this).find(".pro_con").addClass('current');
		$(this).siblings().find(".pro_con").removeClass('current');
	})

	  if ($(document).width() > 1024) {
	  	if ($(".type li").length < 4) {
			  $(".type .swiper-button-prev,.type .swiper-button-next").css("display","none");
			  $(".type ul").css("justify-content", "center")
	  	}
	  } else {
	  	$(".type .swiper-button-prev,.type .swiper-button-next").css("display", "block")
	  }
	var swiper3 = new Swiper('.m_development .swiper-container', {
		slidesPerView: 5,
		navigation: {
			nextEl: '.m_development_box .swiper-button-next',
			prevEl: '.m_development_box .swiper-button-prev',
		},
	});

	var swiper4 = new Swiper('.phone_m_development .swiper-container', {
	    slidesPerView: 1,
	    slidesPerColumn: 2,
		navigation: {
			nextEl: '.phone_m_development .swiper-button-next',
			prevEl: '.phone_m_development .swiper-button-prev',
		},
	});



});
