import React from 'react';
import { motion as Motion } from "framer-motion";
import { Heart, HandCoins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPurposeSection = () => {
  // Primary Color: #D9272B (Requested)
  // Secondary/Accent Color: #F5A623 (Yellow from image)
  // Dark Green: #145A4A (From image)

  return (
    <section className="relative w-full py-20 bg-[#F9FAFB] overflow-hidden">
      {/* Background Decorative Hands (Watermark effect) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <img 
          src="https://img.freepik.com/free-photo/diverse-people-refugee-camps_23-2151561479.jpg?semt=ais_wordcount_boost&w=740&q=80" 
          alt="bg-pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Image Collage */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* Main Yellow Circle Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#F5A623] rounded-full blur-2xl opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F5A623] rounded-full" />

          {/* Image 1: Top Left */}
          <Motion.div 
            className="absolute top-0 left-0 w-[45%] h-[55%] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl"
            whileHover={{ y: -10, scale: 1.02, zIndex: 30 }}
          >
            <img src="/foodimg1.png" alt="Child" className="w-full h-full object-cover" />
          </Motion.div>

          {/* Image 2: Top Right (The large one) */}
          <Motion.div 
            className="absolute top-4 right-0 w-[50%] h-[65%] rounded-[3rem] overflow-hidden border-4 border-white shadow-xl"
            whileHover={{ y: -10, scale: 1.02, zIndex: 30 }}
          >
            <img src="/foodimg2.png" alt="Group" className="w-full h-full object-cover" />
          </Motion.div>

          {/* Image 3: Bottom Left */}
          <Motion.div 
            className="absolute bottom-10 left-10 w-[35%] h-[40%] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl"
            whileHover={{ y: -10, scale: 1.02, zIndex: 30 }}
          >
            <img src="/foodimg3.png" alt="Portrait" className="w-full h-full object-cover" />
          </Motion.div>

          {/* Clients Card: Bottom Right */}
          <Motion.div 
            className="absolute bottom-0 right-4 w-[45%] bg-[#D9272B] p-6 rounded-[2.5rem] border-2 border-[#F5A623] shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-3 mb-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#D9272B] flex items-center justify-center text-white text-xs font-bold">+</div>
            </div>
            <h4 className="text-white text-3xl font-bold">+3.5 K</h4>
            <p className="text-gray-300 text-sm">Volunteers</p>
          </Motion.div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#F5A623]"></div>
            <span className="text-[#F5A623] font-medium italic text-lg">Get To Know Us</span>
          </div>

          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-[1.1] mb-6">
            Purpose of this Mission Is to<br/>
 <span className="text-[#D9272B]"> End Hunger and Feed Lives</span>
          </h2>

          <div className="mb-6">
            <p className="text-gray-800 font-bold text-sm tracking-wide uppercase">
              SINCE OUR <span className="text-[#F5A623]"> BEGINNING,</span> 
               <span className="text-gray-500"> WE HAVE PROVIDED</span> 
               <span className="text-[#F5A623]"> FREE FOOD</span> AND RATION SUPPORT TO 
               <span className="text-[#D9272B]"> THOUSANDS OF NEEDY FAMILIES,</span> ENSURING NO ONE SLEEPS HUNGRY.
            </p>
          </div>

          <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
          Humrahi Foundation is dedicated to fighting hunger by distributing free meals and essential ration kits to underprivileged families. Our food distribution drives bring relief, dignity, and hope to people struggling for their daily survival.
          </p>

          {/* Be a Hero / Help Children Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Motion.div 
              className="flex items-center gap-4 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div className="w-14 h-14 bg-[#D9272B] rounded-2xl flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <Heart className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900">Feed the Hungry</h5>
                <p className="text-gray-500 text-sm">Provide Meals Today</p>
              </div>
            </Motion.div>

            <Motion.div 
              className="flex items-center gap-4 group cursor-pointer border-l md:pl-6 border-gray-200"
              whileHover={{ x: 5 }}
            >
              <div className="w-14 h-14 bg-[#F5A623] rounded-2xl flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <HandCoins className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900">Support Food Mission</h5>
                <p className="text-gray-500 text-sm">with Donations</p>
              </div>
            </Motion.div>
          </div>

          {/* Donation Progress Bar */}
          <div className="space-y-4 mb-10">
            <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-visible">
              <Motion.div 
                className="absolute top-0 left-0 h-full bg-[#F5A623] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "55%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <Motion.div 
                className="absolute top-[-30px] left-[55%] -translate-x-1/2 bg-[#D9272B] text-white text-[10px] px-2 py-1 rounded"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                55%
              </Motion.div>
            </div>
            <div className="flex justify-between text-sm font-bold text-gray-900">
              <p>Meals Provided - <span className="text-gray-400 font-normal">5,50,000 +</span></p>
              <p>Goal - <span className="text-gray-400 font-normal">1,00,000 +</span></p>
            </div>
          </div>

          {/* More About Us Button */}
            <Link to="/about">
          <Motion.button
            className="w-fit flex items-center gap-2 bg-[#D9272B] hover:bg-[#D9272B] text-white px-8 py-4 rounded-full font-bold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Us <ArrowRight size={18} />
          </Motion.button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPurposeSection;