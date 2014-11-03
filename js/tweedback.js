/**
 * Tweedback Live Feedback System
 */

/*
 * Helpers
 * =============================================================================
 */

/**
 * JSON requests using POST (rather than JQ's getJSON)
 */
jQuery.extend({
    postJSON: function( url, data, callback) {
        return jQuery.post(url, data, callback, "json");
    }
});

/**
 * Updates button labels on JQ UI Buttons as well as raw HTML elements
 */
(function($) {
    $.fn.setButtonLabel = function(newLabel) {
        return this.each(function() {
            var btn = $(this);
            if (btn.hasClass('ui-btn')) {
                btn.find('.ui-btn-text').text(newLabel);
            } else {
                btn.text(newLabel);
            }
        });
    };
})(jQuery);

if (!window.console) console = {log: function() {}};

/*
 * The Controller
 * =============================================================================
 *
 * Controlls the app's internal data
 */

/**
 * Handles Tweedback's internal data
 */
function TweedbackController() {

    /**
     * Page names used in this application
     */
    this.pages = {
        eventSelection : '#home',
        feedbackPage   : '#feedback-page',
        userSettings   : '#user-settings',
        createEvent    : '#create-event',
        help           : '#help'
    };

    /**
     * Determines paths for Ajax calls
     */
    this.ajaxPaths = {
        eventData           : 'ajax/event-data.php',
        eventDataCache      : 'ajax/event-data.php',
        sendMessage         : 'ajax/send-message.php',
        setUserSettings     : 'ajax/set-user-settings.php',
        getUserSettings     : 'ajax/get-user-settings.php',
        setMeter            : 'ajax/set-meter.php',
        createEvent         : 'ajax/create-event.php',
        putIntoBucket       : 'ajax/put-into-bucket.php',
        confirmMeterMessage : 'ajax/confirm-meter-message.php'
    };
    
    /**
     * URL to the Event's Final Report
     */
    this.eventReportUrl = 'report/?eventId=';

    /**
     * Currently selected event
     */
    this.event = null;

    /**
     * Different settings of the local user
     */
    this.user = {
    	isAnonymous : true,
        name        : 'Anonymous'
    };

    /**
     * Distinguish between listeners and lecturers
     */
    this.isLecturer = false;
    
    /**
     * Determines how man update cycles the cached file is used
     */
    this.cacheLifetime = 10;
    
    /**
     * The cache's age
     */
    this.cacheAge = 0;

    this.feedbackPageUpdateInterval = 10000;
    this.feedbackPageUpdateLoop = null;
    
    this.init();
}

/**
 * Initiates the controller
 */
TweedbackController.prototype.init = function() {
	var $this = this;

    // Configure Ajax using jQuery
    $.ajaxSetup({
        error: function() {
            $this.showProblem();
        },
        type: 'POST',
        dataType: 'json'
    });
    
};

/**
 * Informs the user about system errors or to do something in another way
 */
TweedbackController.prototype.showProblem = function(problem) {
    if (problem !== undefined && problem !== null) {
        if (problem.type == 'user') {
        	$('#tb-user-error-back').attr('href', this.getPreviousPage());
            $('#tb-user-error-header').html(problem.header);
            $('#tb-user-error-text').html(problem.text);
            $.mobile.changePage($('#user-error'), 'pop');
            return;
        } else if (problem.type == 'system') {
            $('#tb-system-error-header').html(problem.header);
            $('#tb-system-error-text').html(problem.text);
            $.mobile.changePage($('#system-error'), 'pop');
            return;
        }

    }
    $.mobile.changePage($('#system-error'), 'pop');
};

TweedbackController.prototype.setUsername = function(username, anonymous) {
	this.user.isAnonymous = anonymous;
	this.user.name = username;
	$('.username-indicator').setButtonLabel(this.user.name);
};

TweedbackController.prototype.setPreviousPage = function(page) {
	if (this.previousPages == undefined) {
		this.previousPages = new Array();
	}
	this.previousPages.push(page);	
};

TweedbackController.prototype.getPreviousPage = function(skip) {
	var prev = this.pages.eventSelection;
	if (this.previousPages == undefined) return prev;
	var i = this.previousPages.length - 1;
	while (i >= 0) {
		if (this.previousPages[i] != skip) {
			prev = this.previousPages[i];
			i = -1;
		}
		i--;
	}
	return prev;
};
