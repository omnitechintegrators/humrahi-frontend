import React, { useState, useEffect } from "react";
import axios from "axios";

import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlay, FiPlus, FiMinus } from "react-icons/fi";


/* ================= MAIN COMPONENT ================= */

const Gallery = () => {

  const [galleryData, setGalleryData] = useState([]);

  const [activeType, setActiveType] = useState("All");

  const [selectedItem, setSelectedItem] = useState(null);

  const [zoom, setZoom] = useState(1);

  const [loading, setLoading] = useState(true);



  /* ================= FETCH BACKEND DATA ================= */

  useEffect(() => {

    const loadGallery = async () => {

      try {

        const res = await axios.get(

          "http://localhost:5000/api/gallery/all"

        );

        // Format backend data for UI

const formatted = res.data.map(item => ({

id: item._id,

type: item.type,

url:

item.type === "video"

? `http://localhost:5000/uploads/gallery/videos/${item.video}`

: `http://localhost:5000/uploads/gallery/images/${item.image}`

}));

        setGalleryData(formatted);

      }

      catch (error) {

        console.error("Gallery fetch error:", error);

      }

      finally {

        setLoading(false);

      }

    };

    loadGallery();

  }, []);



  /* ================= TYPE FILTER ================= */

  const types = ["All", "image", "video"];



  const filteredItems = galleryData.filter(item =>

    activeType === "All" || item.type === activeType

  );



  /* ================= ZOOM ================= */

  const zoomIn = () => setZoom(z => Math.min(z + 0.2, 3));

  const zoomOut = () => setZoom(z => Math.max(z - 0.2, 1));



  /* ================= LOADING ================= */

  if (loading)

    return (

      <main className="bg-cream min-h-screen flex justify-center items-center">

        Loading Gallery...

      </main>

    );



  return (

    <main className="bg-cream overflow-hidden">


      {/* HERO */}

      <GalleryHero />



      {/* FILTER */}

      <section className="py-20 px-4">


        <div className="max-w-7xl mx-auto flex justify-end mb-14">


          <div className="flex gap-3">


            {types.map(type => (

              <button

                key={type}

                onClick={() => setActiveType(type)}

                className={`

                  px-4 py-2 rounded-full text-sm font-bold uppercase

                  transition

                  ${

                    activeType === type

                      ? "bg-amber-500 text-black"

                      : "bg-white border hover:bg-slate-50"

                  }

                `}

              >

                {type}

              </button>

            ))}


          </div>


        </div>



        {/* GALLERY GRID */}


        <div className="

        max-w-7xl mx-auto

        columns-1

        sm:columns-2

        md:columns-3

        lg:columns-4

        gap-6

        space-y-6

        ">


          <AnimatePresence>


            {filteredItems.map(item => (


              <Motion.div

                key={item.id}

                layout

                initial={{ opacity: 0, scale: 0.9 }}

                animate={{ opacity: 1, scale: 1 }}

                exit={{ opacity: 0 }}

                whileHover={{ scale: 1.03 }}

                transition={{ duration: 0.3 }}

                onClick={() => {

                  setSelectedItem(item);

                  setZoom(1);

                }}

                className="

                relative

                overflow-hidden

                rounded-2xl

                shadow-lg

                cursor-pointer

                group

                bg-black

                "

              >


                {/* IMAGE */}


                {item.type === "image" && (

                  <img

                    src={item.url}

                    alt="gallery"

                    className="

                    w-full

                    object-cover

                    transition

                    duration-500

                    group-hover:scale-110

                    "

                  />

                )}



                {/* VIDEO */}


                {item.type === "video" && (

                  <div className="relative">


                    <video

                      src={item.url}

                      muted

                      className="w-full object-cover"

                    />


                    <div className="

                    absolute inset-0

                    flex items-center justify-center

                    bg-black/40

                    ">

                      <FiPlay size={40} className="text-white" />

                    </div>


                  </div>

                )}



                <div className="

                absolute inset-0

                bg-black/20

                opacity-0

                group-hover:opacity-100

                transition

                "

                />


              </Motion.div>


            ))}


          </AnimatePresence>


        </div>


      </section>



      {/* MODAL */}


      <AnimatePresence>


        {selectedItem && (

          <Motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="

            fixed inset-0

            z-50

            bg-black/90

            flex items-center justify-center

            p-6

            "

          >


            <button

              onClick={() => setSelectedItem(null)}

              className="

              absolute top-6 right-6

              text-white text-3xl

              "

            >

              <FiX />

            </button>



            {/* ZOOM CONTROLS */}


            {selectedItem.type === "image" && (

              <div className="absolute top-6 left-6 flex gap-3">


                <button

                  onClick={zoomIn}

                  className="

                  bg-white/20

                  text-white

                  p-3

                  rounded-full

                  hover:bg-white/30

                  "

                >

                  <FiPlus />

                </button>


                <button

                  onClick={zoomOut}

                  className="

                  bg-white/20

                  text-white

                  p-3

                  rounded-full

                  hover:bg-white/30

                  "

                >

                  <FiMinus />

                </button>


              </div>

            )}



            {/* CONTENT */}


            <Motion.div

              initial={{ scale: 0.85 }}

              animate={{ scale: 1 }}

              className="

              max-w-6xl

              w-full

              max-h-[90vh]

              flex

              items-center

              justify-center

              overflow-hidden

              "

            >


              {selectedItem.type === "image" && (

                <Motion.img

                  src={selectedItem.url}

                  style={{ scale: zoom }}

                  className="

                  max-h-[90vh]

                  w-auto

                  rounded-xl

                  "

                />

              )}



              {selectedItem.type === "video" && (

                <video

                  src={selectedItem.url}

                  controls

                  autoPlay

                  className="

                  max-h-[90vh]

                  w-full

                  rounded-xl

                  "

                />

              )}


            </Motion.div>


          </Motion.div>

        )}


      </AnimatePresence>


    </main>

  );

};

export default Gallery;



/* ================= HERO COMPONENT ================= */

const GalleryHero = () => (

  <section className="

  relative

  h-[65vh]

  flex

  items-center

  justify-center

  overflow-hidden

  ">


    <img

      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"

      className="

      absolute inset-0

      w-full

      h-full

      object-cover

      scale-105

      "

      alt="Gallery Hero"

    />


    <div className="absolute inset-0 bg-red-950/50" />


    <div className="relative text-center text-white px-4">


      <p className="

      italic

      text-amber-400

      mb-4

      font-serif

      text-xl

      ">

        Our Memories & Impact

      </p>


      <h1 className="

      text-5xl

      md:text-7xl

      font-bold

      mb-6

      tracking-tight

      ">

        Humrahi Gallery

      </h1>


      <p className="

      text-lg

      opacity-90

      max-w-2xl

      mx-auto

      ">

        A visual journey of hope, compassion, and change.

      </p>


    </div>


  </section>

);