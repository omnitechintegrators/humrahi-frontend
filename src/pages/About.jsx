import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUsers, FiHeart, FiTarget } from "react-icons/fi";
import { 
  HeartHandshake, 
  ShieldCheck, 
  PhoneCall, 
  ArrowUpRight, 
  ChevronRight 
} from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
// Sub-component imports (Assuming these exist in your project)
import CounterSection from "../components/CounterSection";
import GallerySection from "../components/GallerySection";
import TestimonialSection from "../components/TestimonialSection";

/* ================= REUSABLE COMPONENTS ================= */

const FounderCard = ({ name, role, image, isCoFounder }) => (
  <div className="relative group">
    <div className="relative p-[2px] bg-neon-yellow clip-path-corner">
      <div className="bg-transparent p-6 pb-12 flex flex-col items-center min-w-[280px]">
        <div className="w-full aspect-square overflow-hidden clip-path-corner border-4 border-transparent">
          <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="mt-8 text-center w-full">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
            {name}
          </h3>
          <div className="relative inline-block w-full">
            <div className={`py-3 px-8 font-black text-sm uppercase skew-x-[-10deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] ${
              isCoFounder ? 'bg-neon-cyan text-black' : 'bg-neon-yellow text-black'
            }`}>
              <span className="inline-block skew-x-[10deg]">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ================= MAIN ABOUT PAGE ================= */

const About = () => {
  const [activeTab, setActiveTab] = useState('Mission');
  
  const tabs = ['Mission', 'Vision'];
  const points = [
    "Seamlessly conceptualize go forward total linkage",
    "Whiteboard multifunctional applications rather than",
    "Applications rather than lived reliable functional",
    "Leverage other quality ideas synestic outsourcing"
  ];

  const listItems = [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "If you are going to use a passage.",
    "Lorem Ipsum on the tend to repeat."
  ];

  const founders = [
    {
      name: "Lalan Mahato",
      role: "Chairman and President",
      isCoFounder: false,
      image: "/founderimg.jpeg"
    },
  ];

  return (
    <main className="bg-cream overflow-hidden">
      <AboutHero />

      {/* 1. Get To Know Us Section */}
      <section id="mission" className="max-w-7xl mx-auto px-6 py-20 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-[#F5A623]"></div>
              <span className="text-[#F5A623] font-medium uppercase tracking-widest text-sm">Get To Know Us</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
              Let Us Come Together To Make a Difference
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Humrahi Foundation is dedicated to empowering lives, restoring dignity, and building hope for vulnerable communities.
            </p>
            <div className="space-y-8 pt-4">
              <Progress label="Food Help" percent="67" color="bg-emerald-600" />
              <Progress label="Medical Help" percent="85" color="bg-emerald-900" />
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === tab ? 'bg-amber-600 text-white shadow-lg' : 'bg-primary text-white opacity-80 hover:opacity-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <img src="/pagehero.jpg" alt="Volunteers" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 right-6 bg-white/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white min-w-[120px] text-center shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest opacity-90">Since</p>
                <h3 className="text-5xl font-black my-1">14</h3>
                <p className="text-xs font-bold opacity-90">Years</p>
              </div>
            </div>
          </div>

          <div className="lg:pt-24">
            <ul className="space-y-5">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <ChevronRight className="text-amber-600 mt-0.5 shrink-0" size={18} />
                  <span className="text-slate-600 text-sm font-medium group-hover:text-amber-600 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Impact Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 w-[85%] aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl">
              <img src="/eduimg1.jpg" alt="Impact" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-12 right-0 z-20 w-[65%] aspect-[4/3] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
              <img src="/eduimg2.jpg" alt="Growth" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
            Your support today can transform lives and build a better tomorrow. 
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="flex flex-col items-center justify-center p-6 border border-slate-100 rounded-3xl shadow-sm min-w-[140px]">
                <span className="text-5xl font-black text-primary italic">25</span>
                <span className="text-xs text-slate-400 mt-2 uppercase font-bold">Years Experience</span>
              </div>
              <ul className="space-y-4">
                {points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t">
               <Link to="/donate#donate-form" className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary transition-all shadow-lg">
                Donate Now <ArrowUpRight size={20} />
               </Link>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border rounded-full flex items-center justify-center"><PhoneCall size={20}/></div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Call Us:</p>
                    <p className="font-bold text-slate-900">148 359 505 285</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <OurWork />
      <CounterSection />

     <section id="founder-sec" className="py-28 bg-primary text-white relative overflow-hidden">

  {/* Decorative Gradient Circle */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Section Heading */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-widest text-sm text-amber-300 font-bold mb-4">
        Leadership
      </p>
      <h2 className="text-4xl md:text-5xl font-black">
        Meet Our Founder
      </h2>
      <p className="opacity-80 max-w-2xl mx-auto mt-4">
        Visionaries who turned compassion into action and built a foundation dedicated to transforming lives.
      </p>
    </div>
    {/* Founder Cards */}
    <div className="flex  items-center justify-center">

      {founders.map((founder, index) => (
        <Motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative"
        >

          <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 text-center shadow-xl transition">

            {/* Image */}
            <div className="relative w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold mb-2">
              {founder.name}
            </h3>

            {/* Role */}
            <p className="text-amber-300 font-semibold uppercase text-sm tracking-widest mb-6">
              {founder.role}
            </p>

            {/* Short Description */}
            <p className="text-white/80 text-sm leading-relaxed max-w-sm mx-auto">
              {founder.role === "Founder"
                ? "With a strong belief in equal opportunity, he laid the foundation to empower communities through education and healthcare."
                : "Committed to sustainable impact, he ensures innovation and compassion drive every initiative of the foundation."
              }
            </p>

          </div>

        </Motion.div>
      ))}

    </div>

  </div>

</section>

      <TeamSection />
      <StartSomething />
      <GallerySection />
      <TestimonialSection />
    </main>
  );
};

/* ================= HELPER COMPONENTS ================= */

const Progress = ({ label, percent, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-bold text-slate-700">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={`${color} h-full`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const AboutHero = () => (
  <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
    <img src="/pagehero.jpg" className="absolute inset-0 w-full h-full object-cover scale-105" alt="Hero" />
    <div className="absolute inset-0 bg-red-950/50" />
    <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-center text-white px-4">
      <p className="italic text-white mb-4 font-serif text-xl">Working together for a better world</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About Humrahi Foundation</h1>
      <p className="text-lg opacity-90 max-w-2xl mx-auto">Empowering lives, restoring dignity, and building hope for children and communities.</p>
    </Motion.div>
  </section>
);

const OurWork = () => {
  const items = [
    { icon: <FiHeart />, title: "Compassion", text: "Driven by empathy and humanity." },
    { icon: <FiUsers />, title: "Community", text: "Building strong local networks." },
    { icon: <FiTarget />, title: "Impact", text: "Focused on measurable change." },
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Our Work</p>
          <h2 className="text-4xl font-bold">What We Do & Why It Matters</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[32px] shadow-xl shadow-slate-200/50 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 const members = [
    { name: "Krrish Kumar Mahato", role: "Board Member", gender: "men", img:"/teamimg1.jpeg" },
    { name: "Pappu Sunri", role: "Board Member", gender: "women", img:"/teamimg2.jpeg" },
    { name: "Ankit Mahato", role: "Board Member", gender: "men", img:"/teamimg3.jpeg" },
    { name: "Gaurav Saksena", role: "Board Member", gender: "men", img:"/teamimg4.jpeg" },
    { name: "Bijender", role: "Secretary", gender: "men", img:"/teamimg5.jpeg" },
    { name: "Meera Mahato", role: "Treasurer", gender: "women", img:"/teamimg6.jpeg" },
    { name: "Bimal Kumar Mahato", role: "Trustee", gender: "men", img:"/teamimg7.jpeg" },
    { name: "Reena Mahato", role: "Trustee", gender: "women", img:"/teamimg8.jpeg" },
  ];
const TeamSection = () => (
     <section id="team" className="py-28 bg-white relative overflow-hidden">

      {/* Background Soft Accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-dark">
              Our Expert Team Memebers
            </h2>
          </div>

      
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {members.map((member, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-white">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    {/* Social Icons */}
                    <div className="flex gap-4 translate-y-6 group-hover:translate-y-0 transition duration-500">
                      {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition"
                        >
                          <Icon size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-dark mb-1 group-hover:text-primary transition">
                    {member.name}
                  </h4>
                  <p className="text-sm text-slate-400 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </Motion.div>
          ))}

        </div>

      </div>

    </section>
);

const StartSomething = () => (
  <section className="relative py-40 overflow-hidden">
    <img src="/aboutbg.png" className="absolute inset-0 w-full h-full object-cover" alt="CTA" />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
      <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-4">Make an Impact</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Giving has never caused anyone to become poor</h2>
      <Link to="/donate#donate-form" className="inline-flex items-center gap-3 bg-primary px-10 py-5 rounded-full font-bold hover:bg-primary transition-all hover:scale-105 shadow-2xl">
        Start Donate Now <FiArrowRight size={22} />
      </Link>
    </div>
  </section>
);
export default About;