import Typewriter from '../Typewritter/Typewritter';


function Title() {
  return (
    <div className='flex justify-center items-center h-3/5'>
      <div className='w-fit'>
        <div className=''>
          <p>I am</p>
        </div>
        <div>
          <h1 className='text-9xl'>FLORIAN</h1>
        </div>
        <div className='text-right'>
          <p><Typewriter text="Full Stack Developper" delay={50} /></p>
        </div>
      </div>
    </div>
  );
}

export default Title
