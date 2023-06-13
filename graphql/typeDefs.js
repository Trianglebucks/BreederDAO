import { gql } from "apollo-server";

export default gql`
  type Axie {
    name: String
    class: String
    stage: Int
  }

  input AxieInput {
    name: String
    class: String
    stage: Int
  }

  type AxieResult {
    axies: [Axie]
  }

  type Query {
    axie(ID: ID!): Axie!
    getAxies: [Axie]
  }

  type Mutation {
    fetchAxiesAPI: [Axie]!
    storeAxies: AxieResult!
  }
`;
