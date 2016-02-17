$(function () {
  'use strict';

$('h2').click(function(){
  // alert("clicked"); // checking if targeting right element
  // $('.default').siblings().next().toggle('.show-p'); // opens ALL big accordions
  // $('.default').toggle('.show-p');
  // $('.default').not().hide();
  $(this).siblings().next().toggle('.show-p');

});


$('h3').click(function(){
  // alert("clicked");
  // $('.default').toggle('.show-p');
  $(this).siblings().next().toggle('.show-p');
});




});


// START JavaScript EXAMPLE //

// var heading = document.querySelector('h2');
// var paragraph = document.getElementsByClassName('default');
//
// heading.addEventListener('click', function() {
//   alert("Hi");

// END JavaScript EXAMPLE //
