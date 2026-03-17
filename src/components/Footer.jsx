import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* ================= FOOTER ================= */

const Footer = () => {
  return (
    <footer className="relative bg-[#666666] text-white pt-32">

      {/* ================= FLOATING TOP BAR ================= */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2
      bg-white text-dark shadow-xl rounded-full
      w-[90%] max-w-6xl px-10 py-6 flex flex-wrap
      justify-between items-center gap-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logob.png" alt="Donar Logo" className="h-10 w-auto" />
        </div>

        {/* Info */}
        <InfoItem
          icon={<FiPhone />}
          label="Call On"
          value="+91 80018 80016"
        />

        <InfoItem
          icon={<FiMail />}
          label="Send Email"
          value="humrahi2022@gmail.com"
        />

        <InfoItem
          icon={<FiMapPin />}
          label="Address"
          value="Parameshwar Niwas, Gudiya jote, Matigara, Darjeeling, West Bengal"
        />

      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 grid
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-12 pb-20">

        {/* LINKS */}
        <FooterLinks />

        {/* POSTS */}
        <FooterPosts />

        {/* CAUSES */}
        <FooterCauses />

        {/* NEWSLETTER */}
        <FooterNewsletter />

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#2e2e2e] py-5 text-center text-sm">

        © Copyright {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">
         Humrahi Foundation
        </span>{" "}
        All Rights Reserved.

      </div>

      {/* ================= SCROLL TOP ================= */}
      <ScrollTop />

    </footer>
  );
};

export default Footer;

/* ================= INFO ITEM ================= */

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 bg-primary rounded-full
      flex items-center justify-center text-white">
        {icon}
      </div>

      <div className="text-sm">
        <p className="text-gray-400">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
};

/* ================= QUICK LINKS ================= */

const FooterLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>

      <h4 className="font-bold text-lg mb-5 relative">
        Pages
        <span className="block w-8 h-[2px] bg-primary mt-2" />
      </h4>

    <ul className="space-y-3 text-gray-300">
  {links.map((item, i) => (
    <li key={i}>
      <Link
        to={item.path}
        className="flex items-center gap-2 hover:text-primary transition cursor-pointer"
      >
        <span className="text-primary">›</span>
        {item.name}
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
};

/* ================= POSTS ================= */

const FooterPosts = () => {
  return (
    <div>

      <h4 className="font-bold text-lg mb-5 relative">
        Recent Posts
        <span className="block w-8 h-[2px] bg-primary mt-2" />
      </h4>

      <div className="space-y-5">

        <PostItem
          img="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
          date="20 April, 2025"
          title="Inspiring Stories from the Field Reality"
          url="blog"
        />

        <PostItem
          img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          date="6 April, 2025"
          title="The Surfing Man Will Blow Your Mind"
        />
        <PostItem
          img="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
          date="20 April, 2025"
          title="Inspiring Stories from the Field Reality"
        />

      </div>

    </div>
  );
};

const PostItem = ({ img, date, title, url,}) => {
  return (
    <div className="flex gap-3">
<Link to={url} target="_blank" rel="noopener noreferrer">
      <img
        src={img}
        alt=""
        className="w-16 h-16 rounded-xl object-cover"
      />

      <div className="text-sm">

        <p className="text-gray-400">
          {date}
        </p>

        <p className="hover:text-primary transition cursor-pointer">
          {title}
        </p>

      </div>
</Link>
    </div>
  );
};

/* ================= CAUSES ================= */
const FooterCauses = () => {
  const causes = [
    { name: "Donate Here", path: "/donate#donation-form" },
    { name: "Become a Volunteer", path: "/volunteer#volunteer-form" },
    { name: "Connect Us", path: "/contact#contact-form" },
    { name: "Founder", path: "/about#founder-sec" },
    { name: "Our Team", path: "/about#team" },
    { name: "Our Mission", path: "/about#mission" },
  ];

  return (
    <div>
      <h4 className="font-bold text-lg mb-5 relative">
        Quick Links
        <span className="block w-8 h-[2px] bg-primary mt-2" />
      </h4>

      <ul className="space-y-3 text-gray-300">
        {causes.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="flex items-center gap-2 hover:text-primary transition cursor-pointer"
            >
              <span className="text-primary">›</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



/* ================= NEWSLETTER ================= */

const FooterNewsletter = () => {
  return (
    <div>

      {/* Social */}
      <div className="flex gap-3">

        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon icon={<FaFacebookF />} />
        </Link>
        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon icon={<FaInstagram />} />
        </Link>
      </div>
 <ul className="space-y-3 text-gray-300 mt-6">
          <li
            className="flex items-center gap-2
            hover:text-primary transition cursor-pointer"
          >
            <span className="text-primary">›</span>
            Privacy Policy
          </li>
          <li
            className="flex items-center gap-2
            hover:text-primary transition cursor-pointer"
          >
            <span className="text-primary">›</span>
         Terms & Conditions
          </li>
      </ul>
    </div>
  );
};

/* ================= SOCIAL ================= */

const SocialIcon = ({ icon }) => {
  return (
    <div
      className="w-9 h-9 rounded-full bg-white text-dark
      flex items-center justify-center
      hover:bg-primary hover:text-white
      transition cursor-pointer"
    >
      {icon}
    </div>
  );
};

/* ================= SCROLL TOP ================= */

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6
      w-12 h-12 rounded-full bg-primary text-white
      flex items-center justify-center
      shadow-xl hover:scale-110 transition z-50"
    >
      <FiArrowUp />
    </button>
  );
};