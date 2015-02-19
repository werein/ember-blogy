`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @resource 'blogy/posts', ->
    @resource 'blogy/post', path: ':post_id', ->
      @route 'edit'
    @route 'new'

`export default Router`
