import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import seo from './common/seo'

import singletonGlobal from './singletonGlobal'
import singletonHome from './singletonHome'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonGlobal,
    singletonHome,
    seo
  ]),
})

