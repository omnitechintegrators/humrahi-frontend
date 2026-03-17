import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================= CONTACT PAGE ================= */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <main className="bg-cream overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Contact Hero"
        />

        <div className="absolute inset-0 bg-red-950/50" />

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <p className="text-amber-400 uppercase tracking-widest text-sm mb-4 font-bold">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            We’d Love To Hear From You
          </h1>

          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions about donations, volunteering, or partnerships? Reach
            out to us anytime.
          </p>
        </Motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact-form" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE INFO */}
          <div className="space-y-10">
            <ContactCard
              icon={<PhoneCall size={24} />}
              title="Call Us"
              desc="+91 98765 43210"
            />

            <ContactCard
              icon={<Mail size={24} />}
              title="Email Us"
              desc="support@humrahi.org"
            />
            <ContactCard
              icon={<MapPin size={24} />}
              title="Visit Us"
              desc="Parameshwar Niwas, Gudiya jote, Matigara, Darjeeling, West Bengal-226025"
            />

            {/* SOCIAL ICONS SECTION */}
            <div>
              <h3 className="text-lg font-bold text-dark mb-4">Follow Us</h3>

              <div className="flex gap-4">
                <Link
                  to="https://www.facebook.com/share/1HbKUrHNd8/"
                  target="_blank"
                >
                  <SocialIcon icon={<Facebook size={18} />} />
                </Link>
                <Link
                  to="https://www.instagram.com/myhumrahi?igsh=YWZzazEycm1lOHgz&utm_source=qr"
                  target="_blank"
                >
                  <SocialIcon icon={<Instagram size={18} />} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <Motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-[40px] shadow-xl p-10 md:p-14"
          >
            <h2 className="text-3xl font-bold mb-8 text-dark">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
                className="form-input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="form-input"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-3xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none transition"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </Motion.div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3224.77542416399!2d88.42748017543309!3d26.728644476757278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQzJzQzLjEiTiA4OMKwMjUnNDguMiJF!5e1!3m2!1sen!2sin!4v1773399563465!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

    </main>
  );
};

export default Contact;

/* ================= REUSABLE CARD ================= */

const ContactCard = ({ icon, title, desc }) => (
  <Motion.div
    whileHover={{ y: -6 }}
    className="flex items-start gap-6 bg-cream p-8 rounded-3xl shadow-md hover:shadow-xl transition"
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>

    <div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-slate text-sm">{desc}</p>
    </div>
  </Motion.div>
);

/* ================= SOCIAL ICON ================= */

const SocialIcon = ({ icon }) => (
  <Motion.div
    whileHover={{ scale: 1.15 }}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-primary cursor-pointer hover:bg-primary hover:text-white transition"
  >
    {icon}
  </Motion.div>
);
