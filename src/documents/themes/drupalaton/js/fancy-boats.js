$(document).ready(function () {

  var scrollorama = $.scrollorama({ blocks: '.boats' });
  var width = $(document).width();
  $('.boats').css('width', width);

  if (width >= 980) {
    scrollorama.animate('#bigboat', { delay: -640, duration: 800, property: 'left', start: -10, end: 600  });
    scrollorama.animate('#smallboat', { delay: -550, duration: 700, property: 'left', start: -10, end: 600  });
  }
  else if (width < 979 && width >= 600) {
    scrollorama.animate('#bigboat', { delay: -640, duration: 800, property: 'left', start: -10, end: 600  });
    scrollorama.animate('#smallboat', { delay: -550, duration: 700, property: 'left', start: -10, end: 600  });
  }
  else if (width < 600) {
    // no move
  }

  $window = $(window);
  $window.scroll(function () {
    // lock the menu itself
    if ($window.scrollTop() > 42) {
      $('.navigation').addClass('fixed');
    }
    else {
      $('.navigation').removeClass('fixed');
    }
  });

});
