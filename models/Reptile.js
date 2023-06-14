import { Schema, model } from "mongoose";

const ReptileSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Reptile_class", ReptileSchema);
