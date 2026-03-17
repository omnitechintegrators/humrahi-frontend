import React from 'react';
import { motion as Motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const CardData = [
  {
    id: 1,
    title: "Food Distribution",
    description: "We provide free meals and ration support to poor and needy families, ensuring no one sleeps hungry and every life is treated with dignity and care.",
    image: "/missionimg1.png",
  },
  {
    id: 2,
    title: "Education Support",
    description: "We help children and individuals access education by providing learning support, resources, and opportunities to build a brighter future.",
    image: "/missionimg2.png",
  },
  {
    id: 3,
    title: "Health Care",
    description: "We organize free health camps, provide medical assistance, and ensure healthcare access for underprivileged communities.",
    image: "/missionimg3.png",
  },
  {
    id: 4,
    title: "Blood Donation",
    description: "We conduct blood donation drives to help patients in need and save lives by ensuring timely blood availability during emergencies.",
    image: "/missionimg4.png",
  }
];

const MissionSection = () => {
  return (
    <section id="mission" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1.5px] w-10 bg-[#D9272B]"></div>
            <span className="italic text-[#D9272B] text-xl font-medium" style={{ fontFamily: 'serif' }}>
              How We Make a Difference in
            </span>
            <div className="h-[1.5px] w-10 bg-[#F5A623]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Support Our Mission and<br /> Change Lives
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CardData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  return (
    <Motion.div
      className="relative group mb-12"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Main Card Box */}
      <Motion.div
        className="relative z-10 p-8 pt-12 pb-20 rounded-[2.5rem] border border-gray-100 shadow-sm text-center h-full flex flex-col items-center overflow-hidden"
        variants={{
          rest: { 
            backgroundColor: "#FFFFFF", 
            y: 0,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.02)"
          },
          hover: { 
            backgroundColor: "#D9272B", 
            y: -12,
            boxShadow: "0px 25px 50px -12px rgba(217, 39, 43, 0.35)"
          }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Motion.h3 
          className="text-2xl font-bold mb-4 z-10"
          variants={{
            rest: { color: "#1F2937" },
            hover: { color: "#FFFFFF" }
          }}
        >
          {data.title}
        </Motion.h3>

        <Motion.p 
          className="text-base leading-relaxed mb-4 z-10"
          variants={{
            rest: { color: "#6B7280" },
            hover: { color: "#ffffffcc" } 
          }}
        >
          {data.description}
        </Motion.p>
        
        {/* Background Watermark SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
           <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
        </div>
      </Motion.div>

      {/* Floating Image and Arrow Container */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] z-20 flex flex-col items-center">
        
        {/* Circular Profile Image */}
        <Motion.div 
          className="relative w-24 h-24 rounded-full border-[6px] border-white overflow-hidden shadow-lg bg-gray-100"
          variants={{
            rest: { scale: 1, borderColor: "#FFFFFF" },
            hover: { scale: 1.1, borderColor: "#FFFFFF" }
          }}
        >
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
        </Motion.div>

        {/* Action Button */}
        <Motion.button
          className="mt-[-20px] w-12 h-12 rounded-full flex items-center justify-center shadow-xl relative z-30"
          variants={{
            rest: { 
              backgroundColor: "#D9272B", // Deep Green
              color: "#FFFFFF",
              rotate: 0
            },
            hover: { 
              backgroundColor: "#F5A623", // Accent Gold
              color: "#FFFFFF",
              rotate: -45,
              scale: 1.1
            }
          }}
        >
          <ArrowRight size={22} strokeWidth={3} />
        </Motion.button>
      </div>
    </Motion.div>
  );
};

export default MissionSection;