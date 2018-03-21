$(document).ready(function(){
// -------------------------- //


// ==================== Dropdown toggle =================== //

$('.dropdown-submenu').hover(function(){
	$(this).find('.dropdown-menu').first().slideToggle();
});
 // ==================== Activate Carousel ==================== //

$('.carousel').carousel('pause');


 
// ==================== Accordion chevron ==================== //

$('.accordion-chevron').find('.accordion-toggle').prepend('<span class="icon-hand-right"></span>')
$('.accordion-chevron').find('.accordion-group').on('show', function (e) {
$(e.target).prev('.accordion-heading').find('.icon-hand-right').remove();
$(e.target).prev('.accordion-heading').find('.accordion-toggle').prepend('<span class="icon-hand-down"></span>')
});

$('.accordion-chevron').find('.accordion-group').on('hide', function (e) {
$(this).find('.icon-hand-down').not($(e.target)).remove();
$(e.target).prev('.accordion-heading').find('.accordion-toggle').prepend('<span class="icon-hand-right"></span>')
});

 

// ==================== Slider carouFredSel ==================== //

$('#carouFredSel').carouFredSel({
	auto: true,
	prev: '#prev2',
	next: '#next2',
	mousewheel: true,
	responsive: true,
	items: {
		height: 'variable'
	},
	swipe: {
		onMouse: true,
		onTouch: true
	}
});

 
 



 
}); 
  
 $('#myModal').modal('show');