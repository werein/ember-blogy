`import Ember from 'ember'`

BlogyWysiwygComponent = Ember.Component.extend
  _activate: ->
    @$('.summernote').summernote({
      airMode: true
    })

  _deactivate: ->
    @$('.summernote').destroy()

  _getContent: ->
    @$('.summernote').code()

  _setContent: (value) ->
    @$('.summernote').code(value)

  _synchronize: ->
    @set('content', @_getContent())

  didInsertElement: ->
    @_activate()
    @_setContent(@get('content'))

  willDestroyElement: ->
    @_deactivate()

  keyUp: ->
    @_synchronize()

  click: ->
    @_synchronize()

`export default BlogyWysiwygComponent`
