import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO_URL) {
  throw new Error("MONGODB_URL environment variable is not defined.");
}
mongoose.connect(process.env.MONGO_URL);

mongoose.Promise = global.Promise;


const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket",ticketSchema)
export default Ticket
