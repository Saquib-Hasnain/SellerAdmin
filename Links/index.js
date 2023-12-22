
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
    async function postData() {
        try {
           const response = await axios.post('https://crudcrud.com/api/d9feeb4199304420af5478a02def707d/productDetails', obj);
        showUserOnScreen(response.data);
        } catch (error) {
           console.log(error);
        }
     }
     postData();
    }
 
window.addEventListener("DOMContentLoaded",()=>{
    async function fetchData() {
        try {
           const response = await axios.get("https://crudcrud.com/api/d9feeb4199304420af5478a02def707d/productDetails");
           for (var i = 0; i < response.data.length; i++) {
              showUserOnScreen(response.data[i]);
           }
        } catch (error) {
           console.log(error);
        }
     }
     fetchData();
})
function showUserOnScreen(obj){
    document.getElementById('expenseamount').value=""
    document.getElementById('product').value=""
    if(obj.category==="electronic"){
        //<b>Electronic</b>
    const parentEle=document.getElementById('electronic')
    const childElem=document.createElement('li')
    childElem.textContent = obj.price + "-" + obj.product + "-" + obj.category 
    //Detele 
    const deletebutton = document.createElement('input')
    deletebutton.type="button"
    deletebutton.value="Remove Product"
    deletebutton.onclick=()=>{
        async function deleteData() {
            try {
               await axios.delete(`https://crudcrud.com/api/d9feeb4199304420af5478a02def707d/productDetails/${obj._id}`);
               parentEle.removeChild(childElem);
            } catch (error) {
               console.log(error);
            }
         }
         deleteData();
         
    }
    
    childElem.appendChild(deletebutton)
    parentEle.appendChild(childElem)
} else if(obj.category==="food"){
    const parentEle=document.getElementById('food')
    const childElem=document.createElement('li')
    childElem.textContent = obj.price + "-" + obj.product + "-" + obj.category 
    //Detele 
    const deletebutton = document.createElement('input')
    deletebutton.type="button"
    deletebutton.value=" Remove Product"
    deletebutton.onclick=()=>{
        async function deleteData() {
            try {
               await axios.delete(`https://crudcrud.com/api/d9feeb4199304420af5478a02def707d/productDetails/${obj._id}`);
               parentEle.removeChild(childElem);
            } catch (error) {
               console.log(error);
            }
         }
         deleteData();
         
    }
    
    childElem.appendChild(deletebutton)
    parentEle.appendChild(childElem)}

else{
    const parentEle=document.getElementById('skincare')
    const childElem=document.createElement('li')
    childElem.textContent = obj.price + "-" + obj.product + "-" + obj.category 
    //Detele 
    const deletebutton = document.createElement('input')
    deletebutton.type="button"
    deletebutton.value="Remove Product"
    deletebutton.onclick=()=>{
        async function deleteData() {
            try {
               await axios.delete(`https://crudcrud.com/api/d9feeb4199304420af5478a02def707d/productDetails/${obj._id}`);
               parentEle.removeChild(childElem);
            } catch (error) {
               console.log(error);
            }
         }
         deleteData();
         
    }
    
    childElem.appendChild(deletebutton)
    parentEle.appendChild(childElem)
}}