$(function() {



  $('#amitrigger').click(function(){
    $('#amihiroto').fadeIn();
  });

  $('#amitrigger').click(function(){
    $('#hiroto').fadeOut();
  });

  $('#rollertrigger').click(function(){
    $('#roller').fadeIn();
  });

    // ここからメニュー
    $('#bar').click(function(){
      $('#menu').slideDown();
    });
  
    $('#bar').click(function(){
      $(this).fadeOut();
    });
  
    $('#batsu').click(function(){
      $('#menu').slideUp();
    });
  
  
  
    $('#batsu').click(function(){
      $('#bar').fadeIn();
    });
  
  // ここまでメニュー
  

});