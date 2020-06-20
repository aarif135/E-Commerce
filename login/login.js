function login(e){
    e.preventDefault()
    let email=document.getElementById('InputEmail1').value
    let password=document.getElementById('InputPassword').value
    if(email=="admin@email.com"&&password=='123456'){
        setTimeout(()=>{
            window.location.href='../admin/admin.html'

        },2000)
    }
    else{
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
         let user={email,password}
         localStorage.setItem('userInfo',JSON.stringify(user))
            alert("login successFull")
            setTimeout(()=>{
                window.location.href='../index.html'
            },2000)
        }).catch(function(error) {
            alert(error.message)
     
          });
    }
}