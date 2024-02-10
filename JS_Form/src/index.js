function frm() {
    
    var use_name = document.getElementById('use_name').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var gender = document.getElementsByName('Gender');
    var Course = document.getElementsByClassName('c_k');
    var cnt = 0;

    var email = document.getElementById('email').value;
    var email_patten = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var password = document.getElementById('password').value;
    var password_patten = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[0-9]).{10,16}$/;

    var confirm_password = document.getElementById('confirm_password').value;
    var phone = document.getElementById('phone').value;
    var phone_patten =  /^\d{10}$/;    

    for(var i=0;i<Course.length;i++){
        if(Course[i].checked==true){
            cnt++;
        }
    }

    if(use_name == ''){
        document.getElementById('err').innerText = "Plz enter your Name...!";
        return false;
    }
    // else{
    //     document.getElementById('err').innerText = "";
    // }

    if(email_patten.test(email)==false){
        document.getElementById('err').innerText = "enter valied email...!";
        return false;
    }

    if( email == ""){
        document.getElementById('err').innerText = "Enter Email...!";
        return false;
    }

    if(password_patten.test(password)==false){
        document.getElementById('err').innerText = "enter valied password...!";
        return false;
    }

    if( confirm_password == ""){
        document.getElementById('err').innerText = "enter confirm password...!";
        return false;
    }

    if( password != confirm_password){
        document.getElementById('err').innerText = "enter Same  password...!";
        return false;
    }

    if(phone_patten.test(phone)==false){
        document.getElementById('err').innerText = "enter valied phone number...!";
        return false;
    }

    if(address == ""){
        document.getElementById('err').innerText = "Plz enter your Address...!";
        return  false;
    }
    // else{
    //     document.getElementById('ree1').innerText = ""; 
    // }


    if(city == ""){
        document.getElementById('err').innerText = "Plz enter your City...!";
        return false;
    }

    if(gender[0].checked==false && gender[1].checked==false){
        document.getElementById('err').innerText = "Plz enter your Gender...!";
        return false;
    }

    if(cnt == 0){
        document.getElementById('err').innerText = "Plz enter your Course...!";
        return false;
    }

    
}