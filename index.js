// require start
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// require end

// middle wares start
app.use(cors());
app.use(express.json());
// middle wares end

// initial setup start
app.get("/", (req, res) => {
  res.send("stickman technology server running");
});
app.listen(port, () => {
  console.log(`stickman technology server running ${port}`);
});
// initial setup end
