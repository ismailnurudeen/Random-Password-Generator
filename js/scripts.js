let input=document.querySelector(".intake input");
let genBtn=document.querySelector(".intake button");
let board=document.querySelector(".password-board p");

let addLetters=document.querySelector("#add-letters");
let addUppercase=document.querySelector("#add-uppercase");
let addSymbols=document.querySelector("#add-symbols");
let addNumbers=document.querySelector("#add-numbers");

let specialChar=[".","*","£","@","_","#","!","+","/",":",";"];
let alpha=["a","b","c","d","e","f","g","h","i","j","k"];
let numbers=["0","1","2","3","4","5","6","7","8","9"];
let alphaCaps=[];
var arr=[];

//let all=[arr,specialChar,alpha,numbers];
let all=[];
  
genBtn.addEventListener("click",generate);

function generate(){
   all[0]=arr;
  let password="";
  let passLen=Math.abs(parseInt(input.value));
  
  if(passLen>50){
	  alert("Can not generate a password Longer than 50 characters…");
  }else{
	
  if(addLetters.checked==true){
	  all.push(alpha);
	  if(addUppercase.checked==true){
		  for(var i=0;i<alpha.length;i++){
			  alphaCaps.push(alpha[i].toUpperCase());
		  }
		  all.push(alphaCaps);
		  console.log("uppercase added");
	  }
  }
  if(addSymbols.checked==true){
	  all.push(specialChar);
	  console.log("special added");
  }
  if(addNumbers.checked==true){
	  all.push(numbers);
	  console.log("numbers");
  }
  
 if(addLetters.checked!=true && addSymbols.checked!=true && addNumbers.checked!=true){
   alert("Choose password character type...")
}else{
  autoGen();
 }

  function autoGen(){
  // for(var i=password.length;i!=passLen;i++)

  while(password.length!=passLen){
     let random=Math.ceil(Math.random()*10);
    if(random<=specialChar.length){
      let random2;
      if(random<numbers.length){
        random2=Math.ceil(Math.random()*all.length);
      }
      else{
        random2=Math.ceil(Math.random()*2);
      }
  
      if(random2<all.length){
        var charset=all[random2];
        password+=charset[random];
      }

       		 }
     	   }
 		}
	 }
  board.innerText=password;
 all.splice(0,all.length);
}
