const mongoose = require('mongoose');

const asgnSchema = mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});

module.exports.asgn = mongoose.model("assignments", asgnSchema);