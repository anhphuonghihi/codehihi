const mongoose = require('mongoose');

const ClassroomModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên lớp"],
    },
}, {
    timestamps: true,
});

const ClassroomModel = mongoose.model('Classroom', ClassroomModelSchema)

module.exports = ClassroomModel