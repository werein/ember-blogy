`import Ember from 'ember'`

ApplicationRoute = Ember.Route.extend
  beforeModel: ->
    Ember.I18n.locale = 'en'
    Ember.$.get("/api/locales").then (result) ->
      Ember.I18n.translations = result

`export default ApplicationRoute`
