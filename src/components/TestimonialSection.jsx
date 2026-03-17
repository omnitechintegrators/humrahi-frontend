import { motion as Motion } from "framer-motion";
import {
  Quote,
  ArrowUp,
  ArrowDown,
  Star,
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";


/* ================= TESTIMONIAL SECTION ================= */

const TestimonialSection = () => {

  // ❌ REMOVE STATIC ARRAY
  // ✅ REPLACE WITH STATE

  const [testimonials, setTestimonials] = useState([]);

  const [active, setActive] = useState(0);


  // ✅ FETCH COMMENTS FROM BACKEND

const fetchTestimonials = useCallback(() => {

  axios
    .get("http://localhost:5000/api/comments")

    .then((res) => {

      if (res.data.success) {

        setTestimonials(res.data.comments);

      }

    })

    .catch(() => {

      console.log("Failed to load testimonials");

    });

}, []);



// ✅ FIXED useEffect (NO DIRECT setState call warning)

useEffect(() => {

  const timer = setTimeout(() => {

    fetchTestimonials();

  }, 0);

  return () => clearTimeout(timer);

}, [fetchTestimonials]);


  useEffect(() => {

    fetchTestimonials();

  }, [fetchTestimonials]);



  const next = () => {

    if (!testimonials.length) return;

    setActive((prev) =>

      (prev + 1) % testimonials.length

    );

  };


  const prev = () => {

    if (!testimonials.length) return;

    setActive((prev) =>

      (prev - 1 + testimonials.length) %

      testimonials.length

    );

  };

const averageRating = testimonials.length
  ? (
      testimonials.reduce(
        (sum, item) => sum + (item.rating || 0),
        0
      ) / testimonials.length
    ).toFixed(1)
  : "0.0";
  const current = testimonials[active] || {};


  return (
  <div>
    <section className="bg-cream py-24 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto">


        {/* ================= HEADER ================= */}

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between
          items-start md:items-end mb-14 gap-6"
        >

          {/* Title */}

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <span className="w-8 h-[2px] bg-primary" />

              <span className="text-primary italic font-medium text-lg">

                Client Feedback

              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-dark">

              Real feedback, Real results

            </h2>

          </div>


          {/* Rating (UNCHANGED DESIGN) */}

          <div className="flex items-center gap-4">

           <span className="text-6xl font-bold text-dark">
  {averageRating}
</span>

            <div className="flex flex-col">

              <div className="flex text-primary">

  {[...Array(5)].map((_, i) => (
  <Star
    key={i}
    size={18}
    fill={i < Math.round(averageRating) ? "currentColor" : "none"}
  />
))}

              </div>

              <div className="flex items-center gap-1 mt-1">

                <span className="text-orange-400 text-lg">

                  ★

                </span>

                <span className="font-bold text-dark">

                  Trustpilot

                </span>

              </div>

            </div>

          </div>

        </Motion.div>


        <hr className="border-grayLight mb-16" />


        {/* ================= CONTENT ================= */}

        {testimonials.length === 0 ? (

          <div className="text-center text-gray-400">

            No Reviews Yet

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">


            {/* ================= QUOTE ================= */}

            <Motion.div
              key={active}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6
              bg-white
              p-10 md:p-14
              rounded-[32px]
              shadow-md
              border border-grayLight
              relative"
            >

              <Quote
                className="text-grayLight mb-8"
                size={48}
                strokeWidth={1}
              />

              <p className="text-slate text-lg leading-relaxed mb-10 italic">

                “{current.comment}”

              </p>

              <div>

                <h4 className="text-2xl font-bold text-dark">

                  {current.name}

                </h4>

                <p className="text-slate mt-1 font-medium">

                  {current.userType}

                </p>

              </div>

            </Motion.div>



            {/* ================= IMAGE ================= */}

            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4 h-full"
            >

              <div className="bg-primary rounded-[32px]
              overflow-hidden h-[450px] shadow-xl">

                <img
                  src={`http://localhost:5000${current.photo}`}
                  alt={current.name}
                  className="w-full h-full object-cover
                  transition duration-500 hover:scale-110"
                />

              </div>

            </Motion.div>



            {/* ================= CONTROLS ================= */}

            <div className="lg:col-span-2 flex lg:flex-col
            items-center justify-center gap-6">

              <button
                onClick={prev}
                className="w-12 h-12 rounded-full
                bg-[#D9272B] text-white
                flex items-center justify-center
                hover:scale-110 transition shadow-lg"
              >

                <ArrowUp size={20} />

              </button>

              <div className="flex flex-col items-center gap-2">

                <span className="text-slate text-xs font-bold">

                  {active + 1} / {testimonials.length}

                </span>

                <div className="w-[1px] h-16 bg-grayLight hidden lg:block" />

              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full
                bg-[#D9272B] text-white
                flex items-center justify-center
                hover:scale-110 transition shadow-lg"
              >

                <ArrowDown size={20} />

              </button>

            </div>


          </div>

        )}

      </div>

    </section>

    <CommentForm/>
    </div>

  );

};

export default TestimonialSection;