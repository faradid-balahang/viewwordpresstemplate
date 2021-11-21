var lastScrollTop = 0;
$(window).scrollTop(0);
$(window).scroll(function(){
  console.log("realposition");
  console.log($(window).scrollTop());
  var st = $(this).scrollTop();
  if (st > lastScrollTop){
    if($(window).scrollTop()>300){
      $("header").addClass("fixedheader");
      if ($(window).width() < 768) {
        if($("body #wpadminbar").length>0){
          $("header.fixedheader").addClass("hasWpadmin");
        }
      }
  } else {
    if($(window).scrollTop()<300){
         $("header").removeClass("fixedheader");
         if($("body #wpadminbar").length>0){
          $("header.fixedheader.hasWpadmin").removeClass("hasWpadmin");
        }
    }
  }
  }
  lastScrollTop = st;
  // console.log($(window).scrollTop());    
});

$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".full-menu-container").removeClass("d-none");
    $("#mobileMenuContainer").removeClass("d-none");
    if($("#mobileMenuContainer *").length == 0){
      $("#menu .desktop ul").clone().appendTo("#mobileMenuContainer");
    }
  });
  $(".full-menu-container").on("click",function(){
    $(".hamburger").toggleClass("is-active");
    $("#mobileMenuContainer").addClass("d-none");
    $(".full-menu-container").addClass("d-none");
  });
  $("#loading").remove();
     // slider center
     var swiper = new Swiper(".mySwipercenter", {
        slidesPerView: 'auto',
        spaceBetween : 5,
        autoHeight: true,
        centeredSlides: true,
        slideToClickedSlide:true,
        lazy: true,
        // loop:true,
        onSlideChangeEnd:function(e){
          swiper.update(true);
        }
      });
      swiper.on('slideChange', function () {
        var headerHight =$("header").prop("scrollHeight");
        var whichSlide = parseInt((swiper.activeIndex)+1);
        console.log(whichSlide);
        console.log(headerHight);
        switch(whichSlide) {
            case 1:
                var firstPosition =parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition);
                $('html, body').animate({
                    scrollTop: firstPosition
                }, 20);

              break;
            case 2:
                var myVar;
                myVar = 'esperso-milk'+whichSlide;            
                var element = document.getElementById(myVar);
                var firstPosition2 = parseInt(parseInt(element.offsetTop)-parseInt(headerHight)-268);
                console.log(element.offsetTop);
                console.log(whichSlide);
                console.log(firstPosition2);
                $('html, body').animate({
                    scrollTop: firstPosition2
                }, 20);
              break;
            case 3:
                var firstPosition3 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition3);

                $('html, body').animate({
                    scrollTop: firstPosition3
                }, 20);
              break;
            case 4:
                var firstPosition4 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition4);
                $('html, body').animate({
                    scrollTop: firstPosition4
                }, 20);
              break;
            case 5:
                var firstPosition5 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition5);
                $('html, body').animate({
                    scrollTop: firstPosition5
                }, 20);
              break;
            case 6:
                var firstPosition6 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition6);
                $('html, body').animate({
                    scrollTop: firstPosition6
                }, 20);
              break;
            case 7:
                var firstPosition7 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition7);
                $('html, body').animate({
                    scrollTop: firstPosition7
                }, 20);
              break;
            case 8:
                var firstPosition8 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition8);
                $('html, body').animate({
                    scrollTop: firstPosition8
                }, 20);
              break;
            case 9:
                var firstPosition9 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition9);
                $('html, body').animate({
                    scrollTop: firstPosition9
                }, 20);
              break;
            case 10:
                var firstPosition10 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition10);
                $('html, body').animate({
                    scrollTop: firstPosition10
                }, 20);
              break;
            case 11:
                var firstPosition11 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition11);
                $('html, body').animate({
                    scrollTop: firstPosition11
                }, 20);
              break;
            case 12:
                var firstPosition12 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition12);
                $('html, body').animate({
                    scrollTop: firstPosition12
                }, 20);
              break;
            case 13:
                var firstPosition13 = parseInt(parseInt($("#esperso-milk"+whichSlide).position().top)-parseInt(headerHight));
                console.log(firstPosition13);
                $('html, body').animate({
                  
                    scrollTop: firstPosition13
                }, 20);
              break;
            default:
              // code block
          }
        });
        // change logo
        swiper.on('slideChangeTransitionEnd', function () {
          var activeImagSrc = String($(".mySwipercenter .swiper-slide-active img").attr("src"));
          var lastSlash = parseInt(activeImagSrc.lastIndexOf("/"));
          var thename = activeImagSrc.substr(lastSlash);
          var dotIndex = parseInt(thename.lastIndexOf("."));
          if(thename.indexOf("rev")==-1){
             var newname = String(thename.substr(0,dotIndex))+"-rev.png";
             var src = String(activeImagSrc.substr(0, lastSlash))+String(newname);
             $(".mySwipercenter .swiper-slide-active img").attr("src",src);
          }
          var others = $(".mySwipercenter .swiper-slide-visible:not(.swiper-slide-active) img");
          var i;
          for (i = 0; i < others.length; i++) {
            var srcs = others[i].getAttribute("src");

            if(srcs.indexOf("rev") !=-1){
              var lastSlashs = parseInt(srcs.lastIndexOf("/"));
              var thenames = srcs.substr(lastSlashs);
              var dotIndexs = parseInt(thenames.lastIndexOf("."));
              var realnames =  String(thenames.substr(0,dotIndexs));
              var revIndexs = realnames.indexOf("-rev");
              var newnames  = String(realnames.substr(0,revIndexs))+".png";
              var srcss = String(srcs.substr(0, lastSlashs))+String(newnames);
              others[i].setAttribute("src",srcss);
              // console.log(String(srcs.substr(0, lastSlashs)));
            
              // console.log(srcs);
             
              console.log(revIndexs);
              console.log(newnames);
              console.log(srcss);
              console.log(dotIndexs);
              console.log(realnames);
              console.log(thenames);
              console.log(srcs);
            }
     
          }
        });
      // plus minus btn 
      var itemInBasket =  $(".add-remove-basket-main input");
       $(".add-remove-basket-main input").on("change",function (){
            // alert($(this).val());
       });
       //click on plus in main page
      $(".add-remove-basket-main .plus-btn").on("click",function(e){
        var dad = $(this).parent();
        inputVal = $(dad).siblings("input[type='number']").val();
        productId =  $(dad).siblings("input[type='hidden']").val();
        inputVal = Number(inputVal) + 1;
        $(dad).siblings("input[type='number']").val(inputVal);

        e.preventDefault();
        $thisbutton = $(this),
        // $form = $thisbutton.closest('form.cart'),
        id = $thisbutton.val(),
        product_qty = inputVal,
        product_id = productId;
        var data = {
              action: 'ql_woocommerce_ajax_add_to_cart',
              product_id: product_id,
              product_sku: '',
              quantity: product_qty
          };
        //is order finished

        Swal.fire({
            title: 'گارسون',
            text: 'وضعیت سفارش',
            icon: 'info',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> ادامه سفارش!',
            confirmButtonAriaLabel: 'ادامه سفارش',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i> پایان سفارش',
            cancelButtonAriaLabel: 'پایان سفارش'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          // order continue
          if (result.isConfirmed) {
            console.log('isConfirmed');
            // basket isnt empty
            if (typeof  window.newData !== 'undefined') {
              console.log('newData =undefined');
              newData = window.newData;
              if(newData.product_id !== product_id){
                 // pervius order isnt from same order 
                console.log('product_id !=product_id');
                    $.ajax({
                    type: 'post',
                    url: wc_add_to_cart_params.ajax_url,
                    data: newData,
                    beforeSend: function (response) {
                        // $thisbutton.removeClass('added').addClass('loading');
                    },
                    complete: function (response) {
                        // $thisbutton.addClass('added').removeClass('loading');
                    }, 
                    success: function (response) { 
                        if (response.error & response.product_url) {
                            // window.location = response.product_url;
                            console.log('in this if mahallo');
                            return;
                        } else {
                            console.log('triger the else'); 
                        } 
                    }, 
                }); 
              }
              // basket is empty
            }else{
              // we dont do eny thing till order be complite
              console.log("basket is empty");

            }
            window.newData  = data;
            // order is finished
          } else  {
            console.log('order is finished');
            // has previus data
            if (typeof  window.newData !== 'undefined') {
              console.log('nuxt');
              newData = window.newData;
              // previus data isnt same of same data
              if(newData.product_id !== product_id){
                // save previus data
                console.log('else product_id != product_id');
                    $.ajax({
                    type: 'post',
                    url: wc_add_to_cart_params.ajax_url,
                    data: newData,
                    beforeSend: function (response) {
                        // $thisbutton.removeClass('added').addClass('loading');
                    },
                    complete: function (response) {
                        // $thisbutton.addClass('added').removeClass('loading');
                    }, 
                    success: function (response) { 
                        if (response.error & response.product_url) {
                            // window.location = response.product_url;
                            console.log('in this if mahallo');
                            return;
                        } else {
                          // save newst order 
                            console.log('triger the else'); 
                            $.ajax({
                              type: 'post',
                              url: wc_add_to_cart_params.ajax_url,
                              data: data,
                              beforeSend: function (response) {
                                  // $thisbutton.removeClass('added').addClass('loading');
                              },
                              complete: function (response) {
                                  // $thisbutton.addClass('added').removeClass('loading');
                              }, 
                              success: function (response) { 
                                  if (response.error & response.product_url) {
                                      // window.location = response.product_url;
                                      console.log('in this if mahallo');
                                      return;
                                  } else {
                                      console.log('triger the else'); 
                                      Swal.fire({
                                        title: 'ثبت شد',
                                        text: 'کالای شما به سبد خرید اضافه شد',
                                        icon: 'success',
                                        confirmButtonText: 'خب'
                                    }).then((result) => {
                                      /* Read more about isConfirmed, isDenied below */
                                      if (result.isConfirmed) {
                                        window.location.replace("cart/");
                                      }
                                    });
                                      // $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                                  } 
                              }, 
                            }); 
                        } 
                    }, 
                }); 
                // previus order isnt same of now one
              }else{
                console.log("else else product_id != product_id");
                $.ajax({
                  type: 'post',
                  url: wc_add_to_cart_params.ajax_url,
                  data: data,
                  beforeSend: function (response) {
                      // $thisbutton.removeClass('added').addClass('loading');
                  },
                  complete: function (response) {
                      // $thisbutton.addClass('added').removeClass('loading');
                  }, 
                  success: function (response) { 
                      if (response.error & response.product_url) {
                          // window.location = response.product_url;
                          console.log('in this if mahallo');
                          return;
                      } else {
                          console.log('triger the else'); 
                          Swal.fire({
                            title: 'ثبت شد',
                            text: 'کالای شما به سبد خرید اضافه شد',
                            icon: 'success',
                            confirmButtonText: 'خب'
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            window.location.replace("cart/");
                          }
                        });
                          // $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                      } 
                  }, 
                });
              }
            }else{
              console.log('snuxt');
              $.ajax({
                type: 'post',
                url: wc_add_to_cart_params.ajax_url,
                data: data,
                beforeSend: function (response) {
                    // $thisbutton.removeClass('added').addClass('loading');
                },
                complete: function (response) {
                    // $thisbutton.addClass('added').removeClass('loading');
                }, 
                success: function (response) { 
                    if (response.error & response.product_url) {
                        // window.location = response.product_url;
                        console.log('in this if mahallo');
                        return;
                    } else {
                        console.log('triger the else'); 
                        Swal.fire({
                          title: 'ثبت شد',
                          text: 'کالای شما به سبد خرید اضافه شد',
                          icon: 'success',
                          confirmButtonText: 'خب'
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                          window.location.replace("cart/");
                        }
                      });
                        // $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
                    } 
                }, 
              }); 
            }
          }
        });
        // $.ajax({
        //       type: 'post',
        //       url: wc_add_to_cart_params.ajax_url,
        //       data: data,
        //       beforeSend: function (response) {
        //           // $thisbutton.removeClass('added').addClass('loading');
        //       },
        //       complete: function (response) {
        //           // $thisbutton.addClass('added').removeClass('loading');
        //       }, 
        //       success: function (response) { 
        //           if (response.error & response.product_url) {
        //               // window.location = response.product_url;
        //               console.log('in this if mahallo');
        //               return;
        //           } else {
        //               console.log('triger the else'); 
        //               Swal.fire({
        //                 title: 'ثبت شد',
        //                 text: 'کالای شما به سبد خرید اضافه شد',
        //                 icon: 'success',
        //                 confirmButtonText: 'خب'
        //             });
        //               // $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
        //           } 
        //       }, 
        //   }); 

        });

      $(".add-remove-basket-main .minus-btn").on("click",function(){
        var dad = $(this).parent();
        inputVal = $(dad).siblings("input").val();
        if(inputVal != 0){
          inputVal = Number(inputVal) - 1;
        }else{
          inputVal =0;
        }

        $(dad).siblings("input").val(inputVal);
      }); 

      

});