export const getData =({sort}) =>{
    if(sort=="")
    {
        return fetch("https://fakestoreapi.com/products").then(res=>res.json())
    }
    else if(sort=="asc"){
        return fetch("https://fakestoreapi.com/products?sort=asc").then(res=>res.json())
    }
    else if(sort=="desc")
    {
        return fetch("https://fakestoreapi.com/products?sort=desc").then(res=>res.json())
    }
    else{
        return fetch("https://fakestoreapi.com/products").then(res=>res.json())
    }
    
}
export const getDataById =(id) =>{
    return fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
}