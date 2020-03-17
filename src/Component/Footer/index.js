import React from 'react';
import './Footer.css'
import creditcard from '../../static/media/creditcard.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer--text">
                With our card, <b>get 5% off INSTANTLY</b> in-store upon approval (regular terms apply)
                Apply now &amp; get a response in minutes! Click <b>here</b> to learn more.
                </div>
                <img className="Footer--cc" src={creditcard} />
            </footer>
        );
    }
}

export default Footer