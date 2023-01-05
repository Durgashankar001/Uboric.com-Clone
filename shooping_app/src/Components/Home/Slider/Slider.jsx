import React from "react";
import "./Slider.css";
import { BsArrowRight } from 'react-icons/bs'
import img1 from "../../../assetes/uboric.first.jpg"
import img2 from "../../../assetes/uboric.second.jpg"
import img3 from "../../../assetes/uboric.three.jpg"
import img4 from "../../../assetes/uboric.four.jpg"
import img5 from "../../../assetes/uboric.five.jpg"
import img6 from "../../../assetes/uboric.six.jpg"
const colors = [
    img1, img2, img3, img4, img5, img6
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