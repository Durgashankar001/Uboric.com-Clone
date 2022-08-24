import React from 'react'
import './Cardcarousel.css'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

const Cardcarousel = ({
    products
}) => {

    let box = document.querySelector(".pi")
    const btnPressPre = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
    }
    const btnPressNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
    }

    return (
        <>
            <div className='pc'>
                <AiOutlineDoubleLeft size={25} onClick={btnPressPre} className='pre_btn' />
                <AiOutlineDoubleRight size={25} onClick={btnPressNext} className='next_btn' />
                <div className='pi'>
                    {products?.map((el) => {
                        return (<div className='product'>{el}</div>)
                    })}
                </div>
            </div>
        </>


    )
}

export default Cardcarousel