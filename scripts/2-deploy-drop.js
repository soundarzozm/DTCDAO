import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
	try {
		const editionDropAddress = await sdk.deployer.deployEditionDrop({
			name: "DTCDAO Membership",
			description: "A DAO for DTC boys.",
			image: readFileSync("scripts/assets/9c8b16f6-e8af-4c58-8a43-fc4b433a60e5.jpeg"),
			primary_sale_recipient: AddressZero,
		});

		const editionDrop = sdk.getEditionDrop(editionDropAddress);
		const metadata = await editionDrop.metadata.get();

		console.log(
			"✅ Successfully deployed editionDrop contract, address:",
			editionDropAddress
		);
		console.log("✅ editionDrop metadata:", metadata);
	} catch (error) {
		console.log("failed to deploy editionDrop contract", error);
	}
})();
