// AFTER CLICKING ON TOGGLER TO COLLAPSE NAVBAR MOVE TOGGLER TO ITS NORMAL POSITION
$('#navbarToggler').on('click', function(){
  $('#navbarToggler').removeClass('order-3');
});

// WHEN COLLAPSED NAVBAR IS HIDDEN DISPLAY TOGGLER ON THE RIGHT
$('#navbarNav').on('hidden.bs.collapse', function() {
  $('#navbarToggler').addClass('order-3');
});

// CLOSE COLLAPSED NAVBAR AFTER CLICKING A LINK
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


