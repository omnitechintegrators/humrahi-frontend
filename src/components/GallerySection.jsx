import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

/* ================= GALLERY SECTION ================= */

const GallerySection = () => {
  /* Main Gallery Media */
  const media = [
    {
      type: "image",
      url: "/gallery2.jpg",
      size: "large",
    },
    {
      type: "image",
      url: "/gallery3.jpg",
      size: "small",
    },
    {
      type: "image",
      url: "/gallery5.jpg",
      size: "medium",
    },
    {
      type: "image",
      url: "/gallery4.jpg",
      size: "small",
    },
    {
      type: "image",
      url: "/gallery1.jpg",
      size: "large",
    },
    {
      type: "image",
      url: "/gallery6.jpg",
      size: "medium",
    },
    {
      type: "image",
      url: "/gallery7.jpg",
      size: "small",
    },
  ];

  /* Bottom Random Images */
  const bottomImages = [
    {
      url: "/gallery8.jpg",
      size: "medium",
    },
    {
      url: "/gallery9.jpeg",
      size: "small",
    },
    {
      url: "/gallery10.jpeg",
      size: "large",
    },
    {
      url: "/gallery11.jpeg",
      size: "small",
    },
  ];

  return (
    <section className="py-28 bg-cream overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1 flex flex-col"
        >

          {/* Tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-primary" />

            <span className="text-primary font-medium italic">
              Images Gallery
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Project We Have <br /> Done
          </h2>

          {/* Text */}
          <p className="text-slate mb-8 leading-relaxed">
            Explore our recent projects, photos, and videos showing how your
            support is changing lives across communities.
          </p>

          {/* Button */}
          <Link to="/gallery">
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white px-7 py-3 rounded-full
              flex items-center gap-2 shadow-md hover:shadow-xl transition"
            >
              View Full Gallery <FiArrowRight />
            </Motion.button>
          </Link>

          {/* ================= EXTRA RANDOM IMAGES ================= */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              mt-10
              grid grid-cols-2
              auto-rows-[120px]
              gap-4
              grid-flow-dense
            "
          >
            {bottomImages.map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`
                  relative overflow-hidden rounded-xl
                  shadow-md group
                  ${
                    item.size === "large"
                      ? "row-span-2 col-span-2"
                      : item.size === "medium"
                      ? "row-span-2 col-span-1"
                      : "row-span-1 col-span-1"
                  }
                `}
              >
                <img
                  src={item.url}
                  alt="Gallery extra"
                  className="w-full h-full object-cover
                  transition duration-500 group-hover:scale-110"
                />
              </Motion.div>
            ))}
          </Motion.div>

        </Motion.div>

        {/* ================= MEDIA GRID ================= */}
        <div
          className="
            lg:col-span-2
            grid grid-cols-2 md:grid-cols-3
            auto-rows-[180px]
            gap-6
            grid-flow-dense
          "
        >

          {media.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default GallerySection;

/* ================= SINGLE CARD ================= */

const GalleryCard = ({ item, index }) => {
  const sizeClass = {
    large: "row-span-2 col-span-2",
    medium: "row-span-2 col-span-1",
    small: "row-span-1 col-span-1",
  };

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`
        relative overflow-hidden rounded-2xl
        shadow-lg group bg-black
        ${sizeClass[item.size]}
      `}
    >

      {/* IMAGE */}
      {item.type === "image" && (
        <img
          src={item.url}
          alt="Gallery"
          className="w-full h-full object-cover
          transition duration-500 group-hover:scale-110"
        />
      )}

      {/* VIDEO */}
      {item.type === "video" && (
        <video
          src={item.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/10
        opacity-0 group-hover:opacity-100 transition"
      />

    </Motion.div>
  );
};