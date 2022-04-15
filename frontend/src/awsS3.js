// **** ——————————————————————————————————————————————————————————————————————————————————
// singleMulterUpload('image'),
// const imageUrl = await singlePublicFileUpload(req.file); //! => Expect String URL
//todo => for my purposes, since this will be on frontend, I will simply send stringed data to backend.
// **** ——————————————————————————————————————————————————————————————————————————————————

const AWS = require("aws-sdk");
const multer = require("multer");

// const { aws } = require('./config')
// const config = {
  // apiVersion: "2010-12-01",
//   apiVersion: "2006-03-01",
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID, // hardcoding credentials is a bad practice
//   accessSecretKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY, // please use env vars instead
//   region: "us-east-1"
// }
// AWS.config.update(config)?

// AWS.config.credentials = {
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//   accessSecretKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
// }

// console.log(`%c AWS.config:`, `color:yellow`, AWS.config.credentials)

const NAME_OF_BUCKET = process.env.REACT_APP_AWS_NAME_OF_BUCKET

// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const s3 = new AWS.S3();
// --------------------------- Public UPLOAD ------------------------

const singlePublicFileUpload = async (file) => {
  const { originalname, buffer } = await file;
  const path = require("path");

  const Key = new Date().getTime().toString() + path.extname(originalname);
  const result = await s3.upload({ Bucket: NAME_OF_BUCKET, Key, Body: file, ACL: "public-read" }).promise();

  console.log(`%c Key:`, `color:yellow`, Key)
  console.log(`%c buffer:`, `color:yellow`, buffer)
  console.log(`%c result:`, `color:yellow`, result)

  return result.Location; //! => expect a string URL???
};

const multiplePublicFileUpload = async (files) => await Promise.all(files.map((file) => singlePublicFileUpload(file)));

// --------------------------- Prviate UPLOAD ------------------------

const singlePrivateFileUpload = async (file) => {
  const { originalname, buffer } = await file;
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
