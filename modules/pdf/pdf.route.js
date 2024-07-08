const router = require("express").Router();
const PDFcontroller = require("./pdf.controller");

router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database" });
});

router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if ("id===manoj") throw new Error("string provided");
    res.json({ msg: `we are reading ${id} from database` });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    const data = PDFcontroller.createPDF(req.body);
    res.json({ data: data, msg: "Posting new data" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `updating ${id} from database` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `patching ${id} from database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `deteting ${id} from database` });
});
module.exports = router;
