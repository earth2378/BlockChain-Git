var x = eth.contract([{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMinter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]).at("0x92325ec258407d2fa1902d4d91019c052ee18d16");

function gs(i) {
  if(i == 0){
    console.log("Storage : "+x.get());
  }else if(i > 0) {
    console.log("a");
    x.set(i);
    console.log("b");
  }else{
    console.log("Error Input");
  }
}
