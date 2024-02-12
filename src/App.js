import './App.css';
import Title from './Components/Title/Title';
import Banner from './Components/Banner/Banner';
import Links from './Components/Links/Links';
// import ArrowProject from './Components/Navigation/Arrow_Project';
import Arrows from './Components/Navigation/Arrows';
import ContactForm from './Components/Contact/Contact_Form';
import ContactInfo from './Components/Contact/Contact_Info';


function App() {
  return (
    <div className='container mx-auto'>
      <div className='h-screen'>
      <div className='h-1/5'>
        <div className='fixed'>
          <Banner />
        </div>
      </div>
        <Title />
        <Links />
        <Arrows />
      </div>
      <div className='h-screen'>
      <div className='h-1/5'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 auto-cols-auto mx-5'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <div className='h-screen'>
      <div className='h-1/5'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 auto-cols-auto mx-5'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
