import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
            firstName: {
                        type: String,
                        required: true,
                        minlength: [3, "First name must be at least 3 characters"],
                        maxlength: [20, "First name must be at most 20 characters"],
            },
            lastName: {
                        type: String,
                        required: true,
                        minlength: [3, "First name must be at least 3 characters"],
                        maxlength: [20, "First name must be at most 20 characters"],
            }, 
            email: {
                        type: String,
                        required: true,
                        validate: [validator.isEmail, "Please enter a valid email address"],
            }, 
            phone: {
                        type: String,
                        required: true,
                        minlength: [10, "Phone number must contain at least 10 digits"],
                        maxlength: [10, "phone number not exceed 10 digits"],

            },
            time: {
                        type: String,
                        required: true,
            },
            date: {
                        type: String,
                        required: true,
            },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);