const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

app.post("/notify", async (req, res) => {
  const message = req.body.message || "Hello from Serverless Notification System!";

  try {
    await axios.post(SLACK_WEBHOOK, {
      text: message
    });

    res.json({ status: "Notification sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send notification" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
app.get("/", (req, res) => {
    res.send("🚀 Serverless Notifier is LIVE! Send POST requests to /notify");
  });
  