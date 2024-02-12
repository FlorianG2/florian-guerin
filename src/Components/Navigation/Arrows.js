
import React, { useEffect, useState } from 'react';

function Arrows () {
  const [screenPercentage, setScreenPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;

      const currentPercentage = (currentScroll / (documentHeight - windowHeight)) * 100;
      setScreenPercentage(currentPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let content;

  if (screenPercentage >= 0 && screenPercentage < 50) {
    content =<ScrollToProjectsDown />;
  } else if (screenPercentage >= 50 && screenPercentage < 100) {
    content =<ScrollToContactDown />;
  } else {
    content =<ScrollToProjectsUp />;
  }

  return (
    <div className="h-1/5 flex items-center justify-end relative">
      {content}
    </div>
  );
};


const ScrollToProjectsDown = () => {
  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToProjects} className='fixed'><p>Projects ↓</p></button>
  );
};

const ScrollToContactDown = () => {
  const scrollToContact = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: 2 * viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToContact} className='fixed'><p>Contact ↓</p></button>
  );
};

const ScrollToProjectsUp = () => {
  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToProjects} className='fixed'><p>Projects ↑</p></button>
  );
};


export default Arrows
