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
  var $nav_height = $('.navigation').height();
  if($window.scrollTop() > $nav_height)
  {
    $('.navigation').addClass('fixed');
    //$('#scroll-wrap').css('padding-top', $nav_height + 'px');
  }
  $window.scroll(function () {
    // lock the menu itself
    $nav_height = $('.navigation').height();
    if ($window.scrollTop() > $nav_height) {
      $('.navigation').addClass('fixed');
      //$('#scroll-wrap').css('padding-top', $nav_height + 'px');
    }
    else {
      $('.navigation').removeClass('fixed');
      //$('#scroll-wrap').css('padding-top', 0);
    }
  });



  function changeTab($this) {
    $('.tab-content').each(function () {
      $(this).addClass('invisible');
    });

    var $current = $this + '-tab';
    $($current).removeClass('invisible').slideDown({
      duration: 'fast',
      easing: 'linear'
    });
  }

  var $hash = location.hash;
  if ('#about-keszthely' == $hash || '#about-balaton' == $hash || '#history-drupalaton' == $hash ) {
    changeTab($hash);
  }

  $('.tabs a').click(function() {
    changeTab(this.hash);
  });
});
