const axios = require("axios");
const URL = "http://hangang.dkserver.wo.tc";

module.exports = async (req, res) => {
  const { url } = req;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { data } = await axios.get(`${URL}${url}`);
  return res.json(data);
};
