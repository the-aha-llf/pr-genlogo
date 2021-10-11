"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require("fs");

console.log(path.join(basePath, "/src/config.js"));
const { baseUri } = require(path.join(basePath, "/src/config.js"));
const nftName = `ALLHAILNFT.B2C1`;

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
  item.image = `${baseUri}/${nftName}-${item.edition}.png`;
  fs.writeFileSync(
    `${basePath}/build/json/${nftName}-${item.edition}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated baseUri for images to ===> ${baseUri}`);