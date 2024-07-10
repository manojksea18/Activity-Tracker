const { pdfDoc } = require("../../utils/pdf");

const createPDF = async (payload) => {
  const { imagePath, text } = payload;

  //Validate text input
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("Invalid text");
  }
  //validate imagePath in
  if (typeof imagePath !== "string" || imagePath.trim() === "") {
    throw new Error("Invalid image path");
  }
  const isvalidimg = imagePath.includes("image.png");
  const result = await createPDF(imagePath, text);
  return result;
};

module.exports = { createPDF };
