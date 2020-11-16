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
  console.log("req.params")
  // console.log(mongojs.ObjectId(req.params.id))
  // console.log(req.params)
  console.log(req.params)
  console.log(req.body)

    Workout.findByIdAndUpdate(
    
      req.params.id,
    {
      $push: {
        exercises: body
      }
    },

    (error, edited) => {
      if (error) {
        // console.log(error);
        res.send(error);
      } else {
        // console.log(edited);
        res.send(edited);
      }
    }
  );
});


module.exports = router;