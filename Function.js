web3.eth.defaultAccount = eth.accounts[0];
var status = true;
//
function help(){
  console.log("  checkAllBalances()");
  console.log("  mineBlock()");
  console.log("  mineBlocks(i)");
  console.log("  checkTransectionsInBlock()");
  console.log("  checkGasLimit()");
  console.log("  addPeer(ip)");
  console.log("  unlockAcc(i,j)");
}
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
function mineBlock(){
  if(txpool.status.pending > 0){
    miner.start(1);
    admin.sleepBlocks(1);
    miner.stop();
  }else {
    console.log("Nothing to mine");
  }

}
//mine i blocks
function mineBlocks(i){
  if(txpool.status.pending > 0){
    miner.start(1);
    admin.sleepBlocks(i);
    miner.stop();
  }else {
    console.log("Nothing to mine");
  }
}

//mine interval
var m;
function mineInterval(i) {
  m = setInterval(function() {
        miner.start(1);
        admin.sleepBlocks(1);
        miner.stop();
        console.log("Break");
      }, i*1000);

}
function mineStop(){
  clearInterval(m);
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
function checkLatestGasLimit(){
  var info = web3.eth.getBlock(eth.blockNumber);
  var gasLimit = info.gasLimit;
  console.log("Block : "+eth.blockNumber+"\t, GasLimit : "+gasLimit);

}

//Shotcut for add node
function addPeer(input){
  var ip = input;
  admin.addPeer("enode://e8f4778e06bb937b13d49c7fd696aaa80ed780ec5c587bf2cd4442d9c08a60772b4fb3d0ad732818c179b1b9d77da2d062733046ebf1b2cd2bdc082820f53cb6@"+ip+":30303?discport=0");
}

function unlockAcc(i,j) {
  personal.unlockAccount(eth.accounts[i],j,3600);
}
