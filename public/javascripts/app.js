$(document).ready(function() {
  var $container = $('.container');

  $container.masonry({
    itemSelector: '.tile',
    gutter: 10
  });

  var msnry = $container.data('masonry');

  function getInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function tileGen(size, content) {
    var text = '<div class="tile col-xs-' + size + '">' + content + '</div>';
    return text;
  }

  window.addToGrid = function(sum) {
    sum = sum || 1;
    for (var i = 0; i < sum; i++) {
      var size = getInt(1, 12);
      console.log(size);
      var tile = tileGen(size, size);
      var $tile = $(tile);
      $container
        .append($tile)
        .masonry('appended', $tile);
    }
  };
  addToGrid(10);
});