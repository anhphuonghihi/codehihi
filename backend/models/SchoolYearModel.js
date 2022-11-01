const mongoose = require('mongoose');

const SchoolYearModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên niên khóa"],
    },
}, {
    timestamps: true,
});

const SchoolYearModel = mongoose.model('SchoolYear', SchoolYearModelSchema)

module.exports = SchoolYearModel