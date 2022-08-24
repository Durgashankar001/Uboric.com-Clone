import React from 'react'
import './Home.css'
import { Slide } from './Slider/Slider'
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
import Cardcarousel from './Cardcarousel/Cardcarousel'
import Footer from '../Footer/Footer'

const Electronics = [
  "Speakers",
  "Charger",
  "PowerBank",
  "SmartWatch",
  "HeadPhones",
  "Trimmer",
  "Philips Care",
  "Women",
  "Men",
  "Accessories"
]
const clothing = [
  "Mens Fashion",
  "Shirt & Boxer",
  "T-Shirt",
  "Trunks & Briefs",
  "Shirts",
  "Women's Fashion",
  "TUNICS",
  "Western Wear",
  "Patola Dupatta",
  "Jeans",
  "Dresses",
  "Starpless Bra",
  "Garter Belt",
  "Night Wear",
  "Padded Bra"
]

const footWear = [
  "Chhapals",
  "Sandals",
  "Shoes",
  "Sport Shoes"
]
const Home = () => {
  return (
    <>
      <Slide />
      <div className='second'>
        <SimpleGrid columns={[1, 2, 3]} spacing='1.1rem'>
          <Box className='box'>
            <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/kithchen-tools.jpg" alt="png" />
          </Box>
          <Box className='box'>
            <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Air-Tight-Containers.jpg" alt="png" />
          </Box>
          <Box className='box'>
            <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/Gas-Lighter-1024x1024-1.jpg" alt="png" />
          </Box>
        </SimpleGrid>
      </div>
      <div className='third'>
        <div sbc_div>
          <h2 className='sbc'>Shop By Category</h2>
        </div>
        <div className='tc1'>
          <Tabs align='center' defaultIndex={0} variant='soft-rounded' colorScheme='green'>
            <TabList className='tl'>
              <Tab>Electronics</Tab>
              <Tab>Clothing</Tab>
              <Tab>Foot Wear</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Cardcarousel products={Electronics} />
              </TabPanel>
              <TabPanel>
                <Cardcarousel products={clothing} />
              </TabPanel>
              <TabPanel>
                <Cardcarousel products={footWear} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <div className='four'>
        <div className='f_div'>
          <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing='40px'>
            <Box className='main'>
              <img src="https://www.uboric.com/wp-content/uploads/2022/08/banner2-1.jpg" alt="banner" />
              <div className='c_div'>
                <h1 className='head'>Bathroom Accessories</h1>
                <p className='para'>Shop Now <BsArrowRight size={25} className='iv_i' /></p>
              </div>
            </Box>
            <Box className='main'>
              <img src="https://www.uboric.com/wp-content/uploads/2022/08/banner1-1-1.jpg" alt="banner" />
              <div className='c_div'>
                <h1 className='head'>Electric Appliances</h1>
                <p className='para'>Shop Now <BsArrowRight size={25} className='iv_i' /></p>
              </div>
            </Box>
            <Box className='main'>
              <img src="https://www.uboric.com/wp-content/uploads/2022/08/banner3-1.jpg" alt="banner" />
              <div className='c_div'>
                <h1 className='head'>Clothing</h1>
                <p className='para'>Shop Now <BsArrowRight size={25} className='iv_i' /></p>
              </div>
            </Box>
            <Box className='main'>
              <img src="https://www.uboric.com/wp-content/uploads/2022/08/banner4-1.jpg" alt="banner" />
              <div className='c_div'>
                <h1 className='head'>Paintaing</h1>
                <p className='para'>Shop Now <BsArrowRight size={25} className='iv_i' /></p>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <div className='five'>
        <div sbc_div>
          <h2 className='sbc'>Best Selling Product</h2>
        </div>
        <div className='five_main'>
          <SimpleGrid columns={[1, 2, 3, 3]} spacing='1.2rem'>
            <Box>
              <div className='main_content'>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={22} />
                  <BsBag className='ic' size={22} />
                </div>
                <div className='image'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-06-670x1193.jpg" alt="logo" />
                  <img className='img2' src="https://www.uboric.com/wp-content/uploads/2022/08/photo_2022-02-24_12-22-08-370x370.jpg" alt="logo" />

                </div>
                <div className='text'>
                  <p className='p_text'>Quick & Easy Blade Push Chopper 100ML</p>
                  <p className='p_price'><s>₹ 799.00</s> <span>₹ 399.00</span></p>

                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content'>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={25} />
                  <BsBag className='ic' size={25} />
                </div>
                <div className='image'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/61uFAIVjljL._UL1500_-670x669.jpg" alt="logo" />
                  <img className='img2' src="https://www.uboric.com/wp-content/uploads/2022/08/51it7ZuoqBL-370x370.jpg" alt="logo" />

                </div>
                <div className='text'>
                  <p className='p_text'>FINACHI 100% Combed Wash Cotton</p>
                  <p className='p_price'><s>₹ 1,499.00</s> <span>₹ 799.00</span></p>
                </div>
              </div>
            </Box>
            <Box>
              <div className='main_content'>
                <div className='hide_btn'><AiOutlineEye className='eye' size={25} />Show More</div>
                <div className='sale'>SALE</div>
                <div className='icon_hide'>
                  <FcLike className='ic' size={25} />
                  <BsBag className='ic' size={25} />
                </div>
                <div className='image'>
                  <img className='img1' src="https://www.uboric.com/wp-content/uploads/2022/08/51rcWWWF7aL._UL1500_-670x669.jpg" alt="logo" />
                  <img className='img2' src="https://www.uboric.com/wp-content/uploads/2022/08/51ttBYWqRL-1-370x370.jpg" alt="logo" />

                </div>
                <div className='text'>
                  <p className='p_text'>FINACHI 100% Combed Bio Wash Cotton</p>
                  <p className='p_price'><s>₹ 799.00</s> <span>₹ 499.00</span></p>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>

      </div>
      <div className='six'>
        <div sbc_div>
          <h2 className='sbc'>New Arivials</h2>
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
      <hr className='hr' />
      <div>
        <div>
          <div className='head letter_space'><Heading size='lg' fontSize='2rem'>
            The Ultimate Domestic Online Shopping Experience Platform in India
          </Heading></div>
          <div className='mid_text'>
            <Text>Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest trending variety of unique products ends right here. A wide range of international products from global brands are available at your fingertips. We provide you with a world-class online shopping experience, along with superior service, to suit all your specific requirements. Our products are very reasonably priced and are not easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture, electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 24×7 Customer Care: For all your queries and concerns regarding your shopping orders.</Text>
          </div>

        </div>

      </div>
      <div>
        <div className='f_last'>
          <SimpleGrid columns={[1, 2, 2, 2]} spacing='1.5rem'>
            <Box>
              <Heading size='lg' fontSize='1.8rem'>
                Benefits Of Shopping
              </Heading>
              <div className='list'>
                <UnorderedList styleType='none' spacing='1.2rem' colorScheme='grey'>
                  <ListItem>User-Friendly</ListItem>
                  <ListItem>Safe & Secure Shopping</ListItem>
                  <ListItem>Check Out Closely</ListItem>
                  <ListItem>Multiple Payment Options</ListItem>
                  <ListItem>Order History</ListItem>
                </UnorderedList>
              </div>
              <div className='last_btn'>
                <Button colorScheme='blue' size='sm'>
                  shop Now
                </Button>
              </div>
            </Box>
            <Box>
              <img src="https://www.uboric.com/wp-content/uploads/2022/08/61OR0aPLJAL._SL1500_-670x575.jpg" alt="img" />
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <div className='seven'>
        <SimpleGrid columns={[2, 3, 4]} spacing='1.1rem'>
          <Box>
            <div className='flex'>
              <div>
                <img src="https://demo4.drfuri.com/media/razzi/truck3.svg" alt="" />
              </div>
              <div>
                <p>FREE SHIPPING</p>
                <p>From all orders over Rs 500</p>
              </div>
            </div>
          </Box>
          <Box>
            <div className='flex'>
              <div>
                <img src="https://demo4.drfuri.com/media/razzi/money.svg" alt="" />
              </div>
              <div>
                <p>FREE RETURNS</p>
                <p>Return money within 30 days</p>
              </div>
            </div>
          </Box>
          <Box>
            <div className='flex'>
              <div>
                <img src="https://demo4.drfuri.com/media/razzi/box.svg" alt="" />
              </div>
              <div>
                <p>SECURE SHOPPING</p>
                <p>You're in safe hands</p>
              </div>
            </div>
          </Box>
          <Box>
            <div className='flex'>
              <div>
                <img src="https://demo4.drfuri.com/media/razzi/like.svg" alt="" />
              </div>
              <div>
                <p>OVER 10,000 STYLES</p>
                <p>We have everything you need</p>
              </div>
            </div>
          </Box>
        </SimpleGrid>
      </div>
    </>

  )
}

export default Home