import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x1fD6d81FeEbdD034D7b03deDfdbC5b85d1584AdE");

(async () => {
	try {
		const amount = 69420;
		await token.mint(amount);
		const totalSupply = await token.totalSupply();
		console.log(
			"✅ There now is",
			totalSupply.displayValue,
			"$DTC in circulation"
		);
	} catch (error) {
		console.error("Failed to print money", error);
	}
})();
