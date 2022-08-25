import React from 'react'
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
    ButtonGroup
  } from '@chakra-ui/react'

const SingleItem = () => {
    const [data,setData] = useState({})
    const [id,setId] = useState(1)

    useEffect(()=> {
        getDataById(id)
        .then(res => {
            setData(res)
          })
          .catch((err) => {
            console.log(err)
          })
    },[id])
    console.log(data)
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
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h1>Hello World</h1>
                    <p className='single_price'>Price : 2799.00</p>
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
                    <button>Add To Cart</button>
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