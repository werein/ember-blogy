`import Ember from 'ember'`

BlogyPostsIndexRoute = Ember.Route.extend
  model: ->
    @store.findAll('blogy/post')

`export default BlogyPostsIndexRoute`
