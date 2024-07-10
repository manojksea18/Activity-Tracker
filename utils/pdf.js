const PDFDocument = require("pdfkit");
const fs = require("fs");
const { Module } = require("module");

const pdfDoc = ({ text, imagePath }) => {
  const pdfDoc = new PDFDocument();
  pdfDoc.pipe(fs.createWriteStream("Document.pdf"));
  pdfDoc.image("imagePath", {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  pdfDoc.end();
};
// Create a new PDF document

// Pipe the PDF into a writable stream (create the PDF file)

// Add some text to the document
// pdfDoc.text("This is my!", 100, 100);
// pdfDoc.fillColor("red").fontSize(17).text("PDF", 305, 150);

// Path to the image
// const imagePath = "./node.jpeg";

// Add an image

// Finalize the PDF and end the stream

console.log("PDF generated successfully:");
module.exports = pdfDoc;
