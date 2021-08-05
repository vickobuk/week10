function spinalCase(str) {

  var strArr = str.split(/(?=[A-Z])|-| |_/);
  

  console.log(strArr);

  var strJoin = strArr.join("-");
  console.log(strJoin);

  var strFinal = strJoin.toLowerCase();
  console.log(strFinal);

  return strFinal;

}

spinalCase('AllThe-small Things');