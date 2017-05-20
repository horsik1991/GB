$(document).ready(function (){

	$(window).resize(function(){
		var winBr = $(window).width();
		if(winBr>320&&winBr<559)
		{
			$('.block').css({'width':'90%', 'padding':'10px','margin':'16px'});
			$('#wrapper').css('width','320px');
		}
		else if (winBr>560&&winBr<939){

			$('.block').css({'width':'40%', 'padding':'10px', 'margin':'16px'});
			$('#wrapper').css('width','560px');
			
    	} 
    	else if (winBr>940&&winBr<1280)
    	{
    		$('.block').css({'width':'20%', 'padding':'10px'});
			$('#wrapper').css({'margin':'0 auto', 'width':'940'});
    	} 
    	else if (winBr>1280)
    	{
    		$('#wrapper').css('width','100%');
    	}
    	else if (winBr<320)
    	{
    		$('.block').css({'width':'10%', 'padding':'10px'});
    	}
    	




    	});/*end resize*/
 
    });/* end ready*/
