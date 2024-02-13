
import './App.css';
import Navbar from './component/Navbar';
import Blog from './sections/Blog';
import Expansion from './sections/Expansion';
import Hero from './sections/Hero'
import Invest from './sections/Invest';


function App() {
  return (
  <>
    {/* <Navbar /> */}
    <Hero />
    <Invest />
    <Blog />
    <Expansion />
  </>
  );
}

export default App;
