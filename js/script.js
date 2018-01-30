$('.button').click(function(){
	$('.register_place').fadeIn();
});

$('.close_button').click(function(){
	$('.register_place').fadeOut();
});

$(document).ready(function(){
	$('.register_button').click(function(){
		var login = $('#name').val();
		var pass = $('#pass').val();
		var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
		var mail = $('#mail');
		if(login < 3 || login > 9){
			$('.fill_login').fadeIn();
		}
		else{
			$('.fill_login').fadeOut();
		}
		if(pass < 3 || pass > 9){
			$('.fill_pass').fadeIn();
		}
		else{
			$('.fill_pass').fadeOut();
		}

		mail.blur(function(){
			if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
					$('.fill_mail').fadeOut();
				}
				else{
					$('.fill_mail').fadeIn();
				}
			}
			else{
				$('.fill_mail').fadeIn();
			}
		});
		return false;
	});
});