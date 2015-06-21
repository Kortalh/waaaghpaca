import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('update');
	},
	activate: function() {
		document.title = 'Waaaghpaca!';
	}
});