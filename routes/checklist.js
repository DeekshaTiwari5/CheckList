const express = require("express");
const axios = require("axios");
const rules = require("../config/checklistRules");

const router = express.Router();

router.get("/evaluate", async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const { data } = await axios.get(apiUrl);

    const results = rules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      status: rule.check(data) ? "Passed" : "Failed",
    }));

    res.json({ results });
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    res.status(500).json({ message: "Failed to fetch data from API" });
  }
});

module.exports = router;
