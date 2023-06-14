import { gql } from "apollo-server";

export default gql`
  type Axie {
    name: String
    class: String
    stage: Int
  }

  type Beast {
    name: String
    class: String
    stage: Int
  }

  type Aquatic {
    name: String
    class: String
    stage: Int
  }

  type Plant {
    name: String
    class: String
    stage: Int
  }

  type Bird {
    name: String
    class: String
    stage: Int
  }

  type Bug {
    name: String
    class: String
    stage: Int
  }

  type Reptile {
    name: String
    class: String
    stage: Int
  }

  type Mech {
    name: String
    class: String
    stage: Int
  }

  type Dawn {
    name: String
    class: String
    stage: Int
  }

  type Dusk {
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
    totalSupply: Int
    getAxies: [Axie]
    beasts: [Beast]
    aquatics: [Aquatic]
    plants: [Plant]
    birds: [Bird]
    bugs: [Bug]
    reptiles: [Reptile]
    mechs: [Mech]
    dawns: [Dawn]
    dusks: [Dusk]
    marketplaceManager: String
    getName: String
  }

  type Mutation {
    fetchAxiesAPI: [Axie]!
    storeAxies: AxieResult!
  }
`;
