`import Ember from 'ember'`

BlogyPostEditController = Ember.Controller.extend
  availableLocales: ['en']
  availableStorages: ['text', 'remote']
  availableFormats: ['html', 'markdown']
  actions:
    save: ->
      @model.save()

`export default BlogyPostEditController`
