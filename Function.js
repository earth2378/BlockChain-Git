//Check total balance of all accounts
function checkAllBalances() {
    var totalBal = 0;
    for (var acctNum in eth.accounts) {
        var acct = eth.accounts[acctNum];
        var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
        totalBal += parseFloat(acctBal);
        console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
    }
    console.log("  Total balance: " + totalBal + " ether");
};

//mine 1 block
function mineBlocks(){
  miner.start(1);
  admin.sleepBlocks(1);
  miner.stop();
}

//Check transactions in every Block
function checkTransectionsInBlock(){
  var count;
  var i = eth.blockNumber;
  for(count=0; count<=i; count++){
    var info = web3.eth.getBlock(count);
    var txt =info.transactions;
    if (txt.length > 0){
      console.log("Block "+count);
      var n;
      for(n in txt){
        console.log(txt[n]);
      }
    }
  }
}

//Check current gas limit
function checkGasLimit(){
  var count;
  var i = eth.blockNumber;
  for(count=0; count<=i; count++){
    var info = web3.eth.getBlock(count);
    var gasLimit = info.gasLimit;
    console.log("Block : "+count+"\t, GasLimit : "+gasLimit);
  }
}
