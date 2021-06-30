$(document).ready(function () {
  $('.pika').click(function () {
    $(this).fadeOut();
  });
  $('.restore').click(function () {
    $('.pika').show();
  });
});

//1: makes sure document is ready before running code inside
//2: targets elements with .pika class and puts click event listenter on them
//3: targets the element that was clicked and fades it out
//4: closes event listenter
//5: closes ready event.
