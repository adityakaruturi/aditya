/*
	Moja Slnecna Sustava / My Solar System using CSS3
	File: script.js
	Author: TomasStankovic - twitter: @TomasStankovic - e-mail: tomco3131@gmail.com - fb: facebook.com/slinto
*/
$(document).ready(function(){
//js For a browser that does not support CSS3 TRANSITIONS
if(!Modernizr.csstransitions){
	//H1 opacity
	$('h1').animate({
		opacity: '0.5'
	},1000);
	$('span.system-text').animate({
		opacity: '0.5'
	},1000);

	$('h1').hover(
		function(){
			$(this).not(':animated').animate({
				opacity: '1',
			},300);
			$('span.system-text').not(':animated').animate({
				opacity: '1',
			},300);
		},
			function(){
				$(this).animate({
				opacity: '0.5',
			},500);
				$('span.system-text').not(':animated').animate({
				opacity: '0.5',
			},500);
			}
		);
	//html5logo opacity
	$('.html5img').animate({
		opacity: '0.1'
	},1000);

	$('.html5img').hover(
		function(){
			$(this).not(':animated').animate({
				opacity: '1',
			},300);
		},
			function(){
				$(this).animate({
				opacity: '0.1',
			},500);
			}
		);
	//planets select animation
	$('li').hover(
		function(){
			$(this).animate({
				color: '#FFFF20'
			},500);
		},function(){
			$(this).animate({
				color: '#FFFF80'
			},500);
		});
};
//end of CSS3 TRANSITIONS "HACK"


//#info about planets hide() -> for slideUp/slideDown effect
	$("div.info").each(function(){
        $(this).hide();
      });

//#info about planets slideUP/slideDown
$('.planeta-pic').hover(
		function(){
			$(this).next().not(':animated').slideUp(500);
			$(this).next().next().not(":animated").slideDown(500);
			$('.down').not(":animated").slideUp(500);
		},
		function(){
			$(this).next().slideDown();
			$(this).next().next().slideUp();
			$('.down').not(":animated").slideDown(500);
		}
	);

//Footer set margin-top on start
var boxHeight = $('#popis-planety1').height() - 320;
		$('#footer').animate({
			'margin-top': boxHeight
		});

//Hide all planets description, show only Mercury
$(".hideBox").each(function(){
        $(this).hide();
      });
$('#popis-planety1').show();

//Click event for switching planets description
$('li').click(function(){
	var index = $(this).index();
		++index;

		$(".hideBox").each(function(){
	        $(this).not(":animated").slideUp(500);
	      });
		$('#popis-planety'+index).not(":animated").delay(500).slideDown(500);

		//Footer set margin-top for all description
		boxHeight = $('#popis-planety'+index).height() - 320;
		$('#footer').animate({
			'margin-top': boxHeight
		});
});

//Highlight Orbit
$('li').hover(function(){
	var indexOfli = $(this).index()+1;
	var setPlanetOrbit;
	switch(indexOfli){
		case 1:
			setPlanetOrbit = '#merkur-draha';
			break;
		case 2:
			setPlanetOrbit = '#venusa-draha';
			break;
		case 3:
			setPlanetOrbit = '#zem-draha';
			break;
		case 4:
			setPlanetOrbit = '#mars-draha';
			break;
		case 5:
			setPlanetOrbit = '#jupiter-draha';
			break;
		case 6:
			setPlanetOrbit = '#saturn-draha';
			break;
		case 7:
			setPlanetOrbit = '#uran-draha';
			break;
		case 8:
			setPlanetOrbit = '#neptun-draha';
			break;
	}
$(setPlanetOrbit).css({
		border: '2px solid #FFFF80'
	});
},function(){
	var indexOfli = $(this).index()+1;
	var setPlanetOrbit;
	switch(indexOfli){
		case 1:
			setPlanetOrbit = '#merkur-draha';
			break;
		case 2:
			setPlanetOrbit = '#venusa-draha';
			break;
		case 3:
			setPlanetOrbit = '#zem-draha';
			break;
		case 4:
			setPlanetOrbit = '#mars-draha';
			break;
		case 5:
			setPlanetOrbit = '#jupiter-draha';
			break;
		case 6:
			setPlanetOrbit = '#saturn-draha';
			break;
		case 7:
			setPlanetOrbit = '#uran-draha';
			break;
		case 8:
			setPlanetOrbit = '#neptun-draha';
			break;
	}
	$(setPlanetOrbit).css({
		border: '1px solid #FFF'
	});
});


});