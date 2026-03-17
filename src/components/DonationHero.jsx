import React from 'react';
import { ShieldCheck, HeartHandshake, PhoneCall, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationHero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-16 font-sans overflow-hidden bg-white">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
        <div className="w-64 h-64 bg-emerald-900 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Composition */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="relative z-10 w-4/5 aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="/eduimg1.jpg" 
              alt="Child eating" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Bottom Image */}
          <div className="absolute -bottom-10 -right-4 z-20 w-3/5 aspect-[4/3] rounded-[40px] overflow-hidden border-8 border-white shadow-xl grayscale">
            <img 
              src="/eduimg2.jpg" 
              alt="Child in village" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Badge */}
          <div className="absolute top-10 right-0 z-30 bg-[#D9272B] text-white p-6 rounded-3xl shadow-lg flex flex-col items-center">
             <div className="flex -space-x-2 mb-3">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-[#D9272B]" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#D9272B] bg-orange-500 flex items-center justify-center text-[10px]">+</div>
             </div>
             <h4 className="text-2xl font-bold">+5 K</h4>
             <p className="text-xs opacity-80">Students Supported</p>
          </div>
          
          {/* Decorative Outline Frame */}
          <div className="absolute top-12 left-12 -z-10 w-full h-full border-2 border-orange-200 rounded-[40px]"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
             <div className="w-8 h-[2px] bg-primary"></div>
             <span className="text-primary font-serif italic text-lg">Supporting Education for All</span>
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
            Support Our Mission and <br /> Make a Difference
          </h1>

          <p className="text-slate-500 leading-relaxed max-w-lg">
   Education is the foundation of a better life. Humrahi Foundation provides free education, learning resources, and skill development programs to empower children, youth, and individuals to become independent and successful.

We believe education and skills can break the cycle of poverty and create lasting change.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-tl-[40px] rounded-br-[40px] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#D9272B]/10 flex items-center justify-center text-[#D9272B] border-2 border-[#D9272B]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h5 className="font-bold text-lg text-slate-800">Free Education Support</h5>
                <p className="text-sm text-slate-400">Providing free learning opportunities, study materials, and guidance to those who cannot afford education.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-tr-[40px] rounded-bl-[40px] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-orange-400/10 flex items-center justify-center text-orange-500 border-2 border-orange-400">
                <HeartHandshake size={28} />
              </div>
              <div>
                <h5 className="font-bold text-lg text-slate-800">Start Donating</h5>
                <p className="text-sm text-slate-400">Helping individuals learn valuable skills to improve their confidence, career opportunities, and future.</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 italic border-t pt-4">
           
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <Link to="/contact#contact-form">
              <button className="bg-[#D9272B] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-orange-400 transition-colors shadow-lg">
                Connect Now <ArrowUpRight size={18} />
              </button>
            </Link>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-white">
                <PhoneCall size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Call Us Any Time</p>
                <p className="font-bold text-slate-800 text-lg">+91 80018 80016  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHero;