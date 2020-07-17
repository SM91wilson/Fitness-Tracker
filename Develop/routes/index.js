const router = require("express").Router();
const path = require("path");

// database
const Workout = require("../models/Workout.js");

// api routes
router.post("/api/workouts", (req, res) => {
    Workout.create()
        console.log(req)
        // gives a post 500 internal error, response says cant get then of undefined
        .then( workout => {
            console.log(workout);
            res.json(workout)})
        .catch( e => {res.json(e)})
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {exercises: body}},
        {new: true})
    .then(workout => {
        res.json(workout);})
    .catch(e => {
        res.json(e);});
});

router.get("/api/workouts", (req, res) => {
    // res.json all the workouts
    Workout.find()
        .then( workout => {
            console.log(workout) 
            res.json(workout)})
        .catch( e => {res.json(e)})
});

router.delete("/api/workouts/:id", (req ,res) => {
    Workout.findByIdAndDelete(req.params.id).then( workout => {
        res.json(workout);
    }).catch(e => {res.json(e);})
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7).then(workout => {
        console.log(workout)
        res.json(workout)
    }).catch(e => {res.json(e)});
});


// html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));   
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));   
});
module.exports = router;