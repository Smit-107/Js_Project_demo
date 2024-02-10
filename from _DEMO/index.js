function demo() { 


var username = document.getElementById('name').value;
var email = document.getElementById('email').value;
var email_patten =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phone = document.getElementById('phone').value;
var gender = document.getElementsByName('gender');
var d_hobby = document.getElementsByClassName('d_hobby');
var cnt=0;

    for(var i=0 ; i < d_hobby.length;i++){
        if(d_hobby[i].checked == true){
            cnt++;
        }
    }

    if(username == ""){
        document.getElementById('err').innerHTML = "please enter Name...!"
        return false;
    }
    
    if(email_patten.test(email) == false){
        document.getElementById('err').innerHTML = "please enter Email...!"
        return false
    }

    if(phone == ""){
        document.getElementById('err').innerText = "please Enter phone number ...!"
        return false;
    }

    if(gender[0].checked == false && gender[1].checked == false){
        document.getElementById('err').innerText = "please Select gender ...!"
        return false;
    }

    if(cnt == 0){
        document.getElementById('err').innerText = "please Select hobby ...!"
        return false;
    }
     
}

    function get_deta(){
   
        var username = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var gender = document.getElementsByName('gender');
    
        var gender = document.getElementsByName('gender');
        var d_hobby = document.getElementsByClassName('d_hobby');
        
    
       
            document.getElementById('name_v').innerText = document.getElementById('name').value;
            document.getElementById('email_v').innerText = document.getElementById('email').value;
            document.getElementById('phone_v').innerText = document.getElementById('phone').value;
    
    
            if(gender[0].checked==true ){
                document.getElementById('gender_v').innerText = document.getElementById('g1').value;
            }
            if(gender[1].checked==true){
                document.getElementById('gender_v').innerText = document.getElementById('g2').value;
    
            }
    
            if(d_hobby[0].checked==true ){
                document.document.getElementById('hobby_v').innerText = document.getElementById('hp1').value;
            }
            // if(d_hobby[1].checked==true){
            //     document.getElementsByClassName('h2').innerText = document.getElementById('hp2').value;
            // }
            // if(d_hobby[2].checked==true){
            //     document.getElementsByClassName('h3').innerText = document.getElementById('hp3').value;
            // }
            // if(d_hobby[3].checked==true){
            //     document.getElementsByClassName('h4').innerText = document.getElementById('hp4').value;
            // }
            // if(d_hobby[4].checked==true){
            //     document.getElementsByClassName('h5').innerText = document.getElementById('hp5').value;
            // }

        }



