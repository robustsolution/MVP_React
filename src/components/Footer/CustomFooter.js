import React from "react";
import { useTranslation } from "react-i18next";
export default function CustomFooter() {
  const { t, i18n } = useTranslation();
  return (
    <section className="custom-footer py-5">
      <div className="container">
        <h1 className="text-center mb-3 text-white">Reinventing the Internet of Turst</h1>
        <p className="text-center mb-5 text-white">
          Bender cobblers chap grub sloshed up the duff I fantastic owt to do
          with me at public school, James Bond chip shop chancer my lady
          gormless brilliant the full monty lavatory, buggered loo horse play
          cracking goal butty young delinquent zonked no biggie.!{" "}
        </p>
      </div>
      <div className="container text-center">
        <a href="/#" className="btn_hover app_btn main-btn">
          {t("navmenu.request_demo")}
        </a>
      </div>
    </section>
  );
}
