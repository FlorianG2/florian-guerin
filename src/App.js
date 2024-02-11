import './App.css';
import Title from './Components/Title/Title';
import Banner from './Components/Banner/Banner';
import ArrowProject from './Components/Navigation/Arrow_Project';


function App() {
  return (
    <div className='container mx-auto'>
      <Banner />
      <div className='h-screen'>
        <Title />
        <ArrowProject />
      </div>
      <div className='h-screen'>
        <Title />
      </div>
      <div className='h-screen'>
        <Title />
      </div>
    </div>
  );
}

export default App;
