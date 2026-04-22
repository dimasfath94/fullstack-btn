exports.success = (res, data, message = "Success") => {
  res.status(200).json({
    status: "success",
    message,
    data,
  });
};

exports.error = (res, message = "Error", status = 500) => {
  res.status(status).json({
    status: "error",
    message,
  });
};