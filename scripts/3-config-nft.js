import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
	"0xC6681D686ba53A267CDAb561E19332f2642cF611"
);

(async () => {
	try {
		await editionDrop.createBatch([
			{
				name: "DTC Absek",
				description: "This NFT will give you access to DTCDAO!",
				image: readFileSync(
					"scripts/assets/9c8b16f6-e8af-4c58-8a43-fc4b433a60e5.jpeg"
				),
			},
		]);
		console.log("✅ Successfully created a new NFT in the drop!");
	} catch (error) {
		console.error("failed to create the new NFT", error);
	}
})();
