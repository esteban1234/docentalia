// $(document).ready(menu);

// var contador = 1;

// function desplazar() {
//     $(window).scroll(function(){
//             if( $(this).scrollTop() > 100 ) {

//                $('header').addClass('efecscroll').slideDown(100000);
//                $('.menu-op').addClass('efecmenu')
//             } else{
//                $('header').removeClass('efecscroll');
//                $('.menu-op').removeClass('efecmenu');
//             }

//        });
// }


// function menu() {
// menu = $('nav');
// abrir = $('.abrir');
// cerrar = $('.cerrar');

//     $('.menu-op').click(function() {
//         if (contador == 1) {
//             menu.slideDown(1000);
//             abrir.slideUp(1000);
//             cerrar.slideDown(1000);
//             contador = 0;            
            
//         } else {
//             contador = 1;
//             menu.slideUp(1000);
//             abrir.slideDown(1000);
//             cerrar.slideUp(1000);
//         }
//     });

//     desplazar();    

// }


$(document).ready(function(){


    $('.menu ul .selector').click(function(){
      $('.selector').removeClass('select');
      $(this).addClass('select');

    });

        var contador = 1;
    var pull = $('.op-menu');
    menu = $('nav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(1000);
            contador = 0;
        } else {
            menu.slideToggle(1000);
            // abrir.slideToggle(100);
            contador = 1;
        }
    });

});