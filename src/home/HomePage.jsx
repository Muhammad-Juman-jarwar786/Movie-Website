import React from 'react';
import Homes from '../components/homes/Homes';
import Trending from '../components/trending/Trending';
import Upcomming from '../components/upcoming/Upcomming';
import { latest, recommended, upcome } from '../dummyData';

const HomePage = () => {
  // const [items, setItems] = useState(upcome);
  // const [item, setItem] = useState(latest);
  // const [rec, setRec] = useState(recommended);

  // setItems(upcome);
  // setItem(latest);
  // setRec(recommended);
  return (
    <>
      <Homes />
      <Upcomming items={upcome} title="Upcomming Movies" />
      <Upcomming items={latest} title="Latest Movies" />
      <Trending />
      <Upcomming items={recommended} title="Recommended Movies" />
    </>
  );
};

export default HomePage;
