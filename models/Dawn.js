import { Schema, model } from "mongoose";

const DawnSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Dawn_class", DawnSchema);
