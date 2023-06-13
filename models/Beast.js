import { Schema, model } from "mongoose";

const BeastSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Beast_class", BeastSchema);
