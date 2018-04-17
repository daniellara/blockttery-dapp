import web3 from "./web3";

const address = "0x7a4D9C178d3aB7bb40cE091fB5EaB090a3B9C601";
const abi = [
  {
    constant: true,
    inputs: [],
    name: "getActualDrawSize",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_size", type: "uint16" }],
    name: "modifySize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getPlayers",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "size",
    outputs: [{ name: "", type: "uint16" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "price",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_price", type: "uint256" }],
    name: "modifyPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "winner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [{ name: "", type: "address" }],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { name: "_size", type: "uint16" },
      { name: "_price", type: "uint256" }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];

export default new web3.eth.Contract(abi, address);
