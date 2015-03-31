`import Ember from 'ember'`
`import { CanMixin } from 'ember-can'`

BlogyPostsNewRoute = Ember.Route.extend CanMixin, {
  beforeModel: ->
    if (!@can('create blogy/post'))
      @transitionTo('index')

  model: ->
    @store.createRecord 'blogy/post'
}

`export default BlogyPostsNewRoute`
