import React from 'react';
import PDF from '../../Florian_Guerin_Resume.pdf';

function Links() {
  return (
    <div className='fixed bottom-10'>
      {/* External link for LinkedIn */}
      <a href="https://www.linkedin.com/in/florian-guerin-8b1091112/" target="_blank" rel="noopener noreferrer">
        <p>Linkedin</p>
      </a>

      {/* Link to open the PDF in a new tab */}
      <a href={PDF} target="_blank" rel="noopener noreferrer">
        <p>CV</p>
      </a>
    </div>
  );
}

export default Links;
