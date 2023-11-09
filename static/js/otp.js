const inputs = document.getElementById("otpInputs");
const email = document.getElementById("email");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const btnNext = document.getElementById("btnNext");
const btnSendOtp = document.getElementById("sendOtp");

const myFunc = (item)=>{
    item.readOnly = true;
}

if(email.value == ""){
    for (let i = 0; i < 6; i++) {
        inputs.children[i].readOnly = true;
        inputs.children[i].style.cursor = "not-allowed";
        inputs.children[i].style.backgroundColor = "rgb(183,226,230)";
        inputs.children[i].title = "Not allowed";
    }

    form2.style.opacity = "0.3";
    form2.style.cursor = "not-allowed";
    form2.title = "Not allowed";

    // btnNext.style.visibility = "hidden";
    // btnNext.style.visibility = "hidden";
    btnNext.disabled = true;
    btnNext.title = "Not allowed";
    btnNext.style.cursor = "not-allowed";

}
else{
    email.readOnly = true;
    email.style.cursor = "not-allowed";
    email.style.backgroundColor = "rgb(183,226,230)";
    email.title = "Not allowed";

    btnSendOtp.disabled = true;
    btnSendOtp.title = "Not allowed";
    btnSendOtp.style.cursor = "not-allowed";

    form1.style.opacity = "0.3";
    form1.style.cursor = "not-allowed";
    form1.title = "Not allowed";
}

inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;
    
    if (isNaN(val)) {
        target.value = "";
        return;
    }
  
    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});
  
inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();
  
    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});