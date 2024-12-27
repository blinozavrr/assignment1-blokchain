# Assignment 1: Smart Contract Deployment and Testing

## Description
This project involves developing, deploying, and testing a smart contract using Solidity. The contract includes the following functionalities:
- Accept Ether.
- Check its balance.
- Automatically transfer received Ether to a specific address.
- Allow the owner to withdraw all funds.

## Features
- **Receive Ether:** Only accepts Ether from a specific address.
- **Automatic Transfer:** Forwards received Ether to a designated address.
- **Balance Check:** `getBalance` function shows the contract's current balance.
- **Withdrawal:** The owner can withdraw all funds using the `withdraw` function.

## Deployment Steps
### 1. Set Up Environment
- **Ganache:** A local blockchain for testing.
- **MetaMask:** To manage test accounts and connect to Ganache.
- **Remix IDE:** For writing and deploying the contract.

### 2. Connect MetaMask to Ganache
1. In MetaMask, add a new network:
   - **RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** `1337`
2. Import an account from Ganache using its private key.

### 3. Deploy the Contract
1. Open Remix IDE.
2. Create a new file `Assignment1.sol` and paste the smart contract code.
3. Compile the contract with Solidity version `^0.8.0`.
4. Deploy the contract:
   - Use the **Deploy & Run Transactions** tab.
   - Select **Injected Web3** as the environment.
   - Confirm the transaction in MetaMask.

## Testing the Contract
### 1. Check Balance
Call the `getBalance` function to check the balance. It should initially be `0`.

### 2. Send Ether
1. Send `1 ETH` to the contract:
   - In Remix, set `1` in the **Value** field and call the `receive` function.
2. Verify that the recipient's account balance increased by `1 ETH`.

### 3. Withdraw Funds
1. Call the `withdraw` function as the contract owner.
2. Confirm that all funds were transferred to the owner's account.
