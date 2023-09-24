import loginRegister from "../services/loginRegisterService";

const handlerSignUp = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.phone ||
      !req.body.major
    ) {
      return res.status(200).json({
        EM: "Missing required server",
        EC: 1,
        DT: "",
      });
    }
    var data = await loginRegister.registerUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch {
    return res.status(500).json({
      EM: "ERROR from sever",
      EC: -1,
      DT: "",
    });
  }
};
const handlerLogin = async (req, res) => {
  try {
    let data = await loginRegister.LoginUser(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
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
  handlerSignUp,
  handlerLogin,
};
