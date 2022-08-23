import React from "react";
import "./Slider.css";
import { BsArrowRight } from 'react-icons/bs'
const colors = [
    "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/electronics.jpg",
    "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/clothing-3.jpg",
    "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/health-care-4.jpg",
    "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/kitchenwear-3.jpg",
    "https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/grocery-3.jpg"
];
const delay = 3000;
// "#0088FE", "#00C49F", "#FFBB28"
export function Slide() {
    const [index, setIndex] = React.useState(0);

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div className="slide" key={index} style={{ backgroundColor }}>
                        <img src={backgroundColor} />
                        <button className="btn">Shop Now <BsArrowRight className="ic2" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
}