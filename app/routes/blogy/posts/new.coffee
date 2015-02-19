`import Ember from 'ember'`

BlogyPostsNewRoute = Ember.Route.extend
  model: ->
    @store.createRecord 'blogy/post'

`export default BlogyPostsNewRoute`
