
let checkBtn = document.getElementById("check_btn");
let userNumber = document.getElementById("input_number");
let validation = document.getElementById("validation_check");
let numberCheck = document.getElementById("number_check");
let resetBtn = document.getElementById("reset_btn")


userNumber.onkeyup = () => { 
if (userNumber.value > 0 && userNumber.value <= 100 && userNumber.value != String) {
  validation.innerText = ` You entered ${userNumber.value} and this is a valid number.`
  validation.style.color="white"
} 
else {
  validation.innerText =  ` You entered ${userNumber.value} and this is a invalid number. Please change.`
  validation.style.color ="red"

}}

let randomNumber =  Math.floor(Math.random() * 101 );
checkBtn.addEventListener("click" , (e) => {
if(userNumber.value <= 0 || userNumber.value > 100 || isNaN (userNumber.value) || userNumber == ""){
numberCheck.innerText = "Please try again.  "
numberCheck.style.color="red" }

if (randomNumber == (userNumber.value) ) {
numberCheck.innerText = " Congratulation!! You win."
numberCheck.style.backgroundColor="red"
numberCheck.style.fontSize="3rem"
userNumber.style.display = "none"
}
if (randomNumber < userNumber.value ){
numberCheck.innerText = " The  number is  less than your number." 
numberCheck.style.color="white"
}
if (randomNumber > userNumber.value ){
numberCheck.innerText = " The  number is higher than your number."
numberCheck.style.color="white"
}})

resetBtn.addEventListener("click" , () => {
location.reload();
})

userNumber.addEventListener("keyup",(e) =>{
  if(e.code === "Enter"){
    checkBtn.click();
  validation.textContent = " ";
  };
})
userNumber.addEventListener("focus", ()=>{
  validation.textContent = " ";
  numberCheck.textContent = " ";
})


