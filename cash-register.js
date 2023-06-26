const coinValues = {
  "PENNY":1,
  "NICKEL": 5,
  "DIME":10,
  "QUARTER": 25,
  "ONE":100,
  "FIVE":500,
  "TEN":1000,
  "TWENTY":2000,
  "ONE HUNDRED":10000
}

function checkCashRegister(price, cash, cid) {
  let totalMoneyInRegister = 0;
  for(var i = 0; i<cid.length;i++){
    totalMoneyInRegister+=Math.round(cid[i][1]*100)
    

  }
  let change = [];
  let status ="";
  price = Math.round(price * 100)
  cash = Math.round(cash * 100)
  totalMoneyInRegister = totalMoneyInRegister
  console.log("Money in till: " + totalMoneyInRegister)
  let changeAmount = cash-price
  console.log("You need "+ changeAmount +" in change")
  if(changeAmount>totalMoneyInRegister){
    status = "INSUFFICIENT_FUNDS"
  }
  else if(changeAmount===totalMoneyInRegister){
    status = "CLOSED"
    change=cid
  }
  else{
    for(var i = cid.length-1;i>=0;i--){
      
      let currencyValue = coinValues[cid[i][0]]
      console.log("currencyValue for current Coin is " + currencyValue)
      if(currencyValue>changeAmount){
        continue 
      }
      let dollarAmount = Math.round(cid[i][1]*100)
      console.log(cid[i][0]+ " current currency in till " + dollarAmount)
      let numberOfCurrency = dollarAmount/currencyValue
      console.log("you have " + numberOfCurrency+ " number of "+ cid[i][0])
      console.log("current change needed: " + changeAmount)
      var numberOfCurrencyNeeded = Math.floor(changeAmount/currencyValue)
      console.log("you need "+ numberOfCurrencyNeeded + " "+cid[i][0])
      if(numberOfCurrencyNeeded >= numberOfCurrency){
        changeAmount-=dollarAmount;
        change.push([cid[i][0],dollarAmount/100.00])
      }
      else{
        let currencyGivenAsChange = numberOfCurrencyNeeded * currencyValue
        changeAmount -= currencyGivenAsChange
        change.push([cid[i][0],currencyGivenAsChange/100.00])
      }
      console.log("there is "+ changeAmount +' left')

      if(changeAmount === 0){
        status='OPEN'
        break
      }
    }
    if(changeAmount != 0){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
  }
  var result = {"status":status, "change":change}
  console.log(result)
  return result
}

 checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])