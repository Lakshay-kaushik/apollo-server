import pkg from 'merge-graphql-schemas';
const { fileLoader, mergeTypes } = pkg;
import path from 'path';
import * as User from './user/index.js';

const dirname = path.resolve();
const typeArray = fileLoader(path.join(dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });

export default {
    resolvers: {
        Query: {
            ...User.getProfile,
        },
    },
    typeDefs,
}; 