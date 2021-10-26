let randomNumber = () => Math.floor(Math.random() * 101 );
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
checkBtn.addEventListener("click" , () => {
let randomNumber = () => Math.floor(Math.random() * 101 );
if(userNumber.value <= 0 || userNumber.value > 100 || userNumber.value == String || userNumber == ""){
numberCheck.innerText = "Please try again.  "
numberCheck.style.color="red" }

else if (randomNumber() == userNumber.value ) {
numberCheck.innerText = " Congratulation!! You win."
numberCheck.style.backgroundColor="red"
numberCheck.style.fontSize="3rem"
}
else if (randomNumber() < userNumber.value ){
numberCheck.innerText = " The random number is  less than your number." 
numberCheck.style.color="white"
}
else if (randomNumber() > userNumber.value ){
numberCheck.innerText = " The random number is high than your number."
numberCheck.style.color="white"
}
}
)
resetBtn.addEventListener("click" , () => {
location.reload();
})
    


