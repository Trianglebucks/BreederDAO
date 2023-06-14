import connectDB from "./db/connect.js";

import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

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
  } catch (error) {
    console.log(error.response.data);
  }
};

start();
