import Ember from 'ember';
/*global google*/

export default Ember.Component.extend({

	insertMap: function() {

		// Pointer to the container element
		var container = this.$('.map-canvas');

		// Set the map coordinates
		var mapCenter = new google.maps.LatLng( this.get('latitude'), this.get('longitude') );

		// Configure the map
		var options = {
			styles: JSON.parse(
				'[{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]'
			),
			zoom: 15,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: mapCenter
		};

		// Configure the location marker's icon
		var mapIcon = {
			path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
			scale: 6,
			strokeColor: '#8d0000',
			strokeWeight: 2,
			fillColor: '#ffeeee',
			fillOpacity: 1
		};

		// Initialize the map
		var map = new google.maps.Map(container[0], options);

		// Initialize the map marker
		new google.maps.Marker({
			position: mapCenter,
			map: map,
			title: this.get('title'),
			icon: mapIcon,
			animation: google.maps.Animation.DROP
		});

	}.on('didInsertElement')

});