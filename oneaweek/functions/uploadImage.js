const cloudinary = require("cloudinary");
var cloudinaryStorage = require("multer-storage-cloudinary");
var multer = require("multer");
var imageUpload = multer({ dest: "acts/" });

/** configure cloudinary */
cloudinary.config({
  cloud_name: "doot4gl1y",
  api_key: "415921434347913",
  api_secret: "d5N1p6wNUpq1WEPJ_fOD4rg_3-k"
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "acts",
  allowedFormats: ["jpg", "png", "mp4", "mov"],
  filename: function(req, file, cb) {
    cb(undefined, `${new Date()}-${generateName()}`);
  }
});

// Used to gen names
function generateName() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

const parser = multer({ storage: storage });

exports.handler = (event, context, callback) => {
  // "event" has information about the path, body, headers, etc. of the request
  console.log("event", event);
  // "context" has information about the lambda environment and user details
  console.log("context", context);
  // The "callback" ends the execution of the function and returns a response back to the caller
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: "⊂◉‿◉つ"
    })
  });
};
