/*
Simple Inline-Form validations
(c) Copyright novhex
https://github.com/novhex
wwww.facebook.com/novhz.emo94

special thanks to:
________________________
CodeIgniter
StackOverFlow
PinoyXtreme
________________________
Special Mention:
DAHJONG SOCIETY 

->Jm Ganade
->James Astronomo
->Zichri Logronio
->Everick Catayas
->Rexie Galban
->Homer Soliva
->Ray Suarez
->Ramon Estravillo Jr.
=)

*/

/*  declare regular expressions for validation */
	
	var isAlphaNumeric=/^([a-z0-9])+$/;
	var isValidEmail=/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
	var isInteger=/^[\-+]?[0-9]+$/;
	var isDecimal=/^[\-+]?[0-9]+\.[0-9]+$/;
	var isBase64String=/[^a-zA-Z0-9\/\+=]/;


	
	
$(document).ready(


    function() {
        $('#test').keypress(
		
            function() {
				var value = document.getElementById('test').value;
				
          			if(value.match(isValidEmail)) {
						$("#emailStat").html('<img src=resource/available.png><font color=GREEN> Valid Email!</font>');
					}
					else {
						$("#emailStat").html('<img src=resource/cross-mark.png><font color=RED> Invalid Email !!</font>');
					}
			});
  })

$(document).ready(function() {
  $('#username').keypress(function() {
	  
  
	
		var username=document.getElementById('username').value;
		
		if((username.match(isAlphaNumeric))&&(username.length>=5)&&(username.length<=12))
		 {
				$("#usernameStat").html('<img src=resource/available.png><font color=GREEN>Username Valid!</font>');
		}else
		{
			
		$("#usernameStat").html('<img src=resource/cross-mark.png><font color=RED>Invalid Username! only numbers and letters are allowed,minimum of 5 characters and maximum of 12 characters.</font>');	
		}

});
})

$(document).ready(function() {
  $('#intNum').keypress(function() {
	  
  
	
		var intNum=document.getElementById('intNum').value;
		
		if(intNum.match(isInteger))
		 {
			$("#intStat").html('<img src=resource/available.png><font color=GREEN>Valid integer</font>');
		}else
		{
		$("#intStat").html('<img src=resource/cross-mark.png><font color=RED>Invalid integer</font>');	
		}

});
})
