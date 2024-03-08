require("dotenv").config();
import bookService from "../services/bookApiService";

const ebookUpload = async (req, res) => {
  try {
    let rawdata = req.body;
    let urlImage = `${process.env.STORE}${req.file.filename}`;
    console.log(urlImage);
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
const ebookRead = async (req, res) => {
  try {
    let status = await bookService.readAll(req.query.page, req.query.limit);
    return res.status(200).json({
      EM: status.EM,
      EC: status.EC,
      DT: status.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "ERROR from Server",
      DT: "",
    });
  }
};
const ebookDetail = async (req, res) => {
  try {
    let status = await bookService.ebookDetail(req.query.id);
    return res.status(200).json({
      EM: status.EM,
      EC: status.EC,
      DT: status.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EC: -1,
      EM: "ERROR from Server",
      DT: "",
    });
  }
};
const ebookSearch = async (req, res) => {
  try {
    let { key, offset, limit } = req.body;
    let data = await bookService.ebookSearch(key, offset, limit);
    return res.status(200).json({
      EC: data.EC,
      EM: data.EM,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = {
  ebookUpload,
  ebookRead,
  ebookDetail,
  ebookSearch,
};
