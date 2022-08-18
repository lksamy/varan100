$(function(){
  
  $('li.dropdown > a').on('click',function(event){
    
    event.preventDefault()
    
    $(this).parent().find('ul').first().toggle(300);
    
    $(this).parent().siblings().find('ul').hide(200);
    
    //Hide menu when clicked outside
    $(this).parent().find('ul').mouseleave(function(){  
      var thisUI = $(this);
      $('html').click(function(){
        thisUI.hide();
        $('html').unbind('click');
      });
    });
    
    
  });
});


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
  
  
      

