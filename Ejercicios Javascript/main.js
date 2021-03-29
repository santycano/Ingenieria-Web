
function check() {
  var val = document.getElementById('pangram').value.toLowerCase()
  var answerPanagram = document.getElementById("pangramAnswer");
  var regex = /([a-z])(?!.*\1)/g;
  if (val.match(regex).length == 26){
    answerPanagram.innerHTML = "<br>  La frase es un panagrama";
  }
  else{
    answerPanagram.innerHTML = "La frase no es un panagrama";
  }
  console.log(answerPanagram.innerHTML);
}

function checkLeapYear() {
  var year = document.getElementById('leapYear').value.toLowerCase()
  var answerleapYear = document.getElementById("leapYearAnswer");
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    answerleapYear.innerHTML = "<br>  Es un año bisiesto";
    console.log(answerleapYear.innerHTML);
  } else {
    answerleapYear.innerHTML = "<br>  No es un año bisiesto";
    console.log(answerleapYear.innerHTML);
  }
}

function findDuplicates() {
  var arr = document.getElementById('uniqueDel').value.toLowerCase()
  var answeruniqueDel = document.getElementById("uniqueDelAnswer");
  arr = JSON.parse(arr);
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j] == arr[i],(j) != i);
      if (arr[j] == arr[i] && j != i) {
        results.push(arr[i]);
      }
    }
  }
  answeruniqueDel.innerHTML = "<br> Los valores duplicados de la lista son: [" + Object.keys(results).map(function(k){return results[k]}).join(",") + "]";
  console.log(answeruniqueDel.innerHTML);
}

function toRoman() {
  var num = document.getElementById('toRoman').value.toLowerCase()
  var answerToRoman = document.getElementById("toRomanAnswer");
  var romanNumbers= {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  var numberConverted = '';

  for (var i of Object.keys(romanNumbers)) {
    var q = Math.floor(num / romanNumbers[i]);
    num -= q * romanNumbers[i];
    numberConverted += i.repeat(q);
  }
  answerToRoman.innerHTML = "<br> El numero en romano es: " + numberConverted;
  console.log(answerToRoman.innerHTML);
}
