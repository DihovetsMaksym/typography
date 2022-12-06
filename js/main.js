$(document).ready(function(){

	$('.btn_menu').click(function() {
		$('.menu ul').slideToggle();
	});

  $(".owl-carousel").owlCarousel({
    margin : 20,
    autoplay : true,  
    autoplayTimeout : 7000,
    nav : false,
    loop : true,
    items : 4
  });

 


	$("form").submit(function() {
    $.ajax({
     type: "GET",
     url: "../mail.php",
     data: $("form").serialize()
   }).done(function() {
     alert("Спасибо за заявку!");
     setTimeout(function() {
      $.fancybox.close();
    }, 1000);
   });
   return true;
 });



  $("#menu, #top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

      });

});







//----------------------------------------




function myFunction() {
  // body...
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }


}




