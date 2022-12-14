import React, { useEffect } from "react";
import { Select } from "antd";
import styles from "./SelectLanguage.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const SelectLanguage = () => {
  const { i18n } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("pl");
    }
  }, []);

  const handleLanguageChange = (len) => {
    i18n.changeLanguage(len);
  };

  return (
    <Select
      className={styles.selectLanguage}
      defaultValue={i18n.language}
      placement="bottomRight"
      dropdownStyle={{
        fontFamily: "Quicksand",
        letterSpacing: "2px",
      }}
      style={{
        width: 110,
      }}
      onChange={handleLanguageChange}
      options={[
        {
          value: "pl",
          label: "Polski",
        },
        {
          value: "en",
          label: "English",
        },
        {
          value: "de",
          label: "Deutsch",
        },
      ]}
    />
  );
};

export default SelectLanguage;
