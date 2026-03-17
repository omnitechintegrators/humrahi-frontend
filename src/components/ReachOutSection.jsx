import { motion as Motion } from "framer-motion";
import { Check } from "lucide-react";

/* ================= REACH OUT SECTION ================= */

const ReachOutSection = () => {
  const checklist = [
    { text: "Free Health Checkup Camps", color: "#646464" },
    { text: "Free Blood Donation Drives", color: "#D9272B" },
    { text: "Free Medicines Distribution", color: "#F5A623" },
    { text: "Free Emergency Medical Support", color: "#1F2937" },
  ];

  return (
    <section className="w-full py-24 bg-[#FDFDFD] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col">

          {/* Tag */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-[#F5A623]" />

            <span className="text-[#F5A623] font-medium italic text-lg tracking-wide">
Saving Lives Through Health Support and Blood Donation
            </span>
          </Motion.div>

          {/* Title */}
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
          >
            Be the Reason Someone 

            <span className="text-[#D9272B]"> Gets  <br />a Second Chance at Life</span>
          </Motion.h2>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
       Every drop of blood and every medical camp brings hope to someone in need. Humrahi Foundation works tirelessly to organize blood donation drives and healthcare camps to serve humanity and save lives.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Small Image */}
            <Motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-[2rem] overflow-hidden h-48 w-full
              shadow-lg border-2 border-white"
            >
              <img
                src="/sample1.png"
                alt="Child portrait"
                className="w-full h-full object-cover"
              />
            </Motion.div>

            {/* Checklist */}
            <div className="space-y-4">

              <h4 className="font-bold text-gray-900 text-lg mb-2">
            Providing Essential Health Services for All
              </h4>

              {checklist.map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  {/* Icon */}
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center
                    transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <Check
                      size={14}
                      className="text-white"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Text */}
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </span>
                </Motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGES ================= */}
        <div className="relative flex gap-6 items-center justify-center lg:justify-end mt-12 lg:mt-0">

          {/* First Image */}
          <div className="relative">

            <Motion.div
              whileHover={{ y: -15 }}
              className="w-56 md:w-64 h-[350px] md:h-[400px]
              rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl"
            >
              <img
                src="/sample3.jpeg"
                alt="Mother and child"
                className="w-full h-full object-cover"
              />
            </Motion.div>

            {/* Experience Card */}
            <Motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6
              bg-[#D9272B] hover:bg-[#D9272B]
              p-6 rounded-[2rem] text-white shadow-2xl
              min-w-[160px] z-10 transition"
            >
              <h3 className="text-3xl font-bold flex items-center gap-1">
                25 <span className="text-[#F5A623]">+</span>
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider">
                Years of Experience
              </p>
            </Motion.div>

          </div>

          {/* Second Image */}
          <Motion.div
            whileHover={{ y: -15 }}
            className="w-56 md:w-64 h-[400px] md:h-[450px]
            rounded-[3rem] overflow-hidden border-4 border-white
            shadow-2xl mt-12"
          >
            <img
              src="/sample2.jpeg"
              alt="Two children"
              className="w-full h-full object-cover"
            />
          </Motion.div>

        </div>

      </div>
    </section>
  );
};

export default ReachOutSection;