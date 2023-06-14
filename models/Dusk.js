import { Schema, model } from "mongoose";

const DuskSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Dusk_class", DuskSchema);
