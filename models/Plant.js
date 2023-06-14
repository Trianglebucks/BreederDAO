import { Schema, model } from "mongoose";

const PlantSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Plant_class", PlantSchema);
