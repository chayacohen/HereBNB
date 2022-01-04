import React from 'react'; 

export default function Inspiration() {


    return (
        <div className="inspo-container">
            <div className='inspo'>
                <h2>Inspiration for your next trip</h2>
                <div className='inspo-cities'>
                    <div className="inspo-city city-one">
                        <img src={window.placeholder}/>
                        <p>Scranton</p>
                    </div>
                    <div className="inspo-city city-two">
                        <img src={window.placeholder}/>
                        <p>Kingston</p>
                    </div>
                    <div className="inspo-city city-three">
                        <img src={window.placeholder}/>
                        <p>Montauk</p>
                    </div>
                    <div className="inspo-city city-four">
                        <img src={window.placeholder}/>
                        <p>Hudson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}