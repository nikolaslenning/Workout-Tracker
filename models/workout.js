const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the exercise"
            },
            duration: {
                type: Number,
                required: "Enter a duration of time"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration')
    .get(function () {
        return this.exercises.map(e => e.duration).reduce((d, a) => a + d, 0)
    });


const Workout = mongoose.model("workout", workoutSchema);


module.exports = Workout;