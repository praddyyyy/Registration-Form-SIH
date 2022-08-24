const inputs =  document.querySelectorAll('.otp-field input')

inputs.forEach((inputs, index) => {
    inputs.dataset.index = index;
    inputs.addEventListener('paste', handleOnPasteOtp);
    inputs.addEventListener("keyup", handleOtp);
})

function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    input.value = ""
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if(value.length > 0 && fieldIndex < index.length - 1) {
        input.nextElementSibling.focus();
    }

    if(e.key === "Backspace" && fieldIndex > 0 ) {
        input.previousElementSibling.focus();
    }
    
    if(fieldIndex === index.length - 1) {
        submit();
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((inputs, index) => (inputs.value = value[index]));
        submit();
    }
}

/* function submit() {
    console.log("Submitting...");

    let otp = "";
    inputs.forEach(input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    }
} */