$(document).ready(function() {


	// Smooth scroll to anchor

	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});


	$('#toggleMenuButton').click(function() {
		$('#toggleMenu, #toggleMenuButton').toggleClass('opened');
	});

});


$('.slide-title').on('scrollSpy:enter', function() {
	var visibleBlockId = $(this).parents('.spy').attr('id');
	// $('.toggle-block').removeClass('active');
	$('.toggle-' + visibleBlockId).addClass('active');
});

$('.slide-title').on('scrollSpy:exit', function() {
	var visibleBlockId = $(this).parents('.spy').attr('id');
	$('.toggle-' + visibleBlockId).removeClass('active');
});

$('.slide-title').scrollSpy();


$('#gallery1').rebox({ 
	selector: 'a'
});
$('#gallery2').rebox({ 
	selector: 'a'
});
$('#gallery3').rebox({ 
	selector: 'a'
});
$('#gallery4').rebox({ 
	selector: 'a'
});
$('#gallery5').rebox({ 
	selector: 'a'
});
$('#gallery6').rebox({ 
	selector: 'a'
});
$('#gallery7').rebox({ 
	selector: 'a'
});