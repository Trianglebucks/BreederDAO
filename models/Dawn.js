import { Schema, model } from "mongoose";

const DawnSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Dawn_class", DawnSchema);
