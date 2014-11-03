/**
 * Logic for Feedback Page
 */

/*
 * Tries to restore session data from web storage. Redirect to hompage if web 
 * storage is not supported or no data is available.
 */
$(tbc.pages.feedbackPage).live('pagebeforeshow', function() {
	if (tbc.event == null) {
		if ($.jStorage.storageAvailable() && $.jStorage.get('tb-tbc-event') != null) {
			tbc.event = $.jStorage.get('tb-tbc-event');
			console.log('Continueing previous session...');
		} else {
			$.mobile.changePage(tbc.pages.eventSelection);
	        return false;
		}
    }
	
	tbc.setPreviousPage(tbc.pages.feedbackPage);
	
    // Hide sections
    $('.tb-listener').hide();
    $('.tb-lecturer').hide();
    $('.tb-meter-warnings').hide();

    // Set events name
    $('.tb-event-name').text(tbc.event.name);
});

/*
 * Last settings after page is visible
 */
$(tbc.pages.feedbackPage).live('pageshow', function() {
	// Reset buttons
    $('.tb-category')
    	.parent()
    	.find('.ui-btn.ui-btn-active')
    	.click();
   
    tbc.ajaxPaths.eventDataCache = tbc.ajaxPaths.eventData;
    tbc.cacheAge = 0;
    $.postJSON(tbc.ajaxPaths.eventData,
    	{accessKey : tbc.event.accessKey},
        function(data) {
            if (data.success) {
            	tbc.isLecturer = data.lecturer;
            	// Show sections
            	if (tbc.isLecturer) {
                    $('.tb-lecturer').show();
                    // Set Link for Event's Final Report
                    $('#tb-request-report-link')
                    	.attr('href', tbc.eventReportUrl + tbc.event.id);
                } else {
                    $('.tb-listener').show();
                }
            	
            	$('#tb-feedback-cloud').messageList(data.cloudMessages);
            	$.event.trigger('feedbackupdate', data);

                tbc.feedbackPageUpdateLoop = window.setInterval(
                        function() {
                        	$.event.trigger('feedbackupdate');
                        },
                        tbc.feedbackPageUpdateInterval
                );

                // Default selection for talking speed meter buttons
                $('#tb-meter-speed .tb-meter-button').removeClass('ui-btn-active');
                var className = 'tb-meter-ok';
                if (data.meters != undefined &&
                		data.meters.speed != undefined &&
                		data.meters.speed.status != undefined) {
                	if (data.meters.speed.status == '-') {
                		className = 'tb-meter-minus';
                	} else if (data.meters.speed.status == '+') {
                		className = 'tb-meter-plus';
                	}
                }
                $('#tb-meter-speed .' + className).addClass('ui-btn-active');
                
                // Default selection for understanding meter buttons
                $('#tb-meter-understanding .tb-meter-button').removeClass('ui-btn-active');
                className = 'tb-meter-ok';
                if (data.meters != undefined &&
                		data.meters.understanding != undefined &&
                		data.meters.understanding.status != undefined) {
                	if (data.meters.understanding.status == '-') {
                		className = 'tb-meter-minus';
                	}
                }                
                $('#tb-meter-understanding .' + className).addClass('ui-btn-active');
                
            } else {
                tbc.showProblem(data.problem);
            }
        });
    return;

});

/*
 * Stop updating after user leaves the feedback page 
 */
$(tbc.pages.feedbackPage).live('pagehide', function() {
	$('#tb-feedback-cloud').messageList('destroy');
    if (tbc.event === null) return;
    if (tbc.feedbackPageUpdateLoop !== null) {
        window.clearInterval(tbc.feedbackPageUpdateLoop);
    }
//    $.jStorage.deleteKey('tb-tbc-event');
});

/*
 * Some more events (especially page update and interaction events)
 */
$(tbc.pages.feedbackPage).live('pagecreate', function() {
	
	/*
	 * Listen for clicks on meter buttons
	 */
    $('.tb-meter-buttons').each(function(i1, set) {
        var type = $(this).attr('id').substr(9);
        var buttons = $(this).find('.tb-meter-button');
        buttons.each(function(i2, button) {
            var status;
            if ($(this).hasClass('tb-meter-ok')) status = '0';
            else if ($(this).hasClass('tb-meter-minus')) status = '-';
            else if ($(this).hasClass('tb-meter-plus')) status = '+';
            else return;
            $(this).click(function() {
                $button = $(this);
                $.postJSON(tbc.ajaxPaths.setMeter,
                    {
                        name : type,
                        status : status,
                        eventId : tbc.event.id
                    },
                    function(data) {
                        if (data.success) {
                            buttons.removeClass('ui-btn-active');
                            $button.addClass('ui-btn-active');
                            $.event.trigger('feedbackupdate', data);
                        } else {
                            tbc.showProblem(data.problem);
                        }
                });

                return false;
            });
        });
    });
    
    /*
     * Listen for questions
     */
    $('#tb-question-form').bind('submit', function(event) {
        event.preventDefault();
        var question = $('#tb-question-input').val();
        var categories = Array();
        $(this).find('.tb-category:checked').each(function(){
            categories.push($(this).attr('name'));
        });
        $.postJSON(tbc.ajaxPaths.sendMessage,
            {
                text : question,
                categories : categories,
                eventId : tbc.event.id
            },
            function(data) {
                if (data.success) {
                    $('input.tb-category:checked').attr('checked', false)
                    	.checkboxradio("refresh");
                    $('#tb-question-input').val('');
                    $.event.trigger('feedbackupdate', data);
                } else {
                    tbc.showProblem(data.problem);
                }
            }
        );
        return false;
    });
    
    /*
     * Listen for support clicks on the message list
     * 
     * Note: These buttons do not respond immediately when pressed on
     * I-Pad 2. Therefore we use JQM's vclick event for listening at the 
     * moment. We are
     */
    $('.tb-message-button.tb-message-button-1').live('vclick', function(ev) {
    	ev.preventDefault();
        var btn = $(this);
        btn.addClass('tb-waiting');
        $.postJSON(tbc.ajaxPaths.sendMessage,
                {
                    messageId   : btn.data('message-id'),
                    eventId     : tbc.event.id
                },
                function(data) {
                    if (data.success) {
                        btn.removeClass('tb-waiting').addClass('tb-supported');
                        window.setTimeout(function() {
                        	$.event.trigger('feedbackupdate', data);
                        }, 1000);
                    } else {
                        tbc.showProblem(data.problem);
                    }
                }
        );
    });
    
    /*
     * Listen for lecturer's bucket clicks
     * 
     * Please have a look at the listener's note above.
   	 */
    $('.tb-message-button.tb-message-button-bucket').live('vclick', function() {
    	var btn = $(this);
    	btn.addClass('tb-waiting');
    	$.postJSON(tbc.ajaxPaths.putIntoBucket,
              {
                  bucket      : btn.data('bucket'),
                  messageId   : btn.data('message-id'),
                  eventId     : tbc.event.id
              },
              function(data) {
                  if (data.success) {
                  	btn.removeClass('tb-waiting').addClass('tb-supported');
                      window.setTimeout(function() {
                      	$.event.trigger('feedbackupdate', data);
                      }, 1000);
                  } else {
                      tbc.showProblem(data.problem);
                  }
              }
    	);
  	});
    
    /*
     * Show the legend's description when clicked
     */
    $('#tb-category-legend').live('vclick', function() {
    	alert($('#tb-category-legend-description').text());
    });    
    
    /*
     * Manage updated feedback data
     */
    $(tbc.pages.feedbackPage).bind('feedbackupdate', function(event, data){
    	// If there is no data given start an Ajax call and try again
        if (data == undefined || data == null) {
            $.postJSON(tbc.ajaxPaths.eventDataCache,
            		{accessKey : tbc.event.accessKey},
                function(data) {
                    if (data.success) {
                    	$.event.trigger('feedbackupdate', data);
                    } else {
                    	tbc.showProblem(data.problem);
                    }
                });
            return;
        }
        
        console.log('Updating Feedback Page from ' + tbc.ajaxPaths.eventDataCache);
        
        // Use the cache if there is anyone given
        if (data.cacheEventData !== undefined
                && data.cacheEventData !== null
                && data.cacheEventData !=  false) {
            tbc.ajaxPaths.eventDataCache = data.cacheEventData;
        }
        
        // Do not use the cache frequently
        tbc.cacheAge++;
        if (tbc.cacheAge > tbc.cacheLifetime) {
        	tbc.cacheAge = 0;
        	tbc.ajaxPaths.eventDataCache = tbc.ajaxPaths.eventData;
        	console.log('Going to Skip the Event Update Cache for the Next Time');
        }
        
        /*
         * Show meter messages and bind confirmation clicks
         * 
         * These messages are shown as warning whenever a specific number of 
         * listeners said too fast, too slow, unclear or sth. similar. These
         * warnings are send as meterMessages, which is an array. The lecturer
         * has the possibility to click a message which confirms that he noted
         * it. Afterwards, this type of message is not shown anymore.
         */
        if (tbc.isLecturer && data.meterMessages.length > 0) {
        	$('.tb-meter-warning').hide();
        	$.each(data.meterMessages, function(index, mmi) {
        		$('.tb-meter-warning-' + mmi.value)
        			.addClass('supported-' + mmi.priority).show()
        			.unbind('vclick')
        			.bind('vclick', function() {
        				$.postJSON(tbc.ajaxPaths.confirmMeterMessage,
    	            		{
        						value   : mmi.value,
        						eventId : tbc.event.id
        					},
        	                function(data) {
        	                    if (data.success) {
        	                    	$.event.trigger('feedbackupdate', data);
        	                    } else {
        	                    	tbc.showProblem(data.problem);
        	                    }
    	                });
        			})
        			.find('span').text(mmi.text);
        	});
        	$('.tb-meter-warnings').show();
        } else {
        	$('.tb-meter-warnings').hide();
        }

        // Update the message list
        data.cloudMessages.isLecturer = tbc.isLecturer;
        $('#tb-feedback-cloud').messageList('setElements', data.cloudMessages);
        
        $.jStorage.set('tb-tbc-event', tbc.event);
    });

    /*
     * Update the number of participants
     */
    $('.tb-event-participants').bind('feedbackupdate', function(event, data) {
    	if (data == undefined) return;
    	$(this).find('.tb-event-participants-number').text(data.event.listenerNumber);
    });
    
    
});