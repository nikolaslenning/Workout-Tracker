var path = require("path");
const router = require("express").Router();
const Resistance = require("../models/resistance");
const Cardio = require("../models/cardio.js");

router.get("/api/workouts", (req, res) => {

    Resistance.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.json(data);
        }
    });

    // Resistance.find({})
    //     .sort({ day: -1 })
    //     .then(dbResistance => {
    //         res.json(dbResistance);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });

    // Cardio.find({})
    //         .sort({ day: -1 })
    //         .then(dbCardio => {
    //             res.json(dbCardio);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
});


module.exports = router;