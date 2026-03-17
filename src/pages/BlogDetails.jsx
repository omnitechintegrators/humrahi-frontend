import React, {
  useState,
  useEffect,
  useCallback
} from "react";

import { useParams, Link } from "react-router-dom";

import axios from "axios";

import { motion as Motion } from "framer-motion";

import {
  FiCalendar,
  FiSearch
} from "react-icons/fi";


const API = "http://localhost:5000";


export default function BlogDetails() {


/* ================= PARAM ================= */

const { slug } = useParams();



/* ================= STATE ================= */

const [blog, setBlog] = useState(null);

const [latestBlogs, setLatestBlogs] = useState([]);

const [categories, setCategories] = useState([]);

const [keywords, setKeywords] = useState([]);

const [search, setSearch] = useState("");

const [loading, setLoading] = useState(true);



/* ================= LOAD BLOG ================= */

const loadBlog = useCallback(async () => {

try {

const res = await axios.get(

`${API}/api/blog/${slug}`

);

setBlog(res.data);

}

catch (err) {

console.error(err);

}

finally {

setLoading(false);

}

}, [slug]);



/* ================= LOAD SIDEBAR ================= */

const loadSidebar = useCallback(async () => {

try {

const res = await axios.get(

`${API}/api/blog/all`

);

const data = res.data || [];

setLatestBlogs(data.slice(0, 5));

setCategories(

[...new Set(

data.map(b => b.category)

)]

);

setKeywords(

[...new Set(

data.flatMap(b => b.keywords || [])

)]

);

}

catch (err) {

console.error(err);

}

}, []);



useEffect(() => {

loadBlog();

loadSidebar();

}, [loadBlog, loadSidebar]);



/* ================= LOADING ================= */

if (loading)

return (

<div className="text-center py-20">

Loading Blog...

</div>

);



if (!blog)

return (

<div className="text-center py-20">

Blog Not Found

</div>

);



/* ================= UI ================= */

return (

<main className="bg-cream overflow-hidden">


{/* HERO SAME AS BLOG */}


<BlogHero title={blog.title} />



<section className="py-24 px-4">


<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">


{/* BLOG CONTENT */}


<div className="lg:col-span-8">


<img

src={`${API}/uploads/blog/${blog.image}`}

className="w-full h-[400px] object-cover rounded-3xl mb-8"

alt="blog"

/>



<div className="flex gap-5 text-gray-500 mb-6">


<span className="flex gap-2">

<FiCalendar />

{new Date(blog.createdAt)

.toDateString()}

</span>


<span>

{blog.category}

</span>


</div>



<h1 className="text-4xl font-bold mb-6">

{blog.title}

</h1>



{/* RENDER EDITOR CONTENT */}


<div className="space-y-6 text-lg leading-relaxed">


{blog.content?.blocks?.map(

(block, i) => {

if (

block.type === "paragraph"

)

return (

<p key={i}>

{block.data.text}

</p>

);


if (

block.type === "header"

)

return (

<h2

key={i}

className="text-2xl font-bold"

>

{block.data.text}

</h2>

);


if (

block.type === "image"

)

return (

<img

key={i}

src={

block.data.file.url

}

className="rounded-xl"

/>

);


return null;

}

)}


</div>


</div>



{/* SIDEBAR */}


<div className="lg:col-span-4 space-y-10">


<SearchBox

search={search}

setSearch={setSearch}

/>


<CategoryBox

categories={categories}

/>


<LatestPosts

latestBlogs={latestBlogs}

/>


<TagBox

keywords={keywords}

/>


</div>


</div>


</section>


</main>

);

}



/* ================= HERO ================= */

const BlogHero = ({ title }) => (

<section className="relative h-[55vh] flex items-center justify-center overflow-hidden">


<img

src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"

className="absolute inset-0 w-full h-full object-cover"

/>


<div className="absolute inset-0 bg-red-950/50" />


<Motion.div

initial={{ opacity: 0 }}

animate={{ opacity: 1 }}

className="relative text-center text-white"

>


<h1 className="text-5xl font-bold">

{title}

</h1>


<p className="mt-3 text-amber-400">

Home / Blog Details

</p>


</Motion.div>


</section>

);



/* ================= SEARCH ================= */

const SearchBox = ({

search,

setSearch

}) => (

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



/* ================= CATEGORY ================= */

const CategoryBox = ({

categories

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Categories

</h4>


{categories.map(cat => (

<div

key={cat}

className="mb-2"

>

{cat}

</div>

))}


</div>

);



/* ================= LATEST ================= */

const LatestPosts = ({

latestBlogs

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Latest Blogs

</h4>


{latestBlogs.map(blog => (

<Link

key={blog._id}

to={`/blog/${blog.slug}`}

className="flex gap-3 mb-4"

>


<img

src={`${API}/uploads/blog/${blog.image}`}

className="w-16 h-16 object-cover rounded"

/>


<span>

{blog.title}

</span>


</Link>

))}


</div>

);



/* ================= TAG ================= */

const TagBox = ({

keywords

}) => (

<div className="bg-white p-6 rounded-3xl shadow">


<h4 className="font-bold mb-4">

Keywords

</h4>


{keywords.map(tag => (

<span

key={tag}

className="inline-block bg-gray-200 px-3 py-1 mr-2 mb-2"

>

{tag}

</span>

))}


</div>

); 