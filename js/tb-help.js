/**
 * Logic for Help
 */

$(tbc.pages.help).live('pagebeforeshow', function() {
	$('.tb-help-role', $(this)).hide();
	$('#tb-help-role-choose', $(this)).show();
});

/*
 * Set Help as last called page
 */
$(tbc.pages.help).live('pageshow', function() {
	tbc.setPreviousPage(tbc.pages.help);
});