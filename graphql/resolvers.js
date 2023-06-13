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
const API_URL = "https://graphql-gateway.axieinfinity.com/graphql";

export default {
  Query: {
    async getAxies() {
      try {
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
        let axies = data?.data?.data?.axies?.results;
        return axies;
      } catch (error) {
        console.log(error);
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
