$(document).ready(function(){

	/*Formulário Create an Account*/


	/*Usado lib mask scripts/jquery.mask.min.js-->*/
	$('#tel').mask('(00) 0000-00009');


	$("#form").on("submit", function(){
		var firstname = $(this).find("input[name=firstname]").val();
		var tel = $(this).find("input[name=telefone]").val();
		var email = $(this).find("input[name=email]").val();
		var pass1 = $(this).find("input[name=pass1]").val();
		var pass2 = $(this).find("input[name=pass2]").val();

		if(firstname == ""){
			$("#firstname").addClass('input-error');
		}
		if(tel.length < 12){
			$("#tel").addClass('input-error');
		}
		if(email == ""){
			$("#email").addClass('input-error');
		}
		if(pass1 == ""){
			$("#pass1").addClass('input-error');
		}
		if(pass2 == ""){
			$("#pass2").addClass('input-error');
		}

		if(firstname == "" || tel == "" || tel.length < 12 || email == "" ||  pass1 == "" || pass2 == ""){
			return false;
		}else {

			if (pass1 != pass2) {
				$('.password-error').attr( 'style', 'display: block' );
				$("#pass1").addClass('input-error');
				$("#pass2").addClass('input-error');
				event.preventDefault();

			} else {
				$('.password-error').attr( 'style', 'display: none' );
				alert("Olá! Nome: " + firstname + "; Telefone: " + tel + "; Email: " + email);
				$("#form").reset();
				return true
			}
        }
	});

	$("#firstname").on("blur", function(){
		var firstname = $("#form").find("input[name=firstname]").val();
		if(firstname != ""){
			$("#firstname").removeClass('input-error');
		}
	});
	$("#email").on("blur", function(){
		var email = $("#form").find("input[name=email]").val();
		if(email != ""){
			$("#email").removeClass('input-error');
		}
	});
	$("#tel").on("blur", function(){
		var tel = $("#form").find("input[name=telefone]").val();
		if(tel != ""){
			$("#tel").removeClass('input-error');
		}
	});
	$("#pass1").on("blur", function(){
		var password1 = $("#form").find("input[name=pass1]").val();
		if(password1 != ""){
			$("#pass1").removeClass('input-error');
		}
	});
	$("#pass2").on("blur", function(){
		var password2 = $("#form").find("input[name=pass2]").val();
		if(password2 != ""){
			$("#pass2").removeClass('input-error');
		}
	});

});
