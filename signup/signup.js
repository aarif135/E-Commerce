function SignUp(e){
    e.preventDefault()
    let name=document.getElementById('fullName').value
    let phoneNumber=document.getElementById('PhoneNumber').value
    let email=document.getElementById('emailAddress').value
    let password=document.getElementById('password').value
    let confrimPassword=document.getElementById('confrimPassword').value   
    let ObjData={name,phoneNumber,email}
  
    if(name&&phoneNumber&&email&&password==confrimPassword){
        setData(ObjData)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error)=>{
            alert(error.message)
        })
    }
}
function setData(nam){
firebase.firestore().collection('userInfo').add(nam).then(()=>{
    alert('successfully registerd')
    setTimeout(()=>{

        window.location.href='../login/login.html'
    },3000)

})

}