import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const database = mongoose.connection;

const handleOpen = () => console.log("▶ Connected to DB");
const handleError = (error) =>
  console.log(`▷ Error on DB Connection: ${error}`);

database.once("open", handleOpen);
database.on("error", handleError);
