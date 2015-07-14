if (Meteor.isClient) {

	Meteor.subscribe('events');

	// counter starts at 0
	Session.setDefault('counter', 0);

	Template.Landing.helpers({
		counter: function () {
			return Session.get('counter');
		}
	});

	Template.Landing.events({
		'click button': function () {
			// increment the counter when button is clicked
			Session.set('counter', Session.get('counter') + 1);
		}
	});
}