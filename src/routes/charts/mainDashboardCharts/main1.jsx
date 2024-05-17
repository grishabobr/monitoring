import '../../../App.css';
import { useState, useEffect } from 'react';
import { student_info } from '../../../student_config';


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function pickHex(col1, col2, col3, weight) {
    let color1 = col1;
    let color2 = col2;
    if (weight > 0.5) {
        color1 = col2;
        color2 = col3;
        weight -=0.5;
    }
    let w1 = weight*2;
    let w2 = 1 - w1;
    var rgb = [Math.round(color2[0] * w1 + color1[0] * w2),
    Math.round(color2[1] * w1 + color1[1] * w2),
    Math.round(color2[2] * w1 + color1[2] * w2)];
    return rgbToHex(rgb);
}


export default function Main1() {
    

    const defaultState = {
        rating: 83
    }

    const [rating, setRating] = useState(defaultState.rating);
    const [frameColor, setFrameColor] = useState(pickHex(hexToRgb('#ED5B5B'), hexToRgb('#F4D25C'), hexToRgb('#4D9559'), rating/100));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student_info)
    };

    useEffect(() => {
        fetch('http://localhost:3333/main1', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setRating(data.rating);
                
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        setFrameColor(pickHex(hexToRgb('#ED5B5B'), hexToRgb('#F4D25C'), hexToRgb('#4D9559'), rating / 100));
    }, [rating]);



    return (
        <div className='chart main1'>
            <div className='chart-title'>
                Рейтинг
            </div>
            <div className='chart-content main1-content'>
                <div className='rating-frame' style={{outlineColor: frameColor}}>
                    {rating}
                </div>
            </div>
        </div>
    );
}