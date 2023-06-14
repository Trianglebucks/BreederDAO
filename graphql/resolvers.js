import Beast from "../models/Beast.js";
import Aquatic from "../models/Aquatic.js";
import Plant from "../models/Plant.js";
import Bird from "../models/Bird.js";
import Bug from "../models/Bug.js";
import Reptile from "../models/Reptile.js";
import Mech from "../models/Mech.js";
import Dawn from "../models/Dawn.js";
import Dusk from "../models/Dusk.js";
import axios from "axios";
import web3 from "../web3/web3.js";
import { abi, contractAddress } from "../web3/axieConfig.js";
const API_URL = "https://graphql-gateway.axieinfinity.com/graphql";

export default {
  Query: {
    async marketplaceManager() {
      try {
        // Create a contract instance using the contract ABI and address
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Call the desired function from the contract
        const result = await contract.methods.marketplaceManager().call();

        return result;
      } catch (error) {
        console.error("Error calling Axie Infinity function:", error);
        throw new Error("Failed to call Axie Infinity function");
      }
    },
    async getName() {
      try {
        // Create a contract instance using the contract ABI and address
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Call the desired function from the contract
        const result = await contract.methods.name().call();

        return result;
      } catch (error) {
        console.error("Error calling Axie Infinity function:", error);
        throw new Error("Failed to call Axie Infinity function");
      }
    },
    async beasts() {
      try {
        const beasts = await Beast.find().exec();
        return beasts;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async aquatics() {
      try {
        const aquatics = await Aquatic.find().exec();
        return aquatics;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async plants() {
      try {
        const plants = await Plant.find().exec();
        return plants;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async birds() {
      try {
        const birds = await Bird.find().exec();
        return birds;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async bugs() {
      try {
        const bugs = await Bug.find().exec();
        return bugs;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async reptiles() {
      try {
        const reptiles = await Reptile.find().exec();
        return reptiles;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async mechs() {
      try {
        const mechs = await Mech.find().exec();
        return mechs;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async dawns() {
      try {
        const dawns = await Dawn.find().exec();
        return dawns;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
    async dusks() {
      try {
        const dusks = await Dusk.find().exec();
        return dusks;
      } catch (error) {
        console.error(
          'Error fetching data from "beast_class" collection:',
          error
        );
        throw new Error('Failed to fetch data from "beast_class" collection');
      }
    },
  },
  Mutation: {
    async fetchAxiesAPI() {
      try {
        const data = await axios.post(
          API_URL,
          {
            operationName: "GetAxieLatest",
            variables: {
              from: 0,
              size: 300,
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
        let axies = await data?.data?.data?.axies?.results;

        saveArrayToCollections(axies);

        function saveArrayToCollections(axies) {
          // Group the array axies by class
          const groupedData = groupArrayByClass(axies);

          // Save to "beast_class" collection
          saveArrayToCollection(groupedData.beast, Beast, "beast_class");

          // Save to "aquatic_class" collection
          saveArrayToCollection(groupedData.aquatic, Aquatic, "aquatic_class");

          saveArrayToCollection(groupedData.plant, Plant, "plant_class");
          saveArrayToCollection(groupedData.bird, Bird, "bird_class");
          saveArrayToCollection(groupedData.bug, Bug, "bug_class");
          saveArrayToCollection(groupedData.reptile, Reptile, "reptile_class");
          saveArrayToCollection(groupedData.mech, Mech, "mech_class");
          saveArrayToCollection(groupedData.dawn, Dawn, "dawn_class");
          saveArrayToCollection(groupedData.dusk, Dusk, "dusk_class");

          // Save to other collections using the same pattern
          // ...
        }

        // Helper function to group the array axies by class
        function groupArrayByClass(axies) {
          console.log("This is working", axies);

          const groupedData = {
            beast: [],
            aquatic: [],
            plant: [],
            bird: [],
            bug: [],
            reptile: [],
            mech: [],
            dawn: [],
            dusk: [],
            // Add more properties for other classes
          };

          axies.forEach((axie) => {
            // Determine the class of the axie and push it into the respective array
            if (axie.class === "Beast") {
              groupedData.beast.push(axie);
            } else if (axie.class === "Aquatic") {
              groupedData.aquatic.push(axie);
            } else if (axie.class === "Plant") {
              groupedData.plant.push(axie);
            } else if (axie.class === "Bird") {
              groupedData.bird.push(axie);
            } else if (axie.class === "Bug") {
              groupedData.bug.push(axie);
            } else if (axie.class === "Reptile") {
              groupedData.reptile.push(axie);
            } else if (axie.class === "Mech") {
              groupedData.mech.push(axie);
            } else if (axie.class === "Dawn") {
              groupedData.dawn.push(axie);
            } else if (axie.class === "Dusk") {
              groupedData.dusk.push(axie);
            }
            // Add more conditions for other classes
          });

          return groupedData;
        }

        // Helper function to save an array to a specific collection
        function saveArrayToCollection(array, Model, collectionName) {
          Model.insertMany(array)
            .then((savedDocuments) => {
              savedDocuments;
              console.log(
                `Array saved to "${collectionName}" collection:`,
                savedDocuments
              );
            })
            .catch((error) => {
              console.error(
                `Error saving array to "${collectionName}" collection:`,
                error
              );
            });
        }

        return axies;
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
