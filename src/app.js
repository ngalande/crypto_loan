const Web3 = require('web3');
//const rpcURL = 'https://celo-mainnet.infura.io/v3/85e23c2b0c8f46e280d9d11d3b7f3b0c'
//const rpcURL = 'https://mainnet.infura.io/v3/85e23c2b0c8f46e280d9d11d3b7f3b0c'
const rpcURL = 'https://palm-testnet.infura.io/v3/85e23c2b0c8f46e280d9d11d3b7f3b0c'
const web3 = new Web3(rpcURL)
//const address = '0xD962a2fAF202bbdB0966C5fFE7883DA94289290d'
const address ='0x90e63c3d53E0Ea496845b7a03ec7548B70014A91'


//----------------------------------------------CREATE ACCOUNT---------------------------------------------------------
function createAccount(){

    account = web3.eth.accounts.create();
    
    //console.log(`address: ${account.address}`);
    //console.log(`privateKey: ${account.privateKey}`);
    return account
}
//account = createAccount()
//----------------------------------------------------------------------------------------------------------------


//------------------------------------------------GET BALANCE-----------------------------------------
function getBalance(){

    var balance=[]
    web3.eth.getBalance(address, (err, wei) => {
        bal = web3.utils.fromWei(wei, 'ether')
        console.log(bal, 'Ether')
        balance.push(bal)
        //return balance
    })
    return balance
}
//----------------------------------------------------------------------------------------------------------------

//---------------------------------------------------SEND FUNDS FROM LENDER TO MASTER WALLET--------------------------------------------
async function SendFundsToMaster(){

// 2. Create account variables
const accountFromLender = {
    privateKey: '0xc3c3bc6b69dfae47abf6ba473ea23d0cb3ac3a44c56445af8ec2138408be833c',
    address: '0xD962a2fAF202bbdB0966C5fFE7883DA94289290d',
  };
  const addressToMaster = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91'; // Change addressTo
  
  // 3. Create send function
  const send = async () => {
    console.log(`Attempting to send transaction from ${accountFromLender.address} to ${addressToMaster}`);
  
    // 4. Sign tx with PK
    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        gas: 21000,
        to: addressToMaster,
        value: web3.utils.toWei('1', 'ether'),
      },
      accountFromLender.privateKey
    );
  
    // 5. Send tx and wait for receipt
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
  };
  
  // 6. Call send function
  send();
  
}
//----------------------------------------------------------------------------------------------------------------


//---------------------------------------------------SEND FUNDS FROM MASTER TO BORROWER WALLET--------------------------------------------
async function SendFundsToBorrower(){

    // 2. Create account variables
    const accountFromMaster = {
        privateKey: '0xc3c3bc6b69dfae47abf6ba473ea23d0cb3ac3a44c56445af8ec2138408be833c',
        address: '0xD962a2fAF202bbdB0966C5fFE7883DA94289290d',
      };
      const addressToBorrower = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91'; // Change addressTo
      
      // 3. Create send function
      const send = async () => {
        console.log(`Attempting to send transaction from ${accountFromMaster.address} to ${addressToBorrower}`);
      
        // 4. Sign tx with PK
        const createTransaction = await web3.eth.accounts.signTransaction(
          {
            gas: 21000,
            to: addressToBorrower,
            value: web3.utils.toWei('1', 'ether'),
          },
          accountFromMaster.privateKey
        );
      
        // 5. Send tx and wait for receipt
        const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
        console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
      };
      
      // 6. Call send function
      send();
      
    }
    //----------------------------------------------------------------------------------------------------------------
    
//---------------------------------------------------SEND FUNDS FROM BORROWER TO LENDER WALLET--------------------------------------------
async function SendFundsToMaster(){

    // 2. Create account variables
    const accountFromBorrower = {
        privateKey: '0xc3c3bc6b69dfae47abf6ba473ea23d0cb3ac3a44c56445af8ec2138408be833c',
        address: '0xD962a2fAF202bbdB0966C5fFE7883DA94289290d',
      };
      const addressToLender = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91'; // Change addressTo
      
      // 3. Create send function
      const send = async () => {
        console.log(`Attempting to send transaction from ${accountFromBorrower.address} to ${addressToLender}`);
      
        // 4. Sign tx with PK
        const createTransaction = await web3.eth.accounts.signTransaction(
          {
            gas: 21000,
            to: addressToLender,
            value: web3.utils.toWei('1', 'ether'),
          },
          accountFromBorrower.privateKey
        );
      
        // 5. Send tx and wait for receipt
        const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
        console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
      };
      
      // 6. Call send function
      send();
      
    }
    //----------------------------------------------------------------------------------------------------------------
    


//SendFundsToBorrower()