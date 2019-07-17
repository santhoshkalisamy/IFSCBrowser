const express = require("express");
const XLSX = require("xlsx");
const IFSC = require('../../modals/IFSC');

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcomee" });
});

router.post("/xlsx", (req, res) => {
  var workbook = XLSX.read(req.files.file.data);
  var sheet_name_list = workbook.SheetNames;
  console.log(sheet_name_list);
  const ifsc = new IFSC(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])[0]);
  ifsc.save().then((err, res)=> {
      console.log("Saved");
  })
});

module.exports = router;
