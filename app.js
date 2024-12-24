const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const checklistRoutes = require("./routes/checklist");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/checklist", checklistRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
