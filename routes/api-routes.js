const mongojs = require("mongojs");
const router = require("express").Router();
const Workout = require("../models/workout");


router.get("/api/workouts", (req, res) => {

  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });

});

router.get("/api/workouts/range", (req, res) => {
  var d = new Date();
  d.setDate(d.getDate() - 7);  

  Workout.find({ day: { "$gte": d } }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/api/workouts", async function (req, res) {
  
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  let body = req.body

  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: body
      }
    },
    (error, edited) => {
      if (error) {
        res.send(error);
      } else {
        res.send(edited);
      }
    }
  );
});

module.exports = router;