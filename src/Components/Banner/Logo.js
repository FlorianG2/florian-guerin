


function Logo() {
  return (
    <div className='fixed top-10'>
      <ScrollToTop />
    </div>
  );
}

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop}><h1>FLO</h1></button>
  );
};

export default Logo;
