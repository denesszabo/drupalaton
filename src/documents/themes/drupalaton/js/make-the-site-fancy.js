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
  }
  $window.scroll(function () {
    // lock the menu itself
    $nav_height = $('.navigation').height();
    if ($window.scrollTop() > $nav_height) {
      $('.navigation').addClass('fixed');
    }
    else {
      $('.navigation').removeClass('fixed');
    }
  });


  // Tabs content for About and Sponsors region
  function changeTab(target) {
    $('.tab-content').each(function () {
      $(this).addClass('invisible');
    });

    var current = target + '-tab';
    $(current).removeClass('invisible').slideDown({
      duration: 'fast',
      easing: 'linear'
    });
  }

  var hash = location.hash;
  if ('#about-keszthely' == hash || '#about-balaton' == hash || '#history-drupalaton' == hash ) {
    changeTab(hash);
  }
  
  $('.tabs a').click(function(e) {
    $(".tabs a").removeClass("tab-open");
    changeTab(this.hash);
    $(this).addClass("tab-open");
    location.hash = target;
    e.preventDefault();
    return false;
  });

  $(window).on('hashchange', function (e) {
    e.preventDefault();
    return false;
  });
});
