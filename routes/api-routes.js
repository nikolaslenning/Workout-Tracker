var path = require("path");
const mongojs = require("mongojs");
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
// function logIt(body) {
//   console.log(body);
//   return body
// }

router.post("/api/workouts", async function (req, res) {
  console.log("body body body body")
  console.log(req.body);
  // var bodyValue = await logIt (body) 
});
// router.post("/api/workouts", async function (req, res) {
//   console.log("body body body body")
//   console.log(req);
//   // var bodyValue = await logIt (body) 
// });

router.put("/api/workouts/:id", (req, res) => {
  let body = req.body
  console.log("req.params")
  // console.log(mongojs.ObjectId(req.params.id))
  // console.log(req.params)
  console.log(req.params)
  
  if (body.type === "cardio") {
    console.log('cardio hit')
    Cardio.updateOne(
      {
        // _id: mongojs.ObjectId(params.id)
      },
      {
        $set: {
          type: body.type,
          name: body.name,
          distance: body.distance,
          duration: body.duration
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
  };
  
  if (body.type === "resistance") {
    console.log('resistance hit')
    Resistance.updateOne(
      {
        // _id: mongojs.ObjectId(params.id)
      },
      {
        $set: {
          type: body.type,
          name: body.name,
          weight: body.weight,
          sets: body.sets,
          reps: body.reps,
          duration: body.duration
        }
      },

      (error, edited) => {
        if (error) {
          // console.log("error");
          // console.log(error);
          res.send(error);
        } else {
          // console.log("edited");
          // console.log(edited);
          res.send(edited);
        }
      }
    );
  };


});


module.exports = router;