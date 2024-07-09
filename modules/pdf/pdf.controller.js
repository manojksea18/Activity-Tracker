const { pdfDoc } = require("../../utils/pdf");
const createPDF = async (payload) => {
  const { image, text } = payload;

  if (typeof image !== "string") {
    throw new Error("Invalid image");
  }
  const isvalidimg = image.includes("./image.png");
  if (!isvalidimg) {
    throw new Error("Invalid Image");
  }

  const result = await pdfDoc(image, text);
  return result;
};
module.exports = { createPDF };
