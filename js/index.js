$(document).ready(function() {
  menubar();
  slide();
  // tabmenu();
  ajaxTabMenu();
  searchStore();
  menuScroll2();
});

function slide() {
  $(".bg_img").bxSlider({
    auto: true
  });
}

function menubar() {
  $("#nav>ul>li").mouseenter(function() {
    $("#nav ul ul, .dnav")
      .stop()
      .slideDown();
  });
  $("#nav>ul>li").mouseleave(function() {
    $("#nav ul ul , .dnav")
      .stop()
      .slideUp();
  });
}

function tabmenu() {
  $("ul.tabs li").click(function() {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
}

function ajaxTabMenu() {
  $(".tab-link").click(function() {
    var activeTab = $(this).attr("data-tab");
    $(".tabs > li")
      .css("background-color", "#f2f2f2")
      .css("color", "#000000");
    $(this)
      .css("background-color", "#f2c000")
      .css("color", "#ffffff");
    $.ajax({
      type: "GET",
      url: activeTab + ".html",
      dataType: "html",
      error: function() {
        alert("통신실패!");
      },
      success: function(data) {
        $("#best_menu_slider").html(data);
      }
    });
  });
  $("#default").click();
}

function searchStore() {
  var availableTags = [
    "역삼동",
    "역삼1동",
    "역삼2동",
    "논현동",
    "논현역",
    "신논현역",
    "서초동",
    "대치동",
    "강남역"
  ];
  $("#store_search").autocomplete({
    source: availableTags
  });
}

function menuScroll2() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = 50;

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      $("header")
        .removeClass("nav-down")
        .addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("header")
          .removeClass("nav-up")
          .addClass("nav-down");
      }
    }
    lastScrollTop = st;
  }
}
