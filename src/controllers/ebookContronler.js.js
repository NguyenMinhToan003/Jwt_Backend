require("dotenv").config();
import bookService from "../services/bookApiService";

const ebookUpload = async (req, res) => {
  try {
    let rawdata = req.body;
    let urlImage = `${process.env.STORE}${req.file.filename}`;
    rawdata = { ...rawdata, urlImage };
    let status = await bookService.upBook(rawdata);
    return res.status(200).json({
      EM: status.EM,
      EC: status.EC,
      DT: status.DT,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      EC: -1,
      EM: "ERROR from Server",
      DT: "",
    });
  }
};
module.exports = {
  ebookUpload,
};
