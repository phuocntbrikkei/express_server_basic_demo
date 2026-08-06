import express from 'express';
import multer from 'multer';
import fs from 'fs';
import cloudinary from 'cloudinary'
const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + getTypeFileByMimetype(file.mimetype));
  },
});


const upload = multer({storage: storage });


const uploadMiddleware = upload.fields([
  { name: 'avt', maxCount: 1 },
  { name: 'gallery', maxCount: 8 },
]);


let CLOUDINARY_CLOUD_NAME="sap1zgnn"
let CLOUDINARY_API_KEY="175113823546374"
let CLOUDINARY_API_SECRET="A5qEQPGrVpFUynsopxL9Mr8bX9A"

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

router.post("/upload-avatar", uploadMiddleware, async (req, res) => {
    console.log("đã vào files",  req.files.avt[0].path)
    let targetPath = req.files.avt[0].path

     const result = await cloudinary.v2.uploader.upload(targetPath, {
      folder: "/users/images",
    });

    console.log("result", result)

})

function getTypeFileByMimetype(mimetype) {
    return "." + mimetype.split("/")[mimetype.split("/").length - 1]
}

export default router;