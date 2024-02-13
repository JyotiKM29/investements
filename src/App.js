
import Headroom from 'react-headroom';
import './App.css';
import Navbar from './component/Navbar';
import Blog from './sections/Blog';
import Connect from './sections/Connect';
import Expansion from './sections/Expansion';
import Footer from './sections/Footer';
import Hero from './sections/Hero'
import Invest from './sections/Invest';
import Testimonials from './sections/Testimonials';


function App() {
  return (
  <>
  <Headroom>
  <Navbar />
  </Headroom>
   
    <Hero />
    <Invest />
    <Blog />
    {/* <Expansion />
    <Testimonials />
    <Connect />
    <Footer /> */}
  </>
  );
}

export default App;
