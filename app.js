const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const checklistRoutes = require("./routes/checklist");
const corsOptions = {
  origin: "*", // Allow requests from any origin
  methods: "GET,POST", // Define allowed methods
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static("public"));


app.use("/api/checklist", checklistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
