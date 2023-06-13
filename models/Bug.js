import { Schema, model } from "mongoose";

const BugSchema = new Schema({
  name: String,
  class: String,
  stage: Number,
});

export default model("Bug_class", BugSchema);
