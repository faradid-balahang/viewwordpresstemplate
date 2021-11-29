$(function(){

    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $(".full-menu-container").removeClass("d-none");
      $("#mobileMenuContainer").removeClass("d-none");
      if($("#mobileMenuContainer *").length == 0){
        $("#menu .desktop ul").clone().appendTo("#mobileMenuContainer");
        $("#mobileMenuContainer ul:nth-child(2)").addClass("d-flex justify-content-start");
      }
    });
    $(".full-menu-container").on("click",function(){
      $(".hamburger").toggleClass("is-active");
      $("#mobileMenuContainer").addClass("d-none");
      $(".full-menu-container").addClass("d-none");
    });
});