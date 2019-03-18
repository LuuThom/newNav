$(document).ready(function () {
    var width = parseInt($(window).width());
    $(".left-show").on('click', function () {
        $(".sidebar").removeClass("sidebar-hide");
        $(".main").removeClass("main-hide-sidebar");
        $(".right-hidden").show();
        $(".left-show").hide();
        $(".path").css({ "left": "190px" });
        $(".sidebar-menu li.active").children('ul').addClass('d-block');
        $(".sidebar-menu li.active").children('ul').removeClass('d-none');
        if (width <= 480) {
            $('.layer').css({ "visibility": "visible", "opacity": "1" });
        }
    });

    $(".right-hidden").on('click', function () {
        $(".sidebar").addClass("sidebar-hide");
        $(".main").addClass("main-hide-sidebar");
        $(".right-hidden").hide();
        $(".left-show").css({ "display": "block" });
        $(".path").css({ "left": "15px" });
        $(".sidebar-menu li.active").children('ul').removeClass('d-block');
        $(".sidebar-menu li.active").children('ul').addClass('d-none');
        
    });
    $('.over-layer').on('click',function(){
        $('.sidebar').removeClass('sidebar-hide');
        $(".main").removeClass("main-hide-sidebar");
        $(".right-hidden").show();
        $(".left-show").hide();
        $(".path").css({ "left": "190px" });
        $(".sidebar-menu li.active").children('ul').addClass('d-block');
        $(".sidebar-menu li.active").children('ul').removeClass('d-none');
        if (width <= 480) {
            $('.layer').css({ "visibility": "visible", "opacity": "1" });
        }
    })
    // $(".icon-main").on('click',function(){
    //     $(".sidebar").removeClass("sidebar-hide");
    // });
    $('.layer').on('click', function () {
        $('.sidebar').addClass("sidebar-hide");
        $('.layer').css({ "visibility": "hidden","opacity":0 });
        $(".left-show").css({ "display": "block" });
        $(".path").css({ "left": "15px" });
        $(".sidebar-menu li.active").children('ul').removeClass('d-block');
        $(".sidebar-menu li.active").children('ul').addClass('d-none');
    });
    if (width <= 480) {
        $(".right-hidden").on('click', function () {
       
            $('.layer').css({ "visibility": "hidden", "opacity": "0" });
        });
    }
    $('.item').on('click', function () {

        var dropdown = $(this).find('.dropdown_child');
        var icon = $(this).find('.icon');

        $('.dropdown_child').each(function(){
            $(this).slideUp(400);
            icon.html('<i class="fas fa-angle-left"></i>')
        })

        if ((dropdown).is(':hidden')) {
            dropdown.slideDown(400);
            $('icon:after').addClass('rotage');
            icon.html('<i class="fas fa-angle-down"></i>')
        }

        else {
            dropdown.slideUp(400);
            icon.html('<i class="fas fa-angle-left"></i>')
        }

        

    });

});