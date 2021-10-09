const description =
  "The King's Creations! An NFT Project by ALL HAIL THE KING. B2/C1 - Second Batch/First Collection.";
const baseUri = "https://straight-line.org/thekingscreations/b2/c1";

const layersOrder = [
  { name: "Backgrounds" },
  { name: "Flat Scribbles" },
  // { name: "Round Scribbles" },
  // { name: "Slash Scribbles" },
  { name: "Masterpiece Arts" },
];

const format = {
  width: 747,
  height: 747,
};

const background = {
  generate: true,
  brightness: "20%",
};

const uniqueDnaTorrance = 10000;

const editionSize = 47;

module.exports = {
  layersOrder,
  format,
  editionSize,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
};
