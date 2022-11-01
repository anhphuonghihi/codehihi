const mongoose = require('mongoose');

const BranchModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên ngành"],
    },
    department: {
        type: mongoose.Schema.ObjectId,
        ref: "Department",
        required: true
    },
}, {
    timestamps: true,
});

const BranchModel = mongoose.model('Branch', BranchModelSchema)

module.exports = BranchModel