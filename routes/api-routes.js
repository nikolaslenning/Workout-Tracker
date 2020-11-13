const router = require("express").Router();
const Resistance = require("../models/resistance");
const Cardio = require("../models/cardio.js");

router.get("/api/workouts", (req, res) => {

    Resistance.find({})
        .sort({ day: -1 })
        .then(dbResistance => {
            res.json(dbResistance);
        })
        .catch(err => {
            res.status(400).json(err);
        });

    Cardio.find({})
        .sort({ day: -1 })
        .then(dbCardio => {
            res.json(dbCardio);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;