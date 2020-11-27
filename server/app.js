const path = require("path");
const express = require("express");
const logger = require("morgan");

const app = express();

// Static directories
app.get("env") === "production"
	? app.use(logger("combined"))
	: app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.static(path.join(__dirname, "../public")));

// Serves React app to all paths
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = { app };
