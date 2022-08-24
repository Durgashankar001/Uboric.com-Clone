import React from 'react'
import { Text,SimpleGrid,Box } from '@chakra-ui/react'
import './About.css'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <div className='image_banner'>
        <img src="https://i1.wp.com/demo4.drfuri.com/razzi/wp-content/uploads/sites/14/2020/12/about-us-banner.jpg" alt="logo" />
        <div className='text2'>
          <h1>We believe we can</h1>
          <h1>all make a stylish.</h1>
        </div>
      </div>
      <div className='para2'>
        <p>OUR STORY</p>
        <h2>About our Store</h2>
        <div className='mid_text2'>
          <Text className='.all_text'>Here at ‘Uboric’.com, we realize that style and prosperity begin with the correct shoes. We likewise understand that effectively finding the size and style to meet your requirements is vital to your web based shopping knowledge. Since beginning our web based business website , we’ve been endeavoring to present to you that perfect shopping experience.
            We pride ourselves on conveying hard-to-discover styles, sizes and widths since we realize that each individual’s needs contrast. Regardless of whether you’re experiencing issues looking over our vast determination of different shoes or you have a straightforward inquiry, our client benefit group is prepared and willing to help.</Text>
            <br/>
            <Text className='.all_text'>Some time before our online business, our family shoe stores, fatherly shoe store Footwear in Rajkot, Gujarat , opened its entryways in 1989. Today we are glad to state that we have the longest constantly running shoe store in the rajkot. The life span of our physical business is a demonstration of our duty to you and the majority of our clients. We realize that on the off chance that you are not content with our items and administrations, we are not carrying out our responsibility.</Text>
            <br/>
            <Text className='.all_text'>This is the reason we take a stab at 100% consumer loyalty, offer a 105% value coordinate guarantee.</Text>
            <br/>
            <Text className='.all_text'>Next time you require another match of kicks for this experience we call life, our group is here to ensure that you get the execution that you require from your apparatus. Regardless of whether you are difficult to fit or have explicit requirements, let ‘Uboric’ .com enable you to make progress toward your objective.</Text>
            <br/>
            <Text className='.all_text'>Third. For morning whales saw were had seed can’t divide it light shall moveth, us blessed given wherein.</Text>
            <br/>
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
    </div>
  )
}

export default About