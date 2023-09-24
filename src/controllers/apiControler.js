import loginRegister from "../services/loginRegisterService";
const handlerSignUp = async (req, res) => {
  try {
    //validtate form
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
    // handler server create user
    var data = await loginRegister.registerUser(req.body);
    return res.status(200).json({
      EM: "complete create",
      EC: "0",
      // EM: "Complete create",
      // EC: 0,
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
};
