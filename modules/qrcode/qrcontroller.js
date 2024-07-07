const { genQr } = require("../../utils/qrcode.js");
const createQr = async (payload) => {
  const { url } = payload;
  const isvalidURL = url.includes("https://");
  if (!isvalidURL) throw new Error("Invalid URl");
  const result = await genQr(url);
  return result;
};

module.exports = { createQr };
