const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",      // Localhost (default for Ganache)
      port: 8545,             // Port for Ganache (default is 8545)
      network_id: "*",        // Match any network id (works for Ganache)
      gas: 6721975,           // Gas limit (default for Ganache)
      gasPrice: 2000000000,   // Gas price (1 Gwei)
    },
  },

  compilers: {
    solc: {
      version: "0.8.17",  // Specify the Solidity version you want to use
    },
  },
};
