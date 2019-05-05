$(document).ready(function(){

	$(".login").on("click", function(){
		$('.create-account').fadeOut();
		$('.already-have-account').delay(500).fadeIn();
	});

	$(".reset-password").on("click", function(){
		$('.create-account').fadeOut();
		$('.forgot-password').delay(500).fadeIn();
	});

	$(".login-after").on("click", function(){
		$('.email-sent').fadeOut();
		$('.already-have-account').delay(500).fadeIn();
	});

	$(".register").on("click", function(){
		$('.already-have-account').fadeOut();
		$('.forgot-password').fadeOut();
		$('.create-account').delay(500).fadeIn();
	});



});
