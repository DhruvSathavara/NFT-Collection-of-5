// ethers.js comes built in to Hardhat
// ethers.js is really nice library to work with ethereum smart contracts

//importin ethers from hardhat
const { ethers } = require ("hardhat");

async function main(){
// 1. Somehow tell the script that we want to deploy "NFTee.sol" contract
  const contract = await ethers.getContractFactory("NFTee");

// 2. Deploy it.
  const deployedContract = await contract.deploy();
  // 2.1 Wait for deployment to finish
  await deployedContract.deployed();

// 3. Print the address of deployed contract
console.log("NFTee contract address:", deployedContract.address);

}

main()
    .then(()=> process.exit(0))
    .catch((error)=>{
      console.error(error);
      process.exit(1);
    });