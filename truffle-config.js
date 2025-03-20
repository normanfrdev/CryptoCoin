const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 11155111,  // Sepolia network ID
      gas: 5500000,          // Gas limit
      gasPrice: 10000000000, // Gas price (10 gwei, adjust if needed)
    },
  },

  compilers: {
    solc: {
      version: "^0.8.0", // Solidity version
    },
  },
};
