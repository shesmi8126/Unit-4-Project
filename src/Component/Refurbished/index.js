import React from 'react';
import './Refurbished.css'
import refurb from '../../static/media/refurb.gif'

class Refurbished extends React.Component {
    render() {
        return (
            <main className="Refurbished">
                <h1>Refurbished Deals</h1>
                    <p> Want new product but can't afford the cost? Browse our certified refurbished products. 100% the new product feel without the new product cost.</p>
              <img src={refurb}/>
            </main>
        );
    }
}

export default Refurbished