const Branch = require("../models/BranchModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Branch --Admin
exports.createBranch = catchAsyncErrors(async (req, res, next) => {

    const branch = await Branch.create(req.body);

    res.status(201).json({
        success: true,
        branch,
    });
});

// Get All Branch
exports.getAllBranchs = catchAsyncErrors(async (req, res, next) => {
    const branchs = await Branch.find();

    res.status(200).json({
        success: true,
        branchs,
    });
});

// Update Branch ---Admin
exports.updateBranch = catchAsyncErrors(async (req, res, next) => {
    let branch = await Branch.findById(req.params.id);
    if (!branch) {
        return next(new ErrorHandler("Không tìm thấy ngành ", 404));
    }

    branch = await Branch.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        branch,
    });
});

// delete Branch
exports.deleteBranch = catchAsyncErrors(async (req, res, next) => {
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
        return next(new ErrorHandler("Không tìm thấy ngành ", 404));
    }
    await branch.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa ngành thành công",
    });
});

// single Branch details
exports.getBranch = catchAsyncErrors(async (req, res, next) => {
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
        return next(new ErrorHandler("Không tìm thấy ngành ", 404));
    }
    res.status(200).json({
        success: true,
        branch,
    });
});

