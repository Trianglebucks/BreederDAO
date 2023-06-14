import { Schema, model } from "mongoose";

const BirdSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Bird_class", BirdSchema);
