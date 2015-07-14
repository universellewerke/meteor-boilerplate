Router.configure({
	layoutTemplate: 'MasterLayout',
	notFoundTemplate: 'ErrorPage',
});

Router.onBeforeAction(function() {
	window.scrollTo(0, 0);
	this.next();
});

Router.route('/', function () {
  this.render('Landing');
});