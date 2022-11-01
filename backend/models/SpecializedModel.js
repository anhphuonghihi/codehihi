const mongoose = require('mongoose');

const SpecializedModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên chuyên ngành"],
    },
}, {
    timestamps: true,
});

const SpecializedModel = mongoose.model('Specialized', SpecializedModelSchema)

module.exports = SpecializedModel