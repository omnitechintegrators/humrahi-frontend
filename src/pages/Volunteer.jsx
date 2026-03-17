import React, { useState } from "react";
import axios from "axios";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";

/* ================= VOLUNTEER PAGE ================= */

const Volunteer = () => {
  // ✅ STATE ADDED
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    message: "",
  });

  // ✅ SUBMIT FUNCTION ADDED

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ CONFIRMATION POPUP
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit your volunteer application?",
    );

    if (!confirmSubmit) return;

    try {
      await axios.post("http://localhost:5000/api/volunteers", formData);

      // ✅ SUCCESS POPUP
      alert("✅ Your volunteer application has been submitted successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        message: "",
      });
    } catch (error) {
      alert("❌ Failed to submit application. Please try again.");

      console.log(error);
    }
  };

  return (
    <main className="bg-cream overflow-hidden">
      {/* ================= HERO ================= */}

      <VolunteerHero />

      {/* ================= FORM SECTION ================= */}

      <section id="volunteer-form" className="py-28 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}

          <Motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-dark">
              Let’s join our community <br />
              to become a volunteer
            </h2>

            {/* IMAGE */}

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/joinus.jpeg"
                alt="Volunteer"
                className="w-full h-[340px] object-cover"
              />
            </div>

            {/* REQUIREMENTS */}

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Volunteer Requirements
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                Discover the qualities and commitment that help our volunteers
                create real impact in communities. By joining our mission, you
                become part of a compassionate network working together to bring
                positive change.ge.
              </p>

              <ul className="space-y-3">
                {[
                  "Passion for helping others and supporting community development",

                  "Willingness to dedicate time and effort for social causes",

                  "Ability to work collaboratively in a team environment",

                  "Positive attitude and strong sense of responsibility",
                  
                  "Respect for diversity, inclusion, and community values",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                      <FiCheck size={14} />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>

          {/* RIGHT FORM */}

          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-8">Apply as Volunteer</h3>

            {/* ✅ FORM CONNECTED */}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,

                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,

                    email: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,

                    phone: e.target.value,
                  })
                }
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      address: e.target.value,
                    })
                  }
                />

                <select
                  className="form-input"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      role: e.target.value,
                    })
                  }
                >
                  <option value="">Select Role</option>

                  <option>Doctor</option>

                  <option>Teacher</option>

                  <option>Social Worker</option>

                  <option>Volunteer</option>
                </select>
              </div>

              <textarea
                rows="5"
                placeholder="Type your message"
                className="form-input resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,

                    message: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="

                  w-full bg-primary text-white

                  py-4 rounded-full font-bold

                  hover:bg-primary

                  transition flex items-center

                  justify-center gap-2

                "
              >
                Send Request <FiArrowRight />
              </button>
            </form>
          </Motion.div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;

/* ================= HERO ================= */

const VolunteerHero = () => (
  <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
      className="absolute inset-0 w-full h-full object-cover scale-110"
      alt="Volunteer Hero"
    />

    <div className="absolute inset-0 bg-red-950/50" />

    <Motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative text-center text-white px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Become a Volunteer
      </h1>

      <p className="text-sm text-amber-400 font-bold uppercase">
        Home / Become a Volunteer
      </p>
    </Motion.div>
  </section>
);
