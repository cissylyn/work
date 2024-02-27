$(document).ready(function() {
    
    $('.thumbnail').click(function() {
      var imagePath = $(this).data('image');
      
      
      $('#main').fadeOut(400, function() {
        
        $('#main').attr('src', imagePath);
        
        
        $('#main').fadeIn(400);
      });
    });
  });
  