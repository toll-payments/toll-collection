const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "highwayId",
    "type": "uint256"
   }
  ],
  "name": "getToll",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "address",
      "name": "collectedBy",
      "type": "address"
     },
     {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
     }
    ],
    "internalType": "struct tollCollection.TollData",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "highwayId",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_amount",
    "type": "uint256"
   }
  ],
  "name": "payTollAmount",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "tolls",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "collectedBy",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xb0143da17423b67A1Cb9259cbeD41C24A42e201D"

export const contract = new ethers.Contract(address, abi, signer)
