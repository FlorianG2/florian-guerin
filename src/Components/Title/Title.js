import Typewriter from '../Typewritter/Typewritter';


function Title() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className=''>
        <div className=''>
          <p>I am</p>
        </div>
        <div>
          <h1 className='lg:text-9xl text-7xl'>FLORIAN</h1>
        </div>
        <div className='text-right'>
          <p><Typewriter text="Full Stack Developper" delay={50} /></p>
        </div>
      </div>
    </div>
  );
}

export default Title
