var storage = firebase.storage()

function add(){
    let des=document.getElementById("des").value
    let price=document.getElementById('price').value
    let file =document.getElementById('file')
    let elemnt=file.files[0]
    let fileType=elemnt.type.split('/')[1]
    let fileName="abc"+"_"+Date.now()
    fileName=fileName+"."+fileType
    
     let storageRef = storage.ref("ads/" + fileName)

     storageRef.put(elemnt).then(res=>{
         storageRef.getDownloadURL().then(url=>{
            
            let apply={des,price,url}

            
              firebase
                .firestore()
                .collection("ads").add(apply).then(res=>{
                    alert("done")
                })
            
                

         })
     })
  

}