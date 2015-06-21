import Ember from 'ember';

export function timeFormat(params/*, hash*/) {

	var months	= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		date	= new Date(params[0]),
		month	= months[date.getMonth()];

	return month + ' ' + date.getDate() + ', ' + date.getFullYear();
}

export default Ember.HTMLBars.makeBoundHelper(timeFormat);