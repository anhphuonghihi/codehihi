const Department = require("../models/DepartmentModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Department --Admin
exports.createDepartment = catchAsyncErrors(async (req, res, next) => {

    const department = await Department.create(req.body);

    res.status(201).json({
        success: true,
        department,
    });
});

// Get All Department
exports.getAllDepartments = catchAsyncErrors(async (req, res, next) => {
    const departments = await Department.find();

    res.status(200).json({
        success: true,
        departments,
    });
});

// Update Department ---Admin
exports.updateDepartment = catchAsyncErrors(async (req, res, next) => {
    let department = await Department.findById(req.params.id);
    if (!department) {
        return next(new ErrorHandler("Không tìm thấy khoa ", 404));
    }

    department = await Department.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        department,
    });
});

// delete Department
exports.deleteDepartment = catchAsyncErrors(async (req, res, next) => {
    const department = await Department.findById(req.params.id);
    if (!department) {
        return next(new ErrorHandler("Không tìm thấy khoa ", 404));
    }
    await department.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa khoa thành công",
    });
});

// single Department details
exports.getDepartment = catchAsyncErrors(async (req, res, next) => {
    const department = await Department.findById(req.params.id);
    if (!department) {
        return next(new ErrorHandler("Không tìm thấy khoa ", 404));
    }
    res.status(200).json({
        success: true,
        department,
    });
});

