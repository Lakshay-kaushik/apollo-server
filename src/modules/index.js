import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
// const { fileLoader, mergeTypes } = pkg;
import path from 'path';
import * as User from './user/index.js';
import * as trainee from './trainee/index.js';

const dirname = path.resolve();
const typeArray = fileLoader(path.join(dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });

export default {
    resolvers: {
        Query: {
            ...User.getProfile,
            ...trainee.Query
        },
        Mutation: {
            ...trainee.Mutation
        }
    },
    typeDefs,
}; 