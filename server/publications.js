/**
 * Publications
 * for client subscriptions of collections
 */

Meteor.publish('events', function() {
	return Events.find();
});