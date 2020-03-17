import React from 'react';
import './Clearance.css'
import sale from '../../static/media/sale.gif'

class Clearance extends React.Component {
    render() {
        return (
            <main className="Clearance">
                <h1>Clearance Stuff</h1>
                    <p> A page to find all sorts of discounted items such as phones, televisions, and computer parts.</p>
              <img src={sale}/>
            </main>
        );
    }
}

export default Clearance