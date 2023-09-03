$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="王孟雅" &&  pwd=="20230907"){
		audio_music.play();
    	$('#h').text("雅雅，生日快乐！");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){window.open("BirthdayCake.html");},4000);
	}
	else{
		alert("用户名或密码不正确！");
	}
});
