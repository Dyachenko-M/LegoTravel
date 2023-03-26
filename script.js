$(window).on("scroll", function() {
    $(nav).toggleClass("active", $(this).scrollTop() > $(window).height(1500));
  });