"use client";

import { useState } from "react";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";

type QualificationItem = {
  title: string;
  subtitle: string;
  dateRange: string;
};

interface TabProps {
  icon: string;
  title: string;
  target: string;
  isActive: boolean;
  onClick: (target: string) => void;
}

const QualificationTab = ({
  icon,
  title,
  target,
  isActive,
  onClick,
}: TabProps) => (
  <div
    className={`qualification__button button--flex ${
      isActive ? "qualification__active" : ""
    }`}
    data-target={`#${target}`}
    onClick={() => onClick(target)}
  >
    <i className={`uil ${icon} qualification__icon`}></i> {title}
  </div>
);

const QualificationData = ({ items }: { items: QualificationItem[] }) => (
  <>
    {items.map((item, index) => (
      <div key={index} className="qualification__data">
        {index % 2 === 1 && <div></div>}

        {index % 2 === 1 && (
          <div>
            <span className="qualification__rounder"></span>
            {index !== items.length - 1 && (
              <span className="qualification__line"></span>
            )}
          </div>
        )}

        <div>
          <h3 className="qualification__title">{item.title}</h3>
          <span className="qualification__subtitle">{item.subtitle}</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i> {item.dateRange}
          </div>
        </div>

        {index % 2 === 0 && (
          <div>
            <span className="qualification__rounder"></span>
            {index !== items.length - 1 && (
              <span className="qualification__line"></span>
            )}
          </div>
        )}

        {index % 2 === 0 && <div></div>}
      </div>
    ))}
  </>
);

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education");
  const { language } = useLanguage();
  const texts = language === "pt-BR" ? ptBR : en;

  const educationItems = [
    {
      title: texts.qualification.education[0].title,
      subtitle: texts.qualification.education[0].subtitle,
      dateRange: texts.qualification.education[0].dateRange,
    },
    {
      title: texts.qualification.education[1].title,
      subtitle: texts.qualification.education[1].subtitle,
      dateRange: texts.qualification.education[1].dateRange,
    },
    {
      title: texts.qualification.education[2].title,
      subtitle: texts.qualification.education[2].subtitle,
      dateRange: texts.qualification.education[2].dateRange,
    },
  ];

  const workItems = [
    {
      title: texts.qualification.work[0].title,
      subtitle: texts.qualification.work[0].subtitle,
      dateRange: texts.qualification.work[0].dateRange,
    },
    {
      title: texts.qualification.work[1].title,
      subtitle: texts.qualification.work[1].subtitle,
      dateRange: texts.qualification.work[1].dateRange,
    },
    {
      title: texts.qualification.work[2].title,
      subtitle: texts.qualification.work[2].subtitle,
      dateRange: texts.qualification.work[2].dateRange,
    },
  ];

  return (
    <section className="qualification section">
      <h2 className="section__title">{texts.qualification.title}</h2>
      <span className="section__subtitle">{texts.qualification.subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <QualificationTab
            icon="uil-briefcase-alt"
            title={texts.qualification.tab[0].title}
            target="work"
            isActive={activeTab === "work"}
            onClick={setActiveTab}
          />
          <QualificationTab
            icon="uil-graduation-cap"
            title={texts.qualification.tab[1].title}
            target="education"
            isActive={activeTab === "education"}
            onClick={setActiveTab}
          />
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            data-content=""
            id="education"
          >
            <QualificationData items={educationItems} />
          </div>

          <div
            className={`qualification__content ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            data-content=""
            id="work"
          >
            <QualificationData items={workItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
