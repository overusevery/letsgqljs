import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    books:[Book]
    user(id: ID!): User
  }

  type Book {
    title: String
    author: Persion
  }

  type Persion {
    name: String
  }

  type User{
    id: ID!
    name: String
    havingBook: [Book]
  }

`;
