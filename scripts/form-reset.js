$(document).ready(function(){
    /*Formulário Reset-password*/

    $("#form-reset").on("submit", function(){
        var email = $(this).find("input[name=emailreset]").val();

        if(email == ""){
            $("#emailreset").addClass('input-error');
        }

        if(email == ""){
            return false;
        }else {
            event.preventDefault();
            $('.forgot-password').fadeOut();
            $('.email-sent').delay(500).fadeIn();
        }
    });

    $("#emailreset").on("blur", function(){
        var email = $("#form-reset").find("input[name=emailreset]").val();
        if(email != ""){
            $("#emailreset").removeClass('input-error');
        }
    });

});
