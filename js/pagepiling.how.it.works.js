/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

if ($(".a-pagepiling").length) {
  $(".a-pagepiling").pagepiling({
    scrollingSpeed: 280,
    menu: "#menu, #menuMain",
    anchors: ["step1", "step2", "step3", "step4", "step5", "finish"],
    loopTop: false,
    loopBottom: false,
    navigation: {
      position: "right",
    },
    onLeave: function (index, nextIndex) {
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

      if (nextIndex == 2) {
        $(".loader-bar-step1").addClass("step-2-1");
        $(".loader-bar-step2").addClass("step-2-2");
        $(".loader-bar-step3").addClass("step-2-3");
      } else {
        $(".loader-bar-step1").removeClass("step-2-1");
        $(".loader-bar-step2").removeClass("step-2-2");
        $(".loader-bar-step3").removeClass("step-2-3");
      }

      if (nextIndex == 3) {
        $(".loader-bar-step1").addClass("step-3-1");
        $(".loader-bar-step2").addClass("step-3-2");
        $(".loader-bar-step3").addClass("step-3-3");
        $(".loader-bar-step4").addClass("step-3-4");
      } else {
        $(".loader-bar-step1").removeClass("step-3-1");
        $(".loader-bar-step2").removeClass("step-3-2");
        $(".loader-bar-step3").removeClass("step-3-3");
        $(".loader-bar-step4").removeClass("step-3-4");
      }

      if (nextIndex == 4) {
        $(".loader-bar-step1").addClass("step-4-1");
        $(".loader-bar-step2").addClass("step-4-2");
        $(".loader-bar-step3").addClass("step-4-3");
      } else {
        $(".loader-bar-step1").removeClass("step-4-1");
        $(".loader-bar-step2").removeClass("step-4-2");
        $(".loader-bar-step3").removeClass("step-4-3");
      }

      if (nextIndex == 5) {
        $(".loader-bar-step1").addClass("step-5-1");
        $(".loader-bar-step2").addClass("step-5-2");
        $(".loader-bar-step3").addClass("step-5-3");
        $(".loader-bar-step4").addClass("step-5-4");
      } else {
        $(".loader-bar-step1").removeClass("step-5-1");
        $(".loader-bar-step2").removeClass("step-5-2");
        $(".loader-bar-step3").removeClass("step-5-3");
        $(".loader-bar-step4").removeClass("step-5-4");
      }
    },
  });
}
