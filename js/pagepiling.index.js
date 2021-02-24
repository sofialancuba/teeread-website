/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

if ($(".a-pagepiling").length) {
  $(".a-pagepiling").pagepiling({
    scrollingSpeed: 280,
    menu: "#menu, #menuMain",
    sectionsColor: [],
    anchors: ["Intro", "Cards", "Assess", "Library", "Teacher"],
    loopTop: false,
    loopBottom: false,
    navigation: {
      position: "right",
    },
    onLeave: function () {
      $(".header").removeClass("header-shadow");
      if ($(".pp-scrollable.active").scrollTop() > 0) {
        $(".header").addClass("header-shadow");
      } else {
        $(".header").removeClass("header-shadow");
      }
      if ($(".slide-dark-footer").hasClass("active")) {
        $("body").addClass("body-copyright-light");
      } else {
        $("body").removeClass("body-copyright-light");
      }
      if ($(".slide-dark-bg").hasClass("active")) {
        $("body").addClass("body-bg-dark");
      } else {
        $("body").removeClass("body-bg-dark");
      }
      $(".a-carousel-projects").trigger("refresh.owl.carousel");
    },
  });
}
