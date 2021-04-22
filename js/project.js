
(function($){
	$(document).ready(function(){

		$(window).scroll(function(){
			if($(window).scrollTop() > 50 && $(window).scrollTop() < 500){
				$('.section1').addClass('fixed');
				$('.header-area').addClass('bg-white');
				$('.menu ul li a').css('color','#111');
				$('.sub-menu ul li a').css('color','#999');
				$('.icon-menu ul li span').css('color','#111');
				$('.img1').hide();
				$('.img2').show();
			}else{
				$('.section1').removeClass('fixed');
				$('.header-area').removeClass('bg-white');
				$('.menu ul li a').css('color','#fff');
				$('.icon-menu ul li span').css('color','#fff');
				$('.img2').hide();
				$('.img1').show();
				$('.sub-menu ul li a').css('color','#999');
			}
		});

	//toggle-tab
	$('.tab-btn1').click(function(){
		$('.toggle-item1').show();
		$('.toggle-item2').hide();
		$('.toggle-item3').hide();
		$('.toggle-item4').hide();
	});
	$('.tab-btn2').click(function(){
		$('.toggle-item2').show();
		$('.toggle-item1').hide();
		$('.toggle-item3').hide();
		$('.toggle-item4').hide();
	});
	$('.tab-btn3').click(function(){
		$('.toggle-item3').show();
		$('.toggle-item2').hide();
		$('.toggle-item1').hide();
		$('.toggle-item4').hide();
	});
	$('.tab-btn4').click(function(){
		$('.toggle-item4').show();
		$('.toggle-item1').hide();
		$('.toggle-item2').hide();
		$('.toggle-item3').hide();
	});


	//owl
		$('.owl-carousel').owlCarousel({
    	loop:true,
   		margin: 35,
   		autoplay:true,
    	responsiveClass:true,
    	responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
       500:{
            items:1,
            nav:true,
            loop:true
        },
        650:{
            items:2,
            nav:true,
            loop:true
        },
         960:{
            items:2,
            nav:true,
            loop:true
        },
        1200:{
            items:3,
            nav:true,
            loop:true
        }
    }
});



	//toggle-tab
	$('#img1').click(function(){
		$('#dt1').show();
		$('#dt2').hide();
		$('#dt3').hide();
		$('#dt4').hide();
		$('#dt5').hide();
	});
	$('#img2').click(function(){
		$('#dt2').show();
		$('#dt1').hide();
		$('#dt3').hide();
		$('#dt4').hide();
		$('#dt5').hide();
	});
	$('#img3').click(function(){
		$('#dt3').show();
		$('#dt2').hide();
		$('#dt1').hide();
		$('#dt4').hide();
		$('#dt5').hide();
	});
	$('#img4').click(function(){
		$('#dt4').show();
		$('#dt1').hide();
		$('#dt2').hide();
		$('#dt3').hide();
		$('#dt5').hide();
	});

$('#img5').click(function(){
		$('#dt5').show();
		$('#dt1').hide();
		$('#dt2').hide();
		$('#dt3').hide();
		$('#dt4').hide();
	});

//scroll
$('#scroll').click(function(){
 $('html,body').animate({scrollTop:'0'});
});
$(window).scroll(function(){
	var windowScroll =$(window).scrollTop();
	if( windowScroll > 1500){
		$('.scroll').css({
			position:'fixed',
			transition:'0.5s',
			right:'30px'
		});
	}else{
		$('.scroll').css({
			position:'fixed',
			transition:'0.5s',
			right:'-60px'
		});
	}

});
//slide-menu
$('#bar').click(function(){
	$('.responsive-menu').css({
		top:'0px',
		right:'0px',
		transition:'0.5s'
	});
});
$('#cross').click(function(){
	$('.responsive-menu').css({
		top:'0px',
		right:'-80vw',
		transition:'0.5s'
	});
});
//responsive-toggle-menu
$('#courses').click(function(){
	$('#courses-sub').slideToggle();
	return false;
});
$('#features').click(function(){
	$('#features-sub').slideToggle();
	return false;
});



	});
})(jQuery)


