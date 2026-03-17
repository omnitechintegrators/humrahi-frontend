
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

/* ================= FAQ DATA ================= */

const faqs = [
  {
    q: "How did you hear about our organization?",
    a: "Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents.",
  },
  {
    q: "How frequently do you prefer to volunteer?",
    a: "We offer flexible volunteering schedules including weekly, monthly, and event-based opportunities.",
  },
  {
    q: "What motivated you to participate in this event?",
    a: "Most of our volunteers are motivated by community impact, personal growth, and giving back to society.",
  },
  {
    q: "Is My Donation Actually Being Put To Use?",
    a: "Yes, every donation is carefully allocated toward our education, food, healthcare, and development programs.",
  },
  {
    q: "What is your donation model?",
    a: "We follow a transparent, audited, and impact-driven donation model to ensure accountability.",
  },
];

/* ================= MAIN PAGE ================= */

const Faq = () => {
  return (
    <main className="bg-cream overflow-hidden">

      {/* HERO */}
      <FaqHero />

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}
            <LeftPanel />

            {/* RIGHT SIDE */}
            <AccordionPanel />

          </div>

        </div>
      </section>

    </main>
  );
};

export default Faq;

/* ================= HERO ================= */

const FaqHero = () => {
  return (
    <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
        alt="FAQ"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-red-950/50" />

      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4"
      >

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          FAQ’s
        </h1>

        <p className="text-sm text-amber-400 font-bold uppercase tracking-widest">
          Home / FAQ’s
        </p>

      </Motion.div>

    </section>
  );
};

/* ================= LEFT PANEL ================= */

const LeftPanel = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >

      {/* TAG */}
      <div className="flex items-center gap-3">
        <span className="w-10 h-[2px] bg-amber-500" />
        <span className="text-amber-500 italic font-medium">
          Frequently Asked Questions
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        Key Questions Answered About Our Charity Initiatives
      </h2>

      {/* TEXT */}
      <p className="text-slate-500 leading-relaxed">
        Partner with us to make a greater impact. Our corporate
        sponsorship program offers businesses the opportunity
        to support our mission while gaining visibility and
        fulfilling corporate social responsibility goals.
      </p>

      {/* CONTACT CARD */}
      <div className="
        bg-white p-8 rounded-3xl
        shadow-xl shadow-slate-200/50
        border border-slate-100
      ">

        <div className="flex items-center gap-4 mb-6">

          <div className="
            w-12 h-12 bg-emerald-50
            text-primary rounded-full
            flex items-center justify-center
          ">
            <HelpCircle size={22} />
          </div>

          <div>
            <h4 className="font-bold text-lg">
              Still Have Questions?
            </h4>
            <p className="text-sm text-slate-500">
              Get the answers you need, quickly!
            </p>
          </div>

        </div>

        <Link
          to="/contact#contact-form"
          className="
            block text-center
            bg-primary text-white
            py-4 rounded-full font-bold
            hover:amber-500 transition
          "
        >
          Contact Us
        </Link>

      </div>

    </Motion.div>
  );
};

/* ================= ACCORDION ================= */

const AccordionPanel = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-5">

      {faqs.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={active === i}
          onClick={() =>
            setActive(active === i ? null : i)
          }
        />
      ))}

    </div>
  );
};

/* ================= SINGLE ITEM ================= */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        bg-white rounded-2xl
        shadow-md border border-slate-100
        overflow-hidden
      "
    >

      {/* HEADER */}
      <button
        onClick={onClick}
        className="
          w-full flex items-center justify-between
          p-6 text-left font-bold text-slate-800
          hover:bg-slate-50 transition
        "
      >

        <span>{item.q}</span>

        <ChevronDown
          size={20}
          className={`
            transition-transform
            ${isOpen ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* BODY */}
      {isOpen && (
        <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
          {item.a}
        </div>
      )}

    </Motion.div>
  );
};