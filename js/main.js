$(document).ready(function(){
  var startW = 1680;
  var startH = 520;

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600,
        pager: false,
        nextText: '',
        prevText: '',
    });

    $('.bxslider_card').bxSlider({
      mode: 'fade',
      captions: true,
      pager: false,
      nextText: '',
      prevText: '',
  });

  $('.fancybox').length > 0 ?
    $('.fancybox')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        }) : null;

  setIconSizes();
  setTopDivHeight();

  window.onresize = () => {
    setIconSizes();
    setTopDivHeight();
  }

  function setTopDivHeight() {
    const innerWidth = window.innerWidth;
    $('.top_div').css({height: innerWidth > 600 ? innerWidth * 0.871239 + 'px' : 'auto'});
  }
  
  function setIconSizes() {
    const width = 1680;
    const height = 520;
    const innerWidth = window.innerWidth;
    const icons = $('.universal .universal_bg .top_div .icons');

    $('.universal .universal_bg .top_div .icons > div, .universal .universal_bg .top_div .icons2 > div').each((index, el)=> {
      const newWidth = $(el).width() * innerWidth / startW;
      const newHeight = $(el).height() * innerWidth / startW;
      $(el).css({
        width: newWidth + 'px',
        height: newHeight + 'px',
        marginTop: '-' + newHeight / 2 + 'px',
        marginLeft: '-' + newWidth / 2 + 'px',
      });
    });

    startW = innerWidth;
    startH = window.innerHeight;
    icons.css({height: (innerWidth / width) * height + 'px'});
  }

  // responsive
  var button = document.querySelectorAll(".responsive, aside .close");
  for (var i = 0; i < button.length; i++) {
      button[i].onclick = function(){
          document.querySelectorAll("aside")[0].classList.toggle('show');
          document.querySelectorAll("header .responsive")[0].classList.toggle('hide');
      }
  };
    
  $(document).click(function (event) {
    if ($(event.target).hasClass('responsive_menu')) {
        $('.side').toggleClass('show');
        $('.fade').toggleClass('in');
    } else if($('.side').hasClass('show')) {
        $('.side').removeClass('show');
        $('.fade').toggleClass('in');
    }
  });

  $('.what_is .info h1, .universal .top_div h1, .exchange .info h1, .support .centered .text h1, .press .centered h1').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset: 10
  });

  $('.universal > h1, .universal .universal_bg .download h1, .payment h1, .steps h2, .licensed h2').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInRight',
      offset: 10
  });

  $('.what_is .ufo2, .universal .universal_bg .debit_card .box, .universal .universal_bg .download').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 10
  });

  $('.icons > div, .icons2 > div').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated jackInTheBox',
    offset: 10
  });

// set duration, in pixels scrolled, for pinned element
var pinDur = 1500;

// create animation timeline for pinned element
var pinAnimations = new TimelineLite();
var controller = $.superscrollorama();

pinAnimations
  pinAnimations
  .set($('.picture2'),  {opacity: 1, transform: 'scale(1, 1)'})
  .to($('.picture2'), 1, {opacity: 0, transform: 'scale(.4, .4)'}) 
  .set($('.picture1'),  {opacity: 0, transform: 'scale(3, 3)'})
  .to($('.picture1'), 1, {opacity: 1, transform: 'scale(1, 1)'})
 // .to($('header .box'), 1, {paddingTop: '-=100px'})
  .to($('header'), 1, {height: '450px'});

  

  // pin element, use onPin and onUnpin to adjust the height of the element
  controller.pin($('header'), pinDur, {
    anim:pinAnimations, 
    onPin: function() { }, 
    onUnpin: function() { }
  });
});