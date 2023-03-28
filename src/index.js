import './config/env.js'
import httpServer from './config/http.js'

const bootstrap = () => {
    const PORT = process.env.PORT

    httpServer.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
    })
}

bootstrap()
