$(document).ready(function(){

    /*Formulário Login*/
    $("#form-login").on("submit", function(){
        var email = $(this).find("input[name=email-login]").val();
        var pass = $(this).find("input[name=pass]").val();


        if(email == ""){
            $("#email-login").addClass('input-error');
        }
        if(pass == ""){
            $("#pass").addClass('input-error');
        }

        if(email == "" ||  pass1 == ""){
            return false;
        }else {
            alert("Login!");
            $("#form-login").reset();
            return true
        }
    });

    $("#email-login").on("blur", function(){
        var email = $("#form-login").find("input[name=email-login]").val();
        if(email != ""){
            $("#email").removeClass('input-error');
        }
    });
    $("#pass").on("blur", function(){
        var pass = $("#form-login").find("input[name=pass]").val();
        if(pass != ""){
            $("#pass").removeClass('input-error');
        }
    });

});
