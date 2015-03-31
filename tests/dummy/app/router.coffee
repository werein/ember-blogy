`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @resource 'blogy/posts', ->
    @route 'new'
    @resource 'blogy/post', path: ':post_id', ->
      @route 'show', path: '/'
      @route 'edit'

`export default Router`
