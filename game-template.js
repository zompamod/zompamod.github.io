/* ===== GET GAME ID FROM FOLDER ===== */
const path = location.pathname.split("/").filter(Boolean);
const gameSlug = path[path.length - 1];

const game = GAMES.find(g => g.id === gameSlug);

if (!game) {
  document.body.innerHTML = "<h2 style='text-align:center'>Game not found</h2>";
  throw new Error("Game not found");
}

/* ===== FILL CONTENT ===== */
document.querySelector(".hero h1").textContent = game.title;
document.querySelector(".hero img").src = game.image;

document.getElementById("gameRating").textContent = game.rating;
document.getElementById("gameDescription").textContent = game.description;

/* ===== SEO ===== */
document.title = game.title + " Mod APK Latest Version | Modnext";

let metaDesc = document.querySelector("meta[name='description']");
if (!metaDesc) {
  metaDesc = document.createElement("meta");
  metaDesc.name = "description";
  document.head.appendChild(metaDesc);
}
metaDesc.content = game.description;

/* ===== DOWNLOAD LINKS ===== */
window.getFinalLink = function () {
  const device = localStorage.getItem("device");
  return device === "android" ? game.android : game.ios;
};
