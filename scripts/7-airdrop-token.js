import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop(
	"0xC6681D686ba53A267CDAb561E19332f2642cF611"
);
const token = sdk.getToken("0x1fD6d81FeEbdD034D7b03deDfdbC5b85d1584AdE");

(async () => {
	try {
		const walletAddresses =
			await editionDrop.history.getAllClaimerAddresses(0);

		if (walletAddresses.length === 0) {
			console.log(
				"No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!"
			);
			process.exit(0);
		}

		const airdropTargets = walletAddresses.map((address) => {
			// Pick a random # between 1000 and 10000.
			const randomAmount = Math.floor(
				Math.random() * (10000 - 1000 + 1) + 1000
			);
			console.log(
				"✅ Going to airdrop",
				randomAmount,
				"tokens to",
				address
			);

			const airdropTarget = {
				toAddress: address,
				amount: randomAmount,
			};

			return airdropTarget;
		});

		console.log("🌈 Starting airdrop...");
		await token.transferBatch(airdropTargets);
		console.log(
			"✅ Successfully airdropped tokens to all the holders of the NFT!"
		);
	} catch (err) {
		console.error("Failed to airdrop tokens", err);
	}
})();
