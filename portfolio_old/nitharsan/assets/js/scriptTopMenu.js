var CheminComplet = document.location.href;

var CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
var NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
/*alert ('NomDuFichier : \n'+NomDuFichier+ ' \n\n CheminRepertoire : \n' +CheminRepertoire+ ' \n\n CheminComplet :\n ' +CheminComplet);*/

if(NomDuFichier == '#descriptionSite'){
    $('#desc').addClass('active');

    $('#comp').removeClass('active');
    $('#prjt').removeClass('active');
    $('#veille').removeClass('active');
    $('#contact').removeClass('active');
}
else if(NomDuFichier == '#competences'){
    $('#comp').addClass('active');

    $('#desc').removeClass('active');
    $('#prjt').removeClass('active');
    $('#veille').removeClass('active');
    $('#contact').removeClass('active');
}
else if(NomDuFichier == '#projets'){
    $('#prjt').addClass('active');

    $('#comp').removeClass('active');
    $('#desc').removeClass('active');
    $('#veille').removeClass('active');
    $('#contact').removeClass('active');
}
else if(NomDuFichier == 'veille'){
    $('#veille').addClass('active');

    $('#comp').removeClass('active');
    $('#prjt').removeClass('active');
    $('#desc').removeClass('active');
    $('#contact').removeClass('active');
}
else if(NomDuFichier == 'mail'){
    $('#contact').addClass('active');

    $('#comp').removeClass('active');
    $('#prjt').removeClass('active');
    $('#veille').removeClass('active');
    $('#desc').removeClass('active');
}
else if(NomDuFichier == 'contact'){
    $('#contact').addClass('active');

    $('#comp').removeClass('active');
    $('#prjt').removeClass('active');
    $('#veille').removeClass('active');
    $('#desc').removeClass('active');
}
else if(NomDuFichier == ''){
    $('#contact').removeClass('active');

    $('#comp').removeClass('active');
    $('#prjt').removeClass('active');
    $('#veille').removeClass('active');
    $('#desc').removeClass('active');
}
else {
    /*alert(NomDuFichier);*/

}

function active(id) {
    $('#'+id).addClass('active');

    if(id != 'desc'){
        $('#desc').removeClass('active');
    }
    if(id != 'comp'){
        $('#comp').removeClass('active');
    }
    if(id != 'prjt'){
        $('#prjt').removeClass('active');
    }
}
