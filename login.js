document.getElementById('submit').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if(email === 'sabiha@gmail.com' && pass === 'SabihA'){
        window.location.href = 'trading.html'
    }
    else{
        alert("your email and password is wrong")
    }
})
