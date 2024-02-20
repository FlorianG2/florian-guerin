import { useTranslation } from "react-i18next";


function NewProject() {
  const { t } = useTranslation();

  return (
    <div className='w-full h-full flex justify-center items-center flex-col bg-dark rounded box-shadow'>
      <h1 className='text-center'>New Project ?</h1>
      <ScrollToContactDown />
    </div>
  );
}

const ScrollToContactDown = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    window.scrollTo({
      top: 2 * viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='box-shadow p-2 rounded my-2 color-50' id='btn-website'>
      <button onClick={scrollToContact} className=''><p>{t("contact")}</p></button>
    </div>
  );
};
export default NewProject
