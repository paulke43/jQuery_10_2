$(function(){
//Changes css elem 
	var span = $("span");
    	span.each(function(index, element) {
    		if(index % 2 == 0) {
			$(element).css('color', 'red');
		};
	});
//Add button to each paragraphs
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {

    	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    	$(element).append(button)

	});
//Add event handler to each button
	$("button").click(function(){
	alert($(this).attr("data-tmp"));
	});
});