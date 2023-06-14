import { Schema, model } from "mongoose";

const AquaticSchema = new Schema({
  id: String,
  name: String,
  class: String,
  stage: Number,
});

export default model("Aquatic_class", AquaticSchema);
