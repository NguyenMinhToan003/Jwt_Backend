import loginRegister from "../services/loginRegisterService";

const handlerSignUp = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.phone ||
      !req.body.groupId
    ) {
      return res.status(500).json({
        EM: "Missing in Data (bySignup)",
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
    // set cookie
    data &&
      data.DT &&
      data.DT.acess_token &&
      res.cookie("jwt", data.DT.acess_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
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
const handlerLogout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json({
      EM: "Clear Cookie done!",
      EC: 0,
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
module.exports = {
  handlerSignUp,
  handlerLogin,
  handlerLogout,
};
