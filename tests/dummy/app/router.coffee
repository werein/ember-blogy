`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @resource 'blogy/posts', ->
    @route 'show', path: ':post_id', ->

`export default Router`
