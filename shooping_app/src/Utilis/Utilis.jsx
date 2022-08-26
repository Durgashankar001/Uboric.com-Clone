export const checkData = (arr,data) =>{
    let arr2 = arr.filter((el)=>{
    return (el.email==data.email && el.password==data.password)  
     })
     if(arr2.length==0)
     {
      return false
     }
     else{
      return true
     }
  }
  export const checkDataSignup = (arr,data) =>(
    arr&&arr.filter((el)=>{
    if(data.email==el.email)
    {
      return true
    }  
     }) 
  )

  export const checkCartData = (data,product) =>(
    data&&data.filter((el)=>{
        if(el.id==product.id)
        {
            return true
        }
    })
)