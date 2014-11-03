/**
 * Logic for User Settings
 */
	
/*
 * Hide/show anonymous form and set current name before page is shown
 */
$(tbc.pages.userSettings).live('pagebeforeshow', function() {
	$('#tb-user-settings-cancel')
		.attr('href', tbc.getPreviousPage(tbc.pages.userSettings));
	tbc.setPreviousPage(tbc.pages.userSettings);
    
	$('#user-settings .ui-btn-active').removeClass('ui-btn-active');
    if (tbc.user.isAnonymous) {
    	$('#tb-user-settings-anonymous-form').hide();
    } else {
    	$('#tb-user-settings-anonymous-form').show();
    }
    
    if (tbc.user.isAnonymous) {
    	$('#username-input').val('');
    } else {
    	$('#username-input').val(tbc.user.name);
    }
});

/*
 * Set focus
 */
$(tbc.pages.userSettings).live('pageshow', function() {
    window.setTimeout(function() {
        $('#username-input').focus();
    }, 100);
});

$(tbc.pages.userSettings).live('pagecreate', function() {

	
	/*
	 * Listen for general user setting changes
	 */
	$('#tb-user-settings-form').bind('submit', function(event) {
	    event.preventDefault();
	    $.postJSON(tbc.ajaxPaths.setUserSettings,
	        {username: $('#username-input').val()},
	        function (data) {
	            if (data.success) {
	            	console.log('Changed username to ' + data.username);
	                tbc.user.name = data.username;
	                tbc.user.isAnonymous = false;
	                $('.username-indicator').setButtonLabel(tbc.user.name);
	                $.mobile.changePage(tbc.getPreviousPage(
	                		tbc.pages.userSettings));
	            } else {
	                tbc.showProblem(data.problem);
	            }
	        }
	    );
	});
	
	/*
	 * Listen for user's anonymous button
	 */
	$('#tb-user-settings-anonymous-form').bind('submit', function(event) {
		event.preventDefault();
		$.postJSON(tbc.ajaxPaths.setUserSettings,
	        {},
	        function (data) {
	            if (data.success) {
	            	console.log('Deleted personal data');
	            	tbc.user.name = data.username;
	                tbc.user.isAnonymous = true;
	                $('.username-indicator').setButtonLabel(tbc.user.name);
	                $.mobile.changePage(tbc.getPreviousPage(
	                		tbc.pages.userSettings));
	            } else {
	                tbc.showProblem(data.problem);
	            }
	        }
	    );
	});
});