`import Ember from 'ember'`

BlogyPostsPostView = Ember.View.extend
  templateName: 'blogy/posts/post'
  tagName: 'article'
  classNameBindings: ['content.isNew', 'content.isDirty', 'content.isValid']
  title: (->
    @get('content.title') or 'undefined'
  ).property('content.title')
  summary: (->
    content = @get('content.content')
    if content and content.length > 0 and content.length > 250
      result = content.substr 0, 250
      result = content.substr 0, result.lastIndexOf(" ")
      result + '...'
    else
      content
  ).property('content.content')

`export default BlogyPostsPostView`
