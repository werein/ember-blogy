`import Ember from 'ember'`

BlogyPostsNewController = Ember.Controller.extend
  availableLocales: ['en']
  availableStorages: ['text', 'remote']
  availableFormats: ['html', 'markdown']
  actions:
    submit: ->
      that = @
      @model.save().then ->
        that.transitionToRoute 'blogy/post.edit', that.model

`export default BlogyPostsNewController`
