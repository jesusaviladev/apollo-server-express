import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { createServer } from 'http'
import cors from 'cors'
import express from 'express'
import app from './app.js'
import { expressMiddleware } from '@apollo/server/express4'
import { schema } from '../graphql/schema.js'

const httpServer = createServer(app)

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.

const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

// Ensure we wait for our server to start

await server.start()

app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
)

export default httpServer
