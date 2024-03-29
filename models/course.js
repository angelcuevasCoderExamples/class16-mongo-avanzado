const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String, 
    description: String,
    difficulty: Number,
    topics:{
        type: [String],
        default: [] 
    },
    profesor: String,
    Students: {
        type: Array,
        default:[]
    }
})

const courseModel = mongoose.model('courses', courseSchema)

module.exports = courseModel; 