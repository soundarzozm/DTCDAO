import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0x725b08cD95980068aabE4A2Fb328b24B3181Ff16");
const token = sdk.getToken("0x1fD6d81FeEbdD034D7b03deDfdbC5b85d1584AdE");

(async () => {
	try {
		// Give our treasury the power to mint additional token if needed.
		await token.roles.grant("minter", vote.getAddress());

		console.log(
			"Successfully gave vote contract permissions to act on token contract"
		);
	} catch (err) {
		console.error(
			"Failed to grant vote contract permissions on token contract",
			err
		);
		process.exit(1);
	}

	try {
		// Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
		const ownedTokenBalance = await token.balanceOf(
			process.env.WALLET_ADDRESS
		);

		// Grab 90% of the supply that we hold.
		const ownedAmount = ownedTokenBalance.displayValue;
		const percent90 = (Number(ownedAmount) / 100) * 90;

		// Transfer 90% of the supply to our voting contract.
		await token.transfer(vote.getAddress(), percent90);

		console.log(
			"✅ Successfully transferred " +
				percent90 +
				" tokens to vote contract"
		);
	} catch (err) {
		console.error("failed to transfer tokens to vote contract", err);
	}
})();
