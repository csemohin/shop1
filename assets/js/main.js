$(document).ready(function () {

//=======ACTIVE MESONARY=========
    
    $(".protfolio-list").masonry({
        itemSelector: '.single-protfolio-item',
             percentPosition: true
    });

    
//=======ACTIVE ANIMATION CSS======
    
    $(".single-protfolio-item").hover(function(){
        $(".single-protfolio-item .protfolio-hover h2").removeClass("animated slideInDown");
        $(".single-protfolio-item .protfolio-hover p").removeClass("animated bounceIn");
        $(this).find(".protfolio-hover h2").addClass("animated slideInDown");
        $(this).find(".protfolio-hover p").addClass("animated bounceIn");
    });
    
    
//======OFFCANVUS MENU active class==========
    $(".menu-trigger").on('click',function(){
        $(".off-canvas-menu").addClass("active");
        $(".off-canvas-overlay").addClass("active");
    });
//======OFF Cannvas menu remove class========
    $(".menu-close i.lnr,.off-canvas-overlay").on('click',function(){
        $(".off-canvas-menu").removeClass("active");      //menu remove
        $(".off-canvas-overlay").removeClass("active");  //overlay remove
    });
    
//====== HEAD ROOM JS ACTIVE ===============
    $(".header-area").headroom();



});
