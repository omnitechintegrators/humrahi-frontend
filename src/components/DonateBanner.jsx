import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= DONATE BANNER ================= */

const DonateBanner = () => {
  const amounts = [500, 1000, 2000, 5000];

  const [selected, setSelected] = useState(20);
  const [custom, setCustom] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setCustom("");
  };

  const handleCustom = (e) => {
    setCustom(e.target.value);
    setSelected(null);
  };

  return (
    <section className="relative w-full h-[450px] md:h-[500px] overflow-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(/donationbg.jpg)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ================= FLOATING CARD ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">

        <Motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="
          absolute
          bg-white/85
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          border border-white/30
          w-full max-w-4xl
          px-6 md:px-10 py-8
          "
        >

          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* ================= LEFT ================= */}
            <div>

              <h2 className="text-2xl md:text-3xl font-bold text-dark">
                Make a Donation
              </h2>

              <p className="mt-2 text-slate text-sm max-w-sm">
                Join us in creating a brighter, more compassionate world.
              </p>

            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col gap-4">

              {/* Amount Buttons */}
              <div className="flex flex-wrap gap-3">

                {amounts.map((amt) => (
                  <Motion.button
                    key={amt}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSelect(amt)}
                    className={`px-5 py-2 rounded-full text-sm font-medium
                    border transition-all duration-300
                    ${
                      selected === amt
                        ? "bg-[#D9272B] text-white border-[#D9272B] shadow-md"
                        : "bg-white/70 text-dark border-grayLight hover:border-[#D9272B]"
                    }`}
                  >
                    ₹{amt}
                  </Motion.button>
                ))}

              </div>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* Custom Amount */}
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={custom}
                  onChange={handleCustom}
                  className="
                  flex-1 px-4 py-2 rounded-full
                  bg-white/70
                  border border-grayLight
                  backdrop-blur
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#D9272B]/40
                  "
                />

                {/* Donate Button */}
                <Link to="/donate#donation-form">
                <Motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow:
                      "0px 10px 25px rgba(217,39,43,0.4)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="
                  bg-[#D9272B]
                  text-white
                  px-7 py-2
                  rounded-full
                  font-medium
                  shadow-md
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  Donate Now →
                </Motion.button>
</Link>
              </div>

            </div>

          </div>

        </Motion.div>

      </div>

    </section>
  );
};

export default DonateBanner;