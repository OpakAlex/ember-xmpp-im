import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
// import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'presence',
  podModulePrefix: 'presence',
  Resolver: Resolver
});

loadInitializers(App, 'presence');

export default App;
