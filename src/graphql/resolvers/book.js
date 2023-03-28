import books from '../../database/db.js'

const bookResolvers = {
    Query: {
        books: () => books,
    },
}

export default bookResolvers
