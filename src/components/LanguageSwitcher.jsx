import React from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-start md:items-center justify-center gap-x-1.5  `}>
      <MdLanguage className=" xl:w-4 xl:h-4 md:w-3 md:h-3 w-5 h-5"/>
      <button
        onClick={() => changeLanguage("de")}
        className={`lang  ${
          i18n.language === "de" ? "activeLang" : ""
        }`}
      >
        DE
      </button>
      <div className="border-l-[1px] border-orange-200 h-5"></div>
      <button
        onClick={() => changeLanguage("en")}
        className={`lang ${
          i18n.language === "en" ? "activeLang" : ""
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
