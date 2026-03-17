import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  FiSearch,
  FiMessageCircle,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const API = "http://localhost:5000";


/* ================= MAIN COMPONENT Section ================= */

export default function Blog() {


/* ================= STATE of Blogs================= */

const [blogs, setBlogs] = useState([]);

const [filteredBlogs, setFilteredBlogs] = useState([]);

const [latestBlogs, setLatestBlogs] = useState([]);

const [search, setSearch] = useState("");

const [selectedCategory, setSelectedCategory] = useState("");

const [selectedKeyword, setSelectedKeyword] = useState("");

const [loading, setLoading] = useState(true);



/* ================= LOAD BLOGS ================= */

const loadBlogs = useCallback(async () => {

try {

const res = await axios.get(`${API}/api/blog/all`);

const data = Array.isArray(res.data) ? res.data : [];

setBlogs(data);

setFilteredBlogs(data);


/* fallback latest */

setLatestBlogs(data.slice(0, 5));

}

catch (error) {

console.error(error);

setBlogs([]);

setFilteredBlogs([]);

}

finally {

setLoading(false);

}

}, []);



useEffect(() => {

loadBlogs();

}, [loadBlogs]);



/* ================= SEARCH FILTER ================= */

useEffect(() => {

let result = [...blogs];


if (search)

result = result.filter(blog =>

blog?.title?.toLowerCase()

.includes(search.toLowerCase())

);


if (selectedCategory)

result = result.filter(blog =>

blog?.category === selectedCategory

);


if (selectedKeyword)

result = result.filter(blog =>

blog?.keywords?.includes(selectedKeyword)

);


setFilteredBlogs(result);

}, [search, selectedCategory, selectedKeyword, blogs]);



/* ================= UNIQUE LIST ================= */

const categories = [

...new Set(

blogs

.map(b => b?.category)

.filter(Boolean)

)

];


const keywords = [

...new Set(

blogs

.flatMap(b => b?.keywords || [])

.filter(Boolean)

)

];



/* ================= LOADING Design ================= */

if (loading)

return (

<div className="text-center py-20">

Loading Blogs...

</div>

);



/* ================= UI Design ================= */

return (

<main className="bg-cream overflow-hidden">


<BlogHero />


<section className="py-24 px-4">


<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">


{/* BLOG LIST */}


<div className="lg:col-span-8 space-y-14">


{filteredBlogs.length === 0 && (

<div>No blogs found</div>

)}


{filteredBlogs.map(blog => (

<BlogCard

key={blog._id}

blog={blog}

/>

))}


<Pagination />


</div>



{/* SIDEBAR Component */}


<div className="lg:col-span-4 space-y-10">


<SearchBox

search={search}

setSearch={setSearch}

/>


<CategoryBox

categories={categories}

setSelectedCategory={setSelectedCategory}

/>


<LatestPosts

latestBlogs={latestBlogs}

/>


<TagBox

keywords={keywords}

setSelectedKeyword={setSelectedKeyword}

/>


</div>


</div>


</section>


</main>

);

}



/* ================= HERO Section================= */

const BlogHero = () => (

<section className="relative h-[55vh] flex items-center justify-center overflow-hidden">


<img

src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"

className="absolute inset-0 w-full h-full object-cover"

alt="blog"

/>


<div className="absolute inset-0 bg-red-950/50" />


<h1 className="relative text-white text-6xl font-bold">

Blog Standard

</h1>


</section>

);



/* ================= BLOG CARD Componenet  ================= */

const BlogCard = ({ blog }) => (

<Motion.article

initial={{ opacity: 0, y: 40 }}

whileInView={{ opacity: 1, y: 0 }}

className="bg-white rounded-3xl shadow-lg overflow-hidden"

>


<img

src={`${API}/uploads/blog/${blog?.image}`}

onError={(e)=>

e.target.src="https://via.placeholder.com/600x400"

}

className="w-full h-[320px] object-cover"

alt="blog"

/>


<div className="p-8">


<div className="flex gap-5 text-sm text-gray-500">


<span className="flex gap-1">

<FiCalendar />

{blog?.createdAt ?

new Date(blog.createdAt)

.toDateString()

:

""}

</span>


<span>

{blog?.category}

</span>


<span className="flex gap-1">

<FiMessageCircle />

0

</span>


</div>


<h2 className="text-2xl font-bold mt-4">


<Link to={`/blog/${blog?.slug}`}>

{blog?.title}

</Link>


</h2>


<p className="text-gray-500 mt-3">

{blog?.excerpt}

</p>


<Link

to={`/blog/${blog?.slug}`}

className="text-primary font-bold mt-4 inline-block"

>

Read More →

</Link>


</div>


</Motion.article>

);



/* ================= SEARCH Fuction ================= */

const SearchBox = ({ search, setSearch }) => (

<div className="bg-white p-6 rounded-3xl shadow">


<input

value={search}

onChange={e =>

setSearch(e.target.value)

}

placeholder="Search"

className="w-full border p-3 rounded-full"

/>


</div>

);



/* ================= CATEGORY Fuction ================= */

const CategoryBox = ({

categories = [],

setSelectedCategory

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Categories

</h4>


{categories.map(cat => (

<div

key={cat}

onClick={() =>

setSelectedCategory(cat)

}

className="cursor-pointer mb-2 hover:text-primary"

>

{cat}

</div>

))}


</div>

);



/* ================= LATEST Posts================= */

const LatestPosts = ({

latestBlogs = []

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Latest Blogs

</h4>


{latestBlogs.length === 0 && (

<div>No latest blogs</div>

)}


{latestBlogs.map(blog => (

<Link

key={blog._id}

to={`/blog/${blog.slug}`}

className="flex gap-3 mb-4"

>


<img

src={`${API}/uploads/blog/${blog?.image}`}

onError={(e)=>

e.target.src="https://via.placeholder.com/100"

}

className="w-16 h-16 object-cover"

alt="blog"

/>


<span>

{blog?.title}

</span>


</Link>

))}


</div>

);



/* ================= TAG Box================= */

const TagBox = ({

keywords = [],

setSelectedKeyword

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Keywords

</h4>


{keywords.map(tag => (

<span

key={tag}

onClick={() =>

setSelectedKeyword(tag)

}

className="inline-block bg-gray-200 px-3 py-1 mr-2 mb-2 cursor-pointer"

>

{tag}

</span>

))}


</div>

);



/* ================= PAGINATION  Section================= */

const Pagination = () => (

<div className="flex justify-center gap-3">


<button>

<FiChevronLeft />

</button>


<button>

1

</button>


<button>

<FiChevronRight />

</button>


</div>

);