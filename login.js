function Login(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errorMsg=document.getElementById('error');
    const Logi=[
        {username:"username",password:"password"},
        {username:"qwert",password:"123"},
    ]
    const isValid = Logi.some((user)=>user.username===username && user.password===password);
    if(isValid)
    {
        errorMsg.innerText="sucess"; 
        window.location.href="home.html"; 
    }
    else{
        errorMsg.innerText="Ivalid Credentials";
    }
}