`import Ember from 'ember'`

BlogyPostRoute = Ember.Route.extend
  model: (params) ->
    @store.fetch('blogy/post', params.post_id)

`export default BlogyPostRoute`
