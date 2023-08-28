import React from 'react';
import { trending } from '../../dummyData';
import Home from '../homes/Home';
import './style.css';

const Trending = () => {
  // const [items, setItems] = useState(trending);
  // setItems(trending);
  return (
    <>
      <section className="trending">
        <Home items={trending} />
      </section>
    </>
  );
};

export default Trending;
