<?php
function tb_header($selected) {
	$menuItems = array(
		array(
			'url' 		=> '#home',
			'name'  	=>_('Select Event'),
			'icon' 		=> '',
			'reverse'	=> true
		),
		array(
			'url' 		=> '#create-event',
			'name'  	=>_('Create Event'),
			'icon' 		=> '',
			'reverse'	=> false
		),
		array(
			'url' 		=> '#help',
			'name'  	=>_('Help'),
			'icon' 		=> 'info',
			'reverse'	=> false
		),
	);
	
	$menu = '<div data-role="navbar" class="tb-mainmenu"><ul>';
	foreach ($menuItems as $m) {
		$menu .= '<li><a href="' . $m['url'] . '"'
			. (($selected == $m['url']) ? ' class="tb-btn-active"' : '')
			. '>' . $m['name'] . '</a></li>'; 
	} 
	$menu .= '</ul></div><!-- /navbar -->';
	
	$header = '<div data-role="header" data-theme="a">
			<h1><span>Tweedback<span>.</span></span></h1>
			<a href="#user-settings" class="ui-btn-right username-indicator" data-icon="gear"
				title="'. _('Change your Name'). '">'. _('Anonymous'). '</a>' . $menu . '</div>';
	return $header;
	
}