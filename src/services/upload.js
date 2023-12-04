import multer from "multer";
import path from "path";
const storageEbook = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../assets/img");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
module.exports = { storageEbook };
