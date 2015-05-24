import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

DS.RESTAdapter.reopen({
  namespace:"api",
  host: "http://learning-ember.api.herokuapp.com"
})

loadInitializers(App, config.modulePrefix);

export default App;
