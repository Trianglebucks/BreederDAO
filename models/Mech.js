import { Schema, model } from "mongoose";

const MechSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Mech_class", MechSchema);
