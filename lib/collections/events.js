Events = new Mongo.Collection('events');
Events.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		autoform: {
			placeholder: "Your Event Title"
		}
	},
	host: {
		type: String,
		label: "Host",
		autoform: {
			placeholder: "Who hosts this event?"
		}
	}
}));

Events.allow({
	insert: function() { return true; },
	remove: function() { return true; },
	update: function() { return true; }
});