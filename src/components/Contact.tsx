"use client";

import Image from "next/image";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactInfo {
  icon: string;
  title: string;
  subtitle: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const texts = language === "pt-BR" ? ptBR : en;

  const contactInfos: ContactInfo[] = [
    {
      icon: "uil uil-phone contact__icon",
      title: texts.contact.info[0].title,
      subtitle: texts.contact.info[0].subtitle,
    },
    {
      icon: "uil uil-envelope contact__icon",
      title: texts.contact.info[1].title,
      subtitle: texts.contact.info[1].subtitle,
    },
    {
      icon: "uil uil-map-marker contact__icon",
      title: texts.contact.info[2].title,
      subtitle: texts.contact.info[2].subtitle,
    },
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{texts.contact.title}</h2>
      <span className="section__subtitle">{texts.contact.subtitle}</span>

      <div className="contact__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <div className="contact__container container grid">
              {contactInfos.map((info, index) => (
                <div key={index} className="contact__information">
                  <i className={info.icon}></i>
                  <div>
                    <h3 className="contact__title">{info.title}</h3>
                    <span className="contact__subtitle">{info.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:raniery2003@hotmail.com"
              target="_blank"
              rel="noreferrer"
              className="button button--flex button--white project__button"
            >
              {texts.contact.link}
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          <Image
            src="/images/contact.svg"
            alt="Contact illustration"
            className="project__img"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
