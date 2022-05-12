import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "DTCDAO Vote Contract",
      voting_token_address: "0x1fD6d81FeEbdD034D7b03deDfdbC5b85d1584AdE",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570, //1 day

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();