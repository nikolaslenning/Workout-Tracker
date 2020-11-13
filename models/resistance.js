const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({

    type: "resistance",
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
    },
    duration: {
        type: Number,
        required: "Enter an duration of time"
    },
    weight: {
        type: Number,
        required: "Enter an weight"
    },
    reps: {
        type: Number,
        required: "Enter a number of reps"
    },
    sets: {
        type: Number,
        required: "Enter an number of sets"
    }    
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;