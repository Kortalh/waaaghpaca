import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

export default Router.map(function() {
	this.resource('updates', {
		path: '/'
	});
	this.resource('schedule');
	this.resource('rules');
	this.resource('roster');
	this.resource('location');
	this.resource('giveaway');
	this.resource('register');
	this.resource('results', function() {
		this.route('ironman');
		this.route('yearly');
	});
	this.resource('contact');
});
