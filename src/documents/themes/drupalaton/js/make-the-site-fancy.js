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
    var link = $('[href=' + target + ']');
    var section = link.parents('section');
    var tabs = section.find('.tabs');
    
    tabs.find('a').removeClass("tab-open");
    section.find('.tab-content').each(function () {
      $(this).addClass('invisible');
    });

    var current = target + '-tab';
    $(current).removeClass('invisible').slideDown({
      duration: 'fast',
      easing: 'linear'
    });
    link.addClass("tab-open");
  }

  var hash = location.hash;
  if ('#about-keszthely' == hash || '#about-balaton' == hash || '#history-drupalaton' == hash || '#sponsors-silver-tab' == hash || '#sponsors-gold-tab' == hash || '#sponsors-diamond-tab' == hash) {
    changeTab(hash);
  }
  
  $('.tabs a').click(function(e) {
    changeTab(this.hash);
  });
});
