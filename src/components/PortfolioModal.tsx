"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";

interface PortfolioModalProps {
    activeModal: number | null;
    onClose: () => void;
}

export default function PortfolioModal({
    activeModal,
    onClose,
}: PortfolioModalProps) {
    const { language } = useLanguage();
    const texts = language === "pt-BR" ? ptBR : en;

    if (activeModal === null) return null;

    const item = Object.values(texts.portfolio.projects)[activeModal];

    return (
        <div
            className={`services__modal ${
                activeModal !== null ? "active-modal" : ""
            }`}
        >
            <div className="services__modal-content">
                <h4
                    className="services__modal-title"
                    dangerouslySetInnerHTML={{
                        __html: item.modal.title,
                    }}
                />
                <p className="services__modal-description">
                    {item.modal.description}
                </p>
                <br />
                <button
                    type="button"
                    className="uil uil-times services__modal-close"
                    aria-label="Close modal"
                    onClick={onClose}
                />
                <ul className="services__modal-services grid">
                    {item.modal.details.map((detail, detailIndex) => (
                        <li
                            key={detailIndex}
                            className="services__modal-service"
                        >
                            <i className="uil uil-check-circle services__modal-icon" />
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
                <br />
                <span className="button button--flex button--small button--link">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="services__modal-button"
                    >
                        {texts.portfolio.send}
                    </a>
                    <i className="uil uil-arrow-right button__icon" />
                </span>
            </div>
        </div>
    );
}
