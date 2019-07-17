const express = require("express");
const XLSX = require("xlsx");
const IFSC = require('../../modals/IFSC');

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcomee"
  });
});

router.post("/xlsx", async (req, res) => {
  var workbook = XLSX.read(req.files.file.data);
  var sheet_name_list = workbook.SheetNames;
  var sheetCount = 0;
  var entryCount = 0;
  for (var i = 0; i < sheet_name_list.length; i++) {
    var sheet = sheet_name_list[i];
    console.log(sheet);
    sheetCount++;
    var entries = workbook.Sheets[sheet];
    var entriesArray = XLSX.utils.sheet_to_json(entries);
    console.log(entriesArray.length);
    for (var j = 0; j < entriesArray.length; j++) {
      console.log(j);
      var entry = entriesArray[j];
      console.log(entry);
      entryCount++;
      const ifsc = new IFSC(entry);
      await ifsc.save();
      console.log("Saved" + " Sheet " + sheetCount + " entry " + entryCount);
    }
  }
});

module.exports = router;