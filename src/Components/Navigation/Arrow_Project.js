import Links from "../Links/Links";

function ArrowProject() {
  return (
     <div className="h-1/5 flex items-center justify-between">
      <Links />
      <div>
        <ScrollToProjects />
      </div>
    </div>
  );
}

const ScrollToProjects = () => {
  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mx-2'>
      <button onClick={scrollToProjects}><p>Projects ↓</p></button>
    </div>
  );
};

export default ArrowProject
