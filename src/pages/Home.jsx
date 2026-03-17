import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import CounterSection from "../components/CounterSection";
import MissionSection from "../components/MissionSection";
import AboutPurposeSection from "../components/AboutPurposeSection";
import ReachOutSection from "../components/ReachOutSection";
import DonateBanner from "../components/DonateBanner";
import GallerySection from "../components/GallerySection";
import DonationHero from "../components/DonationHero";
import SupportSlider from "../components/SupportSlider";
import TestimonialSection from "../components/TestimonialSection";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
/* ================= HOME ================= */

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* ================= HERO SECTION ONLY ================= */}
      <section className="relative h-screen w-full">

        <HeroSlider />

      </section>
<SupportSlider/>
<MissionSection />
<AboutPurposeSection />
<ReachOutSection/>
<CounterSection />
<DonateBanner/>
<GallerySection/>
<DonationHero/>

<TestimonialSection/>
    </div>
  );
};

export default Home;

/* ================= HERO SLIDER ================= */

const HeroSlider = () => {
  const slides = [
    {
      image:
        "/home-heroImg2.png",
      subtitle: "Give Hope Through Food",
      title: "No One Left Hungry",
      text: "Humrahi Foundation provides free meals and ration support to underprivileged families, ensuring that no one sleeps hungry and every person can live with dignity, hope, and the strength to face a better tomorrow.",
    },
    {
      image:
        "/home-heroImg1.jpg",
      subtitle: "Give the Gift of Education",
      title: "Empower Lives Through Education",
      text: "Every child deserves a chance to learn, grow, and build a brighter future. Your support helps underprivileged children receive the education they deserve.",
    },
    {
      image:
        "/home-heroImg3.png",
      subtitle: "Give Health Support",
      title: "Save Lives Today With Care",
      text: "Ensuring access to essential healthcare and life-saving blood support for every person in need, giving hope, healing, and a second chance at life to those who need it most.",
    },
  ];

  const [current, setCurrent] = useState(0);

  /* ---------- Controls ---------- */

  const nextSlide = () => {
    setCurrent((p) =>
      p === slides.length - 1 ? 0 : p + 1
    );
  };

  const prevSlide = () => {
    setCurrent((p) =>
      p === 0 ? slides.length - 1 : p - 1
    );
  };

  /* ---------- Auto Slide ---------- */

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-full">

      {/* Slides */}
      <AnimatePresence mode="wait">

        <Motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

          {/* Main Content */}
          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center">

              {/* LEFT TEXT */}
              <div className="text-white max-w-xl">

                <Motion.p
                  key={slides[current].subtitle}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-primary uppercase tracking-widest mb-4"
                >
                  {slides[current].subtitle}
                </Motion.p>

                <Motion.h1
                  key={slides[current].title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight"
                >
                  {slides[current].title}
                </Motion.h1>

                <Motion.p
                  key={slides[current].text}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-lg text-grayLight"
                >
                  {slides[current].text}
                </Motion.p>

                {/* Buttons */}
                <Motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-10 flex gap-5"
                >
                  <Link to="/donate#donate-form">
                  <button className="bg-primary px-7 py-3 rounded-full font-medium hover:scale-105 transition">
                   Make a Donation
                  </button></Link>
 <Link to="/volunteer">
                  <button className="flex items-center gap-2 text-white hover:text-primary transition">
        <FaArrowRightLong />
             Become a Volunteer
                  </button>
                  </Link>
                </Motion.div>

              </div>

              {/* RIGHT EMPTY (FOR IMAGE FOCUS) */}
              <div className="hidden md:block" />

            </div>

          </div>

        </Motion.div>

      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute right-24 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 border border-white/40 rounded-full
        flex items-center justify-center text-white
        hover:bg-primary transition"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 border border-white/40 rounded-full
        flex items-center justify-center text-white
        hover:bg-primary transition"
      >
        <FiChevronRight size={22} />
      </button>

      {/* FUND FLOAT CARD */}
      <div className="absolute bottom-10 right-10 z-20">

        <Motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-[#D9272B] text-white rounded-xl p-6 w-[280px] shadow-xl"
        >
          <div className="flex items-center gap-4">

            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              🎁
            </div>

            <div>
              <p className="text-sm opacity-80">
                Total Funds Committed
              </p>

              <h3 className="text-2xl font-bold mt-1">
                ₹50,000
              </h3>
            </div>

          </div>
        </Motion.div>

      </div>

    </div>
  );
};