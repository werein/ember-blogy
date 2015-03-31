`import { Ability } from 'ember-can'`

BlogyPostAbility = Ability.extend
  canList: (->
    true
  ).property()

  canCreate: (->
    true
  ).property()

  canEdit: (->
    true
  ).property('model')

`export default BlogyPostAbility`
