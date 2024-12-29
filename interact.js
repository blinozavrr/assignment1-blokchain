const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const contractAddress = '0xC3A31dd849Ad69df2308B99A7481e1441422d7Ed';
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

const contract = new web3.eth.Contract(abi, contractAddress);

async function getContractBalance() {
    const balance = await contract.methods.getBalance().call();
    console.log(`Contract Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
}

getContractBalance();
