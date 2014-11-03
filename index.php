<?php
/**
 * Contains the whole HTML template used for Tweedback
 *
 * This file contains all the pages used in Tweedback (Event Selection, Create
 * Event, Feedback Page etc.). Each page is wraped into a something like
 * <div data-role="page" id="pageId">. Jquery Mobile manages this package and
 * creates single pages which can be addressed by #pageId.
 *
 * @link http://jquerymobile.com/demos/1.0b3/docs/pages/page-anatomy.html
 */



/*
 * Load Tweedback's config and some frontend functions (e.g. tb_header)
 */
require_once 'config.php';
require_once 'functions.php';
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Tweedback</title>
		<?php
		/*
		 * Load necessary CSS files
		 *
		 * If in debug mode, we'll load one file after another. Otherwise a compiled
		 * and comprimized file is generated and loaded.
		 */
		if (DEBUG) {
			foreach ($tb_config['css'] as $js) {
				printf('<link rel="stylesheet" href="%s" />', $js);
			}
		} else {
			printf('<link rel="stylesheet" href="%s" />', 'css/compiled.css');
		}

		/*
		 * Load necessary Javascript files
		 *
		 * If in debug mode, we'll load one file after another. Otherwise a compiled
		 * and comprimized file is generated and loaded.
		 */
		if (DEBUG) {
			foreach ($tb_config['javascript'] as $js) {
				printf('<script type="text/javascript" src="%s"></script>', $js);
			}
		} else {
			printf('<script type="text/javascript" src="%s"></script>', 'js/compiled.js');
		}
		?>
		<meta name="HandheldFriendly" content="true" />
		<meta name="viewport"
			content="width=device-width,initial-scale=1.0,minimum-scale = 1, maximum-scale = 1" />
</head>

<body style="overflow-y: scroll;">



	<?php
	/*
	 * Event Selection (Homepage)
	 *
	 * This is the first page after entering Tweedback. It welcomes the user and
	 * shows a simple input field to enter an event code. Additionally, there is
	 * a small comic explaining this step to the user.
	 */
	?>
	<div data-role="page" id="home">

		<?php echo tb_header('#home'); ?>

		<div data-role="content">
			<div class="content-primary">
				<h2><?php echo _('Select Event'); ?></h2>
				<form action="ajax/event-data.php" method="get" id="access-key-form" data-ajax="false">
					<div data-role="fieldcontain">
						<label for="access-key-input"><?php echo _('Enter Event Code'); ?>
						</label> <input type="text" name="access-key"
							id="access-key-input" value="" />
					</div>
					<div class="tb-right" data-inline="true" data-role="fieldcontain">
						<button type="submit" name="submit" value="submit-value"
							data-inline="true" data-theme="b">
							<?php echo _('OK'); ?>
						</button>
					</div>
				</form>
			</div>
			<!-- /div.content-primary -->

			<div class="content-secondary tb-comic">
				<div class="tb-close">x</div>
				<img src="./images/comics/event-code/event-code.png" alt="">
				<p><?php echo _('Enter the event code given by the lecuturer to provide feedback.'); ?></p>
			</div>
			<!-- /div.content-secondary -->

		</div>
		<!-- /content -->

		<p class="tb-legal-information">Based on <a href="http://jquerymobile.com/">J-Query Mobile</a>.
			Using the <a href="http://tiheum.deviantart.com/art/Faenza-Icons-173323228">Faenza Icon Set</a>.</p>

	</div>
	<!-- /page -->



	<?php
	/*
	 * Create Event
	 *
	 * This page shows an form for lectureres to create new events. This form is
	 * very simple if you are familiar with Jquery Mobile's way to create forms.
	 *
	 * @link http://jquerymobile.com/demos/1.0b3/docs/forms/index.html
	 */
	?>
	<div data-role="page" id="create-event">

		<?php echo tb_header('#create-event'); ?>

		<div data-role="content">
			<div class="content-primary">
				<h2>
				<?php echo _('Create a New Event'); ?>
				</h2>
				<form id="tb-event-creation-form" method="post" data-ajax="false">
					<div data-role="fieldcontain">
						<label id="event-name-label" for="event-name-input"><?php echo _('Event Name'); ?>
						</label> <input type="text" id="event-name-input" name="name">
					</div>
					<div data-role="fieldcontain">
						<label id="event-access-key-label" for="event-access-key-input"><?php echo _('Event Code for Event Selection'); ?>
						</label> <input type="text" id="event-access-key-input"
							name="accessKey">
					</div>
					<div data-role="fieldcontain">
						<label id="event-email-label" for="event-email-input"><?php echo _('Email Address for Report (if desired)'); ?>
						</label> <input type="text" id="event-email-input"
							name="emailAddress">
					</div>
					<div data-role="fieldcontain">
						<label for="event-duration-input" class="select"><?php echo _('Close Event after'); ?></label>
						<select name="event-duration-input" id="event-duration-input">
							<?php foreach ($tb_config['event_duration'] as $duration):?>
								<option value="<?php echo $duration; ?>">
									<?php echo $duration . ' ' . _('Hours'); ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="tb-right" data-inline="true" data-role="fieldcontain">
						<button data-inline="true" type="submit" name="submit"
							value="submit-value" data-theme="b">
							<?php echo _('Create Event'); ?>
						</button>
					</div>
				</form>
			</div>
			<!-- /div.content-primary -->
		</div>
		<!-- /content -->

	</div>
	<!-- /page -->



	<?php
	/*
	 * Feedback Page
	 *
	 * This is the most complex page. It starts with a list of warining messages
	 * for the lecturer, indicating that the audience thinks that his or her
	 * talk is too slow, unclear or anything like that.
	 *
	 *   Note: This page has severeal sections only for lectureres or only for
	 *   listeners. This relation is indicated by two classes tb-listener and
	 *   tb-lecturer. If there is no such class, the section is interesting for
	 *   both user classes.
	 *
	 * The second section is the primary content and shows listeners' questions.
	 * The only thing we need to prepare here are the labels for the overlay
	 * buttons (support for listeners; ban, delete and later for lecturers).
	 * This approach allows ommitting localization in Javascript files. At last
	 * we have a small key explaining the icons.
	 *
	 * The page goes on whith some buttons for listeners to indicate how they
	 * feel about the talking speed (see first section). Even though it is a
	 * content-secondary section, we want it at the top of small screens.
	 * Therefore it is the first section here.
	 *
	 * The next section contains buttons to express unclearness as well as
	 * questions. Questions are created by entering one or more words into an
	 * input and (hopefully) adding some categories like explanation or
	 * example. Therefore we have some click buttuns, a text input, checkboxes
	 * and a submit button here.
	 *
	 * The last section is a simple link for the lecturer to request a final
	 * report for the current session.
	 */
	?>
	<div data-role="page" id="feedback-page">

		<?php echo tb_header(''); ?>

		<div data-role="content">

			<div class="content-secondary tb-lecturer tb-meter-warnings">
				<?php $clickToConfirm = _('Click to Confirm and Hide'); ?>
				<div class="tb-meter-warning tb-meter-warning-tooFast" title="<?php echo $clickToConfirm; ?>">
					<span class="ui-corner-all"><?php echo _('Too Fast'); ?></span>
				</div>
				<div class="tb-meter-warning tb-meter-warning-tooSlow" title="<?php echo $clickToConfirm; ?>">
					<span class="ui-corner-all"><?php echo _('Too Slow'); ?></span>
				</div>
				<div class="tb-meter-warning tb-meter-warning-unclear" title="<?php echo $clickToConfirm; ?>">
					<span class="ui-corner-all"><?php echo _('Something Unclear'); ?></span>
				</div>
			</div>

			<div class="content-primary">
				<h2>
					<span class="tb-event-name"></span>
					<span class="tb-event-participants" title="<?php echo _('Listeners'); ?>">
						<span class="tb-event-participants-number"></span>
					</span>
				</h2>
				<div class="tb-message-button-label tb-message-button-1 tb-listener ui-corner-top">
					<?php echo _('Support'); ?>
				</div>
				<div id="later" class="tb-message-button-label tb-message-button-bucket tb-message-button-2 tb-lecturer ui-corner-top">
					<?php echo _('Later'); ?>
				</div>
				<div id="delete" class="tb-message-button-label tb-message-button-bucket tb-message-button-3 tb-lecturer ui-corner-top">
					<?php echo _('Delete'); ?>
				</div>
				<div id="ban" class="tb-message-button-label tb-message-button-bucket tb-message-button-4 tb-lecturer ui-corner-top">
					<?php echo _('Ban'); ?>
				</div>
				<div id="tb-feedback-cloud">
					<p><em><?php echo _('No questions at the moment.');?></em></p>
				</div>
				<div id="tb-category-legend">
					<img src="css/images/icons/16/explanation.png" alt="">
					<?php echo _('Explanation'); ?>
					<img src="css/images/icons/16/example.png" alt="" class="tb-inner">
					<?php echo _('Example'); ?>
					<p id="tb-category-legend-description" style="display:none;"><?php echo _('These icons are used in the list of questions to indicate whether a listener wants an explanation or an example for a given term.'); ?></p>
				</div>
			</div>
			<!-- /div.content-primary -->

			<div class="content-secondary tb-listener">
				<?php $meter = $tb_config['meters'][0]; ?>
				<h2><?php echo $meter['label']; ?></h2>
				<div data-role="fieldcontain" class="tb-meter-buttons"
					id="tb-meter-<?php echo $meter['name']; ?>">
					<div data-role="controlgroup">
						<span class="tb-meter-button tb-meter-minus" data-role="button">
							<?php echo $meter['buttonLabels']['-']; ?></span>
						<span class="tb-meter-button tb-meter-ok" data-role="button">
							<?php echo $meter['buttonLabels']['0']; ?></span>
						<span class="tb-meter-button tb-meter-plus" data-role="button">
							<?php echo $meter['buttonLabels']['+']; ?></span>
					</div>
				</div>
			</div>

			<?php /* The Term Message Form */ ?>
			<div class="content-secondary tb-listener">
				<h2><?php echo _('Understanding'); ?></h2>
				<form action="" method="post" id="tb-question-form"
					data-ajax="false">
					<div data-role="fieldcontain" class="tb-meter-buttons"
						id="tb-meter-understanding">
						<div data-role="controlgroup">
							<span class="tb-meter-button tb-meter-ok" data-role="button">
								<?php echo _('I Can Follow'); ?></span>
							<span class="tb-meter-button tb-meter-minus" data-role="button">
								<?php echo _('Something Is Unclear'); ?></span>
						</div>
					</div>
					<div data-role="fieldcontain" class="narrow">
						<label
							for="tb-term-message-question">
							<?php echo _('Single Term or Short Question'); ?></label>
						<input type="text" name="tb-question-input"
							id="tb-question-input" value=""  />
					</div>
					<?php if (count($tb_config['categories'])) : ?>
					<div data-role="fieldcontain" class="narrow successor">
					 	<fieldset data-role="controlgroup">
					 		<?php foreach ($tb_config['categories'] as $cat) : ?>
								<input type="checkbox"
									name="<?php echo $cat['name']; ?>"
									id="tb-category-<?php echo $cat['name']; ?>"
									class="tb-category" />
								<label
									for="tb-category-<?php echo $cat['name']; ?>">
									<?php echo $cat['description']; ?></label>
							<?php endforeach; ?>
					    </fieldset>
					</div>
					<?php endif; ?>
					<div class="tb-right" data-inline="true" data-role="fieldcontain">
						<button data-inline="true" type="submit" name="submit"
							value="submit-value" data-theme="b">
							<?php echo _('Ask'); ?>
						</button>
					</div>
				</form>
			</div>
			<!-- /div.content-secondary -->

			<div class="content-secondary tb-lecturer tb-request-report">
				<h2><?php echo _('Evaluation'); ?></h2>
				<p><a id="tb-request-report-link" href="" data-role="button"
					data-ajax="false"><?php echo _('Open Event\'s Report'); ?></a>
				</p>
			</div>
			<!-- /div.content-secondary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->



	<?php
	/*
	 * Feedback Page
	 *
	 * This is Tweedback's enduser help page. It falls into two pages focuessed
	 * on listeners respectively lecturers.
	 *
	 * While this approach is straight forward, it seems to be a good idea to
	 * move help into a separated file falling into different pages (like this
	 * one). We don't really need all this content all the time.
	 */
	?>
	<div data-role="page" id="help">

		<?php echo tb_header('#help'); ?>

		<div data-role="content">

			<div class="content-primary">
				<div id="tb-help-role-choose" class="tb-help-role">
					<h2><?php echo _('Tweedback Help'); ?></h2>
					<p><?php echo _('Please select your role, i.e. what you want to do:'); ?></p>
					<ul data-role="listview">
						<li><a href="#help-listener">
							<?php echo _('Listeners join existing events and provide feedback'); ?></a></li>
						<li><a href="#help-lecturer">
							<?php echo _('Lecturers create events and gain feedback'); ?></a></li>
					</ul>
				</div>
			</div>
			<!-- /div.content-primary -->

			<div class="content-secondary">
				<ul data-role="listview">
					<li><a href="#help-listener">
						<?php echo _('Help For Listeners'); ?></a></li>
					<li><a href="#help-lecturer">
						<?php echo _('Help For Lecturers'); ?></a></li>
				</ul>
			</div>
			<!-- /div.content-secondary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->

	<div data-role="page" id="help-lecturer">

		<?php echo tb_header('#help'); ?>

		<div data-role="content">

			<div class="content-primary">

				<h2><?php echo _('Help For Lecturers'); ?></h2>
				<h3><?php echo _('Create a New Event'); ?></h3>
				<p><?php echo _('To start a talk supported by Tweedback, click "Create Event" and fill in the form as described. At the end of the talk, Tweedback generates a report. Enter an email address to get it this way. After clicking "Create Event" Tweedback shows the feedback page. Announce the chosen event code to the audience, so your listeners can join the event, too.'); ?></p>
				<h3><?php echo _('Get Feedback'); ?></h3>
				<img src="./images/help/lecturer-view.png" class="tb-float-right" alt="">
				<p><?php echo _('After creating an event you can see related feedback.'); ?></p>
				<p><?php echo _('Warnings (e.g. that you are talking too fast) appear at the top. You can click them after reading to hide them.'); ?></p>
				<p><?php echo _('The next section is the most important one: It lists all questions. Categories are represented as icons and explained at the end of the list. You can manipulate the list by clicking the red area of the line.'); ?></p>
				<dl>
					<dt><?php echo _('Ban'); ?></dt>
					<dd><?php echo _('Hides the question and upcoming ones with equal content. The user cannot send questions anymore.'); ?></dd>
					<dt><?php echo _('Delete'); ?></dt>
					<dd><?php echo _('Removes the question from the list.'); ?></dd>
					<dt><?php echo _('Later'); ?></dt>
					<dd><?php echo _('Moves the question to the end of the list, so you focus on other questions first.'); ?></dd>
				</dl>

			</div>
			<!-- /div.content-primary -->

			<div class="content-secondary">
				<ul data-role="listview">
					<li data-icon="arrow-l"><a href="#help" data-direction="reverse">
						<?php echo _('Help Overview'); ?></a></li>
					<li><a href="#help-listener">
						<?php echo _('Help For Listeners'); ?></a></li>
				</ul>
			</div>
			<!-- /div.content-secondary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->

	<div data-role="page" id="help-listener">

		<?php echo tb_header('#help'); ?>

		<div data-role="content">

			<div class="content-primary">
				<div id="tb-help-role-listener" class="tb-help-role">
					<h2><?php echo _('Help For Listeners'); ?></h2>
					<h3><?php echo _('Set Your Name &ndash; If You Want to'); ?></h3>
					<p><?php echo _('Click on the upper right button ("Anonymous") to change your personal settings. You can enter a name which allows the lecturer to see, who provided feedback. However, it is not necessary to enter a name. Tweedback also works anonymously.'); ?></p>
					<h3><?php echo _('Select an Event'); ?></h3>
					<p><?php echo _('To provide feedback you need to select the event by entering the event code on the "Event Selection" page. The event code is determined by the lecturer. Ask for it if he or she forgot to announce it.'); ?></p>
					<h3 class="tb-float-clear"><?php echo _('Support Existing Questions'); ?></h3>
					<img src="./images/help/support.png" class="tb-float-right" alt="">
					<p><?php echo _('On the feedback page you can see feedback given by other listeners. This feedback can be a single buzz word with an icon representing an example or explanation request. The meanings of these icons are specified at the end of the list. You can support a question by clicking the red area of the question\'s line. Have a look at the cursor in the figure: it shows where to click to support an explanation for differential equations. Questions become bigger and bigger with each support click.'); ?></p>
					<h3 class="tb-float-clear"><?php echo _('Ask Questions'); ?></h3>
					<p><?php echo _('Use the understanding section of the page to indicate that something is unclear by clicking the so-called button (please do not forget to switch to "I Can Follow", after your uncertainties are gone). If you have a specific question, you can use the input field above. Please keep your question brief. If possible, give a single buzz word and use the checkboxes above to describe, whether you want an explanation or an example for the term.'); ?></p>
				</div>
			</div>
			<!-- /div.content-primary -->

			<div class="content-secondary">
				<ul data-role="listview">
					<li data-icon="arrow-l"><a href="#help" data-direction="reverse">
						<?php echo _('Help Overview'); ?></a></li>
					<li><a href="#help-lecturer">
						<?php echo _('Help For Lecturers'); ?></a></li>
				</ul>
			</div>
			<!-- /div.content-secondary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->



	<?php
	/*
	 * User Settings
	 *
	 * Very brief at the moment: An input field for the user name, a button to
	 * delete "all" personal data (i.e. the name).
	 *
	 * There is a secondary section containing a comic which explains that
	 * Tweedback can be used anonymously or with a name.
	 */
	?>
	<div data-role="page" id="user-settings">

		<?php echo tb_header(''); ?>

		<div data-role="content">
			<div class="content-primary">
				<h2>
				<?php echo _('Set Your Name'); ?>
				</h2>
				<form action="ajax/user-settings.php" id="tb-user-settings-form"
					method="post" data-ajax="false">
					<div data-role="fieldcontain">
						<label id="username-label" for="username-input">
							<?php echo _('Your Name'); ?>
						</label>
						<input type="text" id="username-input" name="name"
							maxlength="<?php echo MAXIMUM_USERNAME_LENGTH;?>">
					</div>
					<div class="tb-right" data-inline="true" data-role="fieldcontain">
						<a id="tb-user-settings-cancel" data-direction="reverse" data-inline="true" data-role="button"
							href="#top"><?php echo _('Cancel'); ?> </a>
						<button data-inline="true" type="submit" name="submit"
							value="submit-value" data-theme="b">
							<?php echo _('Save Name'); ?>
						</button>
					</div>
				</form>

				<form action="" id="tb-user-settings-anonymous-form" method="post" data-ajax="false">
				<hr>
				<div class="tb-right" data-inline="true" data-role="fieldcontain">
					<?php echo _('Remove all your data and go on anonymously.'); ?> <button data-inline="true" type="submit" name="anonymous"
						value="submit-value"
						id="tb-user-settings-anonymous-button">
						<?php echo _('Remove My Data'); ?>
					</button>
				</div>
				</form>
			</div>
			<!-- /div.content-primary -->

				<div class="content-secondary tb-comic">
					<div class="tb-close">x</div>
					<img src="./images/comics/user-settings/user-settings.png" alt="">
					<p><?php echo _('Provide your feedback anonymously or not - it\'s your decision.'); ?></p>
				</div>
				<!-- /div.content-secondary -->
		</div>
		<!-- /content -->

	</div>
	<!-- /page -->



	<?php
	/*
	 * System Error
	 *
	 * Hopefully the user will never see this page. It is shown whenever an
	 * error couldn't be handled in another way. When this is the case all we
	 * can do is offering a button which is reloading the page.
	 *
	 * The given texts are only default values. In most cases they are
	 * overwritten by the server using Ajax.
	 */
	?>
	<div data-role="page" id="system-error" class="tb-simple-dialog">

		<?php echo tb_header(''); ?>

		<div data-role="content">
			<div class="content-primary">
				<h2><span id="tb-system-error-header"><?php echo _('Oops! Something Went Wrong...'); ?></span>
					<span class="ui-corner-all ui-shadow"
						style="background-color:#E04F3D;color:#fff;padding:0px 5px;">:-(</span>
				</h2>
				<p id="tb-system-error-text"><?php echo _('The problem cannot be handled right now. Please return to the selection page to try again.'); ?></p>
				<ul data-role="listview">
					<li data-icon="home"><a href="." data-ajax="false"><?php echo _('Return to Event Selection'); ?></a></li>
				</ul>
			</div>
			<!-- /div.content-primary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->



	<?php
	/*
	 * User Error
	 *
	 * A page to indicate, that the user did something bad or unexpected (e.g.
	 * forgot to enter an event code).
	 *
	 * The given texts are only default values. In most cases they are
	 * overwritten by the server using Ajax.
	 */
	?>
	<div data-role="page" id="user-error" class="tb-simple-dialog">

		<?php echo tb_header(''); ?>

		<div data-role="content">
			<div class="content-primary">
				<h2 id="tb-user-error-header"><?php echo _('Oops! Something Went Wrong...'); ?></h2>
				<p id="tb-user-error-text"><?php echo _('Please return to the previous page to try again.'); ?></p>
				<div class="tb-right" data-inline="true" data-role="fieldcontain">
					<a id="tb-user-error-back" data-role="button" data-transition="pop"
						data-inline="true" data-theme="b" href="#home"
						data-direction="reverse"><?php echo _('OK'); ?></a>
				</div>
			</div>
			<!-- /div.content-primary -->

		</div>
		<!-- /content -->

	</div>
	<!-- /page -->

</body>
</html>
