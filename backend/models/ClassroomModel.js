const mongoose = require('mongoose');

const ClassroomModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên lớp"],
    }, 
    specialized: {
        type: mongoose.Schema.ObjectId,
        ref: "Specialized",
        required: true
    },
}, {
    timestamps: true,
});

const ClassroomModel = mongoose.model('Classroom', ClassroomModelSchema)

module.exports = ClassroomModel