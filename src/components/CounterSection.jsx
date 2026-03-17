import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";

/* ================= COUNTER SECTION ================= */

const CounterSection = () => {
  return (
    <section className="py-20 bg-cream">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">

        <CounterCard
          number={180}
          label="Featured Campaign"
        />

        <CounterCard
          number={280}
          label="Dedicated Volunteers"
        />

        <CounterCard
          number={1560}
          label="People Helped Happily"
        />

      </div>

    </section>
  );
};

export default CounterSection;

/* ================= SINGLE CARD ================= */

const CounterCard = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  /* ---------- COUNTING LOGIC (DECLARED FIRST) ---------- */

  const startCount = () => {
    let start = 0;
    const end = number;
    const duration = 2000; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
  };

  /* ---------- OBSERVER ---------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          startCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=" rounded-xl p-8 shadow-md
      hover:shadow-xl hover:-translate-y-2 transition duration-300"
    >

      {/* Number */}
      <h2 className="text-5xl font-bold text-[#D9272B]">
        {count}+
      </h2>

      {/* Label */}
      <p className="mt-3 text-dark font-medium text-lg">
        {label}
      </p>

    </Motion.div>
  );
};