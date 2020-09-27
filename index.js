function telephoneCheck(str) {

console.log(str);
 console.log("bor");

 //extra character test
var allowedChar =/^[\d\-()]/gi;

var culprits =/[^\d\(\)\-\s]/gi.test(str);
if(culprits){
  console.log("culprit characters found");
  return false;
}


//Test for alphabet letters
var letterTest= str.search(/[a-zA-Z]/);
if(letterTest>0){
  console.log("mune ny'a ny'a muno");
  return false;
}
console.log('bhoooo');
//bracket test
var bracket1 = /\(/;
var bracket2= /\)/;
var bracketTest1=str.search(bracket1);
console.log(bracketTest1);
var bracketTest2=str.search(bracket2);
console.log(bracketTest2);

if(bracketTest1>=0||bracketTest2>=0){
  console.log("pane bracket");

if(bracketTest1<0|| bracketTest2<0){
  console.log("one or both of brackets are not there");
  return false;
}
}
  
//test for wrongly placed -
var reguEx=/\-/;
var rizoo= str.search(/-/);
if(rizoo==0){
  console.log("string starts with the (-)");
  return false;
}

//replace (- and () with "")
var regex=/[\(.*\)\-]/;

var newString= str.replace(regex, "");
console.log(newString);
var newString= newString.replace(/\(/g, "").replace(/\)/g, "").replace(/\s/g,"").replace(/\-/g, "").replace(/\D/g, "");
console.log(newString);

//Test for number of elements in phone number
var numstring=newString.split("");
console.log(numstring);

//test for American phone code
   if(numstring[0]==1){

    console.log("good code (1)");
    }else for(var i=0; i<2; i++){
  if(numstring[i]!=5){
    console.log("code is wrong");
    console.log(numstring[3]);
    return false;
  }else{
    console.log("code is fine");
  }
  }






if(numstring.length<10 || numstring.length>11){
  console.log("length of your phone number is absurd");
  return false;
}else{
  console.log("String has ok length");
}





if(letterTest>=0){
  console.log("String contains alphabet letter at: " + letterTest);
return false;
}else{
  console.log("string has no letters");
}
console.log("Number is american");
  return true;
 
}





telephoneCheck("5)!(55");
