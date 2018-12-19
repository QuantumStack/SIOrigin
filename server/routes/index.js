const express = require('express');
const router = express.Router();

// JSON Validation
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('./../schema/courses.json')
const validate = ajv.compile(schema);

/* GET Request */

// Validate JSON data
router.get('/', (req, res) => {
  
  if (!req.body) return res.send(400);

  console.log(req.body);
  
  var valid = validate(req.body);
  if (!valid) {
    console.log("\nERRORS:\n")
    console.log(validate.errors);
    return res.send(400);
  }

  return res.send("Look to console for details...");

});

module.exports = router;
