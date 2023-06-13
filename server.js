import express from "express";
const app = express();
import connectDB from "./db/connect.js";
import axios from "axios";
import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const API_URL = "https://graphql-gateway.axieinfinity.com/graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 5200;

const start = async () => {
  try {
    //connects to db first
    await connectDB(
      `mongodb+srv://will:1234@nodeexpressmongodbproj.wv8tjaw.mongodb.net/Axie-API?retryWrites=true&w=majority`
    );
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    // fetches axie list
    const data = await axios.post(
      API_URL,

      {
        operationName: "GetAxieLatest",
        variables: {
          from: 0,
          size: 10,
          sort: "PriceAsc",
          auctionType: "Sale",
          criteria: {},
        },
        query:
          "query GetAxieLatest($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieRowData\n      __typename\n    }\n   }\n}\n\nfragment AxieRowData on Axie {\n  id\n  class\n  name\n  class\n  stage\n}\n\n",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const axies = data?.data?.data?.axies?.results;
  } catch (error) {
    console.log(error.response.data);
  }
};

start();
