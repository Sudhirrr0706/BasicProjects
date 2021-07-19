document.getElementById('loginBtn').addEventListener('click',function(){
   let userId=document.getElementById('InputEmail1').value
   let userPassword=document.getElementById('InputPassword1').value

    document.getElementById('error').innerText=''
    document.getElementById('pswdError').innerText=''
    document.getElementById('InputEmail1').style.borderBottom='2px solid rgb(122, 245, 122)';


//  Type 1 : Basic 

    //    if(userId===""){
    //        alert("Mail Id required to login")
    //     }
    //     else if(userPassword===""){
    //         alert("Incorrect password or try again")
    //     }
    //    else{
    //        alert(`Confirm your mail Id ${userId}`)
    //     }

// Type 2 : Intermediate
    var mailCheck= new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
       
        if(!userId.match(mailCheck) || userId===""){
            document.getElementById('error').innerText='Incorrect mail id'
            document.getElementById('InputEmail1').style.borderBottom='2px solid red';
        }
        else  if(userPassword===""){
               document.getElementById('pswdError').innerText='password is required to login'
               document.getElementById('InputPassword1').style.borderBottom='2px solid red';
            }
       else{
            
            document.getElementById('forms').classList.add('green');
            document.getElementById('InputEmail1').style.borderBottom='2px solid rgb(122, 245, 122)';
            document.getElementById('InputPassword1').style.borderBottom='2px solid rgb(122, 245, 122)';
            alert(`your mail Id : ${userId} \n Thank You and your Form is submitted`)
        }

// Type 3 : Advanced 

//        userId==="" || userPassword==="" ?  alert("Your Id and password is required to login") : alert(`Confirm your mail Id ${userId}`)
})

//Toggle Password 

function showPassword(){
    if(document.getElementById('InputPassword1').type==="password"){
        document.getElementById('InputPassword1').type="text"   
    }
    else{
        document.getElementById('InputPassword1').type="password"
    }
   
}   

