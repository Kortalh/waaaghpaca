import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('home',		{path: '/'}			);
  this.resource('location',	{path: '/location'}	);
  this.resource('raffle',	{path: '/raffle'}	);
  this.resource('register',	{path: '/register'}	);
});
