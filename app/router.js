import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('home',		{path: '/'}			);
  this.resource('schedule');
  this.resource('rules');
  this.resource('roster');
  this.resource('location');
  this.resource('raffle');
  this.resource('register');
  this.resource('results');
  this.resource('contact');
});
