import { Schema, model } from "mongoose";

const BugSchema = new Schema({
  id: String,

  name: String,
  class: String,
  stage: Number,
});

export default model("Bug_class", BugSchema);
