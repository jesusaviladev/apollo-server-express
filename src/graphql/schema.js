import path from 'path'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFiles } from '@graphql-tools/load-files'

const { pathname: root } = new URL('./', import.meta.url)

const gqlFiles = await loadFiles(path.join(root, './typedefs'))
const resolverFiles = await loadFiles(path.join(root, './resolvers'))

const typeDefs = mergeTypeDefs(gqlFiles)
const resolvers = mergeResolvers(resolverFiles)

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
