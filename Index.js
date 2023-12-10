
function saveOnBackend(event){
    event.preventDefault();
    const price=event.target.expenseamount.value;
    const product=event.target.product.value;
    const category=event.target.category.value;
    const obj={
        price,
        product,
        category
    }
   axios.post('https://crudcrud.com/api/a86825cc5dd94fdcbf8fccd5db549c62/productDetails',obj)
   .then((respone)=>showUserOnScreen(respone.data))
   .catch((err)=>console.log(err))
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/a86825cc5dd94fdcbf8fccd5db549c62/productDetails")
    .then((respone)=>{
        for(var i=0; i<respone.data.length;i++){
            showUserOnScreen(respone.data[i])
        }
    })
    .catch((err)=>console.log(err))
})
function showUserOnScreen(obj){
    document.getElementById('expenseamount').value=""
    document.getElementById('product').value=""
    const parentEle=document.getElementById('listOfitems')
    const childElem=document.createElement('li')
    childElem.textContent = obj.price + "-" + obj.product + "-" + obj.category 
    //Detele 
    const deletebutton = document.createElement('input')
    deletebutton.type="button"
    deletebutton.value="Remove Product"
    deletebutton.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/a86825cc5dd94fdcbf8fccd5db549c62/productDetails/${obj._id}`)
        .then(()=>{
            parentEle.removeChild(childElem)})
        .catch((err)=>console.log(err))
        
    }
    
    childElem.appendChild(deletebutton)
    parentEle.appendChild(childElem)
}
