import Ember from 'ember';
// import config from './config/environment';

var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
	this.resource('xmpp', {path: '/'});
});

export default Router;
