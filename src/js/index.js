//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props) {
    return (
        <div className="container bg-black text-white">
            <div className="d-flex justify-content-center">
                <h1>My Counter</h1>
            </div>
            <div className="d-flex justify-content-center fs-1">
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">
                    <i class="bi bi-clock "></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-clock mb-2" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                </div>
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">{props.digitSix % 10}</div>
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">{props.digitFive % 10}</div>
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">{props.digitFour % 10}</div>
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">{props.digitThree % 10}</div>
                <div className="bg-dark bg-opacity-50 px-3 me-4  rounded">{props.digitTwo % 10}</div>
                <div className="bg-dark bg-opacity-50 px-3  rounded">{props.digitOne % 10}</div>
            </div>
        </div>
    );
};
let counter = 0;
setInterval(function () {
    const six = Math.floor(counter / 1000000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />);
}, 1000);

SimpleCounter.prototype = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};




