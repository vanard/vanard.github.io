//
$('.page').on('click',function(e) {

	var href = $(this).attr('href');
	var elemenHref = $(href);

	$('body').animate({
		scrollTop: elemenHref.offset().top-50}, 800,'easeInOutExpo');

	e.preventDefault();

});


//paralax

//about
$(window).on('load', function(){
	$('.pLeft').addClass('pAppear');
	$('.pRight').addClass('pAppear');
});


//portfolio
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//portfolio
	if (wScroll > $('.portfolio').offset().top-350) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('appear')
			}, 250*(i+1));
		});
		//$('.portfolio .thumbnail').addClass('appear');
	}

	//project
	if (wScroll > $('.project').offset().top-350) {
		$('.project .thumbnail').each(function(i){
			setTimeout(function(){
				$('.project .thumbnail').eq(i).addClass('appear')
			}, 250*(i+1));
		});
	}

});

//
