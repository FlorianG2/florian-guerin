import React, { useState } from "react";
import './Contact_Form.css'
import { useTranslation } from "react-i18next";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/456e2250-c9c5-11ee-bb69-515451de93af"; // TODO - update to the correct endpoint

function ContactForm () {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact-form-container box-shadow">
      <p className="text-4xl font-bold text-center capitalize">{t("contact-form")}</p>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder={t("your-name")}
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm color bg-transparent border-input"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder={t("email")}
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm color bg-transparent border-input"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder={t("your-message")}
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm color bg-transparent border-input"
            required
          />
        </div>
        <div className="pt-0 mb-1 mt-8 flex justify-center">
          <button
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold color transition-all duration-150 ease-linear box-shadow"
            type="submit"
          >
            {t("send-message")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
