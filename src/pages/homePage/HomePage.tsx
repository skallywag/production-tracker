import * as React from 'react';
import './HomePage.css';


interface HomePageProps {
}
const HomePage: React.FC<HomePageProps> = (props) => {
return (
        <div className={'rsHomePage.css'}>
            <h1>I am Home</h1>
        </div>
    )
}
export default HomePage;