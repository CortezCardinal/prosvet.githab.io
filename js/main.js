$(document).ready(function () 
{
	 		 	$('a[href^="#"]').click(function () {
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
     $('html, body').animate({  
    scrollTop: $(target).offset().top - 50//можно вычесть высоту меню
    }, 500);
  // return false;
});
	 		 	});
   //  --(Burger Menu)--


var button = document.getElementById("button");
	 		var button1 = document.getElementById("button1");
	 	 
	 		var button3 = document.getElementById("button3");
	 		var button4 = document.getElementById("button4");
	 		var button5 = document.getElementById("button5");
	 		var button6 = document.getElementById("button6");
	 		button.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 			var button2 = document.getElementById("button2");
	 		button2.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 		button2.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 		button3.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 		button4.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 		button5.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
	 		button6.addEventListener('click',function(){
			 	swal({
		  	text: 'Введите свой E-mail:',
		  			content: 
		  			{
		    			element: "input",
		    			attributes: 
		    			{
		      				placeholder: "E-mail:",	 
		      			},
					},
		  	button:
		  		{
		    		text: "Отрпвить",
		    		closeModal: true,
		    	}, 
});
});
