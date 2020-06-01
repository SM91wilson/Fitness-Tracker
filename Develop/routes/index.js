const router = require("express").Router();
const path = require("path");

// database
const db = require("../models");

// api routes
router.get("/api/workouts", (req, res) => {
    // res.json all the workouts
    db.Workouts.find()
        .then( data => {res.json(data)})
        .catch( e => {res.json(e)})
});

router.post("/api/workouts", (req, res) => {
    workout = new db.Workouts();
    workout.calcTotalDuration();

    db.Workouts.create(workout)
        .then( data => {res.json(data)})
        .catch( e => {res.json(e)})
});

router.put("/api/workouts:id", (req, res) => {
    // push new exercise

    // update workout by id (db.workout.find({_id = Mongoose.type.ObjectId(req.
       
        // with req.body data 
        // $set:{$push:{excercis: req.body}}
        // respond with db response
});

// html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));   
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));   
});
module.exports = router;