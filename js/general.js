$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 90,
        },
        800
      );
  });
});

// sliders js
$(".slider1").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  arrows: true,
  rtl: true,
  prevArrow:
    '<button type="button" class="arrow-prev" title="Previous"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="arrow-next" title="Next"><i class="fa fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".slider2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  arrows: true,
  rtl: true,
  prevArrow:
    '<button type="button" class="arrow-prev" title="Previous"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="arrow-next" title="Next"><i class="fa fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});
$(".slider3").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  arrows: true,
  rtl: true,
  prevArrow:
    '<button type="button" class="arrow-prev" title="Previous"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="arrow-next" title="Next"><i class="fa fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(".company-logo").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  arrows: true,
  rtl: true,
  prevArrow:
    '<button type="button" class="arrow-prev" title="Previous"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="arrow-next" title="Next"><i class="fa fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        variableWidth: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});

var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 850,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
