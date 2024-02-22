import cartService from "../services/cartServices";
const cartLoad = async (req, res) => {
  try {
    let list = req.body;
    let data = await cartService.fetchListCart(list);
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
  cartLoad,
};
