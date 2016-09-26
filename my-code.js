$(document).ready(function(){
	
	$("p").hide();
	$("#topPicture").hide();
	
	$("h1").click(function(){
		
	$(this).next().fadeToggle(1000);
		
	});
	
	/*This is jq02 button selectors*/
	
	$("#testbutton").click(function() {
		
	/*$("#jq02").css("background-color","#ffffcc");*/
	
	$("h4").css("color","#ffb3b3");
	$("strong,#testbutton").css("background-color","#80ffe5");
		
	});
	
	/* this is jq 03 mouse effects */ 
	
	$("h5").mouseenter(function() {
		
		$(this).css("font-size", "3em");
		
	});
	
	$("h5").mouseleave(function() {
		
		$(this).css("font-size", "1.5em");
		
	});
	
	$("h5").mouseup(function() {
		
		$(this).css("background-color", "#ffb3b3");
		
	});
	
	$("h5").mousedown(function() {
		
		$(this).css("background-color", "#ffffcc");
		/* $(this).unbind(); makes it happen one time only */ 
		
	});
	
	
});
