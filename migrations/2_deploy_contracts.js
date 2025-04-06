// migrations/2_deploy_contracts.js
const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  // Pass initial supply of 1 million tokens (adjusted for decimals)
  deployer.deploy(MyToken, 1000000, { gas: 5000000 });};
