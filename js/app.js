postadd()
function postadd(){
    let post=document.getElementById("main-div")
    

    firebase.firestore().collection("ads").get().then(res=>{
    
        res.forEach(docs=>{
       loader()
            let innerDiv=document.createElement('DIV')
    innerDiv.setAttribute('class',"col-md-4 col-sm-6 col-lg-3")
    post.appendChild(innerDiv)
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
            let addCart=document.createElement('BUTTON')
            addCart.setAttribute('class','btn btn-success')
            addCart.innerHTML='ADD TO CART'
            console.log(addCart)
            let data=docs.data()
           
            // addCart.setAttribute('onclick',"addCarts()")
            addCart.addEventListener("click", addCarts.bind(null, data));

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
 cardBlock.appendChild(addCart)

        })
  
    })
 


    
}
function addCarts(e){
    let uniq=Math.random()
    let carts={...e,uniq}
 firebase.firestore().collection('carts').add(carts ).then(res=>{
     console.log('succesfully added to cart')
 })

}
function loader(){
    let spinner=document.getElementById('spinner').style.display='none'
}