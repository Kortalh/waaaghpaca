import Ember from 'ember';

export default Ember.Controller.extend({

	// Holds
	feedback: null,

	actions: {
		sendMail: function() {

			var environment = this.container.lookupFactory('config:environment');

			Ember.$.post(
				environment.apiURL + '/send_mail',
				{
					type:		'contact',
					from:		this.contactEmail,
					name:		this.contactName,
					message:	this.contactMessage
				}
			).done(
				Ember.$.proxy(this.handleMailSent, this)
			).fail(
				Ember.$.proxy(this.handleMailError, this)
			);

		}
	},

	handleMailSent: function(unparsedResponse) {
		var response = JSON.parse(unparsedResponse);

		if ( !response.success || response.success === "false" ) {
			this.handleMailError(null, 'server error', response.message);
		}
	},

	handleMailError: function(jqXHR, status, message) {

		this.set('feedback', message);

		Ember.Logger.error('sendMail error:', {status: status, message: message});
	}
});
