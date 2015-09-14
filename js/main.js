
$(document).ready(function() {
	
	$("#menu-btn").click(function() {
		$("#main-nav").toggleClass('.hidden');
	})

	$(".hover-panel").hover(
			function(event) {
				$(this).stop().fadeTo('400', 1)
			},
			function(event) {
				$(this).fadeTo('400', 0)
			}
	);

});