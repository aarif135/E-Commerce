function renderCarts(){
    let div=document.getElementById('main-container')
    let row=document.createElement('DIV')
    row.setAttribute('class',"row")
    div.appendChild(row)
       firebase.firestore().collection('carts').get().then(data=>{
        data.forEach(docs=>{
            let innerDiv=document.createElement('DIV')
            innerDiv.setAttribute('class',"col-md-4 col-sm-12 col-lg-4")
            row.appendChild(innerDiv)
            let CardDiv=document.createElement('div')
            CardDiv.setAttribute('class',"card text-center")
            innerDiv.appendChild(CardDiv)
            let cardBlock=document.createElement('DIV')
            cardBlock.setAttribute('class',"card-block")
         CardDiv.appendChild(cardBlock)
                    let img=document.createElement('IMG')
                    let desDiv=document.createElement('DIV')
                    let descriptionText=document.createElement('H3')
                    let priceDiv=document.createElement('DIV')
                    let priceText=document.createElement('H3')
                    let remove=document.createElement('BUTTON')
                    remove.innerHTML='remove'
                    remove.setAttribute("class",'btn  btn-danger')
                    let data=docs.data()
                    remove.addEventListener("click", removes.bind(null,data));
                    // addCart.setAttribute('onclick',"addCarts()")
               
        
                    img.setAttribute("src",data.url)
                  img.setAttribute('height','150px')
                  img.setAttribute('width','150px')
                  cardBlock.appendChild(img)
                    descriptionText.innerHTML=data.des
                    priceText.innerHTML=data.price
            desDiv.setAttribute('class','card-text')
            
            desDiv.appendChild(descriptionText)
            cardBlock.appendChild(desDiv)
            priceDiv.appendChild(priceText)
            cardBlock.appendChild(priceDiv)
            cardBlock.appendChild(remove)

        
        })
    })
}
renderCarts()
function removes(e){
      firebase.firestore().collection('carts').where("uniq","==",e.uniq).get().then(querySnapshot=>{
        
        querySnapshot.forEach(doc=>{
                       doc.ref.delete().then(()=>{
            alert("deleted")
            location.reload()
        }).catch(error=>{
            
        })
    
    })
    } ).catch((error=>{
        
    }))
}