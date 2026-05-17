"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const PortfolioModal = dynamic(() => import("./PortfolioModal"), {
  ssr: false,
  loading: () => null,
});

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const { language } = useLanguage();
  const texts = language === "pt-BR" ? ptBR : en;

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">{texts.portfolio.title}</h2>
      <span className="section__subtitle">{texts.portfolio.subtitle}</span>

      <Suspense fallback={null}>
        <PortfolioModal
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
        />
      </Suspense>

      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          slidesPerView={3}
          initialSlide={1}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={2}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              loopAdditionalSlides: 2,
            },
            768: {
              slidesPerView: 2,
              loopAdditionalSlides: 2,
            },
            1024: {
              slidesPerView: 3,
              loopAdditionalSlides: 2,
            },
          }}
          className="portfolio__wrapper"
        >
          {Object.values(texts.portfolio.projects).map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolio__content">
                <Image
                  src={project.image}
                  alt={project.title.replace(/<br \/>/g, " ")}
                  width={300}
                  height={200}
                  className="portfolio__img"
                />
                <div className="portfolio__title-container">
                  <i className={project.icons.join(" ")}></i>
                  <h3
                    className="portfolio__title"
                    dangerouslySetInnerHTML={{
                      __html: project.title,
                    }}
                  />
                </div>
                <div className="portfolio__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="button button--flex button--small button--link portfolio__button"
                  onClick={() => setActiveModal(index)}
                >
                  {texts.portfolio.view}
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="portfolio__nav-btn prev">
            <i className="uil uil-angle-left-b"></i>
          </div>
          <div className="portfolio__nav-btn next">
            <i className="uil uil-angle-right-b"></i>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
