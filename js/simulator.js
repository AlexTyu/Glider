
var reset;

$(document).on('click', '.step', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('#AppFeatures').attr('class','stage').addClass($(this).attr('id'));
});

$(document).on('ready', function(){


  $('#simulator .card').draggable({
    drag: function() {
      $('#simulator .card.layer1');
      }
   });

   reset = function(){
     $('.calculating').addClass('active');
     setTimeout(function(){$('.calculating').attr('class', 'calculating gone');}, 1000);
     setTimeout(function(){
      $('#simulator .card').removeClass('gone-right gone-left drag-right').attr('style', '').addClass('out').each(function(index, em){
        $(em).addClass('layer'+(index+1));
      });
    }, 1100);
     setTimeout(function(){
       $('.calculating').removeClass('gone active');
       $('#simulator .card').removeClass('out');
   }, 3000);

 };


    var droppableEnabler = function(target, hoverClass, goneClass ){
      var targetId = target.attr('id');
          target.droppable({
            accept: ".card",
            hoverClass: hoverClass,
             over: function( event, ui ) {
             $(ui.draggable).removeClass('going-left going-right').addClass('going-'+targetId);
             },
        drop: function( event, ui ) {
          $(ui.draggable).addClass(goneClass);
          $('#simulator .card').removeClass('going-left going-right layer1 layer2 layer3 layer4 layer5 layer6 layer7 drag-right').css('transition-duration' , '0.6s');

          if( ui.draggable.nextAll().length > 0 ){
            ui.draggable.nextAll().each(function(index){
              $(this).addClass('layer'+(index+1));
            });
          } else {

            reset();
          }

        }
      });
    };

  droppableEnabler( $("#right"), "like", "gone-right" );
  droppableEnabler( $("#left"), "dislike", "gone-left" );
 });
