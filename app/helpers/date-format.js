import Ember from 'ember';

export function timeFormat(params/*, hash*/) {


console.log('params:', params);

		// Used for converting numerical months to strings
	var months		= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		// Used for Firefox timestamp interpretation
		timestamp	= params[0].split(/[- :]/),
		date		= new Date(timestamp[0], timestamp[1]-1, timestamp[2], timestamp[3], timestamp[4], timestamp[5]),
		month		= months[date.getMonth()];

	return month + ' ' + date.getDate() + ', ' + date.getFullYear();
}

export default Ember.HTMLBars.makeBoundHelper(timeFormat);