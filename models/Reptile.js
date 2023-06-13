import { Schema, model } from "mongoose";

const ReptileSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Reptile_class", ReptileSchema);
