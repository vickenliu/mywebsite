$(document).ready(function(){
  
  $('#menuicon').click(function(){
    var icon=$(this);
    $('#header').find('ul').slideToggle(500,function(){
      icon.toggleClass('callaps');
    });
  });

/*$(document).ready(()=>{
  let icon=$(this);
  $('#header').find('ul').slideToggle(500,()=>{
    icon.toggleClass('callaps');
  });
});
*/





/*  $('#callaps').find('a').click(function(e){
    e.preventDefault();
    var fn=$(this).data('fn');
    $('#callaps').find('a').removeClass('active');
    $(this).addClass('active');
    $('#outlet').fadeOut().empty();
    if(fn=='notready')
      $('#content').fadeOut();
    else
      $('#'+fn).fadeIn();
  });

  $('#bloglist').find('a').click(function(){
    $('#menu-icon').trigger('click');
    var page=$(this).data('fn');
    $.ajax('../blog/'+page,{
      type:'get',
      success:function(data){
        $('#outlet,#content').fadeOut();
        $('#outlet').empty().prepend("<button id='return'>BACK TO LIST</button>").append(data).fadeIn();
      }
    })
  });


  $('.mainwrapper').on('click','#return',function(){
    $('#outlet').fadeOut();
    $('#menu-icon').trigger('click');
    $('#content').fadeIn();
    $('#callaps').find("a[data-fn='content']").addClass('active');
  });*/

});