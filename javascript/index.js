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
$(function() {
    App.init();
});
var App = {
    init: function() {
                 this.side.nav(),  
                 setInterval("App.datetime();", 1e3)
    },
    
    title: function(e) {
                return $(".header>.title").text(e)
    },
    side: {
            nav: function() {
                        this.toggle(), this.navigation()
            },
            toggle: function() {
                        $(".ion-ios-navicon").on("touchstart click", function(e) {
                                    e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
                        }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                                    e.preventDefault(), $(".ion-ios-navicon").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
                        })
            },
            
    },
	navigation: function() {
		$(".nav .mask").on("touchstart click", function(e) {
					e.preventDefault(), $(this).parent().toggleClass("active")
		})
},
    
};