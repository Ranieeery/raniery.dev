"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";

const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const themeListeners = new Set<() => void>();

const getThemeSnapshot = () => {
  if (typeof document === "undefined") {
    return false;
  }

  return document.body.classList.contains("dark-theme");
};

const subscribeToTheme = (listener: () => void) => {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
};

const setTheme = (isDarkMode: boolean) => {
  document.body.classList.toggle("dark-theme", isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  themeListeners.forEach((listener) => listener());
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => false
  );
  const debouncedScrollRef = useRef<((...args: unknown[]) => void) | null>(
    null
  );

  const texts = language === "pt-BR" ? ptBR : en;

  const menuItems = [
    { href: "#home", icon: "uil-estate", text: texts.header.home },
    { href: "#about", icon: "uil-user", text: texts.header.about },
    { href: "#skills", icon: "uil-books", text: texts.header.skills },
    {
      href: "#portfolio",
      icon: "uil-folder",
      text: texts.header.portfolio,
    },
    { href: "#contact", icon: "uil-at", text: texts.header.contact },
  ];

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 50;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    debouncedScrollRef.current = debounce(updateActiveSection, 100);

    const handleScroll = () => {
      debouncedScrollRef.current?.();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href={`/${language}`} className="nav__logo">
          &#60;Raniery&#62;
        </Link>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {menuItems.map((item) => (
              <li key={item.href} className="nav__item">
                <Link
                  href={item.href}
                  className={`nav__link ${activeSection === item.href.slice(1) ? "active-link" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i> {item.text}
                </Link>
              </li>
            ))}
            <div className="nav__lang">
              <button
                className="nav__lang-btn"
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <i className="uil uil-globe nav__icon"></i>
                <span>{texts.header.language}</span>
                <i className="uil uil-angle-down"></i>
              </button>
              <div
                className={`nav__lang-menu ${isLangMenuOpen ? "show-lang-menu" : ""}`}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                <button
                  className={`nav__lang-option ${language === "pt-BR" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("pt-BR")}
                >
                  Português
                </button>
                <button
                  className={`nav__lang-option ${language === "en" ? "active" : ""}`}
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </button>
              </div>
            </div>
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "contents",
            }}
          >
            <i className="uil uil-times nav__close"></i>
          </button>
        </div>

        <div className="nav__btns">
          <button
            type="button"
            onClick={() => setTheme(!isDarkMode)}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "contents",
            }}
          >
            <i
              className={`uil ${
                isDarkMode ? "uil-sun" : "uil-moon"
              } change-theme`}
            ></i>
          </button>

          <button
            type="button"
            className="nav__toggle"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
