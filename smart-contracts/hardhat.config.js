require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks:{
    goreli:{
      url:'https://eth-goerli.g.alchemy.com/v2/5tEJ8cqNKNJnhiazCoHjiHvtaYPi71ay',
      accounts:["64babd1c03988c50e3bc636ef456c0bc61e9f0679a2f1d767ba87a9c911496a5"]
    }
  }
};
