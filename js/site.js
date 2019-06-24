$(function(){
	/* smoothscroll from top nav */
	$(".scroll").click(function(event){
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	/* sticky sidebar */
	if ($('#sub-nav ul').length) { // make sure "#sticky" element exists
		var el = $('#sub-nav ul');
		var stickyTop = el.offset().top; // returns number
		var stickyHeight = el.height();

		$(window).scroll(function() { // scroll event
			var limit = $('#footer').offset(top) - stickyHeight - 20;

			var windowTop = $(window).scrollTop(); // returns number

			if (stickyTop < windowTop) {
				el.css({
					position: 'fixed',
					top: 0
				});
			} else {
				el.css('position', 'static');
			}

			if (limit < windowTop) {
				var diff = limit - windowTop;
				el.css({
					top: diff
				});
			}
		});
	}
});
