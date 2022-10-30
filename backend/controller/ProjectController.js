const Project = require("../models/ProjectModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

// create Project --Admin
exports.createProject = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "projects",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Project.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Project (Admin)
exports.getAdminProjects = catchAsyncErrors(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    projects,
  });
});

// get All Projects
exports.getAllProjects = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const projectsCount = await Project.countDocuments();

  const feature = new Features(Project.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const projects = await feature.query;
  res.status(200).json({
    success: true,
    projects,
    projectsCount,
    resultPerPage,
  });
});

// Update Project ---Admin
exports.updateProject = catchAsyncErrors(async (req, res, next) => {
  let product = await Project.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Không tìm thấy đồ án ", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "projects",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  product = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete Project
exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
  const product = await Project.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Không tìm thấy đồ án ", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < product.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      product.images[i].public_id
    );
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Đã xóa sđồ án thành công",
  });
});

// single Project details
exports.getSingleProject = catchAsyncErrors(async (req, res, next) => {
  const product = await Project.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Không tìm thấy đồ án ", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Review or Update the review
exports.createProjectReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Project.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All reviews of a single product
exports.getSingleProjectReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Project.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Không tìm thấy đồ án ", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review --Admin
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Project.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Không tìm thấy đồ án ", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Project.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// 