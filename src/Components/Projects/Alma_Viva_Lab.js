import LogoAlmaVivaLab from '../../Blanc-1080px-AVL.png'

function AlmaVivaLab() {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col bg-black'>
      <h1 className='text-center h-1/2'>Alma Viva Lab</h1>
      <img src={LogoAlmaVivaLab} className='rounded w-1/2  h-1/2 overflow-hidden' alt="logo Alma Viva Lab" />
    </div>
  );
}

export default AlmaVivaLab
