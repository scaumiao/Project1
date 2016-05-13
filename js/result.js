$().ready(function() {
	// $('input[type="date"]').datepicker();
	
	$(".side-nav-header").click(function() {

		if($(this).hasClass("slideup")) {
			$(this).removeClass("slideup");
		}
		else {
			$(this).addClass("slideup");
		}

		$(this).next(".side-nav-content").slideToggle();
		// $(this).find("span.caret").removeClass("slideup");
	});

	$("#dropdownBtn").click(function() {
		$("div.popup").toggle();
	});
});