const router = require("express").Router();
const { json } = require("express");
const Workout = require("../Models/workout.js");

module.exports = router;

//create new workout
router.post("api/workouts", ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//add exercises


router.get("api/workouts",(req, res) =>{
    Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
        })
    .catch(err => {
        res.status(400).json(err);
    });
} );