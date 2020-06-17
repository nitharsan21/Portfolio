$(document).ready(function() {
    $(window).scroll(function() {
        //SI la scrollbar est entre 25 et 500 px
        if($(document).scrollTop() > 25) {
            //STYLE DE LA NAVBAR
            $('#nav').removeClass('bg-dark');
            $('#nav').removeClass('bg-dark3');
            $('#nav').addClass('bg-dark2');
            //STYLE DU BOUTON POUR REMONTER
            $('#btnTop').addClass('btnTopVisible');
            $('#btnTop').removeClass('btnTopInvisible');
            //STYLE MENU LATERAL
            /*$('#v-pills-tab').addClass('nav-pills2');
            $('#v-pills-tab').removeClass('nav-pills');*/

        }
        //SI la scrollbar est à moins de 25 px
        else {
            //STYLE DE LA NAVBAR
            $('#nav').addClass('bg-dark');
            $('#nav').removeClass('bg-dark2');
            $('#nav').removeClass('bg-dark3');
            //STYLE DU BOUTON POUR REMONTER
            $('#btnTop').removeClass('btnTopVisible');
            $('#btnTop').addClass('btnTopInvisible');
            //STYLE MENU LATERAL
            /*$('#v-pills-tab').addClass('nav-pills');
            $('#v-pills-tab').removeClass('nav-pills2');*/
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