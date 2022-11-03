require("dotenv").config(); 

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  // How do we define which test network to deploy contract
  networks: {
    goerli: {
      // Rinkeby's network Alchemy API URL
      url:process.env.ALCHEMY_API_KEY_URL,
      // My metamask account address's privet key
      accounts: [process.env.METAMASK_ACCOUNT_ADDRESS_PRIVET_KEY],
    }

  },
};
