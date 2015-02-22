`import Ember from 'ember'`

BlogyPostRoute = Ember.Route.extend
  model: (params) ->
    @store.fetchById('blogy/post', params.post_id)

`export default BlogyPostRoute`
