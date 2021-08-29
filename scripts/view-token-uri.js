require("dotenv").config()
const API_URL = process.env.API_URL
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
console.log(JSON.stringify(contract.abi))

const contractAddress = "0xE124f3711D83B120498CF74bC81e7DFB830BCE84"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.MY_PRIVATE_KEY;

async function getURI(token_id) {

    const metadataURI = await nftContract.methods.tokenURI(token_id).call();
    const tokenOwner = await nftContract.methods.ownerOf(token_id).call();
    const balance = await nftContract.methods.balanceOf(PUBLIC_KEY).call();

    //return {metadataURI}
    //const tokenuri =  await nftContract.methods.tokenURI(token_id).encodeABI();

    console.log(balance,tokenOwner,metadataURI);

};

getURI(1);



  