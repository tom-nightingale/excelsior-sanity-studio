import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import seo from './common/seo'
import dayAndTime from './objects/dayAndTime'

import singletonGlobal from './singletonGlobal'
import singletonHome from './singletonHome'
import singletonClasses from './singletonClasses'
import singletonUnity from './singletonUnity'
import singletonGallery from './singletonGallery'
import singletonContact from './singletonContact'
import teachers from './teacher'
import timetable from './timetable'
import classes from './classes'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonGlobal,
    singletonHome,
    teachers,
    singletonClasses,
    classes,
    timetable,
    singletonUnity,
    singletonGallery,
    singletonContact,
    dayAndTime,
    seo,
  ]),
})

