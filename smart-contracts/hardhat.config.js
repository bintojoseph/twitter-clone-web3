require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks:{
    goreli:{
      url:'https://eth-goerli.g.alchemy.com/v2/5tEJ8cqNKNJnhiazCoHjiHvtaYPi71ay',
      accounts:["0xCBFc2129396EA3B5EdfBA0eB1773d7dc5a05902D"]
    }
  }
};
