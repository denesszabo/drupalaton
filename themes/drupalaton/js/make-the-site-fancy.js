$(document).ready(function () {

  var scrollorama = $.scrollorama({ blocks: '.boats' });
  var width = $(document).width();
  
  function addclasstonav() {
    $window = $(window);
    var $nav_height = $('.navigation').height();
    if($window.scrollTop() > $nav_height) {
      $('.navigation').addClass('fixed');
      $nav_height += 20;
      $('section').css('padding-top', $nav_height + 'px');
    }
    $window.scroll(function () {
      // lock the menu itself
      $nav_height = $('.navigation').height();
      if ($window.scrollTop() > $nav_height) {
        $('.navigation').addClass('fixed');
        $nav_height += 20;
        $('section').css('padding-top', $nav_height + 'px');
      }
      else {
        $('.navigation').removeClass('fixed');
      }
    });
  }
  
  $('.boats').css('width', width);

  if (width >= 980) {
    addclasstonav();
    
    scrollorama
    .animate('#bigboat', { delay: -640, duration: 800, property: 'left', start: -10, end: 600  })
    .animate('#smallboat', { delay: -550, duration: 700, property: 'left', start: -10, end: 600  });
  }
  else if (width < 979 && width >= 600) {
    addclasstonav();
    
    scrollorama
    .animate('#bigboat', { delay: -300, duration: 800, property: 'left', start: -10, end: 600  })
    .animate('#smallboat', { delay: -350, duration: 700, property: 'left', start: -10, end: 600  });

  }
  else if (width < 600) {
    // no move
  }


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
  if ('#about-keszthely' == hash || '#about-balaton' == hash || '#history-drupalaton' == hash || '#sponsors-silver-tab' == hash || '#sponsors-gold-tab' == hash || '#sponsors-diamond-tab' == hash || '#about-robert' == hash || '#about-swentel-tab' == hash || '#about-bram-tab' == hash ) {
    changeTab(hash);
  }

  $('.tabs a').click(function(e) {
    changeTab(this.hash);
  });
});
