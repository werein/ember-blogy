`import Ember from 'ember'`

BlogyPostsNewController = Ember.Controller.extend
  availableLocales: ['en']
  availableStorages: ['text', 'remote']
  availableFormats: ['html', 'markdown']
  actions:
    saveAndEdit: ->
      _ = @
      @model.save().then ->
        _.transitionToRoute 'blogy/post.edit', _.model
    saveAndShow: ->
      _ = @
      @model.save().then ->
        _.transitionToRoute 'blogy/post.show', _.model
    saveAndNew: ->
      @model.save().then ->
        _.transitionToRoute 'blogy/posts.new'

`export default BlogyPostsNewController`
