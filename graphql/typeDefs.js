import { gql } from "apollo-server";

export default gql`
  type Axie {
    id: String
    name: String
    class: String
    stage: Int
  }

  type Beast {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Aquatic {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Plant {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Bird {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Bug {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Reptile {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Mech {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Dawn {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Dusk {
    id: String

    name: String
    class: String
    stage: Int
  }

  type Query {
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
  }
`;
