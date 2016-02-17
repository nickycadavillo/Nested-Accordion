$(function () {
  'use strict';

$('h2').click(function(){
  // alert("clicked"); // checking if targeting right element
  // $('.default').siblings().next().toggle('.show-p'); // opens ALL big accordions
  $(this).siblings().toggle('h3'); //opens accordion

});


$('h3').click(function(){
  $(this).next().toggle(); //since sub accordion is already open, due to function above, it closes it
  // how to have the p element closed by default so that i can toggle it? that is the question!
});




});


// START JavaScript EXAMPLE //

// var heading = document.querySelector('h2');
// var paragraph = document.getElementsByClassName('default');
//
// heading.addEventListener('click', function() {
//   alert("Hi");

// END JavaScript EXAMPLE //
