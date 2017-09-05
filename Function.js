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

function sentTO(i, j){
  personal.unlockAccount(eth.accounts[0])
  var account = "";
    if(i == 0){
      account = "0x74b36f067e6af8f6e8a0fc102f8b2d44318b8adb";
    }else if (i == 1) {
      account = "0x539ff580a25a186df31e7e04ecde4aca4b5f2001";
    }else if (i == 2) {
      account = "0x80b54c4189dee80674e4e3511c37c79e5e459998";
    }
    if(account != ""){
      eth.sendTransaction({from:eth.accounts[0], to:account,value: web3.toWei(j, "ether")})
    }
}

function mineBlocks(i){
  miner.start(1);
  admin.sleepBlocks(i);
  miner.stop();
}

function checkTransections(){
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

function checkGasLimit(){
  var count;
  var i = eth.blockNumber;
  for(count=0; count<=i; count++){
    var info = web3.eth.getBlock(count);
    var gasLimit = info.gasLimit;
    console.log("Block : "+count+"\t, GasLimit : "+gasLimit);
  }
}

function addPeerr(){
  var x = earth2378.hopto.org;

  var enode = "enode://e8f4778e06bb937b13d49c7fd696aaa80ed780ec5c587bf2cd4442d9c08a60772b4fb3d0ad732818c179b1b9d77da2d062733046ebf1b2cd2bdc082820f53cb6@"+ x +":30303?discport=0"
  admin.addPeer(enode);
}
