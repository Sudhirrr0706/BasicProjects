document.getElementById('form-submit').addEventListener('click', function(){
    let name = document.getElementById('exampleInputName').value;
    let email = document.getElementById('exampleInputEmail1').value;
    let message = document.getElementById('messageTextarea').value;

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('msg-error').innerText = '';
    if(name == '') {
       document.getElementById('name-error').innerText = 'Please enter your name';
    } else if(email == '') {
        document.getElementById('email-error').innerText = 'Please enter your Mail id';
    }else if(message == '') {
        document.getElementById('msg-error').innerText = 'Write Few Words';
    }else {
        alert("Submited")
    }
});