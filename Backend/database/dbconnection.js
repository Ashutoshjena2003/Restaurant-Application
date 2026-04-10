import { Console } from "console";
import mongoose  from "mongoose";

export const dbconnection = () => {
            mongoose.connect(process.env.MONGO_URL, {
                dbName: "RESTAURANT"
            }).then(() => {
                        console.log("Database connected successfully");
            }).catch((err) => {
                        console.log("Database connection failed");
                        console.log(err);
            });
}