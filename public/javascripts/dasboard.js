// Swipe Functions using HammerJS for Sidebar
var hammertime;

hammertime = Hammer(document.getElementsByTagName("body")[0]).on("swiperight", function(event) {
  if ($('body').hasClass('mmc')) {
    return $('#main-menu-toggle').click();
  }
});

hammertime = Hammer(document.getElementsByTagName("body")[0]).on("swipeleft", function(event) {
  if ($('body').hasClass('mmc')) {

  } else {
    return $('#main-menu-toggle').click();
  }
});
