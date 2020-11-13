const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({

    type: "cardio",
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your cardio"
    },
    duration: {
        type: Number,
        required: "Enter an duration of time"
    },
    distance: {
        type: Number,
        required: "Enter an distance"
    }       
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;