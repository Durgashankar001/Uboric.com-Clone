import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getDataById } from '../../Api/Api'
import './SingleItem.css'
import { BsArrowRight } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { BsBag } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  ButtonGroup,
  useToast
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { checkCartData } from '../../Utilis/Utilis'

const SingleItem = () => {
  const [data, setData] = useState({})
  const toast = useToast()
  const parms = useParams();
  const [id, setId] = useState(parms.id)
  const { isAuth, cartData, setCartData } = useContext(AuthContext)

  useEffect(() => {
    getDataById(id)
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])
  const handleCartData = () => {

    if (!isAuth) {
      toast({
        position: 'top',
        title: 'Please Login First',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      if (checkCartData(cartData, data) == false) {
        setCartData([...cartData, data])
        toast({
          position: 'top',
          title: 'Product Added Successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      else {
        toast({
          position: 'top',
          title: 'Product Already Inside The Cart',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
      }
    }

  }

  return (
    <div>
      <div className='single_flex'>
        <div className='single_flex_1'>
          <div>
            <div className='single_img'>
              <img src={data.image} alt={data.name} />
            </div>
            <div className='single_text'>
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio qui natus, temporibus nam ratione? Quo molestiae ut unde veniam at maxime eius assumenda, ex, doloribus laboriosam dignissimos porro aspernatur?</p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className='single_flex_2'>
          <div className='single_header'>
            <p>{data.category}</p>
            <h1>{data.title}</h1>
            <p className='single_price'>Price : ₹{data.price}</p>
          </div>
          <div className='single_size'>
            <p>SIZE</p>
            <select name="" id="">
              <option value="">Choose Size</option>
              <option value="">SM</option>
              <option value="">MD</option>
              <option value="">X</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
          </div>
          <div className='single_size'>
            <p>Color</p>
            <select name="" id="">
              <option value="">Choose Color</option>
              <option value="">Yellow</option>
              <option value="">Pink</option>
            </select>
          </div>
          <div className='single_des'>
            <p>Or 3 interest free payments of ₹933.00 with </p>
            <img src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg" alt="alt" />
          </div>
          <div className='single_btn'>
            <button onClick={handleCartData}>Add To Cart</button>
            <button>Add To Wishlist</button>
          </div>
          <div className='single_btn mar'>
            <button>BUY NOW</button>
          </div>
          <div className='single_last_text'>
            <p>SKU:K-E035</p>
            <p>Categories:Kurti set , suit & lehenga set & Ethnic Dress, Women's Fashion</p>
          </div>
        </div>
      </div>
      <div className='single_popular'>
        <div sbc_div>
          <h2 className='sbc'>Most Popular</h2>
        </div>
        <div className='five_main'>
          <SimpleGrid columns={[2, 4, 6, 6]} spacing='1rem'>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.07-AM-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.06-AM-1-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.06-AM2-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.06-AM1-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.06-AM-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content' style={{ maxHeight: "190px" }}>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image1'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-09-at-1.27.05-AM-1-370x370.jpeg" alt="logo" />
                </div>
                <div className='text'>
                  <p className='p_text'>Men Shirt magic cotton with digital print</p>
                  <p className='p_price'><s>₹ 1199.00</s> <span>₹ 795.00</span></p>

                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  )
}

export default SingleItem