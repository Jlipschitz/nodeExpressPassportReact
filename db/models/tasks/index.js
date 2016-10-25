const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Title'
    },
    createdDate: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Tasks', TasksSchema);