const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default:  new Date()
},
  excercises: [
    {
        name : String,
        type : String, 
        weight : Number, 
        sets : Number, 
        reps : Number,
        duration : Number,
        distance: Number
    }
  ]
});


WorkoutSchema.method.calcTotalDuration = function(){
  return this.totalDuration = this.excercises.reduce((total, exercise) =>{
    return total + exercise.duration;
  }, 0);
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
