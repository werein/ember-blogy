`import Ember from 'ember'`

BlogyPostsIndexRoute = Ember.Route.extend
  model: ->
    @store.find('blogy/post')

`export default BlogyPostsIndexRoute`
