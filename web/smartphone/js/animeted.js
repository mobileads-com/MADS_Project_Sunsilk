$( document ).ready(function() {
    
      $('head').append('<div class="logo"></div>');
      $('#rma-widget').append('<div class="logo"></div>');
      /*$('#rma-widget').append('<div class="carusel step_1" id="carousel">');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_2.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_1.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_2.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_1.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_2.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_1.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_2.png" id="item-1" /></a>');
          $('#carousel').append(' <a href="#"><img src="'+path+'img/gal_1.png" id="item-1" /></a>');
          $('#carousel').append('<div id="prev"></div>');
          $('#carousel').append('<div id="next"></div>');
      $('#rma-widget').append('</div>');*/
      $('#rma-widget').append('<div class="text_first_page step_1">');
          $('.text_first_page').append('<h2>SHARE</h2>');
          $('.text_first_page').append('<h1>GAYA HIJABMU</h1>');
          $('.text_first_page').append('<p>Temukan inspirasi gaya hijab yang sesuai untukmu. Upload foto kamu dan coba beragam pilihan gaya hijab terbaru, lalu share kepada teman-temanmu!</p>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<form action="" method="post" id="form_sel" enctype="multipart/form-data">');
          $('#form_sel').append('<input type="file"  id="take-picture" accept="image/*"  style="" value="upload">');
          $('#form_sel').append('<label id="las" for="take-picture">');
              $('#las').append('<div class="btn_selfi step_1">');
                  $('.btn_selfi').append('<p>SELFIE</p>');
              $('#las').append('</div>');
          $('#form_sel').append('</label>');
      $('#rma-widget').append('</form>');
      $('#rma-widget').append('<div class="text_second_page  sssqq step_2">');
         $('.sssqq').append('<h2>SHARE</h2>');
         $('.sssqq').append('<h1>GAYA HIJABMU</h1>');
         $('.sssqq').append('<p>Pilih gaya hijab yang paling kamu suka.</p>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="work_place step_2">');
          $('.work_place').append('<div class="panel_control">');
              $('.panel_control').append('<ul id="ul_ww">');
                  $('#ul_ww').append('<li id="check">');
                      $('#check').append('<img src="'+path+'img/check.png" alt="z">');
                  $('#ul_ww').append('</li>');
                  $('#ul_ww').append('<li id="rotate">');
                      $('#rotate').append('<img src="'+path+'img/rotate.png" alt="z">');
                  $('#ul_ww').append('</li>');
                  $('#ul_ww').append('<li id="zoom_plus">');
                      $('#zoom_plus').append('<img src="'+path+'img/zoom_plus.png" alt="z">');
                  $('#ul_ww').append('</li>');
                  $('#ul_ww').append('<li id="zoom_minus">');
                      $('#zoom_minus').append('<img src="'+path+'img/zoom_minus.png" alt="z">');
                  $('#ul_ww').append('</li>');
              $('.panel_control').append('</ul>');
          $('.work_place').append('</div>');
          $('.work_place').append('<div class="asda">');
              $('.asda').append('<p id="bb">');
                  $('#bb').append('<img id="work_place" src="'+path+'img/hijab.png" alt="q">');
              $('.asda').append('</p>');
                  $('.asda').append('<div id="canv_work" class="canv_work">');
                      $('#canv_work').append('<div id="img_move">');
                      $('#canv_work').append('</div>');
                  $('.asda').append('</div>');
              $('.work_place').append('</div>');
          $('.work_place').append('</div>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="changhe_hijab step_2">');
            $('.changhe_hijab').append('<div class="carousel1 shadow1"> ');
                  $('.carousel1').append('<div class="carousel-button-left">')
                      $('.carousel-button-left').append('<a href="#"></a>');
                  $('.carousel1').append('</div>')
                  $('.carousel1').append('<div class="carousel-button-right">')
                      $('.carousel-button-right').append('<a href="#"></a>');
                  $('.carousel1').append('</div>')
                  $('.carousel1').append('<div class="carousel-wrapper"> ');
                      $('.carousel-wrapper').append('<div class="carousel-items">');
                          $('.carousel-items').append('<div class="carousel-block">');
                              $('.carousel-block').append('<img id="hij_1" class="thumb"  src="'+path+'img/hijab.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_2" class="thumb"  src="'+path+'img/hijab_2.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_3" class="thumb"  src="'+path+'img/hijab_3.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_4" class="thumb"  src="'+path+'img/hijab_4.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_5" class="thumb"  src="'+path+'img/hijab_5.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_6" class="thumb"  src="'+path+'img/hijab_6.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_7" class="thumb"  src="'+path+'img/hijab_7.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                          $('.carousel-items').append('<div class="carousel-block"></div>');
                              $('.carousel-block').append('<img id="hij_8" class="thumb"  src="'+path+'img/hijab_8.png" alt="hijab" />');
                          $('.carousel-items').append('</div>');
                      $('.carousel-wrapper').append('</div>');
                  $('.carousel1').append('</div>');
             $('.changhe_hijab').append('</div>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="btn_page2 step_2 affhet">');
          $('.btn_page2').append('<div class="mrcr kembali">');
            $('.kembali').append('<p><span><</span> KEMBALI');
            $('.kembali').append('</p>');
          $('.btn_page2').append('</div>');

          $('.btn_page2').append('<div class="mrcr pilih pilih1 btha">');
            $('.pilih1').append('<p>PILIH</p>');
          $('.btn_page2').append('</div>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="text_second_page step_3 est beqqqq">');
          $('.est').append('<h2>SHARE</h2>');
          $('.est').append('<h1>GAYA HIJABMU</h1>');
          $('.est').append('<p>Wow! Kamu terlihat cantik. Share inspirasi gaya hijabmu ke temanmu!</p>');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="soc_sharing step_3">');
          $('.soc_sharing').append('<h5>Share</h5>');
          $('.soc_sharing').append('<img id="facebook_shar" src="'+path+'img/fb_icon.png"  alt="fb">');
          $('.soc_sharing').append('<img id="twitter_shar" src="'+path+'img/tw_icon.png"  alt="tw">');
      $('#rma-widget').append('</div>');
      $('#rma-widget').append('<div class="ad_banner step_3">');
          $('.ad_banner').append('<img src="'+path+'img/product1.png" alt="product">');
          $('.ad_banner').append('<div id="vlad_k">');
                  $('#vlad_k').append('<h4>SUNSILK<br>CLEAN & FRESH</h4>');
                  $('#vlad_k').append('<p class="adadad">Mengandung Vitamin Citrus Complex yang memberikan sensasi bersih dan segar di rambutmu sepanjang hari.</p>');
                  $('.ad_banner').append('<a href="http://www.sunsilk.co.id/product/category/796300/-clean-fresh" target="_blank" class="tolanding"><div class="mrcr1 pilih pag3" style=" margin-left: 10px; ">');
                      $('.pag3').append('<p>Lebih Lanjut <span>></span></p>');
                  $('.ad_banner').append('</div></a>');
          $('ad_banner').append('</div>');
      $('#rma-widget').append('</div>');

      $('#rma-widget').append('<div class="coba step_3" style=" margin-left: 31px; ">');
          $('.coba').append('<p><span><</span> Coba Lagi</p>');
      $('#rma-widget').append('</div>');

      $('#rma-widget').append('<a href="http://www.hairfashion.me/hijab_fashion" class="step_3 inspirasi" target="_blank"><div style=" margin-left: 30px; ">');
          $('.inspirasi').append('<p>Inspirasi Hijab Lainnya</p>');
      $('#rma-widget').append('</div></a>');
    
    /* Loader Gif */
    $('#rma-widget').append('<div class="inst loader_gif" style="display:none;">');
    $('.loader_gif').append('<img src="'+path+'img/load-01.gif">');
    $('.loader_gif').append('</div>');
    $('#rma-widget').append('</div>');
    
    /* @NOTE additional tracker to debug - NJ */
    $('.btn_selfi').on('click', function () {
        /* SelfFie Click Tracking */
        if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && photoTracker1 == 0) { console.log(custTracker[0]);
            photoClickTracker1 = 1;
            $('body').append('<img src="' + custTracker[0] + '&ii=sh_selfie_click&tt=E" style="display:none;"/>');
        }
        if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && photoTracker2 == 0) {console.log(custTracker[1]);
            photoClickTracker2 = 1;
            $('body').append('<img src="' + custTracker[1] + '&type=sh_selfie_click&tt=E" style="display:none;"/>');
        }
    });

    var globalImg;
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var transform;
    
          var carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            speed:300,
            separation:80,
            flankingItems:2,
            sizeMultiplier:0.6,
            opacityMultiplier:0.2,
            imageNav: false,
            movingToCenter: function ($item) {
              $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function ($item) {
              $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            },
            movingFromCenter: function ($item) {
              $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
            },
            movedFromCenter: function ($item) {
              $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function ($item) {
              $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            }
          });

          $('#prev').bind('click', function () {
            carousel.prev();
            return false
          });

          $('#next').bind('click', function () {
            carousel.next();
            return false;
          });

          $('#reload').bind('click', function () {
            newOptions = eval("(" + $('#newoptions').val() + ")");
            carousel.reload(newOptions);
            return false;

        });

            $(document).on('click', ".carousel-button-right",function(){ 
              var carusel = $(this).parents('.carousel1');
              right_carusel(carusel);
              return false;
            });
            $(document).on('click',".carousel-button-left",function(){ 
              var carusel = $(this).parents('.carousel1');
              left_carusel(carusel);
              return false;
            });
            function left_carusel(carusel){
               var block_width = $(carusel).find('.carousel-block').outerWidth();
                var i = parseInt($(carusel).find(".carousel-items").css('left').replace('px',''));
                i = isNaN(i) ? 0 : i;
                if (i < 0) {
                    i += 60;
                }
               $(carusel).find(".carousel-items").animate({left: i + "px"}, 200); 
               
            }
            function right_carusel(carusel){
               var block_width = $(carusel).find('.carousel-block').outerWidth();
                var i = parseInt($(carusel).find(".carousel-items").css('left').replace('px',''));
                i = isNaN(i) ? 0 : i;
                if (i >= -180) {
                    i -= 60;
                }
               $(carusel).find(".carousel-items").animate({left: i +"px"}, 200, function(){
               }); 
            }
            
              $('.carousel-block').click(function(){                                   
                var images = $(this).find('img');
                var imgSrc = images.attr('src');
             
                $('#work_place').attr({ src: imgSrc });      

                $('.thumb').removeClass('border_grin');                       
                images.addClass('border_grin');                                
                return false;
              });
              $("#check").click(function(){

              })


                var fileInput = document.getElementById('take-picture');
                var fileDisplayArea = document.getElementById('img_move');

            var guide_animation = 0;

                fileInput.addEventListener('change', function(e) {
                  var file = fileInput.files[0];
                  var imageType = /image.*/;

                  if (file.type.match(imageType)) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                      fileDisplayArea.innerHTML = "";

                      var img = new Image();
                      img.src = reader.result;
                        globalImg = img;
                        
                      fileDisplayArea.appendChild(img);
                        
                        $('#rma-widget').append('<div class="inst guide_gif">');
                        $('.guide_gif').append('<img src="'+path+'img/gif.gif">');
                        $('.guide_gif').append('</div>');
                        $('#rma-widget').append('</div>');

                        setTimeout(function(){
                            $(".guide_gif").css("display", "none")
                        },7000);
                        console.log(custTracker)
                        /* SelfFie Tracking */
                        if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && photoTracker1 == 0) { console.log(custTracker[0]);
                            photoTracker1 = 1;
                            $('body').append('<img src="' + custTracker[0] + '&ii=sh_selfie&tt=E" style="display:none;"/>');
                        }
                        if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && photoTracker2 == 0) {console.log(custTracker[1]);
                            photoTracker2 = 1;
                            $('body').append('<img src="' + custTracker[1] + '&type=sh_selfie&tt=E" style="display:none;"/>');
                        }

                        
                      $(function() {


                         $( "#img_move img" ).attr("id","iqwe");
                        $( "#iqwe" ).attr("ongesturechange","gesture(event)");
                        $( "#iqwe" ).attr("ongestureend","gestureend(event)");
                        $( "#iqwe" ).draggable();

                          
                          $("#rotate").click(function(){
                            $( "#iqwe" ).transition({rotate: '-=90deg'});
                          });

                          if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
                          {
                              EXIF.getData(globalImg, function() {
                                  var orientation = EXIF.getTag(this, 'Orientation');

                                  if (orientation == '6') {
                                      $( "#iqwe" ).transition({rotate: '-=180deg'});
                                      $( "#iqwe" ).transition({rotate: '+=90deg'});
                                      $( "#iqwe" ).css('left','42px');
                                      $( "#iqwe" ).css('top','-42px');
                                  }
                              });
                          }
                          
                         


(function(modules) { 
 var installedModules = {};

 function __webpack_require__(moduleId) {

   if(installedModules[moduleId])
     return installedModules[moduleId].exports;

   var module = installedModules[moduleId] = {
     exports: {},
     id: moduleId,
     loaded: false
   };

   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
   modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);


   module.loaded = true;
   return module.exports;
 }
 __webpack_require__.m = modules;
 __webpack_require__.c = installedModules;
 __webpack_require__.p = "/";
 return __webpack_require__(0);
})
([

 function(module, exports, __webpack_require__) {

  var toggle = document.querySelector(".toggle-sidebar");
  var target = document.querySelector(".sidebar");
  if(toggle && target) {
      toggle.addEventListener("click", function(ev) {
          if(target.className.indexOf('show') === -1) {
              target.className += ' show';
          } else {
              target.className = target.className.replace('show', '');
          }
          ev.preventDefault();
      });
  }

  if(document.querySelector("#iqwe")) {
      __webpack_require__(1);
  }

  /*__webpack_require__(2);*/


},

function(module, exports, __webpack_require__) {

  var reqAnimationFrame = (function () {
      return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
          window.setTimeout(callback, 1000 / 60);
      };
  })();

  var screen = document.querySelector("#img_move");
  var el = document.querySelector("#iqwe");

  var START_X = Math.round((screen.offsetWidth - el.offsetWidth) / 2);
  var START_Y = Math.round((screen.offsetHeight - el.offsetHeight) / 2);
    
  var ticking = false;
  var timer;

  var mc = new Hammer.Manager(el);

  mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

  mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
  mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);



  
  mc.on("rotatestart rotatemove", onRotate);
  mc.on("pinchstart pinchmove", onPinch);
 $("#zoom_plus").click(function(){
                              /*
                            $( "#iqwe" ).animate({
                                 width: '+=25'
                            });
                            */
                              transform.scale += 0.1
                              updateElementTransform();
                          });
                          $("#zoom_minus").click(function(){
                              /*
                            $( "#iqwe" ).animate({
                                 width: '-=25'
                            });
                            */
                              transform.scale -= 0.1
                              updateElementTransform();
                              
                          });

  

  function logEvent(ev) {
      //el.innerText = ev.type;
  }

  function resetElement() {
      el.className = 'animate';
      transform = {
          translate: { x: START_X, y: START_Y },
          scale: 1,
          angle: 0,
          rx: 0,
          ry: 0,
          rz: 0
      };
      requestElementUpdate();
  }

  function updateElementTransform() {
      var value = [
          'scale(' + transform.scale + ', ' + transform.scale + ')',
          'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
      ];

      value = value.join(" ");
      el.style.webkitTransform = value;
      el.style.mozTransform = value;
      el.style.transform = value;
      ticking = false;
  }

  function requestElementUpdate() {
      if(!ticking) {
          reqAnimationFrame(updateElementTransform);
          ticking = true;
      }
  }

  function onPan(ev) {
      el.className = '';
      transform.translate = {
          x: START_X + ev.deltaX,
          y: START_Y + ev.deltaY
      };

      logEvent(ev);
      requestElementUpdate();
  }

  var initScale = 1;
  function onPinch(ev) {
      if(ev.type == 'pinchstart') {
          initScale = transform.scale || 1;
      }

      el.className = '';
      transform.scale = initScale * ev.scale;

      logEvent(ev);
      requestElementUpdate();
  }

  var initAngle = 0;
  function onRotate(ev) {
      if(ev.type == 'rotatestart') {
          initAngle = transform.angle || 0;
      }

      el.className = '';
      transform.rz = 1;
      transform.angle = initAngle + ev.rotation;

      logEvent(ev);
      requestElementUpdate();
  }

  function onSwipe(ev) {
      var angle = 50;
      transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
      transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;
      transform.angle = (ev.direction & (Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP)) ? angle : -angle;

      clearTimeout(timer);
      timer = setTimeout(function () {
          resetElement();
      }, 300);

      logEvent(ev);
      requestElementUpdate();
  }

  function onTap(ev) {
      transform.rx = 1;
      transform.angle = 25;

      clearTimeout(timer);
      timer = setTimeout(function () {
          resetElem1ent();
      }, 2000000);

      logEvent(ev);
      requestElementUpdate();
  }

  function onDoubleTap(ev) {
      transform.rx = 1;
      transform.angle = 80;

      clearTimeout(timer);
      timer = setTimeout(function () {
          resetElement();
      }, 500);

      logEvent(ev);
      requestElementUpdate();
  }

  resetElement();

  /*document.querySelector(".device-button").addEventListener("click", function(){
  document.querySelector(".device").classList.toggle('iqwe');
  }, false);*/


/***/ },

/******/ ])














                      }, 3000);


                    }

                    reader.readAsDataURL(file); 
                  } else {
                    fileDisplayArea.innerHTML = "File not supported!"
                  }
                });
                
                $('#take-picture').change( function() {
                  $(function(){
                    $(".step_1").css("display","none");
                    $("#rma-widget").css("background","url("+path+"img/bg.png)");
                    $("#rma-widget").css("background-color","#fff");
                    $(".step_2").css("display","block");
                    $(".step_3").css("display","none");
                  });
                });

            
  $("#check").click(function() {
    if ($("#work_place").attr("src") == path+"img/hijab.png") {
      $("#work_place").attr("src",path+"img/hijab_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_m1.png") {
      $("#work_place").attr("src",path+"img/hijab.png");
    }
    /*2*/
    if ($("#work_place").attr("src") == path+"img/hijab_2.png") {
      $("#work_place").attr("src",path+"img/hijab_2_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_2_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_2.png");
    }
    /*3*/
    if ($("#work_place").attr("src") == path+"img/hijab_3.png") {
      $("#work_place").attr("src",path+"img/hijab_3_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_3_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_3.png");
    }
    /*4*/
    if ($("#work_place").attr("src") == path+"img/hijab_4.png") {
      $("#work_place").attr("src",path+"img/hijab_4_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_4_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_4.png");
    }
    /*5*/
    if ($("#work_place").attr("src") == path+"img/hijab_5.png") {
      $("#work_place").attr("src",path+"img/hijab_5_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_5_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_5.png");
    }
    /*6*/
    if ($("#work_place").attr("src") == path+"img/hijab_6.png") {
      $("#work_place").attr("src",path+"img/hijab_6_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_6_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_6.png");
    }
    /*7*/
    if ($("#work_place").attr("src") == path+"img/hijab_7.png") {
      $("#work_place").attr("src",path+"img/hijab_7_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_7_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_7.png");
    }
    /*8*/
    if ($("#work_place").attr("src") == path+"img/hijab_8.png") {
      $("#work_place").attr("src",path+"img/hijab_8_m1.png");
    }
      else if($("#work_place").attr("src") == path+"img/hijab_8_m1.png") {
      $("#work_place").attr("src",path+"img/hijab_8.png");
    }
  });


  $(".kembali, .coba").click(function(){
      /* Reload Tracking  */
      if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && twitterTracker1 == 0) {
          twitterTracker1 = 1;
          $('body').append('<img src="' + custTracker[0] + '&ii=sh_cobalagi&tt=E" style="display:none;"/>');
      }
      if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && twitterTracker2 == 0) {
          twitterTracker2 = 1;
          $('body').append('<img src="' + custTracker[1] + '&type=sh_cobalagi&tt=E" style="display:none;"/>');
      }
      
        /*$(".step_1").css("display","block");
        $(".step_2").css("display","none");
        $(".step_3").css("display","none");
        $(".text_second_page").addClass("disp_none");
        $(".ad_banner").addClass("disp_none");
        $(".soc_sharing").addClass("disp_none");*/
      setTimeout(function () {
        location.reload();
      }, 2000)
        
  })
  
  function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}
    
  $(".btha").click(function(){
      
      /* Pilih Tracking  */
      if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && confirmhijabTracker1 == 0) {
          confirmhijabTracker1 = 1;
          $('body').append('<img src="' + custTracker[0] + '&ii=sh_choose&tt=E" style="display:none;"/>');
      }
      if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && confirmhijabTracker2 == 0) {
          confirmhijabTracker2 = 1;
          $('body').append('<img src="' + custTracker[1] + '&type=sh_choose&tt=E" style="display:none;"/>');
      }
      
      $('.loader_gif').show();
      
      $(".changhe_hijab, .btn_page2, .panel_control").css("display","none");
      $(".step_3").css("display","block");
      $(".work_place").addClass("pilihqq");
      $(".text_second_page").css("display", "none");
      $(".beqqqq").addClass("disb")
      $( "#iqwe" ).removeAttr("ongesturechange","gesture(event)");
      $( "#iqwe" ).removeAttr("ongestureend","gestureend(event)");
      $( "#iqwe" ).css("pointerEvents", "none");
      $(".asda p, .asda").css("backgroundColor", "#fff");
      $(".asda p").css("marginTop", "4px");
      $( "#img_move img" ).removeAttr("id","iqwe");
      $( ".asda" ).css("marginLeft", "-77px");
      $( ".asda" ).css("marginTop", "-10px");
      $("#check").click()
        
      var img2 = $('#work_place').attr('src');
      var img = $('#img_move').children('img').attr('src');
      var pos = $('#img_move').children('img').position();
      var t = parseInt($('#img_move').children('img').css('top').replace('px',''));
      var l = parseInt($('#img_move').children('img').css('left').replace('px',''));
        
      var w = $('#img_move').children('img').width();
      var h = $('#img_move').children('img').height();
      
      var r = getRotationDegrees($('#img_move').children('img'));
      
      t = isNaN(t) ? 0 : t;
      l = isNaN(l) ? 0 : l;
      
      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
          EXIF.getData(globalImg, function() {
              var orientation = EXIF.getTag(this, 'Orientation');
              
              if (orientation == '6') {
                  r += 90;
                  var temp = w;
                  w = h;
                  h = temp;
                  //temp = t;
                  //t = l;
                  //l = temp;
                  l -= 42;
                  t += 42;
                  
              }
          });
      }else{
          l += 2;
          t -= 2;
      }
      
      var mergedImage = '';
      var shareHTML = '';
      
      /* 
      * Jquery Image Merging
      * 
      * Author - NJ 
      */
      $.extend({
          mergeImage : function (options) {
              $(options.container).append('<canvas id="mergeImageCanvas" style="display:none;"></canvas>');
              
              var canvas = $("#mergeImageCanvas")[0];
              canvas.width = 298;
              canvas.height = 224;
              var ctx = $("#mergeImageCanvas")[0].getContext("2d");
              var imgObj = [new Image(), new Image()];

              imgObj[0].src = options.img[0];
              imgObj[1].src = options.img[1];
              
              if (typeof options.scale != 'undefined') {
                  
                  var x = options.width / 100;
                  var n = options.scale * 100;
                  options.width = x * n;
                  
                  var y = options.height / 100;
                  options.height = y * n;
                  
                  options.x -= (x * (n - 100)) / 2;
                  
                  options.y -= (y * (n - 100)) / 2;
              }
              
              imgObj[0].onload = function() {
                  
                  ctx.save();
                  ctx.translate(options.x, options.y);
                  ctx.translate(options.width/2, options.height/2);
                  ctx.rotate(options.rotation*Math.PI/180);
                  ctx.drawImage(imgObj[0], - options.width/2 , - options.height/2, options.width, options.height);
                  ctx.restore();
                  
                  imgObj[1].onload = function() {
                      
                      ctx.drawImage(imgObj[1], 0, 0, 298, 224);
                      
                      var img = $("#mergeImageCanvas")[0].toDataURL("image/png");
                      
                      $.uploadImage({
                          'img' : img,
                          'target' : 'https://img.mobileads.com/sources/htmlCreation.php'
                      });
                  }
              }
          },
          uploadImage : function (options) {
              options.img = options.img.replace('data:image/png;base64,', '');
              
              var formData = new FormData();
              formData.append('image', options.img);

              $.ajax({
                  type:'POST',
                  url: options.target,
                  data:formData,
                  cache:false,
                  contentType: false,
                  processData: false,
                  success:function(data){
                      console.log(data);
                      console.log(typeof data);
                      data = JSON.parse(data);
                      console.log(data);
                      mergedImage = data.url;
                      shareHTML = data.html;
                      
                      $('.loader_gif').hide();
                  },
                  error: function(data){
                      console.log(data);
                  }
              });
          }
      });
      $.mergeImage({
          'container' : '#rma-widget',
          'img' : [
              img,
              img2
          ],
          'width' : w,
          'height' : h,
          'x' : l,
          'y' : t,
          'rotation' : r,
          'scale' : transform.scale
      });
      
      $('.tolanding').on('click', function () {
          /* Site Tracking  */
          if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && siteTracker1 == 0) {
              siteTracker1 = 1;
              $('body').append('<img src="' + custTracker[0] + '&ii=sh_site&tt=CTR" style="display:none;"/>');
          }
          if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && siteTracker2 == 0) {
              siteTracker2 = 1;
              $('body').append('<img src="' + custTracker[1] + '&type=sh_site&tt=CTR" style="display:none;"/>');
          }
      });
      
      $('.inspirasi').on('click', function () {
          /* Site Tracking  */
          if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && morehijabTracker1 == 0) {
              morehijabTracker1 = 1;
              $('body').append('<img src="' + custTracker[0] + '&ii=sh_hijabfashion&tt=E" style="display:none;"/>');
          }
          if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && morehijabTracker2 == 0) {
              morehijabTracker2 = 1;
              $('body').append('<img src="' + custTracker[1] + '&type=sh_hijabfashion&tt=E" style="display:none;"/>');
          }
      });
      
      $('#facebook_shar').on('click', function () {
          
          /* Facebook Tracking  */
          if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && facebookTracker1 == 0) {
              facebookTracker1 = 1;
              $('body').append('<img src="' + custTracker[0] + '&ii=sh_facebook&tt=E" style="display:none;"/>');
          }
          if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && facebookTracker2 == 0) {
              facebookTracker2 = 1;
              $('body').append('<img src="' + custTracker[1] + '&type=sh_facebook&tt=E" style="display:none;"/>');
          }
          
          $('.loader_gif').show();
          
          var fbInterval = function () {
              setTimeout(function () {
                  if (mergedImage != '') {
                      
                      $('.loader_gif').hide();
                      
                      window.open('https://www.facebook.com/dialog/feed?app_id=1644304792511433&display=popup&name=Temukan%20inspirasi%20berkerundung%20terbaru%20untuk%20kamu%20yang%20stylish.&link=http%3A%2F%2Fsunsilkhijab.com%2F&picture='+encodeURIComponent(mergedImage)+'&redirect_uri=http%3A%2F%2Fsunsilkhijab.com%2F');
                  } else {
                      fbInterval();
                  }

              }, 500);
           }
          fbInterval();
      });
      
      $('#twitter_shar').on('click', function () {
          
          /* Twitter Tracking  */
          if (typeof custTracker != 'undefined' && typeof custTracker[0] != 'undefined' && custTracker[0] != '' && twitterTracker1 == 0) {
              twitterTracker1 = 1;
              $('body').append('<img src="' + custTracker[0] + '&ii=sh_twitter&tt=E" style="display:none;"/>');
          }
          if (typeof custTracker != 'undefined' && typeof custTracker[1] != 'undefined' && custTracker[1] != '' && twitterTracker2 == 0) {
              twitterTracker2 = 1;
              $('body').append('<img src="' + custTracker[1] + '&type=sh_twitter&tt=E" style="display:none;"/>');
          }
          
          $('.loader_gif').show();
          
          var fbInterval = function () {
              setTimeout(function () {
                  if (shareHTML != '') {
                      
                      $('.loader_gif').hide();
                      
                      window.open('https://twitter.com/intent/tweet?text=Temukan%20inspirasi%20berkerundung%20terbaru%20untuk%20kamu%20yang%20stylish.&original_referer='+encodeURIComponent(shareHTML)+'&tw_p=tweetbutton&url='+encodeURIComponent(shareHTML));
                  } else {
                      fbInterval();
                  }

              }, 500);
           }
          fbInterval();
      });
      
      
  })
})

var rotation = 0;
var scale = 1;
function gesture(event) {
    event.target.innerHTML = "Rotation: " +
    Math.round((event.rotation+rotation)*100)/100
    + " Scale: " + Math.round((event.scale*scale)*100)/100;
    event.target.style.webkitTransform = "rotate(" + (event.rotation+rotation)%360
    + "deg)" + " scale(" + event.scale*scale + ")";
}
function gestureend(event) {
    rotation = event.rotation+rotation;
    scale = event.scale*scale;
}