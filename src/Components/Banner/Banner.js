import './Banner.css'
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


function Banner() {



  return (
    <div className='fixed top-10'>
      {/* <ScrollToTop /> */}
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
  const { i18n } = useTranslation();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    const lang_code = event.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <div id='btn-selection'>
      <select id="dropdown" className='bg-transparent' value={selectedOption} onChange={handleOptionChange}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
      </select>

    </div>
  );
};

const ScrollToProjects = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mx-2'>
      <button onClick={scrollToProjects} ><p>{t("projects")}</p></button>
    </div>
  );
};

const ScrollToContact = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: 2 * viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mx-2'>
      <button onClick={scrollToContact} ><p>{t("contact")}</p></button>
    </div>
  );
};

export default Banner;
