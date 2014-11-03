/**
 * Initiation for Tweedback
 */

/*
 * Initiate the controller before something else happens
 */
var tbc = new TweedbackController();
    
/*
 * Load user's settings from server
 */
$.postJSON(tbc.ajaxPaths.getUserSettings, null, function(data) {
	if (data.success) {
		tbc.setUsername(data.username, data.anonymous);
	} else {
		tbc.showProblem(data.problem);
	}
});

/*
 * Some general content modifications
 */
$('body').live('pagecreate', function() {
	// Add some round corners and shadows
	$('.content-primary').addClass('ui-corner-all').addClass('ui-shadow');
	$('.content-secondary').addClass('ui-corner-all').addClass('ui-shadow');
	$('#tb-mainmenu').addClass('ui-corner-all').addClass('ui-shadow');
	
	
//	$('.tb-close').live('click', function() {
//		$(this).parent().remove();
//	});
	// Hide close buttons - we don't really need them at the moment
	$('.tb-close').hide();
});