var $container = $('.tiles');

$container.masonry({
  itemSelector: '.tile',
  columnWidth: '.tile'
});

var msnry = $container.data('masonry');

function getInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tileGen(size, content) {
  var text = '<img class="col-xs-' + size + '>' + content + '</div>';
  return text;
}

function setTileHeight() {
  var tile = $('.tile');
  var height = $(document).height();
  tile.each(function() {
    var parent = $(this).parent();
    var width = parent.width();
    if (width < height / 2) {
      $(this).css('min-height', width);
    } else {
      $(this).css('min-height', height / 2);
    }
  });
}

$.getJSON('http://localhost:8000/services/twitter?callback=', function(data) {
  var html = '';

  $.each(data, function(tweet) {
    console.log(this);
    var size = getInt(2, 12);
    html += tileGen(size, this.text);
  });
  var $tile = $(html);

  $('.container').append($tile);
});

setTileHeight();
$(window).resize(function() {
  setTileHeight();
});