import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as user from './user/index.js';
import * as trainee from './trainee/index.js';



const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query
    },
    Mutation: {
      ...trainee.Mutation,
      ...user.Mutation
    },
    Subscription: {
      ...trainee.Subscription,
    },
  },
  typeDefs
};