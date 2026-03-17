import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  FiCalendar,
  FiMessageCircle,
  FiUser,
  FiShare2,
} from "react-icons/fi";

/* ================= DUMMY BLOG DATA ================= */

const blogData = [
  {
    id: "1",
    title: "How Clean Water Changed a Village in Kenya",
    author: "Phil Martinez",
    date: "October 15, 2025",
    comments: 25,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400",
    content: `
We live in a world where kindness is traded by barter. Where little help needs something in exchange...

I have been a victim of deception due to kindness offered to me...

There is a great difference between an offer from the heart and an intentional one.
    `,
  },
];

/* ================= MAIN ================= */

const SingleBlog = () => {
  const { id } = useParams();

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return <div className="py-40 text-center">Post Not Found</div>;
  }

  return (
    <main className="bg-cream overflow-hidden">

      {/* HERO */}
      <BlogHero />

      {/* CONTENT */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {blog.title}
          </h1>

          {/* META */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-8">

            <span className="flex items-center gap-1">
              <FiUser /> {blog.author}
            </span>

            <span className="flex items-center gap-1">
              <FiCalendar /> {blog.date}
            </span>

            <span className="flex items-center gap-1">
              <FiMessageCircle /> {blog.comments} Comments
            </span>

          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden mb-10">

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[420px] object-cover"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-6 text-slate-600 leading-relaxed">

            {blog.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}

          </div>

          {/* GOALS */}
          <div className="mt-12">

            <h3 className="text-2xl font-bold mb-5">Our Goal</h3>

            <div className="flex flex-wrap gap-4">

              {[
                "Empower Through Charity",
                "Compassion in Action",
                "Giving Hope",
                "Healing Communities",
                "Every Act Counts",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* QUOTE */}
          <blockquote className="mt-12 border-l-4 border-emerald-600 pl-6 italic text-slate-600">

            “Stay informed about our upcoming event campaigns and
            support our causes.”

            <span className="block mt-3 font-bold text-slate-800">
              — Angela Maria
            </span>

          </blockquote>

          {/* IMAGE GRID */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba02c89b2a"
              className="rounded-2xl object-cover"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              className="rounded-2xl object-cover"
              alt=""
            />

          </div>

          {/* TAGS & SHARE */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t pt-8">

            {/* TAGS */}
            <div className="flex gap-3 flex-wrap">

              {["Water", "Health", "Charity", "Community"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-slate-100 rounded-full text-sm font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}

            </div>

            {/* SHARE */}
            <button className="flex items-center gap-2 text-emerald-600 font-bold">
              <FiShare2 /> Share
            </button>

          </div>

          {/* COMMENTS */}
          <CommentsSection />

        </div>
      </section>

    </main>
  );
};

export default SingleBlog;

/* ================= HERO ================= */

const BlogHero = () => (
  <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">

    <img
      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
      className="absolute inset-0 w-full h-full object-cover scale-110"
      alt="Hero"
    />

    <div className="absolute inset-0 bg-red-950/50" />

    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative text-center text-white px-4"
    >

      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Single Post
      </h1>

      <p className="text-sm text-amber-400 font-bold uppercase">
        Home / Single Post
      </p>

    </Motion.div>

  </section>
);

/* ================= COMMENTS ================= */

const CommentsSection = () => (
  <div className="mt-20">

    <h3 className="text-2xl font-bold mb-8">
      Comments (03)
    </h3>

    <div className="space-y-8">

      {comments.map((c, i) => (
        <div key={i} className="flex gap-5">

          <img
            src={c.avatar}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />

          <div className="flex-1">

            <div className="flex justify-between">

              <div>
                <h5 className="font-bold">{c.name}</h5>
                <p className="text-xs text-slate-400">
                  {c.date}
                </p>
              </div>

              <button className="text-emerald-600 text-sm font-bold">
                Reply
              </button>

            </div>

            <p className="mt-3 text-slate-600 text-sm">
              {c.text}
            </p>

          </div>

        </div>
      ))}

    </div>

    {/* FORM */}
    <CommentForm />

  </div>
);

/* ================= COMMENT DATA ================= */

const comments = [
  {
    name: "Mariya Dcosta",
    date: "Nov 12, 2022",
    text:
      "Provide regular updates to donors and supporters...",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Andrew Dian",
    date: "Nov 12, 2022",
    text:
      "Use metrics and feedback to assess project success...",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Josefa Donald",
    date: "Nov 12, 2022",
    text:
      "Mauris non dignissim purus, ac commodo diam...",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

/* ================= FORM ================= */

const CommentForm = () => (
  <div className="mt-16">

    <h3 className="text-2xl font-bold mb-6">
      Leave a Reply
    </h3>

    <form className="space-y-6">

      <div className="grid md:grid-cols-2 gap-6">

        <input
          placeholder="Your Name"
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-600 outline-none"
        />

        <input
          placeholder="Email Address"
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-600 outline-none"
        />

      </div>

      <textarea
        rows="6"
        placeholder="Comment..."
        className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-600 outline-none"
      />

      <button
        type="submit"
        className="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition"
      >
        Post Your Comment →
      </button>

    </form>

  </div>
);
