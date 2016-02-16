
$(function () {
  'use strict';

$('h2').click(function(){
  // alert("clicked");
  // event.stopPropagation(); //thought i could stop it from bubbling to the other elements but no: http://api.jquery.com/event.stopPropagation/
  $('.default').siblings().next().toggle('.show-p');
  // $('.default').toggle('.show-p');
  // $('.default').not().hide();
});


$('h3').click(function(){
  // alert("clicked");
  $('.default').toggle('.show-p');
});




});






// START JavaScript EXAMPLE //

// var heading = document.querySelector('h2');
// var paragraph = document.getElementsByClassName('default');
//
// heading.addEventListener('click', function() {
//   alert("Hi");

// END JavaScript EXAMPLE //
