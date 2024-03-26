import Arrows from '../Navigation/Arrows';
import Links from '../Links/Links';



function Footer() {
  return (
    <div className='sticky bottom-0 flex justify-between items-center z-10 bg-dark1 py-3 px-2'>
      <div className='flex justify-between'>
        <Links />
      </div>
      <div>
        <Arrows />
      </div>
    </div>
  );
}

export default Footer;
