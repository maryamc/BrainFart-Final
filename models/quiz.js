const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// creating table for quiz
const QuizSchema = new Schema({
title: {
    type: String,
    required: true,
    trim: true
},
subject: {
    type: String,
    required: true,
    trim: true
},
questions: {
    type: Array,
    required: true,
    trim: true
},
correctAnswer: {
    type: Array,
    required: true,
    trim: true
},
questionAnswers: {
        type: Array,
        required: true,
        trim: true
},
createdBy: {
    type: String,
    require: true,
    trim: true
},
previousScore: {
    users: {
        id: {
            type: String,
            trim: true
        },
        answers: {
            type: Array,
            trim: true
        }
    }
}

});

const quiz = mongoose.model("quiz", QuizSchema);

module.exports = quiz;