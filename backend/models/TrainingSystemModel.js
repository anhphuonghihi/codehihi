const mongoose = require('mongoose');

const TrainingSystemModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên hệ đào tạo"],
    },
    department: {
        type: mongoose.Schema.ObjectId,
        ref: "Department",
        required: true
    },
}, {
    timestamps: true,
});

const TrainingSystemModel = mongoose.model('TrainingSystem', TrainingSystemModelSchema)

module.exports = TrainingSystemModel