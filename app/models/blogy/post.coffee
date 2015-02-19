`import DS from 'ember-data'`

BlogyPost = DS.Model.extend {
  published: DS.attr()
  draft: DS.attr()
  ilustration: DS.attr()
  title: DS.attr()
  locale: DS.attr()
  slug: DS.attr()
  storage: DS.attr()
  format: DS.attr()
  document: DS.attr()
  remote: DS.attr()
  text: DS.attr()
  content: DS.attr()
  plain: DS.attr()
  createdAt: DS.attr()
  updatedAt: DS.attr()
}

`export default BlogyPost`
