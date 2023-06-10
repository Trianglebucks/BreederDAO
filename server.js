import express from "express";
const app = express();
import connectDB from "./db/connect.js";
const port = 5200;
import axios from "axios";

const API_URL = "https://graphql-gateway.axieinfinity.com/graphql";

const data = await axios.post(
  API_URL,

  {
    operationName: "GetAxieLatest",
    variables: {
      from: 0,
      size: 10,
      sort: "PriceAsc",
      auctionType: "Sale",
      criteria: {}
    },
    query:
      "query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieRowData\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieRowData on Axie {\n  id\n  image\n  class\n  name\n  genes\n  owner\n  class\n  stage\n  title\n  breedCount\n  level\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n   __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\n\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\n"
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
);

console.log(data.data.axies);

const start = async () => {
  try {
    await connectDB(
      `mongodb+srv://will:1234@nodeexpressmongodbproj.wv8tjaw.mongodb.net/Axie-API?retryWrites=true&w=majority`
    );
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
