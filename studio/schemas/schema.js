import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import {tweetSchema} from './tweetSchema'
import {userSchema} from './userSchema'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    userSchema,
    tweetSchema,
  ]),
})
