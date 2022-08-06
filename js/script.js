 
  
  
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
  });

  $(document).ready(function () {
    var $window = $(window);
    var $sidebar = $(".sideSticky");
    var $sidebarHeight = $sidebar.innerHeight();
    var $footerOffsetTop = $(".footer").offset().top;
    var $sidebarOffset = $sidebar.offset();
  
    $window.scroll(function () {
      if ($window.scrollTop() > $sidebarOffset.top) {
        $sidebar.addClass("fixed");
      } else {
        $sidebar.removeClass("fixed");
      }
      if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
        $sidebar.css({
          top: -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)
        });
      } else {
        $sidebar.css({ top: "0" });
      }
    });


    
  });
  
  
      

