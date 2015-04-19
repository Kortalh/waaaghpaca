import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('home',		{path: '/'}			);
  this.resource('schedule', {path: '/schedule'}	);
  this.resource('rules',	{path: '/rules'}	);
  this.resource('roster',	{path: '/roster'}	);
  this.resource('location',	{path: '/location'}	);
  this.resource('raffle',	{path: '/raffle'}	);
  this.resource('register',	{path: '/register'}	);
  this.resource('results',	{path: '/results'}	);
  this.resource('contact',	{path: '/contact'}	);
});
