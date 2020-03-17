import React from 'react';
import './Home.css'
import CategoryCard from '../CategoryCard'
import categoryData from '../../server/Categories'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.categoryCards = categoryData.map(data => <CategoryCard category={data.name} catImg={data.img} />);
    }

    render() {
        return (
            <main className="Home">
                {this.categoryCards}
            </main>
        );
    }
}

export default Home