import React from 'react';
import './home.css';
import { homeData } from '../../dummyData';
import Home from './Home';

const Homes = () => {
  // const [items, setItems] = useState(homeData);
  // setItems(homeData);

  return (
    <>
      <section className="home">
        <Home items={homeData} />
      </section>
      <div className="mragin"></div>
    </>
  );
};

export default Homes;
