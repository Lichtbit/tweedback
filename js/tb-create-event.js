/**
 * Logic for Create Event
 */


/*
 * Reset form elements
 */
$(tbc.pages.createEvent).live('pageshow', function() {
	tbc.setPreviousPage(tbc.pages.createEvent);
    $('#event-name-input, #event-access-key-input').val('');
    $('#event-email-input, #event-admin-password-input').val('');
    $('#create-event .ui-btn-active').removeClass('ui-btn-active');
    window.setTimeout(function() {
        $('#event-name-input').focus();
    }, 100);
});

$(tbc.pages.createEvent).live('pagecreate', function() {
    /*
	 * Listen for form submitions
	 */
	$('#tb-event-creation-form').submit(function(event) {
        event.preventDefault();
        $.postJSON(tbc.ajaxPaths.createEvent, {
                name            : $('#event-name-input').val(),
                accessKey       : $('#event-access-key-input').val(),
                emailAddress    : $('#event-email-input').val(),
                duration        : $('#event-duration-input').val()
            }, function(data) {
                if (data.success) {
                	// If everything is fine - switch to the created event
                	console.log('Created event ' + $('#event-access-key-input').val());
                    tbc.event = data.event;
                    if (data.lecturer !== undefined && data.lecturer !== null) {
                        tbc.isLecturer = data.lecturer;
                    }
                    $.mobile.changePage(tbc.pages.feedbackPage);
                } else {
                	// Check for an alternative access key given by the server
                	if (data.possibleAccessKey != undefined
                			&& data.message != undefined) {
                		if (confirm(data.message)) {
                			// Paste the suggestion into the input field and
                			// trigger the form submit again
                			$('#event-access-key-input').val(data.possibleAccessKey);
                			$('#tb-event-creation-form').submit();
                		} else {
                			// Let the user choose another key
                			return;
                		}
                	} else {
                		tbc.showProblem(data.problem);
                	}                    
                }
            });
        return false;
    });
});