var aadhaar = document.getElementById('aadhaar')
var form = document.getElementById('form')
var check_mark = document.querySelectorAll('.check-mark')
var errAadhar = document.getElementById('aadhaar-error')

function validateAadhaar() {
    console.log(aadhaar.value)
    var adhaarformat = "^[0-9]{12}$";
    if (aadhaar.value.match(adhaarformat)) {
        errAadhar.innerHTML = '<i class="check-mark fa-solid fa-circle-check fa-lg" style="color: green; margin-left: 10px; margin-top: 25px"></i>';
        return true
    }
    else {
        errAadhar.innerHTML = '<i class="check-mark fa-solid fa-circle-check fa-lg" style="color: red; margin-left: 10px; margin-top: 25px"></i>';
        return false
    }
}

function validateForm() {
    if (!validateAadhaar()) {
        return false
    }
    return true
}