import DS from 'ember-data';

export default DS.Model.extend({
	year:				DS.attr('number'),
	player:				DS.attr('string'),
	player_id:			DS.attr('number'),
	army:				DS.attr('string'),
	army_id:			DS.attr('number'),
	team:				DS.attr('string'),
	team_id:			DS.attr('number'),
	track:				DS.attr('string'),
	score_paint:		DS.attr('number'),
	score_sportsman:	DS.attr('number'),
	score_battle:		DS.attr('number'),
	score_hobby:		DS.attr('number'),
	score_strength:		DS.attr('number'),
	score_overall:		DS.attr('number'),
	paid:				DS.attr('boolean'),
	waiting:			DS.attr('boolean'),
	giveaway:			DS.attr('boolean')
});