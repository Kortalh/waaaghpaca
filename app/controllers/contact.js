import Ember from 'ember';

export default Ember.Controller.extend({
	myProp: 'things',

	actions: {
		sendMail: function() {

			var environment = this.container.lookupFactory('config:environment');

			Ember.$.post(
				environment.apiURL + '/send_mail',
				{
					prop: this.myProp,
					success: false
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

		console.log('response:', response);

		if ( !response.success || response.success === "false" ) {
			this.handleMailError(null, 'server error', response.message);
		}
	},

	handleMailError: function(jqXHR, status, message) {
		console.error('sendMail error:', {status: status, message: message});
	}
});
