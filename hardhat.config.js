
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
//const MY_PRIVATE_KEY = "0xad635055f577d1955baedd6d7f5780c61df828dfe808fbc14faf506bcd9ee372";
//const MY_PRIVATE_KEY1 = "0xbc62a48d64a3f112c26803028ca230d70a23015c8a65f8489ae55d03876dedf4";
//const MY_PRIVATE_KEY2 = "0x3f1a8cd666d8971ef070a47bed5b44e5952a8f4ef13b1eafb055aafdf7764b1f";

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { MY_PRIVATE_KEY,MY_PRIVATE_KEY1,MY_PRIVATE_KEY2 } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    benchnet: {
      url: `https://benchnet.dappsuni.com/`,
      accounts: [`${MY_PRIVATE_KEY}`,`${MY_PRIVATE_KEY1}`,`${MY_PRIVATE_KEY2}`],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.6.7",
        settings: {},
      },
    ],
  },
};