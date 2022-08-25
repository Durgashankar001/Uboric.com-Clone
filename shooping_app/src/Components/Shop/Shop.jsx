import { ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getData } from '../../Api/Api'
import SingleProduct from './singleProduct'
import './Shop.css'

const Shop = () => {
  // const {cartData,setCartData} = useContext(AuthContext)
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // const handleCartData =(product) =>{
  //     if(checkCartData(cartData,product)==false){
  //         setCartData([...cartData,product]) 
  //     }
  //     else{
  //         alert("Product Already Inside The Cart")
  //     }

  // }
  return (
    <div>
      <div className='shop_main'>
        <div className='shop_sidebar'>
          <div className='sidebar_heading'>
            <h2>Price</h2>
            <hr className='sidebar_line' />
            <UnorderedList spacing='0.5rem' >
              <ListItem className='ListItem' >₹10.00 - ₹49.00</ListItem>
              <ListItem className='ListItem' >₹50.00 - ₹99.00</ListItem>
              <ListItem className='ListItem' >₹100.00 - ₹199.00</ListItem>
              <ListItem className='ListItem' >₹200.00 +</ListItem>
            </UnorderedList>
          </div>
          <div className='sidebar_heading'>
            <h2>Category</h2>
            <hr className='sidebar_line' />
            <UnorderedList spacing='0.5rem' >
              <ListItem className='ListItem' >Uncategorized</ListItem>
              <ListItem className='ListItem' >Anniversary</ListItem>
              <ListItem className='ListItem' >Anti puncture Liquid</ListItem>
              <ListItem className='ListItem' >Clothing</ListItem>
              <ListItem className='ListItem' >Industrial Supplies</ListItem>
              <ListItem className='ListItem' >Kitchen Ware</ListItem>
              <ListItem className='ListItem' >Electronics</ListItem>
              <ListItem className='ListItem' >G String</ListItem>
              <ListItem className='ListItem' >Grocery</ListItem>
              <ListItem className='ListItem' >Watches</ListItem>
              <ListItem className='ListItem' >Wholesale</ListItem>
              <ListItem className='ListItem' >Women Accessories</ListItem>
            </UnorderedList>
          </div>
          <div className='sidebar_heading'>
            <h2>Brand</h2>
            <hr className='sidebar_line' />
            <UnorderedList spacing='0.5rem' >
              <ListItem className='ListItem' >26 carat</ListItem>
              <ListItem className='ListItem' >DANIEL CHRISTIAN</ListItem>
              <ListItem className='ListItem' >Finachi</ListItem>
              <ListItem className='ListItem' >hepo</ListItem>
              <ListItem className='ListItem' >jacksapprow</ListItem>
              <ListItem className='ListItem' >MITALI</ListItem>
              <ListItem className='ListItem' >piirona</ListItem>
              <ListItem className='ListItem' >philips</ListItem>
            </UnorderedList>
          </div>
        </div>
        <div className='shop_item'>
          <div className='shop_heading'>
            <h1 className='shop_main_heading'>Shop</h1>
            <select name="" className='shop_select'>
              <option value="ASC">Default</option>
              <option value="ASC">short by price:low to high</option>
              <option value="DESC">short by price:high to low</option>
            </select>
          </div>
          <div className='shop_all_item'>
            <SimpleGrid columns={[1, 2, 3]} spacing='3rem'>
            {data?.map((el)=><SingleProduct key={el.id} title={el.title} image={el.image} price={el.price} brand ={el.brand} product={el}/>)}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop