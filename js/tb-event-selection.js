/**
 * Logic for Event Selection
 */	
	
/*
 * Focus the access key input field
 */
$(tbc.pages.eventSelection).live('pageshow', function() {
	
	tbc.setPreviousPage(tbc.pages.eventSelection);
    // Use a timeout to ensure that JQM has finished page rendering
    window.setTimeout(function() {
        $('#access-key-input').focus();
    }, 100);
    
});


$(tbc.pages.eventSelection).live('pagecreate', function() {
	/*
	 * Set event handlers for event selection
	 *
	 * Whenever someone submits an event selection, this method tries to query the
	 * desired event data and calls the feedback page.
	 */
	$('#access-key-form').submit(function(event) {
	    event.preventDefault();
	    console.log('Ask server for event ' + $('#access-key-input').val());
	    $.postJSON(tbc.ajaxPaths.eventData,
	        {accessKey : $('#access-key-input').val()},
	        function(data) {
	            if (data.success) {
	            	tbc.event = data.event;
	                if (data.lecturer !== undefined && data.lecturer !== null) {
	                	tbc.isLecturer = data.lecturer;
	                }
	                //$this.initFeedbackPage(data);
	                $.mobile.changePage(tbc.pages.feedbackPage);
	            } else {
	            	tbc.showProblem(data.problem);
	            }
	        });
	});
});