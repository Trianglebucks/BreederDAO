import { Schema, model } from "mongoose";

const DuskSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Dusk_class", DuskSchema);
