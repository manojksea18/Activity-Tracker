const PDFDocument = require("pdfkit");
const fs = require("fs");
// Create a new PDF document
const pdfDoc = new PDFDocument();

// Pipe the PDF into a writable stream (create the PDF file)
pdfDoc.pipe(fs.createWriteStream("Document.pdf"));

// Add some text to the document
pdfDoc.text("This is my!", 100, 100);
// pdfDoc.fillColor("red").fontSize(17).text("PDF", 305, 150);

// Path to the image
// const imagePath = "./node.jpeg";

// Add an image
pdfDoc.image("./image.png", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});

// Finalize the PDF and end the stream
pdfDoc.end();

console.log("PDF generated successfully:");
