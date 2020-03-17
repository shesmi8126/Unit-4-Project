import React from 'react';
import './CategoryCard.css'

class CategoryCard extends React.Component {
    render() {
        return (
            <div className="CategoryCard">
                <a href="#">
                    <img src={this.props.catImg} />
                </a>
                <div>{this.props.category}</div>
            </div>
        );
    }
}

export default CategoryCard