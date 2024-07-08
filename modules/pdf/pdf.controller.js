const { pdfDoc } = require("../../utils/pdf");
const createPDF = async (payload) => {
  const { image, text } = payload;
  const isvalidimg = image.includes("image.png");
  if (!isvalidimg) throw new Error("Invalid Image");
  const result = await pdfDoc(image);
  return result;
};
module.exports = { createPDF };
