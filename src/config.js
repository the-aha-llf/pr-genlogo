const description =
  "The King's Creations! An NFT Project by ALL HAIL THE KING. B2/C1 - Second Batch/First Collection.";
const baseUri = "https://straight-line.org/thekingscreations/b2/c1";

const layersOrder = [
  { name: "Backgrounds" },
  // { name: "Mixed Flats" },
  // { name: "Mixed Rounds" },
  // { name: "Mixed Slashes" },
  { name: "Flat Scribbles" },
  { name: "Round Scribbles" },
  { name: "Slash Scribbles" },
  { name: "Masterpiece Arts" },
];

const format = {
  width: 2474,
  height: 2474,
};

const background = {
  generate: true,
  brightness: "20%",
};

const uniqueDnaTorrance = 12000;

const editionSize = 10;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};
