const { pdfDoc } = require("../../utils/pdf");
const createPDF = async (payload) => {
  const { image, text } = payload;

  const isvalidimg = typeof image === "string" && image.includes("image.png");
  if (!isvalidimg) {
    throw new Error("Invalid Image");
  }
  try {
    const result = await pdfDoc(image, text);
    return result;
  } catch (e) {
    throw new Error(`Failed to create PDF: ${error.message}`);
  }
};
module.exports = { createPDF };
