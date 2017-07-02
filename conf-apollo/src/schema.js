export const typeDefs = `

type Conference {
    id: ID!
    name: String
    description: String
}

type Query {
    conferences: [Conference]
}

`;