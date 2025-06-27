import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

//useEffect = re-render tapi better guna untuk certain data for render kat DOM (use dependencies [])
//useEffect good for fetch data
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {!blogs && !isPending && <div>No blogs to display</div>}
    </div>
  );
};

export default Home;
