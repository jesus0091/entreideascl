/*--------------------------------- Get Views --------------------------------------------*/
window.onload = router();
$(window).on("hashchange", function () {
  router();
});
/*----------------------------------------------------------------------------------------*/
/*--------------------------------- Navbar -----------------------------------------------*/
$(function(){
	var navbar = $('.scrolling-navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
/*----------------------------------------------------------------------------------------*/