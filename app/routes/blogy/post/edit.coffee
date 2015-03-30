`import Ember from 'ember'`
`import { CanMixin } from 'ember-can'`

BlogyPostEditRoute = Ember.Route.extend CanMixin, {
  beforeModel: ->
    if (!@can('edit blogy/post'))
      @transitionTo('index')
}

`export default BlogyPostEditRoute`
