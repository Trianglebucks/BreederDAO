import { Schema, model } from "mongoose";

const AxiesSchema = new Schema({
  axies: [
    {
      name: String,
      class: String,
      stage: Number,
    },
  ],
});

export default model("Axies_class", AxiesSchema);
