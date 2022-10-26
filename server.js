const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ShortUrl = require("./models/shortUrl");
const app = express();
app.use(cors());
const PORT = 6000;
const CONNECTION_STRING =
  "mongodb+srv://ahmetkaymakci:123@cluster0.bmqqvzs.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

app.post("/shortUrls", async (req, res) => {
  const a = await ShortUrl.create({ full: req.body.fullUrl });
  res.send("Oluşturuldu");

  console.log(a);
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  console.log(shortUrl.full);

  res.status(403).redirect(shortUrl.full);
});



app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
  mongoose.connect(CONNECTION_STRING, () => {
    console.log("database connected");
  });
});
