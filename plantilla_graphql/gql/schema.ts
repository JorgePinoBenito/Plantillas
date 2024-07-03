// The GraphQL schema
export const typeDefs = `#graphql
  type Tipo {
   atributo: String!
   atributo2: [String]!
  }

  type Query {
    getTipo: Tipo!
    getTipos: [Tipo]!
  }

  type Mutation {
    addTipo(name: String!): Tipo!
    updateTipo(id: ID!, name: String!): Tipo!
    deleteTipo(id: ID!): Tipo!
  }

`;
