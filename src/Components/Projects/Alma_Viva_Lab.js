import LogoAlmaVivaLab from '../../Blanc-1080px-AVL.png'

function AlmaVivaLab() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col bg-dark rounded box-shadow'>
      <h1 className='text-center'>Alma Viva Lab</h1>
      <img src={LogoAlmaVivaLab} className='rounded w-1/2 overflow-hidden' alt="logo Bernigaud" />
      {/* <a href="https://www.instagram.com/bernigaudgroup/" target="_blank" rel="noopener noreferrer"> */}
        <div className='box-shadow p-2 rounded my-2 color-50 disabled' id='btn-website'>
          <p className=''>Website</p>
        </div>
      {/* </a> */}
    </div>
  );
}

export default AlmaVivaLab
