export const typeDefs = `

type Conference {
    id: ID!
    name: String
}

type Query {
    conferences: [Conference]
}

`;