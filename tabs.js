$(document).ready(function () {
  // Put your JavaScript behavior here
  // When clicking a tab using .oncick()

$(".tabs li a" ).click(function() {

  // remove active class from list item
  $("li").removeClass('active');
  //adds class = active to the tab clicked on.
  $(this).parent().addClass('active');

  // var className =
  var tabName = $(this).attr('href');

  //Target the div class
  $(".tab-content").hide();
  $(tabName).show();

});

});