import { Schema, model } from "mongoose";

const PlantSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Plant_class", PlantSchema);
