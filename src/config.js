"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "The King's Creations! An NFT Project by ALL HAIL THE KING. B2/C1 - Second Batch/First Collection.";
const baseUri = "ipfs://";

const layerConfigurations = [
  {
    growEditionSizeTo: 12000,
    // growEditionSizeTo: 48,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Bottom" },
      { name: "Middle" },
      { name: "Top" },
      { name: "Anthropophobia" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1474,
  height: 1474,
};

const background = {
  generate: true,
  brightness: "20%",
};

const extraMetadata = {
   campaign: "10290 NFTs to crawling the decentralized network. 1470 NFTs to build The King's Office. 210 NFTs to make Sanctuary of The King's World. 30 NFTs to developing and setting The King's Story. In this Universe #3 where The King rules his World. One King that rules them all. One King creates them. One King that mint them all. And in the decentralized world, The King will be live afterlife forever.",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 138240;

const preview = {
  thumbPerRow: 8,
  thumbWidth: 247,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
