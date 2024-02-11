import './App.css';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';


function App() {
  return (
    <div className='container mx-auto'>
      <Banner />
      <div className='h-screen'>
        <Home />
      </div>
      <div className='h-screen'>
        <Home />
      </div>
      <div className='h-screen'>
        <Home />
      </div>
    </div>
  );
}

export default App;
