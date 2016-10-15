$(function(){
  
  var carouselList = $('#carousel ul');
  //change slide every 3 seconds 
  var interval = setInterval(changeSlide, 3000); 
  
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");  
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
  
    function moveLastSlide(){
    var firstItem = carouselList.find("li:first");  
    var lastItem = carouselList.find("li:last");
    lastItem.before(firstItem);
    carouselList.css({marginLeft:0});
  };
   
    function changeSlide(){
      carouselList.animate({'marginLeft':-700}, 1000, moveFirstSlide);
  }
  
    function reverseSlide(){
      carouselList.animate({'marginLeft':700}, 1000, moveLastSlide);
  } 
  
    $('#chevron-right').click(changeSlide);
    //$('#chevron-left').click(reverseSlide);

	$('#chevron-left').on('click', function () {
	  reverseSlide();
	  clearInterval(interval);
	  interval = setInterval(changeSlide, 3000);
	});
});  

 