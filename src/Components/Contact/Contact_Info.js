import { useTranslation } from "react-i18next";

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-3 capitalize">{t("contact")}</h2>
      <h3 className="text-xl font-bold mb-3 capitalize">{t("location")}</h3>
        <p className="mb-3">Barcelona, {t("spain")}</p>
      <h3 className="text-xl font-bold mb-3 capitalize">{t("phone")}</h3>
        <p className="mb-3">+33 6 38 72 49 98</p>
        <p className="mb-3">+34 605 32 02 95</p>
      <h3 className="text-xl font-bold mb-3 capitalize">{t("email")}</h3>
        <p className="mb-3">guerinflorian02@gmail.com</p>
    </div>
  );
}

export default ContactInfo;
