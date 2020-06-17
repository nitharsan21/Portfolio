$(document).ready(function() {
    $(window).scroll(function() {
        //SI la scrollbar est entre 25 et 500 px
        if($(document).scrollTop() > 25 && $(document).scrollTop() < 500) {
            //STYLE DE LA NAVBAR
            $('#nav').removeClass('bg-dark');
            $('#nav').removeClass('bg-dark3');
            $('#nav').addClass('bg-dark2');
            //STYLE DU BOUTON POUR REMONTER
            $('#btnTop').addClass('btnTopVisible');
            $('#btnTop').removeClass('btnTopInvisible');

        }
        //SI la scrollbar est Ã  plus de 500 px
        else if($(document).scrollTop() > 500) {
            //STYLE DE LA NAVBAR
            $('#nav').addClass('bg-dark3');
            $('#nav').removeClass('bg-dark2');
            $('#nav').removeClass('bg-dark');
            //STYLE DU BOUTON POUR REMONTER
            $('#btnTop').addClass('btnTopVisible');
            $('#btnTop').removeClass('btnTopInvisible');
        }
        //SI la scrollbar est Ã  moins de 25 px
        else {
            //STYLE DE LA NAVBAR
            $('#nav').addClass('bg-dark');
            $('#nav').removeClass('bg-dark2');
            $('#nav').removeClass('bg-dark3');
            //STYLE DU BOUTON POUR REMONTER
            $('#btnTop').removeClass('btnTopVisible');
            $('#btnTop').addClass('btnTopInvisible');
        }




        /**********************BOUTON POUR DESCENDRE SUR CHAQUE ETAPE************************************/

        //SI la scrollbar est Ã  moins de 500 px
        if($(document).scrollTop() > 1200) {
            //ACTIVATION
            $('#btnDown3').removeClass('btnDownOff');
            $('#btnDown3').addClass('btnDown');
            //DESACTIVATION
            $('#btnDown').addClass('btnDownOff');
            $('#btnDown').removeClass('btnDown');
            $('#btnDown2').addClass('btnDownOff');
            $('#btnDown2').removeClass('btnDown');
        }
        //SI la scrollbar est Ã  plus de 500 px
        else if($(document).scrollTop() > 500 && $(document).scrollTop() < 1200 ) {
            //ACTIVATION
            $('#btnDown2').removeClass('btnDownOff');
            $('#btnDown2').addClass('btnDown');
            //DESACTIVATION
            $('#btnDown').addClass('btnDownOff');
            $('#btnDown').removeClass('btnDown');
            $('#btnDown3').addClass('btnDownOff');
            $('#btnDown3').removeClass('btnDown');
        }
        //SI la scrollbar est Ã  moins de 25 px
        else{
            //ACTIVATION
            $('#btnDown').removeClass('btnDownOff');
            $('#btnDown').addClass('btnDown');
            //DESACTIVATION
            $('#btnDown2').addClass('btnDownOff');
            $('#btnDown2').removeClass('btnDown');
            $('#btnDown3').addClass('btnDownOff');
            $('#btnDown3').removeClass('btnDown');
        }



    });
});

/**********************Action si page refresh************************************/


if (performance.navigation.type == 1) {
    console.info( "This page is reloaded" );
    window.location.href = '';
    //window.location.href = '';

} else {
    console.info( "This page is not reloaded");
}
