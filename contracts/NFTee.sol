//SPDX-License-Identifier: MIT

// Telling Ethereum which solidity version to use when running this code
pragma solidity ^0.8.4;

// importing ERC721 standard concontract.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTee is ERC721{
    constructor() ERC721("LearnWeb3's NFT","LEARN-NFT"){

        // Minting 5 nfts to myself
        // using _mint function to mint nfts, which take two arguments "address" on which we minting the nft and "tokenId" for token id for particular NFT
        
        _mint(msg.sender,1);
        _mint(msg.sender,2);
        _mint(msg.sender,3);
        _mint(msg.sender,4);
        _mint(msg.sender,5);


    }
}