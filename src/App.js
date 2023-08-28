import './App.css';
import HomePage from './home/HomePage';
import { Routes, Route } from 'react-router-dom';
import SinglePage from './components/watch/SinglePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/singlepage/:id" element={<SinglePage />} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
