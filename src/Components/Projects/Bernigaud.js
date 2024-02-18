import LogoBernigaud from '../../BernigaudGroup.png'

function Bernigaud() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col bg-dark box-shadow'>
      <h1 className='text-center'>Bernigaud Group</h1>
      <img src={LogoBernigaud} className='rounded w-1/2 overflow-hidden' alt="logo Bernigaud" />
    </div>
  );
}

export default Bernigaud
