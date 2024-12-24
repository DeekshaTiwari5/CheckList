const express = require("express");
const axios = require("axios");
const rules = require("../config/checklistRules");

const router = express.Router();

router.get("/evaluate", async (req, res) => {
  try {
    // Fetch data from the API
    const { data } = await axios.get(
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"
    );

    // Evaluate each rule
    const results = rules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      status: rule.check(data) ? "Passed" : "Failed",
    }));

    res.json({ results });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

module.exports = router;
