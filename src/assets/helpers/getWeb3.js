import Web3 from "web3";

const url = 'http://localhost:7545';
const web3 = new Web3();
const provider = new web3.providers.HttpProvider(url);
const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "name": "_deleteAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_company_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_manager_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "role",
                "type": "string"
            }
        ],
        "name": "addManager",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idProgram",
                "type": "string"
            }
        ],
        "name": "approveProgram",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idReport",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_manager",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_bounty",
                "type": "uint256"
            }
        ],
        "name": "approveReport",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_idCompany",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_balance",
                "type": "uint256"
            }
        ],
        "name": "CompanyCreated",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "createAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_balance",
                "type": "uint256"
            }
        ],
        "name": "createCompany",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idCompany",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_manager",
                "type": "string"
            }
        ],
        "name": "createProgram",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idProgram",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "createReport",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_idCompany",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_idManager",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "role",
                "type": "string"
            }
        ],
        "name": "ManagerAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "caller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "adminCreated",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idReport",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_manager",
                "type": "string"
            }
        ],
        "name": "paid",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_idReport",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_manager",
                "type": "string"
            }
        ],
        "name": "reportState",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "admins",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "companies",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "hunters",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "managers",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "role",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "programs",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "reports",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "bounty_win",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "is_paid",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "assignedToManager",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "assignedToAdmin",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "weiToEth",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
// eslint-disable-next-line no-unused-vars
const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
const helper = {

    initializeEthereumConnection() {
        if (web3 != null && web3.isConnected() == true) {
            return true;
        }
        web3.setProvider(provider);

        window.ethereum.on('accountsChanged',async function () {
            const accounts = await window.ethereum.enable();
            web3.eth.defaultAccount = accounts[0];
            console.log(web3.eth.defaultAccount)
        })
        //var balance = this.web3.eth.getBalance(coinbase);
        //console.log(balance.toString(10));
    },

    async loginMetamask() {

        await window.ethereum.request({method: 'eth_requestAccounts'});

    },
    async signMetamask() {
        let a  =  await window.ethereum.request({
            method: 'personal_sign',//personal_sign
            params: [ web3.fromUtf8("Welcome To Dbounty !"),web3.eth.defaultAccount],
            from:web3.eth.defaultAccount
        })
        return a;
    },
     initializeDbountyContract(){
    let contract = web3.eth.contract(abi)
    return contract.at(contractAddress);
   },
   getAccounts(){
        return web3.eth.accounts
   },
    initializeContract() {
        let source = "" +
            "pragma solidity ^0.4.6;" +
            "contract test {\n" +
            "   function multiply(uint a) constant returns(uint d) {\n" +
            "       return a * 7;\n" +
            "   }\n" +
            "}\n";

        let compiled = web3.eth.compile.solidity(source);
        let code = compiled.code;
        console.log(code)
        // contract json abi, this is autogenerated using solc CLI
        let contract = web3.eth.contract(JSON.parse(compiled.info.abiDefinition));

       web3.eth.contract(compiled.info.abiDefinition).new({data: code}, function (err, contract) {
            if(err) {
                console.error(err);
                return;

                // callback fires twice, we only want the second call when the contract is deployed
            } else if(contract.address){

                console.log('address: ' + contract.address);
                console.log('status Mined!');
                console.log('call visible');
            }
        });
        //call contract
        let res = contract.multiply(34);
        console.log("res = ",res.toString(10));

    },
}
export {helper, web3}
