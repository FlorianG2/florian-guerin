import Typewriter from '../Typewritter/Typewritter';
import { useTranslation } from "react-i18next";


function Title() {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center items-center h-full'>
      <div className=''>
        <div className=''>
          <p>{t("i-am")}</p>
        </div>
        <div>
          <h1 className='lg:text-9xl text-7xl'>FLORIAN</h1>
        </div>
        <div className='text-right'>
          <p><Typewriter text="Full Stack Developer" delay={50} /></p>
        </div>
      </div>
    </div>
  );
}

export default Title
