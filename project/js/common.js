$(function() {

	// Custom JS

});
$('.fancybox').fancybox({
	toolbar  : false,
	smallBtn : true,
	iframe : {
	  preload : false
	}
  })

// События на кнопки по соц сетям 
var twitter = document.getElementById('twitter'),
	facebook = document.getElementById('facebook'),
	linkedin = document.getElementById('linkedin');
	youtube = document.getElementById('youtube');
	pinterest = document.getElementById('pinterest');

	twitter.addEventListener('click', function(){
		document.location = 'https://twitter.com/';
	}, false);
	facebook.addEventListener('click', function(){
		document.location = 'https://www.facebook.com/';
	}, false);
	linkedin.addEventListener('click', function(){
		document.location = 'https://www.linkedin.com/';
	}, false);
	youtube.addEventListener('click', function(){
		document.location = 'https://www.youtube.com/';
	}, false);
	pinterest.addEventListener('click', function(){
		document.location = 'https://www.pinterest.com/';
	}, false);
	




