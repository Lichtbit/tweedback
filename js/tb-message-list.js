/**
 * Draw a list of messages
 * 
 * Message lists are used to represent all the questions asked by
 * listeners. Additionally, MessageList supports categories and shows
 * an appropriate icon.
 * 
 * This plugin is based on Tweedback objects as defined on the Wiki page
 * for Ajax interfaces.
 * 
 * @see https://ox.informatik.uni-rostock.de/projektwiki/index.php/Tweedback_ajax 
 */
(function($) {

    var methods = {
    		
    	/**
    	 * Creates a new message list
    	 * 
    	 * @param options An array of messages
    	 */
        init : function(options) {
            return this.each(function() {
                $(this).children().addClass('tb-message-list-empty');
                /*
                 * Adopt JQM Listview's classes only (we don't need any of its
                 * functionality here)
                 */
                var mul = $('<ul data-theme="d"></ul>');
                mul.addClass('tweedback tb-message-list ui-listview');
                $(this).append(mul);
                if (options !== null && jQuery.isArray(options)) {
                    $(this).messageList('setElements', options);
                }
            });

        },
        
        /**
         * Removes the message list completely
         */
        destroy : function() {
            return this.each(function() {
            	$(this).find('.tb-message-list').remove();
            });
        },
        
        /**
         * Adds a single message to the existing list
         * 
         * @param object message
         * @param boolean lecturer  Determines the user's current role
         */
        addElement : function(message, lecturer) {
            var mul = $(this).find('.tb-message-list');
            var li = $('<li></li>');
            li.addClass('tb-message-list-item ui-li ui-li-static ui-body-d');
            if (message.categories.length > 0) {
                var span = $('<span class="tb-message-list-icons"></span>');
                $.each(message.categories, function(index, cat) {
                    span.append('<img src="css/images/icons/32/' + cat + '.png"/>');
                });
                li.append(span);
            }
            li.append('<span class="tb-message-list-text">' + message.text + '</span>');
            li.addClass('supported-' + message.priority);

            mul.append(li);
            
            /*
             * Add an overlay button for each label to allow supporting, 
             * ban etc.
             */
            var btnCounter = 0;
            $('.tb-message-button-label').each(function(index) {
            	
            	// Only confirm if the button is suitable for the current role
                if (lecturer && !$(this).hasClass('tb-lecturer')) return;
                else if (!lecturer && !$(this).hasClass('tb-listener')) return;
                
                /*
                 * We'll need a computer science counter (starting with 0, 
                 * btnCounter) and a natural one starting with 1 (called i)
                 */
                btnCounter++;
                var i = index + 1;
                var btn = $('<div class="tb-message-button tb-message-button-' + i + '"></div>');
                
                // Set a top margin for the first element
                var margin = 0;
                if (i != 1) margin = 5;
                btn.append('<div class="tb-message-button-inner">&nbsp;</div>');
                li.append(btn);
                btn.css({
                    'position': 'absolute',
                    'left': (li.width() - ((btn.width()) * btnCounter)) - margin*(btnCounter-1),
                    'top': 0
                });
                
                // Use full height for the button
                btn.height(li.innerHeight());

                // We'll need the event ID for this button later
                btn.data('message-id', message.id);
                if ($(this).hasClass('tb-message-button-bucket')) {
                	btn.data('bucket', $(this).attr('id'));
                	btn.addClass('tb-message-button-bucket');
                }

                // On the first run we need to position the buttons' label
                var label = $('.tb-message-button-label.tb-message-button-' + i);
                if (!label.hasClass('tb-message-button-label-moved')) {
                    var top = ($('.tb-message-list').offset().top - label.outerHeight());
                    label.css({
                        'position': 'absolute',
                        'left': btn.offset().left,
                        'top': top,
                        'visibility': 'visible'
                    });
                    label.addClass('tb-message-button-label-moved');
                }
            });

        },
        
        /**
         * Updates the list to show an array of messages
         * @param messages
         */
        setElements : function(messages) {
            var $this = $(this);

            /*
             * The unordered list representing the messages
             */
            var mul = $this.find('.tb-message-list');
            
            if (messages.length == 0) {
            	$(this).find('.tb-message-list-empty').show();
            	mul.hide();
            } else {
            	$(this).find('.tb-message-list-empty').hide();
            	mul.show();
            }
            
            /*
             * Hide all button labels
             * 
			 * We'll make them visible again in messageList#addElement only if 
			 * we need them (depending on current role: lecturer or listener).
             */
            $('.tb-message-button-label').css('visibility', 'hidden');

            /*
             * Remove button labels move-class to trigger a new positioning
             * 
             * MessageList#addElement checks whether button labels have class
             * tb-message-button-label-moved. If not, the method positions the
             * label right over the current message. Because this is the case
             * when adding the first element, the label is on the top of the
             * list. To avoid repositioning on further messages, addElement
             * adds this class.
             */
            $('.tb-message-button-label-moved')
                .removeClass('tb-message-button-label-moved');
            
            /*
             * Simply delete all old messages to gain place for the new ones
             * 
             * However, it could be nice to write only changes to the existing 
             * list some day.
             */
            mul.empty();
            
            /*
             * Add all messages from list
             */
            $.each(messages, function(index, message) {
                $this.messageList('addElement', message, messages.isLecturer);
            });
        }
    };

    $.fn.messageList = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(
                    arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.messageList');
        }
    };

})(jQuery);