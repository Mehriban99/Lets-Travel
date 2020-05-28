

$('.slideAll').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

  function tabclick(webname) {
    var content = document.getElementsByClassName("secondrow");
    for(i=0; i<content.length; i++) {
        content[i].style.display = "none";
    }
    document.getElementById(webname).style.display = "block";
}


$('.slideAll2').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

$('.slideAll3').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$(function(){
  $(window).on("scroll",function(){
    if($(window).scrollTop() > 300) {
      $(".header").css("opacity","0.8")
      $(".header").css("padding-top","20px");
      $(".header").css("padding-bottom","20px")
    }
    else{
      $(".header").css("opacity","1")
      $(".header").css("padding-top","30px");
      $(".header").css("padding-bottom","30px")
    }
  })
})

$(function(){
  $(window).on("scroll",function(){
    if($(window).scrollTop() > 300) {
      $(".media-header").css("opacity","0.8");
    }
    else{
      $(".media-header").css("opacity","1");
    }
  })
})

$(function(){
  $(".menu").click(function(){
    $(".media-alt").slideToggle();
  })
})

$(function(){
  $(".alt1").click(function(){
    $(".menu-alt1").slideToggle();
  })
})
$(function(){
  $(".alt2").click(function(){
    $(".menu-alt2").slideToggle();
  })
})
$(function(){
  $(".alt3").click(function(){
    $(".menu-alt3").slideToggle();
  })
})
$(function(){
  $(".alt4").click(function(){
    $(".menu-alt4").slideToggle();
  })
})
$(function(){
  $(".alt5").click(function(){
    $(".menu-alt5").slideToggle();
  })
})
$(function(){
  $(".alt6").click(function(){
    $(".menu-alt6").slideToggle();
  })
})
$(function(){
  $(".alt7").click(function(){
    $(".menu-alt7").slideToggle();
  })
})




$(function(){
  $(".p-click1").click(function(){
    $(".p-alt1").css("display", "block");
    $(".p-alt2").css("display", "none");
    $(".p-alt3").css("display", "none");
    $(".p-alt4").css("display", "none");
    $(".p-alt5").css("display", "none");
  })
})
$(function(){
  $(".p-click2").click(function(){
    $(".p-alt2").css("display", "block");
    $(".p-alt1").css("display", "none");
    $(".p-alt3").css("display", "none");
    $(".p-alt4").css("display", "none");
    $(".p-alt5").css("display", "none");
  })
})
$(function(){
  $(".p-click3").click(function(){
    $(".p-alt3").css("display", "block");
    $(".p-alt1").css("display", "none");
    $(".p-alt2").css("display", "none");
    $(".p-alt4").css("display", "none");
    $(".p-alt5").css("display", "none");
  })
})
$(function(){
  $(".p-click4").click(function(){
    $(".p-alt4").css("display", "block");
    $(".p-alt1").css("display", "none");
    $(".p-alt2").css("display", "none");
    $(".p-alt3").css("display", "none");
    $(".p-alt5").css("display", "none");
  })
})
$(function(){
  $(".p-click5").click(function(){
    $(".p-alt5").css("display", "block");
    $(".p-alt1").css("display", "none");
    $(".p-alt2").css("display", "none");
    $(".p-alt3").css("display", "none");
    $(".p-alt4").css("display", "none");
  })
})