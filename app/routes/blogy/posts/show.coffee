`import Ember from 'ember'`

BlogyPostsShowRoute = Ember.Route.extend
  model: (params) ->
    @store.fetch('blogy/post', params.post_id)

`export default BlogyPostsShowRoute`
