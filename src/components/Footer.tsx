"use client";

import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterLink {
    href: string;
    text: string;
}

interface SocialLink {
    href: string;
    icon: string;
    label: string;
}

export default function Footer() {
    const { language } = useLanguage();
    const texts = language === "pt-BR" ? ptBR : en;

    const footerLinks: FooterLink[] = [
        { href: "#home", text: texts.header.home },
        { href: "#about", text: texts.header.about },
        { href: "#portfolio", text: texts.header.portfolio },
        { href: "#contact", text: texts.header.contact },
    ];

    const socialLinks: SocialLink[] = [
        {
            href: "https://www.linkedin.com/in/ranierygoulart/",
            icon: "uil uil-linkedin",
            label: "LinkedIn profile",
        },
        {
            href: "https://github.com/Ranieeery",
            icon: "uil uil-github",
            label: "GitHub profile",
        },
        {
            href: "https://www.instagram.com/ranierygoulart/",
            icon: "uil uil-instagram",
            label: "Instagram profile",
        },
    ];

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div className="align--text">
                        <h2 className="footer__title">
                            &#60;/{texts.footer.title}&#62;
                        </h2>
                        <span className="footer__subtitle">
                            {texts.footer.subtitle}
                        </span>
                    </div>

                    <ul className="footer__links">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="footer__link">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="footer__socials">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer__social"
                                aria-label={social.label}
                                title={social.label}
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <p className="footer__copy">&#169; {texts.footer.note}</p>
            </div>
        </footer>
    );
}
