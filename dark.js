$(document).ready(
  function(){
$('#dark-mode').click(function(){

$('#dark-mode').toggleClass('active')
$('#body-header').toggleClass('dark')
$('section').toggleClass('dark')
$('#about').toggleClass('dark')

$('contact').toggleClass('dark')
$('#about p').toggleClass('dark')
$('.dropdown-list').toggleClass('dark')
})
 

})