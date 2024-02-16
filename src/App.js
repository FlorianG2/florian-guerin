import './App.css';
import Title from './Components/Title/Title';
import Logo from './Components/Banner/Logo';
import Banner from './Components/Banner/Banner';
import Links from './Components/Links/Links';
import Arrows from './Components/Navigation/Arrows';
import ContactForm from './Components/Contact/Contact_Form';
import ContactInfo from './Components/Contact/Contact_Info';
import Carrousel from './Components/Carrousel/Carrousel';
// import Bernigaud from './Components/Projects/Bernigaud';
// import AlmaVivaLab from './Components/Projects/Alma_Viva_Lab';


function App() {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center relative'>
        <Logo />
      </div>
      <div className='flex items-center justify-end relative'>
        <Banner />
      </div>
      <Links />
      <Arrows />
      <div className='h-screen'>
        <Title />
      </div>
      <div className='h-screen'>
        <Carrousel />
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
