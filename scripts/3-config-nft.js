import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa13F99e64c36aab53A3b3231A811F946C9D3F9Ac");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Crazy DAO Headband",
        description: "This NFT will give you access to CrazyDAO!",
        image: readFileSync("scripts/assets/dao4.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();