const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () =>  new Date()
},
  excercises: [
    {
        name : {type: String,
          trim: true},
        type : {type: String, 
          trim: true},
        weight : {type: Number}, 
        sets : {type: Number}, 
        reps : {type: Number},
        duration : {type: Number},
        distance: {type: Number}
    }
  ]
}

);



// attempt at getting workout duration
WorkoutSchema.method.calcTotalDuration = function(){
  return this.totalDuration = this.excercises.reduce((total, exercise) =>{
    return total + exercise.duration;
  }, 0);
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
