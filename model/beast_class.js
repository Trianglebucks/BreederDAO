import { Schema } from "mongoose";

const BeastSchema = new Schema({
  parts: String,
  classes: String,
  stages: Number,
  numMystic: Number,
  pureness: Number,
  breedable: Boolean,
  breedCount: Number,
  hp: Number,
  skill: Number,
  speed: Number,
  morale: Number
});

export default mongoose.model("Beast_class", BeastSchema);
