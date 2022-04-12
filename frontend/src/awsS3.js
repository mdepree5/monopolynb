//todo "aws-sdk": "^2.800.0",
//todo "multer": "^1.4.2",
// **** ——————————————————————————————————————————————————————————————————————————————————
// environment: process.env.NODE_ENV || 'development',
// port: process.env.PORT || 5005,
// db: {
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   host: process.env.DB_HOST
// },
// jwtConfig: {
//   secret: process.env.JWT_SECRET,
//   expiresIn: process.env.JWT_EXPIRES_IN
//todo  }, aws: {
//todo    bucketName: process.env.AWS_NAME_OF_BUCKET
//todo  }
// **** ——————————————————————————————————————————————————————————————————————————————————

// router.post('/users/current/single-upload',
//   restoreUser,
// // validateImage,
//   singleMulterUpload('image'),
//   asyncHandler(async (req, res) => {
//       const { user } = req;
//       const { title, description, albumId } = req.body;
//       const imageUrl = await singlePublicFileUpload(req.file); //! => Expect String URL

//       const image = await imageServices.createImage(user.id, title, description, albumId, imageUrl); //todo => "imageServices.createImage" here is a backend method
//       //todo => for my purposes, since this will be on frontend, I will simply send stringed data to backend. Yuh!

//       if (image) {
//         res.status(200);
//         res.json({ image });
//       }
//     })
// );

// **** ——————————————————————————————————————————————————————————————————————————————————


const AWS = require("aws-sdk");
const multer = require("multer");


// const { aws } = require('./config')
const NAME_OF_BUCKET = process.env.REACT_APP_AWS_NAME_OF_BUCKET

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
// --------------------------- Public UPLOAD ------------------------

const singlePublicFileUpload = async (file) => {
  const { originalname, mimetype, buffer } = await file;
  const path = require("path");

  const Key = new Date().getTime().toString() + path.extname(originalname);
  const result = await s3.upload({ Bucket: NAME_OF_BUCKET, Key, Body: buffer, ACL: "public-read" }).promise();

  return result.Location; //! => expect a string URL???
};

const multiplePublicFileUpload = async (files) => await Promise.all(files.map((file) => singlePublicFileUpload(file)));

// --------------------------- Prviate UPLOAD ------------------------

const singlePrivateFileUpload = async (file) => {
  const { originalname, mimetype, buffer } = await file;
  const path = require("path");

  const Key = new Date().getTime().toString() + path.extname(originalname);
  const result = await s3.upload({ Bucket: NAME_OF_BUCKET, Key, Body: buffer }).promise();

  return result.Key;
};

const multiplePrivateFileUpload = async (files) => await Promise.all(files.map((file) => singlePrivateFileUpload(file)));

const retrievePrivateFile = key => key ? s3.getSignedUrl("getObject", { Bucket: NAME_OF_BUCKET, Key: key }) : key;

// --------------------------- Storage ------------------------

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const singleMulterUpload = nameOfKey => multer({storage}).single(nameOfKey);
const multipleMulterUpload = nameOfKey => multer({storage}).array(nameOfKey);

module.exports = {
  s3,
  singlePublicFileUpload,
  multiplePublicFileUpload,
  singlePrivateFileUpload,
  multiplePrivateFileUpload,
  retrievePrivateFile,
  singleMulterUpload,
  multipleMulterUpload,
};
