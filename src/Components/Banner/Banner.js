import './Banner.css'
import React, { useState } from 'react';


function Banner() {
  return (
    <div className='w-full flex justify-between items-center'>
      <ScrollToTop />
      <div className='flex justify-around items-center'>
        <ScrollToProjects />
        <ScrollToContact />
        <div>
          <MyDropdown />
        </div>
      </div>
    </div>
  );
}

const MyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select id="dropdown" className='bg-transparent' value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">EN</option>
        <option value="option2">FR</option>
        <option value="option3">ES</option>
      </select>

    </div>
  );
};

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
      <button onClick={scrollToProjects} ><p>Projects</p></button>
    </div>
  );
};

const ScrollToContact = () => {
  const scrollToContact = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: 2 * viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mx-2'>
      <button onClick={scrollToContact} ><p>Contact</p></button>
    </div>
  );
};

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

export default Banner;
