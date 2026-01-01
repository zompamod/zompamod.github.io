const fs = require("fs");
const path = require("path");

const games = require("./games.js");

const template = fs.readFileSync("game.html", "utf8");

games.forEach(game => {
  const dir = path.join(__dirname, game.id.toLowerCase());

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(
    path.join(dir, "index.html"),
    template
  );

  console.log("Created:", game.id);
});
